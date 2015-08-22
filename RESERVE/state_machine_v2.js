// M2_to_M3 (plot library to plot engine)

var g_index = 0
var g_cast = []
var g_flags = []
var g_Narrator = []

Array.prototype.toNUMBER = function(){
    return this.map(function(v){ return v*1 })
}

Array.prototype.newline = function(){
    var N = Math.max(arguments[0], 1)
    var s = '\n'
    for(var i=1; i<N; i++){  
        s += '\n'  
    }
    this.push(s)
}

Array.prototype.newlineJOIN = function(){
    var N = Math.max(arguments[0], 1)
    var s = '\n'
    for(var i=1; i<N; i++){  
        s += '\n'  
    }
    return this.join(s)
}

function loader() {
    srcCode.value = 'story=0 sequence_blocks=4 iterative_depth=2 paragraphs=2 sentences=13 season=0 weapon=0 realization=(+) story_state_machine=["apple"]'
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

function actor_is_not_the_caller(){
    return (arguments[0] != arguments[1])
}

function we_are_in_this_scene(){
    return (arguments[0] == 1)
}

function post_message_sequence_notify(){
    var actor = arguments[0]
    var N = g_cast.length
    var status_flags_outdated = true
    while(status_flags_outdated){
        for(var i=0; i<N; i++){ 
            status_flags_outdated = false
            if(
                 we_are_in_this_scene(g_cast[i][1])
                ){
                status_flags_outdated = g_cast[i][0].act(g_cast[i][0].score_abilities()) // g_cast[i][0].seek()
            }
            if(status_flags_outdated){
                break 
            }
        }
    }
}

function open_sequence(){
    var N = arguments.length
    for(var j=0;j<N;j++){           
        g_cast[arguments[j].index][1] = 1
    }
}

function close_sequence(){
    g_cast = g_cast.map(function(v){ v[1] = 0; return v })
}

function work_to_do(){
    return (arguments[0] == 0)
}

function Seek(){
    var obj = function(){
        if(we_are_in_this_scene(g_cast[this.index][1])){ 
            var still_work_to_do = false
            var stack = g_flags
            var N = stack.length
            for(var i=0; i<N; i++){
                if(work_to_do(stack[i])){
                    still_work_to_do = true
                    break
                }
            }
            return still_work_to_do 
        }
    }
    obj.prototype = new Object()
    return obj
}

function Score(){
    var obj = function(){
        var __max__ = 0
        var result = []
        var flags = g_flags
        for(var i in this.abilities){
            var stack = i.split(',').map(function(v){ return v*1 })        
            var N = stack.length
            var score = 0
            for(var j=0; j<N; j++){
                if(stack[j] == flags[j]){
                    score++
                }
            }
            if(result.length && (score > __max__)){
                __max__ = score
                result.unshift(i)
            } else if(result.length == 0) {
                __max__ = score            
                result = [i]
            }
        }
        return result[0]
    }
    obj.prototype = new Object()
    return obj
}

function sequence_is_done(){
    return (arguments[0] == 0)
}

function Act(){ 
    var obj = function(){
        var s = arguments[0]
        var moveto_next_beat = false
        if(sequence_is_done(this.abilities[s][1].length)){ 
            this.update_flags(s)
            g_Narrator.push('')
        } else {
            this.narrator(s)
            moveto_next_beat = true
        }
        return moveto_next_beat
    }
    obj.prototype = new Object()
    return obj
}

function analyze_status_flags(){
    var stack = arguments[0]
    var N = arguments[1]
    for(var i=0; i<N; i++){
        if(stack[i]){
            g_flags[i] = 1
        }
    }
}

function Update(){ 
    var obj = function(){
        var s = arguments[0]
        var stack = this.abilities[s][0]
        var N = stack.length
        analyze_status_flags(stack, N)
    }
    obj.prototype = new Object()
    return obj
}

function Narrator(){
    var obj = function(){
        var s = arguments[0]
        var N = this.abilities[s][1].length-1
        var result = [this.abilities[s][1][N].join(' ')]
        this.abilities[s][1].pop()
        g_Narrator.push( result.newlineJOIN(2) )
        return
    }
    obj.prototype = new Object()
    return obj
}

function Character(){
    this.name = arguments[0]
    this.index = g_index++
    g_cast.push([this,0])
    this.abilities = {}
    this.score_abilities = Score()
    this.seek = Seek()
    this.update_flags = Update()
    this.narrator = Narrator()
    this.act = Act()
}
Character.prototype = new Object()

function get_name_and_flag(){
    var N = arguments[0]
    var max = arguments[1]
    var s = []
    var m = []
    for(var i=0; i<max; i++){
        if (i==(N+1)) {
            s.push(0)
            m.push(1)        
        } else if(i>N){
            s.push(0)
            m.push(0)
        } else if(i==N) {
            s.push(1)
            m.push(0)
        } else {
            s.push(1)
            m.push(0)
        }
    }
    return [s.join(','), m]
}
function Sequencer(){
    var outline = arguments[0]
    var N = outline[1]*2 + 7 
    var P = outline[2]
    var Q = outline[3]
    var R = outline[4]
    var abilities = {} 
    for(var i=0; i<N; i++){
        var s = get_name_and_flag(i, N)
        var m = []
        for(var j=0; j<P*Q; j++){    
            m.push(['subject '+j,'predicate'])
            m.push(['.sentence[2]:remark.sense.sight'])
            m.push(['.sentence[3]:remark.sense.taste'])
            m.push(['.sentence[4]:remark.sense.smell'])
            m.push(['.sentence[5]:remark.sense.hear'])
            m.push(['.sentence[6]:remark.sense.touch'])
        }          
        m.push(['root_'+i+': subject '+i, 'predicate'])  
        m.push(['.sentence[2]:remark.sense.sight'])
        m.push(['.sentence[3]:remark.sense.taste'])
        m.push(['.sentence[4]:remark.sense.smell'])
        m.push(['.sentence[5]:remark.sense.hear'])
        m.push(['.sentence[6]:remark.sense.touch'])  
        abilities[s[0]] = [s[1], m]
    }
    return abilities
}

function to_pagelength(){
    return '\nTotal pages ( ' + Math.floor(g_Narrator.length/50) + ' )\n\n'
}

function get_num(){
    return ++arguments[0]
}
function get_space(){
    var s = '. '
    if(arguments[0] < 9){
        s += ' '
    }
    return s
}

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
        try{
            for(var k=0; k<N; k++){
                var found = mysql_wn_data_sense[word[k]][0][INDEX] 
                var ocurrences = mysql_wn_data_synsets_inverse[found]
                for(var j in ocurrences){
                    if(result[j]){
                        result[j]++
                    } else {
                        result[j] = 1
                    }
                }// loopj
            }
        } catch(e) {
        }
        var MAX_BUFF = 20
        var MAX = 0
        var ret = []
        for(var i in result){
            if(result[i]>MAX || ret.length<MAX_BUFF){
                MAX = result[i]
                ret.unshift(i)
            }
        }
        var prep = ret.splice(0, MAX_BUFF)
        MAX_BUFF = Math.min(prep.length, MAX_BUFF)
        result = []
        for(var i=0; i<MAX_BUFF; i++){
            var found = prep[i]
            result.push(mysql_wn_data_sense_inverse[found][0][7])
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
}

function translatorTool() {
    g_Narrator = []
    g_flags = [1]
    var outline = srcCode.value.match(/(\d+)/gmi).toNUMBER()
    var N = outline[1]*2 + 7
    for(var i=1; i<N; i++){
        g_flags.push(0)
    }
    var hero_csm = new Character('Seras')
    //var villain_csm = new Character('Sentinel_king')
    hero_csm.abilities = Sequencer(outline)
    open_sequence(hero_csm)
    //villain_csm.abilities = Sequencer(outline)
    //open_sequence(hero_csm, villain_csm)
    while(hero_csm.seek()){
        post_message_sequence_notify(hero_csm)
    }
    close_sequence()
    srcTranslated.value = intf[0]( srcCode.value.split('=')[9].match(/\w+/gmi) ) + to_pagelength() + g_Narrator.reverse().newlineJOIN()
}
// translatorTool ()
