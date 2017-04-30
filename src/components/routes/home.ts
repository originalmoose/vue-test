'use strict'

import * as Vue from 'vue';
import Component from 'vue-class-component';
import * as $ from 'jquery';

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
        $.ajax('https://jsonplaceholder.typicode.com/posts').done(res => { 
            $(res).each((i,v) => {
                let post = new Post();
                post.deserialize(v);
                this.posts.push(post);
            });
            this.postsLoaded = true;
        });
    }
}
