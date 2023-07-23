import { useEffect, useState } from "react";
import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

import styles from "./styles.module.css";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  let param = useParams();

  useEffect(() => {
    const verifyEmailUrl = () => {
      // const url = `http://localhost:8080/api/users/${param.id}/verify/${param.token}`;
	  const url = `https://password-reset-6t12.onrender.com/api/users/${param.id}/verify/${param.token}`
	
      console.log(param.id);
      axios
        .get(url)
        .then((res) => {
          setValidUrl(true);
        })
        .catch((err) => {
          console.log(err);
          setValidUrl(false);
        });
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <Fragment>
      {validUrl ? (
        <div className={styles.container}>
          <h1>Email verified successfully</h1>

          <Link to="/login">
            <button className={styles.green_btn}>Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
};

export default EmailVerify;
