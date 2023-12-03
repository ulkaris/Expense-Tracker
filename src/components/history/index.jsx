import './history.css';
import {TransactionBox} from '../../components/transaction-box';

// eslint-disable-next-line react/prop-types
export function History({incomeAmount, notes, setNotes}) {
console.log(notes);

  return (
    <section className="history">
        <div className="history-title">History</div>
        <div className="transaction-boxes">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <TransactionBox 
            incomeAmount={incomeAmount} 
            title={note.title} 
            amount={note.amount} 
            classColor={note.amount > 0 ? 'positive-color' : 'negative-color'}
            notes={notes}
            setNotes={setNotes}
            index={index}
            />
          </div>
        ))}

        </div>
    </section>
  )
}