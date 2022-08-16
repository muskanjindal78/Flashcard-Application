<template>
  <div>
      <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
              <p>Register page</p>
              <form class="col g-3" id="login-form">
                <div class="d-flex flex-row">
                    <label class="label is-large" for="username">Email:</label>
                    <div class="control">
                        <input type="email" class="input is-large" id="username" v-model="data1.dataentry.username">
                    </div>
                </div> 
                <br>
                <div class="d-flex flex-row">
                    <label class="label is-large" for="password">Password:</label>
                    <div class="control">
                        <input type="password" class="input is-large" id="password" v-model="data1.dataentry.password">
                    </div>
                </div>
                <br>
                <div class="d-flex flex-column justify-content-around">
                 <div class="control">
                    <button type="submit" class="btn btn-outline-primary mb-3" v-bind:data="data1" v-on:click="submit">Register</button>
                </div>
                </div>
              </form>              
            </div>
        </header>

</div>
</template>
<script>
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
data: function() {
  return {
    data1: {
      dataentry: {
        username: "",
      password: ""
      }
    }
  };
  },
  methods: {
    ...mapMutations([
      'addUserId'
    ]),

    submit: function() {
    axios.post("http://127.0.0.1:5000/signup",{username: this.data1.dataentry.username, password: this.data1.dataentry.password})
    .then(response => {
    if( response.data.message == "success") {
      alert("You are successfully registered! Login again")
      this.$router.push({
      path: `/login`
    }).catch(()=>{});
    }
    else{
      alert("You are not registered! please Signup!")
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