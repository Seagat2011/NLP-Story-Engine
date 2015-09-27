function add_flags(){
    var obj = arguments[0]
    var p = arguments[1]
    if(p.match(/[a-z]+\.[a-z]+/gmi)){
        obj[0].push(p)
    } else {
        obj[1].push(p)
    }
    return obj
}

function g_parse(){
    var obj = arguments[0]
    var p = arguments[1]
    if(typeof(p) == 'object'){
        for(var i in p){
            obj = g_parse(obj, p[i])
        }
    } else {
        obj = add_flags(obj, p)
    }
    return obj
}

intf = {
    obj:function(){ // available attribute flags (wordnet to js)
            var obj = {}
            var s2 = arguments[0].split('##')
            var s = s2[1].split('\n')
            var N = s.length
            for(var i=0; i<N; i++){
                var r = new RegExp(/,@[ a-z]/)
                var p = s[i].split(r)
                var m = p.length
                for(var j=0; j<m; j++){
                    p[j] = p[j].replace(/[!\{\}\[\]\+\s+]|[#;][a-zA-Z]/gmi,'').replace(/_/gmi, ' ').split(',')
                    var streamline = true
                    while(streamline){
                        streamline = false
                        var q = p[j].length-1
                        for(var k=q; k>-1; k--){
                            if(p[j][k].match(/[\(\)]/gmi)){
                                p[j].pop()
                                streamline = true
                            }
                        }  
                    }                  
                }
                p[0].unshift(s2[0])
                if(p[p.length-1].length == 0){
                    p.pop()
                }
                if(p[0][p[0].length-1] == ''){
                    p[0].pop()
                }
                if(p[0][1]){
                    obj[p[0][1]] = p
                }
            }
            return (JSON.stringify(obj).replace(/\]\],/gmi,']],\n')).replace(/[{}]/gmi,'')
        }, // available attribute flags
    obj2:function(){ // available attribute flags (case insensitive)
        var obj = {}
        for(var i in mysql_wn_data_synsets_attributes){
            obj[i.toLowerCase()] = mysql_wn_data_synsets_attributes[i]
        }
        return JSON.stringify(obj).replace(/\]\],/gmi,']],\n')
        },   
    obj3:function(){ // available attribute flags (case insensitive)
        var obj = {}
        for(var i in mysql_wn_data_synsets_attributes){
            if(i.match(/^[\- a-zA-z]+(\d+)/gmi)){
                var s = i.replace(/^([\- a-zA-z]+)\d+/gmi,'$1')
                if(obj[s]){
                    obj[s].push(mysql_wn_data_synsets_attributes[i])
                } else {
                    obj[s] = mysql_wn_data_synsets_attributes[i]
                }
            } else {
                obj[i] = mysql_wn_data_synsets_attributes[i]
            }
        }
        return JSON.stringify(obj).replace(/\]\],/gmi,']],\n')
        },  
    obj4:function(){ // available attribute flags (case insensitive)
        var obj = {}
        for(var i in mysql_wn_data_synsets_attributes){
            obj[i] = []
            obj[i][0] = []
            obj[i][1] = []
            obj[i] = g_parse(obj[i], mysql_wn_data_synsets_attributes[i])
        }
        return JSON.stringify(obj).replace(/\]\],/gmi,']],\n')
        },                    
}