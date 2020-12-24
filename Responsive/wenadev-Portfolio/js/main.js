//getting hamburger menu, the view element that houses the landing page elements and the clear button for the mobile nav view
let menu = document.querySelector(".menu");
let view = document.querySelector(".view");

//getting the navigation elements for the web view
let navElements = Array.from(document.querySelectorAll(".nav-elements.web"));

//getting the div element that houses the elements of mobile navigation view and the clear button to remove mobile nav view 
let mobileNav = document.querySelector(".mobile-nav");
let clear = document.querySelector(".clear");

//getting mobile nav elements
let mobileNavElements = Array.from(document.querySelectorAll(".nav-elements.mobile"));

let perPage=3;

//determines number of project items to display
let paginationResizeEvent = () =>{
    /*if(innerWidth > 940){ perPage = 4; }

    if(innerWidth <= 940){ perPage = 2;}
*/
    //pagination
let items = $(".check .project-content");
let numItems = items.length;

items.slice(perPage).hide();

$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {

        let filterButtons = Array.from(document.querySelectorAll(".filter-button"));
        
        filterButtons.forEach(()=>{
            let activeButton = document.querySelector(".activee").innerHTML;
            filterSelection(activeButton);
        });

        let showFrom = perPage * (pageNumber - 1);
        let showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
    }
});
}

window.onbeforeunload = paginationResizeEvent();

//checks the width of the window as it is resized
let windowResizeEvents = ()=>{
    mobileNav.style.transition= "0s";

    if(window.innerWidth <= 680){
        //web navigation hides
        navElements.forEach((element)=>{
            element.style.display="none";
        });
        
        menu.addEventListener('click', displayMobileNav);
    }
    
    else if(window.innerWidth > 680){
        //web navigation comes into view
        navElements.forEach((element)=>{
            element.style.display="initial";
        });
        removeMobileNav();
    }

    paginationResizeEvent();
}

//mobile navigation comes into view
let displayMobileNav = ()=>{
    mobileNav.style.animation="slide-left .3s ease-out";
    view.style.display="none";
    mobileNav.style.display= "initial";

    mobileNavElements.forEach((mobileNavElement)=>{
        mobileNavElement.addEventListener('click',()=>{
            //get href link of relating 'a' tag embedded in 'p' tag
            let sectionHref = mobileNavElement.dataset.href;

            //close mobile nav
            removeMobileNav();

          
            
           window.scrollTo(0, document.getElementById(`${sectionHref}`).offsetTop)
        })
    });
}

//mobile navigation hides 
let removeMobileNav = ()=>{
    mobileNav.style.display= "none";
    view.style.display="inherit";
}

window.addEventListener('resize', windowResizeEvents);

//when page reloads
window.onbeforeunload = windowResizeEvents();
clear.addEventListener('click', removeMobileNav);



(filterSelection= (filter) =>{
    let projectContent = Array.from(document.querySelectorAll(".project-content"));

    //if all is selected, change value of filter to pass the conditionals below
    if(filter == "all" || filter == "All"){filter = "";}

        for(let i = 0; i < projectContent.length; i++){

            //hide elements that are not selected as a filter
            projectContent[i].classList.remove("show")

            if(projectContent[i].className.indexOf(filter) > -1) { 
                //show project based on filter  
                    projectContent[i].classList.add ("show");
            }
        }  
})();

// highlight active filters on projects

(highlightFilter =()=>{
    let filterButtons = Array.from(document.querySelectorAll(".filter-button"));

    filterButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        let activeButton = document.querySelector(".activee");
        activeButton.classList.remove("activee");
        button.classList.add("activee")
        filterSelection(button.innerHTML);
    })
})
})();

//show all projects
filterSelection("all")

//make header fixed
let scrollEvent = ()=>{

    let headerHeight = document.querySelector("header");
    let headerContent = document.querySelector(".header-content")

    if(Math.round(this.pageYOffset) > headerHeight.offsetHeight ){
        headerContent.classList.add("blur");
       // headerContent.classList.add("fixed")
        headerHeight.classList.add("fixed")
    }
    else if(Math.round(this.pageYOffset) < headerHeight.offsetHeight ){
        headerContent.classList.remove("blur");
       // headerContent.classList.remove("fixed")
        headerHeight.classList.remove("fixed")
    }
}

window.addEventListener("scroll", scrollEvent);


