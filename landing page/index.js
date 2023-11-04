function imgSlider(anything){
    document.querySelector('.boatHeadset').src = anything;
}
function changeCircleColor(color){
    const circle=document.querySelector('.circle');
    circle.style.background=color;
}
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sh@gmail.com",
        Password : "FA967BA36E96779C6141B8FBCE15FAD256DA",
        To : 'sh@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}