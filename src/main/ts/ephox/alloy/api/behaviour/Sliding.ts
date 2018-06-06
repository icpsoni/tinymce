import * as Behaviour from './Behaviour';
import * as ActiveSliding from '../../behaviour/sliding/ActiveSliding';
import * as SlidingApis from '../../behaviour/sliding/SlidingApis';
import SlidingSchema from '../../behaviour/sliding/SlidingSchema';
import * as SlidingState from '../../behaviour/sliding/SlidingState';
import { AlloyComponent } from '../../api/component/ComponentApi';
import { SugarElement } from '../../alien/TypeDefinitions';


const Sliding = Behaviour.create({
  fields: SlidingSchema,
  name: 'sliding',
  active: ActiveSliding,
  apis: SlidingApis,
  state: SlidingState
}) as SlidingBehaviour;

export {
  Sliding
};