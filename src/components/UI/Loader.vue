<template>
    <div class="loading">
        <div class="loading__spiner"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.loading {
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &__spiner {
        width: 50px;
        height: 50px;
        border: 2px solid transparent;
        border-top: 5px solid green;
        border-radius: 50%;
        animation: loading 1s infinite ease-in-out;
    }
}

@keyframes loading {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);

    }
}
</style>