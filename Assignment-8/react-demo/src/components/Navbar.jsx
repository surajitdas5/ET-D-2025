import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link "  to="/">First</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/second">Second</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/calc">Calculator</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/api">API</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/api2">API 2</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link "  to="/sms">SMS</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar