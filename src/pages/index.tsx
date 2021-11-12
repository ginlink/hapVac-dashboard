import Home from '@/pages/Home'
import About from './About'
import Dashboard from './Dashboard'
import Home1 from './Home1'
import User from './User'
import Vacation from './Vacation'

export default {
  Home,
  Dashboard,
  Home1,
  About,
  User,
  Vacation,
} as {
  [key: string]: () => JSX.Element
}
