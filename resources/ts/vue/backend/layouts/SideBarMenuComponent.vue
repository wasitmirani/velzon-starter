<template >
    <div class="app-menu navbar-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
            <!-- Dark Logo-->
            <router-link to="/"  class="logo logo-dark">
                <span class="logo-sm">
                    <img src="/assets/images/logo-sm.png" alt="" height="22">
                </span>
                <span class="logo-lg">
                    <img src="/assets/images/logo-dark.png" alt="" height="17">
                </span>
            </router-link >
            <!-- Light Logo-->
            <router-link to="/" class="logo logo-light">
                <span class="logo-sm">
                    <img src="/assets/images/logo-sm.png" alt="" height="22">
                </span>
                <span class="logo-lg">
                    <img src="assets/images/logo-light.png" alt="" height="17">
                </span>
            </router-link>
            <button type="button" class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
                id="vertical-hover">
                <i class="ri-record-circle-line"></i>
            </button>
        </div>

        <div id="scrollbar">
            <div class="container-fluid">

                <div id="two-column-menu">
                </div>
                <ul class="navbar-nav" id="navbar-nav">
                    <li v-for="item in sidebar_menu" :key="item.id" :class="getClass(item)">
                        <!-- v-if="item?.heading && isAllowed(item?.heading_can)" -->
                        <span :data-key="`t-${item.heading}`" v-if="item?.heading && isAllowed(item?.heading_can)">{{
                            item.heading }}</span>

                        <router-link class="nav-link" v-if="item.type == 'single_link' && isAllowed(item.can)"
                            :to="item.route">
                            <i :class="`mdi ${item.icon} `"></i>
                            <span :data-key="`t-${item.title}`">{{ item.title }}</span>
                        </router-link>
                        <a class="nav-link menu-link" v-if="item.type == 'multi' && isAllowed(item.can)"
                            :href="`#sidebar${item.can}`" data-bs-toggle="collapse" role="button" aria-expanded="false"
                            :aria-controls="`sidebar${item.can}`">
                            <!-- <i class="mdi mdi-speedometer"></i> -->
                            <i :class="`mdi ${item.icon} `"></i>
                            <span :data-key="`t-${item.can}`">{{ item.title }}
                            </span>
                        </a>
                        <div class="collapse menu-dropdown" :id="`sidebar${item.can}`" v-if="item?.sub_menu">
                            <ul class="nav nav-sm flex-column">
                                <li class="nav-item" v-for="submenu in item.sub_menu" :key="submenu.id">
                                    <router-link class="nav-link" v-if="isAllowed(submenu?.can)" :to="submenu.route">
                                        <span class="menu-item text-truncate" :data-key="`t-${submenu.title}`">{{
                                            submenu.title }}</span></router-link>
                                </li>

                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- Sidebar -->
        </div>

        <div class="sidebar-background"></div>
    </div>
    <!-- Left Sidebar End -->
    <!-- Vertical Overlay-->
    <div class="vertical-overlay"></div>
</template>
<script>
import menu from "./menu";
export default {
    data() {
        return {
            sidebar_menu:menu,
            index: 0,
            loading: false,
        }
    },
    methods: {
        logout() {
            window.location.href = window.location.origin + "/logout";
        },
        isAllowed(value) {
            // if(permissions.includes(value))
            return true;
            // else
            // return true;
        },
        getClass(item) {
            if (item?.heading) {
                return 'menu-title'
            }
            if (item.type == 'single_link') {
                return 'nav-item'
            } else {
                return 'nav-item'
            }
        },
        getSideBarMenu() {
            this.loading = true;
            axios.get('/config/sidebar-menu').then((res) => {
                this.sidebar_menu = res.data?.sidebar_menu;
                this.loading = false;

            })
        }
    },
    mounted() {
        //    console.log("mounted",sidebarmenu);
        this.getSideBarMenu();

    },

}
</script>
<style lang="">

</style>
