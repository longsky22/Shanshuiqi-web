import { Phone, Mail, MapPin, User, Building2, Clock, Send } from 'lucide-react';
import { MOCK_COMPANY } from '@/data/company';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactSection() {
  const company = MOCK_COMPANY;
  const [formData, setFormData] = useState({ name: '', phone: '', content: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error('请填写姓名和联系电话');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('https://formsubmit.co/ajax/1902988557@qq.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `【山水齐官网咨询】${formData.name.trim()} - ${formData.phone.trim()}`,
          _template: 'table',
          _captcha: 'false',
          姓名: formData.name.trim(),
          联系电话: formData.phone.trim(),
          项目需求: formData.content.trim() || '（未填写）',
          来源: '山东山水齐建设工程有限公司官网',
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.message || '提交失败');
      }

      toast.success('咨询已发送，我们会尽快回复您');
      setFormData({ name: '', phone: '', content: '' });
    } catch {
      toast.error('发送失败，请稍后重试，或直接拨打 / 发送邮件联系我们');
    } finally {
      setSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: User,
      label: '业务联系人',
      value: '黄相瑾',
      sub: '17753739259',
      link: 'tel:17753739259',
    },
    {
      icon: Phone,
      label: '公司电话',
      value: '0537-2385695',
      sub: '工作日 9:00-18:00',
      link: 'tel:05372385695',
    },
    {
      icon: Mail,
      label: '电子邮箱',
      value: '453667338@qq.com',
      sub: '24小时内回复',
      link: 'mailto:453667338@qq.com',
    },
    {
      icon: MapPin,
      label: '办公地址',
      value: company.officeAddress,
      sub: '豪德商贸城M区',
      link: null,
    },
    {
      icon: Building2,
      label: '注册地址',
      value: company.registeredAddress,
      sub: '万达广场16号楼11层',
      link: null,
    },
    {
      icon: Clock,
      label: '服务时间',
      value: '全年无休',
      sub: '紧急维修 24小时响应',
      link: null,
    },
  ];

  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 标题 */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            联系我们
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            期待与您合作
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            如有业务咨询或合作意向，欢迎通过以下方式联系我们
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* 联系方式 */}
          <div className="lg:col-span-3 space-y-4">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const Wrapper = item.link ? 'a' : 'div';
              return (
                <Wrapper
                  key={index}
                  href={item.link ?? undefined}
                  className="group flex items-start gap-4 p-5 bg-card border border-border/60 rounded-xl hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground mb-0.5">{item.label}</div>
                    <div className="text-base font-semibold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{item.sub}</div>
                  </div>
                  {item.link && (
                    <div className="text-xs text-primary font-medium shrink-0 self-center">
                      点击联系
                    </div>
                  )}
                </Wrapper>
              );
            })}
          </div>

          {/* 留言表单 */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-primary to-[hsl(215_78%_32%)] rounded-xl p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-2">在线咨询</h3>
              <p className="text-white/70 text-sm mb-6">
                填写您的需求，我们将尽快与您联系
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-white/80 mb-1.5">
                    您的姓名 <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="请输入姓名"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-1.5">
                    联系电话 <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="请输入手机号"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-1.5">
                    项目需求
                  </label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="请简要描述您的项目需求..."
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? '提交中...' : '提交咨询'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
