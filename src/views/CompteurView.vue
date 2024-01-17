<script>
export default{
    name: 'CompteurView',
    data(){
        return{
            compteur: 0
        }
    },
    methods:{
        increment(){
            this.compteur++
        }
    }
}
</script>

<template>
    <div>
        <span>J'ai cliqué {{ compteur }} fois.</span>
        <button @click="increment()">Clique</button>
    </div>
</template>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #2c3e50;
  width: 20%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

button{
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  color: white;
}
</style>
