image_slider = document.querySelector(".image-slider");

images_in_slider = Array.from(image_slider.getElementsByTagName("IMG"));


interval = 4000

current_image = 1;
images_count = image_slider.childElementCount;

images_in_slider.forEach(element => {
    element.style.transform = "translateX(-"  + (100*current_image) + "%)";
});


autoSlideMechanism = () => {
    interval = 2200
    if (current_image < images_count - 1) {
        current_image++;
        images_in_slider.forEach(element => {
            element.style.transition = "all 1.4s ease";
            element.style.transform = "translateX(-"  + (100*current_image) + "%)";
        });
    }
    else{
        current_image = 1
        images_in_slider.forEach(element => {
            element.style.transition = "none";
            element.style.transform = "translateX(-"  + (100*current_image) + "%)";
        });
        setTimeout(autoSlideMechanism, 2000)
   }
}

setInterval(autoSlideMechanism, interval)