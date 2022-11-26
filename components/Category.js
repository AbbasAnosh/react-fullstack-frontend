import React from "react";
import {
  CategoryStyle,
  ColumnOne,
  ColumnTwo,
  RowOne,
  RowTwo,
  RowThree,
  RowFour,
  RowFive,
} from "../styles/CategoryStyle";

const Category = () => {
  return (
    <CategoryStyle>
      <ColumnOne>
        <RowOne>
          <img
            src="https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </RowOne>
        <RowTwo>
          <img
            src="https://images.pexels.com/photos/8436998/pexels-photo-8436998.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </RowTwo>
        <RowThree>
          <img
            src="https://images.pexels.com/photos/533442/pexels-photo-533442.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </RowThree>
      </ColumnOne>
      <ColumnTwo>
        <RowFour>
          <img
            src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </RowFour>
        <RowFive>
          <img
            src="https://images.pexels.com/photos/1764564/pexels-photo-1764564.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </RowFive>
      </ColumnTwo>
    </CategoryStyle>
  );
};

export default Category;
