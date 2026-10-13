export default function Memberships() {
  return (
    <div>
      <h2 className="fw-bold mb-3">Membership Tiers</h2>
      <p className="text-muted">Choose the plan that suits your fitness journey.</p>
      
      <div className="row g-4 mt-1">
        <div className="col-md-4">
          <div className="card p-4 border-0 shadow-sm h-100">
            <h5 className="fw-bold">Silver Plan</h5>
            <p className="text-muted">Access during standard hours.</p>
            <h3 className="fw-bold text-primary mt-auto">₹1,500 <small className="fs-6 text-muted">/ mo</small></h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 border-0 shadow-sm h-100 border-top border-primary border-4">
            <h5 className="fw-bold">Gold Plan</h5>
            <p className="text-muted">24/7 Access + Steam & Sauna.</p>
            <h3 className="fw-bold text-primary mt-auto">₹2,800 <small className="fs-6 text-muted">/ mo</small></h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-4 border-0 shadow-sm h-100">
            <h5 className="fw-bold">Platinum Plan</h5>
            <p className="text-muted">All-access + 2 Personal Trainer sessions/mo.</p>
            <h3 className="fw-bold text-primary mt-auto">₹4,500 <small className="fs-6 text-muted">/ mo</small></h3>
          </div>
        </div>
      </div>
    </div>
  );
}