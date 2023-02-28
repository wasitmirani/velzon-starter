import {createRouter,createWebHistory,RouteRecordRaw,} from "vue-router";
import Dashboard from "./vue/backend/pages/dashboard/DashboardComponent.vue";


// let getComponent= async (file_name:any)=>{
//     const path='./vue/backend/pages/'+file_name+'Component.vue';
//     const route=await  import(path);
//     return route;
//   }
const prefix="/portal";
const setRoute= async (url:string,name:string,path:string)=>{
    return {
      path: prefix+url,
      name: name,
      component:Dashboard,

    }
  }

  const routes =[
    {
        path: "/portal/dashboard",
        redirect: { name: 'dashboard' }
    },
    {
        path: "/",
        redirect: { name: 'dashboard' }
    },
    {
        path: "/portal/dashboard",
        name:"dashboard",
        component:Dashboard,

    },
    // setRoute('/:catchAll(.*)','404','error/404'),
    // setRoute('/dashboard','dashboard','dashboard/Dashboard'),

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
    },
});

router.beforeEach((to, from, next) => {

    next()

  });
export default router;
