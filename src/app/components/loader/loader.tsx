'use client';
import { motion } from 'framer-motion';

export const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <motion.img
                src="/media/images/sunflower-loading.png"
                alt="Cargando..."
                className="w-24 h-24"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />
        </div>
    );
};
