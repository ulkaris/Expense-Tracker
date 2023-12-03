import './transaction-box.css';
import React from 'react';

// eslint-disable-next-line react/prop-types
export function TransactionBox({incomeAmount, title, amount, classColor, notes, setNotes, index}) {
  const [isDeleteShown, setIsDeleteShown] = React.useState(false);

const handleMouseEnter = () => {
  setIsDeleteShown(true);
};

const handleDeleteClick = (index) => {
  // eslint-disable-next-line react/prop-types
  const updatedNotes = notes.slice(); 
  updatedNotes.splice(index, 1); 
  setNotes(updatedNotes); 
};
// const handleMouseEnterParent = () => {
//   setIsDeleteShown(false);
// };
// notes.map((note,index) => () =>{
   
// })


  return (
    <>
    {incomeAmount ? (
        <div className="transaction-box">
        <div className="transaction-box-contentPart" onMouseEnter={handleMouseEnter}>
            <div className="transaction-text">{title}</div>
            <div className="transaction-amount">{amount}</div>
        </div>
        <div className={classColor}></div>
        {isDeleteShown && (
            <div className="delete-btn" onClick={() => handleDeleteClick(index)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          )}
    </div>
      ) : null}
    </>
    
  )
}