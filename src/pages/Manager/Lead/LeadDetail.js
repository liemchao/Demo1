import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import PageHeading from "../../../components/PageHeading";
import OpportunityLeadList from "./DetailLead/Oppo";
import AppointLeadList from "./DetailLead/AppoinmentLead";


const LeadDetail = () => {
  const { state } = useLocation();
  const [account, setAccount] = useState([]);
  const [work, setWork] = useState([]);
  const [totalRecords, setTotalRecords] = useState();
  const [totalPage, setTotalPage] = useState();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (typeof state != "undefined") {
      localStorage.setItem("Temp", JSON.stringify(state));
    }
    const storageEvent = JSON.parse(localStorage.getItem("Temp"));
    setAccount(storageEvent);
    setLoadingData(false);
  }, []);

  return (
    <div>
      <PageHeading title="Lead Detail" />
      {loadingData ? (
        <p>Loading, please wait...</p>
      ) : (
        <div className="main-body">
          <div className="row">
            <div className="col-lg-4">

            </div>
            <div className="col-lg-8">
              <div className="card">
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="profile" title="Profile">
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Name:</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {account.fullname}
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Gender:</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {account.gender ? (
                            <div className="col-sm-7text-secondary">Male

                            </div>

                          ) : (
                            <div className="col-sm-7text-secondary">Female
                            </div>

                          )

                          }
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email:</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{account.email}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Phone:</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{account.phone}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Lead Type: </h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{account.leadType}</p>
                        </div>
                      </div>
                      {
                        account.companyName == "" ? (<>

                        </>) : (

                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Company Name:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <p>{account.companyName}</p>
                            </div>
                          </div>
                        )
                      }
                      {/* <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Gender:</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{account.gender}</p>
                        </div>
                      </div> */}
                      {/* <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Birth Day:</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{account.birthday}</p>
                        </div>
                      </div> */}
                      {
                        account.dob == null ? (<>

                        </>) : (

                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Day of Brith:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <p>{(account.dob).slice(0, 10)}</p>
                            </div>
                          </div>
                        )
                      }
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Create Day</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{(account.createDate).slice(0, 10)}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Lead Status</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {account.leadStatus === "New" ? (
                            <div className="badge badge-warning mr-2">
                              New
                            </div>
                          ) : (
                            <div className="badge badge-success mr-2">
                              {account.leadStatus}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Tab>

                  <Tab eventKey="account" title="Account">
                    {
                      account.account === null ? (
                        <div style={{ textAlign: "center", fontSize: 30 }}>
                          <h1 className="badge badge-danger mr-2"> Lead has not registered an account in the system</h1>
                        </div>
                      ) : (
                        <div className="card-body">
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Name:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {account.account.fullname}
                            </div>
                          </div>

                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Gender:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {account.account.gender ? (
                                <div className="col-sm-7text-secondary">Male

                                </div>

                              ) : (
                                <div className="col-sm-7text-secondary">Female
                                </div>

                              )

                              }
                            </div>
                          </div>

                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Email:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <p>{account.account.email}</p>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Phone:</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              <p>{account.account.phone}</p>
                            </div>
                          </div>

                        </div>)

                    }

                  </Tab>
                  <Tab eventKey="appointment" title="Appointment">
                    <AppointLeadList rowData={account} />

                  </Tab>

                  <Tab eventKey="opportunity" title="Opportunity">

                    <OpportunityLeadList rowData={account} />


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

export default LeadDetail;
