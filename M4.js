// convert from M3 state_machine generation to M4 beat sheet
function loader() {
    srcCode.value = 'story=0 sequence_blocks=4 iterative_depth=2 paragraphs=2 sentences=13 realization=(+) story_state_machine=[]'
    return
}
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
function clear_window() {
    srcTranslated.value = ''
    return
}
function MD5() {
    srcTranslated.value = Math.md5(srcCode.value)
    return
}
function revs() {
    var r = ''
    if (arguments[1] != null) {
        r = ' (' + reversal(arguments[0], arguments[1]) + ')'
    }
    return r
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
            s[6]('+'),
            // NOP
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
    return [
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
    ]
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
        __Event__('', Paragraph(t1 + ':big_opening', i++, flags)),
        __Event__('', Paragraph(t1 + ':catalyst', i++, flags)),
        __Event__('', Reversal(t1 + ':big_event', i++, flags, null, args)),
    ]
    for (var j = 0; j < args[1]; j++) {
        a.push(__Event__('', Sequence(t2 + i + ']', i++, flags, rvsl, args)))
    }
    a.push(t1 + ':pinch')
    for (var j = 0; j < args[1]; j++) {
        a.push(__Event__('', Sequence(t2 + i + ']', i++, flags, rvsl, args)))
    }
    a.push(__Event__('', Sequence(t2 + i + ']:crisis', i++, flags, rvsl, args)))
    a.push(__Event__('', Reversal(t1 + ':climax / realization', i, flags, null, args)))
    a.push(__Event__('', Paragraph(t1 + ':denouement', i, flags)))
    return a
}
function to_number() {
    var s = arguments[0]
    for (var i = s.length; i > 0; i--) {
        s[i-1] *= 1
    }
    return s
}
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
function translatorTool() {
    var args = srcCode.value.match(/\d+/gim).toNUMBER()
    var flags = srcCode.value.match(/[+-]/gim)
    srcTranslated.value = preview_tool(args, flags[0]) + __Event__('Story', Story(args, flags[0]))
}
