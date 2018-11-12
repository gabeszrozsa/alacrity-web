import React from 'react'
import { Layout } from 'antd';
import prof from '../prag_prof.jpg';

const { Header } = Layout;

export default class AppLayoutHeader extends React.Component {
  render () {
    return (
      <Header id="header">
          <h2>
            Rózsa Gábor
            <img src={prof} alt='profilkép'/>
        </h2>
      </Header>
    )
  }
}
