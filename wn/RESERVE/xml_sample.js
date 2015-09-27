function loader() {
    srcCode.value = 'story=0 sequence_blocks=4 iterative_depth=2 paragraphs=2 sentences=13 season=0 weapon=0 realization=(+) story_state_machine=[]'
    return
}
// function loader ()

function clear_window() {
    srcTranslated.value = ''
    return
}
// clear_window ()

function MD5() {
    srcTranslated.value = Math.md5(srcCode.value)
    return
}
// generate_MD5 ()

function translatorTool() {
/*

0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

200: OK
404: page not found

*/
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
        // continue
        }
    }
    xmlhttp.open("GET","mysql-wn-synsets_II.sql.xml",true); 
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML;
        NEWEL=xmlDoc.createElement("DEFINITION");
        NEWDEF=xmlDoc.createTextNode("Hello World!");
        NEWEL.appendChild(NEWDEF)
    var x = xmlDoc.getElementsByTagName("ENTRY");
    x[0].appendChild(NEWEL)
    var result = []
    for (var i=0; i<x.length; i++){
        var DEFS = x[i].getElementsByTagName("DEFINITION")
        var J = x[i].getElementsByTagName("DEFINITION").length
        for(var j=0; j<J; j++){
            result.push(DEFS[j].childNodes[0].nodeValue)
        }
    }

    srcTranslated.value = JSON.stringify(x) // result.join('\n')
}
// translatorTool ()
