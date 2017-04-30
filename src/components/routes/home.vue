<script src="./home.ts" lang="ts"></script>

<style scoped>
.home {
    font-size: 30px;
}
</style>

<template>
    <div class="home">
        <h3>{{ message }}</h3>
        <div v-if="postsLoaded">
            <div v-for="post in posts">
                <post-item :post="post" />
            </div>
        </div>
        <div v-else>Fetching posts...</div>
    </div>
</template>