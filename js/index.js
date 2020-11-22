import HighWay from '@dogstudio/highway';
import Fade from './transition';

const H = new HighWay.Core({
    transitions: {
        default: Fade
    }
})