<template>
    <div class="pos">
        <el-row>
            <el-col :span="10" class="order">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table>
                            <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                            <el-table-column prop="count" label="数量"></el-table-column>
                            <el-table-column prop="price" label="金额"></el-table-column>
                            <el-table-column label="操作"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">挂单</el-tab-pane>
                    <el-tab-pane label="外卖">外卖</el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="7">我是产品栏</el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "pos",
    mounted() {
        console.log(">>>mounted");
    },
};
</script>

<style scoped>
.pos {
    height: calc(100%);
    background: lightslategrey;
}
.order {
    display: block;
    background: darkgrey;
    border-right: 1px solid teal;
    height: calc(100%);
}
</style>