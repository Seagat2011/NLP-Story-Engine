
function get_num(){
    return ++arguments[0]
}
function get_space(){
    var s = '. '
    if(arguments[0] < 9){
        s += ' '
    }
    return s
}
var isynsets = function(){
    var result = {}
    var INDEX = 2
    var DEFS = 3
    for(var i in mysql_wn_data_synsets){
        var s = mysql_wn_data_synsets[i][DEFS].split(' ')
        var N = s.length
        for(var j=0; j<N; j++){
            var key = s[j]
            if(mysql_wn_data_sense[key]){
                var M = mysql_wn_data_sense[key].length
                for(var k=0; k<M; k++){
                    var word = mysql_wn_data_sense[key][k][INDEX]
                    if(result[word]){
                        result[word][i] = 1
                    } else {
                        result[word] = {}
                        result[word][i] = 1
                    }
                }
            }
        }
    }
    return JSON.stringify(result).replace(/\},/gmi,'},\n')
}
var synonym = function(){
    var s = []
    var word = arguments[0]
    var INDEX = 2
    var INDEX3 = 7
    try{
        var M = mysql_wn_data_sense[word].length
        for(var j=0; j<M; j++){   
            var INDEX2 = mysql_wn_data_sense[word][j][INDEX]
            var N = mysql_wn_data_sense_inverse[INDEX2].length
            for(var i=1; i<N; i++){
                s.push(mysql_wn_data_sense_inverse[INDEX2][i][INDEX3])
            }
        }
    } catch(e) {
    }
    return s.join('\n')
}
var ilinktypes = function(){
    //eval(arguments[0])
    var result = {}
    var INDEX = 2
    for(var i in mysql_wn_data_sense){
        var N = mysql_wn_data_sense[i].length
        for(var j=0; j<N; j++){
            if(result[mysql_wn_data_sense[i][j][INDEX]]){
                result[mysql_wn_data_sense[i][j][INDEX]].push(mysql_wn_data_sense[i][j])
            } else {
                result[mysql_wn_data_sense[i][j][INDEX]] = [mysql_wn_data_sense[i][j]]
            }
        }
    }
    return JSON.stringify(result).replace(/\]\],/gmi,']],\n')
}
var linktypes = function(){
    eval(arguments[0])
    var result = {}
    var N = mysql_wn_data_linktypes.length    
    for(var i=0; i<N; i++){
        if(result[mysql_wn_data_linktypes[i][0]]){
            result[mysql_wn_data_linktypes[i][0]].push(mysql_wn_data_linktypes[i])
        } else {
            result[mysql_wn_data_linktypes[i][0]] = [mysql_wn_data_linktypes[i]]
        }
    }
    return JSON.stringify(result).replace(/\]\],/gmi,']],\n')
}
var semlinks = function(){
    // mysql_wn_data_sense{} > word entry
    // mysql_wn_data_synsets{} > defs 
    // mysql_wn_data_semlinks[] > xrefs 
    var result = {}
    var N = mysql_wn_data_semlinks.length    
    for(var i=0; i<N; i++){
        if(result[mysql_wn_data_semlinks[i][0]]){
            result[mysql_wn_data_semlinks[i][0]].push(mysql_wn_data_semlinks[i])
        } else {
            result[mysql_wn_data_semlinks[i][0]] = [mysql_wn_data_semlinks[i]]
        }
    }
    return JSON.stringify(result).replace(/\]\],/gmi,']],\n')
    
    /*
    try{
        var s = arguments[0]
        try{
            var N = mysql_wn_data_sense[s].length
        } catch(e){
            result.push(s+' is undefined')
            throw e
        }
        var INDEX = 2
        var PART_OF_SPEECH = 1
        var DEFS = 3
        for(var i=0; i<N; i++){
            try{
                var key = mysql_wn_data_sense[s][i][INDEX]
                result.push(get_num(i)+get_space(i)+mysql_wn_data_synsets[key][PART_OF_SPEECH]+'. '+mysql_wn_data_synsets[key][DEFS])
            } catch(e){
                result.push(get_num(i)+get_space(i)+'*** unable to parse definition ***')
                throw e
            }
        } // loopi
    } catch(e) {
    } // try/catch
    return result.join('\n')
    */
}