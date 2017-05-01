'use strict'

import Vuex from 'vuex';
import Axios from 'axios';

import Post from '../models/post';

export default {
  loadPosts(state) {
    Axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        for (let i of res.data) {
            let post = new Post();
            post.deserialize(i);
            state.posts.push(post);
        }
    });
  }
}