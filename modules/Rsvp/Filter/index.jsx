import DatalistInput, { useComboboxControls } from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import { cities } from "utils/CitiList";
import React, { useState } from "react";
import Image from "next/image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Pagination from "react-bootstrap/Pagination";
import styles from "/styles/vendors/vendor.module.scss";
import Vector from "public/assests/shop-invitation/weddingcard.png";
import stylesButton from "/styles/modal/modal.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { } from "react-icons/gi";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>
    );
}

const Filter = ({ isOnlyMobile }) => {
    const [paper, showPaper] = useState(false);
    const [price, showPrice] = useState(false);
    const [type, showType] = useState(false);
    const [mobileCard, showMobileCard] = useState(false);
    const [, setCity] = useState("");
    const { setValue, value } = useComboboxControls({ initialValue: "" });
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="mt-md-5 mt-2">
            {mobileCard && (
                <div className="w-screen">
                    <div className={styles.mobileCard}>
                        <div className="d-flex justify-content-end">
                            <div
                                onClick={() => {
                                    showMobileCard(!mobileCard);
                                }}
                                className={styles.closeButton}
                            >
                                x
                            </div>{" "}
                        </div>
                        <div
                            onClick={() => showPaper(!paper)}
                            className={`${styles.sideBarList} ${paper && styles.actvelink} `}
                        >
                            {!paper ? (
                                <AiOutlineRight size={20} />
                            ) : (
                                <AiOutlineDown size={20} />
                            )}
                            <span> Invited </span>
                        </div>

                        {paper && (
                            <div className={styles.expandable}>
                                <div className="checkbox">
                                    <input type="checkbox" className="mr-2 mt-1 bg-white " />
                                    <span>Yes</span>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" className="mr-2 mt-1 bg-white " />
                                    <span>No</span>
                                </div>
                            </div>
                        )}
                        <div
                            onClick={() => showPrice(!price)}
                            className={`${styles.sideBarList} ${price && styles.actvelink} `}
                        >
                            {!price ? (
                                <AiOutlineRight size={20} />
                            ) : (
                                <AiOutlineDown size={20} />
                            )}
                            <span> Are they coming? </span>
                        </div>
                        {price && (
                            <div className={styles.expandable}>
                                <div className="checkbox">
                                    <input type="checkbox" className="mr-2 mt-1 bg-white " />
                                    <span>Yes</span>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" className="mr-2 mt-1 bg-white " />
                                    <span>No</span>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" className="mr-2 mt-1 bg-white " />
                                    <span>Pending</span>
                                </div>
                            </div>
                        )}
                        <div
                            onClick={() => showType(!type)}
                            className={`${styles.sideBarList} ${type && styles.actvelink} `}
                        >
                            {!type ? (
                                <AiOutlineRight size={20} />
                            ) : (
                                <AiOutlineDown size={20} />
                            )}
                            <span>By Date </span>
                        </div>
                        {type && (
                            <div className={styles.expandable}>
                                <div className="flex flex-column" >
                                    <input type="date" className='bg-white p-1 px-2  outline-none w-full text-gray-800' />
                                    to
                                    <input type="date" className='bg-white p-1 px-2  outline-none w-full text-gray-800' />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {!isOnlyMobile && <Col md={12} className={styles.filterContainer}>
                <h1>Filter</h1>
                <div>
                    <div
                        onClick={() => showPaper(!paper)}
                        className={`${styles.sideBarList} d-flex !flex ${paper && styles.actvelink
                            } `}
                    >
                        {!paper ? (
                            <AiOutlineRight size={20} />
                        ) : (
                            <AiOutlineDown size={20} />
                        )}
                        <span>Invited </span>
                    </div>

                    {paper && (
                        <div className={styles.expandable}>
                            <div className="checkbox">
                                <input type="checkbox" className="bg-white " />
                                <span>Yes </span>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" className="bg-white " />
                                <span>No</span>
                            </div>
                        </div>
                    )}
                    <div
                        onClick={() => showPrice(!price)}
                        className={`${styles.sideBarList} ${price && styles.actvelink} `}
                    >
                        {!price ? (
                            <AiOutlineRight size={20} />
                        ) : (
                            <AiOutlineDown size={20} />
                        )}
                        <span> Are they coming? </span>
                    </div>
                    {price && (
                        <div className={styles.expandable}>
                            <div className="checkbox">
                                <input type="checkbox" className="bg-white " />
                                <span>Yes</span>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" className="bg-white " />
                                <span>No</span>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" className="bg-white " />
                                <span>Pending</span>
                            </div>
                        </div>
                    )}
                    <div
                        onClick={() => showType(!type)}
                        className={`${styles.sideBarList} ${type && styles.actvelink} `}
                    >
                        {!type ? <AiOutlineRight size={20} /> : <AiOutlineDown size={20} />}
                        <span>By Date </span>
                    </div>

                    {type && (
                        <div className={styles.expandable}>
                            <div className="flex flex-column" >
                                <input type="date" className='bg-white p-1 px-2  outline-none w-full text-gray-800' />
                                to
                                <input type="date" className='bg-white p-1 px-2  outline-none w-full text-gray-800' />
                            </div>
                        </div>
                    )}
                </div>
            </Col>}

            <Col md={3} className={styles.filterButton}>
                <span>1,000+ relevant results</span>
                <button
                    onClick={() => {
                        showMobileCard(!mobileCard);
                    }}
                >
                    {" "}
                    Filters{" "}
                </button>
            </Col>
        </div>
    );
};

export default Filter;
