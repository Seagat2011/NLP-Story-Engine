
var file00 = "mysql-wn-data.synsets_II.sql.js"
var file01 = "mysql-wn-data.synsets.inverse_II.sql.js"
var file02 = "mysql-wn-data.sense.inverse.sql.js"
var file03 = "mysql-wn-data.examples.sql.js"

var file04 = "mysql-wn-data.noun.act.js"
var file05 = "mysql-wn-data.noun.animal.js"
var file06 = "mysql-wn-data.noun.artifact.js"
var file07 = "mysql-wn-data.noun.attribute.js"
var file08 = "mysql-wn-data.noun.body.js"
var file09 = "mysql-wn-data.noun.cognition.js"
var file10 = "mysql-wn-data.noun.communication.js"
var file11 = "mysql-wn-data.noun.event.js"
var file12 = "mysql-wn-data.noun.feeling.js"
var file13 = "mysql-wn-data.noun.food.js"
var file14 = "mysql-wn-data.noun.group.js"
var file15 = "mysql-wn-data.noun.js"
var file16 = "mysql-wn-data.noun.location.js"
var file17 = "mysql-wn-data.noun.motive.js"
var file18 = "mysql-wn-data.noun.object.js"
var file19 = "mysql-wn-data.noun.person.js"
var file20 = "mysql-wn-data.noun.phenomenon.js"
var file21 = "mysql-wn-data.noun.plant.js"
var file22 = "mysql-wn-data.noun.possession.js"
var file23 = "mysql-wn-data.noun.process.js"
var file24 = "mysql-wn-data.noun.quantity.js"
var file25 = "mysql-wn-data.noun.relation.js"
var file26 = "mysql-wn-data.noun.shape.js"
var file27 = "mysql-wn-data.noun.substance.js"
var file28 = "mysql-wn-data.noun.time.js"
var file29 = "mysql-wn-data.noun.Tops.js"

var file30 = "mysql-wn-data.verb.body.js"
var file31 = "mysql-wn-data.verb.change.js"
var file32 = "mysql-wn-data.verb.cognition.js"
var file33 = "mysql-wn-data.verb.communication.js"
var file34 = "mysql-wn-data.verb.competition.js"
var file35 = "mysql-wn-data.verb.consumption.js"
var file36 = "mysql-wn-data.verb.contact.js"
var file37 = "mysql-wn-data.verb.emotion.js"
var file38 = "mysql-wn-data.verb.js"
var file39 = "mysql-wn-data.verb.motion.js"
var file40 = "mysql-wn-data.verb.perception.js"
var file41 = "mysql-wn-data.verb.possession.js"
var file42 = "mysql-wn-data.verbs.js"
var file43 = "mysql-wn-data.verb.social.js"
var file44 = "mysql-wn-data.verb.stative.js"
var file45 = "mysql-wn-data.verb.weather.js"
var file46 = "mysql-wn-data.verb.creation.js"

mysql_wn_data_synsets_II = new Worker (file00)
mysql_wn_data_synsets_inverse_II = new Worker (file01)
mysql_wn_data_sense_inverse = new Worker (file02)
mysql_wn_data_examples = new Worker (file03)

mysql_wn_data_noun_act = new Worker (file04)
mysql_wn_data_noun_animal = new Worker (file05)
mysql_wn_data_noun_artifact = new Worker (file06)
mysql_wn_data_noun_attribute = new Worker (file07)
mysql_wn_data_noun_body = new Worker (file08)
mysql_wn_data_noun_cognition = new Worker (file09)
mysql_wn_data_noun_communication = new Worker (file10)
mysql_wn_data_noun_event = new Worker (file11)
mysql_wn_data_noun_feeling = new Worker (file12)
mysql_wn_data_noun_food = new Worker (file13)
mysql_wn_data_noun_group = new Worker (file14)
mysql_wn_data_noun = new Worker (file15)
mysql_wn_data_noun_location = new Worker (file16)
mysql_wn_data_noun_motive = new Worker (file17)
mysql_wn_data_noun_object = new Worker (file18)
mysql_wn_data_noun_person = new Worker (file19)
mysql_wn_data_noun_phenomenon = new Worker (file20)
mysql_wn_data_noun_plant = new Worker (file21)
mysql_wn_data_noun_possession = new Worker (file22)
mysql_wn_data_noun_process = new Worker (file23)
mysql_wn_data_noun_quantity = new Worker (file24)
mysql_wn_data_noun_relation = new Worker (file25)
mysql_wn_data_noun_shape = new Worker (file26)
mysql_wn_data_noun_substance = new Worker (file27)
mysql_wn_data_noun_time = new Worker (file28)
mysql_wn_data_noun_Tops = new Worker (file29)

mysql_wn_data_verb_body = new Worker (file30)
mysql_wn_data_verb_change = new Worker (file31)
mysql_wn_data_verb_cognition = new Worker (file32)
mysql_wn_data_verb_communication = new Worker (file33)
mysql_wn_data_verb_competition = new Worker (file34)
mysql_wn_data_verb_consumption = new Worker (file35)
mysql_wn_data_verb_contact = new Worker (file36)
mysql_wn_data_verb_emotion = new Worker (file37)
mysql_wn_data_verb = new Worker (file38)
mysql_wn_data_verb_motion = new Worker (file39)
mysql_wn_data_verb_perception = new Worker (file40)
mysql_wn_data_verb_possession = new Worker (file41)
mysql_wn_data_verbs = new Worker (file42)
mysql_wn_data_verb_social = new Worker (file43)
mysql_wn_data_verb_stative = new Worker (file44)
mysql_wn_data_verb_weather = new Worker (file45)
mysql_wn_data_verb_creation = new Worker (file46)


mysql_wn_data_synsets_II.name = 'synsets_II'
mysql_wn_data_synsets_inverse_II.name = 'synsets_II_inv'
mysql_wn_data_sense_inverse.name = 'sense_inv'
mysql_wn_data_examples.name = 'examples'

mysql_wn_data_noun_act.name = 'act'
mysql_wn_data_noun_animal.name = 'animal'
mysql_wn_data_noun_artifact.name = 'artifact'
mysql_wn_data_noun_attribute.name = 'attribute'
mysql_wn_data_noun_body.name = 'nbody'
mysql_wn_data_noun_cognition.name = 'cog'
mysql_wn_data_noun_communication.name = 'comm'
mysql_wn_data_noun_event.name = 'event'
mysql_wn_data_noun_feeling.name = 'feeling'
mysql_wn_data_noun_food.name = 'food'
mysql_wn_data_noun_group.name = 'group'
mysql_wn_data_noun.name = 'noun' 
mysql_wn_data_noun_location.name = 'loc'
mysql_wn_data_noun_motive.name = 'motiv'
mysql_wn_data_noun_object.name = 'obj'
mysql_wn_data_noun_person.name = 'person'
mysql_wn_data_noun_phenomenon.name = 'phenom'
mysql_wn_data_noun_plant.name = 'plant'
mysql_wn_data_noun_possession.name = 'poss'
mysql_wn_data_noun_process.name = 'proc'
mysql_wn_data_noun_quantity.name = 'quant'
mysql_wn_data_noun_relation.name = 'rel'
mysql_wn_data_noun_shape.name = 'shape'
mysql_wn_data_noun_substance.name = 'subst'
mysql_wn_data_noun_time.name = 'time'
mysql_wn_data_noun_Tops.name = 'Tops'

mysql_wn_data_verb_body.name = 'vbody'
mysql_wn_data_verb_change.name = 'change'
mysql_wn_data_verb_cognition.name = 'vcog'
mysql_wn_data_verb_communication.name = 'vcom'
mysql_wn_data_verb_competition.name = 'vcomp'
mysql_wn_data_verb_consumption.name = 'consump'
mysql_wn_data_verb_contact.name = 'vcontact'
mysql_wn_data_verb_emotion.name = 'emot'
mysql_wn_data_verb.name = 'verb'
mysql_wn_data_verb_motion.name = 'vmotion'
mysql_wn_data_verb_perception.name = 'percep'
mysql_wn_data_verb_possession.name = 'vposs'
mysql_wn_data_verbs.name = 'verbs'
mysql_wn_data_verb_social.name = 'soc'
mysql_wn_data_verb_stative.name = 'stativ'
mysql_wn_data_verb_weather.name = 'weather'
mysql_wn_data_verb_creation.name = 'creation'

function __import(){
    var obj = function(args){
        srcTranslated.value = 'Processing..'
        this.postMessage(args)
        this.onmessage = function(e){
            if(e.data.origin == this.name){
                srcTranslated.value = e.data.value
            }
            this.terminate()
        }        
    }
    return obj
}

function __import2(){
    var obj = function(args){
        if(!srcTranslated.value || (srcTranslated.value === 'Processing..') || srcTranslated.value == ''){
            srcTranslated.value = 'Searching..'
        }
        this.postMessage(args)
        this.onmessage = function(e){
            if(e.data.origin == this.name){
                if(!srcTranslated.value || (srcTranslated.value === 'Searching..') || srcTranslated.value == ''){
                    srcTranslated.value = e.data.value
                } else {
                    srcTranslated.value += e.data.value                
                }
            }
        } 
        this.onerror = function(e){
            console.log(e)
        }   
    }
    return obj
}

function loader() {
    mysql_wn_data_synsets_II.import         = __import()
    mysql_wn_data_synsets_inverse_II.import = __import()
    mysql_wn_data_sense_inverse.import      = __import()
    mysql_wn_data_examples.import           = __import()

    mysql_wn_data_noun_act.import           = __import2()
    mysql_wn_data_noun_animal.import        = __import2()
    mysql_wn_data_noun_artifact.import      = __import2()
    mysql_wn_data_noun_attribute.import     = __import2()
    mysql_wn_data_noun_body.import          = __import2()
    mysql_wn_data_noun_cognition.import     = __import2()
    mysql_wn_data_noun_communication.import = __import2()
    mysql_wn_data_noun_event.import         = __import2()
    mysql_wn_data_noun_feeling.import       = __import2()
    mysql_wn_data_noun_food.import          = __import2()
    mysql_wn_data_noun_group.import         = __import2()
    mysql_wn_data_noun.import               = __import2()
    mysql_wn_data_noun_location.import      = __import2()
    mysql_wn_data_noun_motive.import        = __import2()
    mysql_wn_data_noun_object.import        = __import2()
    mysql_wn_data_noun_person.import        = __import2() //zweig
    mysql_wn_data_noun_phenomenon.import    = __import2() //parallax
    mysql_wn_data_noun_plant.import         = __import2()
    mysql_wn_data_noun_possession.import    = __import2()
    mysql_wn_data_noun_process.import       = __import2()
    mysql_wn_data_noun_quantity.import      = __import2()
    mysql_wn_data_noun_relation.import      = __import2()
    mysql_wn_data_noun_shape.import         = __import2()
    mysql_wn_data_noun_substance.import     = __import2()
    mysql_wn_data_noun_time.import          = __import2()
    mysql_wn_data_noun_Tops.import          = __import2()

    mysql_wn_data_verb_body.import          = __import2()
    mysql_wn_data_verb_change.import        = __import2()
    mysql_wn_data_verb_cognition.import     = __import2()
    mysql_wn_data_verb_communication.import = __import2()
    mysql_wn_data_verb_competition.import   = __import2()
    mysql_wn_data_verb_consumption.import   = __import2()
    mysql_wn_data_verb_contact.import       = __import2()
    mysql_wn_data_verb_emotion.import       = __import2()
    mysql_wn_data_verb.import               = __import2()
    mysql_wn_data_verb_motion.import        = __import2()
    mysql_wn_data_verb_perception.import    = __import2()
    mysql_wn_data_verb_possession.import    = __import2()
    mysql_wn_data_verbs.import              = __import2()
    mysql_wn_data_verb_social.import        = __import2()
    mysql_wn_data_verb_stative.import       = __import2()
    mysql_wn_data_verb_weather.import       = __import2()
    mysql_wn_data_verb_creation.import      = __import2()
    
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

var attr = { get_word:'', get_length:0, get_entry:0, get_index:[] }

var intf = {
    'default':function(){
        return 'functionality not implemented'
        },
    0:function(){ // lookup  
        mysql_wn_data_synsets_II.import(arguments[0])
        }, // lookup
    1:function(){ // ilookup
        mysql_wn_data_synsets_inverse_II.import(arguments[0])
        }, // ilookup
    15:function(){ // synonyms
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
            console.log(e)
        }
        return s.join('\n')
        }, // synonyms   
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
           console.log(e)
        } // try/catch
        return result.join('\n') 
        }, // example sentence  
    31:function(){ // available attribute flags (case insensitive)
              
        mysql_wn_data_noun_act.import           (arguments[0])
        mysql_wn_data_noun_animal.import        (arguments[0])    
        mysql_wn_data_noun_artifact.import      (arguments[0]) 
        mysql_wn_data_noun_attribute.import     (arguments[0]) 
        mysql_wn_data_noun_body.import          (arguments[0]) 
        mysql_wn_data_noun_cognition.import     (arguments[0])
        mysql_wn_data_noun_communication.import (arguments[0])
        mysql_wn_data_noun_event.import         (arguments[0])
        mysql_wn_data_noun_feeling.import       (arguments[0])
        mysql_wn_data_noun_food.import          (arguments[0])
        mysql_wn_data_noun_group.import         (arguments[0])
        mysql_wn_data_noun.import               (arguments[0]) 
        mysql_wn_data_noun_location.import      (arguments[0])
        mysql_wn_data_noun_motive.import        (arguments[0])
        mysql_wn_data_noun_object.import        (arguments[0])        
        mysql_wn_data_noun_person.import        (arguments[0])
        
        mysql_wn_data_noun_phenomenon.import    (arguments[0])              
        mysql_wn_data_noun_plant.import         (arguments[0])
        mysql_wn_data_noun_possession.import    (arguments[0])
        mysql_wn_data_noun_process.import       (arguments[0])
        mysql_wn_data_noun_quantity.import      (arguments[0])
        mysql_wn_data_noun_relation.import      (arguments[0])
        mysql_wn_data_noun_shape.import         (arguments[0])
        mysql_wn_data_noun_substance.import     (arguments[0])
        mysql_wn_data_noun_time.import          (arguments[0])
        mysql_wn_data_noun_Tops.import          (arguments[0])

        mysql_wn_data_verb_body.import          (arguments[0])
        mysql_wn_data_verb_change.import        (arguments[0])
        mysql_wn_data_verb_cognition.import     (arguments[0])
        mysql_wn_data_verb_communication.import (arguments[0])
        mysql_wn_data_verb_competition.import   (arguments[0])
        mysql_wn_data_verb_consumption.import   (arguments[0])
        mysql_wn_data_verb_contact.import       (arguments[0])
        mysql_wn_data_verb_emotion.import       (arguments[0])
        mysql_wn_data_verb.import               (arguments[0])
        mysql_wn_data_verb_motion.import        (arguments[0])
        mysql_wn_data_verb_perception.import    (arguments[0])
        mysql_wn_data_verb_possession.import    (arguments[0])
        mysql_wn_data_verbs.import              (arguments[0])
        mysql_wn_data_verb_social.import        (arguments[0])
        mysql_wn_data_verb_stative.import       (arguments[0])
        mysql_wn_data_verb_weather.import       (arguments[0])
        mysql_wn_data_verb_creation.import      (arguments[0])
        },    
}

function g_switch(){
    try{
        var result = arguments[0][arguments[1]]
    } catch (e) {
        var result = arguments[0]['default']    
    }
    return result
}

function translatorTool() {
    g_switch(intf, selBox.selectedIndex)(srcCode.value)
}
