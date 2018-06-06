import * as Behaviour from './Behaviour';
import * as ActiveUnselecting from '../../behaviour/unselecting/ActiveUnselecting';


const Unselecting = Behaviour.create({
  fields: [ ],
  name: 'unselecting',
  active: ActiveUnselecting
}) as UnselectingBehaviour;

export {
  Unselecting
};