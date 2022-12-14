import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, Tab , Figure,Button} from "react-bootstrap";

import ApiService from "../../../../api/apiService";

import PageHeading from "../../../../components/PageHeading";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { faStepBackward } from '@fortawesome/free-solid-svg-icons'

const ProductHistory = (rowData) => {
  const { state } = useLocation();
  const [account, setAccount] = useState([]);
  const [work, setWork] = useState([]);
  const [totalRecords, setTotalRecords] = useState();
  const [totalPage, setTotalPage] = useState();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [id, setID] = useState(rowData.location.rowData);


   async function getLeadInfo() {
    console.log(id)
      


        await ApiService.getProductById(id)
          .then((response) => {
            // console.log(response);
            const dataRes = response.data.data
            const listDataSet = [...dataRes];
           
            console.log(listDataSet)
         
            setAccount(listDataSet);
       
            // console.log(toString(listDataSet.productImages.url));
            // setTotalPage(response.data.totalPage);
            // setTotalRecords(response.data.totalEle);
            // you tell it that you had the result
        
          })
          .catch((error) => {
            if (error.response) {
              // get response with a status code not in range 2xx
              // console.log(error.response.data.data);
              // console.log(error.response.data.status);
              // console.log(error.response.data.headers);
            } else if (error.request) {
              // no response
              console.log(error.request);
            } else {
              // Something wrong in setting up the request
              // console.log("Error", error.message);
            }
            console.log(error.config);
          });
      }

  useEffect(() => {
    getLeadInfo()
  }, []);

  return (
    <div>
      <PageHeading title="Product Detail" />
      {account.length==0 ? (
        <p>Loading, please wait...</p>
      ) : (
        <div className="main-body">
         <div className="row">
              <div className="col-lg-4">
            
              {
                    account[0].productImages.map((x, y) => 
                    <div style={{ textAlign:"center"}}className="card">
                    <Figure style={{margin:"2%"}}>
                    <Figure.Image
                      width={180}
                      height={180}
                      alt="171x180"
                      src={x.url}
                      className="img-thumbnail"
                      
                    />
                  </Figure>
                   </div>
                    )}
            
                
                
              </div>
              <div className="col-lg-8">
                <div className="card">
                  <Tabs
                    defaultActiveKey="Detail"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="Detail" title="Product Detail">
                      <div className="card-body">

                      <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].name}</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Category</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].category.productCategoryName}</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Price</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].price}(VND)</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Description</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <textarea>{account[0].description}</textarea>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Width</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].width}m</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Length</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].length}m</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Area</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].area}m&#178;</p>
                          </div>
                        </div>

                      </div>
                    </Tab>
                    <Tab eventKey="Product" title="Product Local">
                      <div className="card-body">

                      <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Street</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].street}</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">District</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].district}</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Province</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].province}</p>
                          </div>
                        </div>

                       
                      </div>
                    </Tab>

                    <Tab eventKey="Status" title="Product Status">
                      <div className="card-body">

                      <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Number of Bedroom</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].noBedroom}</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Number of Toilet</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].noToilet}</p>
                          </div>
                        </div>


                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Number of Floor</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].noFloor}</p>
                          </div>
                        </div>


                        <div className="row mb-3">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Facade</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            <p>{account[0].facade}</p>
                          </div>
                        </div>

                        <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Furniture</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          {account[0].isFurniture ? (
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
                  
                   
                  </Tabs>
                </div>
              </div>
            </div>
            </div>
      )}
         <div>
      <Link 
      to="/Dashboard/Manager/AccountList"
      >
       <Button style={{marginTop:"2%"}}>
        <FontAwesomeIcon icon={faStepBackward} /> Back to
         
       </Button>
      </Link>
    </div>
    </div>
   
  );
};

export default ProductHistory;
