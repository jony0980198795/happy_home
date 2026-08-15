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
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled
                    ? "bg-slate-900/85 backdrop-blur-md shadow-xl shadow-black/10 border-b border-slate-800/80 py-3"
                    : "bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* --- LOGO SECTION --- */}
                <Link href="/" className="flex items-center gap-3.5 group">
                    <div className="relative w-11 h-11 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                        <Image
                            src="/tmc_icon/tmc.png"
                            alt="TMC Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black tracking-tight leading-none bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-indigo-300 transition-all">
                            Happy
                        </span>
                        <span className="text-[9px] pt-1 font-extrabold uppercase tracking-[0.25em] text-slate-300 transition-colors group-hover:text-white mt-0.5">
                            home service
                        </span>
                    </div>
                </Link>

                {/* --- DESKTOP NAV LINKS --- */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-slate-200 hover:text-white transition-colors relative py-1 group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-full" />
                        </Link>
                    ))}
                </div>

                {/* --- CTA & MOBILE TOGGLE BUTTON --- */}
                <div className="flex items-center gap-4">
                    {/* ปุ่ม LINE Contact สำหรับ Desktop */}
                    <Link
                        href='/contact'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-lg shadow-emerald-950/30 hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.844 2.572-6.002z" />
                        </svg>
                        <span>Line: 0861206859</span>
                    </Link>

                    {/* ปุ่ม Hamburger มือถือ */}
                    <button
                        className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 transition-all focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* --- MOBILE DROPDOWN MENU --- */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
                    }`}
            >
                <div className="flex flex-col px-6 gap-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-semibold text-slate-200 hover:text-blue-400 hover:bg-slate-800/50 px-4 py-2.5 rounded-xl transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-slate-800 my-1" />
                    <Link
                        href="https://line.me/ti/p/@0613529166"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-green-600 active:scale-95 text-white py-3 px-4 rounded-xl font-bold shadow-lg shadow-emerald-950/30 transition-all"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.844 2.572-6.002z" />
                        </svg>
                        <span>Line: @0613529166</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}