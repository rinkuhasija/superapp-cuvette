
import './App.css';
import LeftBanner from './components/LeftBanner/LeftBanner';
import FormSection from './components/FormSection/FormSection';

function App() {
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
  );
}

export default App;
