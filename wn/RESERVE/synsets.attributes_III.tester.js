// REQUIREMENTS: mysql-wn-data.synsets.attributes_III.js
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
    var result = []
    for(var word in mysql_wn_data_synsets_attributes_III){
        if(mysql_wn_data_synsets_attributes_III[word]['noun.fruit'] && mysql_wn_data_synsets_attributes_III[word]['noun.sweet'] ){
            result.push('I eat the '+word)
        }
    }
    srcTranslated.value = result.join('\n')
}
