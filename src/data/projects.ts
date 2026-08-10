// EXPORTS: IProject, MOCK_PROJECTS, MOCK_FEATURED_PROJECTS
export interface IProject {
  id: string
  name: string
  fullName?: string
  location: string
  amount: string
  period: string
  category: '净化工程' | '制冷空调' | '消防工程' | '电子智能化' | '装修装饰' | '维修维保'
  client?: string
  area?: string
  description?: string
  highlights?: string[]
  imageUrl: string
  featured?: boolean
}

export const MOCK_FEATURED_PROJECTS: IProject[] = [
  {
    id: '1',
    name: '睿鹰集团净化工程',
    fullName: '技术研发质量研究综合楼净化工程',
    location: '菏泽市牡丹区',
    amount: '1,136万元',
    period: '2023.03 — 2025.06',
    category: '净化工程',
    client: '睿鹰集团研究中心',
    area: '1.36万平方米',
    description:
      '面向医药研发与质量研究空间，实施净化系统安装及配套工程，是公司披露业绩中金额最大的单体项目，兼顾洁净要求、管线组织与后期维护。',
    highlights: [
      '单体造价最高代表项目',
      '净化系统与装修装饰协同实施',
      '覆盖研发、质量研究综合楼空间',
      '屋面净化塔及设备单元配套',
    ],
    imageUrl: '/projects/ruiying.jpg',
    featured: true,
  },
  {
    id: '2',
    name: '新巨龙东副井全风量降温工程',
    fullName: '东副井全风量降温安装工程',
    location: '巨野县',
    amount: '637万元',
    period: '2023.06 — 2024.03',
    category: '制冷空调',
    client: '山东新巨龙能源',
    area: '煤矿东副井',
    description:
      '面向矿区高温作业环境，完成大型降温设备安装、机房管线组织与系统调试，并与后续维保服务形成衔接。',
    highlights: [
      '矿区高温环境降温系统',
      '大型设备安装与调试',
      '机房与管线系统一体化实施',
    ],
    imageUrl: '/projects/xinjulong.jpg',
    featured: true,
  },
  {
    id: '3',
    name: '济宁万象汇中央空调项目',
    fullName: '商场中央空调改造安装项目',
    location: '济宁市高新区',
    amount: '93万元',
    period: '2024.05 — 2024.12',
    category: '制冷空调',
    client: '万象汇多品牌店',
    area: '5.1万平方米',
    description:
      '服务万象汇内 KKV、POLOWALK、伶俐、Kappa 等品牌店，兼顾营业空间施工组织，覆盖设备、风管、风口与调试。',
    highlights: [
      '商业营业空间交叉施工',
      '多品牌店末端同步改造',
      '设备、风管、风口一体化调试',
    ],
    imageUrl: '/projects/wanxianghui.jpg',
    featured: true,
  },
  {
    id: '4',
    name: '煤矿与医药维保专项',
    fullName: '制冷机、冷却塔系统保养维修',
    location: '郓城 / 嘉祥 / 济宁高新区',
    amount: '约77.2万元',
    period: '2025 年持续服务',
    category: '维修维保',
    client: '郭屯煤矿 · 梁宝寺煤矿 · 益健药业',
    description:
      '围绕「检查—保养—维修—跟踪」展开，覆盖郭屯煤矿系统保养、梁宝寺煤矿冷却塔填料更换及益健药业制冷机采购安装与维保。',
    highlights: [
      '郭屯煤矿系统保养维保',
      '梁宝寺煤矿冷却塔填料更换维修',
      '益健药业制冷机采购安装及维保',
    ],
    imageUrl: '/projects/weibao.jpg',
    featured: true,
  },
]

export const MOCK_PROJECTS: IProject[] = [
  {
    id: '1',
    name: '睿鹰集团净化工程',
    location: '菏泽',
    amount: '1,136万元',
    period: '2023.03—2025.06',
    category: '净化工程',
    imageUrl: '/projects/ruiying.jpg',
  },
  {
    id: '2',
    name: '新巨龙东副井降温',
    location: '巨野',
    amount: '637万元',
    period: '2023.06—2024.03',
    category: '制冷空调',
    imageUrl: '/projects/xinjulong.jpg',
  },
  {
    id: '3',
    name: '济宁方舱医院空调',
    location: '济宁',
    amount: '360万元',
    period: '2022.03—2022.05',
    category: '制冷空调',
    imageUrl: 'https://aka.doubaocdn.com/s/54F2hAUZX7',
  },
  {
    id: '4',
    name: '丰县水景苑安防智能化',
    location: '江苏丰县',
    amount: '203.6万元',
    period: '2025.05—2025.12',
    category: '电子智能化',
    imageUrl: 'https://aka.doubaocdn.com/s/BzJMGrNyVo',
  },
  {
    id: '5',
    name: '新城一品通风排烟',
    location: '梁山',
    amount: '194万元',
    period: '2025.12—',
    category: '消防工程',
    imageUrl: 'https://aka.doubaocdn.com/s/UH2rC2w02Y',
  },
  {
    id: '6',
    name: '大顺花园消防项目',
    location: '嘉祥',
    amount: '125万元',
    period: '2022.02—2023.05',
    category: '消防工程',
    imageUrl: 'https://aka.doubaocdn.com/s/UH2rC2w02Y',
  },
  {
    id: '7',
    name: '祺添新材料视频监控',
    location: '嘉祥',
    amount: '112万元',
    period: '2024.09—2024.12',
    category: '电子智能化',
    imageUrl: 'https://aka.doubaocdn.com/s/BzJMGrNyVo',
  },
  {
    id: '8',
    name: '辰欣药业制冷机维保',
    location: '济宁',
    amount: '106万元',
    period: '2025.06—2026.06',
    category: '维修维保',
    imageUrl: 'https://aka.doubaocdn.com/s/1yX8wlOYcg',
  },
  {
    id: '9',
    name: '丰县热力单元阀组配套',
    location: '江苏丰县',
    amount: '106.66万元',
    period: '2025.03—2025.04',
    category: '制冷空调',
    imageUrl: 'https://aka.doubaocdn.com/s/l2IuqAiUtC',
  },
  {
    id: '10',
    name: '5#车间中央空调安装',
    location: '济宁经开区',
    amount: '105万元',
    period: '2024.06—2024.10',
    category: '制冷空调',
    imageUrl: 'https://aka.doubaocdn.com/s/54F2hAUZX7',
  },
  {
    id: '11',
    name: '万象汇中央空调改造',
    location: '济宁高新区',
    amount: '93万元',
    period: '2024.05—2024.12',
    category: '制冷空调',
    imageUrl: '/projects/wanxianghui.jpg',
  },
  {
    id: '12',
    name: '希尔顿欢朋酒店空调',
    location: '济宁高新区',
    amount: '77.8万元',
    period: '2024.08—2024.09',
    category: '制冷空调',
    imageUrl: 'https://aka.doubaocdn.com/s/54F2hAUZX7',
  },
]
