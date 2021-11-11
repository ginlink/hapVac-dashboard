export interface IRoute {
  key: string
  title: string
  icon?: string
  component?: string
  children?: IRoute[]
}

export const Routes: IRoute[] = [
  {
    icon: 'dashboard',
    title: '工作台',
    key: '/app/dashboard/index',
    component: 'Dashboard',
  },
  {
    key: '/app/home',
    icon: 'dashboard',
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
    icon: 'dashboard',
    title: 'About',
    component: 'About',
  },
]
