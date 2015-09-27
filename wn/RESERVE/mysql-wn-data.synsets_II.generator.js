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
    srcTranslated.value = JSON.stringify(result).replace(/\]\],/gmi,']],\n')
}
