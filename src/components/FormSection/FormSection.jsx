import './FormSection.css'
import Form from '../Form/Form'

function FormSection() {
    return (
        <div className="form-section">

            <div className='right-h1'>
                <h1> Super App </h1>
            </div>

            <p id='create-ac-text'> Create your new account </p> <br/>

            <div className='d-flex email-right'>
                <p> Email </p>
                <div className='vl'></div>
                <p> Google </p>
            </div>

            <Form />

            <div className='right-bottom-p'>

                <p> By clicking on Sign up. you agree to Superapp <span> Terms and Conditions of Use  </span> </p>

                <p> To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span> Privacy Policy </span>  </p>
            </div>


        </div>
    )
}

export default FormSection