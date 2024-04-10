import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Alert from './components/Alert';

function App() {
  const [jwtToken, setJwtToken] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("d-none");

  let navigate = useNavigate()

  const logOut = () => {
    setJwtToken("")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Go Watch a Movie!</h1>
        </div>
        <div className="col text-end">
          {jwtToken === ""
          ? <Link to="/login"><span className="badge bg-success">Login</span></Link>
          : <a href="#!" onClick={logOut}>
            <span className="badge bg-danger">Logout</span>
            </a>
          }
        </div>
        <hr className="mb-3"></hr>
      </div>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              <Link to="/animes" className="list-group-item list-group-item-action">Animes</Link>
              <Link to="/genres" className="list-group-item list-group-item-action">Genres</Link>
              {jwtToken !== "" &&
                <>
                  <Link to="/admin/anime/0" className="list-group-item list-group-item-action">Add Anime</Link>
                  <Link to="/manage-catalogue" className="list-group-item list-group-item-action">Manage Catalogue</Link>
                  <Link to="/graphql" className="list-group-item list-group-item-action">GraphQL</Link>
                </>
              }
            </div>
          </nav>
        </div>
  
        <div className="col-md-10">
          <Alert 
            message={alertMessage}
            className={alertClassName}
          />
  
          <Outlet context={{
            jwtToken: jwtToken,
            setJwtToken: setJwtToken,
            setAlertMessage: setAlertMessage,
            setAlertClassName: setAlertClassName
          }} />
        </div>
      </div>
    </div>
  );
}

export default App;
