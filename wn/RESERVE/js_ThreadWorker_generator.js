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

var archive = {}

var x = {}
x.import__ = function(){
    var w = arguments[0]
    var word = arguments[1]
    if(w.name && !archive[w.name]){    
        srcTranslated.value = 'Processing..'
        w.worker = new Worker(w.filename)
        w.worker.onmessage = function(e){ 
            archive[w.name] = e.data
            w.worker.terminate()
            w.worker = undefined
            var result = []
            var v=1
            var N = word.length
            for(var i=0; i<N; i++){
                for(var DEFS in archive[w.name][word[i]]){
                    var M = DEFS.length
                    for(var j=0; j<M; j++){
                        result.push(v++ + '. ' + DEFS[j])
                    }
                }
            }
            srcTranslated.value = result.join('\n')
        }
    } else if(archive[w.name]) {
        var result = []
        var v=1
        var N = word.length
        for(var i=0; i<N; i++){
            for(var DEFS in archive[w.name][word[i]]){
                var M = DEFS.length
                for(var j=0; j<M; j++){
                    result.push(v++ + '. ' + DEFS[j])
                }
            }
        }
        srcTranslated.value = result.join('\n')
    }
}

function translatorTool() {
    var word = 'apple,fruit'.split(/,/gmi)
    var w = { name:'mysql-wn-data.synsets_II',filename:'mysql-wn-data.synsets_II.sql.js' }
    x.import__ (w,word)
}
// translatorTool ()
