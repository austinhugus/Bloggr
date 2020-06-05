<template>
    <div class="blog-component container">
        <div class="row">
            <div class="col">
                <button type="button" class="btn btn-dark" v-if="!blogForm" @click="blogForm = !blogForm">New
                    Blog</button>

                <form class="form-inline" v-if="blogForm" @submit.prevent="createBlog">
                    <div class="form-group ml-2">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" name="title" id="title" aria-describedby="title"
                            placeholder="Title..." v-model="newBlog.title" required />
                    </div>
                    <div class="form-group ml-2">
                        <label for="body">Body</label>
                        <input type="text" class="form-control" name="body" id="body" aria-describedby="body"
                            placeholder="Body..." v-model="newBlog.body" required />
                    </div>
                    <button type="submit" class="btn btn-outline-success">Publish Blog</button>
                    <button type="button" class="btn btn-danger"
                        @click="blogForm = !blogForm; newBlog={}">Cancel</button>
                </form>
            </div>
        </div>
        <div class="row">
            <blog v-for="blog in blogs" :key="blog._id" :blogProp="blog" />
        </div>
    </div>
</template>


<script>
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
        components: {}
    }
</script>


<style scoped>

</style>