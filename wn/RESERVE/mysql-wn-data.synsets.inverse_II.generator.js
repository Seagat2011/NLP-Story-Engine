function loader() {
    srcCode.value = 'story=0 sequence_blocks=4 iterative_depth=2 paragraphs=2 sentences=13 season=0 weapon=0 realization=(+) story_state_machine=[]'
    return
}

function clear_window() {
    srcTranslated.value = ''
    return
}

function MD5() {
    srcTranslated.value = Math.md5(srcCode.value)
    return
}

function translatorTool() {
    var result = {}
    var KEYS = 2
    var DEFS = 3 
    for(var word in mysql_wn_data_sense){
        var w = word.toLowerCase()
        if(result[w] == null){
            result[w] = {}
        } 
        var N = mysql_wn_data_sense[word].length
        for(var i=0; i<N; i++){
            try{
                var key = mysql_wn_data_sense[word][i][KEYS]
                var s = mysql_wn_data_synsets[key][DEFS]
                s = s.replace(/[\(\);\.]+/gmi,'').toLowerCase().split(' ')
                var M = s.length
                for(var j=0; j<M; j++){
                    if(s[j].match(/[a-zA-Z]/gmi) && s[j].match(/,+/gmi)){
                        s[j] = s[j].replace(/,+/gmi,'')
                    }
                    result[w][s[j]] = 1
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
    srcTranslated.value = JSON.stringify(result).replace(/\},/gmi,'},\n')
}
