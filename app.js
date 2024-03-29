new Vue({
    el: '#app',
   data: {
    isPlayerWinner: false,
    gameEnd: false,
    playerDamage: 0,
    monsterDamage: 0,
    logs: [],
    monsterLife: 100,
    playerLife: 100,
   },
   methods: {
        attack(){
            playerDamageDealt = this.palyerAttack()
            monsterDamageDealt = this.monsterAttack()

            this.damageDealt(playerDamageDealt, monsterDamageDealt);

            this.logs.unshift({player: `O player atacou com uma força de ${playerDamageDealt}`, monster:`O monstro atacou com uma força de ${monsterDamageDealt}`});
        },
        specialAttack(){
            
            playerDamageDealt = this.playerSpecial()
            monsterDamageDealt = this.monsterAttack()

            this.damageDealt(playerDamageDealt, monsterDamageDealt);

            this.logs.unshift({player: `O player atacou com uma força de ${playerDamageDealt}`, monster:`O monstro atacou com uma força de ${monsterDamageDealt}`});
        },
        monsterAttack(){
            return this.monsterDamage = Math.round(Math.random()* (12 - 9) + 9);
        },
        palyerAttack(){
            return this.playerDamage = Math.round(Math.random()* (9 - 7) + 7);
        },
        playerSpecial(){
            return this.playerDamage = Math.round(Math.random()* (13 - 10) + 10);
        },
        damageDealt(playerDamage, monsterDamage){
            this.monsterDamageReceived(playerDamage)
            
            this.playerDamageReceived(monsterDamage)
        },
        monsterDamageReceived(damageReceived){
            monsterActualLife = this.monsterLife -= damageReceived
            if(monsterActualLife <= 0){
                this.monsterLife = 0;
                this.isPlayerWinner = true;
                this.gameEnd = true
            }
        },
        playerDamageReceived(damageReceived){
            playerActualLife = this.playerLife -= damageReceived
            if(playerActualLife <= 0){
               this.playerLife = 0;
               this.isPlayerWinner = false;
               this.gameEnd = true
           }
        },
        heal(){
            this.monsterDamage = Math.round(Math.random()* (8 - 6) + 8);
            this.playerLife += Math.round(Math.random()* (12 - 9) + 9);
            this.logs.unshift({player: `O player curou-se em ${this.playerDamage} de vida`, monster:`O monstro atacou com uma força de ${this.monsterDamage}`});
        },
        resetGame(){
            this.gameEnd = false;
            this.logs = []
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        giveUp(){
            this.gameEnd = true;
            this.isPlayerWinner = false;
        },
        monsterLifeBarCalc(){
            return 100 - [100*(1-this.monsterLife/100)]
        },
        playerLifeBarCalc(){
            return 100 - [100*(1-this.playerLife/100)]
        },

    },
   computed: {
    gameLog(){
        return this.logs
    },
    monsterLifeBar(){
        return {
            width: `${this.monsterLifeBarCalc()}% `
        }
    },
    playerLifeBar(){
        return {
            width: `${this.playerLifeBarCalc()}% `
        }
    },
    playerLifeColor(){
        if(this.playerLifeBarCalc() < 20){
            return {
                danger: true
            }
        }
        return ''
    },
    monsterLifeColor(){
        if(this.monsterLifeBarCalc() < 20){
            return {
                danger: true
            }
        }
        return ''
    }
   }
})