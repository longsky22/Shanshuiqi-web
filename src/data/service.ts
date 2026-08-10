// EXPORTS: IServiceProcess, IServicePromise, MOCK_PROCESS_STEPS, MOCK_SERVICE_PROMISES
export interface IServiceProcess {
  id: string
  step: number
  title: string
  description: string
}

export interface IServicePromise {
  id: string
  title: string
  description: string
  icon: string
}

export const MOCK_PROCESS_STEPS: IServiceProcess[] = [
  {
    id: '1',
    step: 1,
    title: '方案选型',
    description: '明确负荷、系统与设备边界，定制最优方案'
  },
  {
    id: '2',
    step: 2,
    title: '材料进场',
    description: '组织优质原材料及配件，严格进场检验'
  },
  {
    id: '3',
    step: 3,
    title: '安装施工',
    description: '专业施工队伍按节点组织标准化作业'
  },
  {
    id: '4',
    step: 4,
    title: '测试检测',
    description: '使用专业测试检测设备全面验证'
  },
  {
    id: '5',
    step: 5,
    title: '调试验收',
    description: '完成系统调试与项目交付验收'
  },
  {
    id: '6',
    step: 6,
    title: '售后维保',
    description: '点滴服务系统持续跟进，长期保障'
  }
]

export const MOCK_SERVICE_PROMISES: IServicePromise[] = [
  {
    id: '1',
    title: '质量保障',
    description: '靠质量赢得市场',
    icon: 'quality'
  },
  {
    id: '2',
    title: '服务至上',
    description: '靠服务打造品牌',
    icon: 'service'
  },
  {
    id: '3',
    title: '快速响应',
    description: '真诚、快捷地跟进需求',
    icon: 'response'
  }
]