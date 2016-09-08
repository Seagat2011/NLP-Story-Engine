/*

  TITLE
    _stage_03.js
  
  AUTHOR  
    Seagat2011, Copyright (c) 2016
  
  REFERENCE
    N/A
    
  DESCRIPTION
    Rule-based, sentence-generation tool
  
  INPUT
    N/A
    
  OUTPUT
    A grammatically correct sentence or sentences, based on previously designed templates

  NOTES
    N/A
    
  INCLUDE
    _stage_*.*

*/

Object.prototype.union = function(w){ // max set //
  var result = this
  for(var u in w){
    if(w.hasOwnProperty(u)){
      result[u] = 1
    }
  }
  return result
}
Object.prototype.intersection = function(w){ // min set //
  var result = {}
  for(var u in w){
    if(
    w.hasOwnProperty(u) && 
    (u in this)){
      result[u] = 1
    }
  }
  return result
}
Object.prototype.isDisjoint = function(w){
  var _b_ = false
  if(this.intersection(w)=={}){
    _b_ = true
  }
  return _b_ 
}
Object.prototype.relativeComplement = function(w){
  var result = {}
  for(var u in this){
    if(
    this.hasOwnProperty(u) && 
    !(u in w)){
      result[u] = 1
    }
  }
  return result
}
Object.prototype.capitalizeFirst = function(){
  var w = this
  try{
    w = this.match(/^[a-z]/)[0].toUpperCase()
    if(w){
      w = this.replace(/^[a-z]/,w)
    }
  }
  catch(e){
  }
  return w
}
Math._random = function(n){
  var w =  Math.floor( Math.random() * n )
  return w
}
Object.prototype.getNext = function(u,w,noUpdate){
  var ctx
  var n = 0
  var N = 0
  var G = this[w]
  if("_2FA47F7C65FEC19CC163B195725E3844" in G){
    N = Math._random(G._2FA47F7C65FEC19CC163B195725E3844)
  }
  for(var next in G){
    if(G.hasOwnProperty(next) && (n++==N)){
      ctx = G[next]
      break
    }
  }
  if(!noUpdate){
    u.context = w
  }
  u.sentence.push( ctx )
}
var part_of_speech = {
  CFG:CFG_sight,
  CFG_template:CFG_sight_template,
  Parse:function(u,w,noUpdate){
    if(w.match(/appositive/)){
      part_of_speech.Parse(u,"preposition",true)
      part_of_speech.Parse(u,"article",true)    
    }
    part_of_speech.CFG[u.context].getNext(u,w,noUpdate)
  },
}
function translatorTool(){
  var beats = 60
  var sentence = []
  for(var i = beats;i>0;i--){
    var currentContext = { context:"root", sentence:[] }
    var N = Math._random(part_of_speech.CFG_template.length)
    part_of_speech.CFG_template[N].map(
      function(w){
        part_of_speech.Parse(currentContext,w)
        return w
      }
    )
    sentence.push(currentContext.sentence.join(" "))
  }
  srcTranslated.value = sentence.join("\n") 
}

function loader(){

}
function clear_window(){
  srcTranslated.value = ""
}
