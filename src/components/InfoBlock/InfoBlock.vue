<template>
    <div class="main__info">
        <img src="@/assets/images/close.svg" class="main__info-close" @click="$emit('close')" alt="">
        <div class="main__info-block" v-if="current">
            <img :src="imgUrlFull + current.backdrop_path" class="main__info-img" alt="">
            <div class="main__info-content">
                <div class="main__info-content-block">
                    <h2 class="main__info-content-title">{{ current.title || current.name}}</h2>
                    <p class="main__info-content-text">
                        {{ current.overview }}
                    </p>
                    <p class="main__info-content-date">
                        <span>
                        {{ 
                            new Date (current.first_air_date).getFullYear() ||
                            new Date (current.release_date).getFullYear()
                        }}, &nbsp;</span>
                        <span>боевик, приключения, фэнтези</span>
                    </p>
                    <BtnMore />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { imgUrlFull } from '@/static'

const props = defineProps(['current', 'type'])
</script>
