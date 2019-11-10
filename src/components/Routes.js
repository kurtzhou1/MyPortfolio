import { Home, Portfolio, Contact, Banner, Fztable, Calendar } from './RouterPage';

const routes = [
    {
        path: '/home',
        component: Home,
        exact: true,
        breadcrumbName: 'Home'
    },
    {
        path: '/home/contact',
        component: Contact,
        breadcrumbName: 'Contact Us'
    },
    {
        path: '/home/portfolio',
        component: Portfolio,
        breadcrumbName: 'Portfolio',
        routes: [
            {
                path: '/home/portfolio/banner',
                component: Banner,
                breadcrumbName: 'Banner'
            },
            {
                path: '/home/portfolio/fztable',
                component: Fztable,
                breadcrumbName: 'Fztable'
            },
            {
                path: '/home/portfolio/calendar',
                component: Calendar,
                breadcrumbName: 'Calendar'
            }
        ]
    },
]

export default routes;