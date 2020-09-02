<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="isActive" name="item-icon-active"></slot>
    <slot v-else name="item-icon"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    //把path传进来
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        //isActive: false
      }
    },
    computed: {
      isActive() {
        // /home -> item1(/home) = true
        // /home -> item2(/category) = false
        // /home -> item3(/shopcart) = false
        // /home -> item4(/profile) = false
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  
  .tab-bar-item {
    flex: 1; /* 对flex进行均等分 */
    text-align: center;
    height: 49px; /*一般的tabbar的高度是49*/
    font-size: 14px;
  }
  
  .tab-bar-item img {
    height: 24px;
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
