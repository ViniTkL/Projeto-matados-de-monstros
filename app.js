new Vue({
    el: '#app',
   data: {
    isPlayerWinner: false,
    gameEnd: false,
    playerDamage: 0,
    monsterDamage: 0,
    logs: [],
   },
   methods: {
        attack(){
            this.playerDamage = Math.round(Math.random()* (9 - 7) + 7);
            console.log("Player",this.playerDamage);
            this.monsterDamage = Math.round(Math.random()* (12 - 9) + 9);
            console.log("Monstro",this.monsterDamage);
            this.logs.push({player: `O player atacou com uma força de ${this.playerDamage}`, monster:`O monstro atacou com uma força de ${this.monsterDamage}`})
        },
        specialAttack(){

        },
        heal(){

        }
   },
   computed: {
    gameLog(){
        return
    }
   }
})