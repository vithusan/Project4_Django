import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class AllPost extends Component {
    state = {
        allPost: []
    }

    componentDidMount = () => {
        this.refreshPage()
    }

    refreshPage = async () => {
        const getAllPost = await axios.get('/api/v1/post')
        this.setState({ allPost: getAllPost.data })
        console.log(this.state.allPost)
    }

    render() {
        return (
            <div>
                {this.state.allPost.map((post) => {
                    return (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default AllPost;