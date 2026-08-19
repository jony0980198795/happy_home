import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PrevHeader from "@/src/components/prev/header";
import GalleryPrev from "@/src/components/prev/gallery";
import { serviceImage } from "@/src/data/serviceImageData";

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
        <p className="text-slate-500 mb-4">ไม่พบข้อมูลหมวดหมู่บริการที่ระบุ</p>
        <Link href="/services" className="text-blue-600 underline font-medium">
          กลับหน้าบริการทั้งหมด
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Navigation & Header */}
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-blue-600 mb-8 font-bold hover:gap-3 transition-all"
        >
          <ArrowLeft size={20} /> ย้อนกลับไปหน้าบริการ
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