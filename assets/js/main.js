(function() // Code in a function to create an isolate scope
{
var speed = 500;
var moving_frequency = 15; // Affects performance !
var links = document.getElementsByTagName('a');
var href;
for(var i=0; i<links.length; i++)
{   
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
    {
        links[i].onclick = function()
        {
            var element;
            var href = this.attributes.href.nodeValue.toString();
            if(element = document.getElementById(href.substr(1)))
            {
                var hop_count = speed/moving_frequency
                var getScrollTopDocumentAtBegin = getScrollTopDocument();
                var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                for(var i = 1; i <= hop_count; i++)
                {
                    (function()
                    {
                        var hop_top_position = gap*i;
                        setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                    })();
                }
            }

            return false;
        };
    }
}

var getScrollTopElement =  function (e)
{
    var top = 0;

    while (e.offsetParent != undefined && e.offsetParent != null)
    {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
    }

    return top;
};

var getScrollTopDocument = function()
{
    return document.documentElement.scrollTop + document.body.scrollTop;
};
})();

var always = document.querySelector(".always");
window.addEventListener("scroll", (event) => {
    if (window.scrollY > 900 && always.classList.contains("invisible")){
        always.classList.toggle("invisible");
    }
    if (window.scrollY < 900 && !always.classList.contains("invisible")){
        always.classList.toggle("invisible");
    }
})

$("form").submit((event) => {
    var data = {
        'name': $('input[name=name]').val(),
        'from': $('input[name=from]').val(),
        'subject': $('input[name=subject]').val(),
        'message': $('textarea[name=message]').val()
    }
    console.log(data);
    // var mailer_url = "https://us-central1-mailer-service-207217.cloudfunctions.net/function-1";
    

    event.preventDefault();
});

// var btn = document.querySelector("form button");
// btn.addEventListener("click", sendMsg);

// function sendMsg(event) {
//     event.preventDefault();

//     var mailer_url = "https://us-central1-mailer-service-207217.cloudfunctions.net/function-1";
//     var data = {
//         from: event.path[1][1].value,
//         subject: event.path[1][2].value,
//         message: event.path[1][0].value + " hat folgende Nachricht hinterlassen:\n\n" + event.path[1][2].value
//     }
//     fetch(mailer_url,{
//         method: 'POST',
//         mode: 'no-cors',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(res => res.json)
//     .catch(error => console.error('Error:', error))
//     .then(response => console.log('Success:', response));
// }


// window.addEventListener("keydown", (event) => {
//     var key = Number(event.key);
//     if("ArrowRight" === event.key){

//     }
//     console.log("ArrowRight" === event.key);
// });