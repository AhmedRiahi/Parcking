import { Container } from 'inversify';
import { HelloController ,CarController } from '../controllers';

import { CarService } from '../services'


var DIContainer = new Container();
DIContainer.bind<HelloController>(HelloController).toSelf();
DIContainer.bind<CarController>(CarController).toSelf();


DIContainer.bind<CarService>(CarService).toSelf();


export default DIContainer;