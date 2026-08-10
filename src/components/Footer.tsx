import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

const FOOTER_NAV = [
  { label: '首页', anchor: '#hero' },
  { label: '关于我们', anchor: '#about' },
  { label: '业务范围', anchor: '#services' },
  { label: '资质业绩', anchor: '#qualifications' },
  { label: '项目案例', anchor: '#projects' },
  { label: '联系我们', anchor: '#contact' },
];

const SERVICES = ['制冷空调', '消防工程', '净化工程', '装修装饰', '电子智能化', '维修维保'];

export default function Footer() {
  return (
    <footer className="w-full bg-[hsl(215_78%_14%)] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* 公司简介 */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.svg"
                alt="山水齐建设logo"
                className="w-12 h-12 object-contain shrink-0"
              />
              <div>
                <div className="font-bold text-white">山东山水齐建设工程有限公司</div>
                <div className="text-xs text-white/60 tracking-wider">Shandong ShanShui Qi Construction Engineering Co., Ltd</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              机电安装与建筑环境系统服务商，以制冷空调、消防排烟、净化工程、装修装饰与电子智能化能力，服务工业、医疗、商业及公共建筑。
            </p>
            <div className="text-xs text-white/50">
              经营理念：质量第一、以人为主
            </div>
          </div>

          {/* 快速导航 */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">快速导航</h3>
            <ul className="space-y-2">
              {FOOTER_NAV.map((item) => (
                <li key={item.anchor}>
                  <NavLink
                    to={item.anchor}
                    className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 业务范围 */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">业务范围</h3>
            <ul className="space-y-2">
              {SERVICES.map((item) => (
                <li key={item} className="flex items-center gap-1 text-sm text-white/70">
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-base">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-white/60" />
                <div>
                  <div className="text-sm text-white">0537-2385695</div>
                  <div className="text-xs text-white/50">业务咨询</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-white/60" />
                <UniversalLink
                  to="mailto:453667338@qq.com"
                  className="text-sm text-white/70 hover:text-white transition-colors break-all"
                >
                  453667338@qq.com
                </UniversalLink>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-white/60" />
                <div className="text-sm text-white/70">
                  山东省济宁市豪德商贸城M区
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 text-center md:text-left">
            © 2026 山东山水齐建设工程有限公司 版权所有
          </p>
          <p className="text-xs text-white/40 text-center md:text-right">
            机电安装 | 消防净化 | 智能维保
          </p>
        </div>
      </div>
    </footer>
  );
}
