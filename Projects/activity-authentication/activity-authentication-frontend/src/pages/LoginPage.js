import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuthentication';
import { useState } from 'react';

function LoginPage() {
  const navigate = useNavigate();
  const authenticationService = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  function onLoginClick() {
    authenticationService.login(formData.username, formData.password)
      .then(res => {
        goToHomePage();
      })
      .catch(err => {
        console.error('Login failed:', err);
      });
  }

  function goToHomePage() {
    navigate('/home');
  }

  function handleSubmit(e) {
    e.preventDefault();
    onLoginClick();
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-violet-200 to-rose-200 flex p-20 items-center">
      <div className="bg-white rounded-2xl shadow-2xl shadow-rose-600/20 ml-auto p-8 min-w-[520px]">
        <div className="mb-8">
          <div className="text-3xl font-bold text-pink-500">Welcome!</div>
          <div className="font-medium text-slate-400">Login below to get started</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <label className="block mb-1 font-bold text-slate-600">Username</label>
            <input 
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className="border-[1px] border-slate-200 w-full rounded px-2 py-1 bg-slate-50 focus:outline-pink-400" 
            />
          </div>

          <div className="mb-2 w-full">
            <label className="block mb-1 font-bold text-slate-600">Password</label>
            <input 
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="border-[1px] border-slate-200 w-full rounded px-2 py-1 bg-slate-50 focus:outline-pink-400" 
            />
          </div>

          <button 
            type="submit"
            disabled={authenticationService.loading}//why not workingg im ded
            className="font-bold tracking-wider mt-10 text-white bg-pink-400 rounded-lg w-full p-3 hover:bg-pink-300 active:bg-pink-200 transition-colors"
          >
            {authenticationService.loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;