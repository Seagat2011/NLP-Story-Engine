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
    for(var word in mysql_wn_data_synsets_attributes_II){
        if(result[word] == null){
            result[word] = mysql_wn_data_synsets_attributes_II[word]
        }
        if(mysql_wn_data_synsets_attributes[word]){
            var N = mysql_wn_data_synsets_attributes[word][0].length
            var M = mysql_wn_data_synsets_attributes[word][1].length
            var MAX = Math.max(M, N)
            for(var flags=0; flags<MAX; flags++){
                if(flags<N){            
                    var s = mysql_wn_data_synsets_attributes[word][0][flags]
                    result[word][s] = 1
                }
                if(MAX<M){
                    var v = mysql_wn_data_synsets_attributes[word][1][flags]
                    result[word][v] = 1
                }
            }
        }
    }
    srcTranslated.value = JSON.stringify(result).replace(/\},/gmi,'},\n')
}
