'use client';
import "./background.css";
import { useRef, useState, useEffect } from 'react';

export function Background() {
    const introRef = useRef<HTMLVideoElement>(null);
    const loopRef = useRef<HTMLVideoElement>(null);
    const [transitioned, setTransitioned] = useState(false);

    useEffect(() => {
        if (loopRef.current) {
            loopRef.current.volume = 0;
        }
    }, []);

    const handleIntroEnd = () => {
        setTransitioned(true);
        loopRef.current?.play();
    };

    return (
        <div className="video-container">
            <video
                ref={introRef}
                className={`video video-intro ${transitioned ? 'fade-out' : ''}`}
                autoPlay
                muted
                playsInline
                onEnded={handleIntroEnd}
            >
                <source src="/media/video/SparklesLights_Transition_Overlay.mp4" type="video/mp4" />
            </video>
            <video
                ref={loopRef}
                className={`video video-loop ${transitioned ? 'fade-in' : ''}`}
                loop
                muted
                playsInline
            >
                <source src="/media/video/Abstract_shimmering_golden_particles.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
