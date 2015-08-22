// M2_to_M3 (plot library to plot engine)

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

var g_index = 0
var g_cast = []
var g_flags = [0,0,1,1,1,1,1,1,1]
var g_Narrator = []

function actor_is_not_the_caller(){
    return (arguments[0] != arguments[1])
}


function we_are_in_this_scene(){
    return (arguments[0] == 1)
}

function post_message_sequence_notify(){
    var actor = arguments[0]
    var N = g_cast.length
    var same_sequence = arguments[1]
    for(var i=0; i<N; i++){ 
        var status_flags_outdated = false
        if(
            (actor_is_not_the_caller(actor.index, i) && 
             we_are_in_this_scene(g_cast[i][1])) ||
             same_sequence != true
            ){
            status_flags_outdated = g_cast[i][0].seek()
        }
        if(status_flags_outdated){
            break 
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
            if(still_work_to_do){                        
                post_message_sequence_notify(this, this.act(this.score_abilities()))
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
        var result = false
        if(sequence_is_done(this.abilities[s][1].length)){ 
            this.update_flags(s)
            g_Narrator.push('')
        } else {
            this.narrator(s)
            result = true
        }
        return result
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

function translatorTool() {
    /*
    defeat_villain:[0],
    confront_villain_2:[0],
    get_wounded:[0],
    acquire_villain_office_key:[0],
    locate_villain:[0],
    lose_villain:[0],
    villain_flee_home:[0],
    confront_villain_home:[0],
    acquire_villain_home_key:[0],
    */
    g_Narrator = []
    g_flags = [0,0,1,1,1,1,1,1,1]
    var hero_csm = new Character('Seras')
    var villain_csm = new Character('Sentinel_king')
    hero_csm.abilities = {
        '0,1,1,1,1,1,1,1,1':[[1,0,0,0,0,0,0,0,0],[['I','collapse, exhausted'],['I','lower my gun'],['I','fire gun'],['I','draw gun'],['I','try to hide key'],['I','greet and enter'],['I','knock on door']]], // defeat villain
        '0,0,1,1,1,1,1,1,1':[[0,1,0,0,0,0,0,0,0],[['the sound in the hall','fades away as'],['I','remove keys and notice receipt'],['I','feel pain in my hip, caused by my keys'],['I','slump in my chair'],['I','watch villain escape on tv'],['I','loosen bandage'],['I','regard bandage']]], // sequence: 'confront_villain'
    }
    villain_csm.abilities = {
        '0,1,1,1,1,1,1,1,1':[[1,0,0,0,0,0,0,0,0],[['THE','END'],['he','drop gun'],['he','receive wound'],['he','fire gun'],['he','draw gun'],['he','sense threat'],['he','open door']]], // sequence: 'defeat_villain'        
        '0,0,1,1,1,1,1,1,1':[[0,1,0,0,0,0,0,0,0],[['I','notice name on receipt'],['a woman','passes by'],['the tv','continues in the background'],['the hallway','is drafty'],['"the villain"','cause $30,000 in damage and killed 3 people'],['the tv','blares in the background'],['Nurse','remarks not to loosen bandage']]], // sequence: 'confront_villain'
    }

    open_sequence(hero_csm, villain_csm)
    while(hero_csm.seek()){
        post_message_sequence_notify(hero_csm)
    }
    close_sequence()
    srcTranslated.value = g_Narrator.newlineJOIN()
}
// translatorTool ()
