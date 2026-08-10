import { MapPin, Calendar, Building2, Ruler, CheckCircle2 } from 'lucide-react';
import { MOCK_FEATURED_PROJECTS, type IProject } from '@/data/projects';

function MetaRow({ project }: { project: IProject }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
      {project.client && (
        <div className="flex items-center gap-1.5 min-w-0">
          <Building2 className="w-4 h-4 shrink-0" />
          <span className="truncate">{project.client}</span>
        </div>
      )}
      <div className="flex items-center gap-1.5">
        <MapPin className="w-4 h-4 shrink-0" />
        <span>{project.location}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Calendar className="w-4 h-4 shrink-0" />
        <span>{project.period}</span>
      </div>
      {project.area && (
        <div className="flex items-center gap-1.5">
          <Ruler className="w-4 h-4 shrink-0" />
          <span>{project.area}</span>
        </div>
      )}
    </div>
  );
}

function ProjectImage({
  project,
  className,
}: {
  project: IProject;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-muted ${className ?? ''}`}>
      <img
        src={project.imageUrl}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/15 to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 rounded-full bg-white/95 text-primary text-xs font-semibold">
          {project.category}
        </span>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [featured, ...others] = MOCK_FEATURED_PROJECTS;

  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            代表项目
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            医药净化、煤矿降温、商业建筑与维保专项
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            精选简介披露业绩中的标杆工程，覆盖净化、制冷空调、商业改造与长期维保
          </p>
        </div>

        {/* 主推：横向布局，消除大块留白 */}
        {featured && (
          <article className="group mb-6 md:mb-8 grid grid-cols-1 lg:grid-cols-5 border border-border/60 rounded-xl overflow-hidden bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/5 transition-all duration-300">
            <ProjectImage
              project={featured}
              className="lg:col-span-3 aspect-[16/10] lg:aspect-auto lg:min-h-[360px]"
            />
            <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-center gap-4">
              <div>
                <p className="text-xs font-medium tracking-wider text-primary mb-2">
                  金额最大单体项目
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {featured.name}
                </h3>
                {featured.fullName && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {featured.fullName}
                  </p>
                )}
              </div>

              <MetaRow project={featured} />

              {featured.description && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {featured.description}
                </p>
              )}

              {featured.highlights && featured.highlights.length > 0 && (
                <ul className="grid grid-cols-1 gap-2.5 pt-1">
                  {featured.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/85"
                    >
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        )}

        {/* 其余三项：等高三列，避免 row-span 拉伸 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {others.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-card border border-border/60 rounded-xl overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/5 transition-all duration-300 hover:-translate-y-1"
            >
              <ProjectImage project={project} className="aspect-[16/10]" />
              <div className="flex flex-1 flex-col p-5 md:p-6 gap-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  {project.fullName && (
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                      {project.fullName}
                    </p>
                  )}
                </div>

                <MetaRow project={project} />

                {project.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                )}

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mt-auto space-y-2 pt-1 border-t border-border/50">
                    {project.highlights.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-foreground/80"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
