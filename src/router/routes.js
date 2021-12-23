
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/fortnite-shop', component: () => import('pages/Shop.vue') },
      { path: '/info-item-shop', component: () => import('pages/InfoItemShop.vue') },
      { path: '/cosmetic/:id', component: () => import('pages/Cosmetic.vue') },
      { path: '/fortnite-news', component: () => import('pages/FortniteNews.vue') },
      { path: '/fortnite-map', component: () => import('pages/FortniteMap.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
