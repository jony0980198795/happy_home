'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface ServiceItem {
  id: string;
  title: string;
  titleTh: string;
  desc: string;
  tags: string[];
  filePath: string;
  color: string;
}

const services: ServiceItem[] = [
  {
    id: "001",
    title: "Solar Cell & On-Grid System",
    titleTh: "ระบบโซล่าเซลล์ประหยัดไฟ & ขายคืน",
    desc: "บริการออกแบบและติดตั้งระบบโซล่าเซลล์ On-Grid / Hybrid ทั้งบ้านพักอาศัยและอาคารพาณิชย์ ช่วยลดค่าไฟกลางวัน ดำเนินการขออนุญาตขนานการไฟฟ้านครหลวง/ภูมิภาคครบวงจร",
    tags: ["Solar Cell", "On-Grid 5kW", "Net Metering", "ลดค่าไฟ"],
    filePath: "/catalog/solar-cell-5kw-grid-tied/solar_01.jpg",
    color: "amber"
  },
  {
    id: "002",
    title: "Solar Air Conditioner",
    titleTh: "แอร์โซล่าเซลล์ Hybrid",
    desc: "นวัตกรรมเครื่องปรับอากาศพลังงานแสงอาทิตย์ ดึงไฟจากแผงโซล่าเซลล์มาใช้โดยตรงในตอนกลางวัน ช่วยประหยัดค่าแอร์ได้สูงสุดถึง 80% เย็นฉ่ำ ทำงานต่อเนื่องแม้ไม่มีแดด",
    tags: ["Solar Air Condition", "Hybrid Solar", "Inverter", "ประหยัดพลังงาน"],
    filePath: "/catalog/air-conditioners/air-01.jpg",
    color: "yellow"
  },
  {
    id: "003",
    title: "EV Charger Installation",
    titleTh: "ติดตั้งตู้ชาร์จรถยนต์ไฟฟ้า EV",
    desc: "บริการเดินสายเมนไฟฟ้า วงจรย่อย และติดตั้ง Wallbox EV Charger รองรับการชาร์จรถยนต์ไฟฟ้า 1-2 คัน ตามมาตรฐานความปลอดภัยทางการไฟฟ้า พร้อมระบบป้องกันกระแสเกิน/ไฟรั่ว",
    tags: ["EV Charger", "Wallbox", "เดินสายไฟ EV", "ระบบไฟฟ้าบ้าน"],
    filePath: "/catalog/dual-ev-charger-circuits/ec_charger_01.jpg",
    color: "emerald"
  },
  {
    id: "004",
    title: "Air Conditioning Services",
    titleTh: "บริการแอร์บ้านครบวงจร",
    desc: "จำหน่าย ติดตั้ง ล้างทำความสะอาด ย้ายตำแหน่ง และย้ายคอยล์ร้อน/คอยล์เย็น แอร์ทุกยี่ห้อ โดยช่างผู้เชี่ยวชาญ เติมน้ำยาแอร์ ตรวจเช็กระบบไฟฟ้าและรั่วซึมก่อนส่งมอบ",
    tags: ["ติดตั้งแอร์", "ล้างแอร์บ้าน", "ซ่อมแอร์", "ย้ายแอร์"],
    filePath: "/catalog/air-conditioners/air-solar-03.jpg",
    color: "blue"
  },
  {
    id: "005",
    title: "CCTV & Security Systems",
    titleTh: "กล้องวงจรปิด & ระบบความปลอดภัย",
    desc: "ติดตั้งระบบกล้องวงจรปิด CCTV แบบ IP Camera และ HD ดูออนไลน์ผ่านมือถือได้ 24 ชั่วโมง พร้อมบริการติดตั้งประตูรีโมทอัตโนมัติ และระบบคีย์การ์ดเข้า-ออกบ้าน/อาคาร",
    tags: ["CCTV", "กล้องวงจรปิด", "ประตูรีโมท", "Smart Home"],
    filePath: "/catalog/cctv-surveillance/cctv_01.jpg",
    color: "indigo"
  },
  {
    id: "006",
    title: "Curtain & Partition Screen",
    titleTh: "ฉากกั้นแอร์ ผ้าม่าน & มุ้งลวด",
    desc: "บริการวัดหน้างานและติดตั้งฉากกั้นห้อง/ฉากกั้นแอร์ PVC ผ้าม่านกัน UV มู่ลี่ และมุ้งลวดจีบกันแมลง ช่วยแบ่งพื้นที่ห้องและกักเก็บความเย็น เพิ่มประสิทธิภาพการทำงานของแอร์",
    tags: ["ฉากกั้นแอร์", "ผ้าม่านกัน UV", "มุ้งลวดจีบ", "กั้นห้อง"],
    filePath: "/catalog/partition-and-curtains/partition.jpg",
    color: "teal"
  },
  {
    id: "007",
    title: "Electrical Control Panel",
    titleTh: "งานตู้ควบคุมไฟฟ้า & ตู้ ATS",
    desc: "รับประกอบและปรับปรุงตู้เมนไฟฟ้า (MDB/DB) ตู้ควบคุมปั๊มน้ำ และระบบ ATS สลับไฟอัตโนมัติ สำหรับบ้านพักอาศัย อาคาร และโรงงานขนาดเล็ก โดยช่างมีใบอนุญาตมาตรฐานวิชาชีพ",
    tags: ["ตู้ไฟบ้าน", "MDB Panel", "ระบบ ATS", "เดินสายไฟ"],
    filePath: "/catalog/electrical-and-maintenance/electric_01.jpg",
    color: "cyan"
  },
  {
    id: "008",
    title: "Home Renovation & Structure",
    titleTh: "ต่อเติมบ้าน & โครงสร้างหลังคา",
    desc: "บริการงานโครงสร้างเหล็ก หลังคาโรงรถ งานต่อเติมครัว/ลานซักล้าง งานกั้นห้องผนังเบา และงานเคลือบพื้น Epoxy/PU สำหรับโรงรถหรือพื้นที่ใช้งานอุตสาหกรรม",
    tags: ["ต่อเติมบ้าน", "หลังคาโรงรถ", "ผนังเบา", "พื้น Epoxy"],
    filePath: "/catalog/home-renovation/home-renovation_01.jpg",
    color: "slate"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
            สินค้าและ <span className="text-blue-600">บริการของเรา</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Happy Home Service HY ให้บริการครบวงจรตั้งแต่การประเมินหน้างาน ออกแบบระบบ จัดหาอุปกรณ์ จนถึงการติดตั้งและดูแลหลังการขาย
            โดยทีมช่างผู้เชี่ยวชาญมีใบอนุญาตมาตรฐานวิชาชีพ
          </p>
        </header>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className="h-full">
              <Link
                href={`/preview/${service.id}`}
                className="bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-sm hover:shadow-2xl cursor-pointer hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group"
              >
                {/* 1. ส่วนรูปภาพ */}
                <div className="relative w-full h-56 rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
                  <Image
                    src={service.filePath}
                    alt={service.titleTh}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay แสงเงา */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* 2. ส่วนเนื้อหา */}
                <div className="px-4 pb-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-[2px] bg-blue-600" aria-hidden="true" />
                    <span className="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">
                      {service.title}
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.titleTh}
                  </h2>

                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3 text-sm">
                    {service.desc}
                  </p>

                  {/* 3. Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 px-3 py-1 rounded-lg uppercase tracking-wider transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}