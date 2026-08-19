'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Eye, X, FileText} from 'lucide-react';
import { certificatesData, CertificateItem } from '@/src/data/certificateData';

export default function CertifiedLicensePage() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold tracking-wide">
            <Award className="w-4 h-4" />
            <span>STANDARDS & CERTIFICATIONS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            มาตรฐาน <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ใบอนุญาตผู้ติดตั้ง</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            มุ่งมั่นให้บริการด้วยมาตรฐานวิชาชีพสูงสุด ทีมช่างของ Happy Home Service HY ทุกคนผ่านการทดสอบ
            และมีหนังสือรับรองความรู้ความสามารถถูกต้องตามกฎหมาย มั่นใจ ปลอดภัย ไม่ทิ้งงาน
          </p>
        </header>

        {/* Highlights Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">ถูกกฎหมาย 100%</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ช่างไฟฟ้ามีหนังสือรับรองความรู้ความสามารถตาม พ.ร.บ. ส่งเสริมการพัฒนาฝีมือแรงงาน
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">มาตรฐานฝีมือแรงงาน</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ผ่านการทดสอบมาตรฐานฝีมือแรงงานแห่งชาติ ทั้งงานไฟฟ้า แอร์ และระบบโซล่าเซลล์
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-1">รับประกันงานติดตั้ง</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ทำสัญญาถูกต้อง ชัดเจน มีการรับประกันผลงานหลังการติดตั้ง พร้อมดูแลต่อเนื่อง
              </p>
            </div>
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 group"
            >
              {/* Certificate Image Preview */}
              <div 
                onClick={() => setSelectedCert(cert)}
                className="relative w-full sm:w-48 h-56 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 cursor-pointer group-hover:opacity-95 transition-opacity"
              >
                <Image
                  src={cert.imagePath}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-bold">
                  <Eye className="w-4 h-4" />
                  <span>คลิกเพื่อดูขยาย</span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="flex flex-col justify-between flex-grow space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md">
                      เลขที่: {cert.licenseNo}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mb-3">
                    ผู้ออกใบรับรอง: <span className="text-slate-700">{cert.issuedBy}</span>
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {cert.desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 pt-2 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>ตรวจสอบรายละเอียดใบอนุญาต</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (แสดงเมื่อกดดูรูปขยาย) */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative border border-slate-100"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div>
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-slate-500">เลขที่ใบอนุญาต: {selectedCert.licenseNo}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-9 h-9 rounded-full bg-slate-200/60 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body / Image Display */}
              <div className="p-6 bg-slate-100 flex items-center justify-center min-h-[300px] sm:min-h-[420px] relative">
                <div className="relative w-full h-[320px] sm:h-[450px]">
                  <Image
                    src={selectedCert.imagePath}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-white space-y-2">
                <p className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">หน่วยงานผู้ออกใบรับรอง:</span> {selectedCert.issuedBy}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedCert.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}