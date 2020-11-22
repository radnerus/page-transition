import Highway from '@dogstudio/highway';;
import { TimelineLite } from 'gsap';

class Fade extends Highway.Transition {
    in({ from, to, done }) {
        const timeline1 = new TimelineLite();
        timeline1.fromTo(to, { left: '-100%', top: '50%' }, { left: '0%' })
            .fromTo(to, { height: '2vh' }, {
                height: '90%', top: '10%', onComplete: () => {
                    from.remove();
                    done();
                }
            })
            .duration(0.5);
        const timeline2 = new TimelineLite();
        timeline2.fromTo(to.children[0], { opacity: 0 }, { opacity: 1 })
            .duration(1);
    }

    out({ from, done }) {
        done();
    }
}

export default Fade;