import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/Form/Form.module.scss";
import Table from "react-bootstrap/Table";

const Payment = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="p-0">
            <div className={`p-4 ${styles.payment}`}>
              <h3 className="my-4">Payment</h3>
              <hr />
              <h3 className="my-4">Your Order</h3>
              <Table>
                <thead>
                  <tr>
                    <th>Items</th>
                    <th className="text-center">Unit price</th>
                    <th className="text-center">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      Nullam maximus sodales enim, sollicitudin congue erat
                      malesuada sed
                    </td>
                    <td className="text-center">$120</td>
                    <td className="text-center">1</td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      Nullam maximus sodales enim, sollicitudin congue erat
                      malesuada sed
                    </td>
                    <td className="text-center">$120</td>
                    <td className="text-center">1</td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      Nullam maximus sodales enim, sollicitudin congue erat
                      malesuada sed
                    </td>
                    <td className="text-center">$120</td>
                    <td className="text-center">1</td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      Nullam maximus sodales enim, sollicitudin congue erat
                      malesuada sed
                    </td>
                    <td className="text-center">$120</td>
                    <td className="text-center">1</td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      Nullam maximus sodales enim, sollicitudin congue erat
                      malesuada sed
                    </td>
                    <td className="text-center">$120</td>
                    <td className="text-center">1</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
