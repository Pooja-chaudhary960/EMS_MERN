import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-teal-600 to-gray-100 bg-cover bg-center">
      <div className="w-96 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center text-teal-600 mb-6">
          Employee Management System
        </h2>

        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember-me"
              className="mr-2 leading-tight"
            />
            <label htmlFor="remember-me" className="text-sm text-gray-700">
              Remember Me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Login
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
          <a href="#" className="text-teal-600 hover:text-teal-800">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;