import React, { Component } from 'react';

class ForgotPass extends Component {

    render() {
        return (
            <div>
                <div className="main-content">
                    <div className="container mt-7 pb-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-7">
                                <div className="card bg-gradient-blue shadow border-0">

                                    <div className="card-body px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <h1 className="text-white">Recuperar Senha</h1>
                                        </div>
                                        <form role="form">
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-alternative">
                                                    {/* <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                                    </div> */}
                                                    <input className="form-control" placeholder="Email" type="email"/>
                                                </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="button" className="btn btn-success my-4 w-100">Recuperar</button>
                                                </div>
                                         </form>

                                         <div className="text-center mt--4">
                                                <br/>
                                                <a href="./signin">
                                                    <p className="text-white">Ir para Login</p>
                                                </a>
                                         </div>

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
            
export default ForgotPass;