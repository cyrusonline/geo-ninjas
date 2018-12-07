<template>
    <div class="navbar">
        <nav class="deep-purple darken-1">
            <div class="container">
                <router-link :to="{name:'GMap'}" class="brand-logo left">Google Map</router-link>
              <ul class="right">
                    <li v-if="!user"><router-link :to="{name:'Signup'}">Signup</router-link></li>
                    <li v-if="!user"><router-link :to="{name:'Login'}">Login</router-link></li>
                    <li v-if="user"><a>{{user.email}}</a></li>
                    <li v-if="user"><a @click="logout">Logout</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import firebase from 'firebase'
export default {
    name:'Navbar',
    data(){
        return{
            user:null
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(()=>{
                 this.$router.push({name:'Login'})
            })
        }
    },
    created(){
        // let user = firebase.auth().currentUser
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.user = user
            } else {
                this.user = null
            }
        })

    },
    mounted() {
      M.AutoInit(); // That way, it is only initialized when the component is mounted
    }
}
</script>
<style>
.login{
    max-width: 400px;
    margin-top: 60px;

}

.login h2{
    font-size: 2.4em;
}
.login .field{
    margin-bottom: 16px;
}
</style>
