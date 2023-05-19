var nav = document.querySelector(".create-div");

function createanim() {
    nav.addEventListener("mousemove", (dets) => {

        gsap.to(".create-div span", {
            y: "-16vw",
            duration: .3,
            ease: Expo
        })
    });
    nav.addEventListener("mouseleave", (dets) => {

        gsap.to(".create-div span", {
            y: 0,
            duration: .3,
            ease: Expo
        })
    });
}


























createanim();