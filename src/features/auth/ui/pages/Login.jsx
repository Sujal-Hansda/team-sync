
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { Sparkles, Cloud, LogIn } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

 const Login = ()=> {

let {navigate,register,handleSubmit,errors,onLoginSubmit} = useAuth()
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#121116] px-4 py-10 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(94,62,155,0.15),transparent_65%)]" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-purple-950/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-indigo-950/10 blur-3xl" />

      <div className="relative z-10 flex w-full max-w-[440px] flex-col items-center">
        <section className="w-full rounded-xl border border-white/[0.06] bg-[#1b1a20] px-6 py-9 shadow-2xl shadow-black/40 sm:px-10 sm:py-10">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#9c83ee] to-[#6141a9] shadow-lg shadow-purple-900/30">
              <Sparkles size={25} strokeWidth={2.2} />
            </div>

            <h1 className="text-xl font-bold tracking-tight">
              team-sync
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Sign in to your workspace
            </p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/[0.07] bg-[#29272f] py-3.5 text-xs font-semibold transition hover:bg-[#34313d] sm:text-sm"
            >
              <span className="text-base font-bold text-blue-300">G</span>
              Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/[0.07] bg-[#29272f] py-3.5 text-xs font-semibold transition hover:bg-[#34313d] sm:text-sm"
            >
              <Cloud size={17} className="text-slate-300" />
              Microsoft
            </button>
          </div>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/[0.07]" />

            <span className="whitespace-nowrap text-[11px] text-slate-500">
              or continue with email
            </span>

            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <form onSubmit={handleSubmit(onLoginSubmit)} noValidate>
            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-slate-300"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`w-full rounded-lg border bg-[#100f14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#9272e3] ${
                  errors.email
                    ? "border-red-400"
                    : "border-white/[0.07]"
                }`}
              />

              {errors.email && (
                <p className="mt-2 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4">
              <div className="mb-2.5 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Password
                </label>

                <a
                  href="#forgot-password"
                  className="text-xs text-purple-300 transition hover:text-purple-200 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
                className={`w-full rounded-lg border bg-[#100f14] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#9272e3] ${
                  errors.password
                    ? "border-red-400"
                    : "border-white/[0.07]"
                }`}
              />

              {errors.password && (
                <p className="mt-2 text-xs text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <label className="mb-7 flex cursor-pointer items-center gap-3 text-sm text-slate-400">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="h-4 w-4 rounded border-white/20 accent-[#8060cb]"
              />
              Stay signed in
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#7150b4] to-[#8060c6] py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-950/20 transition hover:brightness-110 active:scale-[0.99]"
            >
              Sign In
              <LogIn size={17} />
            </button>
          </form>

          {/* Signup */}
          <p className="mt-8 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <a
              onClick={()=>navigate("/register")}
              className="font-semibold text-purple-300 transition hover:text-white"
            >
              Sign up
            </a>
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-6 text-center text-[11px] leading-6 text-slate-600">
          <p>© 2024 team-sync. All rights reserved.</p>

          <div className="mt-1 flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a href="#privacy" className="transition hover:text-slate-300">
              Privacy Policy
            </a>

            <a href="#terms" className="transition hover:text-slate-300">
              Terms of Service
            </a>
          </div>
        </footer>
      </div>

      {/* Decorative Artwork */}
      <div className="pointer-events-none absolute bottom-[12%] right-[8%] hidden h-40 w-40 items-center justify-center rounded-2xl border border-white/[0.035] bg-white/[0.015] lg:flex">
        <div className="absolute h-24 w-24 rotate-45 rounded-full border border-purple-400/10" />
        <div className="absolute h-20 w-28 -rotate-45 rounded-[50%] border border-indigo-300/10" />
        <Sparkles size={30} className="text-purple-300/10" />
      </div>
    </main>
  );
}
export default Login