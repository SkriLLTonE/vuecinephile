<template>
    <section class="main__video" v-if="content">
        <router-link :to="`${props.type}/`" class="main__video-title">
            <span>{{ props.type == 'movie' ? 'Фильмы' : 'Сериалы' }}</span>
            <img src="@/assets/images/arrow.png" alt="">
        </router-link>
        <Swiper :modules="modules" :space-between="25" :navigation="true" :breakpoints="swiperOptions.breakpoints">
            <Swiper-slide class="main__video-item" v-for="(item, idx) in content" :key="item.id">
                <img v-lazy="imgUrlFull + item.poster_path" alt="" class="main__video-item-img">
                <router-link :to="`${props.type}/`" class="main__video-item-link" />
                <h2 class="main__video-item-title">{{ item.title || item.name }}</h2>
            </Swiper-slide>
            <Swiper-slide>
                <router-link :to="`${props.type}/`" class="main__video-item">
                    <span>{{ props.type == 'movie' ? 'Все Фильмы' : 'Все Сериалы' }}</span>
                </router-link>
            </Swiper-slide>
        </Swiper>
        <InfoBlock :current="current" :type="type" @close="close" />
    </section>
</template>

<script setup>
import InfoBlock from '@/components/InfoBlock/InfoBlock.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import { usePopular } from '@/stores/popular'
import { onMounted, ref, computed } from 'vue';
import { imgUrl, imgUrlFull } from "@/static.js";

const props = defineProps(['type'])
const popular = usePopular()

let modules = ref([Navigation])
let swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 5,
        },
    }
})

const content = computed(() => props.type == 'movie' ? popular.popularMovies : popular.popularTvs)

onMounted(() => {
    popular.getPopular({ type: props.type })
})

let current = ref(null)
let inf = ref(null)

const close = () => {
    console.log(current.value);
}

</script>

<style lang="scss" scoped></style>