import { Snowflake, Shield, Wind, Paintbrush, Monitor, Wrench, ArrowRight } from 'lucide-react';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { MOCK_SERVICES } from '@/data/services';
import { Image } from '@/components/ui/image';


const SERVICE_ICONS: Record<string, typeof Snowflake> = {
  Snowflake,
  Shield,
  Wind,
  Paintbrush,
  Monitor,
  Wrench,
};

export default function ServicesSection() {
  const services = MOCK_SERVICES;

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 标题 */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            业务范围
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            六大业务板块，全方位工程服务
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从制冷空调到维修维保，覆盖建筑机电环境系统全链条服务能力
          </p>
        </div>

        {/* 业务卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = SERVICE_ICONS[service.icon] || Snowflake;
            return (
              <div
                key={service.id}
                className="group relative bg-card border border-border/60 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* 配图 */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  {/* 图标 */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* 内容 */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* 代表项目 */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">代表项目：</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.representativeProjects.map((project) => (
                        <span
                          key={project}
                          className="px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>

                  <NavLink
                    to="#projects"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
                  >
                    查看项目
                    <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>

        {/* 一体化流程条 */}
        <div className="mt-12 md:mt-16 relative bg-gradient-to-r from-[hsl(215_78%_16%)] via-[hsl(215_78%_22%)] to-[hsl(215_78%_16%)] rounded-xl p-6 md:p-8 text-white overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center">
              一体化组织流程
            </h3>
            <p className="text-white/70 text-sm text-center mb-6 md:mb-8">
              从方案选型到售后维保，提供全流程一条龙服务
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {[
                '方案选型',
                '材料进场',
                '安装施工',
                '测试检测',
                '调试验收',
                '售后维保',
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-2 md:gap-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm whitespace-nowrap">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                  {i < 5 && (
                    <ArrowRight className="w-4 h-4 text-white/40 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
