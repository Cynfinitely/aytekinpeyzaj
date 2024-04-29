import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/features/authSlice";
import { AppDispatch } from "../redux/store";
import { useRouter } from "next/router";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(signIn({ email, password }));
    router.push("/");
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold py-4">Giriş Yap</h1>
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
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

export default SignIn;
