<template>
    <div class="blog-details container">
        <div>
            <h1 v-if="blog.blog.title">{{blog.blog.title}}</h1>
            <h4>By: {{blog.blog.creatorEmail}} <img class="picture" :src="blog.blog.creator.picture"> </h4>
            <h5>{{blog.blog.body}}</h5>
        </div>
        <button type="button" class="btn btn-outline-danger" v-if="isCreator" @click="removeBlog">Delete</button>
        <div class="row">
            <comments v-for="comment in comments" :key="blog.id" :comment="comment" />

        </div>
    </div>
</template>


<script>
    import Comments from "@/components/CommentsComponent.vue"

    export default {
        name: 'blogDeetz',
        mounted() {
            this.$store.dispatch("getBlogDeetz", this.$route.params.id);
        },
        data() {
            return {}
        },
        computed: {
            blog() {
                return this.$store.state.activeBlog
            },
            comments() {
                return this.$store.state.activeComment
            },
            isCreator() {
                return this.$store.state.profile.name == this.blog.blog.creatorEmail
            }
        },
        methods: {
            removeBlog() {
                this.$store.dispatch("removeBlog", this.blog.blog._id)
            },
            removeComment() {
                this.$store.dispatch("removeComment", this.blog.blog._id.comment)
            }
        },
        components: {}
    }
</script>


<style scoped>
    .picture {
        width: 100px;
        height: 100px;
    }
</style>