import { useRouter } from "next/router";
import Image from "next/image";
import {
  Wrapper,
  Card,
  Address,
  OrderInfo,
  InfoWrapper,
  Content,
  Section,
} from "../styles/SuccessStyle";

const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}
const success = ({ order }) => {
  const route = useRouter();
  return (
    <Wrapper>
      <Section>
        <Card
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.75 }}
        >
          <Image
            className="img"
            src="https://media2.giphy.com/media/Wq3gAYYuERDSU9DAbT/giphy.gif?cid=ecf05e472s18y2cgf2bd70w8olb7yjtai4perj51j30b8m92&rid=giphy.gif&ct=g"
            alt="Bravo"
            width={390}
            height={400}
            style={{ borderRadius: "1rem" }}
          />
          <Content>
            <h1 style={{ color: "#535353" }}>Thank you for your order!</h1>
            <h2 style={{ color: "#535353" }}>
              A confirmation email has been sent to
            </h2>
            <h2>{order.customer_details.email}.</h2>
            <h2 style={{ color: "#535353" }}>
              Please check your email inbox for the receipt🙋.
            </h2>
          </Content>
        </Card>
        <InfoWrapper>
          <Address>
            <h3>Address</h3>
            {Object.entries(order.customer_details.address).map(
              ([key, value]) => (
                <p key={key}>
                  <span style={{ fontSize: "1.2rem" }}>{key}</span>: {value}
                </p>
              )
            )}
          </Address>
          <OrderInfo>
            <h3>Products</h3>
            {order.line_items.data.map((item) => (
              <div key={item.id}>
                <p>
                  <span style={{ fontSize: "1.1rem" }}>Product : </span>
                  {item.description}
                </p>
                <p>
                  <span style={{ fontSize: "1.1rem" }}>Quantity:</span>{" "}
                  {item.quantity}
                </p>
                <p>
                  <span style={{ fontSize: "1.1rem" }}>Price:</span>{" "}
                  {item.price.unit_amount}
                </p>
              </div>
            ))}
          </OrderInfo>
        </InfoWrapper>
        <button onClick={() => route.push("/")}>Continue Shopping</button>
      </Section>
    </Wrapper>
  );
};

export default success;
