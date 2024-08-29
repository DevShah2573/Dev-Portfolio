window.onscroll = showSideLinks;
function showSideLinks(){
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        // For the aside page links
        document.getElementById("floating-sec").style.right = "-80px";
        
        // For the go to top button 
        document.getElementById("go-to-top-btn").style.opacity = "100%";
        document.getElementById("go-to-top-btn").style.bottom = "25px";
    }
    else{
        // For the aside page links
        document.getElementById("floating-sec").style.right = "-120px";
        
        // For the go to top button 
        document.getElementById("go-to-top-btn").style.opacity = "0%";
        document.getElementById("go-to-top-btn").style.bottom = "10px";
    }
}

// Live Typing Feature
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function professions(){
    const professions_array = ["Web-Development","UI/UX Design","Graphic Design"];
    // professions_array.
    let i = 0;
    while(true){
        let prof = professions_array[i%(professions_array.length)];
        let text = "";
        document.getElementById("proffession").innerHTML = text;
        for(let letter of prof){
            text += letter;
            document.getElementById("proffession").innerHTML = text;
            await sleep(175);
        }
        text += ".";
        document.getElementById("proffession").innerHTML = text;
        await sleep(200);
        i++;
    }
}
professions()


// Menu button 
function toggleMenuButton(){
    let menu_ul = document.getElementById("pages");

    if(menu_ul.classList.contains("collaps-nav")){
        menu_ul.style.top = "-200px";
        menu_ul.classList.remove("collaps-nav");
    }
    else{
        menu_ul.classList.add("collaps-nav");
        menu_ul.style.top = "70px";
    }
}