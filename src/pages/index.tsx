import Home from '@/pages/Home'
import About from './About'
import Dashboard from './Dashboard'
import Home1 from './Home1'

export default {
  Home,
  Dashboard,
  Home1,
  About,
} as {
  [key: string]: () => JSX.Element
}
