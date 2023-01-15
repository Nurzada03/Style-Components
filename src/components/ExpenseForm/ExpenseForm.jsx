import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";
import FormInput from "../UI/Input/FormInput";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const enabled = title.length > 0 && date.length > 0 && price.length > 0;
  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };
  const saveHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      date,
      price,
      id: Math.random(),
    };

    props.onExpenseAdd(expenseData);

    setTitle("");
    setPrice("");
    setDate("");
  };
  const titleInputChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const priceInputChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const dateInputChangeHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <InputContainer>
        <FormInput
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="Введите название ..."
          styleLabel="styleLabel"
          styleInput="styleInput"
          value={title}
          onChange={titleInputChangeHandler}
        />

        <FormInput
          labelName="Колличество денег"
          inputType="number"
          id="price"
          styleLabel="styleLabel"
          styleInput="styleInput"
          value={price}
          onChange={priceInputChangeHandler}
        />
      </InputContainer>
      <div>
        <FormInput
          labelName="Дата"
          inputType="date"
          placeholder="дд.мм.гггг"
          id="date"
          styleLabel="styleLabel"
          styleInput="styleInput"
          value={date}
          onChange={dateInputChangeHandler}
        />
      </div>
      <ButtonForm>
        <Button title="Отмена" onClick={cancelHandler} btnStyle="btn" />
        <Button
          title="Сохранить"
          btnStyle="btn"
          onClick={saveHandler}
          disabled={!enabled}
        />
      </ButtonForm>
    </div>
  );
};



const InputContainer = styled.div`
  
display:flex;
justify-content: space-around;
gap: 20px;
margin-top: 20px;

`
const ButtonForm = styled.div`
  
  display:flex;
  justify-content:flex-end;
gap: 30px;

`

export default ExpenseForm;
