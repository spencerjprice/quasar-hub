import MainLayout from 'layouts/MainLayout';
import Tickets from 'pages/Tickets';

const routes = [
	{
		path: '/',
		component: MainLayout,
		children: [{ path: '', name: 'Homepage', component: () => import('pages/Index.vue') }]
	},
	{
		path: '/account',
		component: MainLayout,
		children: [{ path: '', name: 'Account', component: () => import('pages/Account.vue') }]
	},
	{
		path: '/tickets',
		component: MainLayout,
		children: [{ path: '', name: 'Tickets', component: Tickets }]
	}
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
	routes.push({
		path: '*',
		component: MainLayout,
		children: [{ path: '', name: '404 Page Not Found', component: () => import('pages/Error404.vue') }]
	});
}

export default routes;
