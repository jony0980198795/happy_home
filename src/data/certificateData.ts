export interface CertificateItem {
  id: string;
  title: string;
  issuedBy: string;
  licenseNo: string;
  category: "electrical" | "solar" | "air" | "safety";
  imagePath: string;
  desc: string;
}

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-01",
    title: "หนังสือรับรองว่าเป็นผู้ผ่านการทดสอบมาตรฐานฝีมือเเรงงานเเห่งชาติ",
    issuedBy: "กรมพัฒนาฝีมือแรงงาน กระทรวงแรงงาน",
    licenseNo: "สข.0667/2568",
    category: "electrical",
    imagePath: "/certificates/cer-01.jpg",
    desc: "ผ่านการทดสอบและได้รับใบอนุญาตปฏิบัติงานช่างไฟฟ้าภายในอาคารตามกฎหมายกำหนด ปลอดภัย 100%"
  },
  {
    id: "cert-02",
    title: "ใบรับรองการฝึกอบรม สาขาช่างเครื่องปรับอากาศในบ้านเเละการพาณิชย์ขนาดเล็ก ระดับ ๑",
    issuedBy: "กรมพัฒนาฝีมือแรงงาน กระทรวงแรงงาน",
    licenseNo: "สข.0213/2569",
    category: "solar",
    imagePath: "/certificates/cer-02.jpg",
    desc: "มีความเชี่ยวชาญในการคำนวณโหลด ติดตั้งแผงโซล่าเซลล์ อินเวอร์เตอร์ และคำนวณความปลอดภัยระบบ On-Grid / Hybrid"
  }
];