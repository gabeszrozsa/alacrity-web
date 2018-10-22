import React from 'react'
import { List, Avatar, message } from 'antd';
import { ActivityService } from '../../../api';

export default class ActivityDetailsComments extends React.Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      comments: [],
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    ActivityService.getComments(this.props.activity._id).then(comments => {
      this.setState({ comments: comments, isFetching: false });
    });
  }

  deleteComment = (commentId) => {
    ActivityService.deleteComment(this.props.activity._id, commentId).then(res => {
      message.success('Hozzászólás törölve!');
      // TODO: backend kommentek visszaadása, itt set!!
      // this.setState({ comments: comments, isFetching: false });
    });
  }

  render () {
   const { isFetching, comments } = this.state;

    return (
      <List
        loading={isFetching}
        dataSource={comments}
        renderItem={item => (
          <List.Item actions={[<a onClick={() => this.deleteComment(item._id)}>Törlés</a>]} style={{display: 'flex'}}>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.createdBy.email}</a>}
                description={item.text}
              />
          </List.Item>
        )}
      />
    )
  }
}
