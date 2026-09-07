import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <fieldset className="fieldset w-full bg-orange-200 max-w-sm border-base-300 rounded-box border p-4 shadow-2xl">
      <legend className="fieldset-legend text-3xl">Register</legend>

      <label className="label">Email</label>
      <input type="email" className="input w-full" placeholder="Email" />

      <label className="label">Password</label>
      <input type="password" className="input w-full" placeholder="Password" />

      <div className="flex justify-center">
        <button className="btn btn-neutral mt-4">Register</button>
      </div>

      <p className="text-sm text-center mt-2">
        Already have an account? 
        <Link to="/login" className="link link-primary">Login</Link>
      </p>
    </fieldset>
  );
};

export default RegisterForm;
