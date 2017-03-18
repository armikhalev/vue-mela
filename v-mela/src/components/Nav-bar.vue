<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><router-link to="/latay">Latay</router-link><span class="sr-only">(current)</span></a></li>
        <li>
        <router-link to="/koyla">Koyla</router-link>
        </li> 
      </ul>
      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
export default {
  name: 'navBar',
  data () {
    return {
      msg: 'Omiaw ta fo me lavi'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  background: orange;
  font-family: Helvetica, sans-serif;
  h1 {
    color: blue;
  }
}
</style>
