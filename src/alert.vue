<template>
    <div>
        <!-- appear > affiche à l'apparition -->
        <!-- <transition name="fade" appear> -->
            <!-- pas d'anim css : :css="false" -->
            <!-- ensuite on précise les anim que l'on veut, ici la methods enter -->
        <!-- <transition :css="false" @enter="enter" @leave="leave"> -->
        <transition name="bounce" appear  mode="out-in">
            <!-- ajouter KEY permet au systeme de transition de faire une différence -->
            <!-- mode permet d'annoncer l'ordre de la transition -->
            <div class="ui message success" v-if="visible" key="visible">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, cumque laudantium mollitia ipsam sint, est laboriosam expedita magnam tenetur aliquid unde, vero delectus totam laborum modi. Amet rem inventore temporibus!
            </div>
            <div class="ui message success" v-else key="invisible" >
                Beatae, cumque laudantium mollitia ipsam sint, est laboriosam expedita magnam tenetur aliquid unde, vero delectus totam laborum modi. Amet rem inventore temporibus!
            </div>
        </transition>
        <button @click="toggle">Toggle</button>
            <!-- on force en lui demandant de créer des ul avec tag -->
            <transition-group name="bounce" tag="ul"> 
                <!-- ! il est imporant que chaque item ai une clé particulière -->
                <li v-for="item in items" :key="item">
                    {{ item }}
                </li>
             </transition-group>
        </ul>
        <button class="ui button" @click="add"> Ajouter </button>
        <button class="ui button error" @click="shuffle"> shuffle </button>

    </div>
</template>

<script>

    /* Les mixins offrent une manière flexible de créer des fonctionnalités réutilisables pour les 
        composants de Vue.  Quand un composant utilise un mixin, toutes les options du mixin seront 
                            “fusionnées” avec les options du composant.*/

/* let slides = {
    methods:{
        // prends en param l'élément et appelera la fonction done quand ca sera fini 
        enter(el,done){
            $(el).hide().slideDown(500, done)
            // on appelle done pour faire savoir à vuejs que l'action est terminée 
        },
        leave(el,done){
            $(el).show().slideUp(500,done)
        }
    }
} */

export default {
    //mixins: [slides],
    data(){
        return{
            visible:true,
            items:[1,2,3,4,5,6]
        }
    },
    methods:{
        add(){
            this.items.push(Math.random())
        },
        shuffle(){
            console.log(this.item);
            this.items=[2,3,5,4,6,1]
        },
        toggle(){
            this.visible = !this.visible
        }
    }
}
</script>



<style>
/* l'état que l'on va avoir en début et fin d'animation */
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s, transform 1s;
}

.fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translateX(100px);
}

.bounce-move{
    transition: transform 5s; 
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
