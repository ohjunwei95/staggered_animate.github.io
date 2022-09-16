// can observe multiple element or entry at the same time
//intersection observer meaning 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("Entry", entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
            console.log("Add show")
        } else {
            entry.target.classList.remove('show')
            console.log("remove show")
        }

    })
})

const hiddenElements = document.querySelectorAll(".hidden")
//loop through all the hidden element and tell the observer to observe all of them
hiddenElements.forEach((el) => observer.observe(el))