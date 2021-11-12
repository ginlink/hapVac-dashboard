export interface IRoute {
  key: string
  title: string
  icon?: string
  component?: string
  children?: IRoute[]
}

// 路由配置
export const Routes: IRoute[] = [
  {
    key: '/app/dashboard',
    title: '工作台',
    icon: 'DashboardOutlined',
    component: 'Dashboard',
  },
  {
    key: '/app/home',
    icon: 'UserOutlined',
    title: 'Home',
    children: [
      {
        key: '/app/home/child1',
        title: 'Home子级1',
        component: 'Home1',
      },
      {
        key: '/app/home/child2',
        title: 'Home子级2',
        component: 'Home2',
      },
    ],
  },
  {
    key: '/app/about',
    title: 'About',
    icon: 'SettingOutlined',
    component: 'About',
  },

  {
    key: '/app/user',
    icon: 'UserOutlined',
    title: '用户管理',
    component: 'User',
  },
]
