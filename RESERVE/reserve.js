

function translatorTool() {
    var beach       = new SEQ('beach')
    var zanzibar    = new SEQ('Zanzibar')
    var torr        = new SEQ('lake of torr')
    var zinj        = new SEQ('lake of zinj')
    var golgotha    = new SEQ('sands of Golgotha')
    var swat        = new SEQ('valley of Swat')
    var king        = new SEQ('realm of The Sentinel King')
    var result = []
    
    beach.abilities = new Ability('boat','anchor','oar','breeze','sand')
    zanzibar.abilities = new Ability('hawks','rocks','cliffs','ice','snow','views','climb')
    torr.abilities = new Ability('waters','trees','grass','ravens','paths','oars','boat','anchor')
    zinj.abilities = new Ability('waters','shelter','openess','water guardian')
    golgotha.abilities = new Ability('heat','sand','sun','vultures','gear','dig')
    swat.abilities = new Ability('rocks','cliffs','granite','views','breeze')
    king.abilities = new Ability('shield','arrow','fleet','skill','climb','tower','light')
    
    beach.act()
    zanzibar.act()
    torr.act()
    zinj.act()
    golgotha.act()
    swat.act()
    king.act()
    
    result.push(beach.narrator())
    result.push(zanzibar.narrator())
    result.push(torr.narrator())    
    result.push(zinj.narrator())
    result.push(golgotha.narrator())
    result.push(swat.narrator())    
    result.push(king.narrator())
    
    srcTranslated.value = result.join('\n\n')
}
//
/*
g_token = {
    NOUN:{
        parent_name:'NOUN',
        ANIMAL:function(){
            var name = 'ANIMAL'
            this.parent_name = 'NOUN'
            return (this.parent_name + '.' + name)     
        },
        WEATHER:function(){
            var name = 'WEATHER'
            this.parent_name = 'NOUN'
            return (this.parent_name + '.' + name)     
        },
    },
}

function Attribute_flags(){
    var name = arguments[1]
    var obj = function(){ 
        var name = name 
        return (this.parent_name + '.' + name) 
    } 
    return obj
 
}
*/

function Attribute(){
    var N = arguments.length
    // this.parent_name = arguments[0]
    for(var i=1; i<N; i++){
        for(var j in arguments[i]){
            this[arguments[i][j]] = arguments[0] + '.' + arguments[i][j] // Attribute_flags(arguments[0], arguments[i][j])
        }
    } 
}
Attribute.prototype = new Object()
//
//this.flags // this.next.split(',').map(function(v){ return v*1 })
//this.flags = arguments[0]
//arguments[0]
//g_flags = this.update(result[0].split(',').map(function(v){ return v*1 }))
/*
    var s = g_flags.join(',')//this.flags.join(',')//split(',').map(function(v){ return v*1 })//this.next
    //this.flags = this.flags.split(',').map(function(v){ return v*1 })
    var stack = this.abilities[s][0]
    var N = stack.length
    for(var i=0; i<N; i++){
        if(stack[i]){
            g_flags[i] = 1//this.flags[i] = 1
        }
    }
    //this.next = this.flags.join(',')
    s = g_flags.join(',')
    var result
    if(this.seek()){
        result = this.abilities[s][1]
    }    
    return result 
*/

/*
var __max__ = 0
var result = []
//this.flags = arguments[0]
var flags = g_flags//arguments[0]
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
g_flags = result[0].split(',').map(function(v){ return v*1 }) //this.flags = result[0]//i//this.next = i 
return this.act()
*/    
//hero_csm.flags = [0,0,1,1,1,1,1,1,1]
//hero_csm.next = '0,0,1,1,1,1,1,1,1' // dont overwrite status flags (prevents inconsistent states)
//villain_csm.flags = [0,0,0,0,0,0,0,0,0]
//villain_csm.next = '0,0,1,1,1,1,1,1,1' // dont overwrite status flags (prevents inconsistent states)
//var result = []
//var hero = hero_csm.update()
//var villain = villain_csm.update()
/*
    hero = hero_csm.update()
    villain = villain_csm.update()
    //var hero = hero_csm.act()
    //var villain = villain_csm.act()
    var N = hero.length-1
    for(var i=N; i>-1; i--){
        result.push(beat(hero[i], villain[i]))
        result.newline()
    }
*/
//result.newlineJOIN()
//this.flags = []
//this.next = '' // dont overwrite status flags (prevents inconsistent states)

/*
function beat(){
    var actor1 = arguments[0]
    var actor2 = arguments[1]
    var result = [actor1.join(' '), actor2.join(' ')]
    return result.newlineJOIN(2)
}
*/
//

function beat(){
    var result = []
    var N = arguments[0].length-1
    var actor1 = arguments[0]
    var actor2 = arguments[1]
    for(var i=N; i>-1; i--){
        result.push(actor1[i].join(' '))
        result.push(actor2[i].join(' '))
    }
    return result.newlineJOIN(2)
}
//
    /*
    //  character state-machine
    var hero_csm = [
        [['I','collapse, exhausted'],['I','lower my gun'],['I','fire gun'],['I','draw gun'],['I','try to hide key'],['I','greet and enter'],['I','knock on door']], // sequence: 'defeat_villain'        
        [['the sound in the hall','fades away as'],['I','remove keys and notice receipt'],['I','feel pain in my hip, caused by my keys'],['I','slump in my chair'],['I','watch villain escape on tv'],['I','loosen bandage'],['I','regard bandage']], // sequence: 'confront_villain'
        ]
    var villain_csm = [
        [['THE','END'],['he','drop gun'],['he','receive wound'],['he','fire gun'],['he','draw gun'],['he','sense threat'],['he','open door']], // sequence: 'defeat_villain'        
        [['I','notice name on receipt'],['a woman','passes by'],['the tv','continues in the background'],['the hallway','is drafty'],['"the villain"','cause $30,000 in damage and killed 3 people'],['the tv','blares in the background'],['Nurse','remarks not to loosen bandage']], // sequence: 'confront_villain'
        ]
    var hospital_csm = [
        ]
    var N = hero_csm.length-1
    */
//    
function generate_FLAGS(){
    var obj = {}    
    var _g_ = arguments[0]
    var N = arguments.length
    for(var i=0; i<_g_.length; i++){
        obj[_g_[i]] = 0
    }
    for(var i=1; i<N; i++){
        obj[arguments[i]] = 1
    }
    return obj
}
//
/*
    var current_weather = 0
    var current_season = 1
    var M = weather.length-1
    var N = season.length-1
    season_v_weather[0][current_weather] = weather[M]    
    season_v_weather[0][current_season] = season[N]*/
/*
//
// available
[[0,0], [1,1], [2,2], [3,3]], // season[weather[degree[
// currents
[0,0],
]
*/
var gsen = '@ #  '
var SUBJ = /@ /gmi
var PRED = /# /gmi
var clause = function(){
    var result = [gsen]
    var current = arguments[0][0]
    var N = arguments[0][1][current].length 
    for(var i=0; i<N; i+=2){
        var subject = arguments[0][1][current][i]
        var predicate =  arguments[0][1][current][i+1]        
        result[0] = result[0].replace(SUBJ, toSUBJ(subject))          
        result[0] = result[0].replace(PRED, toPRED(predicate))              
    }
    return result.join('\n\n')
}
//
//srcTranslated.value = CAPIT('the red dog ran scared  ')
//srcTranslated.value = next_state.season[0].weather[0]
//
var temp_UC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var temp_LC = new Array(temp_UC)[0]
temp_LC = temp_LC.map(function(v){ return v.toLowerCase() })
var UC = {}
var LC = {}
for(var i=0; i<temp_UC.length; i++){
    UC[temp_LC[i]] = temp_UC[i]
    LC[temp_UC[i]] = temp_LC[i]
}
//
function __word__(){
    var progression_stack = get_stack()
    var procession_stack = get_stack()
    var m = procession_stack[0]
    var result = ''
    result += basic_template.location[0] + character_attributes.remark.location[m][0] +
    basic_template.location[1] + character_attributes.remark.location[m][1] + '\n'
    for (i = 1; i < 8; i++) {
        var n = progression_stack[i]
        var m = procession_stack[i]
        result += basic_template.progression[(n == 0) ? 4 : n] + character_attributes.remark.procession[m][0] +
        basic_template.progression[0] + character_attributes.remark.procession[m][1] + '\n\n'
    }
    var n = progression_stack[8]
    result += basic_template.progression[1] + character_attributes.remark.procession[n][0] + basic_template.progression[0] + character_attributes.remark.procession[n][1]
    return arguments[0] + '\n\n' + result
}
//
var g_randstack_iterator = 0
var g_randstack = []
var mn = get_num()
for(var i=0; i<9; i++){
    for(var j=0; j<9; j++){
        if(g_randstack[i]){
            g_randstack[i].push( (i + mn++) % 9 ) 
        } else {
            g_randstack[i] = [ (i + mn++) % 9 ]
        }
    }
}
function get_stack() {
    var stack = [
    ]
    // climb the diagonals; random number generators are expensive
    var j = g_randstack_iterator++%9
    for (var i = 0; i < 9; i++) {
        stack.push(g_randstack[j%9][j++%9])
    }
    // loopi

    return stack
}
//
function Word() {
    this.DENOUEMENT = __word__('DENOUEMENT')
    this.CLIMAX = __word__( 'CLIMAX')
    this.CRISIS = __word__('CRISIS')
    this.SEQ02 = __word__('SEQ02')
    this.PINCH = __word__('PINCH')
    this.SEQ01 = __word__('SEQ01')
    this.BIG_EVENT = __word__('BIG_EVENT')
    this.CATALYST = __word__('CATALYST')
    this.BIG_OPENING = __word__('BIG_OPENING')
}
// Word () constructor
Word.prototype = new Object()
function Sentence() {
    this.DENOUEMENT = __sentence__('DENOUEMENT')
    this.CLIMAX = __sentence__( 'CLIMAX')
    this.CRISIS = __sentence__('CRISIS')
    this.SEQ02 = __sentence__('SEQ02')
    this.PINCH = __sentence__('PINCH')
    this.SEQ01 = __sentence__('SEQ01')
    this.BIG_EVENT = __sentence__('BIG_EVENT')
    this.CATALYST = __sentence__('CATALYST')
    this.BIG_OPENING = __sentence__('BIG_OPENING')
}
// Sentence () constructor
Sentence.prototype = new Object()
//
function Paragraph() {
    var s = arguments[0]
    var r = revs(arguments[1], arguments[2])
    var c = clauses(arguments[1], arguments[3])
    return [new Sentence(s, r, c).BIG_OPENING]/*[
    function () {
        return '\n' + s + '.sentence[0]:big_opening'
    },
    function () {
        return '\n' + s + '.sentence[1]:catalyst'
    },
    function () {
        return '\n' + s + '.sentence[2]:big_event'
    },
    function () {
        return '\n' + s + '.sentence[3]:pinch'
    },
    function () {
        return '\n' + s + '.sentence[4]:crisis' + c
    },
    function () {
        return '\n' + s + '.sentence[5]:climax'
    },
    function () {
        return '\n' + s + '.sentence[6]:realization' + r
    },
    function () {
        return '\n' + s + '.sentence[7]:denouement'
    },
    function () {
        return '\n' + s + '.sentence[8]:remark.sense.sight'
    },
    function () {
        return '\n' + s + '.sentence[9]:remark.sense.taste'
    },
    function () {
        return '\n' + s + '.sentence[10]:remark.sense.smell'
    },
    function () {
        return '\n' + s + '.sentence[11]:remark.sense.hear'
    },
    function () {
        return '\n' + s + '.sentence[12]:remark.sense.touch\n'
    }
    ]*/
}
//

var g_crisis_points = [
    'big_opening',
    'catalyst',
    'big_event',
    'pinch',
    'crisis',
    'climax',
    'realization',
    'denouement',
    'remark.sense.sight',
    'remark.sense.taste',
    'remark.sense.smell',
    'remark.sense.hear',
    'remark.sense.touch'
]
var g_crisis_point_names = {
}
for (var i = 0; i < g_crisis_points.length; i++) {
    g_crisis_point_names[g_crisis_points[i].replace(/./gmi,'_')] = i
}

//
    /*
    var story_state_machine = [
    ]
    for (var i = 0; i < M; i++) {
        story_state_machine[i] = i + 1
    }
    var Seras = new Character('Seras', args)
    var STORY_GOAL = story_state_machine[story_state_machine.length - 1]
    Seras.story_goal = story_state_machine[story_state_machine.length - 1]
    // state_machine / work backwards
    var next_state = story_state_machine[Seras.flags]
    while (next_state != STORY_GOAL) {
        Seras.beat(next_state)
        try {
            next_state = story_state_machine[Seras.flags]
        } catch (e) {
            console.log('error - flags(0x' + Seras.flags + ') results to an invalid state: ' + next_state)
            throw (e)
        }
    }
    Seras.beat(next_state)
    */
//    
        this.bind = function () {
            function bind2() {
                var me = arguments[0]
                var N = arguments[1]
                var M = me[me.name].length
                var s = ''
                var status = [
                    'big_opening',
                    'catalyst',
                    'big_event',
                    'pinch',
                    'crisis',
                    'climax',
                    'realization',
                    'denouement',
                    this.name + '.remark.sense.sight',
                    this.name + '.remark.sense.hear',
                    this.name + '.remark.sense.smell',
                    this.name + '.remark.sense.taste',
                    this.name + '.remark.sense.touch',
                ]
                try {
                    for (var i = 0; i < M; i++) {
                        s += '\n' + me.name + '[' + N + '].' + bind2(me[me.name][i], i) 
                    }
                } catch (e) {
                    for (var i = 0; i < 12; i++) {
                        s += '\n' + me.name + '[' + N + ']:' + 'sentence:' + status[i] 
                    }
                }
                return s
            }
            var me = arguments[0]
            var N = arguments[0].length
            var M = arguments[1]
            var s = ''
            for (var i = 0; i < N; i++) {
                s += bind2(me[i], M)
            }
            return s
        }
        console.log('story[0].big_opening\nstory[0].catalyst\nstory[0].big_event')
        console.log(this.bind(this.story, 0))
        console.log('story[0].pinch')
        console.log(this.bind(this.story, 0))
        console.log('story[0].crisis\nstory[0].climax\nstory[0].realization(' + reversals + ')\nstory[0].denouement')

//
        
            for (var j = 0; j < a[1]; j++) {
                for (var n = 0; n < a[2]; n++) {
                    for (var p = 0; p < a[3]; p++) {  
                        var beat                    
                        if(status[p] == 'crisis'){
                            beat = this.sequence_number+j+n  
                        }                
                        result.push(sequence(this.sequence_number) +
                        'reversal[' + j + '].' +
                        'paragraph[' + n + '].' +
                        sentence(p,n,beat)
                        )
                    /*
                        result.push(sequence(this.sequence_number) +
                        'reversal[' + j + '].' +
                        'paragraph[' + n + '].' +
                        sentence(p,n)
                        )
                        if(status[p] == 'crisis'){
                            var beat = this.sequence_number+j+n
                            result.push(sequence(this.sequence_number) +
                            'reversal[' + j + '].' +
                            'paragraph[' + n + '].' +
                            sentence(p,n,beat)
                            )
                        /*
                            for(var beat = 0; beat < this.sequence_number+j+n; beat++){
                                result.push(sequence(this.sequence_number) +
                                'reversal[' + j + '].' +
                                'paragraph[' + n + '].' +
                                sentence(p,n,beat)
                                )
                            }
                            */
                        }
                    }
                }
            }

//
            
this.story = []
var sequence = this.SET_FLAGS(this.idx, arguments[1], arguments[2] || 0) // flags
sequence.name = g_elements[0]
this.story.push({sequence: sequence, TODO: new Array(g_TODO), TODO_FLAG: false, name: g_elements[ g_element_names.story ]})
    	
//

function to_page_length() {
    // sequences > reversals > scenes > beats > paragraphs > sentences > clauses > words > connotation (+/- inherit)
    var args = arguments[0]
    var PAGE_LENGTH = 50 	// 50 sentences = 1 page
    args[0] = arguments[1] 	// include total sequences as well as supporting
    var result = 0
    for(var i=0; i<args[0]; i++){
    	for(var j=0; j<args[1]; j++){
    		for(var k=0; k<args[2]; k++){
    			for(var m=0; m<args[3]; m++){
    				for(var n=0; n<args[4]; n++){
    					result++
    				}
    			}
    		}
    	}
    }    
    return Math.ceil( result / PAGE_LENGTH )
}

//

		this.level = function(){  
		    // ['sequence','reversals','scene','beat','paragraph','sentence','clause','words','connotation']
		    function init_indexes(){	       
				var i = []
				i.push(M)
				for(var j=1; j<args.length; j++){
					i.push(args[j])
				}
				return i
	        }
	        var a = init_indexes()
	        var result = []
	        for(var i=0; i<a[0]; i++){
	        	for(var j=0; j<a[1]; j++){
        			for(var m=0; m<a[2]; m++){
        				for(var n=0; n<a[3]; n++){
        					for(var p=0; p<a[4]; p++){
								result.push(
								'story[0].sequence['+ i + '].' +
								'reversals[' + j + '].' +
								'beat[' + m + '].' +
								'paragraph[' + n + '].' +
								'sentence[' + p + '].(' + reversal(p, reversals) + ')'
								)
							}
				        }
			        }
	        	}
	        }
	        return result.join('\n')
        }
        
        //
        
    function shift_multiply(){
    	function loopf(){
    		var result = arguments[0]
    		var N = arguments[1]
    		var M = arguments[2]
    		for(var i=0; i<N; i++){
    			for(var j=0; j<M; j++){    			
	    			result++
    			}
    		}
    		return result
    	}
    	var result = 0
    	if(arguments[0].length == (arguments[1]+1) ){
    		result = loopf(result, arguments[0][arguments[1]-1], arguments[0][arguments[1]])
    	} else {
    		result = loopf(loopf(result, arguments[0][arguments[1]], (shift_multiply(arguments[0], arguments[1]+1) - 1)) )
    	}
    	return result
    }
    
    //

function to_page_length() {
    // sequences > reversals > scenes > beats > paragraphs > sentences > clauses > words > connotation (+/- inherit)
    var args = arguments[0]
    var PAGE_LENGTH = 50 	// 50 sentences = 1 page
    args[0] = arguments[1] 	// include total sequences as well as supporting
    function shift_multiply(){
    	function loop(){
    		var result = arguments[0]
    		var N = arguments[1]
    		for(var i=0; i<N; i++){
    			result++
    		}
    	}
    	var result = 0
    	if(arguments[0].length == (arguments[1]+1) ){
    		result = arguments[0][arguments[1]]
    	} else {
    		result = Math.pow(arguments[0][arguments[1]] , (shift_multiply(arguments[0], arguments[1]+1) - 1))
    	}
    	return result
    }
    return Math.ceil( shift_multiply(args, 0) / PAGE_LENGTH )
}

//
		this.level = function(){  
		    // ['sequence','reversals','scene','beat','paragraph','sentence','clause','words','connotation']
		    function init_indexes(){	       
				var i = []
				i.push(M)
				for(var j=1; j<args.length; j++){
					i.push(args[j])
				}
				return i
	        }
	        function annotator(){
	        	var result = []
	        	var s = arguments[0] 
	        	var s2 = arguments[1]
	        	var idx = arguments[2] 
	        	for (var i = 0; i < idx; i++){
	        		result.push(s + s2[i])
	        	}
	        	return result 	        
	        }
	        var a = init_indexes()
	        var result = []
	        for(var i=0; i<a[0]; i++){
	        	for(var j=0; j<a[1]; j++){
	        		for(var k=0; k<a[2]; k++){
	        			for(var m=0; m<a[3]; m++){
	        				for(var n=0; n<a[4]; n++){
	        					for(var p=0; p<a[5]; p++){
	        						for(var q=0; q<a[6]; q++){
	        							for(var r=0; r<a[7]; r++){
	        								for(var s=0; s<a[8]; s++){
	        									result.push(
	        									'story[0].sequence['+ i + '].' +
	        									'reversals[' + j + '].' +
	        									'scene[' + k + '].' +
	        									'beat[' + m + '].' +
	        									'paragraph[' + n + '].' +
	        									'sentence[' + p + '].' +
	        									'clause[' + q + '].' +
	        									'words[' + r + '].' +
	        									'connotation[' + s + '].(' + reversal(s, reversals) + ')'
	        									)
									        }
								        }
							        }
						        }
					        }
				        }
	        		}
	        	}
	        }
	        return result.join('\n')
        }

//

		this.level = function(){  
		    // ['sequence','reversals','scene','beat','paragraph','sentence','clause','words','connotation']
		    function init_indexes(){	       
				var i = []
				i.push(M)
				for(var j=1; j<args.length; j++){
					i.push(args[j])
				}
				return i
	        }
	        function annotator(){
	        	var result = []
	        	var s = arguments[0] 
	        	var s2 = arguments[1]
	        	var idx = arguments[2] 
	        	for (var i = 0; i < idx; i++){
	        		result.push(s + s2[i])
	        	}
	        	return result 	        
	        }
	        var a = init_indexes()
	        function parse_story(){
	        	var idx = 1
	        	return annotator( '.' + g_elements[ g_element_names.story ] + '[' + 0 + ']', parse_sequence(arguments[0],0), idx)
	        }
	        function parse_sequence(){
	        	var idx = arguments[0][ arguments[1]++ ]
	        	return annotator('.' + g_elements[ g_element_names.sequence ] + '[' + 0 + ']', parse_reversals(arguments[0],arguments[1]), idx)
	        }
	        function parse_reversals(){
	        	var idx = arguments[0][ arguments[1]++ ]
	        	return annotator('.' + g_elements[ g_element_names.reversals ] + '[' + 0 + ']', parse_scene(arguments[0],arguments[1]), idx)
	        } 
	        function parse_scene(){
	        	var idx = arguments[0][ arguments[1]++ ]
	        	return annotator('.' + g_elements[ g_element_names.scene ] + '[' + 0 + ']', parse_beat(arguments[0],arguments[1]), idx)
	        }
	        function parse_beat(){
	        	var idx = arguments[0][ arguments[1]++ ]
	        	return annotator('.' + g_elements[ g_element_names.beat ] + '[' + 0 + ']', parse_paragraph(arguments[0],arguments[1]), idx)
	        }
	        function parse_paragraph(){
	        	var idx = arguments[0][ arguments[1]++ ]
	        	return annotator('.' + g_elements[ g_element_names.paragraph ] + '[' + 0 + ']', parse_sentence(arguments[0],arguments[1]), idx)
	        }
	        function parse_sentence(){
	        	var idx = arguments[0][ arguments[1]++ ]
	        	return annotator('.' + g_elements[ g_element_names.sentence ] + '[' + 0 + ']', parse_clause(arguments[0],arguments[1]), idx)
	        }
	        function parse_clause(){
	        	var idx = arguments[0][ arguments[1]++ ]
	        	return annotator('.' + g_elements[ g_element_names.clause ] + '[' + 0 + ']', parse_word(arguments[0],arguments[1]), idx)
	        }
	        function parse_word(){
	        	var idx = arguments[0][ arguments[1]++ ]
	        	return annotator('.' + g_elements[ g_element_names.words ] + '[' + 0 + ']', parse_connotation(arguments[0],arguments[1]), idx)
	        }
	        function parse_connotation(){
	        	var idx = arguments[0][ arguments[1] ]
	        	return annotator('.' + g_elements[ g_element_names.connotation ] + '[' + 0 + ']', ['.(+/-)'], idx)	        
	        }
	        return parse_story(a,0)
        }

//

        this.level = function(){        
        	var lvl = arguments[0]
        	var N = arguments[0].length
        	var M = arguments [1] || 0
        	var s = []
        	var s2 = {
        		'default': function(){
        			return ('.' + arguments[1])
        		},      	
        	}
        	function f(){
        		return ( '.(' + reversal( arguments[0],reversals ) + ')' )
        	}
        	s2[ g_elements[g_element_names.reversals] ] = function () {
        		return ( '.(' + reversal( arguments[0],reversals ) + ')' )
        	}
        	s2[ g_elements[g_element_names.connotation] ] = function (){
        		return ( '.(' + reversal( arguments[0],reversals ) + ')' )
        	}
        	if(N){
		    	for(var i=0; i<N; i++){
		    		var s3 = this.level( lvl[i],++M )
		    		var N2 = s3.length
		    		if(N2){
		    			for(var j=0; j<N2; j++){
		    				s.push( s2[ lvl[i].name ] (i, s3[j]) )
		    			}
		    		} else {
		    			s.push ( s2[ 'default' ] (i, lvl[0].name) )
		    		}
		    	}
        	}
        	return s//.join('.') 
        }

//
    /*
	if(g_lastChecked != srcCode.value){
		previewTool ()
		g_lastChecked = srcCode.value
	} else {
		// proceed to generate new story
		clear_window()
	}
*/

//



function Story() {
    
    var args = arguments[0]
    var reversal = arguments[1]
    
    function Character() {
        this.update = function() {
        // update our status of other characters
        }
        this.narrator = function() {
            return this.datalog.join('\n')
        }
        this.datalog = []
        this.status = function() {
            return ((this.flags ^ arguments[0]) == 0)
        }
        this.beat = function() {
            var N = arguments.length
            for (var i = 0; i < N; i++) {
                this.flags |= arguments[i]
            }
            var result = this.flags
            if (this.status(this.story_goal)) {
                this.datalog.push('Final state found - ' + this.flags)
                this.datalog.push('\nTHE_END')
                result = 0x0
            } else {
                this.datalog.push('Next state found - ' + this.flags)
            }
            return result
        }
        this.flags = 0x0
        this.story_goal = 0xff
    }
    Character.prototype = new Object()
    
    var STORY_GOAL = 0xff
    var story_state_machine = [0xf0, 0xf8, 0xfc, 0xfe, STORY_GOAL]
    var Seras = new Character()
    Seras.story_goal = STORY_GOAL

    // state_machine / work backwards
    var next_state = 0
    while (story_state_machine[next_state] != STORY_GOAL){
        Seras.beat(story_state_machine[next_state])
        switch (Seras.flags) {
            case 0xf0:
                next_state = 1 // flags |= 0x8
                break
            case 0xf8:
                next_state = 2 // flags |= 0x4
                break
            case 0xfc:
                next_state = 3 // flags |= 0x2
                break
            case 0xfe:
                next_state = 4 // flags |= 0x1
                break
            default:
                console.log('warning - flags(0x' + Seras.flags + ') not a valid state')
                break
        }
    } 
    Seras.beat(story_state_machine[next_state])
    return Seras.narrator()
}