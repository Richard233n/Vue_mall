<template>
    <!-- tabar -->
    <div class="docker">
        <div class="docker_item" :class="{ 'docker_item-active': index === currentIndex }"
            v-for="(item, index) in dockerList" :key="item.icon">
            <router-link :to="item.to">
                <div class="iconfont" v-html="item.icon"></div>
                <div class="docker_title">{{ item.text }}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dcker",
    props: ["currentIndex"],
    setup() {
        const dockerList = [
            { icon: "&#xe67d;", text: "首页", to: { name: "Home" } },
            { icon: "&#xe639;", text: "购物车", to: { name: "" } },
            { icon: "&#xe62c;", text: "订单", to: { name: "" } },
            { icon: "&#xe633;", text: "我的", to: { name: "" } },
        ];
        return { dockerList };
    },
};
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";

.docker {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    padding: 0 0.18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.49rem;
    border-top: 0.01rem solid #f1f1f1;
    color: $content-fontColor;

    &_item {
        flex: 1;
        text-align: center;

        a {
            color: $content-fontColor;
            text-decoration: none;
        }

        .iconfont {
            margin: 0.07rem 0 0.02rem 0;
            font-size: 0.18rem;
        }

        &-active {
            a {
                color: #7543e0;
            }
        }
    }

    &_title {
        font-size: 0.2rem;
        transform: scale(0.5);
        transform-origin: center top;
    }
}
</style>
