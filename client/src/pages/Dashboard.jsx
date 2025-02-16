import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/dashboard", { credentials: "include" }) // Fetch user data from backend
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch((err) => console.error("Error fetching dashboard data:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      {user ? <p>Hello, {user.name}!</p> : <p>Loading...</p>}
    </div>
  );
}
