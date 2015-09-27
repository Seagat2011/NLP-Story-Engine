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

var intf = {
    'default':function(){
        return 'functionality not implemented'
        },
    0:function(){ // lookup
        // mysql_wn_data_sense{} > word entry
        // mysql_wn_data_synsets{} > defs  
        var result = []
        try{
            var s = arguments[0]
            try{
                var N = mysql_wn_data_sense[s].length
            } catch(e){
                result.push(s+' is undefined')
                throw e
            }
            var INDEX = 2
            var PART_OF_SPEECH = 1
            var DEFS = 3
            for(var i=0; i<N; i++){
                try{
                    var key = mysql_wn_data_sense[s][i][INDEX]
                    result.push(get_num(i)+get_space(i)+mysql_wn_data_synsets[key][PART_OF_SPEECH]+'. '+mysql_wn_data_synsets[key][DEFS])
                } catch(e){
                    result.push(get_num(i)+get_space(i)+'*** unable to generate definition ***')
                    // throw e
                }
            } // loopi
        } catch(e) {
        } // try/catch
        return result.join('\n')        
        }, // lookup
    1:function(){ // ilookup
        var word = arguments[0].split(',')
        var N = word.length
        var INDEX = 2
        var result = {}
        for(var k=0; k<N; k++){
            try{
                var ocurrences = mysql_wn_data_synsets_inverse[word[k]]
                for(var j in ocurrences){
                    if(result[j]){
                        result[j]++
                    } else {
                        result[j] = 1
                    }
                }// loopj
            } catch (e) { 
            }   
        }
        var MAX_BUFF = 25
        var MAX = 0
        var ret = []
        for(var i in result){
            if(result[i]>MAX){
                MAX = result[i]
                ret.unshift(i)
            } else if(ret.length<MAX_BUFF) {
                ret.push(i)
            }
        }
        var prep = ret.splice(0, MAX_BUFF)
        MAX_BUFF = Math.min(prep.length, MAX_BUFF)
        result = []
        for(var i=0; i<MAX_BUFF; i++){
            result.push(prep[i])
        }
        return result.join('\n')
        }, // ilookup
    15:function(){ // synonym
        var s = []
        var word = arguments[0]
        var INDEX = 2
        var INDEX3 = 7
        try{
            var M = mysql_wn_data_sense[word].length
            for(var j=0; j<M; j++){   
                var INDEX2 = mysql_wn_data_sense[word][j][INDEX]
                var N = mysql_wn_data_sense_inverse[INDEX2].length
                for(var i=1; i<N; i++){
                    s.push(mysql_wn_data_sense_inverse[INDEX2][i][INDEX3])
                }
            }
        } catch(e) {
        }
        return s.join('\n')
        }, // synonym   
    30:function(){ // example sentence
        var N = mysql_wn_data_examples.length
        var result = []
        try{
            var s = arguments[0]
            try{
                var N = mysql_wn_data_sense[s].length
            } catch(e){
                result.push(s+' is undefined')
                throw e
            }
            var INDEX = 2
            var PART_OF_SPEECH = 1
            var DEFS = 3
            for(var i=0; i<N; i++){
                try{
                    var key = mysql_wn_data_sense[s][i][INDEX]                    
                    var M = mysql_wn_data_examples[key].length
                    for(var j=0; j<M; j++){
                        result.push(get_num(i)+get_space(i)+mysql_wn_data_synsets[key][PART_OF_SPEECH]+'. '+mysql_wn_data_examples[key][j][(DEFS-1)])
                    }
                } catch(e){
                    result.push(get_num(i)+get_space(i)+'*** unable to generate example ***')
                    //throw e
                }
            } // loopi
        } catch(e) {
        } // try/catch
        return result.join('\n') 
        }, // example sentence  
    31:function(){ // available attribute flags (case insensitive)
        var s = arguments[0].replace(/(,)\s+([a-zA-Z0-9])/gmi,'$1$2').split(',')
        var result = []
        var v = s.length
        for(var j=0; j<v; j++){
            var b = s[j]
            try{
                var N = mysql_wn_data_synsets_attributes[b][0].length
                for(var i=0; i<N; i++){
                    result.push((i+1) + '. '+ mysql_wn_data_synsets_attributes[b][0][i] + '\n')
                }
            } catch (e){
                result.push('*** unable to generate flags ***')
            }
            result.push('\n')
        }
        return result.join('')
        },    
}

var g_used = {}
var cache = {}

function Sentence(){
    /*
    I [verb.motion] across the [noun.substance]:s1
    The [s1] was [noun.state]:s2 to the [noun.event]
    This [noun.event] me: [s1] is usually [noun.state] not [s2] 
    I [noun.cognition] the first time I make it to [noun.location] I will [noun.event] because of the [s2]
    */
    var args = arguments[0]
    return ('I '+args[0]+' across the '+args[1]+'\nThe '+args[1]+' was '+args[2]+' to the '+args[3]+'\nThis '+args[3]+' me: '+args[1]+' is usually '+args[2]+' not '+args[2]+'\nI '+args[3]+' the first time I make it to '+args[4]+' I will '+args[5]+' because of the '+args[2])
}


function get_stack(){
    var obj = function(){
        var i=0
        var token = arguments[0]
        if(this.stack[token] != null){
            i = this.stack[token]
        } else {
            i = this.index
            this.stack[token] = this.index++
        }
        return i
   }
   return obj 
}

function check_params(){
    var obj = function(){
        var token = arguments[0]
        var i = this.get_stack(arguments[0])
        if(cache[token]){
            if(cache[token].length) {
                var p = cache[token]
                this[i] = p[0]
                this.param[i] = 1
                p.shift()
                console.log(this[i], ' (from stock)')
            } 
        } else {
            cache[token] = []
        }
    }    
    return obj
}
check_params.prototype = new Object()

function found_param(){
    var obj = function(){
        var attrib = this.attrib
        var token = arguments[0]
        var i = this.get_stack(arguments[0])
        var word = this.word
        var status = false
        if((attrib==token) && attrib && token){          
            status = true
            if(this.param[i]){
                cache[token].push(word)
                console.log(word,'to stock')
            } else {  
                this[i] = word
                this.param[i] = 1
                console.log(this[i], attrib)
            } 
        }  
        return status
    }        
    return obj
}
found_param.prototype = new Object()

function seeking(){
    var obj = function(){
        var tally = 0
        for(var j in this.param){
            tally++
        }
        return (tally != 6)
    }
    return obj        
}
seeking.prototype = new Object()

function parse(){
    var obj = function(){
        var i = arguments[0]
        var token = mysql_wn_data_synsets_attributes[i][0][0]
        if(!cache[token]){
            cache[token] = {}
        }    
        cache[token]=1            
    }
    return obj
}

function translatorTool() {
    var args = { param:{}, found_param:found_param(), check_params:check_params(), seeking:seeking(), get_stack:get_stack(), stack:{}, index:0, word:0, attrib:0, parse:parse() }    
    for(var i in mysql_wn_data_synsets_attributes){
        args.parse(i)
    }    
    var result = []
    for(var i in cache){
        result.push('script src=\'../wn/mysql-wn-data.'+i+'.js')
    }
    srcTranslated.value = result.join('\n').replace(/g_token\./gmi,'')
}
// translatorTool ()
