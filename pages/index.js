import React from 'react'
import {connect} from 'react-redux'
import MainLayout from '../layouts/MainLayout'


class Index extends React.Component {
  static async getInitialProps ({ query }) {
    return {}
  }

  componentDidMount () {
    
  }

  render () {
    return (
      <div>
        <MainLayout />
      </div>
    )
  }
}

export default connect()(Index)