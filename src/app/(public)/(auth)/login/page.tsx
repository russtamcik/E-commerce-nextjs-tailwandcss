import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Najot e-commerce | Login",
  description: "E-commerce website Login side",
};

const Login = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="py-3 border border-sky-600 text-center rounded-full text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        Login
      </h1>
    </div>
  );
};

export default Login;
