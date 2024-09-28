function lenisInit() {
  // Code here
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e)
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

lenisInit();
// Cursor
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (pts) => {
  gsap.to(cursor, {
    x: pts.clientX + 25,
    y: pts.clientY + 25,
    duration: 0.1,
    ease: "power4.out",
  });
});

function sectionCaseStudy() {
  const caseStudyImages = document.querySelectorAll(".Case-Study");

  caseStudyImages.forEach((csimage, index) => {
    csimage.addEventListener("mouseenter", () => {
      const imgURL = csimage.getAttribute("data-img");
      cursor.style.width = "280px";
      cursor.style.height = "200px";
      cursor.style.borderRadius = "0%";
      cursor.style.backgroundSize = "cover";
      cursor.style.backgroundImage = `url(${imgURL})`;
    });
    csimage.addEventListener("mouseleave", () => {
      cursor.style.width = "48px";
      cursor.style.height = "48px";
      cursor.style.borderRadius = "50%";
      cursor.style.backgroundImage = "none";
    });
  });
}

// script.js
// script.js
function toggleCollabs(element) {
  const content = element.querySelector('.collabs-content');
  const arrow = element.querySelector('.arrow img');

  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0px';
      arrow.classList.remove('rotate-180');
  } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      arrow.classList.add('rotate-180');
  }
}

function toggleFaq(element) {
  const content = element.querySelector('.faq-content');
  const arrow = element.querySelector('.arrow img');
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    arrow.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    arrow.style.transform = 'rotate(0deg)';
  }
}



// rotateArrow();

sectionCaseStudy();
