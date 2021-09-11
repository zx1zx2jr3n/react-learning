import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [expenseYear, setExpenseYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setExpenseYear(selectedYear);
  };

  const expenseList = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === expenseYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={expenseYear}
        onYearChangeHandler={filterChangeHandler}
      />
      <ExpenseList items={expenseList} />
    </Card>
  );
}

export default Expenses;
