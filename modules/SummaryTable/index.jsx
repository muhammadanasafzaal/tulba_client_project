/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";
import styles from "/styles/Rsvp/Rsvp.module.scss";

const SummaryTable = (props) => {
    const { list } = props
    return (

        <div
            className={`d-flex justify-content-center align-items-center flex-column text-center ${styles.guest}`}
        >
            <div>
                <h5>Total Guest</h5>
                <h2>{list.length}</h2>
            </div>
            <div>
                <h5>Coming</h5>
                <h2>0</h2>
            </div>
            <div>
                <h5>Not Coming</h5>
                <h2>0</h2>
            </div>
            <div>
                <h5>Pending Invites</h5>
                <h2>0</h2>
            </div>
        </div>
        // </Col>
    )
};

export default SummaryTable;
