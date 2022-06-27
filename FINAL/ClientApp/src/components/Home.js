import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CategoryData } from '../service/Service';
export class Home extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
          SuperCategoryList: [],
          loading: true
      };
      
  }
  
    isShowPopup = (status) => {
        this.setState({ showModalPopup: status });
    };
  componentDidMount() {
      this.GetAllCategoryData();
    }
   
   
    GetAllCategoryData() {
        CategoryData().then(res => {
            let response = res;
            if (response.message !== Error) {
                this.setState({ SuperCategoryList: response.result});
                this.setState({ loading: false }); // hide loader after load data
            }
        });
    }
 


    render() {
        const { SuperCategoryList } = this.state;
        console.log(SuperCategoryList);
    return (
        <>
            <div >
                <div class="modal fade" id="useItWalletPopUp" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" style={{width: "30%;"}} role="document">
                        <div class="modal-content rounded shadow border-0">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Cart Details</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <input type="hidden" id="isWalletUse" value="0"/>
                                    <div class="bg-white p-2 rounded box-shadow" id="CartdynamicUseWalletDiv">
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                <section class="main-slider mainSection" id="home">
                    <ul class="slides">
                        <li class="bg-slider slider-rtl-2 d-flex align-items-center" style={{ background: "url('https://www.papertax.in/assets/images/paper_tax_images/home-slider1.png') center center;" }}>
                            <div class="container">
                                <div class="row align-items-center mt-5">
                                    <div class="col-lg-7 col-md-7">
                                        <div class="title-heading mt-4">
                                            <h1 class="display-4 title-white font-weight-bold mb-3">Let's file tax <span class="text-primary text-decoration-underline typewrite" data-period="2000" data-type='[ "easily", "easily", "easily", "easily" ]'> <span class="wrap"></span> </span> </h1>
                                            <p class="para-desc text-muted para-dark">Now manage your taxes & business legal compliances with India's first e-commerce platform offering legal services, just choose from the 200+ services and get going..</p>
                                            <div class="mt-4">
                                                <a href={"https://www.papertax.in/products"} class="btn btn-soft-primary">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="section" id="homeProductListing">
                    <div className="container mt-100 mt-60">
                        <div className="row">
                            <div className="col-12">
                                <h5 className="mb-0">Top Categories</h5>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            {SuperCategoryList.map(items =>
                            <div className="col-lg-2 col-md-4 col-6 mt-4 pt-2 ">
                                <div className="card explore-feature border-0 rounded text-center bg-white">
                                    <div className="card-body">
                                        <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                                <i class={items.logo}></i>
                                        </div>
                                        <div className="content mt-3">
                                                <h6 className="mb-0">{items.catName}</h6>
                                        </div>
                                    </div>
                                    </div>
                                    <NavLink to={"/category/" + items.catId} className="overlay-link"></NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h5 className="mb-0">Deals Of The Day</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2 searchingItem">
                                <div className="card shop-list border-0 position-relative">
                                    <div className="ribbon ribbon-left ribbon-danger overflow-hidden"><span className="text-center d-block shadow small h6">Hot</span></div>
                                    <div className="shop-image position-relative overflow-hidden rounded shadow">
                                        <a href={"https://www.papertax.in/get-product-details/NQ==/GST Registration"}><img src="https://www.papertax.in/uploads/product_img/1618657647508176218.jpg" className="img-fluid" alt="GST Registration"/></a>
                                    </div>
                                        <div className="card-body content pt-4 p-2">
                                        <a href={"https://www.papertax.in/get-product-details/NQ==/GST Registration"} className="text-dark product-name h6">GST Registration</a>
                                            <div className="justify-content-between mt-1">
                                                <h6 className="text-muted small font-italic mb-0 mt-1">&#8377;1000.00 <del className="text-danger ml-2">&#8377;1,100.00 </del> </h6>
                                                <ul className="list-unstyled text-warning mb-0">
                                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6 col-12 mt-4 pt-2">
                                <div className="card work-process border-0">
                                    <div className="card-body">
                                    <a href={"https://www.papertax.in/products"} style={{ float: "right;" }} className="badge badge-pill badge-soft-primary">View more <i className="mdi mdi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="container-fluid mt-100 mt-60">
                        <div className="rounded py-5" style={{ background: "url('https://www.papertax.in/assets/images/paper_tax_images/home-page-banner.jpg') fixed;background-position: 100% 0%;background-repeat: no-repeat;" }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="section-title">
                                                    <h2 className="font-weight-bold mb-4">Enjoy hefty discounts on various services.discount upto 50% </h2>
                                                        <p className="para-desc para-white text-muted mb-0">GST Registration, GST Returns, New Company Registration, Income Tax Returns, and many other services are now cheaper and affordable with Paper Tax, Shop now!.</p>
                                                        <div className="mt-4">
                                                <a href={"https://www.papertax.in/products"} className="btn btn-primary">Shop Now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>


            </div>

        </>


        );
       
    }

}

export default Home;