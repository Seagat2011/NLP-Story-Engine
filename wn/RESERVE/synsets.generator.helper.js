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

var synset_generator = function(){
    var KEYS = 2
    var DEFINE = 3
    var PART_OF_SPEECH = 1
    var result = {}
    for(var word in mysql_wn_data_sense){
        var N = mysql_wn_data_sense[word].length
        var s = word.toLowerCase().toString()
        for(var i=0; i<N; i++){
            var key = mysql_wn_data_sense[word][i][KEYS]
            var DEFS = mysql_wn_data_synsets[key]
            if(result[s]==null){
                result[s] = []
            }
            try{
                result[s].push(DEFS)
            } catch (e) {
                console.log(e+':'+s)
            }
        }
    }
    return result
}

var ilookup = function(){
    var word = arguments[0].split(',')
    var N = word.length
    var INDEX = 2
    var result = {}
    try{
        for(var k=0; k<N; k++){
            var found = mysql_wn_data_sense[word[k]][0][INDEX] 
            var ocurrences = mysql_wn_data_synsets_inverse[found]
            for(var j in ocurrences){
                if(result[j]){
                    result[j]++
                } else {
                    result[j] = 1
                }
            }// loopj
        }
    } catch(e) {
    }
    var MAX_BUFF = 20
    var MAX = 0
    var ret = []
    for(var i in result){
        if(result[i]>MAX || ret.length<MAX_BUFF){
            MAX = result[i]
            ret.unshift(i)
        }
    }
    var prep = ret.splice(0, MAX_BUFF)
    MAX_BUFF = Math.min(prep.length, MAX_BUFF)
    result = []
    for(var i=0; i<MAX_BUFF; i++){
        var found = prep[i]
        result.push(mysql_wn_data_sense_inverse[found][0][7])
    }
    return result.join('\n')
}
function translatorTool() {
    srcTranslated.value = ilookup(srcCode.value)
}