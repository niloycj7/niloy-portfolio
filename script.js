function sendMail(params){
    var tempParams = {
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,

    };
    emailsjs.send('gmail', 'template_nlvgqdm', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}