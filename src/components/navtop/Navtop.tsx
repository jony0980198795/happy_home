"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "หน้าแรก", href: "/" },
        { name: "สินค้าและบริการ", href: "/services" },
        { name: "ผลงาน", href: "/portfolio" },
        { name: "เกี่ยวกับเรา", href: "/about" },
        { name: "ติดต่อเรา", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled
                    ? "bg-black/90 backdrop-blur-md shadow-md py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/tmc_icon/tmc.png"
                            alt="TMC Logo"
                            fill
                            className="object-contain"
                            priority 
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-black tracking-tighter leading-none transition-colors ${isScrolled ? "text-blue-600" : "text-blue-700"
                            }`}>
                            TMC
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-slate-600" : "text-slate-500"
                            }`}>
                            Thaimechatronics
                        </span>
                    </div>
                </Link>
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-white hover:text-blue-600 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="lg:hidden p-2 text-slate-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            <div
                className={`lg:hidden absolute w-full bg-white border-b border-slate-100 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col px-6 gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-bold text-slate-800 hover:text-blue-600"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <hr className="border-slate-100 my-2" />
                    <Link
                        href="https://line.me/ti/p/@0613529166"
                        className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-bold"
                    >
                        Line: @0613529166
                    </Link>
                </div>
            </div>
        </nav>
    );
}