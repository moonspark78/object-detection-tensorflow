"use client"
import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import {load as cocoSSDLoad} from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';
import { renderPredictions } from '../utils/render-predictions';

let detectInterval;

const ObjectDetection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runCoco = async () => {
        setIsLoading(true);
        const net = await cocoSSDLoad();
        setIsLoading(false);

        detectInterval = setInterval(() =>{
            runObjectDetection(net);
        },10);
    };

    async function runObjectDetection(net){
        if(canvasRef.current && webcamRef.current !== null && webcamRef.current.video.readyState === 4){
            canvasRef.current.width = webcamRef.current.video.videoWidth;
            canvasRef.current.height = webcamRef.current.video.videoHeight;

            //find detected object
            const detecctedObjects = await net.detect(webcamRef.current.video, undefined, 0.6);
            //console.log(detecctedObjects);
            const context = canvasRef.current.getContext('2d');
            renderPredictions(detecctedObjects, context);
        }
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
        runCoco();
        showmyVideo();
        return () => {
            clearInterval(detectInterval);
        }
    },[])

  return (
    <div className='mt-8'>{
        isLoading ? (
            <div>Loading Ia Model</div>
        ):(
        <div className='relative flex justify-center items-center p-1.5 rounded-md'>
            {/* Webcam */}
            <Webcam ref={webcamRef} className='rounded-md w-full lg:h-[620px]' muted/>
            {/* Canvas */}
            <canvas ref={canvasRef}
                className='absolute top-0 left-0 w-full lg:h-[620px] rounded-md z-999999'
            />
        </div>)}
    </div>
  )
}

export default ObjectDetection