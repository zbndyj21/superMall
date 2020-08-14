<template>
    <div>
        <nav-bar @component-city="alertCity">
            <div slot="left">返回</div>
            <div slot="center">购物街</div>
        </nav-bar>

        <!-- 苏宁轮播图 -->
        <el-carousel class="banner">
            <el-carousel-item v-for="item in banner" :key="item.pid">
                <img :src="item.adSrc" />
            </el-carousel-item>
        </el-carousel>

        <div style="height:200px">test</div>
        <div style="height:200px">test</div>
        <!-- 监听ref距离顶部高度 -->
        <div ref="zb_fix_box" class="topBar" :class="fixed ? 'fix' : ''">
            <div @click="toDetail">点击我进入详情</div>
        </div>
        <div style="height:800px">test</div>
        <div style="height:200px">test</div>
        <div style="height:200px">test</div>
        <div style="height:200px">test</div>
    </div>
</template>
<script>
import NavBar from "../components/navbar/narbar";
import { getJSON } from "../assets/tools/tools";
import axios from "axios";

export default {
    name: "index",
    data() {
        return {
            banner: [],
            fixed: false,
            divTop: 0,
            windowTop: 0,
        };
    },
    components: {
        NavBar,
    },
    created() {
        const _this = this;
        async function init() {
            const apiUrl =
                "https://f.m.suning.com/api/newBanAndCpm.do?u=&c=159166742229561919&bSceneIds=&pid=300000013,200001060,300000014,300000016,400000036,300000015&clt=wap&sn_vm=6.2.1&sceneIds=19-67&cityId=021";
            const res = await getJSON(apiUrl);
            let { cpm } = res.data1.data;
            _this.banner = cpm;
        }
        init();
    },
    mounted() {
        //当滚动时 执行handleScroll
        window.addEventListener("scroll", this.handleScroll);
        // ref=zb_fix_box的div的高度
        this.divTop = this.$refs.zb_fix_box.getBoundingClientRect().top;
        // 滚动条的高度
        let scrollY = document.documentElement.scrollTop;
        // console.log(scrollY);

        // console.log("这是div的高度", this.divTop);

        //当页面加载时，滚动条自动滚到
        document.documentElement.scrollTop = localStorage.getItem(
            "gundongtiao"
        );

        // getJSON(
        //     "https://f.m.suning.com/api/newBanAndCpm.do?u=&c=159166742229561919&bSceneIds=&pid=300000013,200001060,300000014,300000016,400000036,300000015&clt=wap&sn_vm=6.2.1&sceneIds=19-67&cityId=021"
        // ).then((res) => console.log(res.data1.data.cpm));
        // async function init() {
        //     const apiUrl = "http://123.207.32.32:8000/home/multidata";
        //     const res = await axios(apiUrl);
        //     let { banner, recommend } = res.data.data;
        //     console.log(banner);
        //     console.log(recommend);
        // }
    },
    methods: {
        handleScroll() {
            const _this = this;

            // 这个存在bug，Chrome中会是0
            // let scrollY = document.documentElement.scrollTop;
            // window.pageYOffset,和上面个几乎一样
            console.log("divTop===", _this.divTop);
            console.log("滚动高度1", window.pageYOffset);
            // console.log("滚动高度2", scrollY);
            _this.windowTop = window.pageYOffset;

            if (scrollY >= _this.divTop) {
                // do something...
                _this.fixed = true;
            } else {
                // do something...
                _this.fixed = false;
            }
        },
        toDetail() {
            localStorage.setItem("gundongtiao", this.windowTop);
            this.$router.push("/detail");
        },
        alertCity(city) {
            alert(city);
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