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
            เกี่ยวกับ <span className="text-blue-600">ไทยแมคคาทรอนิคส์</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ผู้เชี่ยวชาญด้านการผลิตและจัดจำหน่ายระบบอัตโนมัติอุตสาหกรรม
            เราส่งมอบนวัตกรรมที่ช่วยยกระดับไลน์การผลิตให้ก้าวสู่ยุคอุตสาหกรรม 4.0 อย่างเต็มตัว
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">จุดเริ่มต้นแห่งนวัตกรรมและการเติบโต</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              บริษัท ทีเอ็มซี ไทยแมคคาทรอนิคส์ จำกัด ก่อตั้งขึ้นเมื่อวันที่ 22 พฤศจิกายน 2560 ด้วยทุนจดทะเบียน 5,000,000 บาท
              เพื่อดำเนินธุรกิจวิศวกรรมแมคคาทรอนิคส์ครบวงจร
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              จากก้าวแรกที่มุ่งเน้นการจำหน่ายเครื่องมือกล เราได้ขยายขีดความสามารถสู่การเป็นผู้ผลิตระบบควบคุมอัตโนมัติ PLC
              และระบบบำบัดสิ่งแวดล้อม ปัจจุบันเราตั้งอยู่ที่ซอยพระรามที่ 2 ซอย 44
              โดยมุ่งมั่นที่จะนำเทคโนโลยีที่ทันสมัยมาเพิ่มประสิทธิภาพให้กับผู้ประกอบการทั่วประเทศไทย
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-500 mt-1" size={20} />
                <span className="text-slate-700 font-medium">จดทะเบียนถูกต้องตามกฎหมาย</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-blue-500 mt-1" size={20} />
                <span className="text-slate-700 font-medium">ทุนจดทะเบียน 5 ล้านบาท</span>
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
            className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Eye className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">วิสัยทัศน์ (Vision)</h3>
            <p className="text-blue-50 leading-relaxed opacity-90 text-lg">
              "เป็นผู้นำด้านเทคโนโลยีแมคคาทรอนิคส์และระบบอัตโนมัติในระดับภูมิภาค
              ที่ขับเคลื่อนภาคอุตสาหกรรมด้วยนวัตกรรมที่ยั่งยืนและเป็นมิตรต่อสิ่งแวดล้อม"
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Target className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">พันธกิจ (Mission)</h3>
            <p className='mb-4'>โซลูชันด้านวิศวกรรมระดับมืออาชีพ</p>
            <ul className="space-y-4 text-blue-50 opacity-90">
              <li className="flex gap-3">
                <span className="text-white font-bold">•</span>
                <span>มุ่งเน้นการทำความเข้าใจและตอบสนองความต้องการของลูกค้าให้ดีเยี่ยมยิ่งกว่าที่คาดหวัง</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">•</span>
                <span>ขับเคลื่อนด้วยความมุ่งมั่นอย่างแรงกล้าในการสร้างสรรค์นวัตกรรมอย่างต่อเนื่อง และการพัฒนาโซลูชันที่มองไปข้างหน้า (Forward-thinking)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">•</span>
                <span>มุ่งมั่นที่จะส่งมอบผลิตภัณฑ์คุณภาพสูงให้ตรงตามกำหนดเวลา และสอดคล้องกับความคาดหวังของลูกค้าอย่างครบถ้วน</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-bold">•</span>
                <span>บริการหลังการขายตลอด 24 ชั่วโมง</span>
              </li>
            </ul>
          </motion.div>
        </div>
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full -mr-48 -mt-48 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full -ml-32 -mb-32 opacity-20"></div>
      </section>

      {/* --- Expert Team --- */}
      <section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <div className="flex justify-center items-center gap-3 text-blue-600 font-bold mb-4">
            <Users size={24} />
            <span className="uppercase tracking-widest text-sm">Our Experts</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-16">ผู้บริหาร</h2>

          <div className="grid md:grid-cols-1 gap-12 text-center">
            {[
              { name: "Mr. Kavee Rakngern", role: "Co-Founder & COO", desc: "ผู้บริหารที่มีวิสัยทัศน์กว้างไกล มุ่งเน้นการเติบโตของธุรกิจและเทคโนโลยี" }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="w-48 h-48 bg-slate-100 rounded-full mx-auto mb-6 border-4 border-slate-50 overflow-hidden shadow-inner group-hover:border-blue-100 transition-colors">
                  <img src={`/leader/coo.jpg`} alt={member.name} className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h4>
                <p className="text-blue-600 font-semibold text-sm mb-4">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
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
                เราดำเนินธุรกิจด้วยความโปร่งใสและได้รับมาตรฐานตามที่กฎหมายกำหนด
                พร้อมด้วยผลงานที่ได้รับความไว้วางใจจากสถานประกอบการมากกว่า
                <span className="font-bold text-blue-600"> 200+ แห่งทั่วประเทศ</span>
              </p>

              <div className="space-y-5">

                {/* CARD 1 */}
                <div className="group flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="p-3 bg-green-100 rounded-xl group-hover:scale-110 transition">
                    <ShieldCheck className="text-green-600" size={26} />
                  </div>
                  <span className="text-slate-800 font-semibold">
                    ใบอนุญาตประกอบกิจการค้าเครื่องจักรและเครื่องมือกล
                  </span>
                </div>

                {/* CARD 2 */}
                <div className="group flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="p-3 bg-green-100 rounded-xl group-hover:scale-110 transition">
                    <ShieldCheck className="text-green-600" size={26} />
                  </div>
                  <span className="text-slate-800 font-semibold">
                    ได้รับความไว้วางใจจากลูกค้าอุตสาหกรรมกว่า 200 บริษัท
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
                  "/logo/lion.png",
                  "/logo/parker.png",
                  "/logo/pjm.png",
                  "/logo/scg.png",
                  "/logo/toyota.jpg",
                  "/logo/yuasa.png",
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