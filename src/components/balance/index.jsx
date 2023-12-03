import './balance.css'
// eslint-disable-next-line react/prop-types
export function Balance({balance, negatives, positives}) {
  // setCurrentBalance(balance + negatives +positives);
  
  return (
    <div className="balance-container">
        <div className="balance-container-title">Your balance</div>
        <div className="total-balance-amount">{positives + negatives? +balance + +positives + +negatives : balance}</div>
        <div className="income-expense-box">
          <div className="income-box income-expense-box-general">
            <div className="income-yazisi">INCOME</div>
            <div className="income-amount">{positives}</div>
          </div>
          <div className=" income-expense-box-general">
            <div className="expense-yazisi">EXPENSE</div>
            <div className="expense-amount">
            {negatives}
            </div>
          </div>
        </div>
      </div>
  )
}