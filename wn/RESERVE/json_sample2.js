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


var archive = {} 


function _import(){
    var idx = arguments[0]
    var file00 = arguments[1]
    if(file00 && !archive[file00]){
        xmlhttp=new XMLHttpRequest()/*
        xmlhttp.onreadystatechange=function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){        
                xmlDoc=JSON.parse(xmlhttp.response)
                archive[file00] = xmlDoc
                worker_thread(idx,xmlDoc)
            } else if (xmlhttp.readyState==3) {
                srcTranslated.value = 'Processing..'
            }
        }*/  
        xmlhttp.open("GET",file00,false)
        xmlhttp.send()    
        xmlDoc=JSON.parse(xmlhttp.response)
        archive[file00] = xmlDoc
        worker_thread(idx,xmlDoc)
    } else if(archive[file00]) {
        xmlDoc = archive[file00]
        worker_thread(idx,xmlDoc)
    } 
}


function worker_thread(){
    var idx = arguments[0]
    var xmlDoc = arguments[1]
    srcTranslated.value = xmlDoc['apple']
}


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
    var file00 = "mysql-wn-data.synsets.attributes_IV.js"
    var file01 = "mysql-wn-data.synsets_II.sql.js"
    var file02 = "mysql-wn-data.synsets.inverse_II.sql.js"
    _import(0,file00)
}
// translatorTool ()
