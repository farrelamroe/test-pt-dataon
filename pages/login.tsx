import { useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

const Login: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username && password) {
      router.push("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#4286D7] p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border-1">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#2A2E33]">
          Login
        </h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4286D7]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4286D7]"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-[#4286D7] text-white font-semibold py-3 rounded-lg hover:bg-[#45d24f] transition-colors">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
