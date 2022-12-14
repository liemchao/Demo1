import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import PageHeading from "../../../components/PageHeading";
import ApiService from "../../../api/apiService";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons'
import { faStepBackward } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const AppointDetail = () => {
  const { state } = useLocation();
  const [Appointment, setAppointment] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);



  async function AssAppointment() {
    setLoading(true);

    let data = {
      id: Appointment.id,
      employeeId: id,

    };


    await ApiService.AssAppointment(data)
      .then((response) => {
        setSuccessMsg("Assing Appoint successfull");
        setLoading(false);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setErrMsg(resMessage);
        setLoading(false);
      });
  }



  async function getAccountList() {
    setLoadingData(true);

    await ApiService.getEmployeeAppointment()
      .then((response) => {
            console.log(response.data.data)
        const dataRes = response.data.data
        const listDataSet = [...dataRes];
        listDataSet.map((obj, index) => {
          const count = ++index;
          obj['indexNumber'] = count

        })

        setData(listDataSet);

        setLoadingData(false);
      })
      .catch((error) => {
        if (error.response) {
          // get response with a status code not in range 2xx
          console.log(error.response.data.data);
          console.log(error.response.data.status);
          console.log(error.response.data.headers);
        } else if (error.request) {
          // no response
          console.log(error.request);
        } else {
          // Something wrong in setting up the request
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  }
  const customButton1 = (rowData) => {

  
    return <input id={rowData.id} name="firt" style={{marginLeft:"10%"}} type="radio" />
 
  
  
}

  useEffect(() => {
    if (typeof state != "undefined") {
      localStorage.setItem("Temp", JSON.stringify(state));
    }
    const storageEvent = JSON.parse(localStorage.getItem("Temp"));
    setAppointment(storageEvent);
    getAccountList();
  }, []);


  return (
    <div>
      <PageHeading title="Appointmnet Detail" />
      {loadingData ? (
        <p>Loading, please wait...</p>
      ) : (
       
        
        <div className="main-body">
       
           
          <div className="row">
   
            <div className="col-lg-12">
              <div className="card">
                <Tabs
                  defaultActiveKey="Detail"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Detail" title="Appointment Detail">
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.fullname}
                            <Button style={{ marginLeft: "10%" }}>
                              <FontAwesomeIcon icon={faExternalLinkSquare} />
                            </Button>
                          </p>


                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.name}</p>
                        </div>
                      </div>



                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.phone}</p>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.email}</p>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">ActivityType</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.activityType}</p>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Description</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.description}</p>
                        </div>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="Product" title="Appointment Time">
                    <div className="card-body">

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Create Date</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.createDate}</p>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">StartDate</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.startDate}{Appointment.startTime}</p>
                        </div>
                      </div>


                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">End Date</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.endDate}</p>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Accepted Day</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.acceptedTime}</p>
                        </div>
                      </div>

                    </div>


                  </Tab>
                  <Tab eventKey="Employe" title="Employee">

                  {
                      Appointment.employee === null ? (
                        <div style={{ textAlign: "center", fontSize: 30 }}>
                          <h1 className="badge badge-danger mr-2"> The appointment not have employee manage </h1>
                        </div>
                      ) : (
                        <div className="card-body">
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Name:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {Appointment.employee.fullname}
                               <Button style={{ marginLeft: "10%" }}>
                              <FontAwesomeIcon icon={faExternalLinkSquare} />
                            </Button>
                            </div>
                          </div>

                          {/* <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Gender:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {Appointment.employee.gender ? (
                                <div className="col-sm-7text-secondary">Male

                                </div>

                              ) : (
                                <div className="col-sm-7text-secondary">Female
                                </div>

                              )

                              }
                            </div>
                          </div> */}

                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Email:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <p>{Appointment.employee.email}</p>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Phone:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <p>{Appointment.employee.phone}</p>
                            </div>
                          </div>

                        </div>)

                    }
                  </Tab>





                  <Tab eventKey="Lead" title="Lead">
                    <div className="card-body">

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">FullName</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.lead.fullname}
                            <Button style={{ marginLeft: "10%" }}>
                              <FontAwesomeIcon icon={faExternalLinkSquare} />
                            </Button>

                          </p>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Status Lead</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p className="badge badge-primary mr-2">{Appointment.lead.leadStatus}</p>
                        </div>
                      </div>




                    </div>
                  </Tab>

                  <Tab eventKey="ProductDetail" title="ProductDetail">
                    <div className="card-body">


                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Product Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.product.name}
                            <Button style={{ marginLeft: "10%" }}>
                              <FontAwesomeIcon icon={faExternalLinkSquare} />
                            </Button>
                          </p>
                        </div>
                      </div>


                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">District</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.product.district}</p>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Province</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.product.province}</p>
                        </div>
                      </div>


                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Product Status</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p className="badge badge-primary mr-2">{Appointment.product.productStatus}</p>
                        </div>
                      </div>

                    </div>


                  </Tab>



                </Tabs>
              </div>
            </div>
          
            {Appointment.employee==null?(
             <div className="col-lg-12">
                <div className="card">

<Button   style={{ float:"right"}} onClick={AssAppointment} >Assign Appointment</Button>
     {loading && (
       <span className="spinner-border spinner-border-sm float-lg-right"></span>
     )}
     {/* Message after submit */}
     {errMsg && (
       <span className="alert alert-danger float-lg-right" role="alert">
         {errMsg}
       </span>
     )}
     {successMsg && (
       <span className="alert alert-success float-lg-right" role="alert">
         {successMsg}
       </span>
     )}
</div>
             <div className="card">

                 <label htmlFor="role">Empoyee List </label>
                 <DataTable     style={{overflow:"scroll",maxHeight: "27rem"}}
                  value={data}
                  loading={loadingData}
                  responsiveLayout="scroll"
                >
                  <Column header="Employee Name" field="fullname"/>
                  <Column style={{width: "22%"}}header="Email" field="email"/>
                  <Column style={{width: "22%"}}header="Email" field="email"/>
                  <Column  header="phone" field="phone"/>
                  <Column style={{textAlign: "center"}}header="Number Appoinment Doing" field="numberOfAppoinmentOnDoing"/>
                  <Column header="Action" body={customButton1} />
                </DataTable>
               </div>

              

             </div>

          ):(<></>)}
          </div>
        </div>
      )}
        <div>
        <Link 
        to="/Dashboard/Manager/AppointmentList"
        >
         <Button style={{marginTop:"2%"}}>
          <FontAwesomeIcon icon={faStepBackward} /> Back to
           
         </Button>
        </Link>
      </div>
    </div>
  );
};

export default AppointDetail;