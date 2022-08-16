<template>
    <html lang="en">
      <body >
        <div class="maincontainer">
          <p style="color: white">Current Review Score: {{ score }}</p>
          <div class ="d-flex flex-row align-items-center justify-content-around">
            <li v-on:click="toggleCard(key)" v-for="(key, value) in this.decks" :key="key">
              <transition name="flip">
                <p v-bind:key="key.flipped" class="card-review">
                    {{ value }} <br> {{ key }}
                </p>
              </transition>
              <br><br>
              <div class="d-flex flex-row align-items-center justify-content-around">
                  <button class="btn btn-success" v-on:click="scoreAdder(5)" >Easy</button>
                  &nbsp;
                  <button class="btn btn-warning" v-on:click="scoreAdder(3)" >Medium</button>
                  &nbsp;
                  <button class="btn btn-danger" v-on:click="scoreAdder(1)" >Hard</button>
              </div>
            </li>
          </div>
          <button type= "submit" class="btn btn-outline-primary mb-3" v-on:click="submitDeck()">Submit Deck</button>
        </div>
      </body>
    </html>
</template>
<script>
import axios from 'axios';
export default {
  data: function() {
    return {
    deckname: sessionStorage.getItem('currentDeckName'),
    decks: JSON.parse(sessionStorage.getItem('currentDeck')),
    deckid: sessionStorage.getItem("currentDeckid"),
    ifFlipped:{},
    score: 0
    }
  },
  mounted: function(){
    
  },
  methods:{
    scoreAdder: function(n) {
      this.score += n
    },
    toggleCard: function(card) {
      this.ifFlipped[card] = !this.ifFlipped[card];
    },
    submitDeck: function() {
      console.log("score", this.score)
     axios.post("http://127.0.0.1:5000/review", {"User_id": sessionStorage.getItem('userid'), "deckid": this.deckid, "score": this.score})
    .then(response => {
      console.log(response.data)
      sessionStorage.setItem('decks', JSON.stringify(response.data.decks))
      if (window.history.length > 2) {
      this.$router.back()
      } else {
        this.$router.push(`/dashboard`)
      }
    })
    .catch(err =>{
    console.log(err);
    alert("There is some problem! Please try again later!")
    });
   }
  }
}
</script>
<style>
@import './static/css/styles1.css';
@import './static/css/review1.css';  
  body {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }
  
  ul {
    padding-left: 0;
    display: flex;
    flex-flow: row wrap;
  }
  
  li {
    list-style-type: none;
    padding: 10px 10px;
    transition: all 0.3s ease;
  }
  
  .container {
    max-width: 100%;
    padding: 2em;
  }
  
  .card-review {
    display: block;
     width: 150px;
    /* height: 175px;  */
    padding: 80px 50px;
    background-color: #51aae5;
    border-radius: 7px;
    margin: 5px;
    text-align: center;
    line-height: 27px;
    cursor: pointer;
    position: relative;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    -webkit-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    -moz-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    will-change: transform;
  }
  
  li:hover{
    transform: scale(1.1);
  }
  
  li:nth-child(-n+3) .card-review{
    background-color: #e65f51;
    }
  
  li:nth-child(2n+1) .card-review{
    background-color: #a17de9;
    }
  
  li:nth-child(4n) .card-review{
    background-color: #feca34;
    }
  
  li:nth-child(5n-2) .card-review{
    background-color: #51aae5;
    }
  
  li:nth-child(4n+4) .card-review{
    background-color: #feca34;
    }
  
  li:nth-child(-7n+7) .card-review{
    background-color: #e46055;
    }
  
  .delete-card {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 15px;
    opacity: .4;
    transition: all 0.5s ease;
  }
  
  .delete-card:hover, .error {
    opacity: 1;
    transform: rotate(360deg);
  }
  
  .flip-enter-active {
    transition: all 0.4s ease;
  }
  
  .flip-leave-active {
    display: none;
  }
  
  .flip-enter, .flip-leave {
    transform: rotateY(180deg);
    opacity: 0;
  
  }
  
  /* Form */
  .flashcard-form{
    position: relative;
  }
  
  
  label{
    font-weight: 400;
    color: #333;
    margin-right: 10px;
  }
  
  input{
    border-radius: 5px;
    border: 2px solid #eaeaea;
    padding: 10px;
    outline: none;
  }
  
  button{
    border-radius: 5px;
    border: 1px solid #87cb84;
    background-color: #87cb84;
    padding: 8px 15px;
    outline: none;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  button:hover{
    background-color: #70a66f;
  }
  
  .error{
    margin-top: 10px;
    display: block;
    color: #e44e42;
    font-weight: 600;
  }


</style>