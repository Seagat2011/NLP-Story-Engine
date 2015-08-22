// encyclopedia interface M1 to state machine library M2 tool
function clear_window() {
    srcTranslated.value = ''
}
function loader() {
    // ['sequence','reversals','scene','beat','paragraph','sentence','clause','words','connotation', 'story'] 
    srcCode.value = //'supporting_sequences=2,reversal=2,paragraphs=2,sentences=13,realization=(+),story_state_machine=[]'
}
// NeuralNet Library
Math.NN = {
}
// select state_machine object with highest ratio of correctness
// eg [flags,[s1],..,[sn],]
Math.NN.select_statemachine = function () {
    var obj = arguments
    var flags = arguments[0]
    obj.shift()
    // remove self 
    var N = obj.length
    obj.map(function (v) {
        var value = 0
        for (var i = 0; i < N; i++) {
            if (v.flags[i] == flags[i]) {
                value++
            }
        }
        v.score = Math.floor(value / N)
        return v
    }
    )
    var result = obj[0]
    for (var i = 1; i < N; i++) {
        result = Math.NN.max(result, obj[i])
    }
    return result
}
// select object with highest score
Math.NN.max = function () {
    var N = arguments.length
    var max = arguments[0].score
    var winner = 0
    for (var i = 1; i < N; i++) {
        if (arguments[i].score > max) {
            max = arguments[i].score
            winner = i
        }
    }
    return arguments[winner]
}
function MD5() {
    srcTranslated.value = Math.md5(srcCode.value)
}
var g_FLAGS = function(){
}
g_FLAGS.prototype = new Array()
// flags
for (var i = 0; i < 100; i++) {
    g_FLAGS[i] = 0
}
var g_STATE_MACHINE_LIBRARY = [
]
for (var i = 0; i < 100; i++) {
    g_STATE_MACHINE_LIBRARY[i] = new g_FLAGS()
}
var g_STATE_MACHINE_DICTIONARY = {
}
var F = function(){
}
F.prototype = new Object()
for (var i = 0; i < 100; i++) {
    var j = g_STATE_MACHINE_DICTIONARY[i].join('')
    if(g_STATE_MACHINE_DICTIONARY[j] == null){
     g_STATE_MACHINE_DICTIONARY[j] = new F('verb','flag transition state')
    }
}
function translatorTool() {
    srcTranslated.value = JSON.stringify(g_STATE_MACHINE_DICTIONARY)
}