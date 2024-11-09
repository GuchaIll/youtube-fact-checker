import os
import yt_dlp
import openai
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Configure your OpenAI API keys
openai.api_key = 'sk-g2TdeZuRxELUhFfNqAm-vQ'
openai.base_url = 'https://nova-litellm-proxy.onrender.com'

# Function to download YouTube audio using yt-dlp
def download_audio(url):
    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192',
        }],
        'outtmpl': 'audio.mp3',
        'quiet': True
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])
    return 'audio.mp3'

# Transcription using OpenAI Whisper
def transcribe_audio(audio_file_path):
    with open(audio_file_path, "rb") as audio_file:
        transcript = openai.Audio.transcribe("whisper-1", audio_file)
    return transcript['text']

# Function to extract fact-checkable statements using OpenAI API
def extract_fact_checkable_statements(transcript):
    prompt = (
        "Extract fact-checkable statements from this transcript:\n\n" + transcript + 
        "\n\nReturn each statement as a new line."
    )
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=150,
        temperature=0.3,
    )
    statements = response.choices[0].text.strip().split("\n")
    return statements

# Function to fact-check statements using Perplexity (Mockup)
def fact_check_statements(statements):
    fact_checks = []
    for statement in statements:
        # Make a Perplexity API call to get fact-checks (Replace this with actual API call)
        # Mockup of fact-checked result
        response = {
            "statement": statement,
            "source": "Example News Source",
            "url": "https://example.com/article",
            "bias": "center"
        }
        fact_checks.append(response)
    return fact_checks

@csrf_exempt
@api_view(['POST'])
def process_video(request):
    data = request.data
    video_url = data.get("video_url")
    if not video_url:
        return Response({"error": "Video URL not provided"}, status=400)

    try:
        # Step 1: Download audio from YouTube
        audio_path = download_audio(video_url)

        # Step 2: Transcribe audio using Whisper
        transcript = transcribe_audio(audio_path)
        os.remove(audio_path)  # Clean up audio file after transcription

        # Step 3: Extract fact-checkable statements
        statements = extract_fact_checkable_statements(transcript)

        # Step 4: Fact-check each statement using Perplexity
        fact_checks = fact_check_statements(statements)

        # Return the results as JSON
        return JsonResponse({"fact_checks": fact_checks})

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
