/**
 * Author: CastleBomber
 * Date: December 14th, 2022
 *
 * Simple Income Calculator App
 *
 * Implementing with github pages
 *
 * Commands:
 *  npm run start
 *  npm run deploy
 *
 * Website:
 *  https://castlebomber.github.io/JavaScript-Expense-Tracker-React
 *
 * Tips:
 *  cmd+D will change opening and closing tag simultaneously
 *  github pages: npm install gh-pages --save
 *
 */
import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
