import React from "react";
import {
  Sun,
  Zap,
  Car,
  AirVent,
  ShieldCheck,
  DoorClosed,
  Blinds,
  Wrench,
  Award,
} from "lucide-react";

export interface ServiceQuickLink {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export const servicesQuickLinks: ServiceQuickLink[] = [
  {
    title: "แอร์โซล่าเซลล์",
    path: "/preview/002",
    icon: <Sun className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "โซล่าเซลล์ 5 kW",
    path: "/preview/001",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
  },
  {
    title: "วงจรไฟฟ้าตู้ชาร์จ EV",
    path: "/preview/003",
    icon: <Car className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: "ติดตั้ง / ล้าง / ย้าย แอร์บ้าน",
    path: "/preview/004",
    icon: <AirVent className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "กล้องวงจรปิด CCTV",
    path: "/preview/005",
    icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />,
  },
  {
    title: "ประตูรีโมทอัตโนมัติ",
    path: "/preview/007",
    icon: <DoorClosed className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "ฉากกั้นแอร์ & ผ้าม่าน",
    path: "/preview/006",
    icon: <Blinds className="w-6 h-6 text-teal-500" />,
  },
  {
    title: "ต่อเติมบ้าน & โครงสร้างหลังคา",
    path: "/preview/008",
    icon: <Wrench className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "มาตรฐานใบอนุญาตผู้ติดตั้ง",
    path: "/certified-license",
    icon: <Award className="w-6 h-6 text-rose-500" />,
  }
];