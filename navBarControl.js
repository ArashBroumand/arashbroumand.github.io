class NavBar {

    constructor() {
        this.stateNav = 0;
        this.selectedTab = "";
    }
    
    closeNav() {
        this.stateNav = 0;
        console.log(this.stateNav)
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementById("main").style.marginLeft= "16px";
        document.getElementById("menutoggle").style.marginLeft = "8px";
        // document.body.style.backgroundColor = "white";
        document.getElementById("menu_hndl").innerHTML = "menu"; // &#9776;
    }
    
    openNav() {
        this.stateNav = 1;
        console.log(this.stateNav)
        document.getElementById("mySidenav").style.width = "120px";
        document.getElementById("main").style.marginLeft = "136px";
        document.getElementById("menutoggle").style.marginLeft = "128px";
        // document.body.style.backgroundColor = "#A1A1A1";
        document.getElementById("menu_hndl").innerHTML = "menu"; // &#9776; 
    }
    
    toggleNav() {
        if (this.stateNav == 0) {
            this.openNav();
        } else {
            this.closeNav();
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
        } else if (this.selectedTab == "Tutoring") {
            this.closeNav();
            setTimeout(() => {window.open("./tutoring.html","_self");}, 500);
        } else if (this.selectedTab == "Blog") {
            this.closeNav();
            setTimeout(() => {window.open("./blog.html","_self");}, 500);
        } 
    }
    
    open_link(input_link) {
        console.log("hear you "+input_link);
        this.closeNav();
        setTimeout(() => {window.open(input_link,"_self");}, 500);
    }
}

let navBar = new NavBar();       

document.getElementById("menu_hndl").innerHTML = "menu"; // &#9776; ||| 
