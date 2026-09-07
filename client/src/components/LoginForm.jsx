import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <fieldset className="fieldset w-full max-w-sm bg-orange-200 border-base-300 rounded-box border p-4 shadow-2xl">
      <legend className="fieldset-legend text-3xl">Login</legend>

      <label className="label">Email</label>
      <input type="email" className="input w-full" placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" className="input w-full" placeholder="Password" />

      {/* Button centered horizontally */}
      <div className="flex justify-center mt-4">
        <button className="btn btn-neutral px-8">Login</button>
      </div>

      <p className="text-sm text-center mt-3">
        Don't have an account?{" "}
        <Link to="/register" className="link link-primary">
          Register
        </Link>
      </p>
    </fieldset>
  );
};

export default LoginForm;