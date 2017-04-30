<script src="./post-item.ts" lang="ts"></script>

<style scoped>
    * { font-family: sans-serif; font-size: 12px; }
    .comment {
        margin: 2px 0 0 20px;
        border: 1px solid black;
        padding: 2px;
    }
</style>

<template>
    <div v-on:click="loadComments()">
        <h4>{{ post.title }}</h4>
        <p>{{ post.body }}</p>
        <div v-if="commentsLoaded">
            <div v-for="comment in comments" class="comment">
                <p>{{ comment.body }}</p>
                <b>{{ comment.name }}</b>
            </div>
        </div>
    </div>
</template>
