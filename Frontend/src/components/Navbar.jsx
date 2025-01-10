import React, { useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });

  const toggleModal = () => setIsLoginModalOpen(!isLoginModalOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    if (credentials.email && credentials.password) {
      setIsLoggedIn(true);
      //setLoginMessage("");
      alert("You have successfully logged in!");
      //setLoginMessage("You have successfully logged in!");
      toggleModal();
      setCredentials({ email: "", password: "", name: "", phone: "" });
    } else {
      alert("Please enter valid login credentials.");
    }
  };

  const handleSignup = () => {
    if (
      credentials.name &&
      credentials.phone &&
      credentials.email &&
      credentials.password
    ) {
      alert("Sign up successful! Please log in.");
      setIsSignupMode(false);
      setCredentials({ email: "", password: "", name: "", phone: "" });
    } else {
      alert("Please fill all fields to sign up.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged out successfully!");
  };

  return (
    <>
      <div>
        {/* Navbar with fixed positioning */}
        <div className="navbar bg-base-100 px-4 fixed top-0 left-0 w-full z-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li><a href="/">Home</a></li>
                <li><a href="/Order">Order</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact Us</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl" href="/">
              <img
                src="src/assets/CustKart Logo.png"
                alt="Logo"
                className="h-12 w-15 mr-2"
              />
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href="/">Home</a></li>
              <li><a href="/Order">Order</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="navbar-end flex items-center gap-4">
            <button
              className="btn btn-outline btn-accent"
              onClick={isLoggedIn ? handleLogout : toggleModal}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>

      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {isSignupMode ? "Sign Up" : "Login"}
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {isSignupMode && (
                <>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={credentials.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={credentials.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </>
              )}
              <div>
                <label className="block font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={isSignupMode ? handleSignup : handleLogin}
                className="w-full px-4 py-2 mt-4 rounded-md text-white"
                style={{ backgroundColor: "#169C82" }}
              >
                {isSignupMode ? "Sign Up" : "Login"}
              </button>
            </form>
            <p className="text-center text-gray-600 mt-4">
              {isSignupMode ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsSignupMode(false)}
                    className="text-blue-500 underline"
                  >
                    Log In
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setIsSignupMode(true)}
                    className="text-blue-500 underline"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </p>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

