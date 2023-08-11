<template>
    <div class="docker">
        <div class="docker_item docker_item--active">
            <div class="iconfont">&#xe67d;</div>
            <div class="docker_title">首页</div>
        </div>
        <div class="docker_item ">
            <div class="iconfont">&#xe639;</div>
            <div class="docker_title">购物车</div>
        </div>
        <div class="docker_item ">
            <div class="iconfont">&#xe62c;</div>
            <div class="docker_title">订单</div>
        </div>
        <div class="docker_item ">
            <div class="iconfont">&#xe633;</div>
            <div class="docker_title">我的</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.docker {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    padding: 0 .18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .6rem;
    border-top: .01rem solid #f1f1f1;
    color: #333;

    &_item {
        flex: 1;
        text-align: center;

        .iconfont {
            margin: .07rem 0 .02rem 0;
            font-size: .18rem;

        }

        &--active {
            color: #1fa4fc
        }
    }

    &_title {
        font-size: .2rem;
        transform: scale(.5, .5);
        transform-origin: center top;

    }
}
</style>