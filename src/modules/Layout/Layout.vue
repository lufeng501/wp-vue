<template>
  <div id="wrapper">

    <!-- Main Header -->
    <header class="main-header">

      <!-- Logo -->
      <a href="/" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <!-- <span class="logo-mini"><b>A</b>LT</span> -->
      <span class="logo-mini">
        <img style="width:50px" src="../../assets/logo.png"/>
      </span>
        <!-- logo for regular state and mobile devices -->
      <span class="logo-lg">
        <img style="width:50px" src="../../assets/logo.png"/>
      </span>
        <!-- <span class="logo-lg"><b>Admin</b>LTE</span> -->
      </a>

      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button"></a>
      </nav>
    </header>

    <!-- 侧边导航 -->
    <asider></asider>

    <!-- 主体区域 -->
    <router-view></router-view>

    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="pull-right hidden-xs">
        developer : luyingru@37.com
      </div>
      <!-- Default to the left -->
      <strong>Copyright &copy; 2017 <a href="#">极光网络</a>.</strong> 版权所有.
    </footer>

  </div>
  <!-- ./wrapper -->
</template>

<script>
  import Asider from './Asider'
  export default {
    name: 'wrapper',
    components: {Asider}
  }
</script>

<style>
</style>
