import { NavLink } from "./modules/nav_links.js";
window.onload = () =>{
    const CurrentLink = window.location.pathname.split("/").pop();
    const navLink = document.querySelectorAll(".nav_links a");
    let nav = new NavLink(navLink, CurrentLink);
}
