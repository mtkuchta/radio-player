import gsap from 'gsap';

export const animation = (elements) => {
  const randomHeight = () => {
    const random = Math.floor(Math.random() * 25);
    const height = 0;

    return `${height + random}px`;
  };

  const tl = gsap.timeline({ repeat: 1, onComplete: animation });

  tl.to(elements, 0.25, {
    height: randomHeight,
    ease: 'power3',
    stagger: {
      amount: 0.0,
      yoyo: true,
    },
  })
    .to(elements, 0.2, {
      height: randomHeight,
      ease: 'circ',
      stagger: {
        amount: 0,
      },
    })
    .to(elements, 0.15, {
      height: 0,
      ease: 'power3',
      stagger: {
        amount: 0,
      },
    });
};
