/* AJAX Code used to navigate for all pages from the main page 
   and also between the pages itself */



function HTTPRequest()
{
    var xmlHttp;
    
    /*  Microsoft's XMLHttpRequest ActiveX Objects 
     *  xml objects which instantiate the HTTP Request (different versions)
     */
    try 
    {
        if(window.XMLHttpRequest) 
        {
            xmlHttp = new XMLHttpRequest();
        }
        else 
        {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            if(!xmlHttp)
            {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
            }
            else if(!xmlHttp)
            {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }
            else if(!xmlHttp)
            {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP.4.0");
            }
            else if(!xmlHttp)
            {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP.5.0");
            }
            else 
            {
                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }
        }
    }
    catch (err) 
    {
        alert(err.error + "\nYor Browser is out of Date");
    }
    
    return xmlHttp;
}

function response (ElementId)
{
    // status 200 means the page is ready to be shown
    // status 404 means page is not found .... and so on
    if (this.readyState == 4 & this.status == 200)
    {
        document.getElementById(ElementId).innerHTML = this.responseText;
    }
}

function Info(ElementId = "Content", page = "01-loginPage.html")
{
    var xmlHTTP;
    xmlHTTP = HTTPRequest();
    xmlHTTP.onreadystatechange = response(ElementId);
    
    // the third parameter is (true) to make async. navigation 
    xmlHTTP.open("GET", page, true);
    xmlHTTP.send();
}