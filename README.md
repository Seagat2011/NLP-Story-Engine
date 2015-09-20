# NLP-Story-Engine
Natural Language Processing Articficial Intelligence interfaced with Wikipedia (JavaScript/JSON) and WordNet 3.0 (JavaScript/JSON) to generate 1,000-4,000 page juggernaut novels, and 4,000+ page jarganaut. 

### STORY as an EVENT
      A CLAUSE is a single irreducible EVENT, in general matching 1 of 5 patterns
        1. SUBJECT+VERB (eg [John] [walks])
        2. SUBJECT+VERB+OBJECT (eg [mice] [frighten] [elephants])
        3. SUBJECT+VERB+DIRECT OBJECT+INDIRECT OBJECT (eg [jan] [showed] [carl] the [book])
        4. SUBJECT+LINKING VERB+SUBJECT COMPLEMENT (eg the [fence] [was] [white])
        5. SUBJECT+VERB+DIRECT OBJECT (eg [I] [painted] the [fence] white)
      Any BEAT, ACTION, SCENE, or SEQUENCE in a STORY is also considered an EVENT
      A BEAT is a single irreducible EVENT 
        The overall state of ENTROPY during A BEAT never remains unchanged 
      A CLAUSE is equal to 1 BEAT
      ACTIONS are composed of 1+ CLAUSES (ie SENTENCES)
      PARAGRAPHS are composed of 1+ SENTENCES
       A PARAGRAPH always has a BEGINNING, MIDDLE, and END (met through search, attribute-tagging)
      SCENES are composed of 1+ ACTIONS
      SEQUENCES are composed of 1+ SCENES
        Each SEQUENCE undergoes a REVERSAL of emotion for the characters
      STORY is composed of 1+ SEQUENCES
      Each are composed of 1+ sentences, and sentences are composed of VERB TENSORS
    
### VERB TENSORS 
      A VERB TENSOR is a verb that can expanded into
        a more descriptive sentence
        
        EXAMPLE 
        
        Jack [washes] the dish      / 1 beat 
        Alex [ate] the sandwich       / 1 beat 
        Julie [swam] across the lake  / 1 beat 
        
        EXPANDING BEATS THROUGH VERB TENSOR EXPANSION 
        
        [how jack washes the dish] 
        [how Alex eats the sandwish]
        [how Julie swims across the lake] 
        
      This NLP Story engine takes an EVENT (eg a clause), comprised of a single BEAT
        and expands the EVENT, and its BEATS therein, in a balanced way, through expanding VERB TENSORS, 
        until the BEATS create a STORY EVENT of desired length 
        
      An NLP Story engine exploits the expansion of VERB TENSORS
      
      The reverse can also be used to create a summarization tool

### ABOUT FILES 
      M1.js       - knowledgebase:
                    (hasa) relational database - offline 2015 Wikipedia (JavaScript/JSON) (open-source 51 GB) +
                    (isa) relational databasae - offline Wordnet 3.0 (JavaScript/JSON) (open-source 181 MB)
      M2.js       - state machine gen 
      M3.js       - state machine chooser 
      M3B.js      - strategem tool / Artificial consciousness  
      M4.js       - beats sheet / beat gen
      M5.js       - Narrator tool / POV tool
      MD5.js      - hash algorithm
      M6.js       - plot gen
      mentor.css  - CSS3 / styles
      mentor.htm  - HTML5 / interface
      mentor.js   - javascript / driver
      README      - gen description
      GNU LICENSE - license of user's distribution / ownership rights
