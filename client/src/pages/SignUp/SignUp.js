import React, { Component } from 'react';

class SignUp extends Component {

    render(){
        return (
            <div>
                <div className="main-content">

                    {/* Page content  */}
                    <div className="container mt-1 pb-5">
                        {/* Table  */}
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="card bg-gradient-blue shadow border-0 mt-2">

                                    <div className="card-body px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <h1 className="text-white">Registrar</h1>
                                        </div>
                                        <form role="form">
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative mb-3">
                                                    {/* <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="ni ni-hat-3"></i>
                                                        </span>
                                                    </div> */}
                                                    <input className="form-control" placeholder="Nome" type="text" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative mb-3">
                                                    {/* <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                           <i className="ni ni-email-83"></i>
                                                        </span>
                                                    </div> */}
                                                    <input className="form-control" placeholder="Email" type="email" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative">
                                                    {/* <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                           <i className="ni ni-lock-circle-open"></i>
                                                        </span>
                                                    </div> */}
                                                    <input className="form-control" placeholder="Senha" type="password" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative">
                                                    {/* <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                           <i className="ni ni-lock-circle-open"></i>
                                                        </span>
                                                    </div> */}
                                                    <input className="form-control" placeholder="Confirmar Senha" type="password" />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn btn-success mt-3 btn-block">Registrar</button>
                                            </div>
                                            <div className="text-center mt-2 mb-0">
                                                <br/>
                                                <a href="./signin">
                                                    <p className="text-white">Ir para Login</p>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       );
    }

}
export default SignUp;