<template>
    <!-- 定位 -->
    <van-notice-bar left-icon="volume-o" scrollable text="欢迎来到Richard工程实验室" />
    <div class="position">
        <span class="iconfont position_icon">&#xe61a;</span>

        我在怀来很想你
        <span class="iconfont position_notice">&#xe66d;</span>
    </div>
    <!-- 搜索及banner -->
    <div class="search">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="../../assets/swiper/swiper_1.jpg" alt="" />
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/swiper/swiper_2.png" alt="" />
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/swiper/swiper_3.png" alt="" />
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/swiper/swiper_4.png" alt="" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- nav -->
    <div class="icons">
        <div class="icons_item">
            <img src="../../assets/img_icon/banner_animal.png" alt="" class="icons_item_img iconfont">
            <span class=" position_notice"></span>
            <p class="icons_item_desc">宠物</p>
        </div>
        <div class="icons_item">
            <img src="../../assets/img_icon/banner_exercise.png" alt="" class="icons_item_img iconfont">
            <span class=" position_notice"></span>
            <p class="icons_item_desc">健身锻炼</p>
        </div>
        <div class="icons_item">
            <img src="../../assets/img_icon/banner_food.png" alt="" class="icons_item_img iconfont">
            <span class=" position_notice"></span>
            <p class="icons_item_desc">美食</p>
        </div>
        <div class="icons_item">
            <img src="../../assets/img_icon/banner_movies.png" alt="" class="icons_item_img iconfont">
            <span class=" position_notice"></span>
            <p class="icons_item_desc">猫眼电影</p>
        </div>
        <div class="icons_item">
            <img src="../../assets/img_icon/banner_waimai.png" alt="" class="icons_item_img iconfont">
            <span class=" position_notice"></span>
            <p class="icons_item_desc">外卖</p>
        </div>
    </div>
    <div class="gap"></div>
</template>

<script>
// import { ref } from "vue";
// import { useRouter } from "vue-router";
// import request from "@/utils/request";
// const useCategoryEffect = () => {
//     const categorys = ref([]);
//     const getCategorys = async () => {
//         const result = await request.get("/api/v1/categorys");
//         if (result.msg == "ok") {
//             categorys.value = result.data;
//         }
//     };
//     getCategorys();
//     const router = useRouter();
//     const handleClick = (item) => {
//         router.push({
//             name: "ShopList",
//             params: { id: item, cate_name: item.name },
//         });
//     };
//     return { categorys, handleClick };
// };
export default {
    name: "StaticPart",
    setup() {
        const iconsList = [
            { imgName: '超市', desc: '便利超市' },
            { imgName: '菜市场', desc: '菜市场' },
            { imgName: '水果店', desc: '水果店' },
            { imgName: '鲜花', desc: '鲜花绿植' },
            { imgName: '医药健康', desc: '医药健康' },
            { imgName: '家居', desc: '家居时尚' },
            { imgName: '蛋糕', desc: '烘培蛋糕' },
            { imgName: '签到', desc: '签到' },
            { imgName: '大牌免运', desc: '大牌免运' },
            { imgName: '红包', desc: '红包套餐' },
        ]
        return { iconsList }
        // const { categorys, handleClick } = useCategoryEffect();
        // return { categorys, handleClick };
    },
};
</script>
<style lang="scss" scoped>
@import "../../style/mixins.scss";
@import "../../style/variables.scss";

.position {
    position: relative;
    padding: 0.16rem 0.24rem 0.16rem 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    // @include ellipsis;

    .position_icon {
        position: relative;
        top: 0.01rem;
        font-size: 0.2rem;
    }

    .position_notice {
        position: absolute;
        right: 0;
        top: 0.17rem;
        font-size: 0.2rem;
    }

    color: $content-fontColor;
}

// 搜索及banner
.search {
    margin-bottom: 0.12rem;
    line-height: 0.32rem;
    background: $search-bgColor;
    color: $search-fontColor;
    border-radius: 0.06rem;

    .iconfont {
        display: inline-block;
        padding: 0 0.08rem 0 0.16rem;
        font-size: 0.16rem;
    }

    &_text {
        display: inline-block;
        font-size: 0.14rem;
    }
}

.banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;

    &_img {
        width: 100%;
    }
}

// 分类
.icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.16rem;

    &_item {
        width: 20%;

        &_img {
            display: block;
            width: 0.4rem;
            height: 0.4rem;
            margin: 0 auto;
        }

        &_desc {
            margin: 0.06rem 0 0.16rem 0;
            text-align: center;
            color: $content-fontColor;
        }
    }
}

.gap {
    margin: 0 -0.18rem;
    height: 0.05rem;
    background: $content-bgColor;
}


// 轮播组件样式
.my-swipe .van-swipe-item {

    font-size: 20px;
    line-height: 150px;
    text-align: center;
    border-radius: 10px;
}

.my-swipe img {
    border-radius: 15px;
    display: block;
    -webkit-user-select: none;
    max-width: 100%;
    margin: auto;
    background-color: hsl(0, 0%, 90%);
    transition: background-color 300ms;
}
</style>
