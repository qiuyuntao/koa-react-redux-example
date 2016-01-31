import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

class PublishArticle extends React.Component {

  constructor(props) {
      super(props);

      this.submit = this.submit.bind(this);
    }

  submit(e) {
    e.preventDefault();

    let title = this.refs.title.value;
    let content = this.refs.content.value;

    $.ajax({
      url: './publish',
      type: 'post',
      data: {
        title: title,
        content: content
      },
      success(res) {
        console.log(res, 'success');
      }
    });
  }

  render() {
    return (
      <form id="J_form">
        <p><input type="text" placeholder="Title" name="title" ref="title" /></p>
        <p><textarea placeholder="Contents" name="content" ref="content"></textarea></p>
        <p><input id="J_submit" type="submit" value="Create" onClick={this.submit} /></p>
      </form>
    )
  }
}

export default PublishArticle;
