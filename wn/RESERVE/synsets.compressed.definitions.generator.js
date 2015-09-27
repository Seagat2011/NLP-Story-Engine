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

function parseObj(){
    var s = arguments[0]
    var obj = arguments[1]
    if(s){
        var v = s[0]
        s.shift()
        if(s.length){
            if(obj && (typeof(obj) != 'object')){
                var en = obj
                obj = {}
                obj[null] = en
            }
            if(obj[v] == null){
                obj[v] = {}
            }
            obj[v] = parseObj(s,obj[v])        
        } else {
            obj = v
        }
    }
    return obj
}

function defineObj(){
    var s = arguments[0]
    var obj = arguments[1]
    var result = ''
    if(s){
        var v = s[0]
        s.shift()
        if(s.length){
            result = defineObj(s,obj[v])        
        } else {
            result = obj[v][null] || obj[v]
        }
    }
    return result
}

var g_index = 0

function translatorTool() {/*
    var s = ['a','p','p','l','e','Hello World apple!']
    var word = {}
    word = parseObj(s,word)//{ 'a':{'p':{'p':{'l':{'e':'Hello World!'},},},},}
    var s = ['a','p','p','l','e','t','o','n','Hello World appleton!']
    word = parseObj(s,word)
    var v = ['a','p','p','l','e']    
    srcTranslated.value = JSON.stringify(word).replace(/\},/gmi,'},\n') // word['a']['p']['p']['l']['e'][null] // defineObj(v, word) // 
    */
    var word = {}
    for(var key in mysql_wn_data_synsets){
        var KEYS = g_index++
        var part_of_speech = mysql_wn_data_synsets[key][1] + '. '
        var defs = mysql_wn_data_synsets[key][3].toLowerCase().match(/./gmi)
        defs.unshift(part_of_speech)
        var N = defs.length
        for(var i=0; i<N; i++){
            var s = defs[i]
            if(word[i] == null){
                word[i] = {}
            }
            if(word[i][s] == null){
                word[i][s] = {}
            }
            word[i][s][KEYS] = defs[i+1] || null
        }        
    }
    srcTranslated.value = JSON.stringify(word).replace(/\},/gmi,'},\n')
}
