<template>
    <div class="blog-details container">
        <div>
            <h1>{{blog.title}}</h1>
            <h3>By: {{blog.creator.name}} - <img :src="blog.creator.picture"> </h3>
            <h1>{{blog.body}}</h1>
        </div>
        <button type="button" class="btn btn-outline-danger" @cick="deleteBlog">Delete</button>
    </div>
</template>


<script>
    export default {
        name: 'blogDeetz',
        data() {
            return {}
        },
        computed: {},
        methods: {},
        components: {}
    }
</script>


<style scoped>

</style>