<template>
    <div class="counter">
        {{ count }}
        <div class="counter__button increment" @click="increment" :style="styleObjectIncrement"> + </div>
        <div class="counter__button decrement" @click="decrement" :style="styleObjectDecrement"> - </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            styleObjectIncrement: {
                background: 'green'
            },
            styleObjectDecrement: {
                background: 'red'
            },
            count : 0
        }
    }, 
    computed: {
        count(){
            return this.count
        }
    },
    methods: {
        increment(){
            this.styleObjectIncrement.background = 'orange'
            this.count++
        },
        decrement(){
            this.styleObjectDecrement.background = 'yellow'
            this.count--
        }
    }
}


</script>
<style>
.counter__button{
    border-radius: 5%;
    padding:3%;
    color:white;
    border: solid 1px #2eb12e;
    width: 4%;
    margin: auto;
    margin-top: 1%;
    margin-bottom: 1%;
}
</style>
