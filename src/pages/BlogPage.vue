<template>
    <div class="blog-details container">
        <div>
            <h1>{{blog.blog.title}}</h1>
            <h4>By: {{blog.blog.creatorEmail}} <img class="picture" :src="blog.blog.creator.picture"> </h4>
            <h5>{{blog.blog.body}}</h5>
        </div>
        <button type="button" class="btn btn-outline-danger" @click="removeBlog">Delete</button>
    </div>
</template>


<script>
    export default {
        name: 'blogDeetz',
        mounted() {
            this.$store.dispatch("getBlogDeetz", this.$route.params.id)
        },
        data() {
            return {}
        },
        computed: {
            blog() {
                return this.$store.state.activeBlog
            }
        },
        methods: {},
        components: {}
    }
</script>


<style scoped>
    .picture {
        width: 100px;
        height: 100px;
    }
</style>