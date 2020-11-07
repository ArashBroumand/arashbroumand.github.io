class NavBar {

    constructor() {
        this.stateNav = 0;
        this.selectedTab = "";
    }
    
    closeNav() {
        if (this.stateNav == 1) {
            console.log(this.stateNav)
            this.stateNav = 0;
            console.log(this.stateNav)
            document.getElementById("mySidenav").style.width = "16px";
            document.getElementById("main").style.marginLeft= "16px";
            document.getElementById("header").style.marginLeft = "16px";
            // document.body.style.backgroundColor = "white";
            document.getElementById("menu_hndl").innerHTML = "||| open menu"; // &#9776;
        }
    }
    
    toggleNav() {
        if (this.stateNav == 0) {
            this.stateNav = 1;
            console.log(this.stateNav)
            document.getElementById("mySidenav").style.width = "160px";
            document.getElementById("main").style.marginLeft = "160px";
            document.getElementById("header").style.marginLeft = "160px";
            // document.body.style.backgroundColor = "#A1A1A1";
            document.getElementById("menu_hndl").innerHTML = "||| close menu"; // &#9776; 
        } else {
            this.stateNav = 0;
            console.log(this.stateNav)
            document.getElementById("mySidenav").style.width = "16px";
            document.getElementById("main").style.marginLeft= "16px";
            document.getElementById("header").style.marginLeft = "16px";
            // document.body.style.backgroundColor = "white";
            document.getElementById("menu_hndl").innerHTML = "||| open menu"; // &#9776;
        }
    }
    
    tab_selection(input_tab) {
        console.log("hear you "+input_tab);
        this.selectedTab = input_tab;
        if (this.selectedTab == "Home") {
            this.closeNav();
            setTimeout(() => {window.open("./index.html","_self");}, 500);
        } else if (this.selectedTab == "Bio") {
            this.closeNav();
            setTimeout(() => {window.open("./bio.html","_self");}, 500);
        } else if (this.selectedTab == "Research") {
            this.closeNav();
            setTimeout(() => {window.open("./research.html","_self");}, 500);
        } else if (this.selectedTab == "Blog") {
            this.closeNav();
            setTimeout(() => {window.open("./blog.html","_self");}, 500);
        }
    }
}

let navBar = new NavBar();       

document.getElementById("menu_hndl").innerHTML = "||| open menu"; // &#9776;
