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
    var obj00 = {
        0:{
            flag00:1,
            flag01:1,
            word:'hello',
        },
        1:{
            flag00:1,
            flag01:1,
            word:'world',
        },
    }
    var result = []
    var start = new Date().getTime()  
    for(var j=0; j<1e6; j++){
        for(var i=0; i<2; i++){
            var s = obj00[i]
            if(s.flag00 && s.flag01){
                s.word
            }
        }
    }
    end = new Date().getTime()
    result.push(end-start)
    srcTranslated.value = result.join('\n')
}
