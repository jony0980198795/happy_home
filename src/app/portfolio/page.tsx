'use client'

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const portfolioProjects = [
  {
    title: "ติดตั้งระบบโซล่าเซลล์ On-Grid 5kW ลดค่าไฟบ้านพักอาศัย",
    client: "บ้านพักอาศัย 2 ชั้น อ.หาดใหญ่ จ.สงขลา",
    problem: "ค่าไฟฟ้ากลางวันพุ่งสูงจากการเปิดแอร์และอุปกรณ์ไฟฟ้าตลอดวัน เฉลี่ยเดือนละ 6,000 - 8,000 บาท",
    solution: "ออกแบบและติดตั้งระบบ On-Grid 5kW พร้อมดำเนินการขออนุญาตขนานการไฟฟ้าราชการครบวงจร ช่วยลดค่าไฟกลางวันได้มากกว่า 60-70% (ประมาณ 3,500 - 4,500 บาท/เดือน)",
    image: "/catalog/solar-cell-5kw-grid-tied/check_elec.jpg",
    tags: ["Solar Cell", "On-Grid 5kW", "Net Metering", "หาดใหญ่"]
  },
  {
    title: "ระบบแอร์โซล่าเซลล์ Hybrid & เดินสายตู้ชาร์จ EV Wallbox",
    client: "อาคารโฮมออฟฟิศ อ.เมือง จ.สงขลา",
    problem: "ต้องการชาร์จรถยนต์ไฟฟ้า EV และเปิดแอร์ทำงานกลางวันโดยไม่อยากให้ค่าไฟพุ่งสูง และระบบเมนไฟฟ้าเดิมไม่รองรับกำลังไฟ EV",
    solution: "ติดตั้งแอร์โซล่าเซลล์ Hybrid ดึงพลังงานแสงอาทิตย์มาใช้ตรง พร้อมเพิ่มวงจรย่อยและเดินสายเมนมาตรฐานการไฟฟ้าสำหรับ EV Charger ปลอดภัย 100% มีระบบตัดไฟรั่ว",
    image: "/catalog/solar-cell-5kw-grid-tied/solar_02.jpg",
    tags: ["Solar Air Condition", "EV Charger", "EV Wallbox", "สงขลา"]
  },
  {
    title: "ติดตั้งระบบกล้องวงจรปิด CCTV & ประตูรีโมทอัตโนมัติ",
    client: "โครงการบ้านเดี่ยว อ.หาดใหญ่ จ.สงขลา",
    problem: "ต้องการระบบรักษาความปลอดภัยคมชัดสูงดูออนไลน์ผ่านมือถือได้ 24 ชั่วโมง และต้องการเพิ่มความสะดวกในการเข้า-ออกบ้านช่วงฝนตก",
    solution: "ติดตั้งกล้องวงจรปิด IP Camera 8 จุด ความละเอียด Full HD ภาพชัดทั้งกลางวันและกลางคืน พร้อมติดตั้งระบบมอเตอร์ประตูรีโมทสั่งการผ่านสมาร์ทโฟนและรีโมทไร้สาย",
    image: "/catalog/automatic-gate-systems/gate.jpg",
    tags: ["CCTV", "Smart Home", "ประตูรีโมท", "กล้องวงจรปิด"]
  }
];


export default function PortfolioPage() {
  return (
    <div className="bg-white pt-24 pb-20">

      {/* --- Section Header --- */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-sm shadow-sm">
          <ShieldCheck size={18} className="text-blue-600" />
          <span>PORTFOLIO & CASE STUDIES</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          ความไว้วางใจจาก <span className="text-blue-600">ลูกค้ากว่า 100+ ครัวเรือน</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          เราไม่ได้แค่ให้บริการติดตั้ง แต่เราส่งมอบความปลอดภัย ความคุ้มค่า และการดูแลระยะยาวโดยทีมช่างมีใบอนุญาตวิชาชีพ
        </p>
      </section>
      {/* --- Case Studies --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 gap-12">
          {portfolioProjects.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              key={idx} className={`flex flex-col lg:flex-row gap-10 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[400px] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-md uppercase tracking-wider">#{tag}</span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{project.title}</h2>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-xl border-l-4 border-red-500">
                    <p className="text-sm font-bold text-red-700 mb-1 flex items-center gap-2">⚠️ Problem (โจทย์ของลูกค้า):</p>
                    <p className="text-slate-700">{project.problem}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                    <p className="text-sm font-bold text-green-700 mb-1 flex items-center gap-2">✅ Solution (แนวทางแก้ไข):</p>
                    <p className="text-slate-700">{project.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}