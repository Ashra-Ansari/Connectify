import UserLayout from "@/layout/UserLayout";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styles from "./style.module.css";
import {
  registerUser,
  loginUser,
} from "./../../config/redux/action/authAction";
import { emptyMessage } from "./../../config/redux/reducer/authReducer";

function LoginComponent() {
  // the auth is used from redux store.js
  const authState = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const [userLoginMethod, setUserLoginMethod] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (authState.isLoggedIn) {
      router.push("/dashboard");
    }
  }, [authState.isLoggedIn]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  }, []);
  useEffect(() => {
    dispatch(emptyMessage());
  }, [userLoginMethod]);

  const handleRegister = () => {
    console.log("registering user");
    dispatch(registerUser({ username, name, email, password }));
  };

  const handleLogin = () => {
    console.log("login user");
    dispatch(loginUser({ email, password }));
  };
  console.log(authState);
  return (
    <UserLayout>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.cardContainer_left}>
            <p className={styles.cardleft_heading}>
              {userLoginMethod ? "Sign In" : "Sign Up"}
            </p>

            <p style={{ color: authState.isError ? "red" : "green" }}>
              {authState.message}
            </p>

            <div className={styles.inputContainer}>
              {!userLoginMethod && (
                <div className={styles.inputRow}>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.inputField}
                    type="text"
                    placeholder="Username"
                  />
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className={styles.inputField}
                    type="text"
                    placeholder="Name"
                  />
                </div>
              )}
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={styles.inputField}
                type="text "
                placeholder="Email"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className={styles.inputField}
                type="password"
                placeholder="Password"
              />
              <div
                onClick={() => {
                  if (userLoginMethod) {
                    handleLogin();
                  } else {
                    handleRegister();
                  }
                }}
                className={styles.buttonWithOutline}
              >
                <p> {userLoginMethod ? "Sign In" : "Sign Up"}</p>
              </div>
            </div>
          </div>

          <div className={styles.cardContainer_right}>
            {userLoginMethod ? (
              <p>Don't have an account? </p>
            ) : (
              <p>Already have an account? </p>
            )}
            <div
              onClick={() => {
                setUserLoginMethod(!userLoginMethod);
              }}
              style={{
                color: "black",
                textAlign: "center",
              }}
              className={styles.buttonWithOutline}
            >
              <p> {userLoginMethod ? "Sign Up" : "Sign In"}</p>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default LoginComponent;
