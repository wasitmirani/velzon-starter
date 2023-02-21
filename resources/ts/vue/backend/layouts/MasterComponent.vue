<template>

<!-- Header -->
    <Header></Header>
    <!-- End Header -->
    <!--Left Sidebar  Start  -->
    <sidebar-menu></sidebar-menu>
    <!-- Left Sidebar End -->
    <!-- Vertical Overlay-->
    <div class="vertical-overlay"></div>
    <!-- Start main Content here -->
    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">
                <router-view></router-view>
            </div>
            <!-- container-fluid -->
        </div>
        <!-- End Main Page-content -->
        <!-- Footer -->
        <footer></footer>
        <!--End Footer  -->
    </div>
</template>
<script>
import Footer from "./FooterComponent.vue";
import Header from "./HeaderComponent.vue";
import SidebarMenu from "./SideBarMenuComponent.vue";
export default {
    components: { Footer, Header, SidebarMenu },

}
</script>
<style lang="">

</style>
