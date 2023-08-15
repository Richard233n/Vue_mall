<template>
    <!-- 头部组件开发 -->
    <van-notice-bar left-icon="volume-o" scrollable text="欢迎来到Richard工程实验室" />
    <div class="position">
        <span class="iconfont position_icon">&#xe61a;</span>

        我在怀来很想你
        <span class="iconfont position_notice">&#xe66d;</span>
    </div>

    <!-- 搜索 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
            <img src="../assets/swiper/swiper_1.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="../assets/swiper/swiper_2.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="../assets/swiper/swiper_3.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="../assets/swiper/swiper_4.png" alt="">
        </van-swipe-item>
    </van-swipe>

    <!-- nav -->
    <div class="icons">
        <div class="icons_item">
            <img src="../assets/img_icon/banner_animal.png" alt="" class="icons_item_img iconfont">
            <span class=" position_notice"></span>
            <p class="icons_item_desc">宠物</p>
        </div>
        <div class="icons_item">
            <img src="../assets/img_icon/banner_exercise.png" alt="" class="icons_item_img iconfont">
            <span class=" position_notice"></span>
            <p class="icons_item_desc">健身锻炼</p>
        </div>
        <div class="icons_item">
            <img src="../assets/img_icon/banner_food.png" alt="" class="icons_item_img iconfont">
            <span class=" position_notice"></span>
            <p class="icons_item_desc">美食</p>
        </div>
        <div class="icons_item">
            <img src="../assets/img_icon/banner_movies.png" alt="" class="icons_item_img iconfont">
            <span class=" position_notice"></span>
            <p class="icons_item_desc">猫眼电影</p>
        </div>
        <div class="icons_item">
            <img src="../assets/img_icon/banner_waimai.png" alt="" class="icons_item_img iconfont">
            <span class=" position_notice"></span>
            <p class="icons_item_desc">外卖</p>
        </div>
<div class="gap"></div>
    </div>
    
</template>

<script>
export default {
    name: 'StaticPart',
    data() {
        return {
            value: '',
        };
    },

}


</script>
<style lang="scss">
@import '../style/mixins.scss';
@import '../style/variables.scss';


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

    color: $content-fontColor;
    ;

}

// 搜索及banner
.search {


    .iconfont {
        display: inline-block;
        padding: 0 .08rem 0 .16rem;
        font-size: .16rem;
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

// nav

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
            margin: 0.06rem 0 .16rem 0;
            text-align: center;
            color: $content-fontColor;
            ;
        }
    }
}

.gap {
    margin: 0 -.18rem;
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