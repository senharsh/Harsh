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
                {/*<div className="grids-area-hny main-cont-wthree-fea row justify-content-center">*/}
                  
                {/*    {SuperCategoryList.map(items =>*/}
                {/*        <div className="card mb-4" >*/}
                {/*            */}{/*<img className="card-img-top" style={{ maxWidth: '100px' }} src="../../Content/img/12.png" alt="" />*/}
                {/*            <h1>*/}
                {/*                <i class={items.logo}></i>*/}
                {/*            </h1>*/}
                {/*            <div className="card-body">*/}
                {/*                <h5 className="card-title text-center">{items.catName}</h5>*/}

                {/*            </div>*/}
                {/*            <NavLink to={"/category/" + items.catId} className="overlay-link"></NavLink>*/}
                           
                {/*        </div>*/}
                {/*    )}*/}
                {/*</div>*/}


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
                        <li class="bg-slider slider-rtl-1 d-flex align-items-center" style={{ background: "url('https://www.papertax.in/assets/images/paper_tax_images/home-slider2.jpg') center center; background-repeat: no-repeat;" }}>
                            <div class="container">
                                <div class="row align-items-center mt-5">
                                    <div class="col-lg-7 col-md-7">
                                        <div class="title-heading mt-4">
                                            <h1 class="display-4 title-white font-weight-bold mb-3">Sit, Relax & <span class="text-primary text-decoration-underline typewrite" data-period="2000" data-type='[ "have a good time!", "have a good time!", "have a good time!", "have a good time!" ]'> <span class="wrap"></span> </span> </h1>
                                            <p class="para-desc text-muted para-dark">You are a taxpayer, it's your right to sit, relax and have a coffee till the time we complete your task.</p>
                                            <div className="mt-4">
                                                <a href={"https://www.papertax.in/products"} className="btn btn-soft-primary">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="bg-slider slider-rtl-3 d-flex align-items-center" style={{ background: "url('https://www.papertax.in/assets/images/paper_tax_images/home-slider3.jpg') center center; background-repeat: no-repeat;" }}>
                            <div className="container">
                                <div className="row align-items-center mt-5">
                                    <div className="col-lg-7 col-md-7">
                                        <div className="title-heading mt-4">
                                            <h1 className="display-4 title-white font-weight-bold mb-3">Tax on <span className="text-primary text-decoration-underline typewrite" data-period="2000" data-type='[ "Fingertips...", "Fingertips...", "Fingertips...", "Fingertips..." ]'> <span className="wrap"></span> </span> </h1>
                                            <p className="para-desc text-muted para-dark">Now don’t worry of managing various login for your family, relatives and friends legal compliances, you can manage all in single app with paper tax.</p>
                                            <div className="mt-4">
                                                <a href={"https://www.papertax.in/products"} className="btn btn-soft-primary">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="bg-slider slider-rtl-4 d-flex align-items-center" style={{ background: "url('https://www.papertax.in/assets/images/paper_tax_images/home-slider4.jpg') center center; background-repeat: no-repeat;" }}>
                            <div className="container">
                                <div className="row align-items-center mt-5">
                                    <div className="col-lg-7 col-md-7">
                                        <div className="title-heading mt-4">
                                            <h1 className="display-4 title-white font-weight-bold mb-3">Tax on <span className="text-primary text-decoration-underline typewrite" data-period="2000" data-type='[ "Fingertips...", "Fingertips...", "Fingertips...", "Fingertips..." ]'> <span className="wrap"></span> </span> </h1>
                                            <p className="para-desc text-muted para-dark">With the exclusive website and mobile app loaded with 200+ legal services, just fill your cart with what all you need and you are all set.</p>
                                            <div className="mt-4">
                                                <a href={"https://www.papertax.in/products"} className="btn btn-soft-primary">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="bg-slider slider-rtl-5 d-flex align-items-center" style={{ background: "url('https://www.papertax.in/assets/images/paper_tax_images/home-slider5.jpg') center center; background-repeat: no-repeat;" }}>
                            <div className="container">
                                <div className="row align-items-center mt-5">
                                    <div className="col-lg-7 col-md-7">
                                        <div className="title-heading mt-4">
                                            <h1 className="display-4 title-white font-weight-bold mb-3">You are in a <span className="text-primary text-decoration-underline typewrite" data-period="2000" data-type='[ "good company!", "good company!", "good company!", "good company!" ]'> <span className="wrap"></span> </span> </h1>
                                            <p className="para-desc text-muted para-dark">Lacs of tax returns filed till date with almost 98% accuracy qualifies us to process more than INR 15 crore tax refund for our clients and the good news is “numbers are increasing daily".</p>
                                            <div className="mt-4">
                                                <a href={"https://www.papertax.in/products"} className="btn btn-soft-primary">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>


            </div>

        </>


        );
       
    }

}

export default Home;