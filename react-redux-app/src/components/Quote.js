import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getQuote } from '../actions';

const Quote = props => {
  console.log(props)
  return (
    <div className="content">
      <h1>Programming Humour</h1>
      {!props.quote && !props.isFetching && <p>X</p>}
      {props.isFetching && (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
      
      {props.quote && <p>{props.quote.setup}</p>}
      {props.quote && <p>{props.quote.punchline}</p>}
      <button onClick={props.getQuote}>Click here for a mildly amusing joke</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getQuote }
)(Quote);
