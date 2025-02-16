import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user, loading, error } = useAuth();

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      {user && (
        <div>
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;