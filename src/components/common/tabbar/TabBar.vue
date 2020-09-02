<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  
  #tab-bar {
    display: flex; /* 设置tabbar 按照flex水平分布 */
    background: #f6f6f6;
    
    position: fixed; /* 设置tabbar到底部，左右底空隙为0*/
    left: 0;
    right: 0;
    bottom: 0;
    /* 设置box-shadow:X轴偏移量 Y轴偏移量 阴影模糊半径 阴影扩展半径 阴影颜色 投影方式*/
    box-shadow: 0px -1px 1px rgba(100, 100, 100, .1);
  }
  
  .tab-bar-item {
    flex: 1; /* 对flex进行均等分 */
    text-align: center;
    height: 49px; /*一般的tabbar的高度是49*/
  }
  
  .tab-bar-item img {
    height: 24px;
    width: 24px;
  }
</style>
