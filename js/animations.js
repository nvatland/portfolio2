gsap.registerPlugin(ScrollTrigger);



ScrollTrigger.matchMedia({
  "(min-width: 801px)": function() {
    gsap.utils.toArray('.project-container').forEach((item, i) => {
      console.log(item);
      item.image = item.querySelector('figure');
      item.header = item.querySelector('h3');
      item.desc = item.querySelector('p');
      item.link = item.querySelector('.link');

      let dir = i % 2 === 0 ? -1 : 1;
      let tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: '+=100',
            scrub: true,
          }
        })
        .fromTo(item, {
          opacity: 0
        }, {
          opacity: 1,
          duration: 0.01
        })
        .fromTo(item.image, {
          xPercent: 10 * dir,
          opacity: 0
        }, {
          xPercent: 0,
          opacity: 1,
          duration: 0.6
        }, "<")
        .fromTo([item.header, item.desc, item.link], {
          xPercent: 5 * dir * -1,
          opacity: 0
        }, {
          xPercent: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2
        }, "<")
    })
  },
  '(max-width:800px)': function() {
    gsap.utils.toArray('.project-container').forEach((item, i) => {
      console.log('hello 800', item)
      gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: '+=100',
          scrub: true,

        }
      }).fromTo(item, {
        yPercent: 20,
        opacity: 0
      }, {
        yPercent: 0,
        opacity: 1,
        duration: 0.4
      })

    });
  },

});

let header = gsap.timeline()

  .fromTo('header h2', {
    yPercent: 50,
    opacity: 0
  }, {
    yPercent: 0,
    opacity: 1,
    duration: 0.4
  });

if (document.querySelector('main nav')) {
  header.fromTo('main nav li', {
    yPercent: 25,
    opacity: 0
  }, {
    opacity: 1,
    yPercent: 0,
    duration: 0.4,
    stagger: 0.2
  }, ">")
}

if (document.querySelector('.fade-up-in')) {
  header.fromTo('.fade-up-in', {
    yPercent: 5,
    opacity: 0
  }, {
    yPercent: 0,
    opacity: 1,
    duration: 0.4
  }, ">");

}
