/*

  TITLE
    _stage_02_act.js
  
  AUTHOR  
    Seagat2011, Copyright (c) 2016
  
  REFERENCE
    N/A
    
  DESCRIPTION  
    Varied stage 02 tests
  
  INPUT
    N/A
    
  OUTPUT
    A grammatically correct sentence with action

  NOTES
    N/A
    
  INCLUDE
    _stage_*.*

*/

var CFG_act_template = [
  [
    "interjection",
    "punctuation",
    "article",
    "noun",
    "verb",
    "punctuation2",
  ],
  [
    "article",
    "noun",
    "verb",
    "punctuation",
    "interjection",
    "punctuation2",
  ],
  [
    "article",
    "noun",
    "verb",
    "punctuation2",
    "punctuation3",
  ],
  [
    "article",
    "noun",
    "appositive",
    "verb",
    "punctuation2",
  ],
  [
    "article",
    "noun",
    "verb",
    "appositive",
    "punctuation2", 
  ],
  [
    "pronoun",
    "noun",
    "punctuation3",
    "appositive",
    "punctuation3",
    "verb",
    "punctuation2",
  ],
  [
    "pronoun",
    "noun",
    "verb",
    "appositive",
    "punctuation2",
  ],
]
var CFG_act_article = {
  "article.definite": "the",
  "article.indefinite": "a",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_act_pronoun = {
  "noun.pronoun.personal.person.third.singular.(objective|possessive).feminine": "her",
  "noun.pronoun.personal.person.third.singular.possessive.masculine": "his",
  "noun.pronoun.proper.person.genitive": "mr. Walker's",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_act_interjection = {
  "interjection.00": "ah",
  "interjection.01": "alas",
  "interjection.02": "bang",
  "interjection.03": "boo",
  "interjection.04": "for the love of Peete",
  "interjection.05": "goodness gracious",
  "interjection.06": "ha",
  "interjection.07": "hey",
  "interjection.08": "hmpf",
  "interjection.09": "oops",
  "interjection.10": "shucks",
  "interjection.11": "yikes",
  "interjection.12": "watch out",
  "interjection.13": "whee",
  "interjection.14": "whoa",
  "interjection.15": "whoops",
  "interjection.16": "i must say",
  "interjection.17": "whoop dee doo",
  "interjection.18": "dang",
  _2FA47F7C65FEC19CC163B195725E3844:19,  
}
var CFG_act_noun = {
  "noun.common.thing.transport.4wheel": "car",
}
var CFG_act_appositive = {
  "appositive.restrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  "appositive.nonrestrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_act_verb = {
  "verb.present.passive": "stalled",
}
var CFG_act_preposition = {
  "preposition.modifier.noun.00": "in",
  "preposition.modifier.noun.01": "on",
  "preposition.modifier.noun.02": "along",
  "preposition.modifier.noun.03": "beside",
  _2FA47F7C65FEC19CC163B195725E3844:4,
}
var CFG_act_punctuation = {
  "punctuation.comma": ",",
  "punctuation.question": "?",
  "punctuation.exclamation": "!",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_act_punctuation2 = {
  "punctuation.period": ".",
  "punctuation.question": "?",
  "punctuation.exclamation": "!",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_act_punctuation3 = {
  "punctuation.comma": ",",
}


var CFG_act = {
  "root": {
    "article": CFG_act_article,
    "pronoun": CFG_act_pronoun,
    "interjection": CFG_act_interjection,
    _2FA47F7C65FEC19CC163B195725E3844:3,
  },
  "article": {
    "noun": CFG_act_noun,
  },
  "pronoun": {
    "noun": CFG_act_noun,
  },
  "noun": {
    "verb": CFG_act_verb,
    "appositive": CFG_act_appositive, 
    "preposition": CFG_act_preposition,
    "article": CFG_act_article,
    "punctuation3": CFG_act_punctuation3,
    _2FA47F7C65FEC19CC163B195725E3844:5,  
  },
  "verb": {  
    "preposition": CFG_act_preposition,
    "punctuation": CFG_act_punctuation,
    "punctuation2": CFG_act_punctuation2,
    "article": CFG_act_article,
    "appositive": CFG_act_appositive,
    _2FA47F7C65FEC19CC163B195725E3844:5,
  },
  "preposition": {
    "article": CFG_act_article,  
  },
  "appositive": {
    "punctuation": CFG_act_punctuation,
    "punctuation2": CFG_act_punctuation2,
    "punctuation3": CFG_act_punctuation3,
    "verb": CFG_act_verb,
    _2FA47F7C65FEC19CC163B195725E3844:4,
  },
  "interjection": {
    "punctuation": CFG_act_punctuation,
    "punctuation2": CFG_act_punctuation2,
    _2FA47F7C65FEC19CC163B195725E3844:2,
  },
  "punctuation": {
    "article": CFG_act_article,
    "interjection": CFG_act_interjection,
    _2FA47F7C65FEC19CC163B195725E3844:2,
  },  
  "punctuation3": {
    "verb": CFG_act_verb,
    "article": CFG_act_article,
    "preposition": CFG_act_preposition,
    "appositive": CFG_act_appositive,
    _2FA47F7C65FEC19CC163B195725E3844:4,
  },
}

/*

  TITLE
    _stage_02_touch.js
  
  AUTHOR  
    Seagat2011, Copyright (c) 2016
  
  REFERENCE
    N/A
    
  DESCRIPTION  
    Varied stage 02 tests
  
  INPUT
    N/A
    
  OUTPUT
    A grammatically correct sentence with touch

  NOTES
    N/A
    
  INCLUDE
    _stage_*.*

*/


var CFG_touch_template = [
  [
    "pronoun",
    "verb",
    "article",
    "noun",
    "verb2",
    "preposition",
    "noun2",
    "punctuation",
  ],
]
var CFG_touch_article = {
  "article.definite": "the",
  "article.indefinite": "a",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_touch_pronoun = {
  "noun.pronoun.personal.person.third.singular.(objective|possessive).feminine": "her",
  "noun.pronoun.personal.person.third.singular.possessive.masculine": "his",
  "noun.pronoun.proper.person.genitive": "mr. Walker's",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_touch_interjection = {
  "interjection.00": "ah",
  "interjection.01": "alas",
  "interjection.02": "bang",
  "interjection.03": "boo",
  "interjection.04": "for the love of Peete",
  "interjection.05": "goodness gracious",
  "interjection.06": "ha",
  "interjection.07": "hey",
  "interjection.08": "hmpf",
  "interjection.09": "oops",
  "interjection.10": "shucks",
  "interjection.11": "yikes",
  "interjection.12": "watch out",
  "interjection.13": "whee",
  "interjection.14": "whoa",
  "interjection.15": "whoops",
  "interjection.16": "i must say",
  "interjection.17": "whoop dee doo",
  "interjection.18": "dang",
  _2FA47F7C65FEC19CC163B195725E3844:19,
}
var CFG_touch_noun = {
  "noun.common.thing.transport.4wheel": "car",
}
var CFG_touch_appositive = {
  "appositive.restrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  "appositive.nonrestrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_touch_verb = {
  "verb.present.passive": "stalled",
}
var CFG_touch_preposition = {
  "preposition.modifier.noun.00": "in",
  "preposition.modifier.noun.01": "on",
  "preposition.modifier.noun.02": "along",
  "preposition.modifier.noun.03": "beside",
  _2FA47F7C65FEC19CC163B195725E3844:4,
}
var CFG_touch_punctuation = {
  "punctuation.comma": ",",
  "punctuation.question": "?",
  "punctuation.exclamation": "!",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_touch_punctuation2 = {
  "punctuation.period": ".",
  "punctuation.question": "?",
  "punctuation.exclamation": "!",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_touch_punctuation3 = {
  "punctuation.comma": ",",
}


var CFG_touch = {
  "root": {
    "article": CFG_touch_article,
    "pronoun": CFG_touch_pronoun,
    "interjection": CFG_touch_interjection,
    _2FA47F7C65FEC19CC163B195725E3844:3,
  },
  "article": {
    "noun": CFG_touch_noun,
  },
  "pronoun": {
    "noun": CFG_touch_noun,
  },
  "noun": {
    "verb": CFG_touch_verb,
    "appositive": CFG_touch_appositive, 
    "preposition": CFG_touch_preposition,
    "article": CFG_touch_article,
    "punctuation3": CFG_touch_punctuation3,
    _2FA47F7C65FEC19CC163B195725E3844:5,
  },
  "verb": {  
    "preposition": CFG_touch_preposition,
    "punctuation": CFG_touch_punctuation,
    "punctuation2": CFG_touch_punctuation2,
    "article": CFG_touch_article,
    "appositive": CFG_touch_appositive,
    _2FA47F7C65FEC19CC163B195725E3844:5,
  },
  "preposition": {
    "article": CFG_touch_article,
  },
  "appositive": {
    "punctuation": CFG_touch_punctuation,
    "punctuation2": CFG_touch_punctuation2,
    "punctuation3": CFG_touch_punctuation3,
    "verb": CFG_touch_verb,
    _2FA47F7C65FEC19CC163B195725E3844:4,
  },
  "interjection": {
    "punctuation": CFG_touch_punctuation,
    "punctuation2": CFG_touch_punctuation2,
    _2FA47F7C65FEC19CC163B195725E3844:2,
  },
  "punctuation": {
    "article": CFG_touch_article,
    "interjection": CFG_touch_interjection,
    _2FA47F7C65FEC19CC163B195725E3844:2,
  },  
  "punctuation3": {
    "verb": CFG_touch_verb,
    "article": CFG_touch_article,
    "preposition": CFG_touch_preposition,
    "appositive": CFG_touch_appositive,
    _2FA47F7C65FEC19CC163B195725E3844:4,
  },
}

/*

  TITLE
    _stage_02_taste.js
  
  AUTHOR  
    Seagat2011, Copyright (c) 2016
  
  REFERENCE
    N/A
    
  DESCRIPTION  
    Varied stage 02 tests
  
  INPUT
    N/A
    
  OUTPUT
    A grammatically correct sentence with sense of taste

  NOTES
    N/A
    
  INCLUDE
    _stage_*.*

*/


var CFG_taste_template = [
  [
    "pronoun",
    "verb",
    "article",
    "noun",
    "verb2",
    "preposition",
    "noun2",
    "punctuation",
  ],
]
var CFG_taste_article = {
  "article.definite": "the",
  "article.indefinite": "a",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_taste_pronoun = {
  "noun.pronoun.personal.person.third.singular.(objective|possessive).feminine": "her",
  "noun.pronoun.personal.person.third.singular.possessive.masculine": "his",
  "noun.pronoun.proper.person.genitive": "mr. Walker's",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_taste_interjection = {
  "interjection.00": "ah",
  "interjection.01": "alas",
  "interjection.02": "bang",
  "interjection.03": "boo",
  "interjection.04": "for the love of Peete",
  "interjection.05": "goodness gracious",
  "interjection.06": "ha",
  "interjection.07": "hey",
  "interjection.08": "hmpf",
  "interjection.09": "oops",
  "interjection.10": "shucks",
  "interjection.11": "yikes",
  "interjection.12": "watch out",
  "interjection.13": "whee",
  "interjection.14": "whoa",
  "interjection.15": "whoops",
  "interjection.16": "i must say",
  "interjection.17": "whoop dee doo",
  "interjection.18": "dang",
  _2FA47F7C65FEC19CC163B195725E3844:19,
}
var CFG_taste_noun = {
  "noun.common.thing.transport.4wheel": "car",
}
var CFG_taste_appositive = {
  "appositive.restrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  "appositive.nonrestrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_taste_verb = {
  "verb.present.passive": "stalled",
}
var CFG_taste_preposition = {
  "preposition.modifier.noun.00": "in",
  "preposition.modifier.noun.01": "on",
  "preposition.modifier.noun.02": "along",
  "preposition.modifier.noun.03": "beside",
  _2FA47F7C65FEC19CC163B195725E3844:4,
}
var CFG_taste_punctuation = {
  "punctuation.comma": ",",
  "punctuation.question": "?",
  "punctuation.exclamation": "!",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_taste_punctuation2 = {
  "punctuation.period": ".",
  "punctuation.question": "?",
  "punctuation.exclamation": "!",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_taste_punctuation3 = {
  "punctuation.comma": ",",
}


var CFG_taste = {
  "root": {
    "article": CFG_taste_article,
    "pronoun": CFG_taste_pronoun,
    "interjection": CFG_taste_interjection,
    _2FA47F7C65FEC19CC163B195725E3844:3,
  },
  "article": {
    "noun": CFG_taste_noun,
  },
  "pronoun": {
    "noun": CFG_taste_noun,
  },
  "noun": {
    "verb": CFG_taste_verb,
    "appositive": CFG_taste_appositive,
    "preposition": CFG_taste_preposition,
    "article": CFG_taste_article,
    "punctuation3": CFG_taste_punctuation3,
    _2FA47F7C65FEC19CC163B195725E3844:5,
  },
  "verb": {  
    "preposition": CFG_taste_preposition,
    "punctuation": CFG_taste_punctuation,
    "punctuation2": CFG_taste_punctuation2,
    "article": CFG_taste_article,
    "appositive": CFG_taste_appositive,
    _2FA47F7C65FEC19CC163B195725E3844:5,
  },
  "preposition": {
    "article": CFG_taste_article,
  },
  "appositive": {
    "punctuation": CFG_taste_punctuation,
    "punctuation2": CFG_taste_punctuation2,
    "punctuation3": CFG_taste_punctuation3,
    "verb": CFG_taste_verb,
    _2FA47F7C65FEC19CC163B195725E3844:4,
  },
  "interjection": {
    "punctuation": CFG_taste_punctuation,
    "punctuation2": CFG_taste_punctuation2,
    _2FA47F7C65FEC19CC163B195725E3844:2,
  },
  "punctuation": {
    "article": CFG_taste_article,
    "interjection": CFG_taste_interjection,
    _2FA47F7C65FEC19CC163B195725E3844:2,
  },  
  "punctuation3": {
    "verb": CFG_taste_verb,
    "article": CFG_taste_article,
    "preposition": CFG_taste_preposition,
    "appositive": CFG_taste_appositive,
    _2FA47F7C65FEC19CC163B195725E3844:4,
  },
}

/*

  TITLE
    _stage_02_speak.js
  
  AUTHOR  
    Seagat2011, Copyright (c) 2016
  
  REFERENCE
    N/A
    
  DESCRIPTION  
    Varied stage 02 tests
  
  INPUT
    N/A
    
  OUTPUT
    A grammatically correct sentence of dialogue

  NOTES
    N/A
    
  INCLUDE
    _stage_*.*

*/

var CFG_speak_template = [
  [
    "punctuation4",
    "interjection",
    "punctuation",
    "article",
    "noun",
    "verb",
    "punctuation2",
    "punctuation4",
    "punctuation3",
    "pronoun2",
    "verb2",
    "punctuation5",
  ],
  [
    "punctuation4",
    "article",
    "noun",
    "verb",
    "punctuation",
    "interjection",
    "punctuation2",
    "punctuation4",
    "punctuation3",
    "pronoun2",
    "verb2",
    "punctuation5",
  ],
  [
    "punctuation4",
    "article",
    "noun",
    "verb",
    "punctuation2",
    "punctuation4",
    "punctuation3",
    "pronoun2",
    "verb2",
    "punctuation5",
  ],
  [
    "punctuation4",
    "article",
    "noun",
    "appositive",
    "verb",
    "punctuation2",
    "punctuation4",
    "punctuation3",
    "pronoun2",
    "verb2",
    "punctuation5",
  ],
  [
    "punctuation4",
    "article",
    "noun",
    "verb",
    "appositive",
    "punctuation2",
    "punctuation4",
    "punctuation3",
    "pronoun2",
    "verb2",
    "punctuation5",
  ],
  [
    "punctuation4",
    "pronoun",
    "noun",
    "punctuation3",
    "appositive",
    "punctuation3",
    "verb",
    "punctuation2",
    "punctuation4",
    "punctuation3",
    "pronoun2",
    "verb2",
    "punctuation5",
  ],
  [
    "punctuation4",
    "pronoun",
    "noun",
    "verb",
    "appositive",
    "punctuation2",
    "punctuation4",
    "punctuation3",
    "pronoun2",
    "verb2",
    "punctuation5",
  ],
]
var CFG_speak_article = {
  "article.definite": "the",
  "article.indefinite": "a",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_speak_pronoun = {
  "noun.pronoun.personal.person.third.singular.(objective|possessive).feminine": "her",
  "noun.pronoun.personal.person.third.singular.possessive.masculine": "his",
  "noun.pronoun.proper.person.genitive": "mr. Walker's",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_speak_pronoun2 = {
  "noun.pronoun.proper.person": "mr. Walker",
}
var CFG_speak_interjection = {
  "interjection.00": "ah",
  "interjection.01": "alas",
  "interjection.02": "bang",
  "interjection.03": "boo",
  "interjection.04": "for the love of Peete",
  "interjection.05": "goodness gracious",
  "interjection.06": "ha",
  "interjection.07": "hey",
  "interjection.08": "hmpf",
  "interjection.09": "oops",
  "interjection.10": "shucks",
  "interjection.11": "yikes",
  "interjection.12": "watch out",
  "interjection.13": "whee",
  "interjection.14": "whoa",
  "interjection.15": "whoops",
  "interjection.16": "i must say",
  "interjection.17": "whoop dee doo",
  "interjection.18": "dang",
  _2FA47F7C65FEC19CC163B195725E3844:19,  
}
var CFG_speak_noun = {
  "noun.common.thing.transport.4wheel": "car",
}
var CFG_speak_appositive = {
  "appositive.restrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  "appositive.nonrestrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_speak_verb = {
  "verb.present.passive": "stalled",
}
var CFG_speak_verb2 = {
  "verb.present.active": "says",
}
var CFG_speak_preposition = {
  "preposition.modifier.noun.00": "in",
  "preposition.modifier.noun.01": "on",
  "preposition.modifier.noun.02": "along",
  "preposition.modifier.noun.03": "beside",
  _2FA47F7C65FEC19CC163B195725E3844:4,
}
var CFG_speak_punctuation = {
  "punctuation.comma": ",",
  "punctuation.question": "?",
  "punctuation.exclamation": "!",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_speak_punctuation2 = {
  "punctuation.period": ".",
  "punctuation.question": "?",
  "punctuation.exclamation": "!",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_speak_punctuation3 = {
  "punctuation.comma": ",",
}
var CFG_speak_punctuation4 = {
  "punctuation.quotes": "\"",
}
var CFG_speak_punctuation5 = {
  "punctuation.quotes": ".",
}


var CFG_speak = {
  "root": {
    "punctuation4": CFG_speak_punctuation4,
  },
  "punctuation4": {
    "article": CFG_speak_article,
    "pronoun": CFG_speak_pronoun,
    "interjection": CFG_speak_interjection,
    "punctuation3": CFG_speak_punctuation3,
    _2FA47F7C65FEC19CC163B195725E3844:4,
  },
  "article": {
    "noun": CFG_speak_noun,
  },
  "pronoun": {
    "noun": CFG_speak_noun,
  },
  "pronoun2": {
    "verb2": CFG_speak_verb2,
  },
  "noun": {
    "verb": CFG_speak_verb,
    "appositive": CFG_speak_appositive,
    "preposition": CFG_speak_preposition,
    "article": CFG_speak_article,
    "punctuation3": CFG_speak_punctuation3,
    _2FA47F7C65FEC19CC163B195725E3844:5,
  },
  "verb": {  
    "preposition": CFG_speak_preposition,
    "punctuation": CFG_speak_punctuation,
    "punctuation2": CFG_speak_punctuation2,
    "article": CFG_speak_article,
    "appositive": CFG_speak_appositive,
    _2FA47F7C65FEC19CC163B195725E3844:5,
  },
  "verb2": {
    "punctuation5": CFG_speak_punctuation5,
  },
  "preposition": {
    "article": CFG_speak_article,
  },
  "appositive": {
    "punctuation": CFG_speak_punctuation,
    "punctuation2": CFG_speak_punctuation2,
    "punctuation3": CFG_speak_punctuation3,
    "verb": CFG_speak_verb,
    _2FA47F7C65FEC19CC163B195725E3844:4,
  },
  "interjection": {
    "punctuation": CFG_speak_punctuation,
    "punctuation2": CFG_speak_punctuation2,
    _2FA47F7C65FEC19CC163B195725E3844:2,
  },
  "punctuation": {
    "article": CFG_speak_article,
    "interjection": CFG_speak_interjection,
    _2FA47F7C65FEC19CC163B195725E3844:2,
  },  
  "punctuation3": {
    "verb": CFG_speak_verb,
    "article": CFG_speak_article,
    "preposition": CFG_speak_preposition,
    "appositive": CFG_speak_appositive,
    "punctuation2": CFG_speak_punctuation2,
    "pronoun2": CFG_speak_pronoun2,
    _2FA47F7C65FEC19CC163B195725E3844:6,
  },
  "punctuation2": {
    "punctuation4": CFG_speak_punctuation4,
  },
}

/*

  TITLE
    _stage_02_smell.js
  
  AUTHOR  
    Seagat2011, Copyright (c) 2016
  
  REFERENCE
    N/A
    
  DESCRIPTION  
    Varied stage 02 tests
  
  INPUT
    N/A
    
  OUTPUT
    A grammatically correct sentence with smell

  NOTES
    N/A
    
  INCLUDE
    _stage_*.*

*/



var CFG_smell_template = [
  [
    "pronoun",
    "verb",
    "article",
    "noun",
    "verb2",
    "preposition",
    "noun2",
    "punctuation",
  ],
]
var CFG_smell_article = {
  "article.definite": "the",
  "article.indefinite": "a",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_smell_pronoun = {
  "noun.pronoun.personal.person.third.singular.(objective|possessive).feminine": "her",
  "noun.pronoun.personal.person.third.singular.possessive.masculine": "his",
  "noun.pronoun.proper.person.genitive": "mr. Walker's",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_smell_interjection = {
  "interjection.00": "ah",
  "interjection.01": "alas",
  "interjection.02": "bang",
  "interjection.03": "boo",
  "interjection.04": "for the love of Peete",
  "interjection.05": "goodness gracious",
  "interjection.06": "ha",
  "interjection.07": "hey",
  "interjection.08": "hmpf",
  "interjection.09": "oops",
  "interjection.10": "shucks",
  "interjection.11": "yikes",
  "interjection.12": "watch out",
  "interjection.13": "whee",
  "interjection.14": "whoa",
  "interjection.15": "whoops",
  "interjection.16": "i must say",
  "interjection.17": "whoop dee doo",
  "interjection.18": "dang",
  _2FA47F7C65FEC19CC163B195725E3844:19,
}
var CFG_smell_noun = {
  "noun.common.thing.transport.4wheel": "car",
}
var CFG_smell_appositive = {
  "appositive.restrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  "appositive.nonrestrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_smell_verb = {
  "verb.present.passive": "stalled",
}
var CFG_smell_preposition = {
  "preposition.modifier.noun.00": "in",
  "preposition.modifier.noun.01": "on",
  "preposition.modifier.noun.02": "along",
  "preposition.modifier.noun.03": "beside",
  _2FA47F7C65FEC19CC163B195725E3844:4,
}
var CFG_smell_punctuation = {
  "punctuation.comma": ",",
  "punctuation.question": "?",
  "punctuation.exclamation": "!",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_smell_punctuation2 = {
  "punctuation.period": ".",
  "punctuation.question": "?",
  "punctuation.exclamation": "!",
  _2FA47F7C65FEC19CC163B195725E3844:3,
}
var CFG_smell_punctuation3 = {
  "punctuation.comma": ",",
}


var CFG_smell = {
  "root": {
    "article": CFG_smell_article,
    "pronoun": CFG_smell_pronoun,
    "interjection": CFG_smell_interjection,
    _2FA47F7C65FEC19CC163B195725E3844:3,
  },
  "article": {
    "noun": CFG_smell_noun,
  },
  "pronoun": {
    "noun": CFG_smell_noun,
  },
  "noun": {
    "verb": CFG_smell_verb,
    "appositive": CFG_smell_appositive,
    "preposition": CFG_smell_preposition,
    "article": CFG_smell_article,
    "punctuation3": CFG_smell_punctuation3,
    _2FA47F7C65FEC19CC163B195725E3844:5,
  },
  "verb": {
    "preposition": CFG_smell_preposition,
    "punctuation": CFG_smell_punctuation,
    "punctuation2": CFG_smell_punctuation2,
    "article": CFG_smell_article,
    "appositive": CFG_smell_appositive,
    _2FA47F7C65FEC19CC163B195725E3844:5,
  },
  "preposition": {
    "article": CFG_smell_article,
  },
  "appositive": {
    "punctuation": CFG_smell_punctuation,
    "punctuation2": CFG_smell_punctuation2,
    "punctuation3": CFG_smell_punctuation3,
    "verb": CFG_smell_verb,
    _2FA47F7C65FEC19CC163B195725E3844:4,
  },
  "interjection": {
    "punctuation": CFG_smell_punctuation,
    "punctuation2": CFG_smell_punctuation2,
    _2FA47F7C65FEC19CC163B195725E3844:2,
  },
  "punctuation": {
    "article": CFG_smell_article,
    "interjection": CFG_smell_interjection,
    _2FA47F7C65FEC19CC163B195725E3844:2,
  },  
  "punctuation3": {
    "verb": CFG_smell_verb,
    "article": CFG_smell_article,
    "preposition": CFG_smell_preposition,
    "appositive": CFG_smell_appositive,
    _2FA47F7C65FEC19CC163B195725E3844:4,
  },
}

/*

  TITLE
    _stage_02_sight.js
  
  AUTHOR  
    Seagat2011, Copyright (c) 2016
  
  REFERENCE
    N/A
    
  DESCRIPTION  
    Varied stage 02 tests
  
  INPUT
    N/A
    
  OUTPUT
    A grammatically correct sight-based sentence

  NOTES
    N/A
    
  INCLUDE
    _stage_*.*

*/

// [mr. Walker] now content [watches] the truck that was once fearsome fade from view
var CFG_sight_template = [
  [
    "pronoun",
    "verb",
    "article",
    "noun",
    "verb2",
    "preposition",
    "noun2",
    "punctuation",
  ],
]
var CFG_sight_article = {
  "article.definite": "the",
  "article.indefinite": "a",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_sight_pronoun = {
  "noun.pronoun.personal.person.third.singular.objective.masculine": "he",
  "noun.pronoun.proper.person.genitive": "mr. Walker",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_sight_noun = {
  "noun.common.thing.transport.4wheel.public": "road",
}
var CFG_sight_noun2 = {
  "noun.common.idea": "view",
}
var CFG_sight_appositive = {
  "appositive.restrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  "appositive.nonrestrictive.noun.common.thing.road.transport.4wheel.private": "driveway",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_sight_verb = {
  "verb.present.active.00": "watches",
  "verb.present.active.01": "sees",
  _2FA47F7C65FEC19CC163B195725E3844:2,
}
var CFG_sight_verb2 = {
  "verb.present.active": "fade",
}
var CFG_sight_preposition = {
  "preposition.modifier.noun.00": "from",
}
var CFG_sight_punctuation = {
  "punctuation.comma": ".",
}


var CFG_sight = {
  "root": {
    "pronoun": CFG_sight_pronoun,
  },
  "article": {
    "noun": CFG_sight_noun,
  },
  "pronoun": {
    "verb": CFG_sight_verb,
  },
  "noun": {
    "verb2": CFG_sight_verb2,
  },
  "noun2": {
    "punctuation": CFG_sight_punctuation,
    _2FA47F7C65FEC19CC163B195725E3844:2,
  },
  "verb": { 
    "article": CFG_sight_article,
  },
  "verb2": {
    "preposition": CFG_sight_preposition,
  },
  "preposition": {
    "noun2": CFG_sight_noun2,
  },
}