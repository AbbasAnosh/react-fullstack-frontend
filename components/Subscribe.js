import React from "react";
import { SubscribeDiv, Content, Input } from "../styles/SubscribeStyle";

const Subscribe = () => {
  return (
    <SubscribeDiv
      style={{
        backgroundImage: `url("https://img.freepik.com/free-photo/3d-illustration-smartphone-with-products-coming-out-screen-online-shopping-e-commerce-concept_58466-14529.jpg?w=1060&t=st=1668240249~exp=1668240849~hmac=b80f7929938ec67514abdef3c3343317e482145a9713ec0477f6dac7a0b0db44")`,
      }}
    >
      <div className="backgroundImage" />
      <Content>
        <h3 className="graytext">Sin up to our Newsletter</h3>
        <small>
          Get a <strong style={{ color: "#535353" }}>$25</strong> discount on
          your first oder
        </small>
        <Input>
          <input type="email" placeholder="someone@gamil.com" />
          <button>Sign Up</button>
        </Input>
      </Content>
    </SubscribeDiv>
  );
};
export default Subscribe;
