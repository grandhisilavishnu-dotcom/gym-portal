export default function Trainers() {
  const trainersList = [
    { id: 1, name: "Marcus Stone", specialty: "Heavy Strength & Powerlifting", experience: "8 Years", rating: "4.9/5" },
    { id: 2, name: "Elena Rostova", specialty: "HIIT & Cardio Conditioning", experience: "5 Years", rating: "4.8/5" },
    { id: 3, name: "Dev Patel", specialty: "Yoga, Mobility & Flexibility", experience: "6 Years", rating: "4.9/5" },
    { id: 4, name: "Chloe Bennett", specialty: "CrossFit & Athletic Agility", experience: "4 Years", rating: "4.7/5" },
    { id: 5, name: "Arjun Nair", specialty: "Bodybuilding & Sports Nutrition", experience: "7 Years", rating: "5.0/5" }
  ];

  return (
    <div>
      <div className="mb-4">
        <h2 className="fw-bold">Meet Our Certified Trainers</h2>
        <p className="text-muted">Book personal training sessions with certified fitness professionals.</p>
      </div>

      <div className="row g-4">
        {trainersList.map((trainer) => (
          <div key={trainer.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <span className="badge bg-primary-subtle text-primary mb-2 px-2 py-1">Rating: {trainer.rating}</span>
                <h5 className="card-title fw-bold mb-1">{trainer.name}</h5>
                <p className="text-muted small mb-3">{trainer.specialty}</p>
                <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                  <small className="text-secondary">Experience: <strong>{trainer.experience}</strong></small>
                  <button className="btn btn-sm btn-outline-primary">Book Session</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}