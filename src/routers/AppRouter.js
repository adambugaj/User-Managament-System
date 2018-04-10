import React from 'react';
import { connect } from 'react-redux';
import DashboardPage from '../components/DashboardPage';
import { Header } from '../components/Header';
import TransactionList from '../components/TransactionList';
import { addTransaction } from '../actions/transactions';

// AppRouter Łączy komponenty w całosc i wyswietla na jednej stronie
const AppRouter = (props) => {
console.log(props.transaction.length);
 return (
    <div>
      <Header />
      <DashboardPage
        onSubmit={ // Zatwierdza nową listę
          (transaction) => {
          props.dispatch(addTransaction(transaction));
        }}
      />
      { // Wyświetla listę transakcji
        props.transaction.length !== 0 && props.transaction.map((trans) => {
          return <TransactionList key={trans.transactionName + Math.random()}{...trans} />
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    transaction: state.transaction
  };
}

export default connect(mapStateToProps)(AppRouter);
