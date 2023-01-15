import React from "react";
import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import Button from "../UI/button/Button";
import {BtnContainer} from '../UI/button/ButtonStyle'

const NewExpense = ({ onNewExpenseAdd }) => {
  const [showForm, setShowform] = useState(false);

  const showExpenseForm = () => {
    setShowform((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenseForm}
          onExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <BtnContainer>
          <Button
            title="Добавить новый расход"
            onClick={showExpenseForm}
            btnStyle="btnStyle"
          />
        </BtnContainer>
      )}
    </div>
  );
};

export default NewExpense;
