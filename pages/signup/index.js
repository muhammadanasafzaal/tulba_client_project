import Button from "components/form/button";
import InputField from "components/form/inputfield";
import styles from "/styles/authentication/Signup.module.scss";
import Image from "next/image";
import googlelogo from "public/assests/GoogleLogo.svg";
import facebooklogo from "public/assests/facebooklogo.svg";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "redux/auth/authActions";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "utils/Loader";
import { toast } from "react-hot-toast";
import { resetError } from "redux/auth/authSlice";
import { validateEmail, validatePassword } from "utils/functions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUser, getAllRoles } from "services/auth";
import { getRoles } from "redux/auth/authSlice";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [confirmPassError, setConfirmPassError] = useState(false);
  const router = useRouter();

  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      toast.error("Please input a valid email!");
      return;
    }

    if (!validatePassword(password)) {
      toast.error("Password doesn't meet all the requirements");
      return;
    }

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
      return;
    }

    let body = {
      name,
      email,
      password,
      passwordConfirm,
      userRole: "user",
      status: "active",
    };

    dispatch(registerUser(body));
  };
  const callGetRoles = async () => {
    const data = await getAllRoles();
    dispatch(getRoles(data));
  };
  useEffect(() => {
    callGetRoles();
    // console.log("useEffect",getAllRoles());
  }, []);
  useEffect(() => {
    userInfo && router.push("/profile");
  }, [userInfo]);

  useEffect(() => {
    if (error) {
      toast.error(error || "Something went wrong");
      dispatch(resetError());
    }
  }, [error]);

  useEffect(() => {
    const { name, email } = router.query;
    if (name || email) {
      setName(name || "");
      setEmail(email || "");
      document.getElementById("password")?.focus();
    }
  }, [router]);


  const signUpSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 5 characters long")
      .max(15, "Name must not exceed 10 characters")
      .required("Please provide name")
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        "Name can only contain Latin letters."
      ),
    email: Yup.string()
      .email("Email is invalid")
      .required("Please provide email"),
    gender: Yup.string().required("Please select gender"),
    role: Yup.string().required("Please select role"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters long")
      .max(10, "Password must not exceed 10 characters")
      .required("Please provide password"),
    confirmPassword: Yup.string().required("Please confirm password"),
  });

  const signUp = async (values) => {
    return await createUser(values);
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    role: "",
  };

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        if (values.confirmPassword == values.password) {
          console.log('values:',values)
          await signUp(values)
          	.then((res) => {
          	console.log(res)
          	alert('Registered successfully')
          	// navigate('/login')
          	})
          	.catch((error) => {
          	if(error){
          		console.log(error)
          		alert('Registeration error')
          	}
          	})
          console.log("values:", values);
          action.resetForm();
        } else {
          setConfirmPassError(true);
          console.log(confirmPassError);
        }
      },
    });

  const passwordStrength = {
    length: values.password.length >= 8,
    uppercase: /[A-Z]/.test(values.password),
    lowercase: /[a-z]/.test(values.password),
    number: /[0-9]/.test(values.password),
    symbol: /[!@#$%^&*]/.test(values.password),
  };

  return (
    <div
      className={`${styles.signup_container} flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen`}
    >
      <Loader loading={loading} />
      <div className={`${styles.signup_nested} bg-white p-6`}>
        <div className={styles.signup_heading}>
          <div className={`${styles.backpage}`}>
            <Link href="/">
              <IoIosArrowDropleft className="text-3xl cursor-pointer ml-2" />
            </Link>
          </div>
          <h1 className="text-center text-black text-2xl leading-10">
            Create Your New Account
          </h1>
          <p className="text-center leading-4">
            Enter your details to get started
          </p>
        </div>

        {/* Social Link section */}
        <div className={styles.soical_links}>
          <p className="text-center text-base py-6">Continue With</p>
          <div className="flex justify-center items-center w-full gap-6">
            <div
              className={`flex gap-2 justify-center items-center cursor-pointer ${styles.social_data}`}
            >
              <Image
                src={googlelogo}
                alt="googlelogo"
                width={"20px"}
                height={"20px"}
                loading="lazy"
              />
              <span className="text-base leading-6 text-black">Google</span>
            </div>
            <div
              className={`flex gap-2 justify-center items-center cursor-pointer ${styles.social_data}`}
            >
              <Image
                src={facebooklogo}
                alt="googlelogo"
                width={"20px"}
                height={"20px"}
                loading="lazy"
              />
              <span className="text-base leading-6 text-black">Facebook</span>
            </div>
          </div>
        </div>

        {/* Or Section */}
        <div
          className={`flex justify-center gap-2 items-center my-7 ${styles.or_section}`}
        >
          <div></div>
          <p>Or</p>
          <div></div>
        </div>

        {/* Form section */}
        <form className={`${styles.form_signup}`} onSubmit={handleSubmit}>
          <div className={styles.signup_inputbox}>
            <InputField
              placeholder="Name"
              type="text"
              label="Name"
              value={values.name}
              name="name"
              onChange={handleChange}
            />
            <div className="error">
              {errors.name && touched.name ? (
                <p className="form-error">{errors.name}</p>
              ) : null}
            </div>
          </div>
          <div className={styles.signup_inputbox}>
            <InputField
              placeholder="Email"
              type="email"
              label="Email"
              name="email"
              value={values?.email}
              onChange={handleChange}
            />
            <div className="error">
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
          </div>
          <div style={{ padding: "8px 14px" }}>
            <div
              style={{
                fontWeight: "200",
                fontFamily: "gilorymedium",
                fontSize: "17px !important",
                lineHeight: "20px !important",
                color: "#666666 !important",
                padding: "0px 0px 0px 4px",
                paddingBottom: "8px",
              }}
            >
              {" "}
              Gender
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div class="checkbox">
                <input
                  className={`${true ? "checked-green" : ""} mt-2 mr-2`}
                  type="checkbox"
                  id="status"
                  value="male"
                  checked={"male" === values.gender}
                  onChange={(e) => setFieldValue("gender", e.target.value)}
                />
                <span style={{ padding: "5px 10px" }}>Male</span>
              </div>

              <div class="checkbox">
                <input
                  className={`${true ? "checked-green" : ""} mt-2 mr-2`}
                  type="checkbox"
                  id="status"
                  value={"female"}
                  checked={"female" === values.gender}
                  onChange={(e) => setFieldValue("gender", e.target.value)}
                />
                <span style={{ padding: "5px 10px" }}>Female</span>
              </div>
            </div>
          </div>
          {errors.gender && touched.gender ? (
            <p className="form-error">{errors.gender}</p>
          ) : null}
          <div style={{ padding: "8px 14px" }}>
            <div
              style={{
                fontWeight: "200",
                fontFamily: "gilorymedium",
                fontSize: "17px !important",
                lineHeight: "20px !important",
                color: "#666666 !important",
                padding: "0px 0px 0px 4px",
                paddingBottom: "8px",
              }}
            >
              Role
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {state?.auth?.allRoles?.map((item) => (
                <div class="checkbox">
                  <input
                    className={`${true ? "checked-green" : ""} mt-2 mr-2`}
                    type="checkbox"
                    id={item?._id}
                    value={item?._id}
                    checked={values.role === item?._id}
                    onChange={(e) => setFieldValue("role", e.target.value)}
                  />
                  <span style={{ padding: "5px 10px" }}>{item.role}</span>
                </div>
              ))}
            </div>
          </div>
          {errors.role && touched.role ? (
            <p className="form-error">{errors.role}</p>
          ) : null}
          <div className={styles.signup_inputbox}>
            <InputField
              labeluse="password"
              placeholder="Password"
              type="password"
              label="Password"
              name="password"
              value={values?.password}
              onChange={handleChange}
            />
            <div className="error">
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>
          </div>
          <div className={styles.signup_inputbox}>
            <li
              style={{
                color:
                  !!values.password.length &&
                  (passwordStrength.length ? "#4bb543" : "#FF0000"),
              }}
            >
              At least 8 characters
            </li>
            <li
              style={{
                color:
                  !!values.password.length &&
                  (passwordStrength.uppercase ? "#4bb543" : "#FF0000"),
              }}
            >
              Has 1 uppercase letter
            </li>
            <li
              style={{
                color:
                  !!values.password.length &&
                  (passwordStrength.lowercase ? "#4bb543" : "#FF0000"),
              }}
            >
              Has 1 lowercase letter
            </li>
            <li
              style={{
                color:
                  !!values.password.length &&
                  (passwordStrength.number ? "#4bb543" : "#FF0000"),
              }}
            >
              Has 1 number
            </li>
            <li
              style={{
                color:
                  !!values.password.length &&
                  (passwordStrength.symbol ? "#4bb543" : "#FF0000"),
              }}
            >
              Has 1 symbol
            </li>
          </div>
          <div className={styles.signup_inputbox}>
            <InputField
              placeholder="Confirm password"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={values?.confirmPassword}
              onChange={handleChange}
            />
            <div className="error">
              {values.confirmPassword &&
              values.confirmPassword != values.password ? (
                <p className="form-error">Passwords do not match</p>
              ) : null}
            </div>
          </div>
          <div className={` ${styles.btn_signup}`}>
            <Button
              value={"Sign up"}
              padding="12px 0px"
              disabled={loading}
              type="submit"
            />
          </div>
        </form>

        <div className={`text-center ${styles.login_link}`}>
          Already have an account! <Link href="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
