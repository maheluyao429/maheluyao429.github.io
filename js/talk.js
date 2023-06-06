new TypeIt("#tlyzby", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("TLY && ZBY")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第八年啦...")
    .pause(3000)
    .go();

new TypeIt('#talkToZBY', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();


