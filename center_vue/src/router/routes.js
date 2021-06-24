export default [
  //Fallback route
  {
    path: '/',
    redirect: {
      path: '/homepage',
    },
  },

  {
    path: '/homepage',
    name: 'homepage',
    meta: { layout: 'public_layout' },
    component: () => import('@/views/publicComponents/homepage/home.vue'),
  },

  {
    path: '/apartment/:id',
    name: 'apartment',
    meta: { layout: 'public_layout' },
    component: () => import('@/views/publicComponents/homepage/apartment.vue'),
  },

  {
    path: '/building/:id',
    name: 'building',
    meta: { layout: 'public_layout' },
    component: () => import('@/views/publicComponents/homepage/building.vue'),
  },

  {
    path: '*',
    name: 'error',
    meta: { layout: 'public_layout', requiresAuth: false },
    component: () => import('@/views/publicComponents/notfound/index.vue'),
  },

  {
    path: '/admin',
    name: 'admin',
    meta: { layout: 'admin_layout' },
  },

  {
    path: '/LogIn',
    name: 'login',
    meta: { layout: 'autorize_layout', requiresAuth: false },
    component: () => import('@/layouts/authorizationLayout/Login.vue'),
  },

  {
    path: '/SignUp',
    name: 'SignUp',
    meta: { layout: 'autorize_layout', requiresAuth: false },
    component: () => import('@/layouts/authorizationLayout/Signup.vue'),
  },
  
  
];
