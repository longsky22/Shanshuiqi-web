import { Shield, Heart, Zap, CheckCircle2 } from 'lucide-react';
import { MOCK_PROCESS_STEPS, MOCK_SERVICE_PROMISES } from '@/data/service';

const PROMISE_ICONS: Record<string, typeof Shield> = {
  quality: Shield,
  service: Heart,
  response: Zap,
};

export default function ServiceSection() {
  return (
    <section id="service" className="w-full py-16 md:py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 标题 */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            服务保障
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            全流程服务，点滴保障
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从方案选型到售后维保，六大环节环环相扣，为您的工程保驾护航
          </p>
        </div>

        {/* 服务流程 - 横向时间线 */}
        <div className="relative mb-16 md:mb-20">
          {/* 桌面版横向时间线 */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* 连接线 */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
              <div className="absolute top-8 left-0 h-0.5 bg-primary" style={{ width: '100%' }} />

              <div className="grid grid-cols-6 gap-4 relative">
                {MOCK_PROCESS_STEPS.map((step) => (
                  <div key={step.id} className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-card border-4 border-primary flex items-center justify-center text-xl font-bold text-primary shadow-lg shadow-primary/10">
                      {step.step}
                    </div>
                    <h4 className="mt-4 text-base font-bold text-foreground">{step.title}</h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 移动端纵向时间线 */}
          <div className="lg:hidden">
            <div className="relative pl-8">
              {/* 竖线 */}
              <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-primary/30" />

              <div className="space-y-6">
                {MOCK_PROCESS_STEPS.map((step) => (
                  <div key={step.id} className="relative flex items-start gap-4">
                    <div className="absolute -left-8 top-0 w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center text-sm font-bold text-primary shadow-md z-10">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-card rounded-lg p-4 border border-border/60">
                      <h4 className="text-base font-bold text-foreground mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 服务承诺 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {MOCK_SERVICE_PROMISES.map((promise) => {
            const Icon = PROMISE_ICONS[promise.icon] || CheckCircle2;
            return (
              <div
                key={promise.id}
                className="group bg-card rounded-xl border border-border/60 p-8 text-center hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{promise.title}</h3>
                <p className="text-sm text-muted-foreground">{promise.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
