import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import BatchesContainer from './containers/BatchesContainer'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BatchesContainer} />
        <Route path="/batches/:batchId" component={Batch} />

      </div>
    )
  }
}

//
// import SignIn from './containers/SignIn'
// import SignUp from './containers/SignUp'
// import Batch from './containers/Batch'
// import StudentView from './containers/StudentView'


// export default class Routes extends Component {
//   render() {
//     return (
//       <div>
//         <Route exact path="/" component={BatchesContainer} />
//         <Route path="/sign-in" component={SignIn} />
//         <Route path="/sign-up" component={SignUp} />
//         <Route path="/batches/:batchId" component={Batch} />
//         <Route path="/students-path/:batchId/:studentId" component={StudentView} />
//
//       </div>
//     )
//   }
// }
