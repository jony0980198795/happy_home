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
      { img_path: "/catalog/solar-cell-5kw-grid-tied/solar_01.jpg", engine_name: "ติดตั้งแผงโซล่าเซลล์หลังคาโรงรถ" },
      { img_path: "/catalog/home-security-system/home-sec-01.jpg", engine_name: "รูปภาพระหว่างการติดตั้ง Inverter และระบบ On-Grid" },
      { img_path: "/catalog/solar-cell-5kw-grid-tied/battery_01.jpg", engine_name: "รูปภาพระหว่างการติดตั้งโซล่าเซลล์" },
      { img_path: "/catalog/solar-cell-5kw-grid-tied/perfomance.jpg", engine_name: "รูปภาพระหว่างการติดตั้งโซล่าเซลล์บนหลังคา" },
      { img_path: "/catalog/solar-cell-5kw-grid-tied/solar_structure.jpg", engine_name: "งานติดตั้งโครงสร้างแผงโซล่าเซลล์" },
      { img_path: "/catalog/solar-cell-5kw-grid-tied/solar_03.jpg", engine_name: "ติดตั้งแผงโซล่าเซลล์หลังคาบ้าน" },
      { img_path: "/catalog/solar-cell-5kw-grid-tied/solar-rooftop.jpg", engine_name: "ติดตั้ง Solar Rooftop" },
      { img_path: "/catalog/solar-cell-5kw-grid-tied/inverter.jpg", engine_name: "ตัวอย่าง Inverter Deye ที่ใช้งาน" },
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
      { img_path: "/catalog/air-conditioners/air-06.jpg", engine_name: "การเชื่อมต่อระบบไฟ Hybrid Solar" },
    ]
  },
  {
    id: "003",
    title: "ตู้ชาร์จรถยนต์ไฟฟ้า (EV Charger Wallbox)",
    desc: "บริการเดินสายไฟเมน เพิ่มขนาดมิเตอร์ และติดตั้งตู้ชาร์จรถยนต์ไฟฟ้า (EV Charger) ที่ได้มาตรฐานความปลอดภัยระดับสากล",
    imageFile: [
      { img_path: "/catalog/dual-ev-charger-circuits/ec_charger_01.jpg", engine_name: "ติดตั้ง Wallbox EV Charger" },
      { img_path: "/catalog/dual-ev-charger-circuits/breaker.jpg", engine_name: "ติดตั้งระบบป้องกันไฟรั่ว RCBO/Breaker" },

      { img_path: "/catalog/dual-ev-charger-circuits/chg-2.jpg", engine_name: "ร่วมสำรวจก่อนการติดตั้ง EV-charger" },
      { img_path: "/catalog/dual-ev-charger-circuits/chg-3.jpg", engine_name: "ตรวจสอบมาตรฐานระบบกราวด์" },
      { img_path: "/catalog/dual-ev-charger-circuits/chg-1.jpg", engine_name: "ภาพระหว่างการติดตั้ง Consumer Unit" },
      { img_path: "/catalog/dual-ev-charger-circuits/ch-5.jpg", engine_name: "สายไฟรอเชื่อมต่อกับการไฟฟ้า" },
      { img_path: "/catalog/dual-ev-charger-circuits/ch-6.jpg", engine_name: "ระหว่างการติดตั้งสายไฟทองเเเดงขนาด 16 Sq.mm." },

      //{ img_path: "/catalog/dual-ev-charger-circuits/main-charger.jpg", engine_name: "งานเดินระบบสายไฟเมนตู้ชาร์จ EV" },
      //{ img_path: "/catalog/dual-ev-charger-circuits/main-charger-2.jpg", engine_name: "งานเดินระบบสายไฟเมนตู้ชาร์จ EV" },
      //{ img_path: "/catalog/dual-ev-charger-circuits/main-charger-3.jpg", engine_name: "งานเดินระบบสายไฟเมนตู้ชาร์จ EV" },
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
      { img_path: "/catalog/air-conditioners/cleaning-04.jpg", engine_name: "บริการล้างแอร์ด้วยแรงดันน้ำสูง" },
      { img_path: "/catalog/air-conditioners/cleaning.jpg", engine_name: "งานตรวจเช็คและเติมน้ำยาแอร์" },
      { img_path: "/catalog/air-conditioners/cleaning-03.jpg", engine_name: "ติดตั้งแอร์แขวนและแอร์สี่ทิศทาง" },
      { img_path: "/catalog/air-conditioners/air-n-5.jpg", engine_name: "ภาพระหว่างการติดตั้งคอยล์ร้อนแอร์" },
      { img_path: "/catalog/air-conditioners/air-n-1.jpg", engine_name: "ความปลอดภัยในงานช่างระบบเพื่อป้องกันอุบัติเหตุ" },
      { img_path: "/catalog/air-conditioners/air-n-2.jpg", engine_name: "ความปลอดภัยในงานช่างระบบเพื่อป้องกันอุบัติเหตุ" },
      { img_path: "/catalog/air-conditioners/air-n-3.jpg", engine_name: "ความปลอดภัยในงานช่างระบบเพื่อป้องกันอุบัติเหตุ" },
      { img_path: "/catalog/air-conditioners/air-n-4.jpg", engine_name: "ความปลอดภัยในงานช่างระบบเพื่อป้องกันอุบัติเหตุ" },
    ]
  },
  {
    id: "005",
    title: "ระบบกล้องวงจรปิด (CCTV) & ประตูรีโมท",
    desc: "ติดตั้งระบบกล้องวงจรปิดคมชัดสูง ดูผ่านมือถือได้ 24 ชั่วโมง พร้อมบริการติดตั้งประตูรั้วรีโมทอัตโนมัติเพื่อความสะดวกและปลอดภัย",
    imageFile: [
      { img_path: "/catalog/cctv-surveillance/cctv_01.jpg", engine_name: "ติดตั้งกล้องวงจรปิด IP Camera" },
      { img_path: "/catalog/cctv-surveillance/cctv-04.jpg", engine_name: "เซ็ตระบบดูออนไลน์ผ่านมือถือ" },
      //{ img_path: "/catalog/cctv-surveillance/cctv-05.jpg", engine_name: "เดินสายสัญญาณกล้องวงจรปิดรอบอาคาร" },
      { img_path: "/catalog/cctv-surveillance/cctv-07.jpg", engine_name: "เดินสายสัญญาณกล้องวงจรปิดรอบอาคาร" },
      { img_path: "/catalog/cctv-surveillance/cctv-08.jpg", engine_name: "ชุดกล้องวงจรปิด WiFi 2 ตัว" },
      { img_path: "/catalog/cctv-surveillance/cctv-09.jpg", engine_name: "ชุดกล้อง IP บันทึกเสียง 8 ตัว" },
      { img_path: "/catalog/cctv-surveillance/cctv-10.jpg", engine_name: "ชุดกล้อง Analog 4 ตัว" },
      { img_path: "/catalog/automatic-gate-systems/gate.jpg", engine_name: "ติดตั้งมอเตอร์ประตูรั้วรีโมทอัตโนมัติ" },
      { img_path: "/catalog/cctv-surveillance/mt-1.jpg", engine_name: "ติดตั้งมอเตอร์ประตูรั้วรีโมทอัตโนมัติ สั่งงานด้วยระบบ WiFi" },
      { img_path: "/catalog/cctv-surveillance/mt-5.jpg", engine_name: "ติดตั้งมอเตอร์ประตูรั้วรีโมทอัตโนมัติ" },
      { img_path: "/catalog/cctv-surveillance/mt-3.jpg", engine_name: "ติดตั้งมอเตอร์ประตูรั้วรีโมทอัตโนมัติ" },
      { img_path: "/catalog/cctv-surveillance/mt-4.jpg", engine_name: "ติดตั้งมอเตอร์ประตูรั้วรีโมทอัตโนมัติ" },
      { img_path: "/catalog/cctv-surveillance/cctv-06.jpg", engine_name: "ซ่อมแซมประตูรั่วอัตโนมัติ" },
    ]
  },
  {
    id: "006",
    title: "งานผ้าม่าน & ฉากกั้นแอร์",
    desc: "บริการออกแบบและติดตั้งผ้าม่านทุกรูปแบบ ผ้าม่านกัน UV ม่านม้วน ม่านปรับแสง และฉากกั้นแอร์ PVC ช่วยแบ่งสัดส่วนห้องและประหยัดค่าไฟแอร์",
    imageFile: [
      { img_path: "/catalog/insect-screens-and-nets/screen-01.jpg", engine_name: "ติดตั้งผ้าม่านทึบแสงกัน UV" },
      { img_path: "/catalog/insect-screens-and-nets/screen-02.jpg", engine_name: "ติดตั้งรางผ้าม่านแบบซ่อน" },
      { img_path: "/catalog/insect-screens-and-nets/screen-03.jpg", engine_name: "งานติดตั้งม่านและม่านปรับแสง" },
      { img_path: "/catalog/insect-screens-and-nets/screen-06.jpg", engine_name: "งานติดตั้งผ้าม่านโปร่งเเสง" },
      { img_path: "/catalog/insect-screens-and-nets/scl-4.jpg", engine_name: "งานติดตั้งผ้าม่าน" },
      { img_path: "/catalog/insect-screens-and-nets/screen-07.jpg", engine_name: "งานติดตั้งผ้าม่าน" },
      //{ img_path: "/catalog/insect-screens-and-nets/screen-05.jpg", engine_name: "งานติดตั้งมุ่งกันยุงแบรนด์ Luxury" },
      //{ img_path: "/catalog/insect-screens-and-nets/scl-3.jpg", engine_name: "งานติดตั้งมุ่งกันยุง" },
      //{ img_path: "/catalog/insect-screens-and-nets/scl-.jpg", engine_name: "งานติดตั้งมุ่งกันยุง" },
      { img_path: "/catalog/insect-screens-and-nets/partition-2.jpg", engine_name: "งานติดตั้งฉากกั้นแอร์" },
      { img_path: "/catalog/insect-screens-and-nets/scl-5.jpg", engine_name: "งานติดตั้งฉากกั้นแอร์" },
      { img_path: "/catalog/insect-screens-and-nets/partition-1.jpg", engine_name: "งานติดตั้งฉากกั้นแอร์" },
      { img_path: "/catalog/insect-screens-and-nets/mosquito-net-1.jpg", engine_name: "งานติดตั้งมุ่งกันยุงแบรนด์ Luxury" },
      { img_path: "/catalog/insect-screens-and-nets/mosquito-net-3.jpg", engine_name: "งานติดตั้งมุ่งกันยุงแบรนด์ Luxury" },
      { img_path: "/catalog/insect-screens-and-nets/mosquito-net-2.jpg", engine_name: "งานติดตั้งมุ่งกันยุงแบรนด์ Luxury" },
      { img_path: "/catalog/insect-screens-and-nets/catalog.jpg", engine_name: "แคตตาล็อกสีผ้าม่าน แบบที่ 1" },
      { img_path: "/catalog/insect-screens-and-nets/color-1.png", engine_name: "แคตตาล็อกสีผ้าม่าน แบบที่ 2" },
      { img_path: "/catalog/insect-screens-and-nets/color-2.jpg", engine_name: "แคตตาล็อกสีผ้าม่าน แบบที่ 3" },
      { img_path: "/catalog/insect-screens-and-nets/color-3.png", engine_name: "แคตตาล็อกสีผ้าม่าน แบบที่ 4" },
      { img_path: "/catalog/insect-screens-and-nets/color-4.jpg", engine_name: "สีกรอบมุ้งกันยุงมีหลายสีให้เลือก" },
      { img_path: "/catalog/insect-screens-and-nets/scl-1.jpg", engine_name: "แคตตาล็อกมุ้งกันยุงสีเทา" },
      { img_path: "/catalog/insect-screens-and-nets/scl-2.jpg", engine_name: "แคตตาล็อกมุ้งกันยุงสีดำ" },
    ]
  },
  {
    id: "007",
    title: "งานระบบไฟฟ้าและตู้คอนโทรล",
    desc: "เดินสายไฟฟ้าภายใน-ภายนอกอาคาร ประกอบตู้ควบคุมไฟฟ้า (Control Panel) แก้ไขระบบไฟรั่ว ไฟดับ และติดตั้งระบบสายดิน",
    imageFile: [
      { img_path: "/catalog/electrical-and-maintenance/electric_02.jpg", engine_name: "เดินสายไฟเมนอาคารและระบบกราวชิ่ง" },
      { img_path: "/catalog/electrical-and-maintenance/electric_01.jpg", engine_name: "ประกอบและติดตั้งตู้คอนโทรล" },
      { img_path: "/catalog/electrical-and-maintenance/electric_04.jpg", engine_name: "ชุดเบรกเกอร์พร้อมกล่องควบคุม" },
      { img_path: "/catalog/electrical-and-maintenance/electric_05.jpg", engine_name: "ติดตั้งเมนเบรกเกอร์" },
      { img_path: "/catalog/electrical-and-maintenance/electric_06.jpg", engine_name: "ตรวจสอบการติดตั้ง" },
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
      { img_path: "/catalog/home-renovation/renovate-4.jpg", engine_name: "งานตกเเต่งผนังไม้เทียม" },
      { img_path: "/catalog/home-renovation/renovate-5.jpg", engine_name: "ติดตั้งไฟเพดานแบบซ่อน" },
      { img_path: "/catalog/home-renovation/renovate-6.jpg", engine_name: "งานตกเเเต่งภายใน" },
      { img_path: "/catalog/home-renovation/renovate-7.jpg", engine_name: "งานตกเเเต่งภายในห้องนอน" },
      { img_path: "/catalog/home-renovation/reno-5.jpg", engine_name: "งานตกแต่งภายในห้องนอน" },
      { img_path: "/catalog/home-renovation/reno-4.jpg", engine_name: "งานตกเเต่งภายในห้องนั่งเล่น" },
    ]
  }, {
    id: "009",
    title: "บ้านพักตากอากาศสำหรับเช่าพักอาศัย",
    desc: "Planning a family or group trip to Hat Yai? Stay together comfortably at Hatyai Luxe Stay, a private 2-storey townhouse (150 sqm) near Hat Yai Park. Features 2 bedrooms, 4 queen beds, and 3 bathrooms, suitable for up to 8 guests. Fully equipped with kitchen, washing machine, Smart TV+Netflix, Wi-Fi, prayer mats, and private parking. Rated 9.8/10 on Booking.com and 5/5 on Airbnb.",
    imageFile: [
      {
        img_path: "/catalog/vacation-home/living-room1.jpg",
        engine_name: "Spacious living room with a Smart TV and a comfortable sofa."
      },
      {
        img_path: "/catalog/vacation-home/living-room2.jpg",
        engine_name: "Spacious living room with a Smart TV and a comfortable sofa."
      },
      {
        img_path: "/catalog/vacation-home/living-room3.jpg",
        engine_name: "Spacious living room with a Smart TV and a comfortable sofa."
      },
      {
        img_path: "/catalog/vacation-home/bedroom1.jpg",
        engine_name: "Bedroom 1 with 1 King-size bed."
      },
      {
        img_path: "/catalog/vacation-home/bedroom2.jpg",
        engine_name: "Bedroom 1 with 1 King-size bed."
      },
      {
        img_path: "/catalog/vacation-home/bedroom3.jpg",
        engine_name: "Bedroom 1 with 1 King-size bed."
      },
      {
        img_path: "/catalog/vacation-home/bedroom5.jpg",
        engine_name: "Bedroom 2 with 1 King-size bed."
      },
      {
        img_path: "/catalog/vacation-home/bedroom4.jpg",
        engine_name: "Bedroom 2 with 1 King-size bed."
      },
      {
        img_path: "/catalog/vacation-home/bedroom6.jpg",
        engine_name: "Bedroom 2 with 1 King-size bed."
      },
      {
        img_path: "/catalog/vacation-home/bedroom7.jpg",
        engine_name: "Bedroom 3 with 1 King-size bed."
      },
      {
        img_path: "/catalog/vacation-home/bedroom8.jpg",
        engine_name: "Bedroom 3 with 1 King-size bed."
      },
      {
        img_path: "/catalog/vacation-home/bedroom9.jpg",
        engine_name: "Bedroom 3 with 1 King-size bed."
      },
      {
        img_path: "/catalog/vacation-home/kitchen-1.jpg",
        engine_name: "Kitchen with refrigerator."
      },
      {
        img_path: "/catalog/vacation-home/kitchen-2.jpg",
        engine_name: "Kitchen equipment is provided."
      },
      {
        img_path: "/catalog/vacation-home/kitchen-3.jpg",
        engine_name: "Family dining table"
      },
      {
        img_path: "/catalog/vacation-home/bathrooms-6.jpg",
        engine_name: "There are a total of 4 bathrooms."
      },
      {
        img_path: "/catalog/vacation-home/bathrooms-1.jpg",
        engine_name: "Bathrooms."
      },
      {
        img_path: "/catalog/vacation-home/bathrooms-2.jpg",
        engine_name: "Bathrooms."
      },
      {
        img_path: "/catalog/vacation-home/bathrooms-3.jpg",
        engine_name: "Bathrooms."
      },
      {
        img_path: "/catalog/vacation-home/bathrooms-4.jpg",
        engine_name: "Bathrooms."
      },
      {
        img_path: "/catalog/vacation-home/bathrooms-5.jpg",
        engine_name: "Bathrooms."
      },
      {
        img_path: "/catalog/vacation-home/exterior-1.jpg",
        engine_name: "Exterior area."
      },
      {
        img_path: "/catalog/vacation-home/exterior-3.jpg",
        engine_name: "Exterior area."
      },
      {
        img_path: "/catalog/vacation-home/exterior-2.jpg",
        engine_name: "Exterior area."
      },
      {
        img_path: "/catalog/vacation-home/other-1.jpg",
        engine_name: "Atmosphere."
      },
      {
        img_path: "/catalog/vacation-home/other-2.jpg",
        engine_name: "Atmosphere."
      },
      {
        img_path: "/catalog/vacation-home/other-3.jpg",
        engine_name: "Atmosphere."
      },
    ]
  }
];