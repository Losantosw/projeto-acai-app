import React, { Component } from 'react';
import Helmet from 'react-helmet';

class ListAdditional extends Component {

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
                                        Acai
                                </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="./examples/icons.html">
                                        <i className="ni ni-planet text-blue"></i>
                                        Info Copo
                                </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="./examples/maps.html">
                                        <i className="ni ni-pin-3 text-orange"></i>
                                        Adicional
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
                            <div className="text-center">
                                <a type="button" className="btn btn-success mt-3 float-left" href="/dashboard">Dasboard</a>
                            </div>
                            
                            {/* <!-- Table --> */}
                            <div className="table-responsive">
                                <div>
                                    <table className="table align-items-center">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">
                                                    Nome Adicional
                                                </th>
                                                <th scope="col">
                                                    Preço Adicional
                                                </th>
                                                <th scope="col">
                                                    
                                                </th>
                                                <th scope="col">
                                                    Ações
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="list">

                                            <tr>
                                                <th scope="row" className="name">
                                                    <div className="media align-items-center">
                                                        <div className="media-body">
                                                            <span className="mb-0 text-sm">Argon Design System</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th scope="row" className="name">
                                                    <div className="media align-items-center">
                                                        <div className="media-body">
                                                            <span className="mb-0 text-sm">Argon Design System</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th scope="row" className="name">
                                                    <div className="media align-items-center">
                                                        <div className="media-body">
                                                            <span className="mb-0 text-sm"></span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <th scope="row" className="name">
                                                    <div className="media align-items-center">
                                                        <div className="media-body">
                                                            <span className="mb-0 text-sm">
                                                            <a className="btn btn-warning mt-3 float-left" href="/acai/edit/1">Editar</a>
                                                            <a className="btn btn-danger mt-3 float-left" href="/dashboard">Apagar</a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </th>      
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
export default ListAdditional;