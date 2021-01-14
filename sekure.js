var pos=document.URL.indexOf("context=")+8;
if (pos > 7) {
    document.write("Hello "+unescape(document.URL.substring(pos,document.URL.length)));
} else {
    document.write("Click <a href='?context=Bob'>here</a>.");
}

document.write("<br><br>Site is at: " + unescape(document.location.href) + ".");

