import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { cn } from '@/lib/utils';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

const NAV_ITEMS = [
  { label: '首页', anchor: '#hero' },
  { label: '关于我们', anchor: '#about' },
  { label: '业务范围', anchor: '#services' },
  { label: '资质业绩', anchor: '#qualifications' },
  { label: '项目案例', anchor: '#projects' },
  { label: '联系我们', anchor: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="#hero" className="flex items-center gap-3 group">
            <img
              src="/logo.svg"
              alt="山水齐建设logo"
              className="w-10 h-10 md:w-11 md:h-11 object-contain shrink-0"
            />
            <div className="flex flex-col leading-tight">
              <span className={cn(
                'text-base md:text-lg font-bold tracking-wide transition-colors',
                scrolled ? 'text-white' : 'text-white'
              )}>
                山东山水齐
              </span>
              <span className={cn(
                'text-[10px] md:text-xs tracking-widest transition-colors',
                scrolled ? 'text-white/70' : 'text-white/60'
              )}>
                建设工程有限公司
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.anchor}
                to={item.anchor}
                className={({ isActive }) => cn(
                  'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive
                    ? 'text-white bg-white/15'
                    : scrolled
                    ? 'text-white/85 hover:text-white hover:bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <UniversalLink
              to="tel:0537-2385695"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md bg-white text-primary text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0537-2385695</span>
            </UniversalLink>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              aria-label="打开菜单"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            'absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl transition-transform duration-300 flex flex-col',
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="山水齐建设logo"
                className="w-9 h-9 object-contain shrink-0"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-foreground text-sm">山东山水齐</span>
                <span className="text-[10px] text-muted-foreground">建设工程</span>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="关闭菜单"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.anchor}
                to={item.anchor}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => cn(
                  'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="p-4 border-t border-border">
            <UniversalLink
              to="tel:0537-2385695"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>立即咨询</span>
            </UniversalLink>
          </div>
        </div>
      </div>
    </header>
  );
}
