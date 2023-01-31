import Card from './Card';
import useCounter from '../hooks/use-counter'; //custom hook

const ForwardCounter = () => {
  // doesn't share states or effects across different components
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
