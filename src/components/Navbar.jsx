import { NavLink, useNavigate } from 'react-router';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-sm">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold text-primary">Titan Gym</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#gymNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="gymNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/trainers">Trainers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/memberships">Memberships</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/schedule">Schedule</NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <span className="text-light small">Welcome, <strong className="text-white">Alex</strong></span>
            <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}