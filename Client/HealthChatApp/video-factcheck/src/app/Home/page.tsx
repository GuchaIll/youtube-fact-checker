'use client';

import React from 'react'
import { useState } from 'react'
import History from '../components/History'
import Nav from '../components/Nav'
import Notebook from '../components/Notebook'
import Linkstab from '../components/Linkstab'
import VideoForm from '../components/VideoForm'

const page = () => {
    const [factCheckedText, setFactCheckedText] = React.useState('Donald Trump served as the 45th president of the United States (2017–21). He was the third president in U.S. history to be impeached by the U.S. House of Representatives and the only president to be impeached twice—once in 2019 (he was acquitted by the U.S. Senate in 2020) and once in 2021. In the presidential election of 2020, Trump was defeated by his Democratic opponent, former vice-president Joe Biden, by 306 electoral votes to 232. Prior to his 2016 run for the presidency, Trump had gained notoriety as a real-estate developer and businessman who owned, managed, or licensed his name to hotels, casinos, golf courses, resorts, and residential properties in New York City and around the world; from 2004 to 2015, he starred in a reality television series, "The Apprentice," featured contestants competing in various challenges to become one of his employees.');
    const [additionalInfo, setAdditionalInfo] = React.useState('https://www.washingtonpost.com/world/national-security/up-to-1000-more-us-troops-could-be-headed-to-afghanistan-this-spring/2018/01/21/153930b6-fd1b-11e7-a46b-a3614530bd87_story.html');
    const [uploadedLinks, setUploadedLinks] = useState<string[]>(['https://www.britannica.com/facts/Donald-Trump']);

  return (
    <div className="bg-white min-h-screen">
      <Nav />
      <VideoForm setFactCheckedText={setFactCheckedText}
        setAdditionalInfo={setAdditionalInfo}
        uploadedLinks={uploadedLinks}
        setUploadedLinks={setUploadedLinks} />
      <div className="flex min-h-6">
        <div className="w-1/5 min-h-[75vh]">
          <History uploadedLinks={uploadedLinks}/>
        </div>
        <div className="w-2/5 min-h-[75vh]">
          <Notebook factCheckedText={factCheckedText} additionalInfo={additionalInfo}/>
          
        </div>
        <div className="w-2/5 min-h-[75vh]">
          <Linkstab additionalInfo={additionalInfo}/>
        </div>
      </div>
    </div>
  )
}

export default page
