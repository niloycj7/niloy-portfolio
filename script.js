function sendMail(params){
    var tempParams = {
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,

    };
    emailjs.send('service_qi0wg6r', 'template_nlvgqdm', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}