'use client'

import { useEffect, useState } from 'react';
import { ShieldCheck, Phone, ArrowRight, ChevronLeft, ChevronRight, Sparkle, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { sliderData } from '../data/heroSliderData';
import { servicesQuickLinks } from '../data/servicesData';
import { featuresData } from '../data/featuresData';

const ht_image = [
  { "id": "002", "title": "Air-Conditioners", "desc": "แอร์โซล่าเซลล์", "file_path": "/catalog/air-conditioners/air-01.jpg" },
  { "id": "001", "title": "Solar Cell 5kW Grid Tied", "desc": "โซล่าเซลล์ 5 kW", "file_path": "/catalog/solar-cell-5kw-grid-tied/solar_01.jpg" },
  { "id": "003", "title": "Home Security Systems", "desc": "ระบบความปลอดภัยบ้าน", "file_path": "/catalog/home-security-system/home-sec-01.jpg" },
  { "id": "004", "title": "CCTV Surveillance", "desc": "กล้องวงจรปิด CCTV", "file_path": "/catalog/cctv-surveillance/cctv_01.jpg" },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};


const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i, stiffness: 100 },
  })
}

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

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
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-slate-950 py-16 lg:py-0">
        {/* 1. Background Visual Effects (Ambient Lighting & Grid Pattern) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Glow Effects */}
          <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px]" />

          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/60 to-slate-950" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* 2. Text Content Column (6 cols on lg) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 xl:col-span-6 text-white space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-sm font-semibold backdrop-blur-md shadow-inner">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
                <span className="tracking-wide">{t.home.badge}</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1]"
            >
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent drop-shadow-sm">
                {t.home.title.highlight}
              </span>
              <br />
              <span className="text-white mt-2 block">{t.home.title.main}</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal"
            >
              {t.home.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/portfolio"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t.home.cta_primary}</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="tel:0861206859"
                className="px-8 py-4 bg-slate-900/60 hover:bg-slate-800/80 text-white border border-slate-700/80 hover:border-slate-500/80 backdrop-blur-md rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone size={18} className="text-blue-400" />
                <span>{t.home.contact_phone}</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* 3. Image Display Showcase (Staggered Grid) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="hidden lg:grid lg:col-span-5 xl:col-span-6 grid-cols-2 gap-4 relative"
          >
            {/* Subtle Ambient Light behind images */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10 rounded-full" />

            {ht_image.slice(0, 4).map((img: any, index: number) => {
              const isStaggered = index === 1 || index === 3;
              return (
                <motion.div
                  key={img.id}
                  variants={itemVariants}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-2 backdrop-blur-md transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1.5 ${isStaggered ? 'mt-8' : ''
                    }`}
                >
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-2xl bg-slate-800">
                    <Image
                      src={img.file_path}
                      alt={img.title || "ht Solution Showcase"}
                      fill
                      sizes="(max-width: 1200px) 25vw, 20vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                    {/* Title Overlay Tag */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white tracking-wider uppercase drop-shadow-md truncate max-w-[80%]">
                        {img.title || "ht Solution"}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Sparkle className="w-3 h-3 text-blue-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
                Happy Home Service HY — มั่นใจทุกงานช่าง โดยทีมช่างมีใบอนุญาตถูกต้อง 100%
                ครบ จบ ในที่เดียว | โซล่าเซลล์ แอร์ ระบบความปลอดภัย และงานตกแต่งบ้าน
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesQuickLinks.map((product, idx) => (
              <Link key={idx} href={product.path}>
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
      <section className="bg-stone-50 py-8 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              มีรูปแบบสีผ้าม่าน
              <span className="block text-stone-500">
                ให้เลือกมากมาย
              </span>
            </h3>

            <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg">
              เลือกสีและลวดลายผ้าม่านที่เหมาะกับสไตล์บ้านของคุณ
              พร้อมตัวเลือกหลากหลายเพื่อสร้างบรรยากาศที่ลงตัว
            </p>
          </div>

          {/* Gallery */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/catalog/insect-screens-and-nets/color-1.png",
                title: "โทนสีธรรมชาติ",
                description: "อบอุ่น เรียบง่าย และเข้ากับการตกแต่งได้หลากหลาย",
              },
              {
                src: "/catalog/insect-screens-and-nets/color-2.jpg",
                title: "โทนสีโมเดิร์น",
                description: "เพิ่มความทันสมัยและความโดดเด่นให้กับห้อง",
              },
              {
                src: "/catalog/insect-screens-and-nets/color-3.png",
                title: "โทนสีเข้ม",
                description: "ให้ความรู้สึกหรูหรา สุขุม และมีเอกลักษณ์",
              },
            ].map((item, index) => (
              <Link 
                key={index}
                href={'/preview/006/'}
              >
                <div
                  key={index}
                  className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Number */}
                    <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-semibold text-stone-800 shadow-md backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-stone-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-stone-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-stone-50 py-8 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              มีรูปแบบมุ้งลวด
              <span className="block text-stone-500">
                ให้เลือก 2 แบบ
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-stone-600 sm:text-lg">
              เลือกรูปแบบมุ้งลวดที่เหมาะกับบ้านและความต้องการของคุณ
              พร้อมดีไซน์ที่สวยงามและใช้งานได้อย่างลงตัว
            </p>
          </div>

          {/* Products */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

              {/* Image */}
              <div className="relative w-full overflow-hidden bg-stone-100">
                <Image
                  src="/catalog/insect-screens-and-nets/scl-1.jpg"
                  alt="มุ้งลวดสีเทา"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm leading-6 text-stone-600">
                  โทนสีเทาเรียบง่าย เหมาะกับบ้านหลากหลายสไตล์
                  ให้ความรู้สึกสะอาดและเป็นธรรมชาติ
                </p>

                <Link
                  href="/preview/006"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-stone-900 transition-colors hover:text-stone-500"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>

            {/* แบบที่ 2 */}
            <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              {/* Image */}
              <div className="overflow-hidden bg-stone-100">
                <Image
                  src="/catalog/insect-screens-and-nets/scl-2.jpg"
                  alt="มุ้งลวดสีดำ"
                  width={1200}
                  height={900}
                  className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm leading-6 text-stone-600">
                  โทนสีดำทันสมัย ให้ความรู้สึกเรียบหรู
                  และช่วยเพิ่มความโดดเด่นให้กับตัวบ้าน
                </p>

                <Link
                  href="/preview/006"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-stone-900 transition-colors hover:text-stone-500"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* พื้นหลังตกแต่งด้วยแสง Glow เบาๆ */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <span className="text-blue-400 font-bold text-sm tracking-wider uppercase mb-3 block">
            Get Free Consultation
          </span>

          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight text-white">
            ยกระดับความปลอดภัย <br/> และประหยัดค่าไฟให้บ้านคุณวันนี้
          </h2>

          <p className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
            ยินดีให้คำปรึกษา ประเมินหน้างาน และออกแบบระบบโซล่าเซลล์ แอร์บ้าน กล้องวงจรปิด และระบบไฟฟ้าฟรี โดยทีมช่างผู้เชี่ยวชาญพร้อมใบอนุญาตถูกต้อง
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* ปุ่มโทรสายด่วน */}
            <Link
              href="tel:0861206859"
              className="flex items-center justify-center gap-2.5 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone size={20} /> โทร: 086-120-6859
            </Link>

            {/* ปุ่มประเมินหน้างานผ่าน LINE */}
            <Link
            href="/contact"
              className="flex items-center justify-center gap-2.5 bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 shadow-lg shadow-emerald-500/30 transition-all border border-emerald-400/30 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>แอดไลน์ส่งรูปประเมินหน้างาน</span>
            </Link>
          </div>

          <p className="mt-8 text-slate-400 text-sm font-medium">
            ⚡ ให้บริการและติดตั้งโดยช่างมีใบอนุญาต ครอบคลุมพื้นที่หาดใหญ่ สงขลา และจังหวัดใกล้เคียง
          </p>
        </motion.div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              ทำไมต้องเลือก Happy Home Service HY?
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-600 max-w-xl mx-auto text-base sm:text-lg">
              บริการงานช่างและระบบพลังงานสะอาดมาตรฐานสูง โดยทีมงานมืออาชีพในพื้นที่หาดใหญ่-สงขลา
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuresData.map((item, idx) => {
              // 1. ดึง Icon Component ออกมาตั้งชื่อตัวแปรที่ขึ้นต้นด้วยตัวพิมพ์ใหญ่
              const IconComponent = item.icon;

              return (
                <div
                  key={item.id || idx}
                  className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all group"
                >
                  <div className="mb-6 p-3 bg-white inline-block rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                    {/* 2. เรียกใช้งานเป็น Tag <IconComponent /> แทน {item.icon} */}
                    <IconComponent className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>
      <section className="relative w-full min-h-[650px] lg:h-[780px] overflow-hidden bg-slate-950 group flex items-center">
        {/* Background Slides */}
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            {/* Background Image with Blur Overlay */}
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              className="object-cover scale-105 transition-transform duration-[7000ms] ease-out group-hover:scale-100 opacity-40"
              priority={index === 0}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

            {/* Main Content Layout */}
            <div className="relative z-20 container mx-auto px-6 lg:px-16 h-full flex items-center py-20 lg:py-0">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

                {/* Left Column: Text & Actions */}
                <div
                  className={`lg:col-span-7 transition-all duration-700 delay-200 transform ${index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                >
                  {/* Tag Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold rounded-full mb-6 uppercase tracking-wider shadow-lg shadow-blue-600/20">
                    <ShieldCheck size={14} />
                    <span>{slide.tag}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl font-normal">
                    {slide.desc}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={"/services"}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-600/30 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      <span>ดูรายละเอียดบริการ</span>
                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 px-7 py-4 rounded-xl font-bold backdrop-blur-md hover:border-slate-600 transition-all duration-300"
                    >
                      <PhoneCall size={18} className="text-blue-400" />
                      <span>ปรึกษาช่าง</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: Visual Accent Card (Desktop Only) */}
                <div
                  className={`hidden lg:block lg:col-span-5 transition-all duration-1000 delay-400 transform ${index === current ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group/card">
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                      <p className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">
                        Happy Home Service HY
                      </p>
                      <p className="text-sm font-semibold text-white">
                        ติดตั้งโดยทีมช่างมีใบอนุญาตมาตรฐาน ปลอดภัย 100%
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Navigation Controls */}
        <div className="absolute bottom-8 right-6 lg:right-16 z-30 flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="p-3.5 rounded-xl border border-white/10 text-white bg-slate-900/50 hover:bg-blue-600 hover:border-blue-600 transition-all backdrop-blur-md active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="p-3.5 rounded-xl border border-white/10 text-white bg-slate-900/50 hover:bg-blue-600 hover:border-blue-600 transition-all backdrop-blur-md active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-6 lg:left-16 z-30 flex items-center gap-2">
          {sliderData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? "w-10 bg-blue-500" : "w-3 bg-white/20 hover:bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
