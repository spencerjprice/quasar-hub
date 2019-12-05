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
	}
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
	routes.push({
		path: '*',
		component: () => import('layouts/MainLayout.vue'),
		children: [{ path: '', component: () => import('pages/Error404.vue') }]
	});
}

export default routes;
