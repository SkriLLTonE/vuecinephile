<template>
    <div>

    </div>
</template>

<script setup>
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Navigation } from 'swiper'
// import 'swiper/scss'
// import 'swiper/scss/navigation'
import { usePopular } from '@/stores/popular'
import { onMounted } from 'vue';



const props = defineProps(['type'])
const popular = usePopular()



onMounted(() => {
    popular.getPopular({ type: props.type })
})

</script>

<style lang="scss" scoped></style>