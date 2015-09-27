function loader() {
    srcCode.value = 'story=0 sequence_blocks=4 iterative_depth=2 paragraphs=2 sentences=13 season=0 weapon=0 realization=(+) story_state_machine=[]'
    return
}
// function loader ()

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

function translatorTool() {
    var result = []
    result.push("{")
    for(var word in mysql_wn_data_synsets_II){
        var N = mysql_wn_data_synsets_II[word].length
        var t = []
        t.push('"WORD":{'+word+'"')
        for(var i=0; i<N; i++){
            t.push(':{')
            t.push('"KEY":"'+mysql_wn_data_synsets_II[word][i][0]+'"')
            t.push('"PART_OF_SPEECH":"'+mysql_wn_data_synsets_II[word][i][1]+'"')
            t.push('"OTHER":"'+mysql_wn_data_synsets_II[word][i][2]+'"')
            t.push('"DEFINITION":"'+mysql_wn_data_synsets_II[word][i][3]+'"')
            t.push('}')
            result.push(JSON.stringify(t).replace(/\],/gmi,'],\n').replace(/\\/gmi,''))
        }
    }
    result.push("}")
    srcTranslated.value = JSON.stringify(result.join('\n')).replace(/\\/gmi,'').replace(/\},/gmi,'},\n')
}
// translatorTool ()
