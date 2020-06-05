<template>
    <div class="blog col">
        <router-link :to="{ name: 'blogDeetz', params: {id: blog._id }}">
            <div>
                <ul>
                    <li>
                        {{blog.title}} - {{blog.creatorEmail}} - <img :src="blog.creator.picture">
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

</style>