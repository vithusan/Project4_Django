import React, { Component } from 'react';
import axios from 'axios'

class SinglePost extends Component {
    state = {
        username: '',
        title: '',
        description: '',
        comments: [],
        likes: []
    }
    componentDidMount = async () => {
        const allComments = await axios.get(`/api/v1/post/${this.props.match.params.id}`)
        this.setState(allComments.data)
        console.log(allComments.data)
    }
    render() {
        return (
            <div>
                {this.state.comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            <h3>{comment.username}</h3>
                            <p>{comment.content}</p>
                        </div>
                    )
                })}
                {this.state.likes.map((like) => {
                    return (
                        <div key={like.id}>
                            <p>{like.id}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default SinglePost;