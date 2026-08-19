'use client'

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface GalleryProps {
  index: number;
  item: {
    img_path: string;
    engine_name?: string;
  };
  currentService: {
    title: string;
  };
}

export default function GalleryPrev({ index, item, currentService }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.5, 
          delay: index * 0.1 // Stagger effect
        }}
        onClick={() => setIsOpen(true)}
        className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl group bg-white border border-slate-100 transition-all duration-500 cursor-pointer"
      >
        {/* Main Image */}
        <Image
          src={item.img_path}
          alt={`${currentService.title} - ${item.engine_name || index}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        
        {/* Hover Overlay Hint (ไอคอนขยายรูป) */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <ZoomIn size={22} />
          </div>
        </div>

        {/* Engine Name Caption */}
        {item.engine_name && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-white text-sm font-bold tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
              {item.engine_name}
            </p>
          </div>
        )}
        
        {/* Index Badge */}
        <div className="absolute top-4 right-6 text-white/70 text-[10px] font-mono group-hover:text-white transition-colors bg-slate-900/40 px-2 py-1 rounded-full backdrop-blur-sm">
          {(index + 1).toString().padStart(2, '0')}
        </div>
      </motion.div>

      {/* 2. Lightbox Modal (แสดงเมื่อกดคลิกที่รูปภาพ) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // ป้องกันไม่ให้กดปิดเมื่อคลิกด้านในกล่อง
              className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
            >
              {/* ปุ่มปิด Modal */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition-colors shadow-lg"
              >
                <X size={20} />
              </button>

              {/* รูปภาพขยายใหญ่ */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] bg-slate-950">
                <Image
                  src={item.img_path}
                  alt={`${currentService.title} - ${item.engine_name || index}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* คำอธิบายรูปภาพใน Modal */}
              {item.engine_name && (
                <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">
                      {currentService.title}
                    </p>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {item.engine_name}
                    </h4>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}