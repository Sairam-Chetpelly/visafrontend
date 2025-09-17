import { Button, Card } from '../components/ui';

const Dashboard = () => {
  let user = {};
  try {
    const userData = localStorage.getItem('user');
    if (userData && userData !== 'undefined') {
      user = JSON.parse(userData);
    }
  } catch (error) {
    console.error('Error parsing user data:', error);
  }

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.name}</span>
              <Button variant="secondary" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Card>
            <Card.Header>
              <h3 className="text-lg font-medium">Welcome to your Dashboard</h3>
            </Card.Header>
            <Card.Content>
              <p className="text-gray-600">
                You are successfully logged in as {user.email}
              </p>
            </Card.Content>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;