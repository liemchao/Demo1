import React, { useState, useEffect } from "react";
import ApiService from "../../../../api/apiService";
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';



const AppointmentWaList = () => {
    const [data, setData] = useState([]);

    const [loadingData, setLoadingData] = useState(true);
    const [totalRecords, setTotalRecords] = useState();
    const [totalPage, setTotalPage] = useState();
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [show, setShow] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");
    // const [fileMsg, setFileMsg] = useState("");
    const [pageInputTooltip, setPageInputTooltip] = useState(
        "Press 'Enter' key to go to this page."
    );




    async function getAppoinment1() {
        await ApiService.getAppoinmentWa(currentPage, rows)
            .then((response) => {
                // check if the data is populated
                const dataRes = response.data.data
                const listDataSet = [...dataRes];
                listDataSet.map((obj, index) => {
                    const count = ++index;
                    obj['indexNumber'] = count

                })
                setData(listDataSet);
                setTotalRecords(response.data.totalRow);
                setLoadingData(false)
            })
            .catch((error) => {
                if (error.response) {

                } else if (error.request) {

                } else {

                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    }


    useEffect(() => {
        setLoadingData(true);
        getAppoinment1();
    }, [currentPage]);



    const refreshList = () => {
        setLoadingData(true);
        getAppoinment1();
    };



    const customRole = (rowData) => {
        return <div className="badge badge-primary mr-2">{rowData.role.roleName}</div>;
    };

    const EmployeeName = (rowData) => {
        if (rowData.lead.employee == null) {
    
          return <div className="badge badge-info mr-2">Need to</div>
        } else {
          return <div className="badge badge-warning mr-2">In Process</div>
    
        }
    
    
      }
      const TimeCreate = (rowData) => {
    
        return <p style={{ marginTop: "12%" }}>{rowData.startDate} {rowData.startTime}</p>
    
    
    
      }
      const AppointmentStatus = (rowData) => {
        if (rowData.appointmentStatus === "Waiting") {
            return <div className="badge badge-primary mr-2">Waiting</div>
        }
    }
 

    const customButton = (rowData) => {
        return (
          <div style={{ display: "flex" }}>
            {/* Detail */}
            <Link
              style={{ paddingRight: "-10%" }}
              to={{
                pathname: "/Dashboard/Manager/AppointmentDetail",
                state: rowData,
              }}
            >
              <Button><FontAwesomeIcon icon={faClipboardList} /></Button>
            </Link>
          </div>
        );
      };

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
        setCurrentPage(event.page + 1);
    };

    const onPageInputKeyDown = (event, options, totalPage) => {
        if (event.key === "Enter") {
            const page = parseInt(currentPage);
            if (page < 0 || page > totalPage) {
                setPageInputTooltip(`Value must be between 1 and ${totalPage}.`);
            } else {
                const first = currentPage ? options.rows * (page - 1) : 0;
                setFirst(first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };

   
    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    };

    return (
        <>
            {data ? (
                <div id="wrapper">
                    <div className="container-fluid">
                        <div className="card shadow mb-4">
                            <DataTable
                                value={data}
                                loading={loadingData}
                                responsiveLayout="scroll"
                            >
                                <Column header="No" field="indexNumber" />
                                <Column header="Title" field="activityType" />
                                <Column style={{ width: "14%" }} header="Description" field="description" />
                                <Column header="Start Date" body={TimeCreate} />
                                <Column header="End Date" field="endDate" />
                                <Column header="Employee" body={EmployeeName} />
                                <Column header="Status" body={AppointmentStatus} />
                                <Column header="Action" body={customButton} />
                            </DataTable>
                            <Paginator
                                paginator
                                // template={template}
                                first={first}
                                rows={rows}
                                totalRecords={totalRecords}
                                onPageChange={onPageChange}
                                className="p-jc-end p-my-3"
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <p>No data to show...</p>

            )}
        </>
    );
};

export default AppointmentWaList;