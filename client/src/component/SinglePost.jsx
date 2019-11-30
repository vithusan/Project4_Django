import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class SinglePost extends Component {
    state = {
        singlePost: {
            username: '',
            title: '',
            description: '',
            video_link: '',
            comments: [],
            likes: []
        },
        allPost: [],
        singleComment: {
            username: '',
            content: ''
        },
        singleLike: {
            isLike: ''
        }
    }
    componentDidMount = () => {
        this.getAllPost()
        this.getSinglePost()
    }
    getSinglePost = async () => {
        const allComments = await axios.get(`/api/v1/post/${this.props.match.params.id}`)
        this.setState({ singlePost: allComments.data })
    }
    getAllPost = async () => {
        const getAll = await axios.get('/api/v1/post')
        this.setState({ allPost: getAll.data })
    }



    render() {
        let currentTitle = this.state.allPost.filter((test) => {
            return test.title !== this.state.singlePost.title
        })
        let renderTitle = currentTitle.map((test2, i) => {
            return (
                <div key={i}>
                    <Link to={`/singlepost/${test2.id}`} ><img src={`http://img.youtube.com/vi/${test2.video_link}/mqdefault.jpg`} alt=' ' className='videoThumbnail' /></Link>
                </div>
            )
        })

        return (
            <div>
                <iframe src={`https://www.youtube.com/embed/${this.state.singlePost.video_link}?autoplay=1`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                    className='singleVideo'
                />
                <h4>{this.state.singlePost.username}</h4>
                <h2>{this.state.singlePost.title}</h2>
                <p>{this.state.singlePost.description}</p>
                {this.state.singlePost.likes.map((like) => {
                    return (
                        <div key={like.id}>
                            <p>{like.id}</p>
                        </div>
                    )
                })}


                {this.state.singlePost.comments.map((comment) => {
                    return (
                        <div key={comment.id}>
                            <h3>{comment.username}</h3>
                            <p>{comment.content}</p>
                        </div>
                    )
                })}
                <div>
                    {renderTitle}
                </div>
            </div>
        );
    }
}

export default SinglePost;