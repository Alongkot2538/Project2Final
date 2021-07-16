import { lazy } from 'react'
const Login = lazy(() => import('../views/admin/auth/Login.view'))
const Dashboard = lazy(() => import('../views/admin/dashboard/Dashboard.view'))
const Users = lazy(() => import('../views/admin/users/Users.view'))
const Shops = lazy(() => import('../views/admin/shops/Shops.view'))
const Vouchers = lazy(() => import('../views/admin/vouchers/Vouchers.view'))
export const generalRouter = {
	home: '/',
	// example: '/example',
	login: '/login',
	dashboard: '/dashboard',
	users: '/users',
	shops: '/shops',
	vouchers: '/vouchers',
}

export default {
	General: [
	
		{
			path: generalRouter.login,
			private: false,
			component: Login
		},
		
		{
			path: generalRouter.home,
			private: false,
			component: Dashboard
		},
		{
			path: generalRouter.users,
			private: false,
			component: Users
		},
		{
			path: generalRouter.shops,
			private: false,
			component: Shops
		},
		
		{
			path: generalRouter.vouchers,
			private: false,
			component: Vouchers
		},
		
	]
}
