// import React, { useState } from "react";
// import Modal from "react-modal";

// import { InputText } from "primereact/inputtext";
// import { Button } from "primereact/button";
// import { Form } from "react-bootstrap";

// import ApiService from "../../../api/ApiService";
// import axios from "axios";

// export default function InterviewCreate() {
//   let user = JSON.parse(localStorage.getItem("user"));
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState();
//   const [interview, setInterview] = useState({
//     title: "",
//     recruitmentId: "",
//     description: "",
//     starttime: "",
//     link: "",
//     place: "",
//     userAccountId: "",
//   });

//   async function createInterview(interview) {
//     let data = {
//       recruitmentId: interview.recruitmentId,
//       title: interview.title,
//       description: interview.description,
//       starttime: interview.starttime,
//       link: interview.link,
//       place: interview.place,
//       userAccountId: user.Id,
//     };

//     ApiService.createInterview(data)
//       .then((response) => {
//         console.log(response.data);
//         setMessage("Interview created successfully.");
//         setLoading(false);
//       })
//       .catch((error) => {
//         const resMessage =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         setMessage(resMessage);
//         console.log(error.response);
//         setLoading(false);
//       });
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     setMessage("");
//     setLoading(true);
//     createInterview(interview);
//   };

//   return (
//     <div>
//       <i
//         style={{ float: "right" }}
//         className="fas fa-plus-circle fa-2x"
//         onClick={() => setModalIsOpen(true)}
//       ></i>
//       <Modal
//         isOpen={modalIsOpen}
//         ariaHideApp={false}
//         onRequestClose={() => setModalIsOpen(false)}
//         style={{
//           overlay: {
//             zIndex: "2",
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(191, 191, 191, 0.75)",
//           },
//           content: {
//             position: "absolute",
//             top: "60px",
//             left: "250px",
//             right: "250px",
//             bottom: "120px",
//             border: "1px solid #ccc",
//             background: "#fff",
//             overflow: "auto",
//             WebkitOverflowScrolling: "touch",
//             borderRadius: "4px",
//             outline: "none",
//             padding: "20px",
//           },
//         }}
//       >
//         <h3>Add New interview</h3>
//         <Form onSubmit={submitForm} id="interview-Form">
//           <div className="p-fluid p-formgrid p-grid">
//             {/* Title */}
//             <div className="p-field p-col-12 p-md-6">
//               <label htmlFor="title">Title</label>
//               <InputText
//                 id="title"
//                 type="text"
//                 required
//                 onChange={(e) =>
//                   setInterview({ ...interview, title: e.target.value })
//                 }
//               />
//             </div>
//             <div className="p-field p-col-12 p-md-6">
//               <label htmlFor="title">Recruitment ID</label>
//               <InputText
//                 id="recruiterId"
//                 type="text"
//                 required
//                 onChange={(e) =>
//                   setInterview({ ...interview, recruitmentId: e.target.value })
//                 }
//               />
//             </div>
//             {/* Link */}
//             <div className="p-field p-col-12 p-md-6">
//               <label htmlFor="link">Link</label>
//               <InputText
//                 id="link"
//                 type="text"
//                 required
//                 onChange={(e) =>
//                   setInterview({ ...interview, link: e.target.value })
//                 }
//               />
//             </div>
//             {/* Description */}
//             <div className="p-field p-col-12">
//               <label htmlFor="description">Description</label>
//               <InputText
//                 id="description"
//                 type="text"
//                 rows="4"
//                 required
//                 onChange={(e) =>
//                   setInterview({ ...interview, description: e.target.value })
//                 }
//               />
//             </div>
//             {/* Place */}
//             <div className="p-field p-col-12">
//               <label htmlFor="place">Place</label>
//               <InputText
//                 id="place"
//                 type="text"
//                 rows="4"
//                 required
//                 onChange={(e) =>
//                   setInterview({ ...interview, place: e.target.value })
//                 }
//               />
//             </div>
//             {/* Start time */}
//             <div className="p-field p-col-12 p-md-6">
//               <label htmlFor="starttime">Start Time</label>
//               <InputText
//                 id="starttime"
//                 type="datetime-local"
//                 rows="4"
//                 required
//                 onChange={(e) =>
//                   setInterview({ ...interview, starttime: e.target.value })
//                 }
//               />
//             </div>
//           </div>
//           <Button
//             type="button"
//             label="Close"
//             onClick={() => setModalIsOpen(false)}
//             style={{ marginRight: "20px" }}
//           />
//           <Button type="submit">
//             {loading && (
//               <span className="spinner-border spinner-border-sm"></span>
//             )}
//             Submit
//           </Button>
//           {/* Message after submit */}
//           {message && (
//             <span className="alert alert-danger float-lg-right" role="alert">
//               {message}
//             </span>
//           )}
//         </Form>
//       </Modal>
//     </div>
//   );
// }
