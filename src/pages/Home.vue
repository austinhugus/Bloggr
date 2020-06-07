<template>
  <div class="home">

    <blogs />
  </div>
</template>

<script>
  import Blogs from "@/components/BlogsComponent.vue"
  export default {
    name: "home",
    components: {
      Blogs
    }
  };
</script>