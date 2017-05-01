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
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            for (let i of res.data) {
                let post = new Post();
                post.deserialize(i);
                this.posts.push(post);
            }
            this.postsLoaded = true;
        });
    }
}
