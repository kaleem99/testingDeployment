// import TinCan from "tincanjs";
// import ReduxStore from "./reducers/index";
 
// var tincan = new TinCan({ 
//   recordStores: [
//     {
//       endpoint: "http://ec2-3-86-177-79.compute-1.amazonaws.com/data/xAPI",
//       username: "f8b44124387725ae394f29bdd182b6fe2a2c133f",
//       password: "d627f58765d0caad3dde4716278d815b5aabefae",
//       allowFail: false,
//     },
//   ],
// });

// var sendxAPI = (statement) => {
//   tincan.sendStatement(
//     {
//       actor: {
//         mbox: "mailto:example.user@example.com",
//       },
//       verb: {
//         id: statement.verb.address ? statement.verb.address : statement.verb,
//         // This adds a description prop if a description is defined
//         ...(statement.verb.description && {
//           display: {
//             und: statement.verb.description,
//           },
//         }),
//       },
//       target: {
//         id: window.location.href,
//         definition: {
//           name: {
//             "en-US": statement.context,
//           },
//           //type: "http://adlnet.gov/expapi/activities/simulation"
//         },
//       },
//       ...(statement.result && {
//         result: {
//           success: statement.result.success,
//           response:
//             statement.result.hasOwnProperty("response") &&
//             statement.result.response !== null
//               ? statement.result.response.toString()
//               : "",
//         },
//       }),
//       context: {
//         registration: ReduxStore.scene.uuid,
//         contextActivities: {
//           parent: {
//             id: window.location.href,
//             definition: {
//               name: {
//                 "en-US": "Lab Master",
//               },
//               type: "http://adlnet.gov/expapi/activities/simulation",
//             },
//           },
//         },
//         language: "en",
//       },
//     },
//     function (err, result) {
//       //Handle any errors here. This code just outputs the result to the page.
//       //console.log(err, null, 4);
//       //console.log(result, null, 4);
//     }
//   );
// };

// export default sendxAPI;
