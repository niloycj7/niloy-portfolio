function sendMail(params){
    var tempParams = {
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,

    };
    emailjs.send('gmail', 'template_nlvgqdm', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}