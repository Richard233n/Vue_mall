<template>
    <div>
        <div class="wrapper">
            <div class="position">
                <span class="iconfont position_icon">&#xe61a;</span>
                Richard工程实验室
                <span class="iconfont position_notice">&#xe66d;</span>
            </div>
        </div>
    </div>


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
@import './style//variables.scss';
@import './style/mixins.scss';


// 头部样式
.wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    right: 0;
    padding: 0 .18rem;

}

.position {
    position: relative;
    padding: .16rem .24rem .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    .position_icon {
        position: relative;
        top: .01rem;
        font-size: .2rem;
    }

    .position_notice {
        position: absolute;
        right: 0;
        top: .17rem;
        font-size: .2rem;
    }

    color: $content-fontcolor;
    font-family: 'Fira Code';
}





// 底部栏样式
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