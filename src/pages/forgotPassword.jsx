import '../App.css';

const ForgotP = ({ onClose }) => {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-center text-black-800 mb-4">
          Forgot your password?
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          We'll help you reset it soon.<br/> </p>
         <div className='text-center'> 
          <button className='w-full bg-orange-300 text-white py-2 rounded font-semibold hover:bg-orange-400'>by email</button>
          <button className='w-full bg-orange-300 text-white py-2 rounded font-semibold hover:bg-orange-400'>by phone number</button>
        </div><br/>
        <button onClick={onClose} className="block mx-auto text-black-500 text-sm">
          ⬅ Back to Login
        </button>
      </div>
    );
  };

  export default ForgotP;