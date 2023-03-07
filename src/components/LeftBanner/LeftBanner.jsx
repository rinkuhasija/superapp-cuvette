import './LeftBanner.css'
import { Link } from 'react-router-dom'

function LeftBanner() {
  return (
    <>
      <div className="banner">
        <div className="upr-text-btn">
          <h3>Already have an account ?</h3>
          <Link to='/onboarding' >  <button>  <span> LOGIN </span>    </button>   </Link>
        </div>

        <h1> Discover new things on Superapp </h1>
      </div>


    </>
  )
}

export default LeftBanner