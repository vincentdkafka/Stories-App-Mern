import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function CreateAccountPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function createAccount() {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/stories");
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email || !password) return;
        createAccount();
      }}
      className="flex flex-col gap-8 self-center w-full text-white lg:max-w-3xl my-8"
    >
      <h3 className="text-4xl font-bold mb-4">Create Account</h3>

      {error && (
        <p className="text-orange-700 text-2xl font-bold my-4">{error}</p>
      )}

      <label
        className="flex flex-col text-xl gap-2 focus-within:font-bold"
        htmlFor="email"
      >
        Email Address
        <input
          className="border-b border-gray-300 text-white focus:border-[#FF6500] outline-none py-2 text-2xl"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label
        className="flex flex-col text-xl gap-2 focus-within:font-bold"
        htmlFor="password"
      >
        Password
        <input
          className="border-b py-2 text-2xl outline-none border-gray-300 focus:border-[#FF6500] text-white"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <label
        className="flex flex-col text-xl gap-2 focus-within:font-bold"
        htmlFor="confirm-password"
      >
        Confirm Password
        <input
          className="border-b py-2 text-2xl outline-none border-gray-300 focus:border-[#FF6500] text-white"
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>

      <button className="text-white bg-[#ff6500] px-4 py-3 rounded text-xl hover:bg-[#e05b00] transition">
        Sign Up
      </button>

      <Link to="/login" className="text-xl underline hover:text-[#FF6500]">
        Already have an account? Click here.
      </Link>
    </form>
  );
}
