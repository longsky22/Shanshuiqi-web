import { ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { MOCK_COMPANY } from '@/data/company';
import Image from '@/components/ui/image';

export default function HeroSection() {
  const company = MOCK_COMPANY;

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景图 */}
      <div className="absolute inset-0">
        <Image
          src={company.heroImageUrl}
          alt="山东山水齐建设工程有限公司"
          className="w-full h-full object-cover"
        />
        {/* 深蓝渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215_78%_12%)]/85 via-[hsl(215_78%_18%)]/75 to-[hsl(215_78%_14%)]/90" />
      </div>

      {/* 内容 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-0 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/90 font-medium">{company.tagline}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
            {company.name}
          </h1>

          <p className="text-base md:text-lg text-white/70 tracking-widest mb-6 md:mb-8 font-light">
            {company.nameEn}
          </p>

          <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-8 md:mb-10">
            {company.slogan}
          </p>

          <p className="text-sm md:text-base text-white/75 leading-relaxed max-w-2xl mb-10 md:mb-12">
            {company.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-primary font-semibold text-base hover:bg-white/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-black/20"
            >
              <Phone className="w-5 h-5" />
              <span>联系我们</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-transparent border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 hover:border-white/60 transition-all"
            >
              <span>了解更多</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* 向下滚动提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest">SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
