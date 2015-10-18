
function __import(e){
    srcTranslated.value = e.data.value.join('\n')
    var sentence = e.data.value
}

var file00 = "mysql-wn-data.31.sql.js.00"

var mysql_wn_data_31 = new Worker(file00)

mysql_wn_data_31.addEventListener('message',__import,'mentor.js')

function loader() { // function loader ()
    srcTranslated.value = ''
    return
}

function clear_window() { // clear_window ()
    srcTranslated.value = ''
    return
}

function MD5() { // generate_MD5 ()
    srcTranslated.value = Math.md5(srcCode.value)
    return
}

function mparse(){
    var arr = arguments[0]
    var lhs = arguments[1]
    var rhs = arguments[2]
    var res = []
    if((rhs-lhs)>1){
        var dv = Math.floor((rhs-lhs)/2)
        res[0] = mparse(arr,lhs,dv)
        res[1] = mparse(arr,dv+1,rhs)
        res[0] += res[1]
    } else if ( rhs==lhs ){
        res[0] = arr[lhs]
    } else {
        res[0] = arr[lhs] + arr[rhs]
    }
    return res[0]
}

function translatorTool() { // translatorTool ()
    srcTranslated.value = 'Processing..'
    //mysql_wn_data_31.postMessage(srcCode.value)
    var arr = [
        1,
        2,
        3,
        4
    ]
    srcTranslated.value = mparse(arr,0,arr.length-1)
}

