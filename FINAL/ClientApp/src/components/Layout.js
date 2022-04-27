import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (

            <div>

             
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a class="navbar-brand" href="#">
                        <img src="assets/img/logo.png" alt="Dhar Info"/>
                    </a>
                        <button class="navbar-toggler" type="button" data-trigger="#main_nav">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="navbar-collapse" id="main_nav">
                            <div class="offcanvas-header mt-3">
                                <button type="button" class="btn-close float-right"><i class="fas fa-times"></i></button>
                                <h6 class="py-2 text-white"><i class="fas fa-phone-square mr-2"></i>+91 999 38 111 22</h6>
                            </div>
                            <ul class="navbar-nav">
                                <li class="nav-item active"> <a class="nav-link" href="#"><i class="fas fa-home mr-2 listing"></i>Home </a> </li>
                                <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-bus mr-2 listing"></i> Bus Infomation </a></li>
                                <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-users mr-2 listing"></i> Social Group</a></li>
                                <li class="nav-item"><a class="nav-link" href="#"> <i class="fas fa-phone mr-2 listing"></i>Important Contact</a></li>
                            </ul>
                            <div class="dropdown-divider"></div>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item"><a id="openmodel" class="nav-link" data-toggle="modal" data-target="#RegModel"><i class="fas fa-user mr-2 listing"></i>Add Listing </a></li>
                            </ul>
                        </div> 
                    </nav>
                    <div class="search-bar mt-md-4">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 mx-auto">
                                    <h2 class="searchtitle">Search Anything Near You!</h2>
                                    <div class="p-1 bg-light shadow-sm">
                                        <div class="input-group">
                                            <input type="search" placeholder="search anythig here" class="form-control border-0 bg-light" />
                                                <div class="input-group-append">
                                                    <div class="btn-group">
                                                        <button type="button" class="btn btn-outline-secondary dropdown-toggle smallcreeen" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Business Directory
                                                        </button>
                                                        <div class="dropdown-menu">
                                                            <a class="dropdown-item" href="#"><i class="fa fa-briefcase mr-2" aria-hidden="true"></i>Business</a>
                                                            <a class="dropdown-item" href="#"><i class="fa fa-graduation-cap mr-2" aria-hidden="true"></i>Education</a>
                                                            <a class="dropdown-item" href="#"><i class="fa fa-medkit mr-2" aria-hidden="true"></i>Health & Medical</a>
                                                            <a class="dropdown-item" href="#"><i class="fa fa-car mr-2" aria-hidden="true"></i>Automobiles</a>
                                                            <a class="dropdown-item" href="#"><i class="fa fa-calendar mr-2" aria-hidden="true"></i>Events & Functions</a>
                                                            <a class="dropdown-item" href="#"><i class="fa fa-building mr-2" aria-hidden="true"></i>Offices</a>
                                                            <a class="dropdown-item" href="#"><i class="fa fa-wrench mr-2" aria-hidden="true"></i>Machines & Tools</a>
                                                            <a class="dropdown-item" href="#"><i class="fa fa-bus mr-2" aria-hidden="true"></i>Transport & Travels</a>
                                                            <a class="dropdown-item" href="#"><i class="fa fa-users mr-2" aria-hidden="true"></i>Service Providers</a>
                                                            <a class="dropdown-item" href="#"><i class="fa fa-city mr-2" aria-hidden="true"></i>Building & Construction</a>
                                                            <div class="dropdown-divider"></div>
                                                            <a class="dropdown-item" href="#"><i class="fa fa-align-justify mr-2" aria-hidden="true"></i>All Category</a>
                                                        </div>
                                                    </div>
                                                    <div class="input-group-append">
                                                        <button type="submit" class="btn btn-link"><i class="fa fa-search" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>


                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="../../Content/img/s1.jpg" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../../Content/img/s2.jpg" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="../../Content/img/s3.jpg" alt="Third slide" />
                        </div>
                    </div>
               </div>               
                                    
                                    <div class="modal fade" id="RegModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Registration</h5>
                                                    <button id="closemdl" type="button" class="" data-dismiss="modal" aria-label=" "> <span aria-hidden="true">&times;</span> </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div id="svg_wrap">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                    <Container>
                        {this.props.children}
                        </Container>
           </div>
                   
                );
  }
}
