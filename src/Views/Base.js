import React, { Component } from 'react'
import BaseCard from '../Components/BaseCard';

export default class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }
    componentDidMount() {
    fetch("https://kekambas-blog.herokuapp.com/blog/posts").then(res => res.json()).then(data => this.setState({posts:data}))
}

    sortPosts = (sortMethod) => {
        const sortingMethods = {
          byDateAsc: (a, b) =>
            new Date(a.date_created) - new Date(b.date_created),
          byDateDesc: (a, b) =>
                new Date(b.date_created) - new Date(a.date_created),
          byTitleAsc: (a, b) => a.title > b.title ? 1 : -1,
          byTitleDesc: (a,b) => a.title > b.title ? -1 : 1,
        }
        let sortedPosts = [...this.state.posts].sort(sortingMethods[sortMethod])
            this.setState({posts: sortedPosts});
    }
    
  render() {
    return (
      <>
        <h1>Sample Blog Home Page</h1>
        <div className="offset-8 col-4">
          <select
            onChange={(e) => this.sortPosts(e.target.value)}
            className="form-select"
          >
            <option>Sort Posts</option>
            <option value="byDateAsc">by date, ascending</option>
            <option value="byDateDesc">by date, descending</option>
            <option value="byTitleAsc">by title, ascending</option>
            <option value="byTitleDesc">by title, descending</option>
          </select>
        </div>
        {this.state.posts.map((p) => (
          <BaseCard key={p.id} post={p} />
        ))}
        <hr></hr>
      </>
    );
  }
}
