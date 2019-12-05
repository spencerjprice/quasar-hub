const routes = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [{ path: '', name: 'Homepage', component: () => import('pages/Index.vue') }]
	},
	{
		path: '/account',
		component: () => import('layouts/MainLayout.vue'),
		children: [{ path: '', name: 'Account', component: () => import('pages/Account.vue') }]
	},
	{
		path: '*',
		component: () => import('layouts/MainLayout.vue'),
		children: [{ path: '', name: '404 Page Not Found', component: () => import('pages/Error404.vue') }]
	}
];

export default routes;
