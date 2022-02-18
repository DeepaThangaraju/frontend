import React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { vechicalDetailsAction } from "../action/vechicalAction";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

export default function Vechicalpage({history, match }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const detailsState = useSelector((state) => state.vechicalDetailsReducers);
  const { loading, error, vechical } = detailsState;
  useEffect(() => {
    dispatch(vechicalDetailsAction(match.params.id));
  }, [dispatch, match]);
  const submitHandler=()=>{
    history.push(`/cart/${match.params.id}?quantity=${quantity}`)
  }
  return (
    <div>
      <Container className="m-auto">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error variant="danger">{error}</Error>
        ) : (
          <Row>
            <Col md={12}>
              <iframe
                className="py-3"
                width="90%"
                height="400"
                src={vechical.video}
                title={vechical.name}
              ></iframe>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{vechical.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>Category:{vechical.category}</ListGroup.Item>
                <ListGroup.Item>
                  <Rating value={vechical.rating} />
                </ListGroup.Item>
                <ListGroup.Item>
                  Price:Rs.{vechical.price}lakhs/-
                </ListGroup.Item>
                <ListGroup.Item>
                  Description:{vechical.description}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Status:{" "}
                      {vechical.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {vechical.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        >
                          {[...Array(vechical.countInStock).keys()].map((x) => {
                            return (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            );
                          })}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                  onClick={submitHandler}
                    className="btn-block ms-auto"
                    type="button"
                    disabled={vechical.countInStock === 0}
                  >
                    Order
                  </Button>
                  <Link className="btn btn-dark mx-3" to="/">
                    Go Back
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
