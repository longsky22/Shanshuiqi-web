import { Building2, Award, Users, Briefcase, Layers, TrendingUp } from 'lucide-react';
import { MOCK_COMPANY } from '@/data/company';
import { Image } from '@/components/ui/image';


const STAT_ICONS = [
  Building2,
  Award,
  Users,
  Briefcase,
  Layers,
  TrendingUp,
];

export default function AboutSection() {
  const company = MOCK_COMPANY;

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 企业简介 - 两栏 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-20">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              关于我们
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              专注机电安装
              <br />
              <span className="text-primary">打造建筑环境系统服务商</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {company.description}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              服务建筑类型覆盖
              <span className="text-foreground font-medium">
                {company.buildingTypes.slice(0, 6).join('、')}
              </span>
              等多种场景，以专业技术与服务能力赢得市场认可。
            </p>

            {/* 经营理念 */}
            <div className="relative pl-5 py-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
              <p className="text-foreground font-semibold text-lg mb-1">
                经营理念
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "{company.businessPhilosophy}"
              </p>
            </div>
          </div>

          {/* 配图 */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10 aspect-[4/3]">
              <Image
                src={company.aboutImageUrl}
                alt="公司办公场所"
                className="w-full h-full object-cover"
              />
            </div>
            {/* 装饰元素 */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28 border-4 border-primary/20 rounded-xl -z-10" />
          </div>
        </div>

        {/* 数据卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {company.stats.map((stat, index) => {
            const Icon = STAT_ICONS[index % STAT_ICONS.length];
            return (
              <div
                key={stat.id}
                className="group relative bg-card border border-border/60 rounded-xl p-5 md:p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 tabular-nums">
                  {stat.value}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    {stat.unit}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
