import React, { Component } from 'react';
import Helmet from 'react-helmet';

class CreateInfoCup extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
                    <div className="container-fluid">
                        {/* Toggler */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* User */}
                        <ul className="nav align-items-center d-md-none">
                            <li className="nav-item dropdown">
                                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                                        <h1>Lucas</h1>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                    <div className=" dropdown-header noti-title">
                                        <h6 className="text-overflow m-0">Bem vindo!</h6>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <a href="#!" className="dropdown-item">
                                        <i className="ni ni-user-run"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                        {/* Collapse */}
                        <div className="collapse navbar-collapse " id="sidenav-collapse-main">
                        {/* Collapse header */}
                        <div className="navbar-collapse-header d-md-none">
                                <div className="row">
                                    <div className="col-6 collapse-brand"></div>
                                    <div className="col-6 collapse-close">
                                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </div>
                        </div>

                        {/* Navigation */}
                        <ul className="navbar-nav">
                            <li className="nav-item  active">
                                <a className=" nav-link active " href=" ./index.html"> 
                                    <i className="ni ni-tv-2 text-primary"></i> 
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="./examples/icons.html">
                                    <i className="ni ni-planet text-blue"></i> 
                                    Icons
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="./examples/maps.html">
                                    <i className="ni ni-pin-3 text-orange"></i>
                                    Maps
                                </a>
                            </li>
                        </ul>

                    </div>
             </div>
        </nav>
            <div className="main-content">
                {/* Navbar */}
                <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                    <div className="container-fluid">
                        {/* Brand */}
                        <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="./index.html"></a>

                        {/* User */}
                        <ul className="navbar-nav align-items-center d-none d-md-flex">
                            <li className="nav-item dropdown">
                                <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="media align-items-center">
                                        <div className="media-body ml-2 d-none d-lg-block">
                                            <span className="mb-0 text-sm  font-weight-bold">Lucas</span>
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                                    <div className=" dropdown-header noti-title">
                                        <h6 className="text-overflow m-0">Bem vindo!</h6>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <a href="#!" className="dropdown-item">
                                        <i className="ni ni-user-run"></i>
                                        <span>Logout</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* End Navbar */}
                {/* Header */}
                <div className="header  pb-8 pt-5 pt-md-8">
                    <div className="container-fluid">
                        {/* Table */}
                        <form className="pt-6">
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-alternative" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-alternative" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-alternative" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-alternative" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-alternative" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-alternative" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                            </div>
                            </div>

                            <div className="text-center">
                                <button type="button" className="btn btn-success mt-3 float-left">Registrar</button>
                                <a className="btn btn-info mt-3 float-left" href="/acai/list">
                                    Dashboard
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Helmet>
                <script src="%PUBLIC_URL%/../vendor/plugins/jquery/dist/jquery.min.js"></script>
                <script src="%PUBLIC_URL%/../vendor/plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            </Helmet>
        </div>       
        );
    }

}
export default CreateInfoCup;