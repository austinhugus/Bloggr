<template>
    <div class="blog col-12">
        <div>
            <ul>
                <li>
                    <h2>
                        {{blog.comments.body}}
                    </h2>
                    <p>
                        - {{blog.comments.creatorEmail}}
                    </p>
                </li>
            </ul>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'Comment',
        props: ["comment"],

    }
</script>


<style scoped>
    .picture {
        height: 75px;
        width: 75px;
    }

    .list {
        overflow-y: scroll;
        height: 10vh;
    }
</style>