
function __import(e){
    if(e.data.err){
        if( srcTranslated.value.indexOf(/^enwiki_index/) ){ // updates to user
            srcTranslated.value += '\n'+e.data.origin+' - '+e.data.value
        }
    } else {
        srcTranslated.value = srcTranslated.value.replace(/(^Searching\.\.*\n)|(^Processing\.\.*\n)|(^enwiki_index.*\n)+/gmi,'') + '\n' + e.data.value
    }
}

var file00 = "mysql-wn-data.0.sql.js.00"
var file01 = "mysql-wn-data.1.sql.js.00"
var file02 = "mysql-wn-data.15.sql.js.00"
var file03 = "mysql-wn-data.30.sql.js.00"
var file04 = "mysql-wn-data.31.sql.js.00"

var file05 = "enwiki.index00.js.00"
var file06 = "enwiki.index01.js.00"
var file07 = "enwiki.index02.js.00"
var file08 = "enwiki.index03.js.00"
var file09 = "enwiki.index04.js.00"
var file10 = "enwiki.index05.js.00"
var file11 = "enwiki.index06.js.00"

var file12 = "mysql-wn-data.33.sql.js.00"

var mysql_wn_data_0  = new Worker(file00)
var mysql_wn_data_1  = new Worker(file01)
var mysql_wn_data_15 = new Worker(file02)
var mysql_wn_data_30 = new Worker(file03)
var mysql_wn_data_31 = new Worker(file04)
var mysql_wn_data_33 = new Worker(file12)

// OPTION 32
var enwiki00 = new Worker(file05)
var enwiki01 = new Worker(file06)
var enwiki02 = new Worker(file07)
var enwiki03 = new Worker(file08)
var enwiki04 = new Worker(file09)
var enwiki05 = new Worker(file10)
var enwiki06 = new Worker(file11)

mysql_wn_data_0.addEventListener('message',__import,'intf.js')
mysql_wn_data_1.addEventListener('message',__import,'intf.js')
mysql_wn_data_15.addEventListener('message',__import,'intf.js')
mysql_wn_data_30.addEventListener('message',__import,'intf.js')
mysql_wn_data_33.addEventListener('message',__import,'intf.js')

enwiki00.addEventListener('message',__import,'mentor.js')
enwiki01.addEventListener('message',__import,'mentor.js')
enwiki02.addEventListener('message',__import,'mentor.js')
enwiki03.addEventListener('message',__import,'mentor.js')
enwiki04.addEventListener('message',__import,'mentor.js')
enwiki05.addEventListener('message',__import,'mentor.js')
enwiki06.addEventListener('message',__import,'mentor.js')

function loader() {
    srcTranslated.value = ''
    return
}
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

var intf = {
    'default':function(){
        return 'functionality not implemented'
        },
    0:function(){ // lookup
        srcTranslated.value = 'Processing..'
        mysql_wn_data_0.postMessage(arguments[0])
        },
    1:function(){ // ilookup
        srcTranslated.value = 'Processing..'
        mysql_wn_data_1.postMessage(arguments[0])
        },
    15:function(){ // synonyms
        srcTranslated.value = 'Searching..'
        mysql_wn_data_15.postMessage (arguments[0])
        },
    30:function(){ // example sentence
        srcTranslated.value = 'Processing..'
        mysql_wn_data_30.postMessage (arguments[0])
        },
    31:function(){ // available attribute flags
        srcTranslated.value = 'Searching..'
        mysql_wn_data_31.postMessage (arguments[0])
        },  
    32:function(){ // wiki article
        srcTranslated.value = 'Processing..'
        enwiki00.postMessage(srcCode.value)
        enwiki01.postMessage(srcCode.value)
        enwiki02.postMessage(srcCode.value)
        enwiki03.postMessage(srcCode.value)
        enwiki04.postMessage(srcCode.value)
        enwiki05.postMessage(srcCode.value)
        enwiki06.postMessage(srcCode.value)
    },
    33:function(){ // spelling
        srcTranslated.value = 'Processing..'
        mysql_wn_data_33.postMessage(arguments[0])
    },
    34:function(){ // wiki pages
        srcTranslated.value = 'Processing..'
        enwiki00.postMessage([srcCode.value,34])
        enwiki01.postMessage([srcCode.value,34])
        enwiki02.postMessage([srcCode.value,34])
        enwiki03.postMessage([srcCode.value,34])
        enwiki04.postMessage([srcCode.value,34])
        enwiki05.postMessage([srcCode.value,34])
        enwiki06.postMessage([srcCode.value,34])
    }
}

function g_switch(){
    try{
        var result = arguments[0][arguments[1]]
    } catch (e) {
        var result = arguments[0]['default']
    }
    return result
}

function translatorTool() {
    g_switch(intf, selBox.selectedIndex)(srcCode.value)
}