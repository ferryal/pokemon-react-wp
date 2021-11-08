import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Delayed = ({ waitBeforeShow, children }) => {
  const [state, setState] = useState({ hidden: true });
  const onDelay = () => {
    setTimeout(() => {
      setState({ hidden: false });
    }, waitBeforeShow);
  };

  useEffect(() => {
    onDelay();
  }, []);

  return state.hidden ? '' : children;
};

Delayed.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired,
};

export default Delayed;
