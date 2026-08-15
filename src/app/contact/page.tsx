import React from 'react';
import {
    Phone,
    Mail,
    MapPin,
    MessageCircle,
    Clock,
    Send,
    ExternalLink,
    QrCode,
    ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
    return (
        <div className="bg-white pt-24 pb-20">

            {/* --- Header Section --- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden shadow-xl">
                    <div className="relative z-10 max-w-xl">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight">
                            ติดต่อสอบถาม <span className="text-blue-200">ประเมินหน้างานฟรี</span>
                        </h1>
                        <p className="text-sm sm:text-base text-blue-50 opacity-90 leading-relaxed">
                            พร้อมให้คำปรึกษาด้านโซล่าเซลล์ แอร์ ตู้ชาร์จ EV และกล้อง CCTV
                            ทีมช่าง Happy Home Service HY ยินดีให้บริการด้วยความจริงใจครับ
                        </p>
                    </div>
                    {/* Decorative Subtle Circle */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none"></div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="lg:col-span-1 space-y-6">
                    {/* Section Header */}
                    <div className="border-l-4 border-blue-600 pl-4">
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                            ช่องทางการติดต่อ
                        </h2>
                        <p className="text-xs text-slate-500 mt-1">
                            Happy Home Service HY - ยินดีให้บริการด้วยความจริงใจ
                        </p>
                    </div>

                    {/* Contact Cards Grid */}
                    <div className="space-y-4">
                        {/* Phone Card */}
                        <Link
                            href="tel:0861206859"
                            className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-0.5">
                                        Hotline 24/7
                                    </p>
                                    <p className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        086-120-6859
                                    </p>
                                </div>
                            </div>
                            <ArrowUpRight
                                size={18}
                                className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                            />
                        </Link>

                        {/* Line Card */}
                        <div
                            className="group flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                                    <MessageCircle size={22} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider mb-0.5">
                                        Line Official / ID
                                    </p>
                                    <p className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                        0861206859
                                    </p>
                                </div>
                            </div>
                            <ArrowUpRight
                                size={18}
                                className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                            />
                        </div>

                        {/* Email Card */}
                        <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                            <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 shrink-0">
                                <Mail size={22} />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-[11px] font-bold text-rose-500 uppercase tracking-wider mb-0.5">
                                    Email Address
                                </p>
                                <p className="text-sm font-bold text-slate-900 truncate">
                                    happyhomeservice.hy@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-lg font-bold text-slate-900">Line QR Code</p>

                            {/* กำหนดขนาดกรอบรูปตรงนี้ (เช่น w-40 h-40 = 160x160px) และต้องใส่ relative */}
                            <div className="relative w-40 h-40 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm group">
                                <Image
                                    src="/contact/line_qr.jpg"
                                    alt="Line QR Code"
                                    fill
                                    sizes="160px"
                                    /* ใช้ object-contain เพื่อไม่ให้รูป QR Code โดนครอบตัดขอบ */
                                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 3. Google Maps Section --- */}
            <section className="max-w-7xl mx-auto px-6 mt-24">
                <div className="grid lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-1">
                        <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                            <MapPin size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">ที่ตั้งบริษัท</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            ... ซอย ... <br />
                            แขวง... เขต...
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
            </section>
        </div>
    );
}