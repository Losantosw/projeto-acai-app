import React, { Component } from 'react';

class ResetPass extends Component {

    render() {
        return (
            <div>
                <div className="main-content">

                    {/* Page content  */}
                    <div className="container mt-5 pb-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-7">
                                <div className="card bg-gradient-blue shadow border-0">

                                    <div className="card-body px-lg-5 py-lg-5">
                                        <div className="text-center text-muted mb-4">
                                            <h1 className="text-white">Alterar senha</h1>
                                        </div>
                                        <form role="form">
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative">
                                                    {/* <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                    </div> */}
                                                    <input className="form-control" placeholder="Nova senha" type="password" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-alternative">
                                                    {/* <div className="input-group-prepend">
                                                            <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                        </div> */}
                                                    <input className="form-control" placeholder="Confirmar senha" type="password" />
                                                </div>
                                            </div>

                                            <div className="text-center">
                                                <button type="button" className="btn btn-success my-4 w-100">Alterar Senha</button>
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

export default ResetPass;