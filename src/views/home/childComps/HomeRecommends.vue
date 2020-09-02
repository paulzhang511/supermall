<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommends",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 15px 0;
    border-bottom: 8px solid #eee;
  }
  
  .recommend-item {
    flex: 1;
  }
  
  .recommend-item img {
    width: 68px;
    height: 68px;
    margin-bottom: 10px;
  }


</style>
