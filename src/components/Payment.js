import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FormComponent from "../components/FormComponent";
import { savePaymentMethod } from "../action/cardAction";
import CheckoutSteps from "./CheckoutSteps";

export default function Payment({ history }) {
  const cart = useSelector((state) => state.cartReducer);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormComponent>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler} className="justify-content-center">
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="PayPal or CreditCard"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Stripe"
              id="stripe"
              name="paymentMethod"
              value="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormComponent>
  );
}
