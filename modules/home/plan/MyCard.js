/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "/styles/home/Index.module.scss";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";
const MyCard = (props) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.redbox}>
        <div className={` ${styles.back}`}>
          <Image
            src={props.imgsrc}
            width={"300px"}
            height={"250px"}
            layout="fixed"
            alt="template"
            className={`img-fluid ${styles.plan_img1}`}
          />
        </div>
        {/* <img src={props.imgsrc} alt="template" /> */}
        <div className={styles.box}>
          <h6>{props.head}</h6>
          <p>{props.para}</p>
          <button
            onClick={() => router.push(props.path)}
            className="px-2 py-2 d-flex"
          >
            {props.btn}
            <AiOutlineArrowRight className="my-1 mx-2" />
          </button>
        </div>
      </div>
    </>
  );
};

const MyCardOne = (props) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.redbox}>
        <div className={` ${styles.back1}`}>
          <Image
            // src={props.imgsrc}
            // width={"432px"}
            // height={"280px"}
            src={props.imgsrc}
            width={"400px"}
            height={"250px"}
            layout="fixed"
            alt="template"
            className={`img-fluid ${styles.plan_img1}`}
          />
        </div>
        {/* <img src={props.imgsrc} alt="template" /> */}
        <div className={styles.box}>
          <h6>{props.head}</h6>
          <p>{props.para}</p>
          <button
            onClick={() => router.push(props.path)}
            className="px-2 py-2 d-flex"
          >
            {props.btn}
            <AiOutlineArrowRight className="my-1 mx-2" />
          </button>
        </div>
      </div>
    </>
  );
};

const MyCardYellow = (props) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.yellowbox}>
        <div className={`${styles.backgroundYellow}`}>
          <Image
            src={props.imgsrc}
            width={"480px"}
            height={"480px"}
            alt="template"
            layout="fixed"
            className={`img-fluid ${styles.plan_img}`}
          />
        </div>
        <div className={styles.box}>
          <h6>{props.head}</h6>
          <p>{props.para}</p>
          <button
            onClick={() => router.push(props.path)}
            className="px-2 py-2 d-flex"
          >
            {props.btn}
            <AiOutlineArrowRight className="my-1 mx-2" />
          </button>
        </div>
      </div>
    </>
  );
};
const MyCardYellow2 = (props) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.yellowbox}>
        <div className={`${styles.backgroundYellow2} `}>
          <Image
            src={props.imgsrc}
            width={"400px"}
            height={"300px"}
            alt="template"
            layout="fixed"
            className={`img-fluid ${styles.plan_img}`}
          />
        </div>
        <div className={styles.box}>
          <h6>{props.head}</h6>
          <p>{props.para}</p>
          <button
            onClick={() => router.push(props.path)}
            className="px-2 py-2 d-flex"
          >
            {props.btn}
            <AiOutlineArrowRight className="my-1 mx-2" />
          </button>
        </div>
      </div>
    </>
  );
};
const MyCardBlue = (props) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.bluebox}>
        <div className={`${styles.backgroundBlue}`}>
          <div className="d-flex justify-content-center">
            <div>
              <Image
                src={props.imgsrc}
                width={"300px"}
                height={"300px"}
                layout="fixed"
                alt="template"
                className={`img-fluid ${styles.plan_img}`}
              />
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <h6>{props.head}</h6>
          <p>{props.para}</p>
          <button
            onClick={() => router.push(props.path)}
            className="px-2 py-2 d-flex"
          >
            {props.btn}
            <AiOutlineArrowRight className="my-1 mx-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export { MyCard, MyCardBlue, MyCardYellow, MyCardYellow2, MyCardOne };
