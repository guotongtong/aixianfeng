<template>
    <div>
        <router-view></router-view>
        <div>
            <h1>{{ msg }}</h1>
        </div>
       
    </div>
</template>
    
<script>
export default {
    name: "Home",
    data () {
        return {
             msg: 'ddd'
        };
    }
}
</script>
    
<style lang="css" scoped>
    
</style>