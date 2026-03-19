'use client'

import React from 'react';
import { CheckCircle, Briefcase, MessageSquare, Quote, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';

const portfolioProjects = [
  {
    title: "ระบบสายพานลำเลียงอัจฉริยะ (Smart Conveyor)",
    client: "",
    problem: "ระบบเดิมทำงานแบบ Manual ทำให้เกิดความล่าช้าและสินค้าเสียหายระหว่างเคลื่อนย้าย",
    solution: "ติดตั้งระบบลำเลียงอัตโนมัติควบคุมด้วย PLC และเซนเซอร์ตรวจจับตำแหน่ง ลดอัตราการเสียหายได้ 95%",
    image: "/tmc_company/belt.png",
    tags: ["PLC Control", "Automotive", "Logistics"]
  },
  {
    title: "ระบบบำบัดน้ำเสียโรงงานอุตสาหกรรม",
    client: "",
    problem: "ค่าน้ำเสียเกินมาตรฐานที่กฎหมายกำหนด และระบบเดิมกินไฟสูง",
    solution: "ออกแบบระบบบำบัดใหม่พร้อมระบบหมุนเวียนพลังงาน ช่วยให้ค่าน้ำผ่านมาตรฐานและประหยัดไฟขึ้น 30%",
    image: "/catalog/pipe/pipeed_02.png",
    tags: ["Environmental", "Water System", "Energy Saving"]
  },
  {
    title: "ไลน์พ่นสีอัตโนมัติความแม่นยำสูง",
    client: "ผู้ผลิตเฟอร์นิเจอร์ส่งออก",
    problem: "การพ่นสีด้วยคนทำให้ความหนาไม่เท่ากันและสิ้นเปลืองสี",
    solution: "พัฒนาไลน์พ่นสีระบบ Robotic Control ควบคุมปริมาณสีตามขนาดชิ้นงานอัตโนมัติ",
    image: "/tmc_company/paint_sprayer.png",
    tags: ["Robotics", "Automation", "Paint Line"]
  }
];

const testimonials = [
  {
    quote: "TMC ออกแบบระบบ PLC ได้แม่นยำมาก ช่วยให้ไลน์ผลิตของเราทำงานได้ต่อเนื่อง 24 ชม. โดยไม่มี Error เลยครับ",
    author: "คุณสมชาย",
    position: "Manager, AutoPart Manufacturing"
  },
  {
    quote: "ประทับใจบริการหลังการขาย ทีมวิศวกรตอบคำถามไวและเข้ามาแก้ไขหน้างานได้ทันท่วงที",
    author: "วิศวกรประจำโรงงาน",
    position: "Maintenance Leader"
  }
];

const logos = [
  "/logo/betagroud.png",
  "/logo/gs.jpg",
  "/logo/interface.png",
  "/logo/lion.png",
  "/logo/parker.png",
  "/logo/pjm.png",
  "/logo/scg.png",
  "/logo/toyota.jpg",
  "/logo/yuasa.png",
];
export default function PortfolioPage() {
  return (
    <div className="bg-white pt-24 pb-20">

      {/* --- Section Header --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4 bg-blue-50 px-4 py-1.5 rounded-full text-sm">
          <Briefcase size={18} />
          <span>PORTFOLIO & CASE STUDIES</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
          ความไว้วางใจจาก <span className="text-blue-600">ลูกค้ากว่า 200 ราย</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          เราไม่ได้แค่ขายเครื่องจักร แต่เราส่งมอบ "ความสำเร็จ" ให้กับทุกโครงการที่คุณไว้วางใจ
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
              <div className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
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

      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-2xl font-bold text-slate-800">
            ความไว้วางใจจากบริษัทชั้นนำระดับประเทศ
          </p>
        </div>

        {/* Container สำหรับโลโก้วิ่ง */}
        <LogoSlider />
      </section>

      {/* --- Testimonials --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <MessageSquare className="mx-auto text-blue-600 mb-4" size={40} />
          <h2 className="text-3xl font-bold text-slate-900">เสียงตอบรับจากผู้ใช้งานจริง</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-200 relative shadow-sm hover:shadow-md transition-shadow">
              <Quote className="absolute top-6 right-8 text-blue-100" size={60} />
              <p className="text-slate-600 text-lg italic leading-relaxed mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-sm text-blue-600 font-medium">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-[2rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">พร้อมร่วมงานกับเราแล้วหรือยัง?</h2>
          <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto">
            ปรึกษาปัญหาในกระบวนการผลิตของคุณกับวิศวกรผู้เชี่ยวชาญจาก TMC วันนี้ เพื่อรับข้อเสนอและแนวทางการออกแบบที่ดีที่สุด
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              คุยกับทีมงาน <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

function LogoSlider() {
  return (
    <div className="overflow-hidden w-full bg-white py-10">
      <div className="flex animate-slide gap-40 w-max">
        {[...logos, ...logos].map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="company logo"
            width={120}
            height={60}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
}