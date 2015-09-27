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
    var SPEECH = 1
    var KEYS = 2
    for(var word in mysql_wn_data_sense){
        var s = word.toLowerCase().match(/./gmi)
        var M = s.length
        var N = mysql_wn_data_sense[word].length
        for(var i=0;i<N; i++){
            var key = mysql_wn_data_sense[word][i][KEYS]
            var part_of_speech = mysql_wn_data_synsets[key][SPEECH]
            if(result[part_of_speech] == null){
                result[part_of_speech] = {}
            }
            for(var j=0; j<M; j++){
                var s1 = s[j]
                if(result[part_of_speech][j] == null){
                    result[part_of_speech][j] = {}
                }
                if(result[part_of_speech][j][s1] == null){
                    result[part_of_speech][j][s1] = 1
                }
            }
        }
    }
    srcTranslated.value = JSON.stringify(result).replace(/\},/gmi,'},\n')
}
