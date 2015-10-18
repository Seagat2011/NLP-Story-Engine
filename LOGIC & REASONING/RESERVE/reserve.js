//if(!s[0][s[0].length-1].match(/[\.\?\!]$/)){
        if(s.length==1){
            sentence =  getDEFS(s[0])
        }

// Works yet SLOW (performance)
function my_func(e){ // part_of_speech lookup
    var result = []
    try{
        var s = e.data.replace(/\n+/gmi,'\n').split('\n')
        var N = s.length
        var POS = 1
        for(var n=0; n<N; n++){
            var v = s[n].replace(/\s+/gmi,' ').replace(/[^\sa-zA-Z0-9]/gmi,'').split(' ') 
            var M = v.length
            var sentence = []
            for(var m=0; m<M; m++){
                var tst = ''
                var word = v[m]
                if(ano_buffer[word]){
                    tst = ano_buffer[word]
                } else if (IS_TOKEN(TOKEN[word])){
                    if(TOKEN[word].match(/(\.pronoun)|(pronoun\.)/gmi)){
                        tst = g_token_II.WHO+wANNOTATOR+TOKEN[word]+wSEPARATOR+word
                    } else {
                        tst = TOKEN[word]+wSEPARATOR+word
                    }
                } else if(!IS_TOKEN(mysql_wn_data_synsets_II[word])){
                    if(IS_TOKEN(word) && word.match(/^[A-Z]/)){
                        tst = g_token_II.WHO+wANNOTATOR+TOKEN['undefined']+wSEPARATOR+word
                    } else if(IS_TOKEN(word) && word.match(/^[0-9]+/gmi)){
                        var token_TMP = 'noun.quantity.number'
                        tst = token_TMP+wSEPARATOR+word
                    }
                } else {
                    try{
                        var W = mysql_wn_data_synsets_II[word].length
                        var str = []
                        var NV = false
                        for(var w=0; w<W; w++){
                            var phr = part_of_speech[mysql_wn_data_synsets_II[word][w]]
                            if(NV==false && ((phr == 'noun') || (phr == 'verb'))){
                                NV = true
                            }
                            str = ANNOTATE( str,phr+'.'+word )
                        }
                    } catch(e){
                        console.log(e)
                    }
                    if(NV){
                        var tmp = {}
                        archive.map(function(v){
                            try{
                                if(typeof(v[word] === 'object')){
                                    var p = v[word][0]
                                    var X = v[word][0].length
                                    for(var x=0; x<X; x++){
                                        tmp[p[x]] = 1
                                    } // loop x
                                } // test (word)
                            } catch(e){
                                //console.log(e)
                            } // try / catch
                        })
                        for(var _s_ in tmp){
                            str = ANNOTATE( str,_s_ )
                        }
                    } // test(NV)
                    tst = str.join(wANNOTATOR)+wSEPARATOR+word
                } // test (word)
                if(tst == ''){
                    tst = '????'+wSEPARATOR+word
                }
                ano_buffer[word] = tst
                sentence = ANNOTATE( sentence,tst )
            } // loop m
            if(sentence.length){
                result.push(sentence)
            } // test length
        } // loop n
    } catch(e) {
        sentence.push('Pattern Library *** grammar mismatch *** - I have not been trained to answer this kind of question - '+e)
        console.log(e)
    } // try / catch
    console.log(result,ano_buffer)
    postMessage ( { origin:'mysql_wn_data_0',value:result } )
} // my_func ()

//

var g_token_II = {
    WHO:'who',
    WHAT:'what',
    WHEN:'when',
    WHERE:'where',
    WHY:'why',
    WHICH:'which',
    HOW:'how',
   'HOW MANY':'how many',
}

function AND(){ // AND operation (performed on bitfield array)
    var N = arguments.length
    var BIT = arguments[0].length
    for(var n=1; n<N; n++){
        for(var bit=0; bit<BIT; bit++){
            arguments[0][bit] &= arguments[n][bit]
        }
    }
    return arguments[0]
}

function OR(){ // OR operation (performed on bitfield array)
    var N = arguments.length
    var BIT = arguments[0].length
    for(var n=1; n<N; n++){
        for(var bit=0; bit<BIT; bit++){
            arguments[0][bit] |= arguments[n][bit]
        }
    }
    return arguments[0]
}

function NOT(){ // NOT operation (performed on bitfield array)
    var N = arguments.length
    var BIT = arguments[0].length
    for(var n=0; n<N; n++){
        for(var bit=0; bit<BIT; bit++){
            arguments[n][bit] = (arguments[n][bit]==1) ? 0: 1
        }
    }
    return arguments
}

var ISA = {}
ISA[g_token.NOUN] = {}
ISA[g_token.NOUN][g_token.OBJECT] = 1 // DIRECT or INDIRECT ?
ISA[g_token.NOUN][g_token.COMPOUND_OBJECT] = 1 // DIRECT or INDIRECT ?
ISA[g_token.NOUN][g_token.DIRECT_OBJECT] = 1 // SIMPLE or COMPUND ?
ISA[g_token.NOUN][g_token.INDIRECT_OBJECT] = 1 // SIMPLE or COMPUND ?
ISA[g_token.NOUN][g_token.COMPOUND_DIRECT_OBJECT] = 1
ISA[g_token.NOUN][g_token.COMPOUND_INDIRECT_OBJECT] = 1

/*
NOTE:
    clauses: everything before the first occuring noun can be parsed as the subject
ISA[g_token.NOUN][g_token.SUBJECT] = 1
ISA[g_token.NOUN][g_token.SUBJECT_COMPLEMENT] = 1
*/

ISA[g_token.VERB] = {}
ISA[g_token.VERB][g_token.LINKING_VERB] = 1


var CLAUSE = {}
CLAUSE[g_token.SUBJECT] = {}
CLAUSE[g_token.SUBJECT][g_token.VERB] = {} 

/* 
PATTERN 1
    the [children] did not [listen]
    the [lights] on the patrol car [flashed] ominously  */
CLAUSE[g_token.SUBJECT][g_token.VERB][null] = 1 

/* 
PATTERN 2
    [mice] [frighten] [elephants]
    [elephants] [frighten] [mice]
    kenya's [athletes] often [win] the [marathon] */
CLAUSE[g_token.SUBJECT][g_token.VERB][g_token.OBJECT] = 1 

/*
PATTERN 3
    [jan] [showed] [carl] the [book]
    the [company] will probably [send] [me] a small [refund] */
CLAUSE[g_token.SUBJECT][g_token.VERB][g_token.INDIRECT_OBJECT] = {}
CLAUSE[g_token.SUBJECT][g_token.VERB][g_token.INDIRECT_OBJECT][g_token.DIRECT_OBJECT] = 1

/*
PATTERN 4
    My son's [name] [is] [aaron]
    the [fence] [was] [white] */
CLAUSE[g_token.SUBJECT][g_token.LINKING_VERB] = {}
CLAUSE[g_token.SUBJECT][g_token.LINKING_VERB][g_token.SUBJECT_COMPLEMENT] = 1

/*
PATTERN 5
    [I] [named] my [son] aaron
    [I] [painted] the [fence] white */
CLAUSE[g_token.SUBJECT][g_token.VERB][g_token.DIRECT_OBJECT] = 1

var part_of_speech = {
    'n':'noun',
    'v':'verb',
    'r':'adv',
    'a':'adj',
    's':'verb.sense'
}

var TOKEN = {
    // noun (common) (woman, street, dogs)
    // noun (collective) (team, committee, class)
    // noun (concrete) (truck, cup, foot, fish)
    // noun (abstract) (love, justice, fear)
    // noun (count) (cents, bytes, assignment, revisions)
    // noun (noncount) (concern, consideration, revenue)
    
    // noun (proper) (Ms, Wentworth, Dallas, White House)
    'undefined':'noun.proper',
    
    // pronoun (can be resubstituted when stated as a question eg who:my/their)
    'I':'noun.pronoun',
    'me':'noun.pronoun',
    'mine':'noun.pronoun',
    'myself':'noun.pronoun',
    'you':'noun.pronoun',
    'your':'noun.pronoun',
    'yours':'noun.pronoun',
    'yourself':'noun.pronoun',
    'he':'noun.pronoun',
    'him':'noun.pronoun',
    'his':'noun.pronoun',
    'she':'noun.pronoun',
    'her':'noun.pronoun',
    'hers':'noun.pronoun',
    'it':'noun.pronoun',
    'its':'noun.pronoun',
    'we':'noun.pronoun',
    'us':'noun.pronoun',
    'our':'noun.pronoun',
    'they':'noun.pronoun',
    'them':'noun.pronoun',
    'their':'noun.pronoun',
    'this':'noun.pronoun',
    'these':'noun.pronoun',
    'who':'noun.pronoun',
    'whom':'noun.pronoun',
    'whose':'noun.pronoun',
    'which':'noun.pronoun',
    'that':'noun.pronoun',
    'one':'noun.pronoun',
    'ones':'noun.pronoun',
    'everybody':'noun.pronoun',
    'nobody':'noun.pronoun',
    'anyone':'noun.pronoun',
    'everyone':'noun.pronoun',
    
    // auxillary (helping) verb assignments
    'is':'verb.aux.is',
    'are':'verb.aux.is',
    'am':'verb.aux.is',
    'do':'verb.aux.is',
    'equals':'adj.is',
    'was':'verb.aux.was',
    'were':'verb.aux.was',
    
    // modal auxillary verbs
    'will be':'verb.modal.aux.will',
    'will':'verb.modal.aux.will',
    'shall':'verb.modal.aux.will',
    
    // coordinating conjunction
    'not':'conj.coord.not',
    '!':'conj.coord.not.!',
    'both':'conj.coord.and',
    'and':'conj.coord.and',
    'but':'conj.coord',
    'however':'',
    'yet':'',
    '&':'conj.coord.and',
    ',':'conj.coord.and',
    '|':'conj.coord.or',
    'or':'conj.coord.or',
    'nor':'conj.coord.nor.^|',
    'for':'conj.coord',
    'so':'conj.coord',
    'yet':'conj.coord',
    
    // subordinating conjunction
    'after':'conj.subord',
    'although':'conj.subord',
    'as far as':'conj.subord',
    'as soon as':'conj.subord',
    'as if':'conj.subord',
    'because':'conj.subord.because.because',
    'before':'conj.subord',
    'even if':'conj.subord',
    'even though':'conj.subord',
    'how':'conj.subord',
    'if':'conj.subord',
    'inasmuch as':'conj.subord',
    'in case that':'conj.subord',
    'insofar as':'conj.subord',
    'in that':'conj.subord',
    'lest':'conj.subord',
    'else':'conj.subord',
    'no matter how':'conj.subord',
    'now that':'conj.subord',
    'once':'conj.subord',
    'provided':'conj.subord',
    'provided that':'conj.subord',
    'since':'conj.subord',
    'so that':'conj.subord',
    'supposing that':'conj.subord',
    'than':'conj.subord',
    'though':'conj.subord',
    'till':'conj.subord',
    'unless':'conj.subord',
    'until':'conj.subord',
    'when':'conj.subord',
    'whenever':'conj.subord',
    'where':'conj.subord',
    'wherever':'conj.subord',
    'whether':'conj.subord',
    'while':'conj.subord',
    'why':'conj.subord',
    
    // preposition
    'about':'prep',
    'above':'prep',
    'across':'prep',
    'after':'prep',
    'against':'prep',
    'along':'prep',
    'among':'prep',
    'amongst':'prep',
    'around':'prep',
    'at':'prep',
    'before':'prep',
    'behind':'prep',
    'below':'prep',
    'beneath':'prep',
    'beside':'prep',
    'between':'prep',
    'beyond':'prep',
    'but':'prep',
    'by':'prep',
    'concerning':'prep',
    'despite':'prep',
    'down':'prep',
    'during':'prep',
    'except':'prep',
    'excepting':'prep',
    'for':'prep',
    'from':'prep',
    'in':'prep',
    'inside':'prep',
    'into':'prep',
    'like':'prep',
    'near':'prep',
    'of':'prep',
    'off':'prep',
    'on':'prep',
    'onto':'prep',
    'out':'prep',
    'outside':'prep',
    'over':'prep',
    'past':'prep',
    'regarding':'prep',
    'round':'prep',
    'since':'prep',
    'through':'prep',
    'throughout':'prep',
    'till':'prep',
    'to':'prep',
    'toward':'prep',
    'under':'prep',
    'underneath':'prep',
    'until':'prep',
    'up':'prep',
    'upon':'prep',
    'with':'prep',
    'within':'prep',
    'without':'prep',
    
    // phrasal (preposition)
    'according to':'prep.phrasal',
    'along with':'prep.phrasal',
    'apart from':'prep.phrasal',
    'as for':'prep.phrasal',
    'as regards':'prep.phrasal',
    'as to':'prep.phrasal',
    'because of':'prep.phrasal',
    'by means of':'prep.phrasal',
    'by reason of':'prep.phrasal',
    'by way of':'prep.phrasal',
    'due to':'prep.phrasal',
    'except for':'prep.phrasal',
    'in addition to':'prep.phrasal',
    'in case of':'prep.phrasal',
    'in front of':'prep.phrasal',
    'in lieu of':'prep.phrasal',
    'in place of':'prep.phrasal',
    'in regard to':'prep.phrasal',
    'in spite of':'prep.phrasal',
    'instead of':'prep.phrasal',
    'on account of':'prep.phrasal',
    'out of':'prep.phrasal',
    'up to':'prep.phrasal',
    'with reference to':'prep.phrasal',
    'with regard to':'prep.phrasal',
    'with respect to':'prep.phrasal',
    'with exception of':'prep.phrasal',
    
    // phrasal (transitional)
    'after all':'phr.trans',
    'as a result':'phr.trans',
    'at any rate':'phr.trans',
    'at the same time':'phr.trans',
    'by the way':'phr.trans',
    'even so':'phr.trans',
    'for example':'phr.trans',
    'in addition':'phr.trans',
    'in fact':'phr.trans',
    'in other words':'phr.trans',
    'in the first place':'phr.trans',
    'on the contrary':'phr.trans',
    'on the other hand':'phr.trans',
    
    // conjunctive adverb
    'also':'adv.conj',
    'anyhow':'adv.conj',
    'anyway':'adv.conj',
    'beside':'adv.conj',
    'consequently':'adv.conj',
    'finally':'adv.conj',
    'furthermore':'adv.conj',
    'hence':'adv.conj',
    'however':'adv.conj',
    'incidentally':'adv.conj',
    'indeed':'adv.conj',
    'instead':'adv.conj',
    'likewise':'adv.conj',
    'meanwhile':'adv.conj',
    'moreover':'adv.conj',
    'nevertheless':'adv.conj',
    'next':'adv.conj',
    'nonetheless':'adv.conj',
    'otherwise':'adv.conj',
    'similarly':'adv.conj',
    'otherwise':'adv.conj',
    'similarly':'adv.conj',
    'still':'adv.conj',
    'then':'adv.conj',
    'therefore':'adv.conj',
    'thus':'adv.conj',
    
    // expletive (establishes sentence tense: there/were; here/are
    'there':'expl',
    'here':'expl',
    
    // infinitive (precedes a subject/object)
    'the':'inf',
    'a':'inf.a.noun.a',
    'an':'inf',
}

var wSEPARATOR = '|'
var cSEPARATOR = '::'
var sSEPARATOR = ':::'
var wANNOTATOR = '.'

function Attribute(){
    this.value = 0
    this.feature = {}
}
Attribute.prototype = new Object()

function canAnswer () {
    this[g_token_II.WHO] = new Attribute()
    this[g_token_II.WHAT] = new Attribute()
    this[g_token_II.WHEN] = new Attribute()
    this[g_token_II.WHERE] = new Attribute()
    this[g_token_II.WHY] = new Attribute()
    this[g_token_II.WHICH] = new Attribute()
    this[g_token_II.HOW] = new Attribute()
    this[g_token_II['HOW MANY']] = new Attribute()
}
canAnswer.prototype = new Object()

function IS_TOKEN(){
    return (arguments[0] && 1)
}

function ANNOTATE(){
    arguments[0].push(arguments[1])
    return arguments[0]
}

function my_func(e){ // part_of_speech lookup
    var result = []
    try{
        var s = e.data.replace(/\n+/gmi,'\n').split('\n')
        var N = s.length
        var POS = 1
        for(var n=0; n<N; n++){
            var v = s[n].replace(/\s+/gmi,' ').replace(/[^\sa-zA-Z0-9]/gmi,'').split(' ') 
            var M = v.length
            var sentence = []
            for(var m=0; m<M; m++){
                var word = v[m]
                if (IS_TOKEN(TOKEN[word])){
                    if(TOKEN[word].match(/(\.pronoun)|(pronoun\.)/gmi)){
                        sentence = ANNOTATE( sentence,g_token_II.WHO+wANNOTATOR+TOKEN[word]+wSEPARATOR+word )
                    } else {
                        sentence = ANNOTATE( sentence,TOKEN[word]+wSEPARATOR+word )
                    }
                } else if(!IS_TOKEN(mysql_wn_data_synsets_II[word])){
                    if(IS_TOKEN(word) && word.match(/^[A-Z]/)){
                        sentence = ANNOTATE( sentence,g_token_II.WHO+wANNOTATOR+TOKEN['undefined']+wSEPARATOR+word )
                    } else if(IS_TOKEN(word) && word.match(/^[0-9]/gmi)){
                        var token_TMP = 'noun.number'
                        sentence = ANNOTATE( sentence,token_TMP+wSEPARATOR+word )
                    }
                } else {
                    var W = mysql_wn_data_synsets_II[word].length
                    var str = []
                    for(var w=0; w<W; w++){
                        str = ANNOTATE( str,part_of_speech[mysql_wn_data_synsets_II[word][w][POS]]+'.'+word )
                    }
                    sentence = ANNOTATE( sentence,str.join(wANNOTATOR)+wSEPARATOR+word )
                } // test (word)
            } // loop i
            if(sentence.length){
                result.push(sentence)
            }
        }
    } catch(e) {
        sentence.push('Pattern grammar Library *** mismatch *** - I have not been trained to answer this question - '+e)
        console.log(e)
    } // try / catch
    if(result.length == N){
        result.pop()
    }
    console.log(result)
    postMessage ( { origin:'0',value:result } )
}

//

    if(IS_TOKEN(word) && word.match(/^[A-Z]/)){
        sentence = ANNOTATE( 'who'+wANNOTATOR+sentence,TOKEN['undefined']+wSEPARATOR+word )
        CA.who.value = 1
        CA.who.feature[word] = 1
        CA.what.value = 1
        CA.what.feature[word] = 1
    }

//
    //var obj = {}
    //obj[ TOKEN[word] ] = word
    //sentence.push( obj )

    //var obj = {}
    //obj[ TOKEN['undefined']+''+word ] = word
    //sentence.push( obj )
    
    //var obj = {}
    //obj[ str.join(':') ] = word
    //sentence.push( obj)
//

function parse(result,v,row){
    var letter = v.split('')
    var COL = letter.length
    for(var col=0; col<COL; col++){
        if(!result[letter[col]]){
            result[letter[col]] = '::'
        }
        var LHS_row = 0
        var RHS_col = 1
        var lhs_match = false
        var rhs_match = false
        var q = result[letter[col]].split('::')
        if(!q[LHS_row].match(/\d+/gmi)){
            q[LHS_row] = (row).toString()
            lhs_match = true
        }
        if(!q[RHS_col].match(/\d+/gmi)){
            q[RHS_col] = (col).toString()
            rhs_match = true
        }
        if(!lhs_match){
            var w1 = q[LHS_row].match(/\d+/gmi)
            var N1 = w1.length
            for(var n1=0; n1<N1; n1++){
                if( (w1[n1]*1)==row ){
                    lhs_match = true
                    break
                }
            }
            if(!lhs_match){
                w1.push(row)
            }
            q[LHS_row] = w1.join(':')
        }
        if(!rhs_match){
            var w2 = q[RHS_col].match(/\d+/gmi)
            var N2 = w2.length
            for(var n2=0; n2<N2; n2++){
                if( (w2[n2]*1)==col ){
                    rhs_match = true
                    break
                }
            }
            if(!rhs_match){
                w2.push(col)
            }
            q[RHS_col] = w2.join(':')
        }
        result[letter[col]] = q.join('::')
    }
    return result
}

var archive = {}

function my_func(e){
    var result = []
    var ROW = 0
    for(var word in mysql_wn_data_synsets_II){
        var DEFS = mysql_wn_data_synsets_II[word].length
        for(var defs=0; defs<DEFS; defs++){
            var s = mysql_wn_data_synsets_II[word][defs][3].split('')
            var COLUMN = s.length
            for(var column=0; column<COLUMN; column++){
                if(!result[column]){
                    result.push({})
                }
                if(!result[column][ s[column] ]){
                    result[column][ s[column] ] = []
                }
                if(!archive[column]){
                    archive[column] = {}
                }
                if(!archive[column][ s[column] ]){
                    archive[column][ s[column] ] = {}
                }
                if(!archive[column][ s[column] ][ROW]){
                    archive[column][ s[column] ][ROW] = 1
                    result[column][ s[column] ].push(ROW) // parse(result[column][ s[column] ],word,ROW)
                }
            }
            ROW++
        }
    }
    postMessage ( { origin:'0',value:JSON.stringify(result).replace(/},/gmi,'},\n').toString() } )
}

/*
function parse(result,v){
    var word = v.split('')
    var N = word.length
    for(var n=0; n<N; n++){
        result[word[n]] = 1
    }
    return result
}

function my_func(e){ // part_of_speech lookup
    var result = []//{}
    var COLUMN = 0
    for(var word in mysql_wn_data_synsets_II){/*
        var s = word.split('')
        var COLUMN = s.length
        for(var column=0; column<COLUMN; column++){
            if(!result[column]){
                result.push({})
            }
            result[column][ s[column] ] = 1
        }
        var DEFS = mysql_wn_data_synsets_II[word].length
        for(var defs=0; defs<DEFS; defs++){
            var s = mysql_wn_data_synsets_II[word][defs][3].split('')
            var COLUMN = s.length
            for(var column=0; column<COLUMN; column++){
                if(!result[column]){
                    result.push({})
                }
                if(!result[column][ s[column] ]){
                    result[column][ s[column] ] = {}                    
                }
                result[column][ s[column] ] = parse(result[column][ s[column] ],word)
            }/*
            if(!result[COLUMN]){
                result.push({})
            }
            if(!result[COLUMN][null]){
                result[COLUMN][null] = {}
            }
            result[COLUMN][null] = parse(result[column][null],word)
        }
    }
    postMessage ( { origin:'0',value:JSON.stringify(result).replace(/}},/gmi,'}},\n').toString() } )
}
*/

/*
function my_func(e){ // part_of_speech lookup
    var result = []//{}
    var COLUMN = 0
    for(var word in mysql_wn_data_synsets_II){
        var s = word.split('')
        var COLUMN = s.length
        for(var column=0; column<COLUMN; column++){
            if(!result[column]){
                result.push({})
            }
            result[column][ s[column] ] = 1
        }
        if(!result[COLUMN]){
            result.push( {} )
        }
        result[COLUMN][null] = 1
    }
    //result.LENGTH = 71
    postMessage ( { origin:'0',value:JSON.stringify(result).replace(/},/gmi,'},\n').toString() } )
}
*/
/*
function my_func(e){ // part_of_speech lookup
    var result = {}
    var ROW = 0
    var DEFINITION = 3
    for(var word in mysql_wn_data_synsets_II){
        var DEFS = mysql_wn_data_synsets_II[word].length
        for(var defs=0; defs<DEFS; defs++){
            mysql_wn_data_synsets_II[word][defs].unshift(word)
        }
        result[ROW++] = mysql_wn_data_synsets_II[word]
    }
    result.LENGTH = ROW
    postMessage ( { origin:'0',value:JSON.stringify(result).replace(/\]\],/gmi,']],\n') } )
}

function my_func(e){ // part_of_speech lookup
    var result = []
    var DEFINITION = 3
    for(var word in mysql_wn_data_synsets_II){
        var DEFS = mysql_wn_data_synsets_II[word].length
        for(var defs=0; defs<DEFS; defs++){
            var s = mysql_wn_data_synsets_II[word][defs][DEFINITION].split('')
            var COLUMN = s.length
            for(var column=0; column<COLUMN; column++){
                if(!result[ column ]){
                    result[ column ] = []
                }
                result[ column ].push( s[column] )
            }
            if(!result[COLUMN]){
                result[COLUMN] = []
            }
            result[ COLUMN ].push( null ) // use null marker for EOL
        }
    }    
    postMessage ( { origin:'0',value:JSON.stringify(result).replace(/}},/gmi,'}},\n').toString() } )
}
*/
/*