import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <div className="ms-2">
        <Navbar.Brand>
          <img alt="logo" src="../../public/btc.png" width="30" height="30" className="d-inline-block align-top" /> CryptoBro APP
        </Navbar.Brand>
      </div>
      <Nav className="me-auto">
        <Nav.Link>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="cryptos" className="nav-link">
            Cryptos
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
