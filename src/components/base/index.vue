<template>
  <div class="layout" :class="{'layout-hide-text' : spanLeft < 5}">
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Menu :active-name="setActive" theme="dark" width="auto" @on-select="routeTo">
          <div class="layout-logo-left">
            <h3>OA系统</h3>
          </div>
          <Menu-item  name="index">
            <Icon type="ios-navigate" :size="iconSize"></Icon>
            <span class="layout-text">我的流程</span>
          </Menu-item>
          <Menu-item  name="sendprocess">
            <Icon type="ios-navigate" :size="iconSize"></Icon>
            <span class="layout-text">发起流程</span>
          </Menu-item>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <marquee>当前使用者：014228</marquee>
      	<div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </i-button>
          <div>
            <Button type="ghost">待办</Button>
            <Button type="ghost">通知</Button>
            <Button type="ghost">追踪</Button>
          </div>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item>首页</Breadcrumb-item>
              <Breadcrumb-item>页面</Breadcrumb-item>
              <Breadcrumb-item>{{this.$route.path.replace('/','')}}</Breadcrumb-item>
            </Breadcrumb>
            </div>
            <div class="layout-content">
              <div class="layout-content-main">
                <transition mode="out-in">
                  <router-view></router-view>
                </transition>
              </div>
            </div>
            <div class="layout-copy">
                信息中心
            </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        spanLeft: 5,
        spanRight: 19
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24
      },
      setActive () {
        console.log(this.$route.path.replace('/', ''))
        return this.$route.path.replace('/', '')
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2
          this.spanRight = 22
        } else {
          this.spanLeft = 5
          this.spanRight = 19
        }
      },
      routeTo (e) {
        console.log(e)
        this.$router.push(e)
      }
    }
  }
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 600px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 20px 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left {
  background: #464c5b;
    /*min-width: 100px;*/
}
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
  line-height: 30px;
  color: white;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
}
.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-hide-text .layout-text {
  display: none;
}
.ivu-col {
  transition: width .2s ease-in-out;
}
</style>
