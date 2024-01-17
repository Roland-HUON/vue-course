<script>
import { usePersonnageStore } from '@/stores/personnage'
import CardPerso from './CardPerso.vue'
    export default{
    name : 'FormPerso',
    setup(){
        const personnageStore = usePersonnageStore()
        return{
            personnageStore,
        }
    },
    components :{
    CardPerso,
    },
    data(){
      return{
        formPerso : {
          pseudo :'',
          age: 0
        },
      }
    },
    methods:{
      ajoutPerso(){
        this.personnageStore.ajoutPerso(this.formPerso)
        this.formPerso = {
          pseudo:'',
          age:0
        }
      }
    }
  }
</script>

<template>
    <h2>Preview : </h2>
    <CardPerso :personnage="formPerso"/>
    <form @submit.prevent="ajoutPerso()">
      <input type="text" placeholder="pseudo" v-model="formPerso.pseudo">
      <input type="number" placeholder="age" v-model="formPerso.age">
      <p class="error" v-if="formPerso.pseudo.length <3">Le pseudo doit faire au moins 3 caractères.</p>
      <button type="submit">Ajouter</button>
    </form>
</template>

<style scoped>
    form{
        background-color: #42b983;
        width: 50vw;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        border-radius: 10px;
    }
    input{
        padding: 10px;
        border-radius: 10px;
        border: none;
    }
    button{
        background-color: white;
        border: none;
        padding: 10px;
        border-radius: 10px;
    }
</style>