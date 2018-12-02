<template>
    <div class="navbar">
        <nav class="deep-purple darken-1">
            <div class="container">
                <a href="" class="brand-logo left">GeoNinjas!</a>
                <ul class="right">
                    <li>
                        <a href="#/signup/">Signup</a>
                    </li>
                    <li>
                        <a href="">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name:'Navbar',
    data(){
        return{

        }
    },
    mounted() {
      M.AutoInit(); // That way, it is only initialized when the component is mounted
    }
}
</script>
<style>

</style>
