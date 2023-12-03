import React from 'react'
import './App.css';
import {Balance} from './components/balance';
import {History} from './components/history';
import {AddSection} from './components/add-section';
import {Modal} from './components/modal';

function App() {
  const [inputTitle, setInputTitle] = React.useState('');
  const [inputAmount, setInputAmount] = React.useState(0);
  const [incomeAmount, setIncomeAmount] = React.useState(0);
  const [currentBalance, setCurrentBalance] = React.useState(0);

  const [showExpenseTracker, setShowExpenseTracker] = React.useState(false);

  const [notes, setNotes] = React.useState([]);
  let negatives = 0;
  let positives = 0;
  notes.forEach( note => {
    if(note.amount < 0){
      negatives = negatives + +note.amount;
    }else if(note.amount >= 0){
      positives = positives + +note.amount;
    }
  })
  console.log(currentBalance, 'currentbalance')
  

  
  return (
    <div className="container">
      {showExpenseTracker ? (
        <section className="expense-tracker">
        <div className="title">Expense tracker</div>
        <Balance   balance={currentBalance} negatives={negatives} positives={positives} />
        <History incomeAmount={incomeAmount} notes={notes} setNotes={setNotes} setCurrentBalance={setCurrentBalance} currentBalance={currentBalance}/>
        <AddSection  inputTitle={inputTitle} inputAmount={inputAmount} setInputTitle={setInputTitle} setInputAmount={setInputAmount} incomeAmount={incomeAmount} setIncomeAmount={setIncomeAmount} notes={notes} setNotes={setNotes}/>
      </section>
      ) : (
        <Modal currentBalance={currentBalance} setCurrentBalance={setCurrentBalance} setShowExpenseTracker={setShowExpenseTracker}/>
      )}
    </div>


  )
}

export default App
