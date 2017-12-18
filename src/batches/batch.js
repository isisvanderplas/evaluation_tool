import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class Batch extends PureComponent {
  static propTypes = {
    fetchOneBatch: PropTypes.func.isRequired,
    batch: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      updatedAt: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      students: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        picture: PropTypes.string,
        evaluation: PropTypes.arrayOf(PropTypes.shape({
          color: PropTypes.string,
          date: PropTypes.string,
          remark: PropTypes.string,
        }))
      }))
    }),
  }
}

const mapStateToProps = ({ currentUser, batches }, { match }) => {
  const batch = batches.filter((b) => (b._id === match.params.batchId))[0]

  return {
    batch
  }
}

export default connect(mapStateToProps)(Batch)
