<template>
    <div class="post">
        <div class="post-title">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Posts",
        computed: {
            posts() {
                return this.$posts.state.posts
            }
        },
        mounted () {
            this.$posts.dispatch("getPosts");
        }

    }
</script>