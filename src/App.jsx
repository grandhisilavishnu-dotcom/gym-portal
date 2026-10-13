import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Trainers from './pages/Trainers';
import Memberships from './pages/Memberships';
import Schedule from './pages/Schedule';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Authentication Pages */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Authenticated Pages Wrapped in Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}