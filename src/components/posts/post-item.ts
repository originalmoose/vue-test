'use strict'

import * as Vue from 'vue';
import Component from 'vue-class-component';
import * as $ from 'jquery';

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
            $.ajax('https://jsonplaceholder.typicode.com/comments?postId=' + this.post.id).done(res => { 
                $(res).each((i,v) => {
                    let comment = new Comment();
                    comment.deserialize(v);
                    this.comments.push(comment);
                });
                this.commentsLoaded = true;
            });
        }
    }
}
