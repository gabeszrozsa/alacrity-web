import React from 'react'
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;

export default class Locations extends React.Component {
  render () {
    const buttonStyle = {
      marginRight: '10px',
      marginBottom: '40px'
    };

    return (
      <React.Fragment>
        <Link to="/locations/add">
          <Button style={buttonStyle} type="primary" icon="pushpin" size='large'>
            Helyszín hozzáadása
          </Button>
        </Link>

        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
      </React.Fragment>
    )
  }
}
