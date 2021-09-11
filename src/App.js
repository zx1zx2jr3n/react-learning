import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New Television",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenseList, setExpenseList] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenseList((prev) => [expenseData, ...prev]);
  };

  return (
    <div>
      <NewExpenses onAddExpenseData={addExpenseHandler} />
      <Expenses items={expenseList} />
    </div>
  );
}

export default App;
