'use strict'

import * as Vue from 'vue';
import Component from 'vue-class-component';
import Axios from 'axios';

import PostItem from '../posts/post-item.vue';
import Post from '../../models/post';

@Component({
    components: { PostItem }
})
export default class extends Vue {
    message: String = 'Posts';
    posts: Post[] = [];
    postsLoaded: Boolean = false;

    mounted() {
        this.$store.commit('loadPosts');
        console.log(this.$store.state.posts);
        this.postsLoaded = true;
    }
}
