// state machine.js
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
var gsen = '@ #  '
var SUBJ = /@ /gmi
var PRED = /# /gmi
var subordinating_conjunction = [
'after ',
'although ',
'as far as ',
'as soon as ',
'as if ',
'as though ',
'because ',
'before ',
'even if ',
'even though ',
'how ',
'if ',
'inasmuch as ',
'in case that ',
'insofar as ',
'in that ',
'lest ',
'no matter how ',
'now that ',
'once ',
'provided ',
'provided that ',
'since ',
'so that ',
'supposing that ',
'than ',
'though ',
'till ',
'unless ',
'until ',
'when ',
'whenever ',
'where ',
'wherever ',
'whether ',
'while ',
'why ',
]
var pronoun = [
'I ', 
'my ',
'me ', 
'mine ', 
'myself ', 
'you ', 
'your ', 
'yours ', 
'yourself ',
'he ', 
'him ', 
'his ',
'she ', 
'her ', 
'hers ', 
'it ', 
'its ',
'we ', 
'us ', 
'our ', 
'they ', 
'them ', 
'their ',
'this ', 
'these ', 
'who ', 
'whom ', 
'whose ',
'which ', 
'that ', 
'one ', 
'ones ', 
'everybody ',
'anyone ',
]
var article = [
'a ',
'an ',
'the ',
]
var preposition = [
'about ',
'above ',
'across ',
'after ',
'against ',
'along ',
'among ',
'around ',
'at ',
'because ',
'before ',
'behind ',
'below ',
'behind ',
'below ',
'beneath ',
'beside ',
'besides ',
'between ',
'beyond ',
'but ',
'by ',
'concerning ',
'despite ',
'down ',
'during ',
'except ',
'excepting ',
'for ',
'from ',
'in ',
'inside ',
'into ',
'like ',
'near ',
'of ',
'off ',
'on ',
'onto ',
'out ',
'outside ',
'over ',
'past ',
'regarding ',
'round ',
'since ',
'through ',
'throughout ',
'till ',
'to ',
'toward ',
'under ',
'underneath ',
'until ',
'up ',
'upon ',
'with ',
'within ',
'without ',
]
var phrasal_prepositon = [
'according to',
'along with ',
'apart from ',
'as for ',
'as regards ',
'as to ',
'because of ',
'by means of ',
'by reason of ',
'by way of ',
'due to ',
'except for ',
'in addition to ',
'in case of ',
'in front of ',
'in lieu of ',
'in place of ',
'in regard to ',
'in spite of ',
'instead of ',
'on account of ',
'out of ',
'up to',
'with reference to ',
'with regard tp ',
'with respect to ',
'with the excpetion of ',
]
var conjunctive_adverb = [
'also ',
'anyhow ',
'beside ',
'consequently ',
'finally ',
'furthermore ',
'hence ',
'however ',
'incidentally ',
'indeed ',
'instead ',
'likewise ',
'meanwhile ',
'moreover ',
'nevertheless ',
'next ',
'nonetheless ',
'otherwise ',
'similarly ',
'still ',
'then ',
'therefore ',
'thus ',
]
var transitional_phrase = [
'after all ',
'as a result ',
'at any rate ',
'at the same time ',
'by the way ',
'even as ',
'for example ',
'in addition ',
'in fact ',
'in other words ',
'in the second place ',
'on the contrary ',
'on the other hand ',
]
var infinitive = [
'is ',
'was ',
'will be ',
]
var adverb = [
'especially ',
'in ',
]
var season = [
// available
'cendant_spring',
'zifident_spring',
'ensign_summer',
'awning_summer',
'volks_autumn',
'zansker_fall',
'akruskan_fall',
'petrovian_winter',
'aleutian_winter',
// current
0,
]
var FLAGS = [
'INFINITIVE',
'INDEFINITE',
// TENSE
'PRESENT_TENSE',
'PAST_TENSE',
'FUTURE_TENSE',
// INFLECTION
'INFLECTION',
'NONINFLECTION', // used to denote words have not been modified for tense, context, etc.
// ATTRIBUTES
'NONAPHESIS', // used to denote words that start with vowels
'APHESIS',
// NOUN_TYPE 
'PROPER_NOUN',
'PRONOUN',
// PART_OF_SPEECH 
'NOUN',
'VERB',
'ADJECTIVE',
'ADVERB',
'PREPOSITION',
'CONJUNCTION',
// OTHER
'INTERJECTION',
]
var g_FLAGS = {}
for(var i=0; i<FLAGS.length; i++){
    g_FLAGS[FLAGS[i]] = FLAGS[i]
}
function generate_FLAGS(){
    var obj = {}    
    var N = arguments.length
    for(var i=1; i<N; i++){
        obj[arguments[i]] = 1
    }
    return obj
}
var FLAGS = generate_FLAGS(FLAGS)
var weather = [
// available
[generate_FLAGS(FLAGS,g_FLAGS.NOUN,g_FLAGS.NONINFLECTION),'rain '],
[generate_FLAGS(FLAGS,g_FLAGS.NOUN,g_FLAGS.NONINFLECTION),'wind '],
[generate_FLAGS(FLAGS,g_FLAGS.NOUN,g_FLAGS.NONINFLECTION),'sleet '],
[generate_FLAGS(FLAGS,g_FLAGS.NOUN,g_FLAGS.NONINFLECTION),'snow '],
// current
0,
]
var degree = [
// available
[generate_FLAGS(FLAGS,g_FLAGS.ADJECTIVE,g_FLAGS.NONINFLECTION,g_FLAGS.PRESENT_TENSE),'harsh '],
[generate_FLAGS(FLAGS,g_FLAGS.ADJECTIVE,g_FLAGS.NONINFLECTION,g_FLAGS.PRESENT_TENSE),'cool '],
[generate_FLAGS(FLAGS,g_FLAGS.ADJECTIVE,g_FLAGS.NONINFLECTION,g_FLAGS.PRESENT_TENSE),'mild '],
[generate_FLAGS(FLAGS,g_FLAGS.ADJECTIVE,g_FLAGS.NONINFLECTION,g_FLAGS.PRESENT_TENSE),'calm '],
// current
0,
]
var randstack = [
0,
1,
2,
3,
]
var tmp = []
for(var i=0; i<weather.length-1; i++){
    tmp.push([weather[i],degree[randstack[i]]]) // per weather
}
var season_v_weather = []
for(var i=0; i<season.length; i++){
    season_v_weather.push(tmp) // per season
}
season_v_weather.push([0,0])
tmp = null
function CAPIT(){
    var s = arguments[0].replace(/^([a-z])([a-zA-Z0-9 ]*)/mg,'$1_'+'$2').split('_') 
    if(s.length>1){
        s[0] = s[0].toUpperCase()
    }
    return s.join('')
}
function toSUBJ(){
    var result = arguments[0]
    var s = result[1]
    var flags = result[0]
    if(
        !flags[g_FLAGS.NONAPHESIS] && 
        !flags[g_FLAGS.PROPER_NOUN] && 
        !flags[g_FLAGS.INDEFINITE]
        ){ // subject starts with nonvowel + Not proper noun + not indefinite ? eg the [s]
        s = article[2] + s
    } else if(
        flags[g_FLAGS.NONAPHESIS] && 
        flags[g_FLAGS.INDEFINITE]
        ){ // subject starts with vowel + indefinite ? eg an [s]
        s = article[1] + s
    } else if(
        !flags[g_FLAGS.NONAPHESIS] && 
        flags[g_FLAGS.INDEFINITE]
        ){ // subject starts with nonvowel + indinfite ? eg a [s]  
        s = article[0] + s
    }
    return s
}
function toPRED(){
    var result = arguments[0]
    var s = result[1]
    var flags = result[0]
    if(flags[g_FLAGS.PRESENT_TENSE]){
        s = infinitive[0] + s
    } else if(flags[g_FLAGS.PAST_TENSE]){
        s = infinitive[1] + s
    } else if(flags[g_FLAGS.FUTURE_TENSE]){
        s = infinitive[2] + s    
    }
    return s
}
var clause = function(){
    var result = []
    var N = arguments[0].length-1
    var current = arguments[0][N]
    var M = current.length 
    var INDEX = 0
    for(var i=0; i<M; i+=2){
        INDEX = result.length-1
        if(INDEX){
            result[INDEX-1] += ', '
        }
        result.push(gsen)
        var k = current[i]
        var v = current[i+1]
        var subject = arguments[0][k][v][0]
        var predicate = arguments[0][k][v][1]
        INDEX = result.length-1
        result[INDEX] = result[INDEX].replace(SUBJ, toSUBJ(subject))          
        result[INDEX] = result[INDEX].replace(PRED, toPRED(predicate))  
    }
    return result.join('\n\n')
}
function translatorTool() {
    // 'The rain is especially harsh in the summer'
    srcTranslated.value = CAPIT(clause(season_v_weather))
}
// translatorTool ()
