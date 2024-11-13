import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Submitting:', { username, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        {/* Logo and Titles */}
        <div className="text-center mb-6">
          <img
            src="http://sibkd.semarangkab.go.id/simpeg/packages/login/img/logo.png"
            alt="Logo"
            id="logo"
            className="mx-auto mb-4"
          />
          <h4 className="text-xl font-bold">E-PERSONAL</h4>
          <h4 className="text-lg text-gray-600">
            BADAN KEPEGAWAIAN DAN PENGEMBANGAN SUMBER DAYA MANUSIA
          </h4>
        </div>

        {/* Login Form */}
        <div className="panel panel-default">
          <div className="panel-body">
            <form onSubmit={handleSubmit} id="tampil">
              <div className="form-group mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Nama Pengguna
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control w-full p-2 border border-gray-300 rounded-md"
                  required
                  placeholder="Nama Pengguna"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control w-full p-2 border border-gray-300 rounded-md"
                  required
                  placeholder="Kata Sandi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="btn btn-primary bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                  Login
                </button>
                <button
                  type="reset"
                  className="btn btn-default bg-gray-300 text-black px-6 py-2 rounded-lg hover:bg-gray-400 focus:outline-none"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>
            © Pemerintah Kabupaten Semarang
            <br />
            <b>Badan Kepegawaian dan Pengembangan Sumber Daya Manusia</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
