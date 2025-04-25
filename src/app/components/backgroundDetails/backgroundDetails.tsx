'use client';
import "./backgroundDetails.css";
import { useRef, useEffect } from 'react';

export function BackgroundDetails() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = 0;
            videoRef.current.play().catch((err) => {
                console.warn("Autoplay bloqueado, espera interacción del usuario", err);
            });
        }
    }, []);

    return (
        <div className="video-container">
            <video
                ref={videoRef}
                className="video video-loop fade-in"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/media/video/gold_glitter.mp4" type="video/mp4" />
                
            </video>
        </div>
    );
}
