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

const SideBar = ({ isOnlyMobile }) => {
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
              <span> Wedding Vendors </span>
            </div>

            {paper && (
              <div className={styles.expandable}>
                <div>
                  <input type="checkbox" className="mr-2 mt-1 bg-white" />
                  <span>Catering</span>
                </div>
                <div>
                  <input type="checkbox" className="mr-2 mt-1 bg-white" />
                  <span>Decoration</span>
                </div>
                <div>
                  <input type="checkbox" className="mr-2 mt-1 bg-white" />
                  <span>Florist</span>
                </div>
                <div>
                  <input type="checkbox" className="mr-2 mt-1 bg-white" />
                  <span> sdds</span>
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
              <span> Price </span>
            </div>
            {price && (
              <div className={styles.expandable}>
                <div>
                  <input type="checkbox" className="mr-2 mt-1 bg-white" />
                  <span>$1-$10</span>
                </div>
                <div>
                  <input type="checkbox" className="mr-2 mt-1 bg-white" />
                  <span>$11-$20</span>
                </div>
                <div>
                  <input type="checkbox" className="mr-2 mt-1 bg-white" />
                  <span>$20-$30</span>
                </div>
                <div>
                  <input type="checkbox" className="mr-2 mt-1 bg-white" />
                  <span>$30-$50</span>
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
              <span>Location </span>
            </div>
            {type && (
              <div className={styles.expandable}>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Search Location"
                  id="vendor-filter-search"
                >
                  <Form.Control
                    type="text"
                    list="locations"
                    placeholder="Search Vendors, Catering"
                    className={styles.input}

                  // <AiOutlineSearch />
                  />

                  <datalist
                    id="locations"
                    className={`hidden text-black bg-white`}
                  >
                    {cities.map((item, index) => (
                      <option className="bg-white" key={index} value={item.value}>
                      </option>
                    ))}
                  </datalist>
                </FloatingLabel>
              </div>
            )}
          </div>
        </div>
      )}

      {!isOnlyMobile && <Col md={12} className={styles.filterContainer}>
        <h1>Categories</h1>
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
            <span> Wedding Vendors </span>
          </div>

          {paper && (
            <div className={styles.expandable}>
              <div>
                <input type="checkbox" className="bg-white" />
                <span>Catering </span>
              </div>
              <div>
                <input type="checkbox" className="bg-white" />
                <span>Decoration</span>
              </div>
              <div>
                <input type="checkbox" className="bg-white" />
                <span>Florist</span>
              </div>
              <div>
                <input type="checkbox" className="bg-white" />
                <span>Venue</span>
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
            <span> Price </span>
          </div>
          {price && (
            <div className={styles.expandable}>
              <div>
                <input type="checkbox" className="bg-white" />
                <span>$1-$10</span>
              </div>
              <div>
                <input type="checkbox" className="bg-white" />
                <span>$11-$20</span>
              </div>
              <div>
                <input type="checkbox" className="bg-white" />
                <span>$20-$30</span>
              </div>
              <div>
                <input type="checkbox" className="bg-white" />
                <span>$30-$50</span>
              </div>
            </div>
          )}
          <div
            onClick={() => showType(!type)}
            className={`${styles.sideBarList} ${type && styles.actvelink} `}
          >
            {!type ? <AiOutlineRight size={20} /> : <AiOutlineDown size={20} />}
            <span>Location </span>
          </div>

          {type && (
            <div
              // className={styles.expandable}
              className="p-2"
              style={{ position: "relative", zIndex: 10 }}
            >
              <div
                style={{
                  zIndex: 10,
                  height: "50px",
                  marginRight: "100px",
                }}
              >
                <DatalistInput
                  placeholder="Location"
                  items={cities}
                  value={value}
                  setValue={setValue}
                  onSelect={(item) => {
                    setCity(item.value);
                  }}
                  isExpanded={false}
                  isCollapsedStyle={{
                    border: "none",
                    outline: "none",
                    maxHeight: "50vh",
                    overflowY: "scroll",
                  }}
                  isExpandedStyle={{
                    maxHeight: "50vh",
                    overflowY: "scroll",
                    border: "none",
                    outline: "none",
                  }}
                />
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

export default SideBar;
