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
    setup() {
        const nearbyList = [
            {
                id: 1,
                imgUrl: 'http://webapi.hanmaweilai.com/public/static/images/near.png',
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
@import "@/style/variables.scss";
// 主体内容
.nearby {
  &_title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontColor;
  }
}
a {
  text-decoration: none;
}
</style>
