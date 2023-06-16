<template>
    <Transition name="upcoming" mode="out-in">
        <div class="main__upcoming" v-if="getUpcomingArr">
            <UpcomingItem v-for="(movie, idx) in getUpcomingArr" :key="movie.id" :movie="movie" :idx="idx"
                @slideNext="slideNext" :slideView="slideView"
                :next="getUpcomingArr[idx + 1 == getUpcomingArr.length ? 0 : idx + 1]" />
        </div>
        <Loader v-else />
    </Transition>
</template>

<script setup>

import UpcomingItem from '@/components/Upcoming/UpcomingItem.vue';
import { useUpcoming } from '@/stores/upcoming';
import { onMounted, ref, computed } from "vue";
let upcomingStore = useUpcoming()
const getUpcomingArr = computed(() => upcomingStore.upcoming)

let slideView = ref(0)
let timeout = ref(null)

const slide = () => {
    if (getUpcomingArr.value.length - 1 == slideView.value) slideView.value = 0
    else slideView.value++
    timeout = setTimeout(slide, 5000)
}
const slideNext = () => {
    clearTimeout(timeout)
    slide()
}

onMounted(() => {
    upcomingStore.getUpcoming()
    timeout = setTimeout(slide, 5000)
})

</script>

