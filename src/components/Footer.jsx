export default function Footer() {
  return (
    <footer className="bg-dark text-white-50 text-center py-3 mt-auto border-top border-secondary">
      <div className="container">
        <small>&copy; {new Date().getFullYear()} Titan Fitness Center. All rights reserved.</small>
      </div>
    </footer>
  );
}