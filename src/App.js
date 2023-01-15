

import { Expenses } from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";
import { useState } from "react";
import { MainContainer} from "./AppStyle";
import { InnerContainer } from "./AppStyle";
import styled from "styled-components";



function App() {

const [expenses, setExpenses] = useState([
  {
    title: "Toilet paper",
    price: 300,
    date: new Date(),
  },
  {
    title: "Books",
    price: 800,
    date: new Date(),
  },
]);

const addNewExpenseHadler = (data) =>{
  const upExpenses = [...expenses]
  upExpenses.push(data)
  setExpenses(upExpenses)
}

  return ( 
      <MainContainer>
  <ContentContainer>
    <InnerContainer>
        <NewExpense onNewExpenseAdd={addNewExpenseHadler} />
      </InnerContainer>

      <Expenses expenses={expenses} />
    

  </ContentContainer>
         
  
     
    </MainContainer>
  );
}

const ContentContainer = styled.div`

width:60%;
padding: 30px;

`


export default App;


