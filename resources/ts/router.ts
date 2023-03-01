import {createRouter,createWebHistory,RouteRecordRaw,} from "vue-router";
import Dashboard from "./vue/backend/pages/dashboard/DashboardComponent.vue";


const getComponent=  (file_name:string)=> {
    return   import(`./vue/backend/pages/${file_name}Component.vue`)
  }
const prefix="/portal";
const setRoute=  (url:string,name:string,path:string)=>{
    return {
      path: prefix+url,
      name: name,
      component: () =>  getComponent(path),

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
    setRoute('/:catchAll(.*)','404','error/404'),
    setRoute("/dashboard","dashboard","dashboard/Dashboard"),



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
