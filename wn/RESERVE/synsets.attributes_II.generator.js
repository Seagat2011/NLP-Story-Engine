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

var g_POS = {
    'a':'adj',
    'r':'adv',
    'v':'verb',
    'n':'noun',
    's':'s',
}

var g_PART_OF_SPEECH = [
'adj',
'adv',
'verb',
'noun',
]

var g_ADJ_ATTRIBUTES = [
'all',
'pert',
'ppl',
]

var g_ADV_ATTRIBUTES = [
'all',
]

var g_VERB_ATTRIBUTES = [
'body',
'change',
'cognition',
'communication',
'competition',
'consumption',
'contact',
'creation',
'emtion',
'motion',
'perception',
'possession',
'social',
'stative',
'weather',
]

var g_NOUN_ATTRIBUTES = [
'act',
'all',
'animal',
'artifact',
'attirbute',
'body',
'change',
'cognition',
'communication',
'competition',
'consumption',
'contact',
'creation',
'event',
'feeling',
'food',
'group',
'location',
'motive',
'object',
'person',
'perception',
'phenomenon',
'plant',
'possession',
'process',
'qunatity',
'relation',
'shape',
'state',
'substance',
'time',
'Tops',
]

function Attribute(){
    var N = arguments.length
    for(var i=1; i<N; i++){
        for(var j in arguments[i]){
            this[arguments[i][j]] = arguments[0] + '.' + arguments[i][j] 
        }
    } 
}
Attribute.prototype = new Object()

var g_token = {}
g_token[g_PART_OF_SPEECH[0]] = new Attribute(g_PART_OF_SPEECH[0], g_ADJ_ATTRIBUTES)
g_token[g_PART_OF_SPEECH[1]] = new Attribute(g_PART_OF_SPEECH[1], g_ADV_ATTRIBUTES)
g_token[g_PART_OF_SPEECH[2]] = new Attribute(g_PART_OF_SPEECH[2], g_VERB_ATTRIBUTES)
g_token[g_PART_OF_SPEECH[3]] = new Attribute(g_PART_OF_SPEECH[3], g_NOUN_ATTRIBUTES)

function translatorTool() {
    var DEFS = 3
    var NAME = 7
    var KEY = 2
    var POS = 1
    var result = {}
    for(var i in mysql_wn_data_synsets){
        var s = mysql_wn_data_synsets[i][DEFS].replace(/[\(\);]/gmi,'').split(' ')
        var N = s.length
        for(var j=0; j<N; j++){
            try{
                var word = s[j]
                if(mysql_wn_data_sense[word]){
                    var word_key = mysql_wn_data_sense_inverse[i]
                    var word_M = mysql_wn_data_sense_inverse[i].length
                    var def_key = mysql_wn_data_sense[word]
                    var def_M = mysql_wn_data_sense[word].length
                    for(var v=0; v<word_M; v++){
                        var w = word_key[v][NAME]
                        for(var k=0; k<def_M; k++){
                            try{     
                                var def_POS_key = mysql_wn_data_synsets[def_key[k][KEY]][POS]
                                if(result[w]){
                                    result[w][ g_POS[def_POS_key]+'.'+word ] = 1                        
                                } else {
                                    result[w] = {}
                                    result[w][ g_POS[def_POS_key]+'.'+word ] = 1 
                                }
                            } catch(e) {
                                console.log(e)
                            }    
                        }
                    }
                }                   
            } catch (e) {
                console.log(e)
            }    
        }
        //result.join('\n')
    }
    srcTranslated.value = JSON.stringify(result).replace(/\},/gmi,'},\n')
}
// translatorTool ()
