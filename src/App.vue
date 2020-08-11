<template>
    <div id="app">
        <sideBar></sideBar>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import sideBar from "../src/components/sideBar";
export default {
    components: {
        sideBar,
    },
};
</script>