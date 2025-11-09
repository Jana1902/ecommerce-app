import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import LoginBg from "../assets/login-bg2.webp";
import "../App.css";

const SignupPage = () => {
  let [formData, setFormData] = useState({
    username: "",
    firstName: "jana",
    lastName: "a",
    email: "jana@gmail.co",
    password: "1234",
    age: 21,
  });
  const { signup, isSigningUp } = useAuthStore();

  const submitForm = (e) => {
    e.preventDefault();
    formData = {
      ...formData,
      username: formData.firstName + " " + formData.lastName,
    };
    signup(formData);
  };

  return (
    <>
      {/* <div className="flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 via-indigo-50 to-blue-100 h-screen"> */}
      <div
        className={`login flex flex-col justify-center items-center bg-cover bg-center h-screen p-5`}
      >
        <form
          onSubmit={submitForm}
          className="flex flex-col items-center p-8 rounded-xl shadow-2xl border-t-gray-700 border-t-5 w-full max-w-sm border border-gray-100 bg-cover bg-white"
        >
          <h1 className="text-4xl font-bold mb">Sign Up</h1>
          <h4 className="text-[18px] mb-3 text-center">
            Complete the form below to become a member.
          </h4>
          <div className="flex w-full gap-3">
            <div className="flex-1 w-1/2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="fnameInputField"
              >
                First Name
              </label>
              <input
                title="Name"
                id="fnameInputField"
                className="h-9 w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-gray-600 rounded-sm p-3 outline-none transition mb-3"
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="flex-1 w-1/2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="lnameInputField"
              >
                Last Name
              </label>
              <input
                title="Name"
                id="lnameInputField"
                className="h-9 w-full border border-gray-300 focus:border-black focus:ring-1 focus:ring-gray-600 rounded-sm p-3 outline-none transition mb-3"
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex w-full gap-3">
            <div className="w-2/3">
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="w-1/3">
              <label
                className="text-sm font-medium text-gray-700 mb-1"
                htmlFor="ageInputField"
              >
                Age
              </label>
              <input
                title="Age"
                id="ageInputField"
                className="w-full h-9 border border-gray-300 focus:border-black focus:ring-1 focus:ring-gray-600 rounded-sm p-3 outline-none transition mb-3"
                type="number"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
              />
            </div>
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
              className="h-9 border border-gray-300 focus:border-black focus:ring-1 focus:ring-gray-600 rounded-sm p-3 outline-none transition mb-3"
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
            {isSigningUp ? "Loading..." : "Register"}{" "}
          </button>
          <div className="mt-4">
            <p>
              Already have an account?{" "}
              <span className="text-[#6610F2] hover:underline">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
