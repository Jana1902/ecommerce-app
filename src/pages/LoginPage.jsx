import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import LoginBg from "../assets/login-bg2.webp";
import "../App.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  return (
    <>
      <div
        className={`login flex flex-col justify-center items-center bg-cover bg-center h-screen p-5`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(formData);
          }}
          className="flex flex-col items-center p-8 rounded-xl shadow-2xl border-t-gray-700 border-t-5 w-full max-w-sm border border-gray-100 bg-cover bg-white"
        >
          <h1 className="text-4xl font-bold mb">Welcome back</h1>
          <h2 className="text-[20px] mb-3">Login to your account</h2>
          <div className="w-full">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="emailInputField"
            >
              Email
            </label>
            <input
              title="Email"
              id="emailInputField"
              className="h-9 w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-gray-600 rounded-sm p-3 outline-none transition mb-3"
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div className="w-full">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="passwordInputField"
            >
              Password
            </label>
            <input
              id="passwordInputField"
              className="h-9 w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-gray-600 rounded-sm p-3 outline-none transition mb-3"
              title="Password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <button
            disabled={formData.password === "" || formData.email === ""}
            type="submit"
            className={`self-center bg-black text-white border rounded-sm px-4 py-1 hover:border-black mt-2 ${
              formData.password === "" || formData.email === ""
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            {isLoggingIn ? "Loading..." : "Login"}{" "}
          </button>
          <div className="mt-4">
            <p>
              Don't have an account?{" "}
              <span className="text-[#6610F2] hover:underline">
                <Link to="/signup">Sign Up.</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
