'use client';

import { motion } from "framer-motion";
import { FaChurch, FaGlassMartiniAlt, FaUtensils, FaCandyCane, FaBirthdayCake } from "react-icons/fa";
import { GiCorn, GiPartyPopper, GiNoodles } from "react-icons/gi";

const timelineData = [
  { title: "Ceremonia", icon: <FaChurch />, time: "11:30 H", subtitle: "Iglesia (Nombre)" },
  { title: "Recepción", icon: <FaGlassMartiniAlt />, time: "13:30 H", subtitle: "Jardin (Nombre)" },
  { title: "Comida", icon: <FaUtensils />, time: "14:30 H"},
  { title: "Elotito time", icon: <GiCorn />, time: "16:30 H" },
  { title: "Mesa de dulces", icon: <FaCandyCane />, time: "18:00 H" },
  { title: "Fiesta", icon: <GiPartyPopper />, time: "18:30 H" },
  { title: "Pastel", icon: <FaBirthdayCake />, time: "19:30 H" },
  { title: "Tornaboda", icon: <GiNoodles />, time: "01:00 H" },
];

export const WeddingTimeline = () => {
  return (
    <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto">
      
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1 w-[2px] bg-white/30 z-0"></div>

      {timelineData.map((event, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="relative z-10 flex w-full mb-6 font-['forumFont']"
        >
          
          <div className="w-1/2 text-right pr-6 flex flex-col justify-center items-end">
            <div className="text-xl sm:text-2xl text-white">{event.title}</div>
          </div>
          
          <div className="w-0 flex flex-col items-center mx-5">
            <div className="bg-white/10 border border-white/40 backdrop-blur-sm p-2 rounded-full text-3xl text-yellow-400 shadow-lg">
              {event.icon}
            </div>
          </div>

          <div className="w-1/2 text-left pl-6 flex flex-col justify-center items-start text-sm sm:text-lg text-white">
            {event.subtitle && <span className="text-md text-yellow-400 italic">{event.subtitle}</span>}
            <span className="text-white font-semibold">{event.time}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
