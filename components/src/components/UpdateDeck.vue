<template>
    <body class="masthead bg-primary text-white text-center">
        <p></p>
            <div class="row">                  
                <div class="col-sm" v-for="(value, key) in this.decks" :key="key">
                    <div class="card" style="width: 18rem; background-color: black;">
                        <button type="button" class="close btn btn-outline-primary mb-3" aria-label="Close" style="background-color:black" v-on:click="removeCard(key)">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="card-body">
                            <h5 class="card-title" style="color: white;">Front: {{ key }}</h5>
                            <br>
                            <label class="label is-large" for="back">Back: </label>
                            <div class="control">
                                <input type="text" class="input is-large" id="back" v-model="decks[key]">
                            </div>
                            <!-- <h5 class="card-title" style="color: white;">Back: {{ key }}</h5> -->
                        </div>
                        <br>
                    </div>
                    <br>
                </div>
              </div>
                <div class="d-flex flex-row">
                    <label class="label is-large" for="front">Front:</label>
                    <div class="control">
                        <input type="text" class="input is-large" id="front" v-model="front">
                    </div>
                    <label class="label is-large" for="back">Back:</label>
                    <div class="control">
                        <input type="text" class="input is-large" id="back" v-model="back">
                    </div>
                </div>
                <br>
                <div class="d-flex flex-column justify-content-around">
                 <div class="control">
                    <button class="btn btn-outline-primary mb-3" v-on:click="addDeck(front, back)">Add card</button>
                    &nbsp;
                    <button type="submit" class="btn btn-outline-primary mb-3" v-on:click="submit">Submit the deck</button>
                    
                </div>
                
                </div>
        </body>
</template>
<script>
import axios from 'axios';
export default {
    data: function() {
    return {
        userId: sessionStorage.getItem("userid"),
        deckname: sessionStorage.getItem('currentDeckName'),
        decks: JSON.parse(sessionStorage.getItem('currentDeck')),
        deckid: sessionStorage.getItem("currentDeckid"),
        front:"",
        back:""
    }
  },
  methods: {
      addDeck: function(a,b){
          this.decks[a] = b
          this.front = ""
          this.back = ""
      },
      submit: function() {
        axios.put("http://127.0.0.1:5000/update/" + this.userId+"/" + this.deckid, this.decks)
        .then(response => {
        if( response.data.message == "success") {
            sessionStorage.setItem('currentDeck', JSON.stringify(response.data.deck))
            this.decks = response.data.deck
            sessionStorage.setItem('decks', JSON.stringify(response.data.decks))
            alert("Deck is updated!")
            this.$router.push('/dashboard');
        }
        else{
        alert("There is some problem in adding deck!")
        }
        })
        .catch(err =>{
        console.log(err);
        alert("There is some problem! Please try again later!")
        });
    },
    removeCard: function(key) {
        if(confirm("Do you want to remove this card from deck?\nNote: This action will not be able to revert.")){
        axios.put("http://127.0.0.1:5000/remove/" + this.userId+"/" + this.deckid + "/" + key)
        .then(response => {
        if( response.data.message == "success") {
            sessionStorage.setItem('currentDeck', JSON.stringify(response.data.currentdeck))
            this.decks = response.data.currentdeck
        }
        else{
        alert("There is some problem in removing card!")
        }
        })
        .catch(err =>{
        console.log(err);
        alert("There is some problem! Please try again later!")
        });
        }
        }
    }
}
</script>

<style>
    @import './static/css/styles1.css';
</style>