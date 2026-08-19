import React from 'react';
import {
    Phone,
    Mail,
    MessageCircle,
    MapPin,
    ExternalLink
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
                        </div>

                        {/* Email Card */}
                        <a
                            href="mailto:paisarn444@gmail.com"
                            className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-rose-200 transition group cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 shrink-0 group-hover:scale-105 transition-transform">
                                <Mail size={22} />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-[11px] font-bold text-rose-500 uppercase tracking-wider mb-0.5">
                                    Email Address
                                </p>
                                <p className="text-sm font-bold text-slate-900 truncate group-hover:text-rose-600 transition-colors">
                                    paisarn444@gmail.com
                                </p>
                            </div>
                        </a>
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
                        <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-2xl mb-6">
                            <MapPin size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">ที่ตั้งบ้านพัก</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Happy home service hy. <br />
                            25 หมู่บ้านณภัคเมาท์เท่นวิว ถนน เลียบคลอง ร.5 หมู่ 4 ต.คอหงส์ อ.หาดใหญ่ จ.สงขลา 90110
                        </p>
                        <Link
                            href="https://www.google.com/maps/place/7%C2%B002'19.1%22N+100%C2%B029'34.0%22E/@7.038644,100.4902141,1173m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d7.038644!4d100.492789?entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700 hover:underline transition"
                        >
                            เปิดใน Google Maps <ExternalLink size={18} />
                        </Link>
                    </div>
                    <div className="lg:col-span-2 h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                        <iframe
                            title="Minie House @Hatyai Location"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://maps.google.com/maps?q=7.038644,100.492789&hl=th&z=16&output=embed"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}