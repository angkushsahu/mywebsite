const educationAndSkillObserver = new IntersectionObserver(function(entries, educationAndSkillObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        else {
            entry.target.classList.add("toggle_opacity");
            educationAndSkillObserver.unobserve(entry.target);
        }
    })
},
{ threshold: "0.8" });

educationAndSkillObserver.observe(document.getElementsByClassName('education_section')[0]);
educationAndSkillObserver.observe(document.getElementsByClassName('skills')[0]);

const freelancingObserver = new IntersectionObserver(function(entries, freelancingObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        else {
            entry.target.classList.add("toggle_scale");
            freelancingObserver.unobserve(entry.target);
        }
    })
},
{ threshold: "0.5" });

freelancingObserver.observe(document.getElementsByClassName('freelancing')[0]);

const problemSolvingAndDesigningObserver = new IntersectionObserver(function(entries, problemSolvingAndDesigningObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        else {
            entry.target.classList.add("toggle_fade");
            problemSolvingAndDesigningObserver.unobserve(entry.target);
        }
    })
},
{ threshold: "0.5" });

problemSolvingAndDesigningObserver.observe(document.getElementsByClassName('fade_up')[0]);
problemSolvingAndDesigningObserver.observe(document.getElementsByClassName('fade_down')[0]);

const imageObservers = new IntersectionObserver(function(entries, imageObservers) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        else {
            entry.target.classList.add("toggle_flip");
            imageObservers.unobserve(entry.target);
        }
    })
},
{ threshold: "0.8" });

Array.from(document.getElementsByClassName("code_images")).forEach(image => imageObservers.observe(image));