import React from 'react'
import { Link } from "react-router-dom"
import LeftBanner from './../../components/LeftBanner/LeftBanner';
import FormSection from './../../components/FormSection/FormSection';

function Register() {
    return (
        <div className='app'>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-6 col-sm-12">
                        <LeftBanner />

                    </div>

                    <div className="col-md-6 col-sm-12">
                        <FormSection />

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Register