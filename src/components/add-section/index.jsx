import './add-section.css';
import React from 'react'

// eslint-disable-next-line react/prop-types
export function AddSection({setInputTitle, setInputAmount, inputAmount, setIncomeAmount, incomeAmount, notes, setNotes}) {

  React.useEffect(() => {
    
    setIncomeAmount(inputAmount);
    console.log(incomeAmount);

  },[inputAmount, incomeAmount, setIncomeAmount])

  

const getInputTitle = (event) => {
  event.preventDefault();
  const title = event.target.elements.title.value;
  const amount = event.target.elements.amount.value;
  
  
  setInputTitle(title);
  setInputAmount(amount);
  
  const newNote = { title, amount };
    setNotes([...notes, newNote]);
}
  return (
    <section className="add">
        <div className="add-title">Add new transaction</div>
        <form action="" onSubmit={getInputTitle}>
        <div className="input-text-title">Text</div>
        <input type="text" className='input-title input-add'placeholder='Enter text...' name='title'/>
        <div className="input-amount-holder">
            <div className="input-text-title">Amount</div>
            <div className="input-text-title">(negative-expense, positive-income)</div>
        </div>
        <input type="text" className='input-amount input-add' placeholder='Enter amount...' name='amount' />
        <button className="add-btn">Add transaction</button>
        </form>
    </section>
    
  )
}