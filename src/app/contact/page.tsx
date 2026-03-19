import React from 'react';
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Clock,
    Send,
    ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="bg-white pt-24 pb-20">

            {/* --- Header Section --- */}
            <section className="max-w-7xl mx-auto px-6 mb-16">
                <div className="bg-blue-600 rounded-[2.5rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 max-w-2xl">
                        <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            คุยกับเรา <br /><span className="text-blue-200">ได้ตลอด 24 ชั่วโมง</span>
                        </h1>
                        <p className="text-xl text-blue-50 opacity-90 leading-relaxed">
                            เราพร้อมให้คำปรึกษาด้านวิศวกรรม ออกแบบระบบ PLC และโซลูชันสิ่งแวดล้อม
                            ไม่ว่าจะเป็นโครงการขนาดใด ทีมงาน TMC ยินดีให้บริการครับ
                        </p>
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
                {/* --- 1. Contact Info Cards --- */}
                <div className="lg:col-span-1 space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">ช่องทางการติดต่อ</h2>

                    <div className="flex items-center gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hotline 24/7</p>
                            <Link href="tel:0613529166" className="text-lg font-bold text-slate-900 hover:text-blue-600">061-352-9166</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-500 shadow-sm group-hover:bg-green-500 group-hover:text-white transition-all">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Line ID</p>
                            <Link href="https://line.me/ti/p/@0613529166" className="text-lg font-bold text-slate-900 hover:text-blue-600">0613529166</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-blue-200 transition-all">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-500 shadow-sm group-hover:bg-red-500 group-hover:text-white transition-all">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</p>
                            <p className="text-sm font-bold text-slate-900">thai.macha2017@gmail.com</p>
                        </div>
                    </div>

                    <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                        <h3 className="flex items-center gap-2 font-bold text-blue-900 mb-4">
                            <Clock size={18} /> เวลาทำการ
                        </h3>
                        <p className="text-sm text-blue-800 leading-relaxed">
                            ฝ่ายโรงงานและวิศวกรรม: จันทร์ - เสาร์ (08:30 - 17:30 น.)<br />
                            <strong>ฝ่ายบริการด่วน/ฉุกเฉิน: ติดต่อได้ตลอด 24 ชั่วโมง</strong>
                        </p>
                    </div>
                </div>

                {/* --- 2. Contact Form --- */}
                <div className="lg:col-span-2 bg-white p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">ฝากข้อความให้เราติดต่อกลับ</h2>
                    <p className="text-slate-500 mb-10">กรุณากรอกข้อมูลเบื้องต้นเพื่อให้วิศวกรของเราเตรียมข้อมูลก่อนติดต่อท่าน</p>

                    <form className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">ชื่อ-นามสกุล / ชื่อบริษัท</label>
                            <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="ระบุชื่อของท่าน" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">เบอร์โทรศัพท์ติดต่อ</label>
                            <input type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="08x-xxx-xxxx" />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-sm font-bold text-slate-700">ประเภทบริการที่สนใจ</label>
                            <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none">
                                <option>เลือกประเภทบริการ</option>
                                <option>ออกแบบระบบเครื่องจักร / PLC</option>
                                <option>ระบบสายพานลำเลียง</option>
                                <option>ระบบบำบัดน้ำเสีย / อากาศ</option>
                                <option>บริการติดตั้งและซ่อมบำรุง</option>
                                <option>อื่นๆ</option>
                            </select>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-sm font-bold text-slate-700">รายละเอียดเพิ่มเติม</label>
                            <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="แจ้งรายละเอียดโครงการหรือปัญหาที่ท่านต้องการแก้ไข..."></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center gap-3 transition-all">
                                ส่งข้อความสอบถาม <Send size={20} />
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* --- 3. Google Maps Section --- */}
            <section className="max-w-7xl mx-auto px-6 mt-24">
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1">
                        <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                            <MapPin size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">ที่ตั้งโรงงาน</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            329 ซอยพระรามที่ 2 ซอย 44 <br />
                            แขวงจอมทอง เขตจอมทอง
                            กรุงเทพมหานคร 10150
                        </p>
                        <Link
                            href="https://www.google.com/maps/place/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%97%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B8%8B%E0%B8%B5%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B9%80%E0%B9%80%E0%B8%A1%E0%B8%84%E0%B8%84%E0%B8%B2%E0%B8%97%E0%B8%A3%E0%B8%AD%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B9%8C/@13.6663375,100.2797699,17527m/data=!3m1!1e3!4m10!1m2!2m1!1z4Lia4Lij4Li04Lip4Lix4LiXIOC4l-C4teC5gOC4reC5h-C4oeC4i-C4teC5hOC4l-C4ouC5gOC5gOC4oeC4hOC4suC4l-C4o-C4reC4meC4tOC4geC4quC5jCA!3m6!1s0x30e2bf5fefb5da8b:0xda68435b63c0dfcf!8m2!3d13.6663429!4d100.3498005!15sClvguJrguKPguLTguKnguLHguJcg4LiX4Li14LmA4Lit4LmH4Lih4LiL4Li14LmE4LiX4Lii4LmA4LmA4Lih4LiE4Liy4LiX4Lij4Lit4LiZ4Li04LiB4Liq4LmMkgESYXV0b21hdGlvbl9jb21wYW554AEA!16s%2Fg%2F11yxmcmcms?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            className="inline-flex items-center gap-2 font-bold text-blue-600 hover:underline"
                        >
                            เปิดใน Google Maps <ExternalLink size={18} />
                        </Link>
                    </div>
                    <div className="lg:col-span-2 h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                        {/* Embed Google Map (Placeholder iframe) */}
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://maps.google.com/maps?q=13.666312, 100.349790&hl=th&z=16&output=embed"
                        ></iframe>
                    </div>
                </div>
                <div className="grid mt-20 lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-2 h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                        {/* Embed Google Map (Placeholder iframe) */}
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://maps.google.com/maps?q=13.666312, 100.349790&hl=th&z=16&output=embed"
                        ></iframe>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                            <MapPin size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">ที่ตั้งสำนักงาน</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            18/7 ซอยสุวรรณคร ถนนบางบอน 5 <br /> เเขวงหนองเเขม เขตหนองเเขม กรุงเทพมหานคร 10160
                        </p>
                        <Link
                            href="https://www.google.com/maps/place/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%97%E0%B8%B5%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%A1%E0%B8%8B%E0%B8%B5%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B9%80%E0%B9%80%E0%B8%A1%E0%B8%84%E0%B8%84%E0%B8%B2%E0%B8%97%E0%B8%A3%E0%B8%AD%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B9%8C/@13.6663375,100.2797699,17527m/data=!3m1!1e3!4m10!1m2!2m1!1z4Lia4Lij4Li04Lip4Lix4LiXIOC4l-C4teC5gOC4reC5h-C4oeC4i-C4teC5hOC4l-C4ouC5gOC5gOC4oeC4hOC4suC4l-C4o-C4reC4meC4tOC4geC4quC5jCA!3m6!1s0x30e2bf5fefb5da8b:0xda68435b63c0dfcf!8m2!3d13.6663429!4d100.3498005!15sClvguJrguKPguLTguKnguLHguJcg4LiX4Li14LmA4Lit4LmH4Lih4LiL4Li14LmE4LiX4Lii4LmA4LmA4Lih4LiE4Liy4LiX4Lij4Lit4LiZ4Li04LiB4Liq4LmMkgESYXV0b21hdGlvbl9jb21wYW554AEA!16s%2Fg%2F11yxmcmcms?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            className="inline-flex items-center gap-2 font-bold text-blue-600 hover:underline"
                        >
                            เปิดใน Google Maps <ExternalLink size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}