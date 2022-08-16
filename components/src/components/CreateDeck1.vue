<template>
  <div>
      <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
              <p>Create a deck</p>
              <br>
              <p>Enter front and back details of deck and deckname. Click on Add card to add further cards in deck.</p>
              <form class="col g-3" id="deck-form">
                  <div class="d-flex flex-row">
                    <label class="label is-large" for="deckname">Deck Name:</label>
                    <div class="control">
                        <input type="text" class="input is-large" id="deckname" v-model="deckName">
                    </div>
                    </div>
                    <br>
                <div class="d-flex flex-row">
                    <label class="label is-large" for="front">Front:</label>
                    <div class="control">
                        <input type="text" class="input is-large" id="front" v-model="front">
                    </div>
                </div> 
                <br>
                <div class="d-flex flex-row">
                    <label class="label is-large" for="back">Back:</label>
                    <div class="control">
                        <input type="text" class="input is-large" id="back" v-model="back">
                    </div>
                </div>
                <br>
                <div class="d-flex flex-column justify-content-around">
                 <div class="control">
                    <button class="btn btn-outline-primary mb-3" v-on:click="addDeck(front, back)">Add card</button>
                    
                </div>
                <button type="submit" class="btn btn-outline-primary mb-3" v-on:click="submit">Submit the deck</button>
                </div>
              </form>              
            </div>
        </header>

</div>
</template>
<script>
import axios from 'axios';

export default {
data: function() {
  return {
    userId: sessionStorage.getItem("userid"),
    deckName: "",
    deck: {},
    front: "",
    back: ""
  };
  },
  methods: {
      addDeck: function(a,b){
          this.deck[a] = b
          this.front = ""
          this.back = ""
      },
    submit: function() {
    axios.post("http://127.0.0.1:5000/new/" + this.userId+"/" + this.deckName, this.deck)
    .then(response => {
    if( response.data.message == "success") {
        sessionStorage.setItem('decks', JSON.stringify(response.data.decks))
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
  }
}
</script>
<style>
    @import './static/css/styles.css';
    @import './static/css/styles1.css';
</style>