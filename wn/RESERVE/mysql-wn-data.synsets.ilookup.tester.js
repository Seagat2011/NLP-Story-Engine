function translatorTool() {
        var word = arguments[0].replace(/(,)\s+([a-zA-Z0-9])/gmi,'$1$2').split(',')
        var N = word.length
        var INDEX = 2
        var result = {}
        for(var k=0; k<N; k++){
            try{
                var ocurrences = mysql_wn_data_synsets_inverse[word[k]]
                for(var j in ocurrences){
                    if(result[j]){
                        result[j]++
                    } else {
                        result[j] = 1
                    }
                }// loopj
            } catch (e) { 
            }   
        }
        var MAX_BUFF = 25
        var MAX = 0
        var ret = []
        for(var i in result){
            if(result[i]>MAX){
                MAX = result[i]
                ret.unshift(i)
            } else if(ret.length<MAX_BUFF) {
                ret.push(i)
            }
        }
        var prep = ret.splice(0, MAX_BUFF)
        MAX_BUFF = Math.min(prep.length, MAX_BUFF)
        result = []
        for(var i=0; i<MAX_BUFF; i++){
            result.push(prep[i])
        }
        return result.join('\n')
}