function loader() {
    srcTranslated.value = ''
    return
}
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

function get_num(){
    return ++arguments[0]
}

function get_space(){
    var s = '. '
    if(arguments[0] < 9){
        s += ' '
    }
    return s
}

var intf = {
    'default':function(){
        return 'functionality not implemented'
        },
    0:function(){ // lookup
        var result = []
        try{
            var s = arguments[0]
            try{
                var N = mysql_wn_data_synsets_II[s].length
            } catch(e){
                result.push(s+' is undefined')
                throw e
            }
            var PART_OF_SPEECH = 1
            var DEFS = 3
            for(var i=0; i<N; i++){
                try{
                    result.push(get_num(i)+get_space(i)+mysql_wn_data_synsets_II[s][i][PART_OF_SPEECH]+'. '+mysql_wn_data_synsets_II[s][i][DEFS])
                } catch(e){
                    result.push(get_num(i)+get_space(i)+'*** unable to generate definition ***')
                    // throw e
                }
            } // loopi
        } catch(e) {
        } // try/catch
        return result.join('\n')        
        }, // lookup
    1:function(){ // ilookup
        var words = arguments[0].replace(/(,)\s+([a-zA-Z0-9])/gmi,'$1$2').split(',')
        var N = words.length
        var temp = {}
        var result = {}
        var ret = ''
        var MAX = 25
        var count = 0
        for(var i=0; i<N; i++){
            var s = words[i]
            for(var word in mysql_wn_data_synsets_inverse_II[s]){
                if(temp[word]==null){
                    temp[word] = 1
                } else {
                    temp[word]++
                }
            }
        }
        for(var word in temp){
            var j = temp[word]
            if(result[j]==null){
                result[j] = []
            }
            result[j].push(word)
        }
        for(var i=N; i>0; i--){
            if(result[i]){
                if(ret){
                    ret += '\n'
                }
                count += result[i].length
                ret += result[i].join('\n')
                if(count>MAX){
                    break
                }
            }
        }
        return ret || '*** unable to generate inverse field ***'
        }, // ilookup
    15:function(){ // synonym
        var s = []
        var word = arguments[0]
        var INDEX = 0
        var INDEX3 = 7
        try{
            var M = mysql_wn_data_synsets_II[word].length
            for(var j=0; j<M; j++){   
                var INDEX2 = mysql_wn_data_synsets_II[word][j][INDEX]
                var N = mysql_wn_data_sense_inverse[INDEX2].length
                for(var i=1; i<N; i++){
                    s.push(mysql_wn_data_sense_inverse[INDEX2][i][INDEX3])
                }
            }
        } catch(e) {
        }
        return s.join('\n')
        }, // synonym   
    30:function(){ // example sentence
        var N = mysql_wn_data_examples.length
        var result = []
        try{
            var s = arguments[0]
            try{
                var N = mysql_wn_data_synsets_II[s].length
            } catch(e){
                result.push(s+' is undefined')
                throw e
            }
            var INDEX = 0
            var PART_OF_SPEECH = 1
            var DEFS = 3
            for(var i=0; i<N; i++){
                try{
                    var key = mysql_wn_data_synsets_II[s][i][INDEX]                    
                    var M = mysql_wn_data_examples[key].length
                    for(var j=0; j<M; j++){
                        result.push(get_num(i)+get_space(i)+mysql_wn_data_synsets_II[s][i][PART_OF_SPEECH]+'. '+mysql_wn_data_examples[key][j][(DEFS-1)])
                    }
                } catch(e){
                    result.push(get_num(i)+get_space(i)+'*** unable to generate example ***')
                    // console.log(e)
                }
            } // loopi
        } catch(e) {
           // console.log(e)
        } // try/catch
        return result.join('\n') 
        }, // example sentence  
    31:function(){ // available attribute flags
        var s = arguments[0].replace(/(,)\s+([a-zA-Z0-9])/gmi,'$1$2').split(',')
        var result = []
        var v = s.length
        for(var j=0; j<v; j++){
            var b = s[j]
            try{
                var N
                var obj
                if(typeof(mysql_wn_data_noun_Tops[b])=='object'){
                obj = mysql_wn_data_noun_Tops[b][0]
                N = mysql_wn_data_noun_Tops[b][0].length
                } else if(typeof(mysql_wn_data_noun_food[b])=='object'){
                obj = mysql_wn_data_noun_food[b][0]
                N = mysql_wn_data_noun_food[b][0].length
                } else if(typeof(mysql_wn_data_verb_contact[b])=='object'){
                obj = mysql_wn_data_verb_contact[b][0]
                N = mysql_wn_data_verb_contact[b][0].length
                } else if(typeof(mysql_wn_data_verb_competition[b])=='object'){
                obj = mysql_wn_data_verb_competition[b][0]
                N = mysql_wn_data_verb_competition[b][0].length
                } else if(typeof(mysql_wn_data_verb_change[b])=='object'){
                obj = mysql_wn_data_verb_change[b][0]
                N = mysql_wn_data_verb_change[b][0].length
                } else if(typeof(mysql_wn_data_verb_consumption[b])=='object'){
                obj = mysql_wn_data_verb_consumption[b][0]
                N = mysql_wn_data_verb_consumption[b][0].length
                } else if(typeof(mysql_wn_data_noun_communication[b])=='object'){
                obj = mysql_wn_data_noun_communication[b][0]
                N = mysql_wn_data_noun_communication[b][0].length
                } else if(typeof(mysql_wn_data_noun_animal[b])=='object'){
                obj = mysql_wn_data_noun_animal[b][0]
                N = mysql_wn_data_noun_animal[b][0].length
                } else if(typeof(mysql_wn_data_verb_stative[b])=='object'){
                obj = mysql_wn_data_verb_stative[b][0]
                N = mysql_wn_data_verb_stative[b][0].length
                } else if(typeof(mysql_wn_data_verb_possession[b])=='object'){
                obj = mysql_wn_data_verb_possession[b][0]
                N = mysql_wn_data_verb_possession[b][0].length
                } else if(typeof(mysql_wn_data_noun_act[b])=='object'){
                obj = mysql_wn_data_noun_act[b][0]
                N = mysql_wn_data_noun_act[b][0].length
                } else if(typeof(mysql_wn_data_verb_motion[b])=='object'){
                obj = mysql_wn_data_verb_motion[b][0]
                N = mysql_wn_data_verb_motion[b][0].length
                } else if(typeof(mysql_wn_data_noun_time[b])=='object'){
                obj = mysql_wn_data_noun_time[b][0]
                N = mysql_wn_data_noun_time[b][0].length
                } else if(typeof(mysql_wn_data_noun_artifact[b])=='object'){
                obj = mysql_wn_data_noun_artifact[b][0]
                N = mysql_wn_data_noun_artifact[b][0].length
                } else if(typeof(mysql_wn_data_noun_substance[b])=='object'){
                obj = mysql_wn_data_noun_substance[b][0]
                N = mysql_wn_data_noun_substance[b][0].length
                } else if(typeof(mysql_wn_data_verb_communication[b])=='object'){
                obj = mysql_wn_data_verb_communication[b][0]
                N = mysql_wn_data_verb_communication[b][0].length
                } else if(typeof(mysql_wn_data_noun_plant[b])=='object'){
                obj = mysql_wn_data_noun_plant[b][0]
                N = mysql_wn_data_noun_plant[b][0].length
                } else if(typeof(mysql_wn_data_noun_group[b])=='object'){
                obj = mysql_wn_data_noun_group[b][0]
                N = mysql_wn_data_noun_group[b][0].length
                } else if(typeof(mysql_wn_data_verb_perception[b])=='object'){
                obj = mysql_wn_data_verb_perception[b][0]
                N = mysql_wn_data_verb_perception[b][0].length
                } else if(typeof(mysql_wn_data_noun_quantity[b])=='object'){
                obj = mysql_wn_data_noun_quantity[b][0]
                N = mysql_wn_data_noun_quantity[b][0].length
                } else if(typeof(mysql_wn_data_noun_attribute[b])=='object'){
                obj = mysql_wn_data_noun_attribute[b][0]
                N = mysql_wn_data_noun_attribute[b][0].length
                } else if(typeof(mysql_wn_data_noun_cognition[b])=='object'){
                obj = mysql_wn_data_noun_cognition[b][0]
                N = mysql_wn_data_noun_cognition[b][0].length
                } else if(typeof(mysql_wn_data_verb_body[b])=='object'){
                obj = mysql_wn_data_verb_body[b][0]
                N = mysql_wn_data_verb_body[b][0].length
                } else if(typeof(mysql_wn_data_noun_phenomenon[b])=='object'){
                obj = mysql_wn_data_noun_phenomenon[b][0]
                N = mysql_wn_data_noun_phenomenon[b][0].length
                } else if(typeof(mysql_wn_data_verb_emotion[b])=='object'){
                obj = mysql_wn_data_verb_emotion[b][0]
                N = mysql_wn_data_verb_emotion[b][0].length
                } else if(typeof(mysql_wn_data_noun_object[b])=='object'){
                obj = mysql_wn_data_noun_object[b][0]
                N = mysql_wn_data_noun_object[b][0].length
                } else if(typeof(mysql_wn_data_noun_person[b])=='object'){
                obj = mysql_wn_data_noun_person[b][0]
                N = mysql_wn_data_noun_person[b][0].length
                } else if(typeof(mysql_wn_data_verb_social[b])=='object'){
                obj = mysql_wn_data_verb_social[b][0]
                N = mysql_wn_data_verb_social[b][0].length
                } else if(typeof(mysql_wn_data_verb_creation[b])=='object'){
                obj = mysql_wn_data_verb_creation[b][0]
                N = mysql_wn_data_verb_creation[b][0].length
                } else if(typeof(mysql_wn_data_noun_location[b])=='object'){
                obj = mysql_wn_data_noun_location[b][0]
                N = mysql_wn_data_noun_location[b][0].length
                } else if(typeof(mysql_wn_data_noun_event[b])=='object'){
                obj = mysql_wn_data_noun_event[b][0]
                N = mysql_wn_data_noun_event[b][0].length
                } else if(typeof(mysql_wn_data_noun_possession[b])=='object'){
                obj = mysql_wn_data_noun_possession[b][0]
                N = mysql_wn_data_noun_possession[b][0].length
                } else if(typeof(mysql_wn_data_noun_shape[b])=='object'){
                obj = mysql_wn_data_noun_shape[b][0]
                N = mysql_wn_data_noun_shape[b][0].length
                } else if(typeof(mysql_wn_data_noun_state[b])=='object'){
                obj = mysql_wn_data_noun_state[b][0]
                N = mysql_wn_data_noun_state[b][0].length
                } else if(typeof(mysql_wn_data_noun_body[b])=='object'){
                obj = mysql_wn_data_noun_body[b][0]
                N = mysql_wn_data_noun_body[b][0].length
                } else if(typeof(mysql_wn_data_noun_process[b])=='object'){
                obj = mysql_wn_data_noun_process[b][0]
                N = mysql_wn_data_noun_process[b][0].length
                } else if(typeof(mysql_wn_data_noun_feeling[b])=='object'){
                obj = mysql_wn_data_noun_feeling[b][0]
                N = mysql_wn_data_noun_feeling[b][0].length
                } else if(typeof(mysql_wn_data_verb_weather[b])=='object'){
                obj = mysql_wn_data_verb_weather[b][0]
                N = mysql_wn_data_verb_weather[b][0].length
                } else if(typeof(mysql_wn_data_verb_cognition[b])=='object'){
                obj = mysql_wn_data_verb_cognition[b][0]
                N = mysql_wn_data_verb_cognition[b][0].length
                } else if(typeof(mysql_wn_data_noun_relation[b])=='object'){
                obj = mysql_wn_data_noun_relation[b][0]
                N = mysql_wn_data_noun_relation[b][0].length
                } else if(typeof(mysql_wn_data_noun_motive[b])=='object'){  
                obj = mysql_wn_data_noun_motive[b][0] 
                N = mysql_wn_data_noun_motive[b][0].length
                }
				result.push('')
				result.push(b)
                for(var i=0; i<N; i++){
                    result.push(get_num(i)+get_space(i)+ obj[i])
                }
            } catch (e){
                console.log(e)
                result.push('*** unable to generate flags ***')
            }
        }
        result.push('')
        return result.join('\n')
        },    
}

function g_switch(){
    try{
        var result = arguments[0][arguments[1]]
    } catch (e) {
        // console.log(e)
        var result = arguments[0]['default']    
    }
    return result
}

function translatorTool() {
    srcTranslated.value = g_switch(intf, selBox.selectedIndex)(srcCode.value)
}