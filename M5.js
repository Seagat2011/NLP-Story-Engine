// interface between Beat sheet M4 and Narrative tool M5
// JavaScript Regular expressions: 
/*
    var obj = new RegExp ( str ); 
    [0-9a-zA-Z]  find one-of-avaiable
    [^0-9a-zA-Z] ignore one-of-not-avaiable
    .   All
    \d  digit(s)
    \w  word(s)
    ^n starts with n
    n$ ends with n
    n+ 1 or more n
    n* 0 or more n
    n? n being optional
    a{m,n} a duplicates, atleast m to atmost n (not inclusive)
    (n) capture n as variable: $1,$2, .. etc.
    string.match(..)
    string.format(..)
    string.replace(..)
    string.split(..)
*/
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
var lex = {
    // lexeme
    0: 'was on',
    1: 'was in',
    2: 'am on',
    3: 'am in',
    4: 'will be on',
    5: 'will be in',
}
// lex {}
// DICTIONARIES offer better performance

var g_token = {
    // GUID (Globally Unique ID)
    ABSTRACT_DICTION: 'FAA7479DB8BA9847F4555840BBFB0666',
    ACTIVE_VOICE: '50A36B35867ECFD609233635AB75FEE1',
    ADJECTIVE: '25E7C2F520352B487644B4439F41573A',
    ADJECTIVE_PARTICIPLE: 'CBFCE1FBD7A00CB8AA9067F700E7A7FE',
    ADJECTIVE_INFINITIVE: '9B36065502CC7D3D662BED4BB8DFEB30',
    ADVERB: '144E3538B0F39ADCB080DF0903604A49',
    ADVERB_INFINITIVE: 'E9369BE17827916B12CB2276286D1F3A',
    ANTECEDANT: '874660EED163D98044B78E8E4CB9E988',
    APPOSITIVE: '4D20C6CCAB6F173B5F98B9E5E620E827',
    APPOSITIVE_PHRASE: '9703A9620FC6C1BAF2D2C425820127C8',
    APPOSITIVE_PRONOUN: '6016B02E2E48F2E1944C2472D6DE9579',
    APPOSITIVE_WITH_DASH: 'C0B63550518398450487178CF7C93B67',
    APPOSITIVE_WITH_COMMA: '918949A6019E73682C8DC87A9B3267FD',
    APPOSITIVE_SENTENCE_FRAGMENT: '72C28526A90E33B15450FA861418056E',
    AUXILIARY: '6A01BC3928C3CA681B216F47821CB70E',
    CLAUSE: 'AB29125759E2DE7EA7D205C0C3F9DD8A',
    CLAUSE_GRAMMAR: '7A3D3145FC13B02195686AD0F5C0C94F',
    CASE: 'BEA5438A9521ADC1B23A9117024BBB43',
    CLICHE: '9207EFBA394229B154927ADFF95C1CE8',
    COLLECTIVE_NOUN: '021390B5F7D35B93113DD463E03D0BD9',
    COLLECTIVE_NOUN_PRONOUN_AGREEMENT: '21BC60C86FEB5858F0B8A22E6016BFE4',
    COLLECTIVE_NOUN_VERB_AGREEMENT: '56B7FF304609F8D5BF8EE10AE75D752B',
    COLLOQUIAL: 'B61FE5A5E04A7752ED508C84E24CB6E4',
    COLLOQUIAL_IDIOM: '39C8E515229C12C2EBCA522A7774B434',
    COMPLIMENT: '56C32494DBB06DA6622D2FC011C00262',
    COMPOUND_DIRECT_OBJECT: '12CBB073FC04E130A7ADE8991FB9016C',
    COMPOUND_SUBJECT: '80BA2B48C024BF4E0CFCB5A9EBF85AC1',
    COMMON_PREPOSITION: '87FAF18AC948F71F7434FE6F9B157D31',
    COMPARATIVE_ADVERB: 'A6714719A1FB51D2DA8F7B8F4E568E14',
    COMPLEMENT: 'FDD815953DF9DD54D578A8F8F843E690',
    COMPLEX_SENTENCE: '2C8B0755909083EED8E18208A9DF3162',
    COMPOUND_ADJECTIVE: 'E65AD1D2BE5BD3F00175CA7C2ADDDAF5',
    COMPOUND_COMPLEX_SENTENCE: '99B3761A8D0FD09549F031DFAA3715B4',
    COMPOUND_CONSTRUCTION: '6FA3DD8EECFF5E33831D98A2A5D60D44',
    COMPOUND_SENTENCE: 'E501C29DD043D3E1D8D70F1F691D32EA',
    CONCRETE_DICTION: 'AAF83AA067986AC7C793B908F1FCF509',
    CONNOTATION: '0D4514232BC2064CB43056406147D80D',
    DENOTATION: 'AB044265EB5BD50A1D6D17D2F61BBBBE',
    DOUBLE_NEGATIVE: 'A48730AC354766D5FB2EA9540AC113F4',
    CONJUNCTION: '9CF40429AE914672742E68787E5C8E93',
    COORDINATING_CONJUNCTION: '896DA59F4C9F7CE3A38CF1AAE51A5604',
    CONJUNCTIVE_ADVERB: '01BE22BCC30F3B8A6F0DA9DE807B168E',
    COORDINATION_PARALLELISM: '9E64F74E857B526C4476F094DC387380',
    DECLARATIVE_SENTENCE: '5E1F7DAA90241C6879B785BDD5854989',
    DICTION: 'CBC4512F78DED63BCED591D672300EC5',
    DOUBLE_COMPARISON: 'C0DE36901D08D2E2EDDD66B8F3056DAE',
    DOUBLE_SUBJECT: '9024B1CFB2A0282418C263EDC2B0DC34',
    DIRECT_OBJECT: 'E3F467B855E209110546F1C442B9FB6E',
    EXPLETIVE: '0700B988879923D5FDE2728416FA66DB',
    EUPHEMISM: '754B85D1DD3020B21A5F834B3E6E617C',
    EXACT_DICTION: '11313E5AF89D19EE82805970F6E121CA',
    EXCLAMATORY_SENTENCE: '3324380BD2E99A602BF66F2EDFB0BF03',
    FIGURATIVE: 'FB7CCE67B3214993AF018C30E136D54C',
    FAULTY_COORDINATION: '68FD9EEDC402B92D634969C3CFDFE158',
    FAULTY_PARALLELISM: '31EC809EAFB1428722E2B42CDA68986A',
    FAULTY_PASSIVE_CONSTRUCTION: 'C1A400B1E22BAE905D3A7D85C88D6DB7',
    FAULTY_SUBORDINATION: '53745852CF30533D31F36383AC102CA1',
    GENERAL_DICTION: '73726342CA8760BC07996BF4569C5E68',
    GERUND: '417B34C16919F9CAE1787FE9DA30C987',
    GERUND_INFINITIVE: 'C81EBB7919DCE52B8345B08A3F444FBB',
    HELPING_VERB: '1EECDF47FE5D0CB26AC2EAC1B480FFB3',
    IDIOM: '8CE3DDF49B70E0A322D492B9B91BFDAF',
    IDIOMATIC_DICTION: '676C9674AF55F3AA13770B56617A46DE',
    IDIOMATIC_PREPOSITION: '85677795161389892D1E2F92CA8A7E37',
    ILLOGICAL_SUBORDINATION: '5DDF51AB45B06BA86C9502A323C3C9C5',
    IMPERATIVE_SENTENCE: 'CB454D241C140ABD4847E8E216F41FC7',
    INCORRECT_IDIOM: 'F7EFF2FE723CE9B3D3A12864DA03AAF0',
    INDIRECT_DISCOURSE: 'D5853ABE431C9B8654A568018FE8912F',
    INDIRECT_OBJECT: 'B898E6D957D1187CF98CCD4B40F2A4F1',
    INDEPENDENT_CLAUSE: 'DFB30EEC1D43540F40D6573A0C46696E',
    INFINITIVE: '0942607F9C80EDEAF9EA9BD7E77FB10F',
    INFINITIVE_SUBJECT: '6360E4A1D8CF58E2AF5E0A9C258353BD',
    INFINITIVE_OBJECT: 'AA78F289641AF0B95D2C23FE7FE4A7AA',
    INFINITIVE_TENSE: 'F46E1C6C19B0B95327B62CE28286717D',
    INFORMAL_IDIOM: '1E8C74C214F39619780E90B48596CF17',
    INFORMAL_USAGE: '8283E4CAA70BBBAFA6E2278364E2129D',
    INTENSIVE_PRONOUN: '220EC8B8369B5422AF63005BAB810589',
    INTERJECTION: '6235FB07C5ABC990ECB3E072AFED4E0A',
    INTERROGATIVE_SENTENCE: '7587AF1FD0E3030AD623D941FB3BF28C',
    INTERVENING: '1A1FA125E1F7D515A3EB885E50E9ADA2',
    INTRANSITIVE_VERB: '79D1C2E30FD6A52D5B29692EB2DA9883',
    INVERSION: '1296821944BCBFE23D5ED704F5D9447D',
    INVERTED_VERB: '88C70E66E83C915CF0654C272D48CEC3',
    IRREGULAR_ADJECTIVE: '301A6C860AE154BAAC3BCE2C5F9ACE3A',
    IRREGULAR_VERB: '8E52BC2D00A0FA54C9C6227DFE4436DB',
    IRREGULAR_PAST_TENSE: '188723C3357297F87286B499283188FC',
    JARGON: 'B151B4F808D908846DAA9C6483BF9E5D',
    LINKING_VERB: '721D4582FAA34B688662B152B3C908DD',
    MODAL_AUXILIARIES: '86AE13290F57E39BAF46A7719B363495',
    MODAL_VERB: 'FC68BC11C5066B97B3068BB2A4808E7E',
    MODAL: 'C0C047E39E77804B75BBFCB81CB58867',
    MODIFIER: 'F47E1C3D8FBDC90D8CDBD8F5E4A1BCE3',
    MOOD: '891D33E4601F99FD579C9446D1A95939',
    MOOD_SHIFT: '15E4DD19601163924A5626ADC37857FE',
    MOOD_CONDITIONAL_CLAUSE: '1DE9AEBBF949871FF76E7CD0D1A7D4C3',
    MIXED_CONSTRUCTION: 'E1A6FDC46DDB8B6151CF5A7D3169AFC2',
    NONRESTRICTIVE_APPOSITIVE: 'FC458F349AE251EB4944B5095CDE4A56',
    NONRESTRICTIVE_ELEMENT: 'D56EE5B6FD0C6E4DCDA5A2C526BDEADA',
    NONSTANDARD_ENGLISH: 'EC5B08ED993424279C76E8A15BEB9F3C',
    NONSTANDARD_IDIOM: 'A2445023F27E61DFF7F701122DD596DF',
    NOUN: 'B5D8555B3DA2A1CC3777D4E1978E8F96',
    NOUN_PHRASE: 'D0AAB9339E0D58EDFCD0EDAE1D17623A',
    OBJECT: '8EEE8E217391199668CBAC89472ACE53',
    OBJECT_COMPLEMENT: 'D7A0EC7F923167832DAFE13A50E6B9AF',
    OBJECTIVE_CASE: '967CBC0893288872B4D780D72EED184C',
    OBSCURE_IDIOM: '3F45E8D453045067F2A0A7666EC2A118',
    OMITTED_ARTICLE: 'D9CE24D125D7DEC371781FD62A841563',
    OMITTED_AUXILIARY: '7608C536223820FDDEDACF9237398FE0',
    OMITTED_CONJUNCTION: 'C4C4225C64EF043537F0704AF28882CC',
    OMITTED_PREPOSITION: 'DE145C885BE6809702F52EC76EC8DA51',
    OMITTED_SUBJECT: '5F7E8E875548B38FF56A0487B4EF3F90',
    ORNATE_IDIOM: '0108A649024A561765BD8CDCCD52F080',
    PARAGRAPH_GRAMMAR: '0F5873E6309463D21F75144B30CCE66C',
    PARTICLE: '5818992261344F3F6C810EA0DFC13C24',
    PARTICIPLE: 'C7430446FF5868A7F09A85F6BE478CE1',
    PASSIVE_CONSTRUCTION: 'A7C9DCCF4AEABF180F504F094489595C',
    PASSIVE_VOICE: '9B17A5456F27AF00748EA644FD3B8BF1',
    PAST_PARTICIPLE: '5B116547DDF7E004E2F8A5B95C773633',
    PREDICATE: '1A6E096E1E9B142E671245BF278B66A2',
    PERSONAL_PRONOUN: 'A62AE192EE2CE279AED32116F06998C3',
    PHRASE: '326989110DDD70ABCC96D1E4BF40AFC9',
    PREPOSITION: 'F696A444E2B1F3656527268B8F77F767',
    PRESENT_PARTICIPLE: '67C7D38C84E02106718BC6641F3C1CC9',
    PART_OF_SPEECH: '4AED6BC2DA9E7298F29E72923BF829FB',
    POSSESSIVE_GERUND: 'BCA5C8537EE11395A5F91476C51509F2',
    POSSESSIVE_CASE: 'F52A1402508F4DB8E2FD557226CE8224',
    PLURAL_VERB: 'DEC1E1CA04010B1F9E166831227F15C9',
    PRECISE_IDIOM: '890B1803CD6EAC5471C00A0858FEA205',
    PRONOUN: '7C8F211F7965D4C7509C3E245C06E676',
    PRONOUN_AS_SUBJECT: 'A1666358B22D048B56DF3C968A32B7BF',
    QUANTITY_DENOTING_VERB_PHRASE: '653B05318997843668BDDC062C4C4BB9',
    REFLEXIVE_PRONOUN: 'A385000F5DBEA369A98A25888F9A6109',
    REGULAR_PAST_TENSE: '18DE69ACC7A6ECEC606079F17F8B3714',
    RELATIVE_PRONOUN: '5C53FD9FDB18092238024EDEA7DA211C',
    SENTENCE: 'F56A96B136A3F11AE800FB81E4D554EF',
    SENTENCE_GRAMMAR: 'E88BC152DCCDB70DA092F81600E97067',
    SIMPLE_SUBJECT: 'AAECB457AF651B515FE827A2CDB78927',
    SINGULAR_VERB: '70A9F87DADAE507F46C2FED9E41707E7',
    SINGULAR_ADVERB: '03D6D9DF03482758D084A0AF06154EA8',
    SINGULAR_NOUN: '97EAA82E03BBBB2D77E8D61EE560819E',
    SEXIST_IDIOM: '1893904CD5E407148717CADBCBEA05DE',
    SLANG: 'D300A1DC7AEAF5D2A72CAC10DA37D23E',
    SPECIFIC_DICTION: '4AA2BCD4E943A1D0AB8023A6407A14E3',
    STATED_SUBJECT: '4FE3B7BBB58A2B98EC7E78603D4047B9',
    SUBJECT: '171CB8F32B5BD0A653AEC8CC647F17AE',
    SUBJECT_COMPLEMENT: '6FB6E929F65D93600B92502A5DE23126',
    SUBJECTIVE_CASE: '8C1CB31AEBDAD5E3C1F28A0E704AF2AC',
    SUBJUNCTIVE_MOOD: 'E3F49C9B7C1862010DBE1E1DF7AFC4AF',
    SUBORDINATE_CLAUSE: '60220095BDBD4A91E2BFB8325E39754F',
    SUBORDINDATE_CONJUNCTION: '536D056089642307CD9BF35445FE27EA',
    SUPERLATIVE_ADJECTIVE: '3A0660F9CD8A8C083D709815EDDC3116',
    TENSE_SHIFT: 'FEB1588C0D90E687A9CEB096B9DFBE75',
    TONE: 'AA475451ACCAE7E39365147D9CA85ACC',
    TRANSITIONAL_EXPRESSION: 'CEC6E87F480A6E022BCE7A9F23050D07',
    TRANSITIVE_VERB: '2EDC6535A83DD4CDFE9EB57686B648F7',
    TRANSITIVE: 'FE15D6A7C7399D59178D40ACB8CF5E6C',
    TONE: 'AA475451ACCAE7E39365147D9CA85ACC',
    UNDERSTOOD_SUBJECT: '9B898BEFBDA1DB258A36E57921D03361',
    VAGUE_DICTION: '5735E26682F6791E47C1DAF6056D5245',
    VERB: '9AB55524458A3237C512CCDF1E1E108F',
}
// g_token {}

var object_element = {
}
object_element[g_token.INDIRECT_OBJECT] = 1
object_element[g_token.DIRECT_OBJECT] = 1
var clause_element = {
}
// clause_element {}

var transitive_verb_element = {
}
transitive_verb_element[g_token.DIRECT_OBJECT] = 1
var verb_element = {
}
verb_element[g_token.VERB] = 1
verb_element[g_token.AUXILIARY] = 1
verb_element[g_token.MODAL] = 1
verb_element[g_token.PARTICLE] = 1
verb_element[g_token.TRANSITIVE] = 1
var subject_element = {
}
subject_element[g_token.NOUN] = 1
subject_element[g_token.PRONOUN] = 1
subject_element[g_token.SIMPLE_SUBJECT] = 1
subject_element[g_token.COMPOUND_SUBJECT] = 1
var compund_subject_element = {
}
// complex_sentence_element {}

var sentence_element = {
}
sentence_element[g_token.SUBJECT] = 1
sentence_element[g_token.PREDICATE] = 1
sentence_element[g_token.EXPLETIVE] = 1
var compund_sentence_element = {
}
compund_sentence_element[g_token.SUBJECT] = 1
compund_sentence_element[g_token.PREDICATE] = 1
var simple_sentence_element = {
}
simple_sentence_element[g_token.SUBJECT] = 1
simple_sentence_element[g_token.PREDICATE] = 1
var complex_sentence_element = {
}
complex_sentence_element[g_token.SUBJECT] = 1
complex_sentence_element[g_token.PREDICATE] = 1
var declarative_sentence_element = {
}
declarative_sentence_element[g_token.SUBJECT] = 1
declarative_sentence_element[g_token.PREDICATE] = 1
var imperative_sentence_element = {
}
imperative_sentence_element[g_token.SUBJECT] = 1
imperative_sentence_element[g_token.PREDICATE] = 1
var object_subgrammar = {
}
object_subgrammar[g_token.INDIRECT_OBJECT] = {
}
object_subgrammar[g_token.INDIRECT_OBJECT][g_token.NOUN] = 1
object_subgrammar[g_token.INDIRECT_OBJECT][g_token.PRONOUN] = 1
object_subgrammar[g_token.DIRECT_OBJECT] = {
}
object_subgrammar[g_token.DIRECT_OBJECT][g_token.NOUN] = 1
object_subgrammar[g_token.DIRECT_OBJECT][g_token.PRONOUN] = 1
var object_grammar = {
}
object_grammar[g_token.NOUN] = 1
object_grammar[g_token.PRONOUN] = 1
object_grammar[g_token.OBJECT] = object_subgrammar
var subject_grammar = {
}
subject_grammar[g_token.SIMPLE_SUBJECT] = 1
subject_grammar[g_token.COMPOUND_SUBJECT] = 1
var verb_grammar = function () {
    var args = arguments
    var status = false
    var a = {
    }
    var b = {
    }
    var c = {
    }
    var d = {
    }
    a[g_token.VERB] = 1
    b[g_token.AUXILIARY] = {
    }
    b[g_token.AUXILIARY][g_token.VERB] = 1
    c[g_token.MODAL] = {
    }
    c[g_token.MODAL][g_token.AUXILIARY] = {
    }
    c[g_token.MODAL][g_token.AUXILIARY][g_token.VERB] = 1
    c[g_token.VERB] = {
    }
    c[g_token.VERB][g_token.PARTICLE] = 1
    if ((a[args[0]] && args.length < 2) || (b[args[0]][args[1]] && args.length < 3) || (b[args[0]][args[1]][args[2]] && args.length < 4) || (c[args[0]][args[1]] && arg.length < 3)
    ) {
        status = true
    }
    return status
}
// verb_grammar {}  

var predicate_grammar = function () {
    var k = arguments
    var status = false
    var a = {
    }
    var b = {
    }
    var c = {
    }
    var d = {
    }
    var e = {
    }
    a[g_token.VERB] = 1
    b[g_token.VERB] = {
    }
    b[g_token.VERB][g_token.OBJECT] = 1
    c[g_token.VERB] = {
    }
    c[g_token.VERB][g_token.INDIRECT_OBJECT] = {
    }
    c[g_token.VERB][g_token.INDIRECT_OBJECT][g_token.DIRECT_OBJECT] = 1
    d[g_token.LINKING_VERB] = {
    }
    d[g_token.LINKING_VERB][g_token.SUBJECT_COMPLEMENT] = 1
    e[g_token.VERB] = {
    }
    e[g_token.VERB][g_token.DIRECT_OBJECT] = {
    }
    e[g_token.VERB][g_token.DIRECT_OBJECT][g_token.OBJECT_COMPLEMENT] = 1
    if ((c[k[0]][k[1]][k[2]]) || (e[k[0]][k[1]][k[2]]) || (b[k[0]][k[1]] && k.length < 3) || (d[k[0]][k[1]] && k.length < 3) || (a[k[0]] && k.length < 2)
    ) {
        status = true
    }
    return status
}
var sentence_grammar = {
}
sentence_grammar[g_token.SUBJECT] = {
}
sentence_grammar[g_token.SUBJECT][g_token.PREDICATE] = predicate_grammar
var clause_grammar = sentence_grammar
// clause_grammar {}
var paragraph_grammar = {
}
paragraph_grammar[g_token.SENTENCE_GRAMMAR] = {
}
paragraph_grammar[g_token.SENTENCE_GRAMMAR][g_token.PARAGRAPH_GRAMMAR] = 1
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

var s3 = {
    true: '+',
    false: '-',
}
var s2 = {
    '+': true,
    '-': false,
}
var s1 = {
    0: function () {
        return arguments[0]
    },
    1: function () {
        return s3[!s2[arguments[0]]]
    },
}
function reversal() {
    return s1[(arguments[0] % 2)](arguments[1])
}
function revs() {
    var r = ''
    if (arguments[1] != null) {
        r = ' (' + reversal(arguments[0], arguments[1]) + ')'
    }
    return r
}
function to_page_length() {
    // sequences > reversals > scenes > beats > paragraphs > sentences > clauses > words > connotation (+/- inherit)
    var args = arguments[0]
    var PAGE_LENGTH = 50
    // 50 sentences = 1 page
    var result = 7
    var N = args.length
    for (var i = 1; i < N; i++) {
        result *= args[i]
    }
    return Math.ceil((args[4]*3*args[3] + 2*args[2]*args[3] + result) / PAGE_LENGTH)
}
function update_progress(n) {
    var status = {
        false: function (n) {
            return "<div id=updaterTool class='clsUpdaterTool' style='display:inline-block;background-color:#cecece;width:" + n + "%'>" + n + "%</div>"
        },
        true: function () {
            return "<div id=updaterTool class='clsUpdaterTool' style='background-color:#cecece'></div>"
        },
    }
    updaterTool.outerHTML = status[(n == 100)](n)
    return
}
var character_attributes = {
    name: 'Seras',
    action:{ 
        weapon:{ 
            searchof:{                 
                location:[
                        [''],// 0
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                    ],// location
                }, 
            locate:{                    
                location:[
                        [''],// 0
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                    ],// location
                }, 
            weild:{                             
                location:[
                        [''],// 0
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                    ],// location 
                },
            best_use:{                          
                location:[
                        [''],// 0
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                    ],// location
                    },// location 
                },// best_use
                },// weapon
                },// action    
    remark:{
        sense:{ 
            sight:{                             
                location:[
                        [''],// 0
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                    ],// location
                }, 
            sound:{                             
                location:[
                        [''],// 0
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                    ],// location
                }, 
            smell:{                             
                location:[
                        [''],// 0
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                    ],// location
                    },// location
                }, 
            taste:{                             
                location:[
                        [''],// 0
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                    ],// location 
                }, 
            feel:{
                location:[
                        [''],// 0
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                        [''],
                    ],// location
                }, 
            weather:{ 
                season:{ 
                    0:{// ensign summer               
                        location:[
                                [''],// 0
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                            ],// location
                            },// season 0
                    1:{// ensign summer              
                        location:[
                                [''],// 0
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                            ],// location
                            },// season 1
                    2:{// ensign summer              
                        location:[
                                [''],// 0
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                            ],// location
                            },// season 2
                    3:{// ensign summer              
                        location:[
                                [''],// 0
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                            ],// location
                            },// season 3
                    4:{// ensign summer              
                        location:[
                                [''],// 0
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                            ],// location
                            },// season 4
                    5:{// ensign summer              
                        location:[
                                [''],// 0
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                            ],// location
                            },// season 5
                    6:{// ensign summer              
                        location:[
                                [''],// 0
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                            ],// location
                            },// season 6
                    7:{// ensign summer              
                        location:[
                                [''],// 0
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                            ],// location
                            },// season 7
                    8:{// ensign summer              
                        location:[
                                [''],// 0
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                                [''],
                            ],// location
                            },// season 8
                    },// season 
                    },// weather 
                    },// sense   
        location:{
            0: [
                'in the mountains ',
                "zanzibar  Such cold and harsh mountains having very little vegetation and sharp cragged rock  Great place if you're hungry for death  Which I was not  I would hurry to get out of this place  "
            ],
            1: [
                'on the sands ',
                'golgotha  I could sense my luck running low  This is much worse than luck running out because even though the suffering is just as bad but unfortunately you will always live through it  '
            ],
            2: [
                'in the valley ',
                'swat  Not always an easy place to start  But its better than starting off dead  I would take inventory of my supplies  '
            ],
            3: [
                'beside the lake ',
                'zinj  A most beautiful lake this time of year  I can only imagine how the soldiers anticipate this well-welcomed break  If an enemy comes there will be over a minute to ready ourselves and to strap on our gear  I look forward to these straightforward moments  '
            ],
            4: [
                'on the lake ',
                "torr  It feels cool outside  I wonder how the others are doing in the harsher climates  No doubt they will forge through  But I wouldn't want to imagine it  "
            ],
            5: [
                'on the hills ',
                'azur  Great lake  Lots of sun  But no food'
            ],
            6: [
                'in the land ',
                'the dark Forest  Terrible place to start: no food, shelter, water, or weapons  We would have to make everything from the petrified wood around us  One of the few good things about this unwelcoming place  '
            ],
            7: [
                'on the shores ',
                'the biden river  Plenty of food here  Unfortunately its also one of the few salt-water rivers in this land  Even the fish taste like salt  We have food but we wont eat  '
            ],
            8: [
                'in the shade ',
                "the breadwoods  I wondered how my soldiers would welcome this place as much as I do  I've warmed very much to this place  Which is why I almost always keep my weapon a staggering two paces from me  Here I feel like I can relax  "
            ],
            parent_index: 8,
            child_index: -1,
        },
        // location {}
        procession: {
            0: [
                'the mountains of zanzibar ',
                "I would make my way gradually through  Stopping only when necessary  The mountains were dangerous: the z'abel-coor had successfully ambushed an entire team and killed them   I would not want to waste time there  "
            ],
            1: [
                'the sands of golgotha ',
                'I would need to plan my trip carefully  There would be very little room for error here  A previous general had ordered one thousand sentinels to these sand-drifts only to see one return  And I would not have the luxury of such well-trained men  '
            ],
            2: [
                'the valley of swat ',
                'this would also be no small task  How do I explain the almost certainty of death for a great majority of my men  I reasoned it best just not to tell  '
            ],
            3: [
                'the lake of zinj ',
                'I would not have very much time in the locale  It was important to keep moving  I would have to do this without wearing the troops down  '
            ],
            4: [
                'the lake of torr ',
                'I would try to cross the lake quietly  The Greys were a nasty still-water entity that thrived on the ignorance of the uninitiated  If I failed here, I would likely have few men to go any further  '
            ],
            5: [
                'the hills of azur ',
                'I would travel by force  Cutting and hacking my way through the countryside  There was little threat in these lands if we crossed before dark  But if we ran late, then we would not survive  '
            ],
            6: [
                'the land of the dark Forest ',
                'I would travel with caution, without the ability to travel in the trees like the birds which was the safest way  We march our way through and we would do it fast  '
            ],
            7: [
                'the shores of the biden river ',
                'my men and I would rest as needed  This was one of the few places where if a threat came, It would do so from only one direction: the way in which we came  We would have to watch our progressions carefully  '
            ],
            8: [
                'the shade of the breadwoods  ',
                'an effort would be made here to forge new weapons  We would need an arsenal before making our way to the sentinel king  '
            ],
            parent_index: 8,
            child_index: -1,
        }
        // procession {}
    }
    // remark {}
}
// character_attributes {}  
var basic_template = {
    location: [
        'I was ',
        'of '
    ],
    progression: [
        'where ',
        'And finally onto ',
        'I would proceed to ',
        'I would then continue on to ',
        'Next I would proceed to ',
        'From there I would travel through',
        "My mission wasn't over yet  I would then proceed to ",
        'If I was still alive from there I would rest for only a moment then onward to ',
        'But it got even better from that point  I would move to '
    ],
}
function get_num() {
    return Math.floor(Math.random() * 9)
}
function get_stack() {
    if(arguments[0]){
        var tmp = []
        for(var i=0; i<arguments[0]; i++){
            tmp.push(1)
        }
    } else {
        var tmp = [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }
    var stack = [
    ]
    var N = arguments[0] || 9
    for (var i=0; i<N; i++) {    
        var n = get_num()
        while (tmp[n] != 1) {
            n = get_num()
        }
        // loopf
        tmp[n] = 0
        stack.unshift(n)        
    }
    // loopi
    return stack
}
var g_GLOBAL_STATUS_WORD = []
function to_number() {
    var s = arguments[0]
    for (var i=s.length; i>0; i--) {
        s[i-1] *= 1
    }
    return s
}
var g_temp_FLAGS = [
    // currents
    'current_location',
    'current_season',
    'current_weapon',
    'current_weather',
    'current_energy',
    // location
    'the_mountains_of_zanzibar',
    'the_sands_of_golgotha',
    'the_valley_of_swat',
    'the_lake_of_zinj',
    'the_lake_of_torr',
    'the_of_hills_of_azur',
    'the_dark_forest',
    'the_biden_river',
    'the_breadwoods',
    // season
    'cendant_spring',
    'zifident_spring',
    'ensign_summer',
    'awning_summer',
    'volks_autumn',
    'zansker_fall',
    'akruskan_fall',
    'petrovian_winter',
    'aleutian_winter',
    // weather
    'precip', // rain, snow, sleet
    'humd',
    'high_humid',// hot, sticky
    'low_humid', // cool, cold
    'overcast',// cloud, cloud-events
    'wind', // hurricane, tornado
    // weapons
    'staff_of_endor',
    'blade_of_eppendorf',
    'sword_of_gaull',
    'the_short_staff_of_epiphany',
    'the_arrows_of_heartbleed',
    'water_potion',
    'shield_of_rhokken',
    'wind_potion',
    'strong_potion',
    'weak_potion',
    'dark_potion',
    // crisis points
    'BIG_OPENING',
    'CATALYST',
    'BIG_EVENT',
    'SEQ01',
    'PINCH',
    'SEQ02',
    'CRISIS',
    'CLIMAX',
    'DENOUEMENT',
    'PROLOGUE',
]
var g_FLAG = {}
var g_ACTIVE_FLAGS = {}
for(var i=0; i<g_temp_FLAGS.length; i++){
    g_FLAG[ g_temp_FLAGS[i] ] = i // name of flag
    g_ACTIVE_FLAGS[ g_temp_FLAGS[i] ] = 0 // flag is enabled
}
/*
var current_story=0 //=(g_GLOBAL_STATUS_WORD[0])
var current_prologue=1 //(0)
var current_pinch=2 //=(g_GLOBAL_STATUS_WORD[1]+3)
var current_crisis=3 //=(g_GLOBAL_STATUS_WORD[1]*2+3)
var current_realization=4 //=(g_GLOBAL_STATUS_WORD[1]*2+4)
var current_denouement=5 //=(g_GLOBAL_STATUS_WORD[1]*2+5) 
var current_paragraph=6 //<(g_GLOBAL_STATUS_WORD[3]) or 0
var current_sequence1=7 //<(g_GLOBAL_STATUS_WORD[1]+3) 
var current_sequence2=8 //<(g_GLOBAL_STATUS_WORD[1]*2+6) 
var current_iterative_depth=9 //<(g_GLOBAL_STATUS_WORD[2]) or 0 
var current_season=g_GLOBAL_STATUS_WORD[5]
*/
function __sentence__(){ 
    var STATUS_WORD = to_number(arguments[1].match(/\d+/gmi))
    var progression_stack = get_stack()
    var procession_stack = get_stack()
    var m = procession_stack[0]
    var result = []
    result.push( basic_template.location[0] + character_attributes.remark.location[m][0] +
    basic_template.location[1] + character_attributes.remark.location[m][1] )
    for (i=1; i<8; i++) {
        var n = progression_stack[i]
        var m = procession_stack[i]
        result.push( basic_template.progression[(n == 0) ? 4 : n] + character_attributes.remark.procession[m][0] +
        basic_template.progression[0] + character_attributes.remark.procession[m][1] )
    }
    var n = progression_stack[8]
    result.push( basic_template.progression[1] + character_attributes.remark.procession[n][0] + basic_template.progression[0] + character_attributes.remark.procession[n][1])
    return '\n\n' + arguments[0] + '( ' + STATUS_WORD.join(',') + ' )' + '\n\n' + result.join('\n\n')
}
var g_clause = 2
function clauses() {
    var r = ''
    if (arguments[0] && arguments[1]) {
        if ((arguments[0] % arguments[1]) == 0) {
            g_clause = arguments[0]
        }
        r = '( clauses[0:' + g_clause + '] )'
    }
    return r
}
function __Event__() {
    var s = arguments[1]
    try {
        var result = [
            s[0](),
            s[1](),
            s[2](),
            s[3](),
            s[4](),
            s[5](),
            s[6](),
            s[7](),
            s[8](),
            s[9](),
            s[10](),
            s[11](),
            s[12](),
        ]
    } catch (e) {
        var result = s
    }
    return arguments[0] + result.join('')
}
function Paragraph() {
    var s = arguments[0]
    var r = revs(arguments[1], arguments[2])
    var c = clauses(arguments[1], arguments[3])
    return [__sentence__(g_temp_FLAGS[g_FLAG.BIG_OPENING], s, r, c)]
}
function Reversal() {
    var s = arguments[0]
    var flags = arguments[2]
    var rvsl = arguments[3]
    var i = arguments[1]
    var args = arguments[4]
    var a = [
    ]
    for (var j = 0; j < args[2]; j++) {
        a.push(__Event__('', Paragraph(s + '.P[' + j + ']', i, flags, rvsl)))
    }
    return a
}
function Sequence() {
    var s = arguments[0]
    var flags = arguments[2]
    var rvsl = arguments[3]
    var i = arguments[1]
    var args = arguments[4]
    var a = [
    ]
    for (var j = 0; j < args[1]; j++) {
        a.push(__Event__('', Reversal(s + '.R[' + j + ']', i, flags, rvsl, args)))
    }
    return a
}
function Story() {
    var args = arguments[0]
    var flags = arguments[1]
    var rvsl = args[2]
    var i = 0
    var t1 = 'story[' + args[0] + ']'
    var t2 = 'story[' + args[0] + '].S['
    var a = [
        __Event__('', Paragraph(t1 + '[' + i + ']:big_opening', i++, flags)),
        __Event__('', Paragraph(t1 + '[' + i + ']:catalyst', i++, flags)),
        __Event__('', Reversal(t1 + '[' + i + ']:big_event', i++, flags, null, args)),
    ]
    for (var j = 0; j < args[1]; j++) {
        a.push(__Event__('', Sequence(t2 + i + ']', i++, flags, rvsl, args)))
    }
    a.push(t1 + ':pinch')
    for (var j = 0; j < args[1]; j++) {
        a.push(__Event__('', Sequence(t2 + i + ']', i++, flags, rvsl, args)))
    }
    a.push(__Event__('', Sequence(t2 + i + ']:crisis', i++, flags, rvsl, args)))
    a.push(__Event__('', Reversal(t1 + '[' + i + ']:climax / realization', i++, flags, null, args)))
    a.push(__Event__('', Paragraph(t1 + '[' + i + ']:denouement', i, flags)))
    return a
} // Story () constructor
Story.prototype = new Object()
function preview_tool() {
    var args = arguments[0]
    var flags = arguments[1]
    var i = 0
    var t1 = 'story[' + args[0] + ']'
    var t2 = 'story[' + args[0] + '].S['
    var a = [
        t1 + ':big_opening',
        t1 + ':catalyst',
        t1 + ':big_event' + revs(i++, flags)
    ]
    for (var j = 0; j < args[1]; j++) {
        a.push(t2 + i + ']' + revs(i++, flags))
    }
    a.push(t1 + ':pinch')
    for (var j = 0; j < args[1]; j++) {
        a.push(t2 + i + ']' + revs(i++, flags))
    }
    a.push(t1 + ':crisis' + revs(i++, flags))
    a.push(t1 + ':climax / realization' + revs(i, flags))
    a.push(t1 + ':denouement')
    a.push('\n')
    return a.join('\n') + 'Total pages (' + to_page_length(args) + ')\n\n'
}
function to_number() {
    var s = arguments[0]
    for (var i = s.length; i > 0; i--) {
        s[i-1] *= 1
    }
    return s
}
function translatorTool() {
    g_GLOBAL_STATUS_WORD = to_number(srcCode.value.match(/\d+/gim))
    var args = []
    for(var i=0; i<5; i++){
        args.push( g_GLOBAL_STATUS_WORD[i] )
    }
    var flags = srcCode.value.match(/[+-]/gim)
    srcTranslated.value = preview_tool(args, flags[0]) + __Event__('Story', Story(args, flags[0]))
}
// translatorTool ()
