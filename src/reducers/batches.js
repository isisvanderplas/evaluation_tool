const batches =
[
  {
    "number": 12,
    "startDate": "2017-11-23",
    "endDate": "2018-01-13",
    "students": [
      {
        "name": "Isis",
        "picture": "something.jpg",
        "evaluation": [
          {
            "colorCode": "yellow",
            "evaluationDate": "2017-12-02",
            "remark":""
          },
          {
            "colorCode": "yellow",
            "evaluationDate": "2017-12-03",
            "remark":""
          }
        ]
      },
      {
        "name": "Gabrijella",
        "picture": "something.jpg",
        "evaluation": [
          {
            "colorCode": "yellow",
            "evaluationDate": "2017-12-02",
            "remark":""
          },
          {
            "colorCode": "green",
            "evaluationDate": "2017-12-03",
            "remark":""
          }
        ]

      },
      {
        "name": "Lara Anna",
        "picture": "something.jpg",
        "evaluation": [
          {
            "colorCode": "green",
            "evaluationDate": "2017-12-02",
            "remark":""
          },
          {
            "colorCode": "red",
            "evaluationDate": "2017-12-03",
            "remark":""
          }
        ]
      },
      {
        "name": "Daniil",
        "picture": "something.jpg",
        "evaluation": [
          {
            "colorCode": "green",
            "evaluationDate": "2017-12-02",
            "remark":""
          },
          {
            "colorCode": "green",
            "evaluationDate": "2017-12-03",
            "remark":""
          }
        ]
      },
      {
        "name": "Robin",
        "picture": "something.jpg",
        "evaluation": [
          {
            "colorCode": "yellow",
            "evaluationDate": "2017-12-02",
            "remark":""
          },
          {
            "colorCode": "yellow",
            "evaluationDate": "2017-12-03",
            "remark":""
          }
        ]
      }
    ]
  },
  {
  "number": 13,
  "startDate": "2018-02-01",
  "endDate": "2018-03-18",
  "students": [
    {
      "name": "Ha",
      "picture": "something.jpg",
      "evaluation": [
        {
          "colorCode": "green",
          "evaluationDate": "2017-11-02",
          "remark":""
        },
        {
          "colorCode": "green",
          "evaluationDate": "2017-11-03",
          "remark":""
        }
      ]
    },
    {
      "name": "Anna",
      "picture": "something.jpg",
      "evaluation": [
        {
          "colorCode": "red",
          "evaluationDate": "2017-11-02",
          "remark":""
        },
        {
          "colorCode": "yellow",
          "evaluationDate": "2017-11-03",
          "remark":""
        }
      ]

    },
    {
      "name": "Raita",
      "picture": "something.jpg",
      "evaluation": [
        {
          "colorCode": "green",
          "evaluationDate": "2017-11-02",
          "remark":""
        },
        {
          "colorCode": "yellow",
          "evaluationDate": "2017-11-03",
          "remark":""
        }
      ]
    },
    {
      "name": "Ha",
      "picture": "something.jpg",
      "evaluation": [
        {
          "colorCode": "yellow",
          "evaluationDate": "2017-11-02",
          "remark":""
        },
        {
          "colorCode": "green",
          "evaluationDate": "2017-11-03",
          "remark":""
        }
      ]
    },
    {
      "name": "Robin",
      "picture": "something.jpg",
      "evaluation": [
        {
          "colorCode": "yellow",
          "evaluationDate": "2017-11-02",
          "remark":""
        },
        {
          "colorCode": "green",
          "evaluationDate": "2017-11-03",
          "remark":""
        }
      ]
    }
  ]
}


]


export default (state = batches , { type, payload } = {}) => {
  return state
}



















// import { FETCHED_BATCHES, FETCHED_ONE_BATCH } from '../actions/batches/fetch'
// import {
//   BATCH_CREATED,
//   STUDENT_ADDED,
//   EVALUATION_ADDED,
//   STUDENT_REMOVED
//
// } from '../actions/batches/subscribe'
//
//
// export default (state = [], {type, payload} = {}) => {
//   switch(type) {
//     case FETCHED_BATCHES :
//       return [ ...payload ]
//
//     case FETCHED_ONE_BATCH :
//       const batchIds = state.map(b => b._id)
//       if (batchIds.indexOf(payload._id) < 0) {
//         return [{ ...payload }].concat(state)
//       }
//       return state.map((batch) => {
//         if (batch._id === payload._id) {
//           return { ...payload }
//         }
//         return batch
//       })
//
//
//
//     case STUDENT_ADDED:
//       return state.map((batch) => {
//         if (batch._id === payload._id) {
//           return { ...payload }
//         }
//         return batch
//       })
//
//     case EVALUATION_ADDED:
//       return state.map((batch) => {
//         if (batch._id === payload._id) {
//           return { ...payload }
//         }
//       return batch
//     })
//
//     case STUDENT_REMOVED:
//       // return state.filter((batch) => (batch._id !== payload._id))
//       return state.map((batch) => {
//         if (batch._id === payload._id) {
//           return { ...payload }
//         }
//       return batch
//     })
//
//
//
//
//     case BATCH_CREATED :
//       const newBatch = { ...payload }
//       return [newBatch].concat(state)
//
//
//
//
//     default :
//       return state
//   }
// }
