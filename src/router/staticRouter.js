const Layout = () => import(/* webpackChunkName: "Layout" */ '@/components/layout/Layout')

const staticRoute = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        component: Layout,
        children: [
            {
                path: '',
                name:'index',
                component: () => import(/* webpackChunkName: "index" */ '@/views/index/index'),
                meta: {title: '首页'}
            },
        ]
    },
    {
        path: '/',
        component: Layout,
        children:[
            // /*前台*/
            // {
            //     path: 'Reception/index',   //会员登记
            //     name: 'Receptionindex',
            //     component: () => import(/* webpackChunkName: "index" */ '@/views/Index/index'),
            //     meta: {title: '会员登记',keepAlive: true},
            // },
            // {
            //     path: 'Reception/entrance', //入场查询
            //     name: 'Receptionentrance',
            //     component: () => import(/* webpackChunkName: "Receptionentrance" */ '@/views/Reception/Receptionentrance'),
            //     meta: {title: '入场查询',keepAlive: true},
            // },
        ],
    },


    // {
    //     name: 'Error',
    //     path: '/error',
    //     component: () => import( /* webpackChunkName: "error" */ '@/views/Error'),
    //     children: [
    //         {
    //             path: '401',
    //             component: () => import(/* webpackChunkName: "401" */ '@/views/Error/401'),
    //         },
    //         {
    //             path: '403',
    //             component: () => import(/* webpackChunkName: "403" */ '@/views/Error/403'),
    //         },
    //         {
    //             path: '404',
    //             component: () => import(/* webpackChunkName: "404" */ '@/views/Error/404'),
    //         },
    //         {
    //             path: '500',
    //             component: () => import(/* webpackChunkName: "500" */ '@/views/Error/500'),
    //         }
    //     ]
    // },
    // {
    //     name: 'redirect',  //空白页面
    //     path: '/redirect',
    //     component: () => import(/* webpackChunkName: "redirect" */ '@/components/redirect/redirect'),
    // },
    {
        name: 'login',  //登录
        path: '/login',
        // component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/Login')
        component: () => import(/* webpackChunkName: "Login" */ '@/views/Login/LoginSys'),
    },
    // {
    //     name: 'register', //注册
    //     path: '/register',
    //     component: () => import(/* webpackChunkName: "Register" */ '@/views/Login/Register'),
    // },
    // {
    //     name: '*',
    //     path: '*',
    //     redirect: '/error/404'
    // }

];

export default staticRoute
