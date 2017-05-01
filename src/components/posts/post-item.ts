'use strict'

import * as Vue from 'vue';
import Component from 'vue-class-component';
import Axios from 'axios';

import Post from '../../models/post';
import Comment from '../../models/comment';

@Component({ 
    name: 'post-item',
    props: { post: Post }
})
export default class extends Vue {
    post: Post;
    comments: Comment[] = [];
    commentsLoaded: Boolean = false;
    
    loadComments() {
        if (this.commentsLoaded == false) {
            Axios.get('https://jsonplaceholder.typicode.com/comments', {
                params: { postId: this.post.id }  
            }).then(res => {
                for (let i of res.data) {
                    let comment = new Comment();
                    comment.deserialize(i);
                    this.comments.push(comment);
                }
            });
            this.commentsLoaded = true;
        }
    }
}
