/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";
import styles from "/styles/Rsvp/Rsvp.module.scss";

const SummaryTable = (props) => {
    const { list } = props
    return (

        <div
            className={`p-2 d-flex justify-content-center flex-md-column align-items-md-center align-items-end text-center ${styles.guest}`}
        >
            <div>
                <h6>Total Guest</h6>
                <h2>{list.length}</h2>
            </div>
            <div>
                <h6>Coming</h6>
                <h2>0</h2>
            </div>
            <div>
                <h6>Not Coming</h6>
                <h2>0</h2>
            </div>
            <div>
                <h6>Pending Invites</h6>
                <h2>0</h2>
            </div>
        </div>
        // </Col>
    )
};

export default SummaryTable;
