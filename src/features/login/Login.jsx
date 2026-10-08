import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

function validate({ email, password }) {
  const errors = {};

  if (!email) {
    errors.email = "Enter your email.";
  }

  if (!password) {
    errors.password = "Enter your password.";
  }

  return errors;
}

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errors = validate(values);
    setErrors(errors);

    if (Object.keys(errors).length > 0) return;

    toast.info("Login isn't available yet.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow">
        <Link to="/" className="text-xl font-bold">
          Bagify
        </Link>

        <h1 className="mt-6 text-2xl font-semibold">Log in to your account</h1>

        <p className="mt-1 text-sm text-slate-600">
          Save your favorites and check out faster.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>

            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>

            <div className="flex">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border px-3 py-2"
              />

              <button
                type="button"
                onClick={() => setShowPassword((show) => !show)}
                className="ml-2"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Login */}
          <button
            type="submit"
            className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-white"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          New to Bagify?{" "}
          <Link to="/" className="font-medium underline">
            Keep browsing
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
