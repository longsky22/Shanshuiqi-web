import { useState } from 'react';
import { Award, FileCheck, X } from 'lucide-react';
import {
  MOCK_CERTIFICATES,
  MOCK_PROJECT_STATS,
  MOCK_KEY_PROJECTS,
} from '@/data/qualifications';
import { cn } from '@/lib/utils';
import { Image } from '@/components/ui/image';

export default function QualificationsSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');
  const [lightboxTitle, setLightboxTitle] = useState('');

  const openLightbox = (src: string, title: string) => {
    setLightboxSrc(src);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  return (
    <section id="qualifications" className="w-full py-16 md:py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 标题 */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            资质与业绩
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            专业资质背书，海量项目经验
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            持有多项工程专业承包资质，累计服务众多优质客户
          </p>
        </div>

        {/* 资质证书 + 经营数据 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* 资质证书 */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border/60 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">企业资质</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {MOCK_CERTIFICATES.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => openLightbox(cert.imageUrl, cert.name)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden border border-border bg-muted/50 hover:border-primary/40 transition-all">
                    <Image
                      src={cert.imageUrl}
                      alt={cert.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-primary px-3 py-1.5 rounded-md transition-opacity">
                        点击查看
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground text-center">
                    {cert.name}
                  </p>
                  {cert.validPeriod && (
                    <p className="text-xs text-muted-foreground text-center mt-0.5">
                      有效期：{cert.validPeriod}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 经营数据 */}
          <div className="bg-card rounded-xl border border-border/60 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <FileCheck className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">经营数据</h3>
            </div>
            <div className="space-y-5">
              {MOCK_PROJECT_STATS.map((stat, index) => (
                <div
                  key={stat.id}
                  className={cn(
                    'flex items-center justify-between pb-4',
                    index < MOCK_PROJECT_STATS.length - 1 && 'border-b border-border/60'
                  )}
                >
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <div className="text-right">
                    <span className="text-xl md:text-2xl font-bold text-primary tabular-nums">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-xs text-muted-foreground ml-1">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 重点项目表格 */}
        <div className="bg-card rounded-xl border border-border/60 overflow-hidden">
          <div className="px-6 md:px-8 py-5 border-b border-border/60">
            <h3 className="text-lg font-bold text-foreground">重点项目清单</h3>
            <p className="text-sm text-muted-foreground mt-1">
              累计完成百余项工程，服务工业、医疗、商业及公共建筑领域
            </p>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left font-semibold text-foreground px-6 py-3 whitespace-nowrap">序号</th>
                  <th className="text-left font-semibold text-foreground px-6 py-3 whitespace-nowrap">项目名称</th>
                  <th className="text-left font-semibold text-foreground px-6 py-3 whitespace-nowrap">地点</th>
                  <th className="text-left font-semibold text-foreground px-6 py-3 whitespace-nowrap">工期</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_KEY_PROJECTS.map((project, index) => (
                  <tr
                    key={project.id}
                    className="border-t border-border/40 hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-6 py-3.5 whitespace-nowrap">
                      <span className={cn(
                        'inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold',
                        index < 3 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                      )}>
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 font-medium text-foreground whitespace-nowrap">
                      {project.name}
                    </td>
                    <td className="px-6 py-3.5 text-muted-foreground whitespace-nowrap">
                      {project.location}
                    </td>
                    <td className="px-6 py-3.5 text-muted-foreground whitespace-nowrap">
                      {project.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="关闭"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt={lightboxTitle}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-center text-white/80 mt-4">{lightboxTitle}</p>
          </div>
        </div>
      )}
    </section>
  );
}
