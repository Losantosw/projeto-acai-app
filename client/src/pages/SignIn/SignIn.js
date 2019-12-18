import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import '../../assets/projeto-acai-dashboard.css';
import '../../assets/plugins/bootstrap/dist/css/bootstrap.min.css';



class SignIn extends Component {

    render() {
        return (
            <div className="">
                <div className="main-content">

                    {/* Page content */}
                    <div className="container mt-5 pb-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-7">
                                <div className="card bg-gradient-blue shadow border-0">

                                    <div className="card-body px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <h1 className="text-light">Autenticação de usuário</h1>
                                        </div>
                                        <form role="form">
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-alternative">
                                                    {/* <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="ni ni-email-83"/>
                                                        </span>
                                                    </div> */}
                                                        <input className="form-control" placeholder="Email" type="email"/>
                                                </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group input-group-alternative">
                                                        {/* <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <i className="ni ni-lock-circle-open"/>
                                                            </span>
                                                        </div> */}
                                                            <input className="form-control" placeholder="Senha" type="password"/>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button type="button" className="btn btn-success my-4 w-100">Entrar</button>
                                                </div>
                                        </form>

                                        <div className="row mt-3">
                                            <div className="col-6">
                                                <a href="/forgotpass" >
                                                    <p className="text-light">Esqueceu a senha?</p>
                                                </a>
                                            </div>
                                            <div className="col-6 text-right">
                                                <a href="./signup">
                                                    <p className="text-light">Criar nova conta</p>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Helmet>
                    
                </Helmet>
            </div>
        );
    }
}

export default SignIn;