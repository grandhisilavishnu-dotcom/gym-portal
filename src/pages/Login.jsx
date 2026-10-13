import { useNavigate, Link } from 'react-router';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
      <div className="card shadow border-0 p-4" style={{ maxWidth: '420px', width: '100%' }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">Titan Gym</h3>
          <p className="text-muted">Sign in to your member portal</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input type="email" required className="form-control" defaultValue="member@titangym.com" />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input type="password" required className="form-control" defaultValue="password123" />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <small className="text-muted">
            Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link>
          </small>
        </div>
      </div>
    </div>
  );
}