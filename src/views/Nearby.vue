<template>
    <div class="nearby">
        <h3 class="nearby_title">附近店铺</h3>
        <div class="nearby_item" v-for="item in nearbyList" :key="item.id">
            <img :src="item.imgUrl" class="nearby_item_img">
            <div class="nearby_content">
                <div class="nearby_content_title">{{ item.title }}</div>
                <div class="nearby_content_tag">

                    <span class="nearby_content_tag" :key="innerIndex" v-for="(innerItem, innerIndex) in item.tags">{{
                        innerItem }}</span>

                </div>
                <p class="nearby_content_highlight" :key="innerDesc" v-for="(inneresc, innerDesc) in item.desc">{{ inneresc
                }}</p>
            </div>


        </div>


    </div>
</template>

<script>

export default {
    name: "Nearby",
    // components: { ShopInfo },
    setup() {
        // const { nearbyList, getNearbyList } = useNearbyListEffect();
        const nearbyList = [
            {
                id: 1,
                imgUrl: 'https://p0.meituan.net/waimaipoi/414cf16c35245cf38681b634285c682b124264.jpg',
                title: '重庆名优小吃',
                tags: ['4.4分', '月售1000+', '人均 ¥27'],
                desc: ['起送 ¥15', '配送 约¥4']
            },
            {
                id: 1,
                imgUrl: 'https://p0.meituan.net/waimaipoi/414cf16c35245cf38681b634285c682b124264.jpg',
                title: '重庆名优小吃',
                tags: ['4.4分', '月售1000+', '人均 ¥27'],
                desc: ['起送 ¥15', '配送 约¥4']
            },
            {
                id: 1,
                imgUrl: 'https://p0.meituan.net/waimaipoi/414cf16c35245cf38681b634285c682b124264.jpg',
                title: '重庆名优小吃',
                tags: ['4.4分', '月售1000+', '人均 ¥27'],
                desc: ['起送 ¥15', '配送 约¥4']
            },
            {
                id: 1,
                imgUrl: 'https://p0.meituan.net/waimaipoi/414cf16c35245cf38681b634285c682b124264.jpg',
                title: '重庆名优小吃',
                tags: ['4.4分', '月售1000+', '人均 ¥27'],
                desc: ['起送 ¥15', '配送 约¥4']
            },
            {
                id: 1,
                imgUrl: 'https://p0.meituan.net/waimaipoi/414cf16c35245cf38681b634285c682b124264.jpg',
                title: '重庆名优小吃',
                tags: ['4.4分', '月售1000+', '人均 ¥27'],
                desc: ['起送 ¥15', '配送 约¥4']
            },


        ]
        // getNearbyList();
        return { nearbyList };
    },
};
</script>
<style lang="scss" scoped>
@import "../style/variables.scss";

// 主体内容
.nearby {
    &_title {
        margin: 0.16rem 0 0.02rem 0;
        font-size: 0.18rem;
        font-weight: normal;
        color: $content-fontColor;
    }

    &_item {
        display: flex;
        padding-top: .12rem;


    }


    &_content {
        flex: 1;
        padding-bottom: .12rem;

        &_title {
            line-height: 0.22rem;
            font-size: 0.16rem;
            color: $content-fontColor;
            margin-left: 10px;
        }

        &_tags {
            margin-top: .08rem;
            line-height: 0.18rem;
            font-size: 0.13rem;
            
        }

        &_tag {
            
            margin-left: 5px;
            color: red;
        }

        &_highlight {
            margin: .18rem 0 0 15px;
            font-size: 0.13rem;
            color: #e93b3b;


        }

    }
}

.nearby_item img {
    display: block;
    width: 100px;
    height: 100px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 6px;
}

a {
    text-decoration: none;
}
</style>
