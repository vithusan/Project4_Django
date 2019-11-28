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
            <div className="App">
                {this.state.allPost.map((post) => {
                    return (
                        <div key={post.id}>
                            <Link to={`/singlepost/${post.id}`} ><img src={`http://img.youtube.com/vi/${post.video_link}/0.jpg`} alt=' ' className='videoThumbnail' /></Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default AllPost;