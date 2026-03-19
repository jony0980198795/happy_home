'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

// แก้ไขตรงนี้: รับ Props เป็น Object { index, item, currentService }
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1 // Stagger effect ให้รูปค่อยๆ เรียงกันขึ้นมา
      }}
      className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl group bg-white border border-slate-100 transition-all duration-500"
    >
      {/* 1. Main Image */}
      <Image
        src={item.img_path}
        alt={`${currentService.title} - ${item.engine_name || index}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />

      {/* 2. Hover Overlay - เพิ่มลูกเล่นกระจกฝ้าและไอคอนขยาย */}
      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/40 transition-all duration-500 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
          <Maximize2 className="text-white" size={24} />
        </div>
      </div>

      {/* 3. Engine Name Tag - ปรับให้ดูเป็นงานวิศวกรรมที่สะอาดตา */}
      {item.engine_name && (
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-white text-sm font-bold tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            {item.engine_name}
          </p>
        </div>
      )}
      
      {/* 4. Index Badge - เพิ่มเลขลำดับไว้ที่มุม (Optional) */}
      <div className="absolute top-4 right-6 text-white/50 text-[10px] font-mono group-hover:text-white transition-colors">
        {(index + 1).toString().padStart(2, '0')}
      </div>
    </motion.div>
  )
}