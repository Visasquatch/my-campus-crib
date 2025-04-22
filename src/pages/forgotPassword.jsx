import '../App.css';

const ForgotP = ({ onClose }) => {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Forgot your password?
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          We'll help you reset it soon.
        </p>
        <button onClick={onClose} className="block mx-auto text-blue-500 text-sm">
          ⬅ Back to Login
        </button>
      </div>
    );
  };

  export default ForgotP;