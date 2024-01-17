<script>
import CartePerso from '../components/CardPerso.vue'
export default{
  name : 'PersonnagesView',
  components : {
    CartePerso,
  },
  data(){
    return{
      formPerso : {
        pseudo :'',
        age: 0
      },
      personnages : [
        {
          pseudo:'Grégory',
          age: 15
        }, 
        {
          pseudo:'Paul',
          age:23
        },
        {
          pseudo:'Norman',
          age:47
        }
      ]
    }
  },
  methods:{
    ajoutPerso(){
      this.personnages.push(this.formPerso)
      this.formPerso = {
        pseudo:'',
        age:0
      }
    }
  }
}
</script>
<template>
  <div class="personnages">
    <h1>This is a personnages page</h1>

    <form @submit.prevent="ajoutPerso()">
      <input type="text" placeholder="pseudo" v-model="formPerso.pseudo">
      <input type="number" placeholder="age" v-model="formPerso.age">
      <p class="error" v-if="formPerso.pseudo.length <3">Le pseudo doit faire au moins 3 caractères.</p>
      <button type="submit">Ajouter</button>
    </form>
    <div class="cartes">
      <div v-for="personnage in personnages" :key="personnage.pseudo">
        <CartePerso :personnage="personnage" />
      </div>
    </div>
  </div>
</template>

<style>
.cartes{
  margin: 50px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.error{
  color: red;
}
</style>
