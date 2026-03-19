'use client'
import React from 'react';
import {
  Cpu,
  Truck,
  Wind,
  Wrench,
  Lightbulb,
  ArrowUpRight,
  Droplets,
  Paintbrush,
  Phone
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';

const services = [
  {
    id: "001",
    title: "Automation & Control",
    titleTh: "ระบบอัตโนมัติและควบคุม",
    desc: "ออกแบบและติดตั้งระบบควบคุม PLC, HMI และ Scada ที่มีความแม่นยำสูง เพื่อเพิ่มประสิทธิภาพและลดความผิดพลาดในกระบวนการผลิตอุตสาหกรรม",
    tags: ["PLC Control", "HMI Programming", "Machine Design"],
    filePath: "/catalog/automation/auto_01.png",
    color: "blue"
  },
  {
    id: "002",
    title: "Conveyor",
    titleTh: "ระบบลำเลียงและสายการผลิต",
    desc: "บริการออกแบบและติดตั้งระบบสายพานลำเลียง (Conveyor System) ทุกรูปแบบ เพื่อการเคลื่อนย้ายวัตถุดิบและสินค้าอย่างเป็นระบบและรวดเร็ว",
    tags: ["Conveyor Belt", "Paint Line", "Material Handling"],
    filePath: "/catalog/conveyor/con_02.png",
    color: "sky"
  },
  {
    id: "003",
    title: "Control cabinet",
    titleTh: "ตู้คอนโทรล",
    desc: "รับประกอบและติดตั้งตู้ควบคุมไฟฟ้า (Control Panel) ทั้งระบบ MDB และ DB โดยเลือกใช้อุปกรณ์มาตรฐานสากลเพื่อความปลอดภัยสูงสุดของโรงงาน",
    tags: ["MDB Panel", "Wiring System", "Electrical Design"],
    filePath: "/catalog/cab/cab_01.png",
    color: "cyan"
  },
  {
    id: "004",
    title: "Epoxy Coating",
    titleTh: "งานพื้น",
    desc: "บริการเคลือบพื้นผิวอุตสาหกรรมด้วย Epoxy และ PU ที่มีความทนทานต่อสารเคมี แรงกระแทก และป้องกันเชื้อรา เหมาะสำหรับโรงงานและคลังสินค้า",
    tags: ["Epoxy Floor", "PU Coating", "Industrial Flooring"],
    filePath: "/catalog/floor/floored_01.png",
    color: "cyan"
  },
  {
    id: "005",
    title: "Structure",
    titleTh: "โครงสร้าง",
    desc: "บริการออกแบบและติดตั้งงานโครงสร้างเหล็ก งานรับเหมาโครงสร้างโรงงาน (Steel Structure) ที่แข็งแรงทนทานตามหลักวิศวกรรม",
    tags: ["Steel Structure", "Factory Build", "Structural Work"],
    filePath: "/catalog/structur/sted_02.png",
    color: "cyan"
  },
  {
    id: "006",
    title: "DUST pipe system",
    titleTh: "ระบบท่อ DUST",
    desc: "ติดตั้งระบบท่อดูดฝุ่นและระบบระบายอากาศในโรงงานอุตสาหกรรม เพื่อกำจัดมลพิษทางอากาศและสร้างสภาพแวดล้อมที่ดีในการทำงาน",
    tags: ["Dust Collector", "Ductwork", "Ventilation"],
    filePath: "/catalog/dust/dusted_02.png",
    color: "cyan"
  },
  {
    id: "007",
    title: "Demolition and removal work.",
    titleTh: "งานรื้อถอน ขนย้าย",
    desc: "บริการรื้อถอนเครื่องจักร ย้ายตำแหน่งเครื่องจักรในไลน์ผลิต และขนย้ายอุปกรณ์ขนาดใหญ่ด้วยทีมงานมืออาชีพที่มีความปลอดภัยสูง",
    tags: ["Machine Removal", "Factory Move", "Demolition"],
    filePath: "/catalog/dismantle/dis_02.png",
    color: "cyan"
  },
  {
    id: "008",
    title: "Pipe",
    titleTh: "ระบบท่อปะปา ดับเพลิง เเละระบบน้ำดื่ม",
    desc: "จำหน่ายอุปกรณ์และชิ้นส่วนสำหรับระบบท่อประปา ระบบท่อดับเพลิง และระบบน้ำดื่มคุณภาพสูง เหมาะสำหรับงานอาคาร โรงงานอุตสาหกรรม และระบบสาธารณูปโภค",
    tags: ["Spare Parts", "Industrial Tools", "Machinery"],
    filePath: "/catalog/pipe/pipeed_03.png",
    color: "cyan"
  },
  {
    id: "009",
    title: "Products",
    titleTh: "สินค้า",
    desc: "จำหน่ายอุปกรณ์และชิ้นส่วนอะไหล่สำหรับเครื่องจักรกลอุตสาหกรรมคุณภาพสูง นำเข้าจากแบรนด์ชั้นนำเพื่อสนับสนุนการซ่อมบำรุง",
    tags: ["Spare Parts", "Industrial Tools", "Machinery"],
    filePath: "/catalog/product/prod_01.png",
    color: "cyan"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
            สินค้าและ <span className="text-blue-600">บริการของเรา</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            TMCThaimechatronics ให้บริการครบวงจรตั้งแต่วิเคราะห์ปัญหา ออกแบบระบบ จนถึงการติดตั้งและดูแลหลังการขาย
            โดยทีมวิศวกรผู้เชี่ยวชาญด้านแมคคาทรอนิคส์
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <Link
              href={`/preview/${service.id}`}
              key={service.id}
              className="bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-sm hover:shadow-2xl cursor-pointer hover:-translate-y-2 transition-all duration-500 flex flex-col group"
            >
              {/* 1. ส่วนรูปภาพ: ปรับให้ใหญ่ขึ้นและมีสัดส่วนที่แน่นอน */}
              <div className="relative w-full h-56 rounded-[2rem] overflow-hidden mb-6">
                <Image
                  src={service.filePath || ""}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay แสงเงาบางๆ */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* 2. ส่วนเนื้อหา: ปรับ Padding และตัวอักษร */}
              <div className="px-4 pb-4 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-[2px] bg-blue-600"></span>
                  <h2 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em]">
                    {service.title}
                  </h2>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.titleTh}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3 text-sm">
                  {service.desc}
                </p>

                {/* 3. Tags: ปรับโทนสีให้คลีนขึ้น */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-50">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 px-3 py-1 rounded-lg uppercase tracking-wider transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}