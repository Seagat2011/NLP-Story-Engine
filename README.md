# NLP-Story-Engine
Natural Language Processor interfaced with Wikipedia (JavaScript/JSON) and WordNet 3.0 (JavaScript/JSON) to generate 1,000-4,000 page juggernaut novels, and 4,000+ page jarganauts. 

### STORY as an EVENT
      A CLAUSE is a single irreducible EVENT, matching 1 of 5 patterns
        1. SUBJECT+VERB (eg [John] [walks])
        2. SUBJECT+VERB+OBJECT (eg [mice] [frighten] [elephants])
        3. SUBJECT+VERB+DIRECT_OBJECT+INDIRECT_OBJECT (eg [jan] [showed] [carl] the [book])
        4. SUBJECT+LINKING_VERB+SUBJECT_COMPLEMENT (eg the [fence] [was] [white])
        5. SUBJECT+VERB+DIRECT_OBJECT (eg [I] [painted] the [fence] white)
      Any BEAT, ACTION, SCENE, or SEQUENCE in a STORY is considered an EVENT
      A BEAT is a single irreducible EVENT 
        The overall state of ENTROPY during A BEAT never remains unchanged 
      A CLAUSE is equal to 1 BEAT
      ACTIONS are composed of 1+ CLAUSES (ie SENTENCES)
      PARAGRAPHS are composed of 1+ SENTENCES
       A PARAGRAPH always has a BEGINNING, MIDDLE, and END (met through search, attribute-tagging)
      SCENES are composed of 1+ ACTIONS
      SEQUENCES are composed of 1+ SCENES
        Each SEQUENCE undergoes a REVERSAL of emotion for the characters
        (met through word-connotation search, attribute-tagging)
      STORY is composed of 1+ SEQUENCES
      All are composed of 1+ sentences, and sentences are composed of VERB TENSORS
    
### VERB TENSORS 
      A VERB TENSOR is a verb that can expanded into a more descriptive CLAUSE
        
        EXAMPLE 
        
        Jack [washes] the dish        / 1 beat 
        Alex [ate] the sandwich       / 1 beat 
        Julie [swam] across the lake  / 1 beat 
        
        EXPANDING BEATS THROUGH VERB TENSOR EXPANSION 
        
        [
            [Jack:tired [stands] at sink:dry with dish:dirty], 
            [Jack:surprised [turns on] water:cold:splashes], 
            [Jack:drying [adds] detergent:sudsy], 
            [Jacks:recovering [applies] water:warm and [applies] detergent:sudsy to dish:clean],
        ] Goal : Jack washes the dish, reversal (+), beats: 4, scenes: 1, sequences: 1, story: 1
        [
            [Alex:seated [raises] bread:wheat sandwich:intact to face], 
            [Alex:stands [notices] mold:fresh on bread:smelly sandwich:separating], 
            [Alex:seated [removes] bread:wheat, [tossing] into trash], 
            [Alex:recovering [applies] bread:white sandwich:fresh to dish:clean],
        ] Goal : Alex ate the sandwich, reversal (-), beats: 4, scenes: 1, sequences: 1, story: 1
        [
            [Julie:excited [stands] at shore:vibrant of lake:people=>occupied:bustling], 
            [Julie:surprised [approaches] water-line:cold:splashes], 
            [Julie:cold [retreats] for a moment:people=>water:playful], 
            [Julie:recovering [dives] into water:patch=>warm and [swims]],
        ] Goal : Julie swam across the lake, reversal (+), beats: 4, scenes: 1, sequences: 1, story: 1 
        
      This NLP Story engine takes an EVENT (eg a clause), comprised of a single BEAT
        and expands the EVENT, and BEATS therein, in a balanced way, using VERB TENSOR EXPANSION, 
        until the BEATS create a STORY EVENT of desired length 
        
      An NLP Story engine exploits the use of VERB TENSOR EXPANSION
      
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
      README      - description
      GNU LICENSE - license of user's distribution / ownership rights
