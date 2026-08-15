export interface ImageFileItem {
  img_path: string;
  engine_name: string;
}

export interface ServiceImageCategory {
  id: string;
  title: string;
  desc: string;
  imageFile: ImageFileItem[];
}

export const serviceImage: ServiceImageCategory[] = [
  {
    id: "001",
    title: "ระบบโซล่าเซลล์ (Solar Cell System)",
    desc: "บริการออกแบบและติดตั้งระบบโซล่าเซลล์ประหยัดพลังงาน ทั้งระบบ On-Grid, Off-Grid และ Hybrid ช่วยลดค่าไฟฟ้าในระยะยาวสำหรับบ้านพักอาศัย อาคาร และโรงงาน",
    imageFile: [
      { img_path: "/catalog/solar-cell-5kw-grid-tied/solar_01.jpg", engine_name: "ติดตั้งแผงโซล่าเซลล์หลังคาบ้าน" },
      { img_path: "/catalog/home-security-system/home-sec-01.jpg", engine_name: "ติดตั้ง Inverter และระบบ On-Grid" },
      { img_path: "/catalog/solar-cell-5kw-grid-tied/battery_01.jpg", engine_name: "ระบบ Hybrid และแบตเตอรี่กักเก็บพลังงาน" },
      { img_path: "/catalog/solar-cell-5kw-grid-tied/perfomance.jpg", engine_name: "การวัดค่าประสิทธิภาพพลังงาน" },
      { img_path: "/catalog/solar-cell-5kw-grid-tied/solar_structure.jpg", engine_name: "งานติดตั้งโครงสร้างแผงโซล่าเซลล์" },
    ]
  },
  {
    id: "002",
    title: "แอร์โซล่าเซลล์ (Solar Hybrid Air)",
    desc: "นวัตกรรมเครื่องปรับอากาศพลังงานแสงอาทิตย์ ช่วยประหยัดค่าไฟช่วงกลางวันได้สูงสุด เดินระบบด้วยทีมช่างผู้เชี่ยวชาญ",
    imageFile: [
      { img_path: "/catalog/air-conditioners/air-solar-04.jpg", engine_name: "ติดตั้งระบบแอร์โซล่าเซลล์" },
      { img_path: "/catalog/air-conditioners/air-02.jpg", engine_name: "การเชื่อมต่อระบบไฟ Hybrid Solar" },
      { img_path: "/catalog/air-conditioners/air-solar-03.jpg", engine_name: "การทดสอบการทำงานของแอร์โซล่าเซลล์" },
    ]
  },
  {
    id: "003",
    title: "ตู้ชาร์จรถยนต์ไฟฟ้า (EV Charger Wallbox)",
    desc: "บริการเดินสายไฟเมน เพิ่มขนาดมิเตอร์ และติดตั้งตู้ชาร์จรถยนต์ไฟฟ้า (EV Charger) ที่ได้มาตรฐานความปลอดภัยระดับสากล",
    imageFile: [
      { img_path: "/catalog/dual-ev-charger-circuits/ec_charger_01.jpg", engine_name: "ติดตั้ง Wallbox EV Charger" },
      { img_path: "/catalog/dual-ev-charger-circuits/main-charger.jpg", engine_name: "งานเดินระบบสายไฟเมนตู้ชาร์จ EV" },
      { img_path: "/catalog/dual-ev-charger-circuits/breaker.jpg", engine_name: "ติดตั้งระบบป้องกันไฟรั่ว RCBO/Breaker" },
      //{ img_path: "/catalog/ev/ev_04.png", engine_name: "ทดสอบการชาร์จรถยนต์ไฟฟ้า" },
    ]
  },
  {
    id: "004",
    title: "บริการติดตั้ง ล้าง ย้าย แอร์บ้าน/อาคาร",
    desc: "บริการติดตั้งเครื่องปรับอากาศใหม่ ล้างทำความสะอาดแอร์ ย้ายตำแหน่ง และซ่อมบำรุงแอร์ทุกชนิด โดยช่างผู้เชี่ยวชาญผ่านการรับรอง",
    imageFile: [
      { img_path: "/catalog/air-conditioners/air-05.jpg", engine_name: "บริการติดตั้งแอร์ติดผนัง" },
      { img_path: "/catalog/air-conditioners/cleaning-02.jpg", engine_name: "บริการล้างแอร์ด้วยแรงดันน้ำสูง" },
      { img_path: "/catalog/air-conditioners/cleaning.jpg", engine_name: "งานตรวจเช็คและเติมน้ำยาแอร์" },
      { img_path: "/catalog/air-conditioners/cleaning-03.jpg", engine_name: "ติดตั้งแอร์แขวนและแอร์สี่ทิศทาง" },
    ]
  },
  {
    id: "005",
    title: "ระบบกล้องวงจรปิด (CCTV) & ประตูรีโมท",
    desc: "ติดตั้งระบบกล้องวงจรปิดคมชัดสูง ดูผ่านมือถือได้ 24 ชั่วโมง พร้อมบริการติดตั้งประตูรั้วรีโมทอัตโนมัติเพื่อความสะดวกและปลอดภัย",
    imageFile: [
      { img_path: "/catalog/cctv-surveillance/cctv_01.jpg", engine_name: "ติดตั้งกล้องวงจรปิด IP Camera" },
      { img_path: "/catalog/cctv-surveillance/cctv-04.jpg", engine_name: "เซ็ตระบบดูออนไลน์ผ่านมือถือ" },
      { img_path: "/catalog/automatic-gate-systems/gate.jpg", engine_name: "ติดตั้งมอเตอร์ประตูรั้วรีโมทอัตโนมัติ" },
      { img_path: "/catalog/cctv-surveillance/cctv-05.jpg", engine_name: "เดินสายสัญญาณกล้องวงจรปิดรอบอาคาร" },
    ]
  },
  {
    id: "006",
    title: "งานผ้าม่าน & ฉากกั้นแอร์",
    desc: "บริการออกแบบและติดตั้งผ้าม่านทุกรูปแบบ ผ้าม่านกัน UV ม่านม้วน ม่านปรับแสง และฉากกั้นแอร์ PVC ช่วยแบ่งสัดส่วนห้องและประหยัดค่าไฟแอร์",
    imageFile: [
      { img_path: "/catalog/insect-screens-and-nets/screen-01.jpg", engine_name: "ติดตั้งผ้าม่านทึบแสงกัน UV" },
      { img_path: "/catalog/insect-screens-and-nets/screen-02.jpg", engine_name: "ติดตั้งฉากกั้นแอร์ PVC แบบพับทบ" },
      { img_path: "/catalog/insect-screens-and-nets/screen-03.jpg", engine_name: "งานติดตั้งม่านม้วนและม่านปรับแสง" },
    ]
  },
  {
    id: "007",
    title: "งานระบบไฟฟ้าและตู้คอนโทรล",
    desc: "เดินสายไฟฟ้าภายใน-ภายนอกอาคาร ประกอบตู้ควบคุมไฟฟ้า (Control Panel) แก้ไขระบบไฟรั่ว ไฟดับ และติดตั้งระบบสายดิน",
    imageFile: [
      { img_path: "/catalog/electrical-and-maintenance/electric_01.jpg", engine_name: "ประกอบและติดตั้งตู้คอนโทรล" },
      { img_path: "/catalog/electrical-and-maintenance/electric_02.jpg", engine_name: "เดินสายไฟเมนอาคารและระบบกราวชิ่ง" },
      { img_path: "/catalog/electrical-and-maintenance/electric_03.jpg", engine_name: "งานตรวจเช็คและปรับปรุงตู้ไฟ Consumer Unit" },
    ]
  },
  {
    id: "008",
    title: "งานโครงสร้างและต่อเติมบ้าน",
    desc: "บริการงานโครงสร้างเหล็ก หลังคาโรงรถ งานหลังคาโซล่าเซลล์ และงานต่อเติมทั่วไปด้วยทีมช่างฝีมือดี แข็งแรงทนทาน",
    imageFile: [
      { img_path: "/catalog/home-renovation/renovat-01.jpg", engine_name: "งานต่อเติมหลังคาโรงรถ" },
      { img_path: "/catalog/home-renovation/renovate-3.jpg", engine_name: "งานโครงเหล็กรับแผงโซล่าเซลล์" },
      { img_path: "/catalog/home-renovation/renovate-2.jpg", engine_name: "งานโครงสร้างเหล็กทั่วไป" },
    ]
  }
];