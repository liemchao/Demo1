import React, { useState, useEffect } from "react";
import ApiService from "../../../../api/apiService";
import { Card ,Button } from "react-bootstrap";


const AppointLeadList = ({ rowData }) => {
    const [data, setData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);


    async function getLeadAppointment() {
        await ApiService.getAppointLead(rowData.id)
            .then((response) => {
                setData(response.data.data);
            })
            .catch((error) => {
                if (error.response) {
                    
                    setData([])
                }
               
            });
    }


    useEffect(() => {
        getLeadAppointment();
    }, [currentPage]);




    return (
        <>
            {!data.length==0 ? (
                <div id="wrapper"  style={{overflow:"scroll",maxHeight: "31rem", marginLeft:"20%"}}>
                    <div className="container-fluid">
                        <div className="card shadow mb-4">
                            {
                                   data.map((x, y) =>
                                   
                                   <Card style={{ width: '18rem',marginBottom:"1%"}}>
                                   <Card.Body>
                                     <Card.Title>Appointment</Card.Title>
                                     <Card.Text>
                                       Some quick example text to build on the card title and make up the
                                       bulk of the card's content.
                                     </Card.Text>
                                     <Button variant="primary">View Appointment</Button>
                                   </Card.Body>
                                 </Card>
                                  
                                   )
                               }


                        </div>
                    </div>
                </div>
            ) : (
                <div style={{ textAlign: "center", fontSize: 30 }}>
                <h1 className="badge badge-danger mr-2"> Lead has not  an appointment  in the system</h1>
              </div>

            )}
        </>
    );
};

export default AppointLeadList;






