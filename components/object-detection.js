"use client"
import React, { useRef } from 'react'
import Webcam from 'react-webcam';

const ObjectDetection = () => {
    const webcamRef = useRef(null);
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