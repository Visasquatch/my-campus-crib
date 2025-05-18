import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem('google_token');
    console.log('Logout successful!');
 //   navigate('/login'); // or wherever you wanna send them
  };

  return (
    <div id="signOutButton">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
