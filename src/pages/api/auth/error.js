// pages/auth/error.js
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{error || "An error occurred during authentication."}</p>
    </div>
  );
};

export default ErrorPage;
