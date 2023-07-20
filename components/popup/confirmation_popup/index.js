import { Button, Col, Modal, Row } from "react-bootstrap";
// import { MdLabelImportantOutline } from "react-icons/Md";
import styles from "/styles/modal/confirmationModal.module.scss";

// render(<App />);

const ConfirmationModal = (props) => {

    return (
        <div className='absolute left-20  '>
            <Modal
                {...props}
                size='md'
                aria-labelledby='contained-modal-title-vcenter'
                className='pro-modal '
            >
                <Modal.Body>
                    <div className='px-1 mb-md-1 mb-2 d-flex justify-content-between  items-center'>
                        <div className='d-flex justify-content-start  items-center'>
                            {/* <MdLabelImportantOutline className={` ${styles.icon} `} /> */}
                            <span className={`${styles.head} `}>Confirmation
                            </span>
                        </div>
                        <div onClick={props.onHide} className={styles.closeButton}>
                            X
                        </div>
                    </div>
                </Modal.Body>
                <div className={styles.subTitleContainer} >
                    <p className={styles.subtitle}>Will you be attending the event?</p>
                </div>

                <Row>
                    <Col md={6}>

                        <Button
                            className={styles.btn}
                            variant='danger'
                            onClick={props.onHide}
                        >
                            Yes
                        </Button>
                    </Col>
                    <Col md={6}>
                        <Button
                            className={styles.btn}
                            variant='danger'
                            onClick={props.onHide}
                        >
                            No
                        </Button>
                    </Col>
                </Row>
            </Modal>
        </div>
    );
};

export default ConfirmationModal;
