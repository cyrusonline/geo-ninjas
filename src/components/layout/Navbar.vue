<template>
    <div class="navbar">
        <nav class="deep-purple darken-1">
            <div class="container">
                <router-link :to="{name:'GMap'}">GeoNinjas</router-link>
              <ul class="right">
                    <li><router-link :to="{name:'Signup'}">Signup</router-link></li>
                    <li><router-link :to="{name:'Login'}">Login</router-link></li>
                    <li><a @click="logout">Logout</a></li>
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

        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(()=>{
                 this.$router.push({name:'Login'})
            })
        }
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
