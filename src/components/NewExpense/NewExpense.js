import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [currentForm, setCurrentForm] = useState(0);

  const fetchExpenseDataHandler = (fetchedData) => {
    const expenseData = {
      ...fetchedData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };

  const initialFormHandler = () => {
    setCurrentForm(1);
  };

  const cancelFormHandler = () => {
    setCurrentForm(0);
  };

  let formContent = (
    <button onClick={initialFormHandler}>Add New Expense</button>
  );

  if (currentForm === 1) {
    formContent = <ExpenseForm onCancelFrom={cancelFormHandler} onFetchExpenseData={fetchExpenseDataHandler} />;
  }

  return <div className="new-expense">{formContent}</div>;
}

export default NewExpense;
