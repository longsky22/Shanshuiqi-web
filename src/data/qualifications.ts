// EXPORTS: ICertificate, IProjectStat, IKeyProject, MOCK_CERTIFICATES, MOCK_PROJECT_STATS, MOCK_KEY_PROJECTS
export interface ICertificate {
  id: string
  name: string
  imageUrl: string
  validPeriod?: string
}

export interface IProjectStat {
  id: string
  label: string
  value: string
  unit?: string
}

export interface IKeyProject {
  id: string
  name: string
  location: string
  amount: string
  period: string
}

export const MOCK_CERTIFICATES: ICertificate[] = [
  {
    id: '1',
    name: '建筑业企业资质证书',
    imageUrl: 'https://aka.doubaocdn.com/s/guHuygd6Vd',
  },
  {
    id: '2',
    name: '安全生产许可证',
    imageUrl: 'https://aka.doubaocdn.com/s/gK9WLCw5UH',
    validPeriod: '2025.03.19 — 2028.03.18',
  },
]

export const MOCK_PROJECT_STATS: IProjectStat[] = [
  { id: '1', label: '总项目数', value: '50+', unit: '项' },
  { id: '2', label: '服务客户', value: '30+', unit: '家' },
  { id: '3', label: '资质等级', value: '3项', unit: '贰级' },
]

export const MOCK_KEY_PROJECTS: IKeyProject[] = [
  { id: '1', name: '睿鹰集团净化工程', location: '菏泽', amount: '1,136万元', period: '2023.03—2025.06' },
  { id: '2', name: '新巨龙东副井降温', location: '巨野', amount: '637万元', period: '2023.06—2024.03' },
  { id: '3', name: '济宁方舱医院空调', location: '济宁', amount: '360万元', period: '2022.03—2022.05' },
  { id: '4', name: '丰县水景苑安防智能化', location: '江苏丰县', amount: '203.6万元', period: '2025.05—2025.12' },
  { id: '5', name: '新城一品通风排烟', location: '梁山', amount: '194万元', period: '2025.12—' },
  { id: '6', name: '大顺花园消防项目', location: '嘉祥', amount: '125万元', period: '2022.02—2023.05' },
  { id: '7', name: '祺添新材料视频监控', location: '嘉祥', amount: '112万元', period: '2024.09—2024.12' },
  { id: '8', name: '辰欣药业制冷机维保', location: '济宁', amount: '106万元', period: '2025.06—2026.06' },
  { id: '9', name: '丰县热力单元阀组配套', location: '江苏丰县', amount: '106.66万元', period: '2025.03—2025.04' },
  { id: '10', name: '5#车间中央空调安装', location: '济宁经开区', amount: '105万元', period: '2024.06—2024.10' },
  { id: '11', name: '万象汇中央空调改造', location: '济宁高新区', amount: '93万元', period: '2024.05—2024.12' },
  { id: '12', name: '希尔顿欢朋酒店空调', location: '济宁高新区', amount: '77.8万元', period: '2024.08—2024.09' },
]