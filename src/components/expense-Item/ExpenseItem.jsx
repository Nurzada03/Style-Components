import React from "react";
import {
  List,
  InnerList,
  DateContainer,
  InnerListP,
  SecondContainer,
} from "./ExpenseItemStyle";


export const ExpenseItem = ({ title, date, price }) => {
  return (
    <List>
      <InnerList >
        <DateContainer>{new Date(date).toString()}</DateContainer>
        <InnerListP>{title}</InnerListP>
      </InnerList>
      <SecondContainer>
        <p>{price} som</p>
      </SecondContainer>
    </List>
  );
};
