export default function Schedule() {
  return (
    <div>
      <h2 className="fw-bold mb-3">Weekly Class Schedule</h2>
      <p className="text-muted">Daily group training schedule.</p>
      
      <div className="card border-0 shadow-sm p-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center py-3">
            <div>
              <strong>Morning HIIT Blast</strong>
              <div className="text-muted small">06:30 AM - 07:30 AM</div>
            </div>
            <span className="badge bg-success">Studio A</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3">
            <div>
              <strong>Power Yoga & Mobility</strong>
              <div className="text-muted small">08:00 AM - 09:00 AM</div>
            </div>
            <span className="badge bg-info text-dark">Studio B</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center py-3">
            <div>
              <strong>Strength & Conditioning</strong>
              <div className="text-muted small">06:00 PM - 07:00 PM</div>
            </div>
            <span className="badge bg-warning text-dark">Main Floor</span>
          </li>
        </ul>
      </div>
    </div>
  );
}