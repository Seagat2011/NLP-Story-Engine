// state machine generator tool M2 to state machine chooser tool M3
/* States of logical analysis:

U. Toto-total Affirmative - All X is All Y - ( X is Y 
A. Toto-partial Affirmative - All X is some Y -  ( X is ( Y n X
Y. Parti-total Affirmative - some X is All Y - ( (X n Y) is Y
I. Parti-partial Affirmative - some X is some Y - ( X n Y ) is ( Y n X 
E. Toto-total Negative - No X is All Y - ( Y + ( Y n X ) ) is Y
Nu. Toto-partial Negative - No X is some Y - ( Y + ( Y n X ) ) is ( Y n X 
Ohm. Parti-total Negative -  Some X is not Y - ( X n Y ) is ( X + ( X n Y
Rad. Parti-partial Negative - Some X is not some Y - ( X n Y ) is ( X + ( X n Y ) - ( Y n X ) 

*/

function clear_window() {
    srcTranslated.value = ''
} 

var g_playerID = 0 // current number of character entities

var g_universal_time = 0.000 // [hours%24].[seconds%100][milliseconds%10] - time progresses from 0.000 to 23.999 hours then resets. Used to demarcate the passage of time.

var g_distance = ['local_area', 'town', 'county', 'region', 'nation', 'continent', 'world', 'universe', 'dimension'] // measure of distance 10 local areas = 1 town, 10 towns = 1 county, .. etc.

function translatorTool() {
    // these stories are the recorded state-machine logs of interactions between character (profiles)
    function Character() {
        function reset_status() {
            this.dirty_status = false
        }
        function set_status() {
            this.dirty_status = true
        }
        function get_status() {
            return this.dirty_status
        }
        function get_current() {
            return this.current
        }
        function set_current() {
            this.dirty_status = true
            this.current = arguments[0]
        }
        function get_available() {
            return this.available
        }
        function set_available() {
            this.dirty_status = true
            this.available = arguments[0]
        }
        function get_goal() {
            return this.goal
        }
        function set_goal() {
            this.dirty_status = true
            this.goal = arguments[0]
        }
        function skill() {
            function is_disabled() {
                return this.disabled
            }
            function disable_skill() {
                this.dirty_status = true
                this.disabled = true
            }
            function enable_skill() {
                this.dirty_status = true
                this.disabled = false
            }
            function get_fitness() {
                return this.fitness
            }
            function set_fitness() {
                this.dirty_status = true
                this.fitness = arguments[0]
            }
            return {is_disabled: new is_disabled(),enable_skill: new enable_skill(),disable_skill: new disable_skill(),disabled: false,
                get_status: new get_status(),set_status: new set_status(),reset_status: new reset_status(),dirty_status: false,
                get_current: new get_current(),set_current: new set_current(),current: (arguments[0] > -2) ? arguments[0] : 0,
                get_available: new get_available(),set_available: new set_available(),available: (arguments[1] > -2) ? arguments[1] : 9,
                get_goal: new get_goal(),set_goal: new set_goal(),goal: (arguments[2] > -2) ? arguments[2] : 0,
                get_fitness: new get_fitness(),set_fitness: new set_fitness(),fitness: 0,
            }
        }
        function view() {
            function perception() {
                return new skill(arguments[0], arguments[1], arguments[2])
            }
            function reality() {
                return new skill(arguments[0], arguments[1], arguments[2])
            }
            return {perception: new perception(arguments[0], arguments[1], arguments[2]),
                reality: new reality(arguments[0], arguments[1], arguments[2])
            }
        }
        function geo_location() {
            function get_continent() {
                return this.continent
            }
            function set_continent() {
                this.dirty_status = true
                this.continent = arguments[0]
            }
            function get_nation() {
                return this.nation
            }
            function set_nation() {
                this.dirty_status = true
                this.nation = arguments[0]
            }
            function get_province() {
                return this.province
            }
            function set_province() {
                this.dirty_status = true
                this.province = arguments[0]
            }
            function get_county() {
                return this.county
            }
            function set_county() {
                this.dirty_status = true
                this.county = arguments[0]
            }
            function get_town() {
                return this.town
            }
            function set_town() {
                this.dirty_status = true
                this.town = arguments[0]
            }
            function get_local_area() {
                return this.local_area
            }
            function set_local_area() {
                this.dirty_status = true
                this.local_area = arguments[0]
            }
            return {get_status: new get_status(),set_status: new set_status(),reset_status: new reset_status(),dirty_status: false,
                get_continent: new get_continent(),set_continent: new set_continent(),continent: 0,
                get_nation: new get_nation(),set_nation: new set_nation(),nation: 0,
                get_province: new get_province(),set_province: new set_province(),province: 0,
                get_county: new get_county(),set_county: new set_county(),county: 0,
                get_town: new get_town(),set_town: new set_town(),town: 0,
                get_local_area: new get_local_area(),set_local_area: new set_local_area(),local_area: 0
            }
        }
        function geo_location_goal() { // ['mountains of zanzibar', 'sands of golgotha', 'valley of swat', 'the lake of zinj', 'the lake of torr', 'the hills of azur', 'the dark forest', 'the biden river', 'the breadwoods'],
            return {get_status: new get_status(),set_status: new set_status(),reset_status: new reset_status(),dirty_status: false,
                get_current: new get_current(),set_current: new set_current(),current: new geo_location(),
                get_goal: new get_goal(),set_goal: new set_goal(),goal: new geo_location()
            }
        }
        function abilities() {
            function add_ability() {
                this[arguments[0]] = new skill(arguments[0], arguments[1], arguments[2])
            }
            function disable_ability() {
                this[arguments[0]].disable_skill()
            }
            function enable_ability() {
                this[arguments[0]].enable_skill()
            }
            return {add_ability: new add_ability(),row: new skill(),climb: new skill(),fight: new skill(),negotiate: new skill(),run: new skill(),leap: new skill(),duck: new skill(),poison_susceptibility: new skill(),}
        }
        function others() {
        
        }
        others.prototype = new Object()        
        function STATUS_WORD() {
            return {
            	with_environment: new view(), // ['plants', 'life', 'surface', 'atmosphere', 'sky']
                with_plants: new view(),
                with_surface: new view(),
                with_atmosphere: new view(),
                with_sky: new view(),
                with_others: new others(),
                with_location: new geo_location_goal(), // update clock status also, when needed
                with_weather: new skill(),
                with_season: new skill(),
                with_energy_level: new skill(9, 9, 9), // 0 -> 9 // update clock status also, when needed
                with_abilities: new abilities(),
                with_foreshadowing: new skill(),
                current_sense: new skill(0, 9, 0), // ['active','taste','smell','hear','touch','see','time'],
                current_posture: new skill(0), // ['ready','kneeling','standing','sleeping','watching','sneaking']
                current_awareness: new skill(0), // ['seek_goal','eat','sleep','breathe','threat'] // energy-related
                current_emotional_state: new view(0),
                current_personality: new skill(0, 9, 0), // ['negotiate','run','fight']
                current_characterization: new skill(0, 9, 0),
                current_perceptiveness: new skill(0, 9, 0),
            }
        }
        this.name = arguments[0]
        this.get_name = function() {
            return this.name
        }
        this.index = g_playerID++
        this.get_player_ID = function() {
            return this.index
        }
        this.other_characters = new others()
        this.get_other_characters = function() {
            return this.other_characters
        }
        this.set_other_characters = function() {
            this.other_characters = arguments[0]
        }
        this.datalog = []
        this.get_datalog = function() {
            return this.datalog
        }
        this.seeking = false
        this.remark = { // update clock status, when needed
	        status: this.status,            
            musings: function() {
                return 0
            },
        }
        this.update_geo_location = function() {
        } // update clock status also, when needed
        this.get_geo_location = function() {
        }
        this.criteria = {sleep: new skill(),awake: new skill(),energy: new skill(),fitness: new skill(),waiting: new skill()}
        this.update_energy_state = function() {
            if (this.energy < 2) {
                this.energy_state = 0
            } else if (this.energy < 3) {
                this.energy_state = 3
            } else if (this.energy < 4) {
                this.energy_state = 2
            }
        } // update clock status, when needed
        this.get_energy_state = function() {
        }
        this.dirty_status = false // mark 'dirty' after update
        this.status = new STATUS_WORD()
        this.get_status = new get_status()
        this.set_status = new set_status()
        this.reset_status = new reset_status()
        this.set_geo_location__local_area__goal = function() {
            this.dirty_status = true
            this.status.with_location.goal.local_area = arguments[0]
        }
        this.hasGoal = function() {
            return this.seeking
        }
        this.seek = function() {
            // this.update()
            // address the most concerning issue(s) of the day
            this.seeking = false // start out optimistic
            var a = [
                {a: JSON.stringify(this.status.with_location.current),b: JSON.stringify(this.status.with_location.goal), datalog_msg: this.name + ':{ with_location: [' + JSON.stringify(this.status.with_location).match(/"\w+":\d+/gmi) + '] }', },
                {a: this.status.with_energy_level.current,b: this.status.with_energy_level.goal, datalog_msg: this.name + ':{ with_foreshadwoing' + JSON.stringify(this.status.with_foreshadowing).match(/"\w+":\d+/gmi) + '] }', },
                {a: this.status.with_foreshadowing.current,b:this.status.with_foreshadowing.goal, datalog_msg: this.name + ':{ with_energy_level: [' + JSON.stringify(this.status.with_energy_level).match(/"\w+":\d+/gmi) + '] }', },
                {a: this.status.current_awareness.current,b: this.status.current_awareness.goal, datalog_msg: this.name + ':{ current_awareness: [' + JSON.stringify(this.status.current_awareness).match(/"\w+":\d+/gmi) + '] }', },
                {a: this.status.current_posture.current,b: this.status.current_posture.goal, datalog_msg: this.name + ':{ current_posture: [' + JSON.stringify(this.status.current_posture).match(/"\w+":\d+/gmi) + '] }', },
                {a: this.status.current_emotional_state.perception.current,b: this.status.current_emotional_state.perception.goal, datalog_msg: this.name + ':{ current_emotional_state.perception: [' + JSON.stringify(this.status.current_emotional_state.perception).match(/"\w+":\d+/gmi) + '] }', },
                {a: this.status.current_emotional_state.reality.current,b: this.status.current_emotional_state.reality.goal, datalog_msg: this.name + ':{ current_emotional_state.reality: [' + JSON.stringify(this.status.current_emotional_state.reality).match(/"\w+":\d+/gmi) + '] }', },
                {a: this.status.current_personality.current,b: this.status.current_personality.goal, datalog_msg: this.name + ':{ current_personality: [' + JSON.stringify(this.status.current_personality).match(/"\w+":\d+/gmi) + '] }', },
                {a: this.status.current_characterization.current,b: this.status.current_characterization.goal, datalog_msg: this.name + ':{ current_characterization: [' + JSON.stringify(this.status.current_characterization).match(/"\w+":\d+/gmi) + '] }', },
                {a: this.status.current_perceptiveness.current, b: this.status.current_perceptiveness.goal, datalog_msg: this.name + ':{ current_perceptiveness: [' + JSON.stringify(this.status.current_perceptiveness).match(/"\w+":\d+/gmi) + '] }', },
            ]
            var N = a.length
            for (var i = 0; i < N; i++) {
                if (a[i].a !== a[i].b) {
                    this.seeking = true
                    this.datalog.push(a[i].datalog_msg)
                }
            }
            this.status.with_location.current.local_area++
        }
        this.energy = new skill(9)
        this.energy_expenditures = 0
        this.energy_deposited = 0
        this.check_energy = function() {
            this.energy -= this.energy_expenditures + this.energy_deposited;
            if (this.energy < 4) {
                this.datalog.push('I was getting low on energy')
            } else if (this.energy > 6) {
                this.datalog.push('By now I had plenty of energy')
            }
            return this.energy
        } // add current minus expenditures plus deposited
        this.narrator = function() {
            return this.datalog.join('\n\n')
        }
        this.thoughts = function() {
        } // log theories/results as you iterate across strategies // update clock status also, when needed
        this.get_thoughts = function() {
        }
        this.get_internal_clock_status = function() {
            var s2 = {'h': function(t) {
                    return g_universal_time - g_universal_time % 1
                },'m': function(t) {
                    return g_universal_time % 1
                },'s': function(t) {
                    return g_universal_time % .01
                },'default': function() {
                    return g_universal_time
                },}
            var s1 = {true: status[arguments[0]](),false: status['default']()}
            return s1[(s2[arguments[0]] != 'undefined')]
        }
        this.update = function() {
            var N = arguments.length
            for (var j = 0; j < N; j++) {
                this.other_characters[arguments[j].index] = arguments[j]
            }
        }
    }
    Character.prototype = new Object()
    
    function STORY() {
        this.character = new Array()
        this.beat = function() {
            var N = this.character.length
            for (var j = 0; j < N; j++) {
                for (var i = 0; i < N; i++) {
                    if (i != j) {
                        this.character[i].update(this.character[j])
                        this.character[j].update(this.character[i])
                    }
                }
            }
        }
    }
    STORY.prototype = new Object()
    
    var Story = new STORY()
    Story.character.push(new Character('Seras'))
    Story.character[0].set_geo_location__local_area__goal(9)
    Story.character.push(new Character('env'))
    var my_character = Story.character[0]
    var NATURE = Story.character[1]
    my_character.seek()
    Story.beat()
    while (my_character.hasGoal()) {
        my_character.seek()
        Story.beat()
    }// Story > Sequence > Scene > Paragraph > Beat > Sentence > Words > Who/What/Where/When/Why (Crisis Points set between each stage)
    srcTranslated.value = my_character.narrator() + '\n\nThe End'
} // translatorTool
