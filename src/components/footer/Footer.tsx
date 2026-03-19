import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, MessageCircle, ArrowRight, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1221] text-slate-300">
      {/* ส่วนกลาง: ข้อมูลหลัก */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* คอลัมน์ 1: ข้อมูลบริษัท */}
        <div className="space-y-6">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white">TMC</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Thaimechatronics</span>
          </Link>
          <p className="text-sm leading-relaxed">
            บริษัท ทีเอ็มซี ไทยแมคคาทรอนิคส์ จำกัด <br />
            ผู้เชี่ยวชาญด้านการออกแบบและผลิตเครื่องจักรอัตโนมัติควบคุมด้วยระบบ PLC
            และโซลูชันสิ่งแวดล้อมครบวงจร
          </p>
        </div>

        {/* คอลัมน์ 2: สินค้าและบริการ */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">สินค้าและบริการ</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/services/automation" className="hover:text-blue-400 transition-colors">ระบบควบคุม PLC</Link></li>
            <li><Link href="/services/conveyor" className="hover:text-blue-400 transition-colors">สายพานลำเลียง</Link></li>
            <li><Link href="/services/wastewater" className="hover:text-blue-400 transition-colors">ระบบบำบัดน้ำเสีย</Link></li>
            <li><Link href="/services/air-pollution" className="hover:text-blue-400 transition-colors">ระบบบำบัดอากาศเสีย</Link></li>
          </ul>
        </div>

        {/* คอลัมน์ 3: การติดต่อ */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">ติดต่อเรา</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>329 ซอยพระรามที่ 2 ซอย 44 แขวงจอมทอง เขตจอมทอง กรุงเทพฯ 10150</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <p>061-352-9166</p>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <Link href="mailto:thai.macha2017@gmail.com" className="hover:text-white transition-colors text-xs">thai.macha2017@gmail.com</Link>
            </li>
          </ul>
        </div>
        {/* คอลัมน์ 4: โซเชียลมีเดีย */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">ติดตามข่าวสาร</h4>
          <div className="flex flex-col gap-3 mb-6">
            {/* Facebook Item */}
            <Link
              href="https://www.facebook.com/wct5238m"
              className="group flex items-center gap-4 p-2 rounded-2xl hover:bg-blue-600/10 transition-all border border-transparent hover:border-blue-500/30"
            >
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all text-slate-400">
                <Facebook size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Facebook</span>
                <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">ไทยแมคคาทรอนิคส์</p>
              </div>
            </Link>

            {/* Line Item */}
            <div
              className="group flex items-center gap-4 p-2 rounded-2xl hover:bg-green-600/10 transition-all border border-transparent hover:border-green-500/30"
            >
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all text-slate-400">
                <MessageCircle size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Line Official</span>
                <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">0613529166</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            สอบถามข้อมูลสินค้าและบริการได้ตลอด 24 ช.ม.
          </p>
        </div>
      </div>
      {/* ส่วนท้ายสุด: Copyright */}
      <div className="bg-black/30 py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} TMC THAIMECHATRONICS CO., LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}