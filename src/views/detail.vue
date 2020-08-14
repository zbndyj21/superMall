<template>
    <div>
        <nav-bar>
            <div slot="left">返回</div>
            <div slot="center">购物街</div>
            <div slot="right">
                <div class="search"></div>
            </div>
        </nav-bar>
        <div>详情页------测试 === ==></div>

        <br />
        <div @click="back">点击返回列表页</div>
    </div>
</template>
<script>
import NavBar from "../components/navbar/narbar";
export default {
    name: "index",
    data() {
        return {};
    },
    components: {
        NavBar,
    },
    created() {},
    mounted() {},
    methods: {
        back() {
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.search {
    margin: 10px 0 0 20px;
    width: 24px;
    height: 24px;
    background: url(https://hhyvs.sogoucdn.com/shop/wap/images/sprite_vendor@2x.png);
    background-position: 0 -133px;
    background-size: 201px 197px;
}
.banner {
    width: 100%;
    height: 200px;
}
.banner img {
    width: 100%;
    height: 200px;
}
.topBar {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: darkslateblue;
}
.fix {
    position: fixed;
    top: 0;
    left: 0;
}
</style>