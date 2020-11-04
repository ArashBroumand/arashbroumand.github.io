class NavBar {

    constructor() {
        this.stateNav = 0;
        this.selectedTab = "Home";
    }
    
    closeNav() {
        if (this.stateNav == 1) {
            console.log(this.stateNav)
            this.stateNav = 0;
            console.log(this.stateNav)
            document.getElementById("mySidenav").style.width = "16px";
            document.getElementById("main").style.marginLeft= "16px";
            document.getElementById("header").style.marginLeft = "16px";
            document.body.style.backgroundColor = "white";
            document.getElementById("menu_hndl").innerHTML = "&#9776; open menu";
        }
    }
    
    toggleNav() {
        if (this.stateNav == 0) {
            this.stateNav = 1;
            console.log(this.stateNav)
            document.getElementById("mySidenav").style.width = "160px";
            document.getElementById("main").style.marginLeft = "160px";
            document.getElementById("header").style.marginLeft = "160px";
            document.body.style.backgroundColor = "#A1A1A1";
            document.getElementById("menu_hndl").innerHTML = "&#9776; close menu";
        } else {
            this.stateNav = 0;
            console.log(this.stateNav)
            document.getElementById("mySidenav").style.width = "16px";
            document.getElementById("main").style.marginLeft= "16px";
            document.getElementById("header").style.marginLeft = "16px";
            document.body.style.backgroundColor = "white";
            document.getElementById("menu_hndl").innerHTML = "&#9776; open menu";
        }
    }
    
    tab_selection(input_tab) {
        console.log("hear you "+input_tab);
        this.selectedTab = input_tab;
        if (this.selectedTab == "Home") {
            this.closeNav();
            setTimeout(() => {window.open("./index.html","_self");}, 400);
        } else if (this.selectedTab == "Bio") {
            this.closeNav();
        } else if (this.selectedTab == "Research") {
            this.closeNav();
        } else if (this.selectedTab == "Blog") {
            this.closeNav();
        }
    }
}

let navBar = new NavBar();       

document.getElementById("menu_hndl").innerHTML = "&#9776; open menu";
