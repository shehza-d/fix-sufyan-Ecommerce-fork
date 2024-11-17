import React from "react";

function Login() {
  return (
    <div className="font-semibold text-lg   flex flex-col items-center gap-2 justify-center">
      Login
      <form action="">
        <ul  className="font-normal text-xs flex flex-col gap-4 items-center">
          <li>
            {" "}
            <label htmlFor="">
              UserEmail :<input type="email" name="" id="" />
            </label>
          </li>
          <li>
            {" "}
            <label htmlFor="">
              Password :<input type="password" name="" id="" />
            </label>
          </li>
          <li>
            {" "}
            <button>Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default Login;
