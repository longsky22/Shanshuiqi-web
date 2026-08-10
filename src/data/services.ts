// EXPORTS: IService, MOCK_SERVICES
export interface IService {
  id: string
  name: string
  description: string
  icon: string
  representativeProjects: string[]
  imageUrl: string
}

export const MOCK_SERVICES: IService[] = [
  {
    id: '1',
    name: '制冷空调',
    description: '制冷、空调、净化设备销售、安装与维修，覆盖机房系统及配套管线施工',
    icon: 'Snowflake',
    representativeProjects: ['新巨龙东副井降温', '济宁方舱医院空调'],
    imageUrl: 'https://aka.doubaocdn.com/s/54F2hAUZX7',
  },
  {
    id: '2',
    name: '消防工程',
    description: '消防设施工程、消防排烟与系统改造，服务商业、住宅、工业建筑',
    icon: 'Shield',
    representativeProjects: ['新城一品通风排烟', '大顺花园消防项目'],
    imageUrl: 'https://aka.doubaocdn.com/s/UH2rC2w02Y',
  },
  {
    id: '3',
    name: '净化工程',
    description: '空气净化、洁净空间与净化塔配套实施，服务医药研发及生产场景',
    icon: 'Wind',
    representativeProjects: ['睿鹰集团净化工程', '研发综合楼净化'],
    imageUrl: 'https://aka.doubaocdn.com/s/moERpfp2UL',
  },
  {
    id: '4',
    name: '装修装饰',
    description: '建筑装修装饰工程与空间改造，兼顾洁净要求与管线组织',
    icon: 'Paintbrush',
    representativeProjects: ['酒店商场空间改造', '医院净化配套'],
    imageUrl: 'https://aka.doubaocdn.com/s/NVcxQ7Xt0q',
  },
  {
    id: '5',
    name: '电子智能化',
    description: '视频监控、安防与智能化系统，覆盖公共建筑及工业场景',
    icon: 'Monitor',
    representativeProjects: ['丰县水景苑安防', '祺添新材料监控'],
    imageUrl: 'https://aka.doubaocdn.com/s/BzJMGrNyVo',
  },
  {
    id: '6',
    name: '维修维保',
    description: '制冷机、冷却塔、机房与系统保养，提供长期运行保障服务',
    icon: 'Wrench',
    representativeProjects: ['辰欣药业维保', '郭屯煤矿系统保养'],
    imageUrl: 'https://aka.doubaocdn.com/s/1yX8wlOYcg',
  },
]