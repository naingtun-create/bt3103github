import PageContent from './components/PageContent.vue'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue'
import Dashboard from './components/Dashboard.vue'

export default [
  { path: '/', component: PageContent },
  { path: '/orders', component: Orders },
  { name:'modify', path: '/modify', component: Modify },
  { name:'dashboard', path: '/dashboard', component: Dashboard }
]