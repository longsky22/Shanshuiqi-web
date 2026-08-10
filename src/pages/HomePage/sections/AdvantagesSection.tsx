import { Cpu, Users, Package, Headphones, Sparkles } from 'lucide-react';
import { MOCK_COMPANY } from '@/data/company';

const ADVANTAGE_ICONS: Record<string, typeof Cpu> = {
  tech: Cpu,
  team: Users,
  material: Package,
  service: Headphones,
};

export default function AdvantagesSection() {
  const { advantages, serviceConcept } = MOCK_COMPANY;

  return (
    <section id="advantages" className="w-full py-16 md:py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 标题 */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            核心优势
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            四大核心优势，铸就专业品质
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            凭借技术实力、施工队伍、材料设备与服务体系的综合优势，为客户提供可靠的工程服务
          </p>
        </div>

        {/* 优势卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {advantages.map((adv, index) => {
            const Icon = ADVANTAGE_ICONS[adv.iconKey] || Sparkles;
            return (
              <div
                key={adv.id}
                className="group relative bg-card rounded-xl p-6 md:p-8 border border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-6 text-7xl font-black text-primary/5 leading-none -translate-y-2">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 服务理念 */}
        <div className="relative bg-gradient-to-r from-primary via-[hsl(215_78%_32%)] to-primary rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden">
          {/* 装饰 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-white/80" />
            <h3 className="text-xl md:text-2xl font-bold mb-4">服务理念</h3>
            <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed">
              "{serviceConcept}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
