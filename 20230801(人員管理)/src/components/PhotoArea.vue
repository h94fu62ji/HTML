<script>
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
import { mapActions , mapState } from 'pinia'
import indexStore from '../store/Store'
export default {
    data() {
        return {
            photoLeft : 'left: 0px;',
            photoIndex : 0,
        }
    },
    computed: {
        // 參數 資料庫 要取用的 state / getters
        ...mapState(indexStore , []),
    },
    methods: {
        // 參數 資料庫 要取用的 actions(methods)
        ...mapActions(indexStore , []),
        changePhoto(){
            let left = this.photoIndex * -700
            this.photoLeft = 'left:'+left+'px;'
        },
        changeR(){
            this.photoIndex++
            if (this.photoIndex >= 3){
                this.photoIndex = 0
            }
            this.changePhoto()
        },
        changeL(){
            this.photoIndex--
            if (this.photoIndex < 0){
                this.photoIndex = 2
            }
            this.changePhoto()
        },
        change1(){
            this.photoIndex = 0
            this.changePhoto()
        },
        change2(){
            this.photoIndex = 1
            this.changePhoto()
        },
        change3(){
            this.photoIndex = 2
            this.changePhoto()
        },
        changeAuto(){
            this.changeR()
            setTimeout(() => {
                this.changeAuto()
            },7000)
        }
    },
    mounted() {
        this.changeAuto()
    },
}
</script>


<template>

<div class="all-area">
    <div class="area h-100 relative overflow-hidden">
        <div class="flex absolute top-0 duration-1000" :style="photoLeft">
            <div class="photo bg-slate-300"></div>
            <div class="photo bg-slate-400"></div>
            <div class="photo bg-slate-500"></div>
        </div>
        
        <button type="button" class="w-10 h-10 rounded-full colorb opacity-50 hover:opacity-100 absolute top-44 left-2" @click="changeL">&lt;</button>
        <button type="button" class="w-10 h-10 rounded-full colorb opacity-50 hover:opacity-100 absolute top-44 right-2" @click="changeR">&gt;</button>
        <div class="absolute bottom-2 left-72">
            <button type="button" class="w-10 h-2 rounded-full colorb opacity-50 hover:opacity-100" @click="change1"></button>
            <button type="button" class="w-10 h-2 rounded-full colorb opacity-50 hover:opacity-100 mx-2" @click="change2"></button>
            <button type="button" class="w-10 h-2 rounded-full colorb opacity-50 hover:opacity-100" @click="change3"></button>
        </div>
    </div>
</div>

</template>


<style scoped>
.photo{
    width: 700px;
    height: 400px;
    flex-shrink: 0;
}
.colorb{
    background-color: white;
    user-select: none;
}
</style>