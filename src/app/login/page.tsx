import { redirect } from "next/navigation";
import { LoginAction } from "./action";

const LoginPage = () => {
  const handleLoginAction = async (formData: FormData) => {
    "use server";
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    await LoginAction(email, password);
    redirect("/");
  };

  return (
    <form action={handleLoginAction}>
      <div className="mb-3 ">
        <label htmlFor="email" className="min-w-20 inline-block">
          Email
        </label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="min-w-20 inline-block">
          Password
        </label>
        <input id="password" name="password" type="password" />
      </div>
      <button type="submit" className="p-1 border border-slate-500 rounded ">
        Log in
      </button>
    </form>
  );
};

export default LoginPage;
