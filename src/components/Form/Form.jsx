import './Form.css'
import { useState} from "react";

function Form() {

    const [formValues, setFromValues] = useState({ "name": "", "username": "", "email": "", "mobile": "" })
    const [check, setCheck] = useState(false);

    //function to add values which the user inputs in the form and store  in formValues state variable
    function handleChange(e) {
        setFromValues({ ...formValues, [e.target.name]: e.target.value })
    }

    //function to check whether form is filled completely before submitting
    const handleSubmit = (e) => {
        isFromSubmit();

        if (check === true && isFromSubmit() === true) {
            e.preventDefault();
            setFromValues({ "name": "", "email": "", "username": "", "mobile": "" })
            setCheck(false)
        } else {
            e.preventDefault();
            alert ("Fill the form and accept TnC ")
        }
    }

    //checkbox checked or not
    const handleCheck = () => {
        setCheck(true)        
    }
    
    const isFromSubmit = () => {
        for (const value in formValues) {
            if (formValues[value].length == 0) {
                return false
            }
        }
        return true
    }

    return (
        <div>
            <div className='form-1'>

                <div className="inside-form">

                    <form>

                        <input className="input first" name='name' onChange={handleChange} type="text" placeholder="Name" value={formValues.name} /><br /><br />

                        <input className="input" onChange={handleChange} placeholder="UserName" type="text" name='username' value={formValues.username} /><br /><br />

                        <input className="input" onChange={handleChange} placeholder="Email Address" type="email" id="email" name="email" value={formValues.email} /><br /><br />

                        <input className="input" onChange={handleChange} placeholder="Mobile" type="number" name='mobile' value={formValues.mobile} /><br /> <br />

                        <div className='checkbox'>
                            <input type='checkbox' onClick={handleCheck} id='check-1' name='reg-data' value='reg' /><br /><br /> <br />
                            <label for='reg-data'> Share my registration data with Superapp </label> <br /> <br />
                        </div>

                        <button onClick={handleSubmit} className="input form-btn"> <div className='sign-up'> <span> SIGN UP </span> </div>  </button>



                    </form>
                </div>


            </div>
        </div>
    )
}

export default Form