<template>
  <div id="index-index">
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          首页
          <small>Optional description</small>
        </h1>

        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-home"></i> 后台</a></li>
          <li class="active">首页</li>
        </ol>

        <br>
        <br>
        <div>
          <valert type="success">消息提示文案</valert>
          <valert type="warning">消息提示文案</valert>
          <valert type="error">消息提示文案</valert>

        </div>

        <div>
          <vtable id="test-table" stripe :columns="columns1" :data="data1"></vtable>
        </div>

        <br>

        <div>
          <vinput v-model="value" placeholder="请输入..." style="width: 300px"></vinput>
        </div>

        <br>

        <valert type="error">{{value}}</valert>

      </section>

      <section class="content">
      </section>
    </div>
  </div>
</template>
<script>
  import iView from 'iview'
  import 'iview/dist/styles/iview.css'
  export default {
    name: 'index-index',
    data () {
      return {
        value: 'hello world',
        columns1: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    },
    components: {
      'valert': iView.Alert,
      'vtable': iView.Table,
      'vinput': iView.Input
    }
  }
</script>
<style>
</style>
