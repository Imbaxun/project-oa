<template>
  <div>
    <Row>
      <Col span="8">
        <Menu :theme="theme2" :open-names="['in']" accordion  @on-select="routeTo">
          <Submenu name="in">
            <template slot="title">
              <Icon type="pin"></Icon>
              行政
            </template>
            <MenuItem name="llh">联络函</MenuItem>
            <MenuItem name="2-2">评论管理</MenuItem>
            <MenuItem name="4-3">举报管理</MenuItem>
          </Submenu>
        </Menu>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    methods: {
      routeTo (e) {
        console.log(e)
        this.$router.push(e)
      }
    }
  }
</script>

<style>

</style>
