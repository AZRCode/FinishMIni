import React from 'react';
import { useHistory } from 'react-router';
//import { Link, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';
import Login from './Login';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faNewspaper, faChevronCircleUp, faSearch, faUpload,faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const history = useHistory();
  const authToken = localStorage.getItem(AUTH_TOKEN);

  function clickLogout(){
    history.push("/login")
  }
  return (
    
    <div className="flex pa1 justify-between nowrap orange centerVertical">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News <br></br>by AZRCode</div>
        <Link to="/" className="ml1 no-underline black">
        <FontAwesomeIcon className="i-Home" icon={faNewspaper}/>
        </Link>

	<div className="ml1"> </div>
        <Link to="/top" className="ml1 no-underline black">
        <FontAwesomeIcon className="i-Home" icon={faChevronCircleUp}/>
        </Link>

        <div className="ml1"></div>
        <Link to="/search" className="ml1 no-underline black">
        <FontAwesomeIcon className="i-Home" icon={faSearch}/>
        </Link>

        {authToken && (
          <div className="flex">
            <div className="ml1"></div>
	<Link to="/create"
          className="ml1 no-underline black"
        >
         <FontAwesomeIcon className="i-Home" icon={faUpload}/>
            </Link>
          </div>
        )}
      </div>
      <div className="Center">
        <p>"El primer paso es establecer que algo es posible, entonces es probable que ocurra"</p>
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              clickLogout()
              window.location.reload()
              
            }}
          >
            <FontAwesomeIcon className="i-Home" icon={faSignOutAlt}/>
          </div>
        ) : (
          <Link
            to="/login"
            className="ml1 no-underline black"
          >
            <FontAwesomeIcon className="i-Home" icon={faUser}/>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
