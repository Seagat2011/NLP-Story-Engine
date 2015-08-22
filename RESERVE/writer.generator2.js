// interface between state machine M3 and beat sheet generator tool M4
var g_lastChecked = 0
// FC30-3DA9
function clear_window() {
    g_lastChecked = 0
    srcTranslated.value = ''
}
function loader() {
    // ['sequence','reversals','scene','beat','paragraph','sentence','clause','words','connotation', 'story'] 
    srcCode.value = 'supporting_sequences=2,reversal=2,paragraphs=2,sentences=13,realization=(+),story_state_machine=[]'
}
// sentences 12 > 7 crisis_points + 5 senses

Object.prototype.toHex = function () {
    // ex. 10.toHex() > 0xa
    return '0x' + this.toString(16)
}
Object.prototype.crisis_point = [
    {
        name: ':big_opening'
    },
    {
        name: ':catalyst'
    },
    {
        name: ':big_event'
    },
    {
        name: ':pinch'
    },
    {
        name: ':crisis'
    },
    {
        name: ':climax'
    },
    {
        name: ':realization'
    },
    {
        name: ':denouement'
    },
]
function MD5() {
    g_lastChecked = 0
    srcTranslated.value = Math.md5(srcCode.value)
}
function reversal() {
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
            return s3[!s2[arguments[0]]]
        },
        1: function () {
            return arguments[0]
        },
    }
    return s1[(arguments[0] % 2)](arguments[1])
}
function to_page_length() {
    // sequences > reversals > scenes > beats > paragraphs > sentences > clauses > words > connotation (+/- inherit)
    var args = arguments[0]
    var PAGE_LENGTH = 50
    // 50 sentences = 1 page
    var result = 1
    var N = args.length
    args[0] = arguments[1]
    // include all sequences as well as supporting
    for (var i = 0; i < N; i++) {
        result *= args[i]
    }
    return Math.ceil(result / PAGE_LENGTH)
}
var g_elements = [
    // all stories have atleast 1 or more of the following
    'sequence',
    // expresses 1+ ideas
    'reversal',
    // 1+ ideas  
    'paragraph',
    // expresses 1+ complete thoughts to convey an idea
    'sentence',
    // comprised of 1+ subject+predictae components to express a complete thought  comprised of 1 crisis_point or beat
    'story',
    // comprise 1+ sequences, paragraphs, and sentences which express 1+ complete thoughts, 1+ ideas, and a theme.
    'scene',
    // a location in a story
    'beat',
    // a partial crisis_point
    'clause',
    // a subject+predicate component in a sentence, comprised of 1+ words
    'words',
    // expresses the connotation for a complete thought
    'connotation',
    // the smallest discrete emotional affect in a story
    'realization',
    // a notational record (+/- inherit) of each connotatioin
]
var g_element_names = {
}
for (var i = 0; i < g_elements.length; i++) {
    g_element_names[g_elements[i]] = i
}
var g_cast = 0
// track all story objects
var g_actionset = {
default:
    0,
}
var g_crisis_points_TODO = {
    big_opening: 0,
    catalyst: 1,
    big_event: 2,
    pinch: 3,
    crisis: 4,
    climax: 5,
    realization: 6,
    denouement: 7,
}
var g_location_TODO = {
    defeat_boss: 0,
    explore: 1,
    locate_artifacts: 2,
    gather_materials: 3,
    hunt_food: 4,
    locate_boss: 5,
    negotiate_boss: 6,
    bury_treasure: 7,
    cast_spell: 8,
    pave_road: 9,
    swim_across: 10,
    sail_across: 11,
    pass_through: 12,
    navigate_to: 13,
    remark: 14,
    notice: 15,
}
var g_defeat_boss_TODO = {
}
var g_remark_TODO = {
    sense: 0,
    cast: 1,
}
var g_notice_TODO = {
}
var g_TODO = [
]
// flags
for (var i = 0; i < 100; i++) {
    g_TODO[i] = 0
}
function Story() {
    var args = arguments[0]
    var reversals = arguments[1]
    var M = arguments[2]
    function level() {
        // current ability of main character compared to available states
    }
    function Entity() {
        this.update = function () {
            // update our status of other characters
        }
        this.datalog = [
        ]
        this.status = function () {
        }
        this.beat = function () {
            this.flags = arguments[0]
            return this.flags
        }
        this.flags = 0
    }
    Entity.prototype = new Object()
    function Character() {
        this.cast = [
        ]
        this.idx = g_cast++
        this.name = arguments[0]
        this.SET_FLAGS = function () {
            function get_sequence_count() {
                return (arguments[0] == 0)
            }
            var me_index = arguments[0]
            var args = arguments[1]
            var curr_index = arguments[2]
            var obj = [
            ]
            var is_root = arguments[3] || false
            if (args[curr_index] > - 1) {
                if (is_root) {
                    obj[0] = {
                    }
                    obj[0].TODO = new Array(g_TODO)
                    obj[0].TODO_FLAG = false
                    obj[0].title = ''
                    var me = g_elements[g_element_names.story]
                    obj[0].name = me
                    obj[0][me] = [
                    ]
                    obj[0][me][0] = {
                    }
                    obj[0][me][0].TODO = new Array(g_TODO)
                    obj[0][me][0].TODO_FLAG = false
                    obj[0][me][0].title = ''
                    obj[0][me][0].name = g_elements[curr_index]
                    obj[0][me][0][g_elements[curr_index]] = this.SET_FLAGS(me_index, args, arguments[2])
                } else {
                    var N = args[curr_index]
                    if (get_sequence_count(curr_index++)) {
                        N = M
                    }
                    for (var i = 0; i < N; i++) {
                        obj[i] = {
                        }
                        obj[i].TODO = new Array(g_TODO)
                        obj[i].TODO_FLAG = false
                        obj[i].title = ''
                        var me = g_elements[curr_index]
                        obj[i].name = me
                        obj[i][me] = this.SET_FLAGS(me_index, args, curr_index)
                    }
                }
            }
            return obj
        }
        this.story = this.SET_FLAGS(this.idx, arguments[1], arguments[2] || 0, true)
        this.sequence_number = 0
        // *** patch *** used to keep track of sequence number
        this.beat_counter = 0
        this.bind = function () {
            function bind2() {
                // ['sequence','reversal','scene','beat','paragraph','sentence','clause','words','connotation']
                var status = [
                    'big_opening',
                    'catalyst',
                    'big_event',
                    'pinch',
                    'crisis',
                    'climax',
                    'realization',
                    'denouement',
                    this.name + 'remark.sense.sight',
                    this.name + 'remark.sense.hear',
                    this.name + 'remark.sense.smell',
                    this.name + 'remark.sense.taste',
                    this.name + 'remark.sense.touch',
                ]
                function init_indexes() {
                    var i = [
                    ]
                    i.push(M)
                    for (var j = 1; j < args.length; j++) {
                        i.push(args[j])
                    }
                    return i
                }
                function sequence() {
                    return 'story[0].sequence[' + arguments[0] + '].'
                }
                function sentence() {
                    function pos_operator() {
                        var s = ''
                        if (status[arguments[0]] == 'realization') {
                            s = ' (' + reversal(arguments[1], reversals) + ')'
                        }
                        return s
                    }
                    function beat_maker(a, b) {
                        var result = status[a]
                        if (b != null) {
                            var pinch = ''
                            var idx = b
                            if (b[1] != null) {
                                idx = b[0]
                                pinch = b[1]
                            }
                            if (idx > 0) {
                                result += '( clauses[0:' + idx + '] )' + pinch
                            }
                        }
                        return result
                    }
                    return 'sentence[' + arguments[0] + ']:' + beat_maker(arguments[0], arguments[2]) + pos_operator(arguments[0], arguments[1])
                }
                var a = init_indexes()
                var result = [
                ]
                var midway = Math.floor(M / 2)
                var sequence_number = arguments[0]
                var beat_counter = Math.floor(arguments[0] / 2)
                function max_bounds() {
                    return (arguments[0] == arguments[1]-1)
                }
                for (var j = 0; j < a[1]; j++) {
                    for (var n = 0; n < a[2]; n++) {
                        for (var p = 0; p < a[3]; p++) {
                            var beat = null
                            if ((status[p] == 'crisis') && (sequence_number + j + n != 0) && (sequence_number < M - 2)
                            // no more added beats after final climax
                            ) {
                                beat = beat_counter
                            }
                            if ((sequence_number == midway) && max_bounds(j, a[1]) && max_bounds(n, a[2]) && (status[p] == 'crisis')) {
                                beat = [
                                    beat_counter,
                                    ':pinch'
                                ]
                            }
                            result.push(sequence(sequence_number) +
                            'reversal[' + j + '].' +
                            'paragraph[' + n + '].' +
                            sentence(p, n, beat)
                            )
                        }
                    }
                }
                return result.join('\n')
            }/*
            var s = ''
            for (var i = 0; i <= M; i++) {
                s += '\n' + bind2(this.sequence_number++)
            }*/            
            function recursive_binder(){
                var result = []
                // 1. bind children
                // 2. bind self
                return result.join('\n')
            }
            return recursive_binder(this.story)
        }
        this.narrator = function () {
            return this.datalog.join('\n')
        }
        this.datalog = [
        ]
        this.datalog.push(this.bind())
        // flags
        this.actionset = [
            1,
            // idle, waiting on new event
            1,
            // fight
            1,
            // flee
            1,
            // death
            1,
            // eat
            1,
            // sleep
            1,
            // negotiate
            1,
            // train / prepare
            1,
            // order soldiers
            1,
            // recovery
            1,
            // remark
            1,
            // argue
            1,
            // brag	
            1,
            // navigate_to
            1,
            // use potions
            1,
            // use magic
        ]
        this.action = this.actionset[g_actionset.default]
        this.set_actionset = function () {
            this.actionset = new Array(arguments[0])
        }
        this.expand_actionset = function () {
            for (var i in arguments) {
                this.actionset.push(1)
            }
        }
        this.disable_actionset_elements = function () {
            for (var i in arguments) {
                this.actionset[i] = 0
            }
        }
        this.enable_actionset_elements = function () {
            for (var i in arguments) {
                this.actionset[i] = 1
            }
        }
        this.update = function () {
            // update our status of other characters
        }
        this.status = function () {
            return ((this.flags ^ arguments[0]) == 0)
        }
        this.beat = function () {
            this.flags = arguments[0]
            var result = arguments[0]
            var level = arguments[1] || 0
            this.datalog.push(this.level())
            if (this.status(this.story_goal)) {
                this.datalog.push(this.level())
                this.datalog.push('\nTHE_END\n\n')
                result = 0
            }
            return result
        }
        this.level = function () {
            // ['sequence','reversal','scene','beat','paragraph','sentence','clause','words','connotation']
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
            function init_indexes() {
                var i = [
                ]
                i.push(M)
                for (var j = 1; j < args.length; j++) {
                    i.push(args[j])
                }
                return i
            }
            function sequence() {
                return 'story[0].sequence[' + arguments[0] + '].'
            }
            function sentence() {
                function pos_operator() {
                    var s = ''
                    if (status[arguments[0]] == 'realization') {
                        s = ' (' + reversal(arguments[1], reversals) + ')'
                    }
                    return s
                }
                function beat_maker() {
                    var result = status[arguments[0]]
                    if (arguments[1] != null) {
                        result = 'crisis( clauses[0:' + arguments[1] + '] )'
                    }
                    return result
                }
                return 'sentence[' + arguments[0] + ']:' + beat_maker(arguments[0], arguments[2]) + pos_operator(arguments[0], arguments[1])
            }
            var a = init_indexes()
            var result = [
            ]
            for (var j = 0; j < a[1]; j++) {
                for (var n = 0; n < a[2]; n++) {
                    for (var p = 0; p < a[3]; p++) {
                        var beat = null
                        if ((status[p] == 'crisis') && (this.sequence_number + j + n != 0)) {
                            beat = this.sequence_number + j + n
                        }
                        result.push(sequence(this.sequence_number) +
                        'reversal[' + j + '].' +
                        'paragraph[' + n + '].' +
                        sentence(p, n, beat)
                        )
                    }
                }
            }
            this.sequence_number++
            return result.join('\n')
        }
        this.flags = 0
        this.story_goal = 0
    }
    Character.prototype = new Entity()
    var Seras = new Character('Seras', args)
    return Seras.narrator()
}
Story.prototype = new Array()
function preview_tool() {
    function pad_zero() {
        var args = arguments[0]
        return args > 9 ? args : '0' + args
    }
    var status = {
        true: '+',
        false: '-',
    }
    var args = arguments[0]
    var flags = arguments[1]
    var k = 3
    var a = '[ preview ]\n\n00 BIG_OPENING \n01 CATALYST - INCITING_INCIDENT \n02 BIG_EVENT  (' + reversal(2, flags) + ')\n'
    /*
	03 SEQ00 \n\
	04 SEQ01 \n\
	*/
    var b = ''
    for (var i = 0; i < args[0]; i++) {
        b += pad_zero(i + k) + ' SEQ' + pad_zero(i) + '      (' + reversal(i + k, flags) + ')\n'
    }
    /*
	05 PINCH \n\
	*/

    var N = args[0] + k
    var c = pad_zero(N) + ' PINCH      (' + reversal(N++, flags) + ')\n'
    /*
	06 SEQ02 \n\
	07 SEQ03 \n\
	*/
    var M = N
    var d = ''
    for (var i = 0; i < args[0]; i++) {
        M = i + N
        d += pad_zero(M) + ' SEQ' + pad_zero(args[0] + i) + '      (' + reversal(M, flags) + ')\n'
    }
    function no_supporting_sequences() {
        return (arguments[0] == 0)
    }
    if (no_supporting_sequences(args[0])) {
        ++M
    }
    /*
	08 CRISIS \n\
	09 CLIMAX \\ REALIZATION (+/-) \n\
	10 DENOUEMENT \n\
	*/

    var e =
    pad_zero(++M) + ' CRISIS     (' + reversal(M, flags) + ')\n' +
    pad_zero(++M) + ' CLIMAX - REALIZATION (' + reversal(M, flags) + ')\n' +
    pad_zero(++M) + ' DENOUEMENT \n\n'
    var f = 'length: (' + to_page_length(args, M) + ') pgs \n\n'
    if (g_lastChecked++ < 1) {
        srcTranslated.value = a + b + c + d + e + f
    } else {
        srcTranslated.value += Story(args, flags, M)
    }
}
function translatorTool() {
    function to_number() {
        var s = arguments[0]
        for (var i = s.length; i > 0; i--) {
            s[i - 1] *= 1
        }
        return s
    }
    var args = to_number(srcCode.value.match(/\d+/gim))
    var flags = srcCode.value.match(/[+-]/gim)
    preview_tool(args, flags)
}
