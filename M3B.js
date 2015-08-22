// Artificial consciousness generator M3B
// HOW-TO READ FROM FILE
// "length=5 depth=2 main_character='jordn'\n main_villain='rosemont'".match(/(\w+)/g) =) ["length", "5", "main_character", "jordn", "main_villain", "rosemont"]
// "length=5 depth=2 main_character='jordn'\n main_villain='rosemont'".match(/'(\w+)'/img) =) ['jordan','rosemnt']
// "length=5 depth=2 main_character='jordn'\n main_villain='rosemont'".match(/(\d+)/gim) =) ['5','2']
//  a = "02977058 06 n 07 cash_machine 0 cash_dispenser 0 automated_teller_machine 0 ..
//  a.replace(/^(\d{8})\s/g,'$1:[')
// "02977058:[06 n 07 cash_machine 0 cash_dispenser 0 automated_teller_machine 0 automatic_teller_machine 0 automated_teller 0 automatic_teller 0 ATM 0 001 @ 03699975 n 0000 | an unattended machine (outside some banks) that dispenses money when a personal coded card is used"


var strategy = {
    0: [1, 1, 1, 0, 0, 0, 0, 0, 0], // rows //
    1: [0, 0, 0, 1, 1, 1, 0, 0, 0],
    2: [0, 0, 0, 0, 0, 0, 1, 1, 1],
    3: [1, 0, 0, 1, 0, 0, 1, 0, 0], // columns //
    4: [0, 1, 0, 0, 1, 0, 0, 1, 0],
    5: [0, 0, 1, 0, 0, 1, 0, 0, 1],
    6: [1, 0, 0, 0, 1, 0, 0, 0, 1], // diagonals // 
    7: [0, 0, 1, 0, 1, 0, 1, 0, 0],
} // strategy {}

var STORY = []

function loader() {
    srcCode.value = 'sequence_blocks=2 iterative_depth=0 character_attributes=0'
    return
} // function loader

function clear_window() {
    srcTranslated.value = ''
    return
} // clear_window()

var g_character = {
    MAIN_CHARACTER: 0,
    MAIN_SUPPORT: 1,
    SUPPORT_1: 2,
    SUPPORT_2: 3,
    NEUTRAL: 4,
    ANTAGONIST: 5,
    VILLAIN_1: 6,
    VILLAIN_2: 7,
    CHIEF_VILLAIN: 8,
} // g_character{}

function translatorTool() {
    var obj = function() {
        this.name = 0
        this.game = {}
        this.set_name = function(i) {
            this.name = Math.pow(2, i)
        } // set_name()    
        this.get_name = function() {
            return this.name
        } // get_name()
        this.get_index = function(p2) {
            function referring_to_self(p1, p2) {
                return (p1.name == p2.name)
            } // asking_for_self
            function find_reference_to_self(p1, p2) {
                var lost_index = 0
                for (var i in p2.game) {
                    if (p1.name == p2.game[i].p2.name) {
                        lost_index = i
                        break
                    } // test(i)
                } //loopi
                return lost_index
            } // find_reference_to_self
            var status = {
                true: function(p1, p2) {
                    return find_reference_to_self(p1, p2)
                }, // [true] 
                false: function(p1, p2) {
                    return p1.name + p2.name
                }, // [false]
            } // status
            return status[referring_to_self(this, p2)](this, p2)
        } // get_index()
        this.new_game = function(p2) {
            var index = this.get_index(p2)
            if (this.game[index] == null) {
                this.game[index] = {
                    p2: p2,
                    grid: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
                    mymove: 0,
                    strategy: 0,
                    hasamove: true,
                } // get_index{}
            } // test(index)      
        } // new_game()
        this.end_game = function(p2) {
            var index = this.get_index(p2)
            this.game[index].hasamove = false
            return
        } // end_game()
        this.update_grid = function(p2) {
            var index = this.get_index(p2)
            this.game[index].grid = p2.game[index].grid
            return
        } // update_grid
        this.update_game = function(p2) {
            var index = this.get_index(p2)
            this.game[index].p2 = p2
            this.update_grid(p2)
            this.check_strategy(p2)
            return
        } // update_game()
        this.narrator = function(p2, s) {
            var index = this.get_index(p2)
            if (this.game[index].hasamove) {
                if (!s)
                    s = 'sequence ' + index + ': ' + 'player ' + this.name + ' movesto: ' + this.game[index].mymove + '\n'
            } else {
                s = 'sequence ' + index + ': ' + s + '\n'
            } // test(s)
            //console.log(s)
            STORY.push (s)
            return
        } // narrator()
        this.check_strategy = function(p2) {
            //adjust to a better strategy-grid when necessary
            this.current_player_move(p2)
            return
        } //check_strategy()
        this.current_player_move = function(p2) {
            var index = this.get_index(p2)
            while (1) {
                this.game[index].mymove = Math.floor(Math.random() * 10)
                if (this.game[index].grid[this.game[index].mymove] == -1) {
                    this.game[index].grid[this.game[index].mymove] = this.name
                    break
                } // test(mymove)
            } // loopf
            this.narrator(p2)
            this.check_for_winner(p2)
            return
        } // current_player_move()
        this.check_for_winner = function(p2) {
            var GAME_OVER = false
            function report(n, s, p1, p2) {
                var hasamove = false
                var status = false
                var index = p1.get_index(p2)
                for (var i = 0; i < 9; i++) {
                    if (p1.game[index].grid[i] == -1) {
                        hasamove = true
                        break
                    } // test i
                } // loopi
                if (n > 2 && GAME_OVER == false) {
                    GAME_OVER = true
                    p1.end_game(p2)
                    p2.end_game(p1)
                    p1.narrator(p2, s + ' player ' + p1.name + ' has won the game.')
                } else if (hasamove == false && GAME_OVER == false) {
                    GAME_OVER = true
                    p1.end_game(p2)
                    p2.end_game(p1)
                    p1.narrator(p2, '"the game is a draw"')
                } // test(n)
                return GAME_OVER
            } // report()
            function wins_diagonals(p1, p2) {
                var index = p1.get_index(p2)
                var diag_1 = 0
                var diag_2 = 0
                for (var i = 0; i < 9; i++) {
                    if ((p1.game[index].grid[i] == p1.name) && strategy[6][i])
                        diag_1++
                    if ((p1.game[index].grid[i] == p1.name) && strategy[7][i])
                        diag_2++
                }
                return report(diag_1, '*** diagonal_1***', p1, p2) && report(diag_2, '*** diagonal_2 ***', p1, p2)
            } // wins_diagonals()
            function wins_columns(p1, p2) {
                var index = p1.get_index(p2)
                var col_1 = 0
                var col_2 = 0
                var col_3 = 0
                for (var i = 0; i < 9; i++) {
                    if ((p1.game[index].grid[i] == p1.name) && strategy[3][i])
                        col_1++
                    if ((p1.game[index].grid[i] == p1.name) && strategy[4][i])
                        col_2++
                    if ((p1.game[index].grid[i] == p1.name) && strategy[5][i])
                        col_3++
                } // loopi
                return report(col_1, '*** column_1 ***', p1, p2) && report(col_2, '*** column_2 ***', p1, p2) && report(col_3, '*** column_3 ***', p1, p2)
            } // wins_columns()
            function wins_rows(p1, p2) {
                var index = p1.get_index(p2)
                var row_1 = 0
                var row_2 = 0
                var row_3 = 0
                for (var i = 0; i < 9; i++) {
                    if ((p1.game[index].grid[i] == p1.name) && strategy[0][i])
                        row_1++
                    if ((p1.game[index].grid[i] == p1.name) && strategy[1][i])
                        row_2++
                    if ((p1.game[index].grid[i] == p1.name) && strategy[2][i])
                        row_3++
                } // loopi
                return report(row_1, '*** row_1 ***', p1, p2) && report(row_2, '*** row_2 ***', p1, p2) && report(row_3, '*** row_3 ***', p1, p2)
            } // wins_rows()  
            return !(wins_diagonals(this, p2) && wins_columns(this, p2) && wins_rows(this, p2))
        } // check_for_winner()
    } // obj{}
    var nums = srcCode.value.match(/(\d+)/g)
    obj.prototype = new Object()
    var player = {}
    player.prototype = new Object()
    player.available = []
    player.sequences = nums[0] * 1 // convert string to INT //
    player.depth = nums[1] * 1 // convert string to INT //
    player.init = function() {
        function build_player_network(obj, bot, N) {
            for (var i = 0; i < N; i++) {
                var o = new obj()
                o.name = i
                bot.push(o)
            } // loopf   
            return bot
        } // build_player_network
        function initiate_games(bot, N) {
            for (var i = 0; i < N; i++) {
                for (var j = 0; j < N; j++) {
                    if (i != j) {
                        var a = bot[i]
                        var b = bot[j]
                        a.new_game(b)
                    } // test(i,j)
                } // loopj
            } // loopi     
            return bot
        } // initiate_games
        function globally_update_games(bot, N) {
            var sidelined = 0
            while (1) {
                for (var i = 0; i < N; i++) {
                    for (var j = 0; j < N; j++) {
                        if (i != j) {
                            var a = bot[i]
                            var b = bot[j]
                            var index = a.get_index(b)
                             while (1){   
                                if (a.game[index].hasamove && b.game[index].hasamove) {
                                    a.update_game(b)
                                    if(b.game[index].hasamove){
                                        b.update_game(a)
                                    }// test(b)
                                } else {
                                    sidelined++
                                    break
                                } // test(index)
                            } // loopf
                        } // test(i,j)
                    } // loopj
                } // loopi 
                if (sidelined >= N){
                    return bot
                } // test (sidelined)
            } // loopf
        } // function globally_update_games (bot,N){
        this.available = build_player_network(obj, this.available, this.sequences)
        this.available = initiate_games(this.available, this.sequences)
        this.available = globally_update_games(this.available, this.sequences)
        return
    } // player.init()  
    if (player.sequences > 1){
        player.init()
        srcTranslated.value = STORY.join('')
        STORY = []
    } esle {
        srcTranslated.value = 'Paramter mismatch. Too few parameters - ' + player.sequences
    }// test(nums)
    var players = {
        current_stage: 0,
        total_stages: 0,
        seras: {
            role: g_character.MAIN_CHARACTER,
            current_emotional_state: 0,
            current_physical_state: 0,
            current_leadership_state: 0,
            current_perceptive_state: 0,
            current_awareness_state: 0,
            current_personable_state: 0,
            current_immaginative_state: 0,
            current_strategy: 0,
            personal_grid: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            weapon: 'chain-bow',
            weapon_behavior: {
                dawn: [''],
                day: ['it gleams bright as hell'],
                evening: [''],
                night: ['']
            }, // weapon_behavior      
            weapon_sound: {
                energized: ['glides through the air'],
                normal: ['swings through the air'],
                weak: [''],
            }, // weapon_sound
            ground_attack: {
                energized: [''],
                normal: [''],
                weak: ['']
            }, // ground_attack 
            rising_attack: {
                energized: [''],
                normal: [''],
                weak: ['']
            }, // rising_attack  
            jump_attack: {
                energized: [''],
                normal: [''],
                weak: ['']
            }, // jump_attack 
            action_avail: {
                general: ['turns, and raises his arms to the crowd.'],
                from_ground: {
                    energized: ['rises, without hesitation'],
                    normal: ['rises, and continues on.'],
                    weak: ['rises, barely able to stand.'],
                }, // from_ground
                standing: {
                    energized: ['rises, without hesitation'],
                    normal: ['rises, and continues on.'],
                    weak: ['rises, barely able to stand.'],
                }, // standing
                mid_air: {
                    energized: ['swipes at the foe in front of him'],
                    normal: ['lands, and continues on.'],
                    weak: ['collapses, barely able to stand.'],
                }, // mid_air
            }, // action_avail         
            dialogue_avail: {
                energized: ['This is simple.'],
                normal: ['I was through being polite.', 'I\'ll show you what I do to dogs.', 'I\'ll show you what I do with dogs.', 'You gonna eat that? Of course, because you\'re a dog.'],
                weak: [, 'Oh, it just gets easier, and easier. '],
            }, // dialogue_avail
            narrative_avail: {
                energized: ['This is simple.'],
                normal: ['I was through being polite.', 'I\'ll show you what I do to dogs.', 'I\'ll show you what I do with dogs.', 'You gonna eat that? Of course, because you\'re a dog.'],
                weak: [, 'Oh, it just gets easier, and easier. '],
            },
        }, // Seras
    } // players   
} // translatorTool()
