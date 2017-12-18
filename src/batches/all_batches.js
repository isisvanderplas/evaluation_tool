import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Batch } from './batch'

class AllBatches extends PureComponent {
  render(){
    const { batches } = this.props

    return(
      <div>
        {batches.map(this.renderBatch)}
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches})

export default connect(mapStateToProps)(BatchesContainer)
