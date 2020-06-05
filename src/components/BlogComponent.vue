<template>
    <div class="blog col-12">
        <router-link :to="{ name: 'blogDeetz', params: {id: blog._id }}">
            <div>
                <ul>
                    <li>
                        <h2>
                            {{blog.title}}
                        </h2>
                        <p>
                            By: {{blog.creatorEmail}}
                        </p>
                        <p>
                            <img class="picture" v-if="blog.creator" :src="blog.creator.picture">
                        </p>
                    </li>
                </ul>
            </div>
        </router-link>
        <div>

        </div>


    </div>
</template>


<script>
    export default {
        name: 'Blog',
        props: ["blog"],

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