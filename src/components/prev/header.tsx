'use client'

import { motion } from "framer-motion";
import { Info, ShieldCheck } from "lucide-react";

// 1. กำหนด Type ให้กับ Props (ช่วยให้เขียนโค้ดง่ายขึ้นและลด Error)
interface PrevHeaderProps {
  currentService: {
    title: string;
    desc: string;
  };
}

// 2. แก้ไขการรับค่าจาก (currentService: any) เป็น ({ currentService }: PrevHeaderProps)
export default function PrevHeader({ currentService }: PrevHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16"
    >
      {/* ส่วนหัวข้อ - เพิ่มลูกเล่นขีดเส้นใต้สีน้ำเงิน */}
      <div className="relative inline-block mb-6">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 relative z-10">
          {currentService.title}
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute -bottom-2 left-0 h-2 bg-blue-600/20 -z-0 rounded-full"
        />
      </div>

      {/* กล่องคำอธิบาย - ปรับให้ดูพรีเมียมขึ้นด้วย Glassmorphism เล็กน้อย */}
      <div className="relative overflow-hidden bg-white border border-slate-100 shadow-sm p-6 md:p-8 rounded-[2rem] max-w-4xl">
        {/* ตกแต่งพื้นหลังกล่อง */}
        <div className="absolute top-0 right-0 p-4 opacity-5">
            <ShieldCheck size={120} className="text-blue-600" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-200 shrink-0">
            <Info className="text-white" size={24} />
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Service Overview
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              {currentService.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}