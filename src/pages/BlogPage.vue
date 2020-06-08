<template>
    <div class="blog-details container">
        <div>
            <h1 v-if="blog.blog.title">{{blog.blog.title}}</h1>
            <h4>By: {{blog.blog.creatorEmail}} <img class="picture" :src="blog.blog.creator.picture"> </h4>
            <h5>{{blog.blog.body}}</h5>
        </div>
        <button type="button" class="btn btn-outline-danger" v-if="isCreator" @click="removeBlog">Delete</button>
        <div>
            <div class="row">
                <comments-comp />

            </div>
            <button type="button" class="btn btn-outline-primary" v-if="isCreator" @click="editBlog">Edit</button>
            <form class="form-inline" @submit.prevent="editBlog">
                <div class="form-group ml-2">
                    <label for="title">Edit Title</label>
                    <input type="text" class="form-control" name="title" id="title" aria-describedby="title"
                        placeholder="Title..." v-model="editBlogData.title" required />
                </div>
                <div class="form-group ml-2">
                    <label for="body">Body</label>
                    <textarea type="text" class="form-control" name="body" id="body" aria-describedby="body"
                        placeholder="Body..." v-model="editBlogData.body" rows="5" cols="100" required />
                    </div>
                </form>
        </div>
    </div>
</template>


<script>
    import CommentsComp from "@/components/CommentsComponent.vue"

    export default {
        name: 'blogDeetz',
        mounted() {
            this.$store.dispatch("getBlogDeetz", this.$route.params.id);
        },
        data() {
            return {
                editBlogData: {
                }
            }
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
            },
            editBlog() {
                let blogData = {
                    id: this.$route.params.id,
                    editBlog: this.editBlogData
                }
                this.$store.dispatch("editBlog", blogData),
                    this.editBlogData = { id: this.$route.params.id }
            }
        },
        components: {
            CommentsComp
        }
    }
</script>


<style scoped>
    .picture {
        width: 100px;
        height: 100px;
    }
</style>