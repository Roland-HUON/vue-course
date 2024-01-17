<script>
import CartePerso from '../components/CardPerso.vue'
import FormPerso from '../components/FormPerso.vue'
import { usePersonnageStore} from "../stores/personnage.js"

export default{
  name : 'PersonnagesView',
  setup(){
    const personnageStore = usePersonnageStore()
    return{
      personnageStore,
    }
  },
  components : {
    CartePerso,
    FormPerso
  },
  data(){
    return{

    }
  },
  computed:{
    personnages(){
      return this.personnageStore.personnages
    }
  }
}
</script>
<template>
  <div class="personnages">
    <h1>This is a personnages page</h1>
    <FormPerso />
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
