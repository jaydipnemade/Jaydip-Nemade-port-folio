// script for highlighting menuitem start
function selectMenu(menu) {
    document.getElementById("homeid").className = "nav-item";
    document.getElementById("aboutid").className = "nav-item";
    document.getElementById("expid").className = "nav-item";
    document.getElementById("contactusid").className = "nav-item";
   
    switch (menu) {
        case "home":
            document.getElementById("homeid").className = document.getElementById("homeid").className + " active"; break;
        case "about":
            document.getElementById("aboutid").className = document.getElementById("aboutid").className + " active"; break;
        case "exp":
            document.getElementById("expid").className = document.getElementById("expid").className + " active"; break;
        case "contactus":
            document.getElementById("contactusid").className = document.getElementById("contactusid").className + " active"; break;
       
    }
}
// script for highlighting menuitem end

