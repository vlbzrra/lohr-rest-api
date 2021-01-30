import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <ToastContainer />
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="./" className="navbar-brand">Teste Lohr</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;