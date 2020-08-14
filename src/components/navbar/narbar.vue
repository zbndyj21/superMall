<template>
    <div class="navbox">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <div class="city" slot="city">
                <div
                    @click="cityExport(index)"
                    v-for="item, index in cityList"
                    :key="index"
                >{{ item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cityList: ["上海", "北京", "杭州"],
        };
    },
    methods: {
        cityExport(index) {
            console.log(this.cityList[index]);
            this.$emit("component-city", this.cityList[index]);
        },
    },
};
</script>

<style scoped>
.navbox {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
}
.left,
.right {
    width: 60px;
}
.center {
    flex: 1;
    text-align: center;
}

.city {
    position: absolute;
    right: 0;
    z-index: 2000;
    background: lightblue;
}
.city div {
    margin: 10px;
}
</style>