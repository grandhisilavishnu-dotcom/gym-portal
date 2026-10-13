import { useNavigate, Link } from 'react-router';

export default function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3 py-5">
      <div className="card shadow border-0 p-4" style={{ maxWidth: '480px', width: '100%' }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">Create Account</h3>
          <p className="text-muted">Join Titan Gym Community</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input type="text" required className="form-control" placeholder="Alex Taylor" />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input type="email" required className="form-control" placeholder="alex@example.com" />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Phone Number</label>
            <input type="tel" required className="form-control" placeholder="+91 9876543210" />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input type="password" required className="form-control" placeholder="Choose a password" />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
            Create Account
          </button>
        </form>
        <div className="text-center mt-3">
          <small className="text-muted">
            Already registered? <Link to="/" className="text-decoration-none">Login here</Link>
          </small>
        </div>
      </div>
    </div>
  );
}