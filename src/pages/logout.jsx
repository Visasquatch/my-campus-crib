import { googleLogout } from '@react-oauth/google';

function Logout() {

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem('google_token');
    console.log('Logout successful!');
  };

  return (
    <div id="signOutButton">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
