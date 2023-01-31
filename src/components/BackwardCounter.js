import Card from './Card';
import useCounter from '../hooks/use-counter';

const BackwardCounter = (forwards = true) => {
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
