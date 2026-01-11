'use client'

import { motion } from 'framer-motion'
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
  ShieldCheck,
  Globe,
  Command,
  ChevronRight
} from 'lucide-react'

const categories = [
  { icon: Cpu, title: 'RFID Sistemleri', description: 'Gerçek zamanlı varlık takibi için gelişmiş UHF/HF altyapısı.' },
  { icon: Printer, title: 'Endüstriyel Yazıcılar', description: '7/24 operasyonel ortamlar için ağır hizmet tipi etiketleme sistemleri.' },
  { icon: Scan, title: 'Optik Tarama', description: 'Yüksek hızlı 1D/2D veri yakalama ve okuma çözümleri.' },
  { icon: Box, title: 'Mobil Terminaller', description: 'Depo lojistiği için kurumsal sınıf el terminalleri ve tabletler.' },
  { icon: Package, title: 'Sarf Malzemeleri', description: 'Termal uygulamalar için sertifikalı ribbon ve etiket stokları.' },
  { icon: Zap, title: 'Teknik Servis', description: 'Uzman bakım, onarım ve sistem entegrasyon desteği.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-950 selection:text-white">
      {/* Navigasyon */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between subtle-glass px-8 py-4 rounded-xl">
          <div className="flex items-center gap-12">
            <h1 className="text-sm font-black tracking-widest text-slate-950 flex items-center gap-3">
              <Command className="w-4 h-4" /> BARKOD SİSTEMLERİ
            </h1>
            <div className="hidden lg:flex gap-8">
              {['Katalog', 'Mühendislik', 'Çözümler', 'Arşiv'].map((item) => (
                <a key={item} href="#" className="nav-item">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Search className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-950 transition-colors" />
            <div className="h-4 w-px bg-slate-100" />
            <button className="text-[10px] font-black uppercase tracking-widest text-slate-950 hover:opacity-70 transition-opacity">
              Portal Erişimi
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Bölümü */}
      <section className="pt-56 pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-300 border border-slate-100 px-3 py-1 rounded-full">
              Endüstriyel Otonomi // 2026
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 max-w-4xl"
          >
            Yeni Nesil Tedarik Zinciri <br />
            <span className="text-slate-400 font-normal">İçin Teknik Altyapı.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base text-slate-500 max-w-2xl leading-relaxed mb-12"
          >
            Lojistik döngüleri ve üretim güvenilirliğini optimize etmek için tasarlanmış yüksek frekanslı donanım çözümleri ve mühendislik uzmanlığı.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-6"
          >
            <button className="px-8 py-3 bg-slate-950 text-white rounded-lg text-[11px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center gap-3">
              Kataloğu İncele <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-white border border-slate-200 text-slate-950 rounded-lg text-[11px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">
              Teknik Dokümantasyon
            </button>
          </motion.div>
        </div>
      </section>

      {/* Güven Bandı */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-y border-slate-50">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 text-slate-300">
          <div className="flex items-center gap-3 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default text-[10px] font-black tracking-widest uppercase">
            <ShieldCheck className="w-4 h-4" /> Global Sertifikalar
          </div>
          <div className="flex items-center gap-3 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default text-[10px] font-black tracking-widest uppercase">
            <Globe className="w-4 h-4" /> Dağıtım Merkezi
          </div>
          <div className="flex items-center gap-3 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default text-[10px] font-black tracking-widest uppercase">
            <Layers className="w-4 h-4" /> Sistem Ölçeklenebilirliği
          </div>
          <div className="flex items-center gap-3 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all cursor-default text-[10px] font-black tracking-widest uppercase">
            <Zap className="w-4 h-4" /> Teknik Destek Ağı
          </div>
        </div>
      </div>

      {/* Ürün Gridi */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24">
            <div>
              <span className="section-label">Envanter</span>
              <h3 className="text-3xl font-bold tracking-tight">Ürün Mimarisi.</h3>
            </div>
            <div className="hidden md:block">
              <a href="#" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-950 transition-colors group">
                Tüm dokümantasyon <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="premium-card group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-slate-50 rounded-lg text-slate-400 group-hover:bg-slate-950 group-hover:text-white transition-all duration-300">
                    <cat.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-100 group-hover:text-slate-300 transition-colors" />
                </div>
                <h4 className="text-lg font-bold mb-3 tracking-tight">{cat.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  {cat.description}
                </p>
                <div className="mt-8 border-t border-slate-50 pt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Spesifikasyonlar</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-950">Detayları gör</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Uygulama Odaklı Bölüm */}
      <section className="py-40 bg-slate-950 text-white overflow-hidden relative font-sans">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-900 skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Servis Mühendisliği</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Uçtan Uca <br /> Uygulama Merkezi.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md font-medium">
              Sadece donanım değil; sistem mimarisi, yazılım entegrasyonu ve kurulum sonrası servis döngülerini yönetiyoruz.
            </p>
            <button className="px-10 py-4 bg-white text-slate-950 rounded-lg text-[11px] font-bold uppercase tracking-widest hover:bg-brand-cyan transition-all">
              Hizmet Talebi Oluştur
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <span className="text-3xl font-black block mb-2">%99.8</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Çalışma Süresi</span>
            </div>
            <div className="p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <span className="text-3xl font-black block mb-2">15ms</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Senkronizasyon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-40 pb-16 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
            <div>
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-slate-950">Altyapı</h5>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                Hassas tanımlama teknolojileri ile küresel ticaretin fiziksel omurgasını optimize ediyoruz.
              </p>
            </div>
            <div>
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-slate-950">Kaynaklar</h5>
              <ul className="space-y-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <li className="hover:text-slate-950 cursor-pointer transition-colors">Katalog İndir</li>
                <li className="hover:text-slate-950 cursor-pointer transition-colors">Entegrasyon Rehberi</li>
                <li className="hover:text-slate-950 cursor-pointer transition-colors">Bakım Portalı</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-slate-950">Uyumluluk</h5>
              <ul className="space-y-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <li className="hover:text-slate-950 cursor-pointer transition-colors">Gizlilik Modeli</li>
                <li className="hover:text-slate-950 cursor-pointer transition-colors">Hizmet Şartları</li>
                <li className="hover:text-slate-950 cursor-pointer transition-colors">Şifreleme Standartları</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-slate-950">Kimlik</h5>
              <p className="text-[11px] font-bold text-slate-400 leading-loose tracking-[0.1em] uppercase">
                İstanbul Genel Merkez <br />
                Ağ: Küresel / Tedarik Zinciri <br />
                destek@ornekmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-50 gap-8">
            <span className="text-[10px] font-black text-slate-300 tracking-[0.5em] uppercase">© 2026 Örnek Yazı // Örnek Yazı</span>
            <div className="flex gap-12 text-[10px] font-black text-slate-300 uppercase tracking-widest">
              <span>Örnek Yazı</span>
              <span>Örnek Yazı</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
