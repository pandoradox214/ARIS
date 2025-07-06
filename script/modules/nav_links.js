export class NavLink {
    constructor(NavLink, CurrentLink) {
        this.CurrentLink = CurrentLink;
        this.navlink = NavLink;
        this.ActiveLink(this.navlink, this.CurrentLink);
    }

    // Active the link by assigning an "active" class on li
    ActiveLink = (navlink, CurrentLink) =>{
        console.log("NavLink: ",navlink, "CurrentLink:",CurrentLink);
        navlink.forEach(link => {
            if(link.getAttribute("href").replace("./", "") == CurrentLink){
                link.classList.add("active");
                console.log("Im in!");
            }
        })
    }
    
}