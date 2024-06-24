import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="relative h-screen w-full overflow-y-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/100 to-transparent z-10">
        <div className="p-8 md:p-12 lg:p-16">
          <h1 className="text-2xl font-semibold text-white">
            Restaurants App<span className="text-2xl text-blue-700">.</span>
          </h1>
          <LoginForm />
        </div>
      </div>
      <div className="bg-[url('/img/restaurant.jpg')] bg-cover bg-center h-screen w-full"></div>
    </div>
  );
};

export default Login;
