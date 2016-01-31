import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

const ArticleList = React.createClass({

  getInitialState() {
    return {
      posts: []
    }
  },

  componentWillMount() {
    let self = this;
    $.ajax({
      url: './getArticle',
      type: 'get',
      dataType: 'json',
      success(res) {
        console.log(res, 'success');
        self.setState({
          posts: res.posts
        })
      }
    })
  },

  render() {
    return (
      <ul>
        {
          this.state.posts.map((d, i) => {
            return (
              <li key={i}>
                <a href="./articleDetail">{d.title}</a>
              </li>
            )
          })
        }
      </ul>
    )
  }
});

export default ArticleList;
