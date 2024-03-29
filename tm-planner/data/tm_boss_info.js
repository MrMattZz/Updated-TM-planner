//TM Boss HP increases 10% per nav level
//TM Boss Attack increases 5% per nav level
var tm_boss_info = {
    1808: [
        ['Moria', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Hancock', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Kuma', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        [['Dofla', 'mingo'], '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Mihawk', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    ],
    1853: [
        ['Marco', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Jozu', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Vista', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Ace', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['WB', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    ],
    1889: [
        ['Law', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Tashigi', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Sabo', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Bonney', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Cavendish', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    ],
    1916: {
        1364: ['Franky',  0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1532: ['Usopp', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1549: ['Robin', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1921: ['Zoro', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1916: ['Gear 4', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    1941: {
         410: ['Jinbe', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
         645: ['Whitey Bay', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1222: ['Oars Jr', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1851: ['Squard', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1941: ['Ace',  4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    1972: {
        1404: ['Luffy',  3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1467: ['Cavendish', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1536: ['Duval', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1926: ['Coby', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1972: ['Sabo',  4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    2000: {
         265: [['Meppo & ', 'Coby'], 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1491: [['Mr. 5 & ', 'Ms. Val'], 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1543: [['Usopp & ', 'Chopper'], 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1759: [['Brook & ', 'Pedro'], 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2000: [['Sanji & ', 'Zoro'], 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    2064: {
         459: ['Sengoku', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
         611: ['Purinpurin', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1423: ['T-Bone', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1983: [['Smoker & ', 'Tashigi'], 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2064: ['Kizaru', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    '2064_jpn': [
        ['Sengoku', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['T-Bone', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        [['Smoker & ', 'Tashigi'], '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Purinpurin', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        ['Kizaru', '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    ],
    2109: {
        2065: ['Pudding', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2076: ['Nami', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2080: ['Brook', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2082: ['Pedro', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1815: ['Sanji', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2109: ['Big Mom', 5, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    2137: {
         257: ['Izo', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1245: ['Luffy', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1806: ['Buggy', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1849: ['Akainu', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2137: ['Croc', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    2175: {
        1716: ['Caesar', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1880: ['Hody', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1895: ['Urouge', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2111: ['Kid', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2175: ['Jack', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    2211: {
         463: ['Satori', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1197: ['Ohm', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1253: ['Shura', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1341: ['Gedatsu', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2211: ['Eneru', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    2261: {
         777: ['Lucky Roux',  0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2046: ['Yasopp', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2256: ['Mihawk', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2257: ['Ace', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1770: ['Beckman', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2261: ['Shanks', 5, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    2299: {
        1300: ['Rebecca', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1306: ['Sugar', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2292: ['Vivi',  0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2297: ['Perona', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2295: ['Moria', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2299: ['Hancock', 5, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    2336: {
        1004: ['Sachi & Penguin', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0],
        1532: ['Usopp', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1593: ['Gear 4', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1749: ['Bepo', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        1412: ['Chopper', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
        2336: ['Law', 5, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    2387: {
        418: ['Doffy', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
       1091: ['X Drake', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
       1830: ['Caesar', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
       2230: ['Sheepshead', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
       2231: ['Jack',  4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0],
       2387: ['Kaido', 5, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    2362: {
        1413: ['Whitebeard',      3, '<span class="tooltiptext"><span class="tooltip-title">Premptives:</span> 3 Turn Delay Immunity, 3 Turn Percent Damage Reduction (80%), 3 Turn 1.1x ATK & Orb Boost </br>' + 
        '<span class="tooltip-title">Turn 3:</span> Blows away 2 crew members (3 Turns) <br/>' +
        '<span class="tooltip-title">HP < 50%</span> 3 Turn Slot Bind <br/>' +
        '<span class="tooltip-title">HP < 20%</span> 2.5x ATK as Damage' +
        '</span>', 0, 0, 0, 0, 0, 0, 0],
        1635: ['Brownbeard',     0, '<span class="tooltiptext"><span class="tooltip-title">Preemptive:</span> 3 Turn Paralysis <br/>' +
        '<span class="tooltip-title">Interrupt (ATK Boost):</span> Blow away 2 characters' +
        '</span>', 0, 0, 0, 0, 0, 0, 0],
        1882: ['Rayleigh',     2, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> 2 Turn Immunity, 2 Turn Special Rewind (Crew) <br/>' + 
        '<span class="tooltip-title">HP < 50%</span> 3 Turn Paralysis, 2 Turn Anti-Heal <br/>' +
        '<span class="tooltip-title">On Death:</span> 20% HP Recovery, 2 Turn Percent Damage Reduction (80%)' +
        '</span', 0, 0, 0, 0, 0, 0, 0],
        2197: ['Blackbeard',     1, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> 2 Turn Chain Coefficient Reduction (0.1x), 98 Turn Special Limit (2/Turn), All orbs to [BLOCK] <br/>' +
        '<span class="tooltip-title">Every Turn:</span> Remove Positive Buffs' +
        '</span>', 0, 0, 0, 0, 0, 0, 0],
        2362: ['Nami',      4, '<span class="tooltiptext"><span class="tooltip-title">Stage 6:</span> <br/>' +
        '<span class="tooltip-title">Preemptives:</span> 2 Turn Special Rewind, 5 Turn Despair <br/>' +
        '<span style="tooltip-title">Turn 1:</span> 1 Turn ATK Up (1.3x), 1 Turn Percent Damage Reduction (30%) <br/>' +
        '<span style="tooltip-title">Turn 2:</span> 99 Turn ATK Up (1.3x), 99 Turn Percent Damage Reduction (30%) <br/>' +
        '<span class="tooltip-title">Stage 7:</span> <br/>' +
        '<span class="tooltip-title">Preemptives:</span> 2 Turn Special Bind, 1 Turn Damage Threshold, 98 Turn Venom Immunity <br/>' +
        'Shuffles all orbs to [BLOCK] or [G] <br/>' +
        '<span class="tooltip-title">Interrupt (Delay):</span> Counter-Attack & Enrage (2x ATK) <br/>' +
        '<span class="tooltip-title">HP < 20%: </span> 1 Turn Damage Immunity, 9 Turn Special Rewind, 99 Turn End of Turn Damage (7300) <br/>' +
        '</span>', 0, 0, 0, 0, 0, 0, 0]
    },
    2469: {
        2240: ['Perospero', 3, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> 9 Turn Immunity, 9 Turn 15-Hit Barrier, 99 Turn End of Turn Damage (0.25x ATK) <br/>' +
        '<span class="tooltip-title">HP < 50% (Once):</span> Binds 2 Crew Members for 8 Turns <br/>' +
        '<span class="tooltip-title">HP < 20% (Once):</span> 5 Turn Despair for both captains <br/>' +
        '</span>', 720000, 4500, 1, 0.1, 0.05, 1200, 0.1],
        2344: ['Bavarois', 0, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> Changes right column to Empty, Left column to Badly Matching, 2-Turn ATK Down (50%) <br/>' +
        '<span class="tooltip-title">Turn 3:</span> Resummons Fodder with 2-Turn 1-Great hit barriers <br/>' +
        '</span>', 380000, 2800, 1, 0.1, 0.05, 1200, 0.1],
        2346: ['Galette',  2, '<span class="tooltiptext"><span class="tooltip-title">Stage 6:</span> <br/>' +
        '8 Turn Despair and 10 Turn Silence for both captains <br/>' +
        '<span class="tooltip-title">Stage 7:</span> <br/>' +
        '<span class="tooltip-title">Preemptives:</span> [STR] [DEX] [QCK] [PSY] [INT] orbs badly matching for 2 turns <br/>' +
        'Crew Special Limit (2 for 9 Turns) <br/>' +
        '<span class="tooltip-title">HP < 50%:</span> 3 Turn Crew Paralysis <br/>' +
        '</span>', 610000, 4190, 1, 0.1, 0.05, 1200, 0.1],
        2369: ['Montd\'Or', 1, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> Rewind Top Row and Middle Left Specials By 2 Turns, 5 Turn Slot Bind for Top Row, Changes all orbs to [BLOCK] <br/>' +
        '<span class="tooltip-title">On Death:</span> Deals 0.75x his ATK in damage <br/>' +
        '</span>', 520000, 3910, 1, 0.1, 0.05, 1200, 0.1],
        2234: ['Big Mom', 4, '<span class="tooltiptext"><span class="tooltip-title">Stage 6:</span> <br/>' +
        '<span class="tooltip-title">Preemptive:</span> Change all orbs to [BLOCK] <br/>' +
        '<span style="tooltip-title">HP < 50% (Once):</span> 4-Turn Chain Coefficient Reduction (x0.3) <br/>' +
        '<span class="tooltip-title">Stage 7:</span> <br/>' +
        '<span class="tooltip-title">Preemptives:</span> 98 Turn Delay, Poison, & Toxic Immunity <br/>' +
        '3 Turn Damage Reduction (70%) <br/>' +
        '6 Turn Bind Bottom Row <br/>' +
        'Shuffles all orbs to [BLOCK] or [G] <br/>' +
        '<span class="tooltip-title">Katakuri Left Alive:</span> Revives to Full HP, boosts own attack by 1.5x for 99 turns, crew special limit (1 for 99 turns), 2 turn damage immunity <br/>' +
        '<span class="tooltip-title">Big Mom Left Alive </span> Revives to Full HP, clears buffs, attack interval to 1, blows away 2 random sailors for 3 turns <br/>' +
        '<span class="tooltip-title">Big Mom HP < 50% (Once): </span> 5 Turn Increased Damage Received (x1.5), 3 Turn Crew Paralysis' +
        '</span>', 600000, 5500, 1, 0.1, 0.05, 5000, 0.1],
        2469: [['Smoothie & ', 'Oven'], 5, '<span class="tooltiptext"><span class="tooltip-title">Stage 2:</span> <br/>' +
        '<span style="color:lightgreen">Oven:</span> 98 Turns Defense Down Immunity, 4-Turn Defense Up <br/>' +
        'or <br/>' + 
        '<span style="color:goldenrod">Smoothie:</span> 4-Turn ATK Up (1.5x), 4-Turn Threshold Damage Reduction (20k) <br/>' +
        '<span class="tooltip-title">Stage 3:</span> <br/>' +
        '<span class="tooltip-title">Preemptives:</span> 3-Turn Chain Lock (1.2x) <br/>' +
        'Shuffles orbs to [EMPTY] or [BOMB] <br/>' +
        'Silences crew for 2 Turns <br/>' +
        '<span class="tooltip-title">Interrupt (ATK Boost):</span> Clears Buffs, 99 Turn ATK Down (99%) <br/>' +
        '<span class="tooltip-title">HP < 50% (Once): </span> Right Row slot bind 4 turns and changes all orbs to [BLOCK] <br/>' +
        '<span class="tooltip-title">HP < 20% (Once): </span> 70% HP Cut, 9 Turn Burn (3k/Perfect), 4 Turn Damage Threshold (99%)' +
        '</span>', 1200000, 5300, 1, 0.1, 0.05, 5000, 0.1]
    },
    2443: {
        1401: ['Gladius', 0, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> 6 Turn Despair, 3 Turn Damage Threshold (99% for Damage over 60k), Delay Immunity <br/>' +
        '<span class="tooltip-title">HP < 50% (Once):</span> 4 Turn Resilience <br/>' +
        '<span class="tooltip-title">HP < 20% (Once):</span> 80900 Damage <br/>' +
        '</span>', 809000, 4000, 1, 0.1, 0.05, 1200, 0.1],
        1902: ['Pica', 1, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> Makes Non-PSY orbs count as badly matching for 20 turns, 50% HP Cut, 2 Hit Perfect Barrier, All Debuff Immunity <br/>' + 
        '<span class="tooltip-title">On Death:</span> Recovers 300k Health, 4 Turn 300x Increased Defense, 4 Turn 1.5x ATK, Removes Perfect Barrier, Reduces CD to 1 <br/>' +
        '</span>', 1030100, 6301, 2, 0.1, 0.05, 1200, 0.1],
        1906: ['Sugar', 2, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> Change all orbs to [BOMB], [TND], [EMPTY], 1.5x ATK Boost for Mobs, 2 Turn HP & [PSY] Barrier for Mobs <br/>' +
        '</span>', 480000, 1755, 1, 0.1, 0.05, 1200, 0.1],
        2144: ['Diamante', 3, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> 3 Turn Special Rewind for Top & Middle Row, 5 Turn Special Silence for Bottom Right Character, 10 Turn End of Turn Damage (5k) <br/>' + 
        '<span class="tooltip-title">Turn 2:</span> Change to [QCK], 3 Turn 80% Damage Reduction from [DEX], Give all [EMPTY] orbs <br/>' +
        '</span>', 730000, 4401, 2, 0.1, 0.05, 1200, 0.1],
        2443: ['Doflamingo', 4, '<span class="tooltiptext"><span class="tooltip-title">Stage 6:</span> <br/>' +
        '<span class="tooltip-title">Preemptives:</span> 1 Turn Special Silence, 4 Turn Bind for Bottom Row <br/>' +
        '<span class="tooltip-title">Turn 2:</span> 4 Turn Despair, 3 Turn Character Paralysis <br/>' +
        '<span class="tooltip-title">Stage 7:</span> <br/>' +
        '<span class="tooltip-title">Preemptives:</span> Delay Immunity, 3 Turn 1.2x Chain Limit, 3 Turn 50% Damage Reduction, 2 Turn 2-hit Good Barrier <br/>' +
        '<span class="tooltip-title">Every Turn:</span> Gives all [BLOCK] orbs <br/>' +
        '<span class="tooltip-title">Every 3 Turns:</span> 3 Turn Anti-Heal, 4 Turn 1.5x ATK Boost, <br/>' +
        '<span class="tooltip-title">Interrupt (ATK Boost):</span> Clears buffs, 10 Turn Special Silence for all <br/>' +
        '<span class="tooltip-title">HP < 20%:</span> 1600000 Damage <br/>' +
        '</span>', 1100000, 4500, 1, 0.1, 0.05, 5000, 0.1],
        1943: ['Senor Pink', 5, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 5000, 0.1]
    },
    2510: {
         836: ['Kuma', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        1445: ['Hancock', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        2277: ['Buggy',  0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        2475: ['Mihawk', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        2510: ['Weevil', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 5000, 0.1]
    },
    2557: {
         860: ['Coby', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        1192: ['Aokiji', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        1780: ['Kizaru', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        2197: ['Blackbeard', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        1314: ['Akainu', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 5000, 0.1],
        2557: [['Shanks & ', 'Beckman'], 5, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 5000, 0.1]
    },
    2583: {
         963: ['Charlos', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
         964: ['Roswald', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        1595: ['Fujitora', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        2340: ['Stussy', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        2583: ['Lucci', 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 5000, 0.1]
    },
    2618: {
         927: ['Doberman', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        1320: ['Tsuru', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        2251: ['Garp', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        2605: ['Coby', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 1200, 0.1],
        2618: [['Sakazuki & ', 'Issho'], 4, '<span class="tooltiptext">TBD</span>', 0, 0, 0, 0, 0, 5000, 0.1]
    },
    2659: {
        1974: ['Hawkins', 1, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> Counter-Attack, 3 Turn Blind, STR/QCK/INT Badly Matching for 9 Turns <br/>' +
        '<span style="tooltip-title">Every Turn:</span> Increases received damage by 0.1x and deals Counter Damage <br/>' +
        '<span style="tooltip-title">After 2 (1) turns (and every 2 turns after):</span> Counter-Attack' +
        '</span>', 690000, 5600, 2, 0.1, 0.05, 1200, 0.1],
        2302: ['Bege', 3, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> 3 Turn Crew Special Silence, 3 Turn Percent Damage Reduction, Changes all orbs to [STR] [DEX] [QCK] [PSY] [INT] or [BLOCK]  <br/>' +
        '<span style="tooltip-title">After 3 (2) turns (Once):</span> 3 Turn Enrage <br/>' +
        '<span style="tooltip-title">On Death:</span> Heals to 30% HP, changes Type to DEX, summons 5 Mobs and Slot Seals Captain & Friend Captain for 10 turns' +
        '</span>', 400000, 4280, 1, 0.1, 0.05, 1200, 0.1],
        2642: ['Kid & Killer', 0, '<span class="tooltiptext"><span class="tooltip-title">Preemptives:</span> 19 Turn ATK Down for STR/DEX/PSY, All orbs to PSY/INT, 6 Turn Despair <br/>' +
        '<span style="tooltip-title">HP < 50% (Once):</span> 3 Turn Crew Paralysis, 5 Turns Increased Damage Taken (1.5x) <br/>' +
        '<span style="tooltip-title">HP < 20% (Once):</span> Deals 2x ATK in damage, 99 Turn End of Turn Damage (0.75x ATK)' +
        '</span>', 540000, 4444, 1, 0.1, 0.05, 1200, 0.1],
        2644: ['Drake & Urouge', 2, '<span class="tooltiptext"><span class="tooltip-title">Preemptive:</span> 99 Turn Immunity <br/>' +
        '<span style="tooltip-title">After 1 Turn (Once):</span> Boosts ATK by 1.2x for 1 turn, heals to 80% HP <br/>' +
        '<span style="tooltip-title">After 2 Turns (Once):</span> Boosts ATK by 1.4x for 1 turn, heals to 80% HP <br/>' +
        '<span style="tooltip-title">After 3 Turns (Once):</span> Boosts ATK by 1.7x for 1 turn, heals to 80% HP' +
        '</span>', 580000, 3800, 1, 0.1, 0.05, 1200, 0.1],
        2633: ['Luffy', 4, '<span class="tooltiptext"><span class="tooltip-title">Stage 6:</span> <br/>' +
        '<span class="tooltip-title">Preemptivse:</span> 2 Turn Perfect Barrier, 99 Turn Delay Immunity <br/>' +
        '<span style="tooltip-title">After 1 turn (every 3 turns after):</span> Binds 3 Random Characters for 5 turns <br/>' +
        '<span class="tooltip-title">Stage 7:</span> <br/>' +
        '<span class="tooltip-title">Preemptives:</span> 3 Turn Special Silence for QCK/DEX/PSY, 5 Turn Chain Lock (1.01x) <br/>' +
        '<span class="tooltip-title">After 1 turn (Once):</span> 99 Turn Immunity, 99 Turn Enrage (1.5x ATK) <br/>' +
        '<span class="tooltip-title">Below 20% HP (Once): </span> 8 Turn Resilience' +
        '</span>', 1000000, 4300, 1, 0.1, 0.05, 5000, 0.1],
        2659: ['Smoker', 5, '<span class="tooltiptext"><span class="tooltip-title">Stage 2:</span> <br/>' +
        '<span style="color:goldenrod">Tashigi:</span> 99 Turn Matching Orb Rate Down, Changes all Orbs to [STR] [DEX] [QCK] [PSY] [INT] Orbs, 7 Turns Chain Coefficient Reduction, Has 2 PSY, 1 INT mobs <br/>' +
        '<span class="tooltip-title">Stage 3:</span> <br/>' +
        '<span class="tooltip-title">Preemptives:</span> Changes to random type, 99 Turn Immunity  <br/>' +
        '<span class="tooltip-title">Interrupt (Orb Boost):</span> All Orbs Block  <br/>' +
        '<span class="tooltip-title">HP < 50% (Once):</span> 3 Turn Damage Threshold ( Over 50k Reduced by 99%), Cuts HP by 50% <br/>' +
        '<span class="tooltip-title">HP < 20% (Once): </span> 50 Turn Despair' +
        '</span>', 1700000, 5800, 1, 0.1, 0.05, 5000, 0.1]
    },
    2690: {
         418: ['Doflamingo', 0, '<span class="tooltiptext">TBD</span>', 0, 0, 1, 0.1, 0.05, 1200, 0.1],
        1278: ['Doc Q', 2, '<span class="tooltiptext">TBD</span>', 0, 0, 1, 0.1, 0.05, 1200, 0.1],
         972: ['Pacifista', 3, '<span class="tooltiptext">TBD</span>', 0, 0, 1, 0.1, 0.05, 1200, 0.1],
        1274: ['Burgess', 1, '<span class="tooltiptext">TBD</span>', 0, 0, 1, 0.1, 0.05, 1200, 0.1],
        2690: ['Blackbeard', 4, '<span class="tooltiptext">TBD</span>', 1400000, 4200, 1, 0.1, 0.05, 4000, 0.1],
        1313: ['Akainu', 5, '<span class="tooltiptext">TBD</span>', 0, 0, 1, 0.1, 0.05, 4000, 0.1]
   },
    9999: [
        ['',            ''],
        ['',            ''],
        ['',            ''],
        ['',            ''],
        ['',            '']
    ],
    //[Boss Name, Position in Planner, Tooltip Description, Base HP, Base ATK, Cooldown, HP Growth Rate, ATK Growth Rate, Base Points, Point Growth Rate]
};