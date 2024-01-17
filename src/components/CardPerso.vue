<script>
export default{
    name: 'CartePerso',
    props:[
        'personnage'
    ]
}
</script>
<template>
    <div>
        <h2>{{ personnage.pseudo }}</h2>
        <p>{{ personnage.age }} ans</p>
        <p v-if="personnage.age > 18 & personnage.age<=70"> La personne est majeur.</p>
        <p v-else-if="personnage.age > 70"> La personne est vieille.</p>
        <p v-else>La personne est mineur</p>
    </div>
</template>
<style scoped>
div{
    width: 200px;
    margin: 0 auto;
    height: 200px;
    background-color: #42b983;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>