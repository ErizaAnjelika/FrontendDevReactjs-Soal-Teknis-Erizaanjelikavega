import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleKeyPress = (e, nextElementId) => {
    if (e.key === "Enter") {
      const nextElement = document.getElementById(nextElementId);
      if (nextElement) {
        nextElement.focus();
      }
    }
  };

  const onChangeEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const onSubmit = () => {
    login(email, password)
      .then((res) => {
        // menyimpan di local storage
        const token = res.data.token;
        localStorage.setItem("accessToken", token);

        // setelah berhasil login maka akan pindah halaman ke homepage
        navigate("/restaurants");

        // muncul alert success
        Swal.fire({
          title: "Login Berhasil",
          icon: "success",
          showConfirmButton: true,
        });
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        Swal.fire({
          title: "Login Gagal",
          text: err.response.data.error,
          icon: "error",
          showConfirmButton: true,
        });
      });
  };
  return (
    <div className="mt-20 space-y-2 lg:space-y-4">
      <p className="uppercase font-semibold text-gray-400 text-lg">
        start for search
      </p>
      <h1 className="text-4xl lg:text-5xl font-bold text-white pb-8 lg:pb-16">
        Welcome back<span className="text-5xl text-blue-700">.</span>
      </h1>
      <div className="space-y-6 lg:space-y-8 w-full md:w-96 lg:w-96">
        <div className="bg-gray-800 p-2 rounded-xl flex items-center justify-between">
          <div className="flex flex-col">
            <label className="text-white pl-2">Email</label>
            <input
              type="email"
              placeholder="enter email"
              className="pl-2 bg-transparent text-white focus:outline-none"
              required
              id="email-input"
              onKeyDown={(e) => handleKeyPress(e, "password-input")}
              onChange={onChangeEmail}
              value={email}
            />
          </div>
          <svg
            className="w-6 h-6 text-white mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
          </svg>
        </div>

        <div className="bg-gray-800 p-2 rounded-xl flex items-center justify-between">
          <div className="flex flex-col ">
            <label className="text-white pl-2">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="enter password"
              className="pl-2 bg-transparent text-white focus:outline-none"
              required
              id="password-input"
              onKeyDown={(e) => handleKeyPress(e, "login-button")}
              onChange={onChangePassword}
              value={password}
            />
          </div>
          <span onClick={togglePasswordVisibility}>
            {passwordVisible ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z" />
                <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
                <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
              </svg>
            )}
          </span>
        </div>

        <button
          id="login-button"
          type="submit"
          onClick={onSubmit}
          className="w-44 p-3 rounded-full bg-blue-700 text-white uppercase"
          onKeyDown={(e) => handleKeyPress(e, "login-button")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
