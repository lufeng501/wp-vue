<template>
  <div id="aside">
    <aside class="main-sidebar">
      <section class="sidebar">
        <ul class="sidebar-menu">
          <li class="header">HEADER</li>
          <li class="active"><a href="#/"><i class="fa fa-home"></i> <span>首页</span></a></li>
          <li><a href="#/TestIndex"><i class="fa fa-link"></i> <span>Iview基本特性</span></a></li>
          <li><a href="#/ComponentsTest"><i class="fa fa-link"></i> <span>自定义组件</span></a></li>
          <li><a href="#/LifeCycle"><i class="fa fa-link"></i> <span>组件生命周期</span></a></li>
          <li><a href="#/FetchData"><i class="fa fa-link"></i> <span>Ajax异步请求数据</span></a></li>
          <li><a href="#/Jquery"><i class="fa fa-link"></i> <span>Jquery原生写法</span></a></li>
          <li class="treeview">
            <a href="#"><i class="fa fa-link"></i> <span>导航二</span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu" style="margin-top: -2px">
              <li><a href="#/">子导航一</a></li>
              <li><a href="#/">子导航二</a></li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>
  </div>
</template>

<script>
  export default {
    name: 'aside'
  }
</script>

