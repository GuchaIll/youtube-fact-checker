import React from 'react'
import Nav from '../components/Nav'

const FeaturePage = () => {
    
  return (
    <div >
        <Nav />
        <div className="bg-white min-h-screen p-8 text-blue-950">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-1/2 space-y-8 pt-[5vh]">
            <section className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl w-full text-center h-[25vh]">
              <h2 className="text-2xl font-bold mb-4">Get a concise summary of the content of the video</h2>
              <p className="text-lg">
                Save your time by condensing podcast and other videos you do not have to watch by providing a concise summary.
                You can convert the summary to an mp3 and listen to it on the go!
              </p>
            </section>
            <section className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl w-full text-center h-[25vh]">
              <h2 className="text-2xl font-bold mb-4">Generate custom subscript analyzing the correctness of the information presented on the go</h2>
              <p className="text-lg">
                Our extension is directly integrated with YouTube and you can generate subscriptions on the go!
              </p>
            </section>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <section className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
              <h2 className="text-2xl font-bold mb-4">Fact check the content of the video! Are they reliable?</h2>
              <video className="w-full" controls>
                <source src="path/to/your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturePage