

const sliderOn1 = () => {
    // Video controls functionality
    const video = document.getElementsByClassName("custom-video__video");
    for (let i = 0; i < video.length; i++) {
        video[i].addEventListener("click", function () {
            const controls = this.nextElementSibling;
            if (controls.innerHTML === "▶") {
                controls.innerHTML = "| |";
                this.play();
            } else {
                controls.innerHTML = "▶";
                this.pause();
            }
        });

        video[i].addEventListener("mouseout", function () {
            const controls = this.nextElementSibling;
            if (!this.paused) {
                controls.style.display = "none";
            }
        });

        video[i].addEventListener("mouseover", function () {
            const controls = this.nextElementSibling;
            controls.style.display = "flex";
        });

        video[i].addEventListener("ended", function () {
            const controls = this.nextElementSibling;
            controls.style.display = "flex";
            controls.innerHTML = "▶";
        }, false);
    }

    const list = document.querySelector(".main_container .custom-video");
    const items = document.querySelectorAll(".main_container .custom-video .custom-video__container");
    const dots = document.querySelectorAll(".main_container .dots li");
    const prev = document.getElementById('slide-prev');
    const next = document.getElementById('slide-next');
    const slideButtons = document.querySelectorAll(".main_container .slider_navigation .btn");
    let active = 0;

    const updateDots = () => {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[active].classList.add('active');
    };

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "slide-prev" ? -1 : 1;
            const scrollAmount = items[0].clientWidth * direction;
            list.scrollBy({ left: scrollAmount, behavior: "smooth" });

            // Update active index
            active = (active + direction + items.length) % items.length;
            updateDots();
        });
    });

    const reloadSlider = () => {
        list.scrollTo({ left: items[active].offsetLeft, behavior: "smooth" });
        updateDots();
    };

    dots.forEach((li, key) => {
        li.addEventListener("click", function() {
            active = key;
            reloadSlider();
        });
    });

    // Initial dot state
    updateDots();
};

window.addEventListener("load", sliderOn1);



// Key Changes:
// updateDots Function: This function handles updating the active dot by removing the active class from all dots and adding it to the current active dot.

// Active Index Update: The active index (active) is updated inside the event listeners for the slideButtons. This ensures that it correctly wraps around the number of items.

// Initial Dot State: The updateDots function is called initially to ensure the correct dot is highlighted when the slider loads.

// These changes ensure that when you navigate through the slides, the corresponding dot's CSS class updates correctly to reflect the active slide.










































// const sliderOn = () => {
        
//      // Adding functinality to video play and pause button
//                         const video = document.getElementsByClassName("custom-video__video");
//                         let i;
//                         for (i = 0; i < video.length; i++) {
//                               video[i].addEventListener("click", function () {
//                                     const controls = this.nextElementSibling;
//                                     if (controls.innerHTML === "▶") {
//                                           controls.innerHTML = "| |";
//                                           this.play();
//                                     } else {
//                                           controls.innerHTML = "▶";
//                                           this.pause();
//                                     }
//                               });
//                               video[i].addEventListener("mouseout", function () {
//                                     const controls = this.nextElementSibling;
//                                     if (!this.paused) {
//                                           controls.style.display = "none";
//                                     }
//                               });
//                               video[i].addEventListener("mouseover", function () {
//                                     const controls = this.nextElementSibling;
//                                     controls.style.display = "flex";
//                               });
//                               video[i].addEventListener(
//                                     "ended",
//                                     function () {
//                                           const controls = this.nextElementSibling;
//                                           controls.style.display = "flex";
//                                           controls.innerHTML = "▶";
//                                     },
//                                     false
//                               );
//                         }



// const list = document.querySelector(".main_container .custom-video");
// const items = document.querySelectorAll(".main_container .custom-video .custom-video__container");
// const dots = document.querySelectorAll(".main_container .dots li");
// const prev = document.getElementById('slide-prev');
// const next = document.getElementById('slide-next');
//  const slideButtons = document.querySelectorAll(".main_container .slider_navigation .btn");
// let active = 0;
//  slideButtons.forEach(button => {
//             button.addEventListener("click", () => {
//                  const direction = button.id==="slide-prev" ? -1 : 1;
//                   // direction = button.class==="slide-next" ? 1 : -1;
//                  const scrollAmount = items[0].clientWidth*direction;
//                  list.scrollBy({ left:scrollAmount, behavior:"smooth" });

//                   //  let lastActiveDot = document.querySelector(".main_container .dots li.active");
//                   // lastActiveDot.classList.remove('active');
//                   // dots[active].classList.add('active');


//             // reloadSlider ()
//             })
//       })





// // let active = 0;

// // let itemsLength = items.length - 1;
// // next.onclick = function() {
// //     if(active + 1 > itemsLength){
// //       active = 0;
// //     }else{
// //       active += 1;
// //     }

// //     })

// //     reloadSlider();
// // }
// // prev.onclick = function(){

// //       if(active-1<itemsLength){
// //             active = itemsLength;
// //       }else{
// //             active -= 1;
// //       }








// //       reloadSlider();

// // }


//       // let refreshSlider = setInterval(() => {
      
//       //             next.click()
      
//       //       // else if{
//       //       //       prev.click()
//       //       // }
//       // }, 3000);
// function reloadSlider () {
//       // let checkLeft = items[0].clientWidth*active;//items[active].offsetLeft; 
//       // list.style.right = checkLeft + "px"; 
//       //  if (list.scrollLeft>= list.clientWidth){
//       //       const scrollAmount = items[0].clientWidth*-1;
//       //            list.scrollBy({ left:scrollAmount, behavior:"smooth" });
//       //  }
//       const scrollAmount = list.offsetLeft;
//       list.scrollBy({ left:scrollAmount, behavior:"smooth" });

//       let lastActiveDot = document.querySelector(".main_container .dots li.active");
//       lastActiveDot.classList.remove('active');
//       dots[active].classList.add('active');
//       // clearInterval(refreshSlider);
//       // refreshSlider = setInterval(() => {next.click()}, 5000);
//       // clearInterval(refreshSlider1);
//       // refreshSlider1 = setInterval(() => {next.click()}, 5000);
// }

// dots.forEach((li, key) => {
//       li.addEventListener("click", function(){
//             active = key;
//             reloadSlider();
//       })
// })





// }

// window.addEventListener("load", sliderOn)














//  slideButtons.forEach(button => {
//             button.addEventListener("click", () => {
//                  const direction = button.id==="slide-prev" ? 1 : -1;
//                   // direction = button.class==="slide-next" ? 1 : -1;
//                  const scrollAmount = videoList.clientWidth*direction;
//                  videoList.scrollBy({ left:scrollAmount, behavior:"smooth" });
//             })
//       })



















// const sliderLoad = () => {
//     const videos = document.getElementsByClassName("custom-video__video");

//     for (let i = 0; i < videos.length; i++) {

//         videos[i].addEventListener("click", function () { // Use a regular function
//             const controls = this.nextElementSibling; // 'this' refers to the clicked video
//             if (controls.innerHTML == "▶") { // Check if 
//                   // document.getElementById("custom_video_video").controls = true;
//                 controls.innerHTML = "| |"; // Change to pause button
//                 this.play(); // Call the play() function
//             } else {
//                 controls.innerHTML = "▶"; // Change to play button
//                 this.pause(); // Call the pause method
//             }
//         });

//         videos[i].addEventListener("mouseout", function() {
//             const controls = this.nextElementSibling; // 'this' refers to the clicked video
//             if (!this.paused) { // Use this.paused (no parentheses)
//                 controls.style.display = "none"; // Hide controls
//             }
//         });

//         videos[i].addEventListener("mouseover", function() {
//             const controls = this.nextElementSibling; // 'this' refers to the clicked video
//             controls.style.display = "flex"; // Show controls
//         });

//         videos[i].addEventListener("ended", function() {
//             const controls = this.nextElementSibling; // 'this' refers to the clicked video
//             controls.style.display = "flex"; // Show controls
//             controls.innerHTML = "▶"; // Reset to play button
//         },
//       false
//       );
//     }
// }

// window.addEventListener("load", sliderLoad);


