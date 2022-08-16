
<template>
  <div>
      <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
              
              <div class="col g-3">
                  <div class="d-flex flex-row">
                  <button class="btn btn-outline-primary mb-3">Upload CSV file
                   <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
                   </button>
                </div> 
                <br>
                <div class="d-flex flex-row">
                    <label class="label is-large" for="deckName">Deck name  </label>
                    <div class="control">
                        <input type="text" class="input is-large" id="deckName" v-model="deckName">
                    </div>
                </div>
                <br>
                <div class="d-flex flex-column justify-content-around">
                 <div class="control">
                    <button type="submit" class="btn btn-outline-primary mb-3" v-bind:data="deckName" v-on:click="submit">Upload the deck</button>
                </div>
                </div>
              </div>              
            </div>
        </header>

</div>
</template>
<script>
import axios from 'axios';

export default {
data: function() {
  return {
    file: '',
    deckName: ""
  };
  },
  methods: {
    onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
      },

    submit: function() {
         let formData = new FormData();
            formData.append('file', this.file);
            formData.append('user_id', sessionStorage.getItem("userid"))
            formData.append('deckname', this.deckName)
    axios.post("http://127.0.0.1:5000/upload",formData)
    .then(response => {
    if( response.data.message == "success") {
        sessionStorage.setItem('decks', JSON.stringify(response.data.decks))
        this.$router.push({
        path: `/dashboard`
    })
    }
    else{
      alert("File is not uploaded! Try Again")
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