import React, { Component } from 'react';
import axios from 'axios';

import PostCard from '../components/Post';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
    }

    render() {
        return (
            <div>
                {this.state.post && <PostCard {...this.state.post} />}
            </div>
        )
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then(response => {
                const data = response.data;
                this.setState({ post: data })
            })
    }
}
