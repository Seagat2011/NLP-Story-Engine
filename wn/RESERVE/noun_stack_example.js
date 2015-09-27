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

function Entity(){
    this.name = arguments[0]
    this.result = []
    this.abilities = {  
        '0,0': Arrive(),
        '0,1': Remark(),  
        '1,0': Interact(),
        '1,1': Leave(),
    }
    this.act = function(){
        var p = this.abilities
        for(var i in p){
            this.result.push(p[i](this))
        }
    }
    this.narrator = function(){
        return this.result.join('\n')
    }
}
Entity.prototype = new Object()

function Act(){
    var N = arguments.length
    var s = ''
    for(var i=0; i<N; i++){
        s += arguments[i]
    }
    return s
}

function Arrive(){ 
    var obj = function(){
        var p = arguments[0]
        return Act('I arrive at the ', p.name)
    }
    return obj
}
//Arrive.prototype = new Object()

function Remark(){ 
    var N = arguments.length
    var s = []
    for(var i=0; i<N; i++){
        s.push(arguments[i])
    }
    s = s.join(',')
    var obj = function(){
        var p = arguments[0]
        return Act('I issue a few remarks on things I find fascinating at the ', p.name, ':', s)
    }
    return obj
}
//Remark.prototype = new Object()

function Interact(){ 
    var name = arguments[0]
    var obj = function(){
        var p = arguments[0]
        return Act(name + ': I interact with a few things on the ', p.name)
    }
    return obj
}
//Interact.prototype = new Object()

function Leave(){ 
    var obj = function(){
        var p = arguments[0]
        return  Act('I decide to leave the ', p.name)
    }
    return obj        
}
//Leave.prototype = new Object()

function Ability(){  
    var N = arguments.length
    var s = []
    for(var i=0; i<N; i++){
        s.push(arguments[i])
    }
    var str = s.join(',')
    this.push(Arrive())
    this.push(Remark(str))
    N += 2
    for(var i=2; i<N; i++){
        try{
            this.push(Interact(s[(i-2)]))
        } catch (e) {
            this.push('Unable to generate new Interaction ('+i+')')
        }
    }
    this.push(Leave())
}
Ability.prototype = new Array()

function SEQ(){
    this.name = arguments[0] + ' '
    this.index = 0
    this.result = []
    this.abilities = {}
    this.act = function(){
        var p = this.abilities
        var N = p.length
        for(var i=0; i<N; i++){
            this.result.push(p[i](this))
        }
    }
    this.narrator = function(){
        return this.result.join('\n')
    }
}
SEQ.prototype = new Object()

var gIndex = 0
var wordStack = []
var PART_OF_SPEECH = 1

for(var word in mysql_wn_data_synsets_II){
    var N = mysql_wn_data_synsets_II[word].length
    for(i=0; i<N; i++){
        if(
        mysql_wn_data_synsets_II[word][i][PART_OF_SPEECH] == 'n' &&
        mysql_wn_data_synsets_attributes_IV[word]['sweet'] &&
        mysql_wn_data_synsets_attributes_IV[word]['fruit']
        ){
            wordStack.push(word)
            break // single DEFS only
        }
    }    
}

function translatorTool() {    
    var result = []    
    var beach = new SEQ('beach')
    beach.abilities = new Ability(
        wordStack[gIndex++],
        wordStack[gIndex++],
        wordStack[gIndex++],
        wordStack[gIndex++],
        wordStack[gIndex++])
    //beach.abilities = new Ability('boat','anchor','oar','breeze','sand')
    
    beach.act()
    
    result.push(beach.narrator())
    
    srcTranslated.value = result.join('\n\n')
}
// translatorTool ()
