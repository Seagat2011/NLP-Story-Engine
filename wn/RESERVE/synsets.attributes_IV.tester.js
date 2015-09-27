// requires mysql-wn-data.synsets.attributes_IV.js
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
    var words = arguments[0].replace(/(,)\s+([a-zA-Z0-9])/gmi,'$1$2').split(',')
    var N = words.length
    var result = {}
    var MAX = 25
    for(var word in mysql_wn_data_synsets_attributes_IV){
        var count = 0
        for(var i=0; i<N; i++){
            if(mysql_wn_data_synsets_attributes_IV[word][words[i]]){
                count++
            }
        }
        if(count){
            if(result[count] == null){
                result[count] = []
            }
            result[count].unshift(word)            
        }
    }
    var s = ''
    var count = 0
    for(var i=N; i>-1; i--){
        try{
            if(result[i]){
                count += result[i].length
                s += result[i].join('\n')
                if(count>MAX){
                    break
                }
            }                    
        } catch (e) {
            console.log(e)
        }
    }
    srcTranslated.value = s
}
