'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, History, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* --- Header Section --- */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            <span className="text-blue-600">Happy Home Service HY</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ผู้เชี่ยวชาญด้านการติดตั้งระบบโซล่าเซลล์ แอร์บ้าน ตู้ชาร์จ EV และงานระบบความปลอดภัยบ้านครบวงจร
            เราส่งมอบบริการมาตรฐานสูงที่ช่วยประหยัดพลังงาน เพิ่มความปลอดภัย และยกระดับคุณภาพชีวิตของคุณ
          </p>
        </motion.div>
      </section>

      {/* --- History Section --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/tmc_company/office.jpg"
              alt="TMC History"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">2017</p>
              <p className="text-sm opacity-80 uppercase tracking-widest font-semibold">Year Established</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-blue-600 font-bold mb-4">
              <History size={24} />
              <span className="uppercase tracking-widest text-sm">Our History</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">จุดเริ่มต้นแห่งการบริการและความเชี่ยวชาญ</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Happy Home Service HY เริ่มต้นจากการเป็นทีมช่างผู้เชี่ยวชาญด้านระบบไฟฟ้าและเครื่องปรับอากาศในพื้นที่หาดใหญ่-สงขลา
              ด้วยความมุ่งมั่นที่จะยกระดับมาตรฐานงานบริการช่างสำหรับบ้านพักอาศัยและอาคารพาณิชย์
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              จากการดูแลงานติดตั้งระบบแอร์และไฟฟ้าทั่วไป เราได้พัฒนานวัตกรรมงานบริการอย่างต่อเนื่อง สู่การเป็นผู้นำด้านการออกแบบและติดตั้งระบบโซล่าเซลล์ประหยัดพลังงาน ตู้ชาร์จ EV Charger และระบบกล้องวงจรปิดอัจฉริยะ โดยมุ่งเน้นความปลอดภัย มาตรฐานวิชาชีพ และความคุ้มค่าสูงสุดของลูกค้าในพื้นที่ภาคใต้
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-500 mt-1" size={20} />
                <span className="text-slate-700 font-medium">ช่างมีใบอนุญาตมาตรฐานวิชาชีพ</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-500 mt-1" size={20} />
                <span className="text-slate-700 font-medium">ดูแลลูกค้าแล้วกว่า 50+ โครงการ</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Vision & Mission --- */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Eye className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">วิสัยทัศน์ (Vision)</h3>
            <p className="text-blue-50 leading-relaxed opacity-90 text-lg">
              "มุ่งสู่การเป็นผู้นำด้านบริการติดตั้งระบบพลังงานสะอาดและโซลูชันดูแลบ้านครบวงจรในภาคใต้ ที่ส่งมอบความคุ้มค่า ความปลอดภัย และยกระดับคุณภาพชีวิตของทุกครัวเรือนอย่างยั่งยืน"
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Target className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">พันธกิจ (Mission)</h3>
            <p className="mb-4 text-white font-medium">โซลูชันงานบริการช่างมาตรฐานวิชาชีพครบวงจร</p>
            <ul className="space-y-4 text-blue-50 opacity-90">
              <li className="flex gap-3">
                <span className="text-white font-bold">•</span>
                <span>มุ่งเน้นการประเมินและออกแบบระบบโซล่าเซลล์ แอร์ และไฟฟ้า ให้ตรงตามความต้องการและงบประมาณของลูกค้าอย่างคุ้มค่าที่สุด</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">•</span>
                <span>ส่งมอบงานติดตั้งด้วยเทคโนโลยีประหยัดพลังงาน มาตรฐานความปลอดภัยสูง โดยทีมช่างผู้เชี่ยวชาญมีใบอนุญาตวิชาชีพ</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">•</span>
                <span>ดำเนินการติดตั้งอย่างประณีต ตรงต่อเวลา และใช้อุปกรณ์คุณภาพสูงที่ได้รับการรับรองมาตรฐานสากล</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">•</span>
                <span>พร้อมดูแลด้วยบริการหลังการขายที่ใส่ใจ ให้คำปรึกษาและเข้าดูแลอย่างรวดเร็ว ไม่ทิ้งงาน</span>
              </li>
            </ul>
          </motion.div>
        </div>
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full -mr-48 -mt-48 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full -ml-32 -mb-32 opacity-20"></div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 items-center gap-16">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Award className="text-blue-600" />
                </div>
                การรับรองและความเชื่อมั่น
              </h2>
              <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                เราดำเนินธุรกิจด้วยความโปร่งใสและได้รับการรับรองมาตรฐานวิชาชีพ
                พร้อมด้วยผลงานที่ได้รับความไว้วางใจจากบ้านพักอาศัยและอาคารพาณิชย์มากกว่า
                <span className="font-bold text-blue-600"> 500+ แห่งในพื้นที่หาดใหญ่-สงขลา</span>
              </p>
              <div className="space-y-5">
                {/* CARD 1 */}
                <div className="group flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="p-3 bg-green-100 rounded-xl group-hover:scale-110 transition">
                    <ShieldCheck className="text-green-600" size={26} />
                  </div>
                  <span className="text-slate-800 font-semibold">
                    ทีมช่างผ่านการรับรองมีใบอนุญาตประกอบวิชาชีพช่างไฟฟ้าและแอร์
                  </span>
                </div>

                {/* CARD 2 */}
                <div className="group flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="p-3 bg-green-100 rounded-xl group-hover:scale-110 transition">
                    <ShieldCheck className="text-green-600" size={26} />
                  </div>
                  <span className="text-slate-800 font-semibold">
                    ได้รับความไว้วางใจจากลูกค้าบ้านและธุรกิจในภาคใต้กว่า 50+ ครัวเรือน
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT (LOGO TRUST / IMAGE) */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-6 opacity-80">
                {[
                  "/logo/betagroud.png",
                  "/logo/gs.jpg",
                  "/logo/interface.png",
                ].map((logo, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center justify-center hover:shadow-md hover:scale-105 transition"
                  >
                    <img
                      src={logo}
                      alt="client logo"
                      className="h-10 object-contain grayscale hover:grayscale-0 transition"
                    />
                  </div>
                ))}
              </div>
              {/* glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/20 to-transparent blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}