import moderator from './moderator';
import { Console } from './moderator/channels';
import { Passthrough } from './moderator/recognizers';

const Bot = moderator.createBot();
Bot.link(Console);

const sayingHello = message$ => message$.say('Hello World');
Bot.understand(sayingHello).in(new Passthrough().as('Hello'));;
