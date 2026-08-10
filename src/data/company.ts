// EXPORTS: ICompany, ICompanyStat, IAdvantage, MOCK_COMPANY
export interface ICompanyStat {
  id: string
  label: string
  value: string
  unit: string
}

export interface IAdvantage {
  id: string
  title: string
  description: string
  iconKey: string
}

export interface ICompany {
  id: string
  name: string
  nameEn: string
  slogan: string
  tagline: string
  heroImageUrl: string
  aboutImageUrl: string
  description: string
  buildingTypes: string[]
  businessPhilosophy: string
  serviceConcept: string
  stats: ICompanyStat[]
  advantages: IAdvantage[]
  registeredAddress: string
  officeAddress: string
}

export const MOCK_COMPANY: ICompany = {
  id: '1',
  name: '山东山水齐建设工程有限公司',
  nameEn: 'Shandong ShanShui Qi Construction Engineering Co., Ltd',
  slogan: '机电安装与建筑环境系统服务商',
  tagline: '机电安装 | 消防净化 | 智能维保',
  heroImageUrl: 'https://aka.doubaocdn.com/s/xdV22mjEyu',
  aboutImageUrl: 'https://aka.doubaocdn.com/s/kDYoV33FEW',
  description:
    '山东山水齐建设工程有限公司位于山东省济宁市，是以机电安装、消防、净化工程、建筑装修装饰工程、电子与智能化工程、空调与空气净化、消防排烟及中央空调销售安装、维修服务为一体的一条龙服务企业。',
  buildingTypes: [
    '综合楼',
    '商场',
    '宾馆',
    '医院',
    '住宅小区',
    '餐饮娱乐',
    '公寓别墅',
    '生产车间',
    '体育场馆',
  ],
  businessPhilosophy: '质量第一、以人为主 —— 靠质量赢得市场，靠服务打造品牌。',
  serviceConcept: '从点滴、细微处入手，一点一滴积累；真诚、快捷。',
  stats: [
    { id: '1', label: '成立时间', value: '2021.10', unit: '年' },
    { id: '2', label: '注册资金', value: '1,000', unit: '万元' },
    { id: '3', label: '公司人数', value: '32', unit: '人' },
    { id: '4', label: '办公面积', value: '260', unit: '㎡' },
    { id: '5', label: '最大业务量', value: '6,000', unit: '万元' },
    { id: '6', label: '2025合同额', value: '582.18', unit: '万元' },
  ],
  advantages: [
    {
      id: '1',
      title: '技术能力',
      description: '吸收国内外相关领域先进技术，覆盖机电、消防、净化、智能化等系统。',
      iconKey: 'tech',
    },
    {
      id: '2',
      title: '施工队伍',
      description: '拥有精湛施工队伍，能够组织多类型建筑场景的安装与改造作业。',
      iconKey: 'team',
    },
    {
      id: '3',
      title: '材料与设备',
      description: '采用优质原材料及配件，配备安装加工设备与测试检测设备。',
      iconKey: 'material',
    },
    {
      id: '4',
      title: '管理与售后',
      description: '依托成熟管理经验和点滴服务系统，形成安装、维修、维保连续服务。',
      iconKey: 'service',
    },
  ],
  registeredAddress: '山东省济宁市任城区阜桥街道万达广场16号楼11层24号房',
  officeAddress: '山东省济宁市豪德商贸城M区',
}