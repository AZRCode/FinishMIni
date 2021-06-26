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
    
    <div className=" justify-center row nowrap orange centerVertical">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Proyecto del pa macizo Irving Saul</div>
        <Link to="/" className="ml1 hoverB:hover no-underline black">
        new
        </Link>

	<div className="ml1"> </div>
        <Link to="/top" className="ml1 no-underline black">
        top
        </Link>

        <div className="ml1"></div>
        <Link to="/search" className="ml1 no-underline black">
        search
        </Link>

        {authToken && (
          <div className="flex">
            <div className="ml1"></div>
	<Link to="/create"
          className="ml1 no-underline black"
        >
         new Link
            </Link>
          </div>
        )}
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
            logout
          </div>
        ) : (
          <Link
            to="/login"
            className="ml1 no-underline black"
          >
            logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
