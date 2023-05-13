"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const Authdiv = () => {
  type divType = "login" | "register";

  const [divType, setFormType] = React.useState<divType>("login");

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  function handleSubmit() {
    console.log(email, password, name, confirmPassword);
  }

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white drop-shadow-md">
        <Image
          src="/vercel.svg"
          alt="logo"
          width={200}
          height={200}
          className="mx-auto"
        />
        <div className="px-4 py-8 sm:px-10">
          {divType == "login" ? (
            <div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-gray-800 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter your Email"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm text-gray-800 dark:text-gray-400"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <Button onClick={handleSubmit} width="full">
                Sign In
              </Button>
              <div className="py-2 text-gray-800">
                <span className="text-sm my-2">Don't have an account? </span>
                <span
                  onClick={() => setFormType("register")}
                  className="text-sm text-blue-500 cursor-pointer"
                >
                  Sign Up
                </span>
              </div>
            </div>
          ) : (
            <>
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-800 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter your Email"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-800 dark:text-gray-400"
                  >
                    Username
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter your Username"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm text-gray-800 dark:text-gray-400"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm text-gray-800 dark:text-gray-400"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="confirmPassword"
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <br />
                <Button width="full">Sign Up</Button>
                <div className="py-2 text-gray-800">
                  <span className="text-sm my-2">
                    Already have an account?{" "}
                  </span>
                  <span
                    onClick={() => setFormType("login")}
                    className="text-sm text-blue-500 cursor-pointer"
                  >
                    Login
                  </span>
                </div>
              </div>
              {confirmPassword !== "" && confirmPassword !== password ? (
                <div className="mb-4">
                  <p className="text-red-500">Passwords do not match</p>
                </div>
              ) : null}
            </>
          )}
        </div>
        <p className="mx-4 text-black my-2">
          <span className="text-gray-400">Or continue with</span>
        </p>
        <div className="flex flex-row w-full pb-4 px-2">
          <div className="mx-2 px-2 mb-2 hover:border-grey-300 border-2 w-full text-center">
            Google
          </div>
          <div className="mx-2 px-2 mb-2 hover:border-grey-300 border-2 w-full text-center">
            Facebook
          </div>
        </div>
        <hr />
        <div>
          <p className="text-center text-sm text-gray-400">
            &copy; 2023 All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authdiv;
