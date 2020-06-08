<template>
    <div class="blog-component container">
        <div class="row" v-if="$auth.isAuthenticated">
            <div class="col">
                <button type="button" class="btn btn-dark my-4 d-flex" v-if="!blogForm"
                    @click="blogForm = !blogForm">New
                    Blog</button>

                <form class="form-inline" v-if="blogForm" @submit.prevent="createBlog">
                    <div class="form-group ml-2">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" name="title" id="title" aria-describedby="title"
                            placeholder="Title..." v-model="newBlog.title" required />
                    </div>
                    <div class="form-group ml-2">
                        <label for="body">Body</label>
                        <textarea type="text" class="form-control" name="body" id="body" aria-describedby="body"
                            placeholder="Body..." v-model="newBlog.body" rows="5" cols="100" required />
                        </div>
                    <button type="submit" class="btn btn-outline-dark">Publish Blog</button>
                    <button type="button" class="btn btn-danger"
                        @click="blogForm = !blogForm; newBlog={}">Cancel</button>
                </form>
            </div>
        </div>
        <div class="row">
            <blog v-for="blog in blogs" :key="blog._id" :blog="blog" />
    </div>
    </div>
</template>


<script>
    import Blog from "./BlogComponent.vue"
    export default {
        name: 'blogs',
        mounted() {
            this.$store.dispatch("getAllBlogs")
        },
        data() {
            return {
                newBlog: {},
                blogForm: false
            }
        },
        computed: {
            blogs() {
                return this.$store.state.blogs
            }
        },
        methods: {
            createBlog() {
                this.$store.dispatch("createBlog", { ...this.newBlog })
                this.newBlog = {}
            }

        },
        components: {
            Blog
        }
    }
</script>


<style scoped>

</style>