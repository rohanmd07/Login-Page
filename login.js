function CheckPassword(inputuser,inputpass) 
    { 
    var passw=  /^[A-Za-z]\w{7,14}$/;
    if(inputuser=='')
        {
            alert('Please enter the username first');
    }
    else if(inputpass.match(passw)) 
        { 
        alert(`Hello! ${inputuser}`);    
        alert('Correct, try another...');
        return true;
    }
    else
        { 
        alert('Wrong...!');
        return false;
    }
}

function openform(){
    window.open("form.html","_self");
}

function ImageChangeShowPass(){
    document.getElementById("invisibleLogo").src = "logos/visible.png";
    document.getElementById("password").type = "text";
}