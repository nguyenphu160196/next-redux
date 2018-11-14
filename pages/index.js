import React from 'react'
import {connect} from 'react-redux'


class Index extends React.Component {
  static async getInitialProps ({ query }) {
    return {}
  }

  componentDidMount () {
    
  }

  render () {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect()(Index)