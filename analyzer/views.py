from django.shortcuts import render
from django.http import JsonResponse
from .forms import VideoURLForm

def analyze_video(request):
    if request.method == "POST":
        form = VideoURLForm(request.POST)
        if form.is_valid():
            video_url = form.cleaned_data["video_url"]
            # Placeholder for analysis logic
            # Use an API call or internal function to process video URL here
            analysis_result = {"message": "Analysis completed", "data": video_url}  # Replace with real result
            return JsonResponse(analysis_result)
    else:
        form = VideoURLForm()
    return render(request, "analyzer/index.html", {"form": form})
