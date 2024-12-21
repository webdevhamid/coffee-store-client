import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { AuthContext } from "../Providers/AuthProviders";

const SignUp = () => {
  const { signUpUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    // Sign Up user on submit
    signUpUser(email, password)
      .then((credential) => {
        // Stored the newly created user
        const user = credential.user;
        setUser(user);
        console.log(user);
        const createdAt = user?.metadata?.creationTime;
        console.log(createdAt);

        // Save the new user to a variable
        const newUser = { name, email, createdAt };

        // Save the new user info to the MongoDB database
        fetch(`https://coffee-store-server-neon-five.vercel.app/users`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("New user created to DB", data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-[calc(100vh-69px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Register</h2>
          <p className="mt-2 text-sm text-gray-600">Enter your details for registration</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary"
                placeholder="Your full name"
              />
            </div>
            {/* Photo URL */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Photo URL
              </label>
              <input
                name="photo"
                type="url"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary"
                placeholder="Your photo URL"
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary"
                placeholder="name@mail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary`}
                  placeholder="Password"
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              SIGN UP
            </button>
          </div>
          {/* Register with google auth */}
          <div>
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <img
                className="h-5 w-5 mr-2"
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google logo"
              />
              SIGN UP WITH GOOGLE
            </button>
          </div>

          <div className="text-sm text-center">
            <span className="text-gray-500">Already a user? </span>
            <Link to="/auth/login" className="font-medium text-gray-900 hover:text-gray-700">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
