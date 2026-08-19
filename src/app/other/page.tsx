'use client'

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Users, BedDouble, Bath, Car, 
  Star,X, ZoomIn, 
  Layers, Trees, Play, Video,
  Phone, MessageCircle, ExternalLink
} from "lucide-react";

const propertyData = {
  id: "009",
  title: "Minie House @Hatyai",
  subtitle: "A cozy and private detached house in Central Hat Yai (5–10 mins to major landmarks)",
  desc: "Planning a family or group trip to Hat Yai? Stay at Minie House @Hatyai! A beautiful, clean, and spacious detached private house located just 5–10 minutes from Central Hat Yai. Ideal for Malaysian families, groups of friends, and guests driving to Hat Yai. Features 3 bedrooms, 3 king beds, and 4 bathrooms. Enjoy convenient private parking, high-speed Wi-Fi, TV, and access to a peaceful village playground. Easy access by car to Lee Garden, Kim Yong Market, Greenway, and ASEAN Night Bazaar. Highly rated by guests for its value, cleanliness, and exact match to photos!",
  video: "/video/review.mp4",
  airbnbUrl: "https://airbnb.com/h/miniehousehatyaihappy",
  contact: {
    whatsapp: "+66891507499",
    whatsappFormatted: "+66 89 1507499",
    lineIds: ["sarn444", "0861206859"]
  },
  pricing: [
    { guests: "6 Guests", weekday: "THB 4,500", weekend: "THB 4,900" },
    { guests: "8 Guests", weekday: "THB 5,000", weekend: "THB 5,500" },
    { guests: "10 Guests", weekday: "THB 5,500", weekend: "THB 5,900" },
    { guests: "12 Guests", weekday: "THB 6,500", weekend: "THB 6,900" },
  ],
  imageFile: [
    { img_path: "/catalog/vacation-home/living-room1.jpg", engine_name: "Spacious living room with TV and comfortable seating" },
    { img_path: "/catalog/vacation-home/living-room2.jpg", engine_name: "Cozy seating area in the main living space" },
    { img_path: "/catalog/vacation-home/living-room3.jpg", engine_name: "Bright and open-plan living area layout" },
    { img_path: "/catalog/vacation-home/bedroom1.jpg", engine_name: "Bedroom 1 with 1 King-size bed & Air Conditioning" },
    { img_path: "/catalog/vacation-home/bedroom2.jpg", engine_name: "Bedroom 1 layout and interior setup" },
    { img_path: "/catalog/vacation-home/bedroom3.jpg", engine_name: "Bedroom 1 overview with air conditioning" },
    { img_path: "/catalog/vacation-home/bedroom5.jpg", engine_name: "Bedroom 2 with 1 King-size bed & Air Conditioning" },
    { img_path: "/catalog/vacation-home/bedroom4.jpg", engine_name: "Bedroom 2 layout and side view" },
    { img_path: "/catalog/vacation-home/bedroom6.jpg", engine_name: "Bedroom 2 comfortable space" },
    { img_path: "/catalog/vacation-home/bedroom7.jpg", engine_name: "Bedroom 3 with 1 King-size bed & Air Conditioning" },
    { img_path: "/catalog/vacation-home/bedroom8.jpg", engine_name: "Bedroom 3 interior detail" },
    { img_path: "/catalog/vacation-home/bedroom9.jpg", engine_name: "Bedroom 3 cozy sleeping area" },
    { img_path: "/catalog/vacation-home/kitchen-1.jpg", engine_name: "Fully equipped kitchen with essential cookware" },
    { img_path: "/catalog/vacation-home/kitchen-2.jpg", engine_name: "Kitchen amenities and refrigerator" },
    { img_path: "/catalog/vacation-home/kitchen-3.jpg", engine_name: "Dining area for family meals" },
    { img_path: "/catalog/vacation-home/bathrooms-6.jpg", engine_name: "Clean and modern bathroom layout" },
    { img_path: "/catalog/vacation-home/bathrooms-1.jpg", engine_name: "Bathroom with shower and water heater" },
    { img_path: "/catalog/vacation-home/bathrooms-2.jpg", engine_name: "Clean bathroom facilities" },
    { img_path: "/catalog/vacation-home/bathrooms-3.jpg", engine_name: "Well-maintained bathroom" },
    { img_path: "/catalog/vacation-home/bathrooms-4.jpg", engine_name: "Guest bathroom area" },
    { img_path: "/catalog/vacation-home/bathrooms-5.jpg", engine_name: "Additional bathroom space" },
    { img_path: "/catalog/vacation-home/exterior-1.jpg", engine_name: "Private parking area and house entrance" },
    { img_path: "/catalog/vacation-home/exterior-3.jpg", engine_name: "Exterior view of Minie House @Hatyai" },
    { img_path: "/catalog/vacation-home/exterior-2.jpg", engine_name: "Spacious outdoor area and front yard" },
    { img_path: "/catalog/vacation-home/other-1.jpg", engine_name: "Peaceful neighborhood environment & walking area" },
    { img_path: "/catalog/vacation-home/other-2.jpg", engine_name: "Interior details and family-friendly amenities" },
    { img_path: "/catalog/vacation-home/other-3.jpg", engine_name: "Overall welcoming and cozy atmosphere" }
  ]
};

export default function VacationHomeDetail() {
  const [selectedImg, setSelectedImg] = useState<{ img_path: string; engine_name: string } | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = propertyData.imageFile.filter((img) => {
    if (activeCategory === "living") return img.img_path.includes("living");
    if (activeCategory === "bedroom") return img.img_path.includes("bedroom");
    if (activeCategory === "kitchen") return img.img_path.includes("kitchen");
    if (activeCategory === "bathroom") return img.img_path.includes("bathroom");
    if (activeCategory === "exterior") return img.img_path.includes("exterior");
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* 1. Header Section */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Entire Private Detached House
          </span>
          <a 
            href={propertyData.airbnbUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white px-3 py-1 rounded-full transition"
          >
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            Airbnb Listing <ExternalLink size={10} className="ml-1" />
          </a>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-2">
          {propertyData.title}
        </h1>
        <p className="flex items-center gap-2 text-slate-600 font-medium text-sm md:text-base">
          <MapPin size={18} className="text-emerald-600 shrink-0" />
          {propertyData.subtitle}
        </p>
      </div>

      {/* 2. Featured Video Banner */}
      {propertyData.video && (
        <div className="mb-10 relative rounded-3xl overflow-hidden shadow-xl bg-slate-900 border border-slate-200">
          <div className="relative h-[250px] sm:h-[350px] md:h-[400px] w-full flex items-center justify-center">
            <Image
              src={propertyData.imageFile[0].img_path}
              alt="Video Tour Thumbnail"
              fill
              className="object-cover opacity-60"
            />
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="relative z-10 group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-full shadow-2xl transition-all transform hover:scale-105"
            >
              <div className="w-10 h-10 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Play size={20} className="fill-emerald-600 ml-0.5" />
              </div>
              <span className="text-sm md:text-base pr-2">Watch House Video Tour</span>
            </button>
            <div className="absolute bottom-4 left-4 z-10 bg-slate-950/70 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2">
              <Video size={14} className="text-emerald-400" /> Real House Review Video
            </div>
          </div>
        </div>
      )}

      {/* 3. Key Specs Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-white rounded-3xl border border-slate-200/80 shadow-sm mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Users size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Capacity</p>
            <p className="text-sm font-bold text-slate-900">Up to 12 Guests</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <BedDouble size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Bedrooms</p>
            <p className="text-sm font-bold text-slate-900">3 Beds (3 King Beds)</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Bath size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Bathrooms</p>
            <p className="text-sm font-bold text-slate-900">4 Bathrooms</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Car size={20} />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Parking</p>
            <p className="text-sm font-bold text-slate-900">Easy Private Parking</p>
          </div>
        </div>
      </div>

      {/* 4. Description & Direct Booking Rates */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">About Minie House @Hatyai</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {propertyData.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                <MapPin className="text-emerald-600" size={18} />
                <span>Nearby Destinations</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                <li>Central Hat Yai (5–10 mins)</li>
                <li>Lee Garden Plaza</li>
                <li>Kim Yong Market</li>
                <li>Greenway & ASEAN Night Bazaar</li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                <Trees className="text-emerald-600" size={18} />
                <span>Property Highlights</span>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                <li>Entire private house</li>
                <li>3 King Beds / 4 Bathrooms</li>
                <li>Village Playground & Safe Area</li>
                <li>Free Wi-Fi & TV</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Pricing & Contact Card */}
        <div className="lg:col-span-5 bg-emerald-900 text-white p-6 md:p-7 rounded-3xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Direct Booking Rates
              </span>
              <span className="text-[10px] bg-emerald-800 text-emerald-200 px-2.5 py-1 rounded-full font-medium">
                Best Rate Guaranteed
              </span>
            </div>

            {/* Pricing Table */}
            <div className="bg-emerald-950/60 rounded-2xl p-4 border border-emerald-800/60 mb-6">
              <div className="grid grid-cols-3 text-[11px] font-bold text-emerald-300 pb-2 border-b border-emerald-800/80">
                <span>Guests</span>
                <span>Mon – Thu</span>
                <span>Fri – Sun</span>
              </div>
              <div className="divide-y divide-emerald-800/40 text-xs">
                {propertyData.pricing.map((tier, idx) => (
                  <div key={idx} className="grid grid-cols-3 py-2.5 items-center font-medium">
                    <span className="text-white font-semibold">{tier.guests}</span>
                    <span className="text-emerald-200">{tier.weekday}</span>
                    <span className="text-emerald-100 font-bold">{tier.weekend}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3 mb-6 bg-emerald-800/40 p-4 rounded-2xl border border-emerald-700/50">
              <p className="text-xs font-bold text-emerald-200 flex items-center gap-2">
                <Phone size={14} className="text-emerald-400" /> Contact Host Directly
              </p>
              <div className="text-xs text-emerald-100 space-y-1">
                <p><strong>WhatsApp:</strong> {propertyData.contact.whatsappFormatted}</p>
                <p><strong>LINE ID:</strong> {propertyData.contact.lineIds.join(" / ")}</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href={`https://wa.me/${propertyData.contact.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl text-center flex items-center justify-center gap-2 transition shadow-lg text-sm"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </a>
            
            <a
              href={propertyData.airbnbUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 bg-emerald-950/80 hover:bg-emerald-950 text-emerald-200 text-xs font-semibold rounded-xl text-center flex items-center justify-center gap-1.5 border border-emerald-700/50 transition"
            >
              Check on Airbnb <ExternalLink size={12} />
            </a>
          </div>
        </div>

      </div>

      {/* 5. Gallery Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Layers size={22} className="text-emerald-600" /> Photo Gallery ({filteredImages.length})
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All" },
              { id: "bedroom", label: "Bedrooms" },
              { id: "living", label: "Living Room" },
              { id: "kitchen", label: "Kitchen" },
              { id: "bathroom", label: "Bathrooms" },
              { id: "exterior", label: "Exterior" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((item) => (
              <motion.div
                key={item.img_path}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImg(item)}
                className="group relative h-72 rounded-3xl overflow-hidden bg-slate-200 shadow-sm border border-slate-100 cursor-pointer"
              >
                <Image
                  src={item.img_path}
                  alt={item.engine_name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn size={20} />
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent">
                  <p className="text-xs font-semibold text-white truncate">
                    {item.engine_name}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 6. Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition shadow-lg"
              >
                <X size={20} />
              </button>

              <div className="p-2 bg-slate-950">
                <video
                  src={propertyData.video}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[80vh] rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition shadow-lg"
              >
                <X size={20} />
              </button>

              <div className="relative w-full h-[65vh] md:h-[75vh] bg-slate-950">
                <Image
                  src={selectedImg.img_path}
                  alt={selectedImg.engine_name}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <div className="p-5 bg-slate-900 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-200">
                  {selectedImg.engine_name}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}