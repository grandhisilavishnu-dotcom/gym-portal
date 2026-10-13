export default function StatCard({ title, value }) {
  return (
    <div className="card shadow-sm border-0 border-start border-primary border-4 h-100">
      <div className="card-body">
        <h6 className="text-muted text-uppercase fw-semibold mb-2">{title}</h6>
        <h3 className="fw-bold text-dark mb-0">{value}</h3>
      </div>
    </div>
  );
}
