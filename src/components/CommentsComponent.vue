<template>
    <div class="comments-component">
        <div class="row" v-if="$auth.usAuthenticated">
            <div class="col">
                <button type="button" class="btn btn-success" v-if="!commentForm" @click="commentForm = !commentForm">
                    New Comment
                </button>
                <form class="form-inline" v-if="commentForm" @submit.prevent="createForm">
                    <div class="form-group ml-2">
                        <label for="title"></label>
                        <input type="text" class="form-control" name="comment" id="comment" aria-describedby="comment"
                            placeholder="Comment..." v-model="newComment.body" required />
                    </div>
                    <button type="submit" class="btn btn-outline-dark">Post Comment</button>
                    <button type="button" class="btn btn-danger"
                        @click="commentForm = !commentForm; newComment={}">Cancel</button>
                </form>
            </div>
        </div>
        <div class="row">
            <comment v-for="comment in comments" :key="comment" :comment="comment" />
        </div>
    </div>
</template>


<script>
    import Comment from "./CommentComponent.vue"
    export default {
        name: 'comments',
        mounted() {
            this.$store.dispatch("getAllComments")
        },
        data() {
            return {

                newComment: {},
                commentForm: false
            }
        },
        computed: {
            comments() {
                return this.$store.state.blog.comments
            }
        },
        methods: {
            createComment() {
                this.$store.dispatch("createComment", { ...this.newComment })
                this.newComment = {}
            }
        },
        components: {
            Comment
        }
    }
</script>


<style scoped>

</style>