<template>
  <div class="col-md-8">
    <div class="card card-container">
     <router-link :to="{name: 'register'}"> Register </router-link>
      <form @submit.prevent="handleLogin">
      
         
          <div class="form-group">
        
            <input placeholder="email" type="email" class="form-control" v-model="user.email"/>
           
          </div>
          <div class="form-group">
          
            <input placeholder="password" type="password" class="form-control" v-model="user.password"/>
           
          </div>
         
          <div class="form-group">
            <button class="btn btn-primary btn-block">
                   Sign In
            </button>
       
        </div>
      </form>

     
    </div>
  </div>
</template>

<script>

import axios from 'axios';

const API_URL = 'http://localhost:8000/login';

export default {
  name: "Login",
  data(){
      return {
      user: {},
      message: ""
      }
  },
  methods: {
     handleLogin() { 
               return axios
                    .post(API_URL, this.user)
                    .then(response => (
                        localStorage.setItem('user', JSON.stringify(response.data)),
                        this.$router.push({ name: 'profile' })
                    ))
                    .catch(err => console.log(err))
                 }
  },
  
};
</script>
