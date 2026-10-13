import StatCard from '../components/StatCard';

export default function Dashboard() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="fw-bold">Welcome Back, Alex!</h2>
        <p className="text-muted">Here is your fitness and membership overview for this week.</p>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <StatCard title="Workouts Completed" value="4 Sessions" />
        </div>
        <div className="col-md-4">
          <StatCard title="Membership Status" value="Gold Active" />
        </div>
        <div className="col-md-4">
          <StatCard title="Days Remaining" value="84 Days" />
        </div>
      </div>

      <div className="card border-0 shadow-sm p-4 bg-white">
        <h5 className="fw-bold mb-2">Today's Workout Plan</h5>
        <p className="text-muted mb-0">
          Heavy bench press & upper body hypertrophy scheduled at 5:30 PM with Trainer Marcus Stone.
        </p>
      </div>
    </div>
  );
}