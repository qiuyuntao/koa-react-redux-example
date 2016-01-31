import React from 'react';
import ReactDom from 'react-dom';

import '../common/common.less';
import ArticleList from '../components/ArticleList';

class List extends React.Component {
  render() {
    return (
      <div>
        <ArticleList />
      </div>
    )
  }
}

ReactDom.render(
  <List />,
  document.getElementById('container')
);
