"use client"
import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import {load as cocoSSDLoad} from '@tensorflow-models/coco-ssd';

const ObjectDetection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const webcamRef = useRef(null);

    const runCoco = async () => {
        const net = await cocossdload();
    };

    const showmyVideo = () =>{
        if(webcamRef.current !== null && webcamRef.current.video?.readyState === 4){
            const myVideoWidth = webcamRef.current.video.videoWidth;
            const myVideoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = myVideoWidth;
            webcamRef.current.video.height = myVideoHeight;

        }
    }

    useEffect(() =>{
        showmyVideo();
    },[])

  return (
    <div className='mt-8'>
        <div className='relative flex justify-center items-center p-1.5 rounded-md'>
            {/* Webcam */}
            <Webcam ref={webcamRef} className='rounded-md w-full lg:h-[620px]' muted/>
            {/* Canvas */}
        </div>
    </div>
  )
}

export default ObjectDetection