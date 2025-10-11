import { useNavigate } from 'react-router';

function HomePage() {
  const navigate = useNavigate();

  function goToLoginPage() {
    navigate('/');
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-50">
      <div className="text-3xl font-bold text-slate-500 text-center">Welcome to this generic app!</div>
      
      <button className="font-bold tracking-wider mt-10 text-white bg-pink-400 rounded-lg w-auto px-4 py-2 hover:bg-pink-300 active:bg-pink-200 transition-colors" onClick={goToLoginPage}>
        Logout
      </button>{/* How to resize buttooooon*/}
    </div>
  );
}

export default HomePage;