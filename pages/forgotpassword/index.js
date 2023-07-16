import Button from "components/form/button";
import InputField from "components/form/inputfield";
import styles from "/styles/authentication/forgotpassword.module.scss";
import Image from "next/image";
import googlelogo from "public/assests/GoogleLogo.svg";
import facebooklogo from "public/assests/facebooklogo.svg";
import { IoIosArrowDropleft } from "react-icons/io";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

import { useState } from "react";
import { api } from "./../../services/api";
import { toast } from "react-hot-toast";
import { validateEmail } from "utils/functions";
import Loader from "utils/Loader";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("");

  const handleForgot = async () => {
    if(!validateEmail(email)) {
      toast.error("Please input a valid email");
      return;
    }

    try {
      setLoading(true);
      const body = {
        email,
      };
      await api.post("/api/v1/auth/forgotPassword", body);

      toast.success("We have sent you an email with further instructions");
      setEmail("");
    } catch (error) {
      if (error.response && error.response.data.message) {
				toast.error(error.response.data.message);
			} else {
				toast.error(error.message);
			}
    } finally {
      setLoading(false)
    }

  };

  return (
    <div
      className={`${styles.forgotpassword_container} flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen`}
    >
      <Loader loading = {loading}/>
      <div className={`${styles.forgotpassword_nested} bg-white p-6`}>
        <div className={`${styles.backpage}`}>
          <Link href="/login">
            <IoIosArrowDropleft className="text-3xl cursor-pointer ml-2" />
          </Link>
        </div>
        <div className={styles.forgotpassword_heading}>
          <h1 className="text-center text-black text-2xl leading-10">
            Forgot Password?
          </h1>
          <p>
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </p>
        </div>

        {/* From section */}
        <form className={` ${styles.form_forgotpassword}`}>
          <div className={styles.forgotpassword_inputbox}>
            <InputField
              placeholder="Email"
              type="email"
              label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div
            className={`${styles.btn_forgotpassword}`}
            onClick={() => handleForgot()}
          >
            <Button disabled = {loading} type="button" value={"Send Email"} padding="12px 0px" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
