function loader() {
    //srcCode.value = ''
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
function synsets_inverse(){
    var obj = {}
    for(var i in mysql_wn_data_synsets){
        var s = mysql_wn_data_synsets[i][3].toLowerCase().match(/\w+/gmi)
        var N = s.length
        for(var j=0; j<N; j++){
            var v = s[j]
            var p = mysql_wn_data_sense_inverse[i][0][7]
            if(obj[v] && !obj[v][p]){
                obj[v][p] = 1
            } else if(!obj[v]) {
                obj[v] = {}
                obj[v][p] = 1
            }
        }
    }
    return JSON.stringify(obj).replace(/\},/gmi,'},\n')
}
function translatorTool() {
    srcTranslated.value = synsets_inverse()
}