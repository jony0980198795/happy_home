'use client'
import React, { useEffect, useState } from 'react';
import { Settings, ShieldCheck, Zap, Phone, ArrowRight, Factory, Droplets, Wind, Paintbrush, Share2, ChevronLeft, ChevronRight, Cable, LandPlot, CirclePile, Waypoints, Axe, PackageSearch } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const tmc_image = [
  { "id": "002", "title": "Automation", "desc": "ระบบบำบัดอากาศและเครื่องดูดอากาศมาตรฐานโรงงาน", "file_path": "/catalog/automation/auto_01.png" },
  { "id": "001", "title": "Control System", "desc": "เทคโนโลยีตรวจสอบคุณภาพแม่นยำสูง", "file_path": "/catalog/cab/cab_01.png" },
  { "id": "003", "title": "Conveyor", "desc": "เครื่องมิกเซอร์ประสิทธิภาพสูงสำหรับกระบวนการผลิต", "file_path": "/catalog/conveyor/con_04.png" },
  { "id": "004", "title": "Dismantle", "desc": "เครื่องอัดตะกอนและระบบบำบัดน้ำเสียครบวงจร", "file_path": "/catalog/dismantle/dis_02.png" },
  { "id": "005", "title": "Battery Production Line", "desc": "ผู้นำด้านการออกแบบและติดตั้งไลน์ผลิตแบตเตอรี่", "file_path": "/catalog/floor/floored_01.png" }
];
const sliderData = [
  {
    id: 1,
    title: "Advanced PLC Control",
    desc: "ระบบควบคุมอัตโนมัติอัจฉริยะสำหรับโรงงานยุคใหม่",
    src: "/tmc_company/plc.png",
    tag: "Automation"
  },
  {
    id: 2,
    title: "Professional Paint System",
    desc: "เทคโนโลยีไลน์พ่นสีอัตโนมัติ ความแม่นยำสูง",
    src: "/tmc_company/paint_sprayer.png",
    tag: "Painting Line"
  },
  {
    id: 3,
    title: "Conveyor Belt Solutions",
    desc: "ระบบสายพานลำเลียงที่ออกแบบตามพื้นที่หน้างานจริง",
    src: "/tmc_company/belt.png",
    tag: "Logistics"
  },
  {
    id: 4,
    title: "Wastewater Treatment",
    desc: "นวัตกรรมจัดการน้ำเสียเพื่อสิ่งแวดล้อมที่ยั่งยืน",
    src: "/catalog/pipe/pipeed_02.png",
    tag: "Environmental"
  },
  {
    id: 5,
    title: "Reliable Maintenance",
    desc: "บริการซ่อมบำรุงและดูแลระบบโดยทีมวิศวกร",
    src: "/tmc_company/repire.png",
    tag: "Services"
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i, stiffness: 100 },
  })
}

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};


export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const {t}=useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === sliderData.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? sliderData.length - 1 : current - 1);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-slate-900">
        {/* Background Image Overlay (แนะนำให้ทำ Slider ในขั้นต่อไป แต่ตอนนี้จะใช้รูปแรกเป็นหลัก) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/50 text-blue-200 text-sm font-medium backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {t.home.badge}
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              {t.home.title.highlight}<br />
              {t.home.title.main}
            </h1>

            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              {t.home.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all transform hover:translate-x-1 shadow-lg shadow-blue-500/20">
                {t.home.cta_primary} <ArrowRight size={20} />
              </Link>
              <Link href="tel:0613529166" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md rounded-xl font-bold flex items-center gap-2 transition-all">
                <Phone size={20} /> {t.home.contact_phone}
              </Link>
            </div>
          </motion.div>

          {/* Image Display Grid (Thumbnail Showcase) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {tmc_image.slice(0, 4).map((img, index) => (
              <div
                key={img.id}
                className={`relative overflow-hidden rounded-2xl border border-white/10 group shadow-2xl transition-all duration-500 ${index === 1 || index === 2 ? 'mt-8' : ''}`}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={img.file_path}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-3 left-3">
                    <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">{img.title || "TMC Solution"}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* --- PRODUCT CATEGORIES (สรุปสินค้า) --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* ปรับ justify-between เป็น justify-center และเอา items-end ออกเพื่อให้จัดกลางทุกมิติ */}
          <div className="flex flex-col items-center justify-center mb-12 gap-4 text-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                โซลูชันครบวงจร
              </h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-4"></div> {/* เพิ่มเส้นใต้เพื่อให้ดูเป็นสากล */}
              <p className="text-lg text-slate-600">
                นวัตกรรมเพื่อโรงงานอุตสาหกรรมยุคใหม่
                ออกแบบและติดตั้งโดยวิศวกรผู้เชี่ยวชาญจาก TMC
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "ออกแบบเครื่องอัตโนมัติ", paht: "/services", icon: <Factory /> },
              { title: "ระบบควบคุม PLC", paht: "/services", icon: <Settings /> },
              { title: "สายพานลำเลียง", paht: "/services", icon: <Share2 /> },
              { title: "ไลน์พ่นสีอัตโนมัติ", paht: "/services", icon: <Paintbrush /> },
              { title: "ระบบบำบัดน้ำเสีย", paht: "/services", icon: <Droplets /> },
              { title: "ระบบบำบัดอากาศเสีย", paht: "/services", icon: <Wind /> },
              { title: "ตู้คอนโทรล", paht: "/services", icon: <Cable /> },
              { title: "งานพื้น", paht: "/services", icon: <LandPlot /> },
              { title: "โครงสร้าง", paht: "/services", icon: <CirclePile /> },
              { title: "ระบบท่อ DUST", paht: "/services", icon: <Waypoints /> },
              { title: "งานรื้อถอน ขนย้าย", paht: "/services", icon: <Axe /> },
              { title: "สินค้า", paht: "/services", icon: <PackageSearch /> },
            ].map((product, idx) => (
              <Link key={idx} href={product.paht}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-white p-6 rounded-xl flex items-center gap-4 border border-slate-200 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-lg">
                    {product.icon}
                  </div>
                  <span className="font-bold text-slate-700">{product.title}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="relative w-full h-[600px] lg:h-[750px] overflow-hidden bg-slate-900 group">
        {/* Slides */}
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Image */}
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              className="object-cover scale-105 transition-transform duration-[5000ms] ease-out group-hover:scale-100"
              priority={index === 0}
            />

            {/* Overlay & Content */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent flex items-center">
              <div className="container mx-auto px-10 lg:px-20">
                <div className={`max-w-xl transition-all duration-700 delay-300 transform ${index === current ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}>
                  <span className="inline-block px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                    {slide.tag}
                  </span>
                  <h2 className="text-4xl lg:text-7xl font-black text-white mb-6 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-lg lg:text-xl text-slate-200 mb-10 leading-relaxed">
                    {slide.desc}
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="/services"
                      className="inline-block bg-white text-blue-900 px-10 py-4 rounded-xl font-black shadow-xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-300 group"
                    >
                      <span className="flex items-center gap-2">
                        รายละเอียดสินค้า
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Controls */}
        <div className="absolute bottom-10 right-10 z-20 flex gap-4">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-blue-900 transition-all backdrop-blur-md"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-blue-900 transition-all backdrop-blur-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-10 left-10 z-20 flex gap-2">
          {sliderData.map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-500 rounded-full ${i === current ? "w-12 bg-blue-500" : "w-4 bg-white/30"
                }`}
            />
          ))}
        </div>
      </section>
      {/* --- VALUE PROPOSITION (จุดเด่น) --- */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">ทำไมต้องเลือก TMC Thai Mechatronics?</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Settings className="text-blue-600" size={32} />,
                title: "ออกแบบตามความต้องการ",
                desc: "Custom Design เครื่องจักรให้เหมาะสมกับพื้นที่และงบประมาณของลูกค้าแต่ละราย"
              },
              {
                icon: <ShieldCheck className="text-blue-600" size={32} />,
                title: "ความเชื่อมั่นกว่า 200 บริษัท",
                desc: "ได้รับความไว้วางใจจากโรงงานอุตสาหกรรมทั่วประเทศ ด้วยผลงานที่พิสูจน์แล้วว่าใช้งานได้จริง"
              },
              {
                icon: <Zap className="text-blue-600" size={32} />,
                title: "บริการ 24 ชั่วโมง",
                desc: "ดูแลหลังการขายและให้คำปรึกษาทางเทคนิคตลอด 24 ชม. เพื่อให้ไลน์ผลิตของคุณไม่สะดุด"
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all group">
                <div className="mb-6 p-3 bg-white inline-block rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-6 text-center text-black mb-30"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">เริ่มยกระดับไลน์ผลิตของคุณวันนี้</h2>
          <p className="text-black mb-10 text-lg">
            ไม่ว่าโปรเจกต์จะเล็กหรือใหญ่ วิศวกรของ TMC พร้อมให้คำปรึกษาและออกแบบระบบที่ดีที่สุดให้กับคุณ
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="tel:0613529166" className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
              <Phone size={20} /> 061-352-9166
            </Link>
            <Link href="mailto:thai.macha2017@gmail.com" className="flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all border border-blue-500">
              ขอใบเสนอราคา
            </Link>
          </div>
          <p className="mt-8 text-black text-sm">บริการครอบคลุมการติดตั้งและดูแลหลังการขายทั่วประเทศ</p>
        </motion.div>
      </section>
    </div>
  );
}
