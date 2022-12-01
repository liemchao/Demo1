import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import PageHeading from "../../../components/PageHeading";
import ApiService from "../../../api/apiService";
import { Button } from "react-bootstrap";


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

    await ApiService.getEmployee()
      .then((response) => {

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


            <div className="col-lg-4">
              <div className="card">



                <div className="p-field p-col-8 p-md-4">
                  <label htmlFor="role">Empoyee </label>
                  <select
                    onChange={(e) => setId(e.currentTarget.value)}
                  >
                    {
                      data.map((x, y) =>
                        <option key={y} value={x.id}>{x.fullname}</option>)
                    }



                  </select>
                </div>

                <Button style={{ marginTop: 300 }} onClick={AssAppointment} >Assgin Appointment</Button>
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
            </div>


            <div className="col-lg-8">
              <div className="card">
                <Tabs
                  defaultActiveKey="Detail"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Detail" title="Appoint Detail">
                    <div className="card-body">

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
                          <h6 className="mb-0">FullName</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.fullname}</p>
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
                  <Tab eventKey="Product" title="Appoint Time">
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
                          <h6 className="mb-0">startDate</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.startDate}</p>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Start Time</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.startTime}</p>
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
                          <h6 className="mb-0">AbortReason</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.abortReason}</p>
                        </div>
                      </div>

                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-9 text-secondary">
                        {!Appointment.acceptedDate ? (
                          <div className="badge badge-primary mr-2">

                          </div>
                        ) : (
                          <div className="badge badge-danger mr-2">
                            <p>{Appointment.acceptedDate}</p>
                          </div>
                        )}
                      </div>

                    </div>

                  </Tab>

                  <Tab eventKey="Status" title="Employee">
                    <div className="card-body">

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
                          <h6 className="mb-0">FullName</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.fullname}</p>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">isFurniture</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {Appointment.isFurniture ? (
                            <div className="badge badge-primary mr-2">
                              Active
                            </div>
                          ) : (
                            <div className="badge badge-danger mr-2">
                              Not Avaliable
                            </div>
                          )}
                        </div>
                      </div>


                    </div>
                  </Tab>



                  <Tab eventKey="Lead" title="Lead">
                    <div className="card-body">

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">CompanyName</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.lead.companyName}</p>
                        </div>
                      </div>


                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">FullName</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{Appointment.lead.fullname}</p>
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
                          <p>{Appointment.product.name}</p>
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


                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Price(VND)</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p className="">{Appointment.product.price}</p>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">NoFLoor</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p className="">{Appointment.product.noFloor}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">NoFLoor</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p className="">{Appointment.product.noFloor}</p>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Street</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p className="">{Appointment.product.street}</p>
                        </div>
                      </div>




                    </div>


                  </Tab>



                </Tabs>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointDetail;