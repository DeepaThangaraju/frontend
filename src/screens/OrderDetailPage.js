import React, { useEffect } from "react";
import { Button, Row, Col, ListGroup, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";
import { orderDetails } from "../action/orderAction";

export default function OrderDetailPage({ match }) {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetailState = useSelector((state) => state.orderDetailsReducer);
  const { order, loading, error } = orderDetailState;
   
//   if(!loading){
//     order.itemPrice = order.orderItems.reduce(
//         (acc, item) => acc + item.price * item.quantity,
//         0
//       );
//   }

  useEffect(() => {
    dispatch(orderDetails(orderId));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error variant="danger" error={error} />
      ) : (
        <Row>
          <h2>Order {order._id}</h2>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Shipping</h2>
                <strong>Address</strong>
                <p>
                  {order.shippingAddress.address},{order.shippingAddress.city},
                  {order.shippingAddress.postalcode},
                  {order.shippingAddress.states},{order.shippingAddress.country}
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Payment Method</h2>
                <p>
                  <strong>Method:</strong>
                  {order.paymentMethod}
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Ordered Car</h2>
                {order.orderItems.length === 0 ? (
                  <Error error="Not yet ordered"></Error>
                ) : (
                  <ListGroup variant="flush">
                    {order.orderItems.map((item, index) => {
                      return (
                        <ListGroup.Item key={index}>
                          <Row>
                            <Col md={1}>
                              <Image
                                src={item.pic}
                                alt={item.name}
                                fluid
                                rounded
                              ></Image>
                            </Col>
                            <Col>
                              <Link to={`/vechical/${item.vechical}`}>
                                {item.name}
                              </Link>
                            </Col>
                            <Col md={5}>
                              {item.quantity} * {item.price} = Rs.
                              {item.quantity * item.price}/-
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroup.Item>
                <h2>Order Details</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Car</Col>
                  <Col>Rs.{order.itemPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>Rs.{order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>Rs.{order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>Rs.{order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
}
