import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { vechicalAction } from "../action/vechicalAction";
import { Error } from "../components/Error";
import { Loading } from "../components/Loading";

export default function Homepage() {
  const dispatch = useDispatch();
  const vechicalState = useSelector((state) => state.vechicalReducers);
  const { loading, error, vechicals } = vechicalState;
  useEffect(() => {
    dispatch(vechicalAction());
  }, [dispatch]);

  return (
    <div>
        {loading ? (<Loading/>):
        error ? (<Error variant='danger'/>):
      (<Row>
        {vechicals.map((vechical) => {
          return (
            <Col key={vechical._id} sm={12} md={6} lg={4} xl={3}>
              <Product vechical={vechical} />
            </Col>
          );
        })}
      </Row>)}
    </div>
  );
}
