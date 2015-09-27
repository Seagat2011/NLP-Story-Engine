
var file00 = "mysql-wn-data.synsets.attributes_IV.js"
var file01 = "mysql-wn-data.synsets_II.sql.js"
var file02 = "mysql-wn-data.synsets.inverse_II.sql.js"

a = new Worker(file00)
b = new Worker(file01)
c = new Worker(file02)  
  
a.name = 'attrib_IV'
b.name = 'synsets_II'
c.name = 'synsets_II_inv'

function loader() {
    a.import = function(args){
        srcTranslated.value = 'Processing..'
        this.postMessage(args)
        this.onmessage = function(e){
            if(e.data.origin == this.name){
                srcTranslated.value = JSON.stringify(e.data.value)
            }
        }        
    }
    srcCode.value = 'story=0 sequence_blocks=4 iterative_depth=2 paragraphs=2 sentences=13 season=0 weapon=0 realization=(+) story_state_machine=[]'
    srcTranslated.value = ''
}
// function loader ()

function clear_window() {
    srcTranslated.value = ''
}
// clear_window ()

function MD5() {
    srcTranslated.value = Math.md5(srcCode.value)
    return
}
// generate_MD5 ()

function translatorTool() {
    a.import('apple')
}
// translatorTool ()
