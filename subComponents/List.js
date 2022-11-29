import React from "react";
import Card from "../subComponents/Card";
import { ListItem } from "../styles/ProductsStyle";

const List = () => {
  const data = [
    {
      id: 1,
      img1: "https://images.unsplash.com/photo-1659828807350-29450c99ac57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1656137955203-c0f86a4a8be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Girls T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img1: "https://images.unsplash.com/photo-1668615522855-020131790355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.unsplash.com/photo-1669072086398-0d1324424255?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Men T-Shirt",
      isNew: false,
      oldPrice: 40,
      price: 32,
    },
    {
      id: 3,
      img1: "https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=600",
      img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Women T-Shirt",
      isNew: true,
      oldPrice: 29,
      price: 22,
    },
    {
      id: 4,
      img1: "https://images.unsplash.com/photo-1661649582564-c71e3cc9686b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      img2: "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Boys T-shirt",
      isNew: false,
      oldPrice: 34,
      price: 15,
    },
  ];
  return (
    <ListItem>
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </ListItem>
  );
};

export default List;
