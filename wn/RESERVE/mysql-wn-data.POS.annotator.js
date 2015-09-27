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

function find_word(){
    var word = arguments[0]
    var result = ''
    var MAX = 0
    for(var j in mysql_wn_data_synsets_attributes_II){
        var do_break_j = false
        var counter = 0
        for(var k in mysql_wn_data_synsets_attributes_II[j]){                
            var s = k.split(/\./gmi)
            if(s[0] == word){
                counter++
                //result = j
                //do_break_j = true
                //break
            }
        }
        //if(do_break_j){
        if(counter>MAX){
            MAX = counter
            result = j
            //break
        }
    }
    return result
}

function translatorTool() {
    /*
    I [sail] across the [water]
    The [water] was [cold] to the [touch]
    This [surprise] me: [water] is usually [cool] not [cold] 
    I [dread] the first time I make it to the [adirondack] I will [die] of the [frostbite]
    */
    var Sentence = {
        'sail':'noun',
        'water':'noun',
        'cold':'adj',
        'touch':'adj',
        'surprise':'adv',
        'water':'noun',
        'cool':'adj',
        'cold':'adj',
        'dread':'verb',
        'appalachia':'noun',
        'die':'verb',
        'frostbite':'noun',
        }
    var result = {}
    var MAX = 0
    var N = Sentence.length
    for(var i in mysql_wn_data_synsets_attributes_II){
        for(var j in mysql_wn_data_synsets_attributes_II[i]){
        
        }
    }
    srcTranslated.value = JSON.stringify(result).replace(/[\{\},]/gmi,'\n').replace(/":1/gmi,"\":1,")
}
// translatorTool ()
