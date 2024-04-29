import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/features/authSlice";
import { AppDispatch } from "../redux/store";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signUp({ email, password }));
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold py-4">Kayıt ol</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 border border-gray-400"
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 border border-gray-400"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white">
          Kayıt Ol
        </button>
      </form>
    </div>
  );
}

export default SignUp;
