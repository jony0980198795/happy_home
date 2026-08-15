export interface SliderItem {
  id: number;
  title: string;
  desc: string;
  src: string;
  tag: string;
}

export const sliderData: SliderItem[] = [
  {
    id: 1,
    title: "Solar Cell & On-Grid System",
    desc: "ติดตั้งระบบโซล่าเซลล์ลดค่าไฟสูงสุด และขายคืนการไฟฟ้า ครบวงจร",
    src: "/catalog/solar-cell-5kw-grid-tied/solar_01.jpg",
    tag: "Solar Energy"
  },
  {
    id: 2,
    title: "Solar Hybrid Air Conditioner",
    desc: "นวัตกรรมแอร์โซล่าเซลล์ ใช้พลังงานแสงอาทิตย์ตรง ประหยัดค่าไฟสูงสุด 80%",
    src: "/catalog/air-conditioners/air-01.jpg",
    tag: "Innovation"
  },
  {
    id: 3,
    title: "EV Charger Installation",
    desc: "บริการติดตั้งตู้ชาร์จรถยนต์ไฟฟ้า เดินสายเมนความปลอดภัยสูง รองรับ 1-2 คัน",
    src: "/catalog/home-security-system/home-sec-01.jpg",
    tag: "EV Solution"
  },
  {
    id: 4,
    title: "Professional Air & CCTV Services",
    desc: "บริการ ติดตั้ง ล้าง ย้าย แอร์บ้าน และระบบกล้องวงจรปิด CCTV ออนไลน์ 24 ชม.",
    src: "/catalog/cctv-surveillance/cctv_01.jpg",
    tag: "Home Security"
  },
  {
    id: 5,
    title: "Licensed & Certified Technicians",
    desc: "ดูแลและติดตั้งโดยทีมช่างมีใบอนุญาตมาตรฐานวิชาชีพ ปลอดภัย ไม่ทิ้งงาน",
    src: "/catalog/products-and-equipment/product_01.jpg",
    tag: "Certified Team"
  }
];