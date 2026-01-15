import Link from "next/link";
import { LoginForm } from "./login-form";

export const metadata = {
  title: "Client Login | Rich Elstrom Construction",
  description: "Login to access your project portal"
};

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="bg-slate-900 px-6 py-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-white"
        >
          Rich Elstrom Construction
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-slate-900">
              Client Portal
            </h1>
            <p className="mt-2 text-slate-600">
              Sign in to view your project details
            </p>
          </div>

          <LoginForm />

          <p className="mt-8 text-center text-sm text-slate-500">
            Need access?{" "}
            <a
              href="mailto:diane@richelstromconstruction.com"
              className="font-medium text-slate-900 hover:underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </main>

      <footer className="bg-slate-900 px-6 py-4 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} Rich Elstrom Construction
      </footer>
    </div>
  );
};

export default LoginPage;
