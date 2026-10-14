import { useForm } from "react-hook-form";
import { Sparkles, User, Mail, Lock } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Register = ()=> {
  let {navigate,errors,register,handleSubmit,onRegisterSubmit} = useAuth();

  return (
    <div className="min-h-screen bg-[#121116] flex items-center justify-center px-4 py-10 text-white">
      <div className="w-full max-w-[460px] rounded-2xl border border-white/10 bg-[#1b1a22] p-7 sm:p-10 shadow-2xl">
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
            <Sparkles size={22} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            team-<span className="text-violet-400">sync</span>
          </h1>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Create an account</h2>
          <p className="text-gray-400 mt-2">
            Get started with your workspace
          </p>
        </div>

        <form onSubmit={handleSubmit(onRegisterSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Full Name
            </label>
            <div className="flex items-center rounded-lg border border-white/10 bg-[#121116] px-3 focus-within:border-violet-500">
              <User size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("fullName", {
                  required: "Full name is required",
                })}
                className="w-full bg-transparent px-3 py-3 outline-none placeholder:text-gray-600"
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>
            <div className="flex items-center rounded-lg border border-white/10 bg-[#121116] px-3 focus-within:border-violet-500">
              <Mail size={18} className="text-gray-500" />
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full bg-transparent px-3 py-3 outline-none placeholder:text-gray-600"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>
            <div className="flex items-center rounded-lg border border-white/10 bg-[#121116] px-3 focus-within:border-violet-500">
              <Lock size={18} className="text-gray-500" />
              <input
                type="password"
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="w-full bg-transparent px-3 py-3 outline-none placeholder:text-gray-600"
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Confirm Password
            </label>
            <div className="flex items-center rounded-lg border border-white/10 bg-[#121116] px-3 focus-within:border-violet-500">
              <Lock size={18} className="text-gray-500" />
              <input
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                })}
                className="w-full bg-transparent px-3 py-3 outline-none placeholder:text-gray-600"
              />
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-400">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <label className="flex items-start gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              {...register("terms", {
                required: "You must accept the terms",
              })}
              className="mt-1 accent-violet-500"
            />
            <span>
              I agree to the{" "}
              <a href="#" className="text-violet-400 hover:text-violet-300">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-violet-400 hover:text-violet-300">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.terms && (
            <p className="text-sm text-red-400">{errors.terms.message}</p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-violet-600 py-3 font-semibold transition hover:bg-violet-500"
          >
            Create Account
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a
          onClick={()=>navigate("/")} 
           className="font-medium text-violet-400 hover:text-violet-300">
            Sign in
          </a>
        </p>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-gray-500">
          © 2024  team-sync. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Register;