<script>
export default {
    props: ["title", "text"],
    mounted() {
        setTimeout(() => {
            this.callout()
        }, 2000)
    },
    methods: {
        callout() {
            this.$emit("push")
        },


    }
}
</script>


<template>
    <div class="bg-gray-400/80 w-screen h-screen fixed top-0 left-0 flex justify-center items-center popanime"
        @click="callout">
        <div class="bg-white text-center p-10 rounded-xl" @click.stop>
            <h1 class="pb-5 text-xl">{{ title }}</h1>
            <p class="pb-5">{{ text }}</p>
            <button type="button" @click="callout" class="color2 btn">確 定</button>
        </div>
    </div>
</template>


<style scoped></style>