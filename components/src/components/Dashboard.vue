<template>
<html lang="en">
    <body class="masthead bg-primary text-white text-center" style="background-color: gray!important;">
            <div class="container-fluid d-flex align-items-center flex-column">
              <p style="color: black;">Dashboard</p>
              <div class="row"> 
                <div class="col-lg-3">
                    <router-link class="btn btn-outline-primary mb-3" to="/about">About</router-link>
                  </div>
                  <div class="col-lg-3">
                    <router-link class="btn btn-outline-primary mb-3" to="/upload">Upload a Deck</router-link>
                  </div>
                  <div class="col-lg-3">
                    <router-link class="btn btn-outline-primary mb-3" to="/new">Create a Deck</router-link>
                  </div>
                  <div class="col-lg-3">
                    <button class="btn btn-outline-primary mb-3" @click="sendReport">Send reports</button>
                  </div>
                  <div class="col-lg-3">
                    <button class="btn btn-outline-primary mb-3" @click="logOut">Log Out</button>
                  </div>
                  
              </div>  

              <div class="row">                  
                <div class="col-sm" v-for="d in this.decks" :key="d.id">
                    <div class="card" style="width: 18rem; background-color: black;">
                        <button type="button" class="close btn btn-outline-primary mb-3" aria-label="Close" style="background-color:black" v-on:click="removeDeck(d.id)">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="card-body">
                          
                            <h5 class="card-title" style="color: white;">{{ d.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted" v-if="d.score == 0"> Score: Not Attempted </h6>
                            <h6 class="card-subtitle mb-2 text-muted" v-else> Score: {{d.score}} </h6>
                            <p class="card-text" v-if="d.lastReviewTime == 0"> Last Reviewed at: Not Attempted </p>
                            <p class="card-text" v-else> Last Reviewed at: {{d.lastReviewTime}}</p>
                            <br>
                            <p class="card-text">Deck Id: {{ d.id }}</p>
                            <br>
                            <div class= "col-sm">
                              <button type= "submit" class="btn btn-outline-primary mb-3" v-on:click="startDeck(d.id)">Start Deck</button>
                              &nbsp;
                              <button type= "export" class="btn btn-outline-primary mb-3" v-on:click="exportDeck(d.id)">Export Deck</button>
                            </div>
                            <button type= "submit" class="btn btn-outline-primary mb-3" v-on:click="updateDeck(d.id)">Update Deck</button>
                        </div>
                        <br>
                    </div>
                    <br>
                </div>
              </div>
            </div>      
        </body>  
</html>
    
</template>

<script>
import axios from 'axios';

export default {
  data: function(){
    return {
      userId: sessionStorage.getItem('userid'),
      username: sessionStorage.getItem('name'),
      decks: JSON.parse(sessionStorage.getItem('decks'))
    }
  },
  methods: {
    sendReport: function() {
      axios.post("http://127.0.0.1:5000/email/report")
      .then(response => {
      if (response.data.message == "mail sent"){
        console.log(response.data)
        alert("Email Sent!")
      }
      else {
        alert("Something is wrong in deleting deck!")
      }
    })
    .catch(err =>{
    console.log(err);
    alert("There is some problem! Please try again later!")
    });
    },
    logOut(){
      sessionStorage.clear();
      (window.history.length > 2) ? this.$router.go(-2) : this.$router.push('/');
    },
    removeDeck: function(deckid) {
      if (confirm("Do you want to delete this deck?")) {
        console.log("delete")
        axios.delete("http://127.0.0.1:5000/delete/"+this.userId+"/"+deckid)
        .then(response => {
      if (response.data.message == "Deck Removed"){
        console.log(response.data)
        sessionStorage.setItem("decks",JSON.stringify(response.data.decks))
        alert("The deck is successfully removed!")
        this.decks = response.data.decks
      }
      else {
        alert("Something is wrong in deleting deck!")
      }
    })
    .catch(err =>{
    console.log(err);
    alert("There is some problem! Please try again later!")
    });
      }
    },
    updateDeck: function(deckid) {
     axios.post("http://127.0.0.1:5000/review", {"User_id": sessionStorage.getItem('userid'), "deckid": deckid, "score": 0})
    .then(response => {
      sessionStorage.setItem("currentDeck",JSON.stringify(response.data.deck))
      sessionStorage.setItem("currentDeckName", response.data.deckname)
      sessionStorage.setItem("currentDeckid", response.data.deckid)
      this.$router.push({
        path: `/update`
      })
    })
    .catch(err =>{
    console.log(err);
    alert("There is some problem! Please try again later!")
    });
   },
   startDeck: function(deckid) {
     axios.post("http://127.0.0.1:5000/review", {"User_id": sessionStorage.getItem('userid'), "deckid": deckid, "score": 0})
    .then(response => {
      sessionStorage.setItem("currentDeck",JSON.stringify(response.data.deck))
      sessionStorage.setItem("currentDeckName", response.data.deckname)
      sessionStorage.setItem("currentDeckid", response.data.deckid)
      this.$router.push({
        path: `/review`
      })
    })
    .catch(err =>{
    console.log(err);
    alert("There is some problem! Please try again later!")
    });
   },
   exportDeck: function(deckid) {
     axios.get("http://127.0.0.1:5000/export/"+deckid, {responseType: 'blob'})
    .then(response => {
      console.log(response.data)
      const blob = new Blob([response.data], {type: 'text/csv;charset=utf-8;'});
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = deckid;
      link.click();
      URL.revokeObjectURL(link.href);
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
</style>