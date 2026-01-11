'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ArrowRight,
  Cpu,
  Printer,
  Scan,
  Box,
  Package,
  Zap,
  Layers,
  ChevronRight,
  ShoppingCart,
  Phone,
  Clock,
  X,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  UserPlus,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  MapPin,
  Mail,
  Menu
} from 'lucide-react'

// Mock Veriler - Updated with more reliable stock images
const productCategories = [
  {
    id: 1,
    title: 'RFID Çözümleri',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Barkod Yazıcılar',
    icon: Printer,
    image: 'https://images.unsplash.com/photo-1616606103915-cbc747d6e448?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'El Terminalleri',
    icon: Box,
    image: 'https://images.unsplash.com/photo-1558223126-628d01799738?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Nano Banana Tech',
    icon: Zap,
    image: '/industrial_nano_banana_tech.png'
  },
  {
    id: 5,
    title: 'Sarf Malzemeleri',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1605152276890-88aa20786523?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Mobil Yazıcılar',
    icon: Printer,
    image: 'https://images.unsplash.com/photo-1595246142477-d33d3067b75d?q=80&w=800&auto=format&fit=crop'
  },
]

const serviceList = [
  { id: 1, title: 'Teknik Servis & Tamir', icon: Zap },
  { id: 2, title: 'Sistem Entegrasyonu', icon: Layers },
]

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white text-[#001220] font-sans selection:bg-[#001f3f] selection:text-white overflow-x-hidden">

      {/* Top Ticker */}
      <div className="top-bar-clean">
        <span className="flex items-center gap-4">
          <CheckCircle2 className="w-3 h-3 text-white/50" /> Endüstriyel Çözümlerde 20. Yıl Özel Kampanyaları Başladı
        </span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full z-[100] glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-16">
            <h1 className="text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer">
              <span className="text-[#001f3f]">BARKOD</span><span>.PRO</span>
            </h1>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-[11px] font-black uppercase tracking-[0.15em] text-[#001220] hover:opacity-100 opacity-60 transition-all">Ana Sayfa</a>

              {/* Ürünlerimiz - Fixed Dropdown Behavior */}
              <div
                className="relative cursor-default"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.15em] text-[#001220] hover:opacity-100 opacity-60 transition-all py-8">
                  Ürünlerimiz <ChevronRight className={`w-3 h-3 transition-transform ${activeDropdown === 'products' ? 'rotate-90' : ''}`} />
                </div>
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      className="absolute top-[75px] left-0 w-64 bg-white border border-[#001220]/5 rounded-2xl p-2 shadow-2xl"
                    >
                      {productCategories.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#001220]/5 transition-all cursor-pointer group">
                          <item.icon className="w-4 h-4 text-[#001f3f]" />
                          <span className="text-[11px] font-black uppercase tracking-wider">{item.title}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Restored Links */}
              <a href="#" className="text-[11px] font-black uppercase tracking-[0.15em] text-[#001220] hover:opacity-100 opacity-60 transition-all">Hizmetlerimiz</a>
              <a href="#" className="text-[11px] font-black uppercase tracking-[0.15em] text-[#001220] hover:opacity-100 opacity-60 transition-all">Barkod Rehberi</a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div
              className="hidden sm:flex items-center gap-2 px-6 py-2 bg-[#001220]/5 rounded-full cursor-pointer hover:bg-[#001220]/10 transition-all group"
            >
              <Search className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#001220]/60">Hızlı Arama</span>
            </div>

            <div className="flex items-center gap-3">
              <button className="hidden sm:flex btn-nav-auth text-[#001220] bg-transparent border border-[#001220]/5 hover:bg-[#001220]/5 items-center gap-2">
                <Lock className="w-3.5 h-3.5" /> Giriş
              </button>
              <button className="hidden sm:flex btn-nav-auth bg-[#001220] text-white items-center gap-2">
                <UserPlus className="w-3.5 h-3.5" /> Kayıt
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-[#001220]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[#001220]/5 overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <a href="#" className="text-sm font-black uppercase tracking-widest text-[#001220]">Ana Sayfa</a>

                {/* Mobile Products */}
                <div className="space-y-4">
                  <div className="text-sm font-black uppercase tracking-widest text-[#001220]/50">Ürünlerimiz</div>
                  <div className="grid grid-cols-2 gap-3 pl-4">
                    {productCategories.map((item) => (
                      <div key={item.id} className="flex items-center gap-2 text-[#001f3f]">
                        <item.icon className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="#" className="text-sm font-black uppercase tracking-widest text-[#001220]">Hizmetlerimiz</a>
                <a href="#" className="text-sm font-black uppercase tracking-widest text-[#001220]">Barkod Rehberi</a>

                <div className="pt-6 border-t border-[#001220]/10 flex flex-col gap-3">
                  <button className="w-full py-4 text-[#001220] border border-[#001220]/10 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                    <Lock className="w-4 h-4" /> Giriş Yap
                  </button>
                  <button className="w-full py-4 bg-[#001220] text-white rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                    <UserPlus className="w-4 h-4" /> Kayıt Ol
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="hero-lift relative px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 px-4 py-1 border border-[#001220]/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-[#001f3f]/50"
          >
            Endüstriyel Veri Sistemleri // 2026
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#001220] leading-[0.85] mb-12"
          >
            Operasyonel <br />
            Mükemmellik.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#001220]/60 max-w-2xl leading-relaxed mb-16 font-medium"
          >
            Global standartlarda veri tanımlama ve takip sistemleriyle karmaşık süreçlerinizi basitleştirin, verimliliğinizi maksimize edin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button className="px-12 py-5 bg-[#001220] text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center gap-3">
              Katalogu Başlat <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section - Even Smaller Cards */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#001f3f] text-[10px] font-black uppercase tracking-[0.3em] mb-2 block underline">ENDÜSTRİYEL EKOSİSTEM</span>
              <h3 className="text-4xl font-black tracking-tighter">Ekosistem.</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {productCategories.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group cursor-pointer bg-slate-50 border border-[#001220]/5 rounded-2xl p-6 hover:bg-[#001f3f] hover:border-[#001f3f] transition-all duration-300 h-40 flex flex-col justify-between"
              >
                <div className="p-3 rounded-xl bg-white border border-[#001220]/5 w-fit group-hover:bg-white/10 group-hover:border-white/20 transition-colors">
                  <cat.icon className="w-5 h-5 text-[#001f3f] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-sm font-black text-[#001220] leading-tight uppercase tracking-tight group-hover:!text-white transition-colors duration-300">
                  {cat.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp */}
      <div
        className="whatsapp-float group cursor-default"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </div>

      {/* Newsletter Section - Premium Dark */}
      <section className="py-20 px-6 bg-[#001f3f] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black !text-white tracking-tighter mb-4">
            Geleceği Takip Edin.
          </h2>
          <p className="text-white/60 mb-8 font-medium">
            Endüstriyel teknoloji trendleri, özel kampanyalar ve sektörel analizler için bültenimize katılın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 outline-none focus:bg-white/20 transition-all font-bold backdrop-blur-sm"
            />
            <button className="bg-white text-[#001f3f] px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-[#001220] hover:text-white transition-colors">
              Abone Ol
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Premium Mesh Design with Screenshot Content */}
      <footer className="bg-white border-t border-[#001220]/5 pt-16 md:pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#001220]/[0.01] blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

            {/* Column 1: Barkod.com */}
            <div className="space-y-8">
              <ul className="space-y-4">
                {['Site Haritası', 'Üyelik Sözleşmesi', 'Gizlilik ve Güvenlik', 'Mesafeli Satış Sözleşmesi', 'Garanti ve İade Şartları', 'İletişim'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-bold text-[#001220]/70 hover:text-[#001f3f] hover:opacity-100 transition-all uppercase tracking-wider flex items-center gap-2 group">
                      <div className="w-1 h-1 bg-[#001220]/10 rounded-full group-hover:bg-[#001f3f] transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Müşteri Hizmetleri */}
            <div className="space-y-8">
              <h5 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#001220]/30 underline decoration-2 underline-offset-8">Müşteri Hizmetleri</h5>
              <ul className="space-y-4">
                {['Arama', 'Barkod Rehberi', 'Ürün Karşılaştırma', 'Çözümlerimiz', 'Hakkımızda'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-bold text-[#001220]/70 hover:text-[#001f3f] hover:opacity-100 transition-all uppercase tracking-wider flex items-center gap-2 group">
                      <div className="w-1 h-1 bg-[#001220]/10 rounded-full group-hover:bg-[#001f3f] transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Hesap Detaylarım */}
            <div className="space-y-8">
              <h5 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#001220]/30 underline decoration-2 underline-offset-8">Hesap Detaylarım</h5>
              <ul className="space-y-4">
                {['Hesabım', 'Siparişler', 'Adreslerim', 'Alışveriş Sepeti', 'Beğenilenler'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-bold text-[#001220]/70 hover:text-[#001f3f] hover:opacity-100 transition-all uppercase tracking-wider flex items-center gap-2 group">
                      <div className="w-1 h-1 bg-[#001220]/10 rounded-full group-hover:bg-[#001f3f] transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#001220]/30 underline decoration-2 underline-offset-8 mb-8">Bizi Takip Edin</h5>
              <div className="flex items-center gap-4">
                <a href="#" className="p-3 bg-[#001220]/5 rounded-xl hover:bg-[#3b5998] hover:text-white transition-all group"><Facebook className="w-5 h-5 fill-current" /></a>
                <a href="#" className="p-3 bg-[#001220]/5 rounded-xl hover:bg-[#55acee] hover:text-white transition-all group"><Twitter className="w-5 h-5 fill-current" /></a>
                <a href="#" className="p-3 bg-[#001220]/5 rounded-xl hover:bg-[#cd201f] hover:text-white transition-all group"><Youtube className="w-5 h-5 fill-current" /></a>
                <a href="#" className="p-3 bg-[#001220]/5 rounded-xl hover:bg-[#E1306C] hover:text-white transition-all group"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </main >
  )
}
