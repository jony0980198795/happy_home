import { Settings, ShieldCheck, Zap, LucideIcon } from "lucide-react";

export interface FeatureItem {
  id: number;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const featuresData: FeatureItem[] = [
  {
    id: 1,
    icon: Settings,
    title: "บริการครบวงจร One-Stop Service",
    desc: "ดูแลครบจบในที่เดียว ตั้งแต่แอร์บ้าน โซล่าเซลล์ ตู้ชาร์จ EV กล้องวงจรปิด ประตูรีโมท ไปจนถึงงานผ้าม่านและฉากกั้นแอร์",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "ช่างมีใบอนุญาตถูกต้อง 100%",
    desc: "ทีมช่างผ่านการรับรองและมีใบอนุญาตประกอบวิชาชีพอย่างถูกต้อง มั่นใจได้ในมาตรฐานความปลอดภัย ไม่ทิ้งงาน พร้อมสัญญารับประกัน",
  },
  {
    id: 3,
    icon: Zap,
    title: "เชี่ยวชาญด้านพลังงานสะอาด & ไฟฟ้า",
    desc: "ชำนาญพิเศษด้านระบบโซล่าเซลล์ 5 kW ชนิดขายไฟ และการเดินวงจรตู้ชาร์จ EV 2 ช่องจอด คำนวณโหลดไฟฟ้าแม่นยำ ประหยัดค่าไฟระยะยาว",
  },
];