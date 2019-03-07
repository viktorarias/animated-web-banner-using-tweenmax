import {
    Tweenmax,
    TimelineMax
} from 'gsap/TweenMax';



function animation() {
    const timeLine = new TimelineMax();

    timeLine
        .addLabel('start')
        .add(scene1Animation())
        .add(scene2Animation())
        .add(scene3Animation())
        .add(scene4Animation())
        .add(scene5Animation())

    return timeLine;
}


function scene1Animation() {
    const timeLine = new TimelineMax();
    const copy1 = document.querySelector('.Legal');
    const bg1 = document.querySelector('.bg-1');

    timeLine
        .addLabel('scene__1')
        .from(
            bg1,
            2, {
                scale: 1.5,
                opacity: 0,
                force3D: true,
                rotationZ: 0.01,
                ease: SlowMo.ease.config(0.1, 0.1, false)
            },
            'scene__1'
        )
        .from(
            copy1,
            0.5, {
                x: -300,
                opacity: 0,
                ease: Elastic.easeOut.config(1, 1)
            },
            'scene__1'
        )
        .to(
            [copy1, bg1],
            0.5, {
                opacity: 0,
                ease: Power4.easeOut

            },
            'scene__1+=2'
        )


    return timeLine;
}

function scene2Animation() {
    const timeLine = new TimelineMax();
    const copy2 = document.querySelector('.f2-hd-copy-1');
    const bg2 = document.querySelector('.bg-2');
    const cta = document.querySelector('.f5-hd-cta');

    timeLine
        .addLabel('scene__2')
        .from(
            bg2,
            .5, {
                y: -400,
                opacity: 0,
                force3D: true,
                rotationZ: 0.01,
                ease: SlowMo.ease.config(0.1, 0.1, false)
            },
            'scene__2'
        )
        .from(
            cta,
            .5, {

                y: 50,
                ease: Power4.easeOut
            },
            'scene__2'
        )
        .from(
            copy2,
            0.5, {
                x: -300,
                opacity: 0,
                ease: Elastic.easeOut.config(1, 1)

            },
            'scene__2'
        )
        .to(
            copy2,
            0.5, {
                opacity: 0,
                ease: Power4.easeOut

            },
            'scene__2+=2'
        )


    return timeLine;
}

function scene3Animation() {
    const timeLine = new TimelineMax();
    const copy3 = document.querySelector('.f3-hd-copy-1');
    const bg3 = document.querySelector('.bg-3');

    timeLine
        .addLabel('scene__3')
        .from(
            bg3,
            .5, {
                y: -400,
                opacity: 0,
                force3D: true,
                rotationZ: 0.01,
                ease: SlowMo.ease.config(0.1, 0.1, false)
            },
            'scene__3'
        )
        .from(
            copy3,
            0.5, {
                x: -300,
                opacity: 0,
                ease: Elastic.easeOut.config(1, 1)

            },
            'scene__3'
        )
        .to(
            copy3,
            0.5, {
                opacity: 0,
                ease: Power4.easeOut

            },
            'scene__3+=2'
        )


    return timeLine;
}

function scene4Animation() {
    const timeLine = new TimelineMax();
    const copy4 = document.querySelector('.f4-hd-copy-1');
    const bg4 = document.querySelector('.bg-4');

    timeLine
        .addLabel('scene__4')
        .from(
            bg4,
            .5, {
                y: -400,
                opacity: 0,
                force3D: true,
                rotationZ: 0.01,
                ease: SlowMo.ease.config(0.1, 0.1, false)
            },
            'scene__4'
        )
        .from(
            copy4,
            0.5, {
                x: -300,
                opacity: 0,
                ease: Elastic.easeOut.config(1, 1)

            },
            'scene__4'
        )
        .to(
            copy4,
            0.5, {
                opacity: 0,
                ease: Power4.easeOut

            },
            'scene__4+=2'
        )


    return timeLine;
}

function scene5Animation() {
    const timeLine = new TimelineMax();
    const copy5 = document.querySelector('.f5-hd-copy-1');
    const bg5 = document.querySelector('.bg-5');

    timeLine
        .addLabel('scene__5')
        .from(
            bg5,
            .5, {
                y: -400,
                opacity: 0,
                force3D: true,
                rotationZ: 0.01,
                ease: SlowMo.ease.config(0.1, 0.1, false)
            },
            'scene__5'
        )
        .from(
            copy5,
            0.5, {
                x: -300,
                opacity: 0,
                ease: Elastic.easeOut.config(1, 1)

            },
            'scene__5'
        )

    return timeLine;
}
animation();