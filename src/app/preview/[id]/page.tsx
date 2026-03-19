
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Info, Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import PrevHeader from "@/src/components/prev/header";
import Gallery from "@/src/components/prev/gallery";
import GalleryPrev from "@/src/components/prev/gallery";

const serviceImage = [
  {
    id: "001",
    title: "ระบบอัตโนมัติและควบคุม",
    desc: "ออกแบบและติดตั้งระบบควบคุม PLC, HMI และ Scada ที่มีความแม่นยำสูง เพื่อเพิ่มประสิทธิภาพและลดความผิดพลาดในกระบวนการผลิตอุตสาหกรรม",
    imageFile: [
      { img_path: "/catalog/automation/auto_01.png", engine_name: "เครื่อง Reject Sticker" },
      { img_path: "/catalog/automation/auto_02.png", engine_name: "เครื่อง Pumper" },
      { img_path: "/catalog/automation/auto_03.png", engine_name: "เครื่องติด Sticker" },
      { img_path: "/catalog/automation/auto_04.png", engine_name: "เครื่องพ่นสี" },
      { img_path: "/catalog/automation/auto_05.png", engine_name: "เครื่องล้างหัวพ่นสี" },
      { img_path: "/catalog/automation/auto_06.png", engine_name: "เครื่องตัดเศษยาง ใบปัดน้ำฝน" },
      { img_path: "/catalog/automation/auto_07.png", engine_name: "เครื่องติดฉลาก" },
      { img_path: "/catalog/automation/auto_08.png", engine_name: "เครื่องผสม" },
      { img_path: "/catalog/automation/auto_09.png", engine_name: "เครื่องกรองน้ำ ระบบ DI Water" },
      { img_path: "/catalog/automation/auto_10.png", engine_name: "เครื่องผสมน้ำหวาน" },
      { img_path: "/catalog/automation/auto_12.png", engine_name: "เครื่อง 3D Printing" },
    ]
  },
  {
    id: "002",
    title: "ระบบลำเลียงเเละสารการผลิต",
    desc: "บริการออกแบบและติดตั้งระบบสายพานลำเลียง (Conveyor System) ทุกรูปแบบ เพื่อการเคลื่อนย้ายวัตถุดิบและสินค้าอย่างเป็นระบบและรวดเร็ว",
    imageFile: [
      { img_path: "/catalog/conveyor/con_01.png", engine_name: "" },
      { img_path: "/catalog/conveyor/con_02.png", engine_name: "" },
      { img_path: "/catalog/conveyor/conud_03.png", engine_name: "" },
      { img_path: "/catalog/conveyor/con_04.png", engine_name: "" },
    ]
  },
  {
    id: "003",
    title: "ตู้คอนโทรล",
    desc: "รับประกอบและติดตั้งตู้ควบคุมไฟฟ้า (Control Panel) ทั้งระบบ MDB และ DB โดยเลือกใช้อุปกรณ์มาตรฐานสากลเพื่อความปลอดภัยสูงสุดของโรงงาน",
    imageFile: [
      { img_path: "/catalog/cab/cab_01.png", engine_name: "" },
      { img_path: "/catalog/cab/cabud_02.png", engine_name: "" },
      { img_path: "/catalog/cab/cabud_03.png", engine_name: "" },
      { img_path: "/catalog/cab/cabud_04.png", engine_name: "" },
      { img_path: "/catalog/cab/cab_05.png", engine_name: "" },
    ]
  },
  {
    id: "004",
    title: "งานพื้น",
    desc: "บริการเคลือบพื้นผิวอุตสาหกรรมด้วย Epoxy และ PU ที่มีความทนทานต่อสารเคมี แรงกระแทก และป้องกันเชื้อรา เหมาะสำหรับโรงงานและคลังสินค้า",
    imageFile: [
      { img_path: "/catalog/floor/floored_01.png", engine_name: "" },
      { img_path: "/catalog/floor/floorup_02.png", engine_name: "" },
      { img_path: "/catalog/floor/floor_03.png", engine_name: "" },
    ]
  },
  {
    id: "005",
    title: "โครงสร้าง",
    desc: "บริการออกแบบและติดตั้งงานโครงสร้างเหล็ก งานรับเหมาโครงสร้างโรงงาน (Steel Structure) ที่แข็งแรงทนทานตามหลักวิศวกรรม",
    imageFile: [
      { img_path: "/catalog/structur/stud_01.png", engine_name: "" },
      { img_path: "/catalog/structur/sted_02.png", engine_name: "" },
      { img_path: "/catalog/structur/sted_03.png", engine_name: "" },
      { img_path: "/catalog/structur/stud_04.png", engine_name: "" },
      { img_path: "/catalog/structur/st_05.png", engine_name: "" },
    ]
  },
  {
    id: "006",
    title: "ระบบท่อ DUST",
    desc: "ติดตั้งระบบท่อดูดฝุ่นและระบบระบายอากาศในโรงงานอุตสาหกรรม เพื่อกำจัดมลพิษทางอากาศและสร้างสภาพแวดล้อมที่ดีในการทำงาน",
    imageFile: [
      { img_path: "/catalog/dust/dust_01.png", engine_name: "" },
      { img_path: "/catalog/dust/dusted_02.png", engine_name: "" },
      { img_path: "/catalog/dust/dustup_03.png", engine_name: "" },
      { img_path: "/catalog/dust/dustup_04.png", engine_name: "" },
      { img_path: "/catalog/dust/dust_05.png", engine_name: "" },
    ]
  },
  {
    id: "007",
    title: "งานรื้อถอน ขนย้าย",
    desc: "บริการรื้อถอนเครื่องจักร ย้ายตำแหน่งเครื่องจักรในไลน์ผลิต และขนย้ายอุปกรณ์ขนาดใหญ่ด้วยทีมงานมืออาชีพที่มีความปลอดภัยสูง",
    imageFile: [
      { img_path: "/catalog/dismantle/dis_01.png", engine_name: "" },
      { img_path: "/catalog/dismantle/dis_02.png", engine_name: "" },
      { img_path: "/catalog/dismantle/dis_03.png", engine_name: "" },
      { img_path: "/catalog/dismantle/dis_04.png", engine_name: "" },
    ]
  },
  {
    id: "008",
    title: "ระบบท่อปะปา ดับเพลิง เเละระบบน้ำดื่ม",
    desc: "จำหน่ายอุปกรณ์และชิ้นส่วนสำหรับระบบท่อประปา ระบบท่อดับเพลิง และระบบน้ำดื่มคุณภาพสูง เหมาะสำหรับงานอาคาร โรงงานอุตสาหกรรม และระบบสาธารณูปโภค",
    imageFile: [
      { img_path: "/catalog/pipe/pipeud_01.png", engine_name: "" },
      { img_path: "/catalog/pipe/pipeed_02.png", engine_name: "" },
      { img_path: "/catalog/pipe/pipeed_03.png", engine_name: "" },
      { img_path: "/catalog/pipe/pipeed_04.png", engine_name: "" },
      { img_path: "/catalog/pipe/pipe_05.png", engine_name: "" },
    ]
  },
  {
    id: "009",
    title: "สินค้า",
    desc: "จำหน่ายอุปกรณ์และชิ้นส่วนอะไหล่สำหรับเครื่องจักรกลอุตสาหกรรมคุณภาพสูง นำเข้าจากแบรนด์ชั้นนำเพื่อสนับสนุนการซ่อมบำรุง",
    imageFile: [
      { img_path: "/catalog/product/prod_01.png", engine_name: "" },
      { img_path: "/catalog/product/prod_03.png", engine_name: "" },
      { img_path: "/catalog/product/proded_04.png", engine_name: "" },
      { img_path: "/catalog/product/prod_05.png", engine_name: "" },
      { img_path: "/catalog/product/prod_02.png", engine_name: "" },
      { img_path: "/catalog/product/produp_06.png", engine_name: "" },
    ]
  }
];
export async function generateStaticParams() {
  return serviceImage.map((service) => ({
    id: service.id, 
  }));
}
export default async function PreviewPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const currentService = serviceImage.find((item) => item.id === id);

  if (!currentService) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-slate-500 mb-4">ไม่พบข้อมูลหมวดหมู่ที่ระบุ</p>
        <Link href="/services" className="text-blue-600 underline">กลับหน้าหลัก</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Navigation & Header */}
        <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 mb-8 font-bold hover:gap-4 transition-all">
          <ArrowLeft size={20} /> ย้อนกลับ
        </Link>

        <PrevHeader currentService={currentService}/>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentService.imageFile.map((item, index) => (
            <GalleryPrev key={index} index={index} item={item} currentService={currentService}/>
          ))}
        </div>
      </div>
    </div>
  );
}