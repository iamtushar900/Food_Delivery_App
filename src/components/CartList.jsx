import { useEffect, useState } from "react";
import "../Cart.css";
import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <>
      <div id="end">
        {CART?.map((cartItem, cartindex) => {
          return (
            <div>
              <img src={cartItem.url} width={100} />
              <span>
                {" "}
                {cartItem.name}
                {cartItem.category}{" "}
              </span>
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? {
                          ...item,
                          quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                        }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                -
              </button>
              <span> {cartItem.quantity} </span>
              <button
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                +
              </button>
              <span> Rs. {cartItem.price * cartItem.quantity} </span>
            </div>
          );
        })}
        <br />
        <hr />
        <p id="bill">
          {" "}
          Your Total Bill is <span></span>
          {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}{" "}
        /- Rupees
        </p>
        <hr />
        <p id="notice">Please Select Your Payment Method Below 👇</p>
      </div>

      <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="12" lg="10" xl="8">
            <MDBCard>
              <MDBCardBody className="p-md-5">
                <h4 className="mt-5">Payment details</h4>
                <div className="mt-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    <img
                      src="https://i.imgur.com/qHX7vY1.webp"
                      className="rounded"
                      width="70"
                    />
                    <div className="d-flex flex-column ms-3">
                      <span className="h5 mb-1">Credit Card</span>
                      <span className="small text-muted">
                        1234 XXXX XXXX 2570
                      </span>
                    </div>
                  </div>
                  <MDBInput
                    label="CVC"
                    id="form1"
                    type="text"
                    style={{ width: "70px" }}
                  />
                </div>
                <div className="mt-4 d-flex justify-content-between align-items-center">
                  <div className="d-flex flex-row align-items-center">
                    <img
                      src="https://i.imgur.com/qHX7vY1.webp"
                      className="rounded"
                      width="70"
                    />
                    <div className="d-flex flex-column ms-3">
                      <span className="h5 mb-1">Credit Card</span>
                      <span className="small text-muted">
                        2344 XXXX XXXX 8880
                      </span>
                    </div>
                  </div>
                  <MDBInput
                    label="CVC"
                    id="form2"
                    type="text"
                    style={{ width: "70px" }}
                  />
                </div>
                <h6 className="mt-4 mb-3 text-primary text-uppercase">
                  ADD PAYMENT METHOD
                </h6>
                <MDBInput
                  label="Email address"
                  id="form3"
                  size="lg"
                  type="email"
                />
                <MDBBtn block size="lg" className="mt-3">
                  {" "}
                  Proceed to payment <MDBIcon fas icon="long-arrow-alt-right" />
                </MDBBtn>
              </MDBCardBody>{" "}
              <p id="last">
                Thanks For Visiting Our Website , Visit Us Again , when Ever you
                Feelin Hungry 😜..🍽️...👌....🍴
              </p>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <footer/>
    </>
  );
}

export default CartList;
