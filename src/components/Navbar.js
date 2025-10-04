import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <div className="container-fluid sticky-top nav-Color">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
                <Link to="/home" className="navbar-brand p-0">
                    <img src="./img/divaLogo.jpg" style={{height:"70px"}}/>
                </Link>
                <button type="button" className="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="/home" className="nav-item nav-link active">Home</Link>
                        <Link to="/explore" className="nav-item nav-link">About</Link>
                        <div className="nav-item dropdown">
                            <Link to="/explore" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Explore</Link>
                            <div className="dropdown-menu bg-light mt-2">
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="how-to-use.html" className="dropdown-item">How To Use</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="blog.html" className="dropdown-item">Blog Articles</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                    </div>
                    <a href="" className="btn btn-nav py-2 px-4 d-none d-lg-inline-block">contact us</a>
                </div>
            </nav>
        </div>
    </div>
        </>
    );
}