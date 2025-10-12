
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
  
    if (sidebar.style.display === 'block') {
      sidebar.style.display = 'none';
    } else {
      sidebar.style.display = 'block';
    }
  }

  /*service */
  gsap.registerPlugin(ScrollTrigger); /*This line activates the ScrollTrigger plugin in GSAP,
so you can make scroll animations on your website.*/ 

  var tl = gsap.timeline({ /*it creates an animation timeline ,that happens when you scroll. */
    scrollTrigger: {
      trigger: ".scroll-animate-section .wrapper", /*The animation starts when you reach */
      pin: true, /*The section stays still on the screen when you scroll.*/
      scrub: 2, /*The animation follows your scroll movement smoothly */
      start: "top top",
      end: "50%+=500px", /*It starts at the top and ends after you scroll down a bit */
    }
  }); /*The animation follows your scroll movement smoothly  */
  
  tl.to(".scroll-animate-section .items img", { scale: 1 }, 0); /*Pictures become normal size (scale 1). */
  tl.to(".scroll-animate-section .items", { scale: 2, rotate: 0 }, 0); /*The whole items box gets bigger and straightens (no rotation). */
  tl.to(".scroll-animate-section .overlay", { height: "100%" }, 0.2); /*The overlay cover grows to full height. */
  tl.to(".scroll-animate-section .overlay h1", { scale: 1 }, 0.6); /*The big title inside overlay grows to normal size. */
  tl.to(".scroll-animate-section .items", { scale: 0.8, opacity: 0.2 }, 0.6); /*The items get smaller and become darker */
  



/*.................................................*/

