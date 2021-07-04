import './nav.css'
import img from './../../assests/images/logo.png'

function Nav() {
  return (
    <div className="header">
      <ul className="nav nav-pills">
        <li className="nav-item  col-md-2">
          <a className="nav-link tafrit" aria-current="page" href="/">בית</a>
        </li>
        <li className="nav-item  col-md-2">
          <a className="nav-link tafrit" href="/Shop"> חנות</a>
        </li>
        <li className="nav-item col-md-2">
          <a className="nav-link tafrit" href="/About">אודות</a>
        </li>
        <li className="nav-item col-md-2">
          <a className="nav-link tafrit" href="/StatusCheck">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="35" fill="currentColor" className="bi bi-eyeglasses" viewBox="0 0 16 16">
                    <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                </svg>
          </a>
        </li>
        <img className="img" alt='logo' src={img}></img>
      </ul>
    </div>
  )
}

export default Nav;