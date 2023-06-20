import { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const url = "http://localhost:8080/api/users";
      const url = "https://password-reset-6t12.onrender.com/api/users";
      const { data: res } = await axios.post(url, data);
      setMsg(res.message);
      // window.location.reload();
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErr(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <img
            src="data:image/png;base64,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"
            style={{ width: 400 }}
            alt="guvi"
          ></img>
          <h1>Welcome to GUVI</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form
            className={styles.form_container}
            onSubmit={handleSubmit}
            id="myForm"
          >
            <h1>Create Account</h1>

            <input
              type="text"
              placeholder="Name"
              name="displayName"
              onChange={handleChange}
              value={data.name}
              required
              className={styles.input}
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              autoComplete="on"
              required
              className={styles.input}
            ></input>
            {err && <div className={styles.error_msg}>{err}</div>}
            {msg && <div className={styles.success_msg}>{msg}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
