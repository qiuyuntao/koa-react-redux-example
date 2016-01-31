import React from 'react';
import ReactDom from 'react-dom';

import '../common/common.less';
import PublishArticle from '../components/PublishArticle';

class Index extends React.Component {
  render() {
    return (
      <div>
        <PublishArticle />
      </div>
    )
  }
}

ReactDom.render(
  <Index />,
  document.getElementById('container')
);
