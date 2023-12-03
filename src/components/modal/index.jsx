import { useState, useEffect } from 'react';
import './modal.css';

// eslint-disable-next-line react/prop-types
export const Modal= ({setCurrentBalance, setShowExpenseTracker}) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (showModal) {
      // Logic to open the modal
      console.log('Modal is shown');
    }
  }, [showModal]);

  // Close the modal

  
  const getModalInput= (event) => {
    event.preventDefault();
    setShowModal(false);
    setShowExpenseTracker(true);
    const modalInput = event.target.elements.modalValue.value;
    setCurrentBalance(modalInput)
    
  }

  return (
    <>
      {}
      {showModal && (
        <div className="modal">
          {/* Modal content */}
          <form action="" onSubmit={getModalInput} className='form'>
          <input type="text" placeholder='What is your current balance?'name='modalValue' className='modalInput'/>
          <button className='send-btn'>Ok</button>
          </form>
        </div>
      )}
    </>
  );
};
