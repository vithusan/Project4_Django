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
                            <div>
                                <img src={`http://img.youtube.com/vi/${post.video_link}/${post.video_thumbnail}.jpg`} atl='...' />
                            </div>
                            <p>{post.video_link}</p>
                            <Link to={`/singlepost/${post.id}`} >{post.title}</Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default AllPost;