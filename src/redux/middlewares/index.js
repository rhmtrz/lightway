import { applyMiddleware } from 'redux';
import loader from './loader';

export default applyMiddleware(
  loader,
);
