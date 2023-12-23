import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundNav = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundNav();

    window.addEventListener("scroll", changeBackgroundNav);
  });

  const dataNavigasi = [
    {
      id: 1,
      displayName: "Home",
      path: "/",
    },
    {
      id: 2,
      displayName: "Country",
      path: "/country",
    },
    {
      id: 3,
      displayName: "Ingridient",
      path: "/ingridient",
    },
  ];

  return (
    <div>
      <Navbar
        fixed="top"
        expand="lg"
        className={`${changeColor ? "active" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-lg">
            Foodie.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {dataNavigasi.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {item.displayName}
                </NavLink>
              ))}
            </Nav>
            <div>
              <button className="btn btn-success">Our Contact</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
