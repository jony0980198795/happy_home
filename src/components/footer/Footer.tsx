import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1221] text-slate-300">
      {/* ส่วนกลาง: ข้อมูลหลัก */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* คอลัมน์ 1: ข้อมูลแบรนด์ */}
        <div className="space-y-6">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-white">
              Happy Home Service <span className="text-blue-500">HY</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
              Solar Cell & Home Service Solution
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            ผู้เชี่ยวชาญด้านการติดตั้งระบบโซล่าเซลล์ขายไฟ, ตู้ชาร์จ EV, แอร์บ้าน, กล้องวงจรปิด CCTV, ประตูรีโมทอัตโนมัติ และงานตกแต่งบ้านครบวงจร โดยทีมช่างมีใบอนุญาตมาตรฐาน ปลอดภัย ไม่ทิ้งงาน
          </p>
        </div>

        {/* คอลัมน์ 2: สินค้าและบริการ */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide border-l-4 border-blue-500 pl-3">
            บริการของเรา
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/preview/002/" className="hover:text-blue-400 transition-colors">
                แอร์โซล่าเซลล์
              </Link>
            </li>
            <li>
              <Link href="/preview/001/" className="hover:text-blue-400 transition-colors">
                โซล่าเซลล์ 5 kW (ระบบขายไฟ)
              </Link>
            </li>
            <li>
              <Link href="/preview/003/" className="hover:text-blue-400 transition-colors">
                วงจรไฟฟ้าตู้ชาร์จ EV (2 รถ)
              </Link>
            </li>
            <li>
              <Link href="/preview/004/" className="hover:text-blue-400 transition-colors">
                ติดตั้ง / ล้าง / ย้าย แอร์บ้าน
              </Link>
            </li>
            <li>
              <Link href="/preview/005/" className="hover:text-blue-400 transition-colors">
                กล้องวงจรปิด CCTV & ประตูรีโมท
              </Link>
            </li>
            <li>
              <Link href="/preview/006/" className="hover:text-blue-400 transition-colors">
                ฉากกั้นแอร์ ผ้าม่าน & มุ้งลวด
              </Link>
            </li>
          </ul>
        </div>

        {/* คอลัมน์ 3: การติดต่อ */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide border-l-4 border-blue-500 pl-3">
            ติดต่อเรา
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
              <span className="text-slate-400">
                ให้บริการครอบคลุมพื้นที่ อ.หาดใหญ่ จ.สงขลา และพื้นที่ใกล้เคียง
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <Link href="tel:0861206859" className="hover:text-white transition-colors">
                086-120-6859
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <Link href="mailto:paisarn444@gmail.com" className="hover:text-white transition-colors text-xs">
                paisarn444@gmail.com
              </Link>
            </li>
          </ul>
        </div>

        {/* คอลัมน์ 4: โซเชียลมีเดีย */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide border-l-4 border-blue-500 pl-3">
            ติดตามข่าวสาร & ประเมินงาน
          </h4>
          <div className="flex flex-col gap-3 mb-6">
            {/* Line Item */}
            <Link
              href={'/contact'}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-2 rounded-2xl hover:bg-green-600/10 transition-all border border-transparent hover:border-green-500/30"
            >
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all text-slate-400">
                <MessageCircle size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Line Official</span>
                <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  ส่งรูปประเมินหน้างานฟรี
                </p>
              </div>
            </Link>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            พร้อมปรึกษาและประเมินราคาหน้างานฟรีไม่มีค่าใช้จ่าย
          </p>
        </div>

      </div>

      {/* ส่วนท้ายสุด: Copyright */}
      <div className="bg-black/40 py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} HAPPY HOME SERVICE HY. All rights reserved.</p>
          <p className="text-slate-600">ช่างมีใบอนุญาตมาตรฐานวิชาชีพ ปลอดภัย 100%</p>
        </div>
      </div>
    </footer>
  );
}