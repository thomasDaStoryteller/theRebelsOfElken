import { QuestWithViews } from "./types";

export const questData: QuestWithViews[] = [
  {
    gm: {
      id: "q01-smuggle-refugee-column",
      title: "Smuggle a Refugee Column",
      category: "Smuggling",
      // in general, avoid referencing the party in present tense like "The families look to you with pleading eyes". these are briefs given to the rebellion as a whole not specific to the party.
      hook: "Desperate families have gathered in the old warehouse district, clutching what little they could carry. The Flowrunner tunnels offer their only hope of escape from the city's tightening grip, but the journey through the underground passages is treacherous and long. These refugees need more than just hope—they need food to sustain them through days of travel, sturdy carts to carry the elderly and children, and supplies to survive the harsh conditions below. Without proper preparation, this exodus could become a death march. The families look to you with pleading eyes, knowing that their survival depends on the resources you can provide.",
      costR: 2,
      success: { H: 5, S: 5 },
      failure: { U: -5, R: -5, O: 5 },
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
        {
          label: "Stealth Kit",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Ignore first failed Stealth/Deception",
        },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Crab Surveyor patrol", "Flooding", "Rival smugglers"],
      ties: ["Flowrunners", "Drach's patrols"],
    },
    player: {
      title: "Smuggle a Refugee Column",
      hook: "Desperate families have gathered in the old warehouse district, clutching what little they could carry. The Flowrunner tunnels offer their only hope of escape from the city's tightening grip, but the journey through the underground passages is treacherous and long. These refugees need more than just hope—they need food to sustain them through days of travel, sturdy carts to carry the elderly and children, and supplies to survive the harsh conditions below. Without proper preparation, this exodus could become a death march. The families look to you with pleading eyes, knowing that their survival depends on the resources you can provide.",
    },
  },
  {
    gm: {
      id: "q02-safehouse-evacuation",
      title: "Safehouse Evacuation",
      category: "Smuggling",
      // this hook is great adding things like how the rebellion discovered the safehouse is compromised. also having missions where you can recruit or rendezvous with spys in the guard or city government to create the feeling that the parties work is building off itself
      hook: "The safehouse that has sheltered dozens of families for months has been compromised. A trusted contact was captured during a routine supply run, and under interrogation, they revealed the location of the underground sanctuary. The Guard is mobilizing for a raid, and you have perhaps hours—maybe less—to evacuate everyone before the hammer falls. Children are crying, parents are frantically gathering their meager possessions, and the elderly are struggling to move quickly enough. The escape routes are limited, the tunnels are treacherous, and every moment of delay increases the risk of discovery. The weight of dozens of lives rests on your ability to coordinate this desperate flight to safety.",
      costR: 0,
      success: { H: 5, U: 5 },
      failure: { U: -5, R: -5, O: 5 },
      optionalInvestments: [
        {
          label: "Stealth Kit",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Ignore first failed Stealth/Deception",
        },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Guard sweeps", "Collapsing tunnels", "Panic"],
      ties: ["Haven leaders"],
    },
    player: {
      title: "Safehouse Evacuation",
      hook: "The safehouse that has sheltered dozens of families for months has been compromised. A trusted contact was captured during a routine supply run, and under interrogation, they revealed the location of the underground sanctuary. The Guard is mobilizing for a raid, and you have perhaps hours—maybe less—to evacuate everyone before the hammer falls. Children are crying, parents are frantically gathering their meager possessions, and the elderly are struggling to move quickly enough. The escape routes are limited, the tunnels are treacherous, and every moment of delay increases the risk of discovery. The weight of dozens of lives rests on your ability to coordinate this desperate flight to safety.",
    },
  },
  {
    gm: {
      id: "q03-heal-wounded-haven",
      title: "Heal the Wounded at the Haven",
      category: "Smuggling",
      hook: "The Haven has become a makeshift hospital, but it's overwhelmed beyond capacity. Makeshift cots line every available space, and the air is thick with the sounds of moaning, crying, and whispered prayers. Refugees who escaped the city's violence now lie wounded and dying, their injuries ranging from minor cuts to life-threatening wounds. The few healers who remain are exhausted, their supplies nearly depleted, and their spirits crushed by the endless tide of suffering. Without immediate medical supplies, clean bandages, and healing herbs, many of these people will not survive the night. The Haven's leaders beg for your help, knowing that every resource you provide could mean the difference between life and death for someone's loved one.",
      costR: 1,
      success: { U: 10, H: 5 },
      failure: { U: -5, O: 5 },
      //   oppression values should be lower as the maximum is 10 don't want players to be playing an obundence of missions in this system.
      failureNotes:
        "Failure/Refusal applies Unity -5 next session; Oppression +5 on success due to visibility.",
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: [
        "Hidden devourer infection",
        "Ration fights",
        "Guard suspicion",
      ],
      ties: ["Haven leaders"],
    },
    player: {
      title: "Heal the Wounded at the Haven",
      hook: "The Haven has become a makeshift hospital, but it's overwhelmed beyond capacity. Makeshift cots line every available space, and the air is thick with the sounds of moaning, crying, and whispered prayers. Refugees who escaped the city's violence now lie wounded and dying, their injuries ranging from minor cuts to life-threatening wounds. The few healers who remain are exhausted, their supplies nearly depleted, and their spirits crushed by the endless tide of suffering. Without immediate medical supplies, clean bandages, and healing herbs, many of these people will not survive the night. The Haven's leaders beg for your help, knowing that every resource you provide could mean the difference between life and death for someone's loved one.",
    },
  },
  {
    gm: {
      id: "q04-smuggle-arcane-healers",
      title: "Smuggle Arcane Healers",
      category: "Smuggling",
      //   nothing so arcane and unknown is necessary.infection is plenty dangerous enough.
      hook: "A secretive circle of arcane healers, known for their ability to mend wounds that conventional medicine cannot touch, has been discovered by the Guard. These practitioners of forbidden arts have been hiding in the city's underbelly, using their mystical abilities to heal the most desperate cases. Now they're trapped, their safe house surrounded, and their escape routes cut off. The Haven's wounded are dying—not from simple injuries, but from curses, magical wounds, and infections that only these healers can cure. Time is running out, and without their intervention, the Haven will lose not just lives, but hope itself. The healers have sent a desperate message: they can save many, but only if you can reach them first.",
      costR: 2,
      success: { H: 10, U: 5 },
      failure: { H: -10, O: 10 },
      optionalInvestments: [
        {
          label: "Stealth Kit",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Ignore first failed Stealth/Deception",
        },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Plague patrol", "Healer panic/betrayal"],
      ties: ["Haven medics"],
    },
    player: {
      title: "Smuggle Arcane Healers",
      hook: "A secretive circle of arcane healers, known for their ability to mend wounds that conventional medicine cannot touch, has been discovered by the Guard. These practitioners of forbidden arts have been hiding in the city's underbelly, using their mystical abilities to heal the most desperate cases. Now they're trapped, their safe house surrounded, and their escape routes cut off. The Haven's wounded are dying—not from simple injuries, but from curses, magical wounds, and infections that only these healers can cure. Time is running out, and without their intervention, the Haven will lose not just lives, but hope itself. The healers have sent a desperate message: they can save many, but only if you can reach them first.",
    },
  },
  {
    gm: {
      id: "q05-protect-water-carriers",
      title: "Protect the Water Carriers",
      category: "Smuggling",
      //   the underground water is typically quite clean due to the advent of arcanotech. Plus the rebellion has the support of the plumbers union who will be knowledgeable about water purification. having a mission where there is a threat that the guards will poison the water may be more appropriate.
      hook: "The Haven's water supply has become a lifeline that the Guard is determined to cut. Every day, brave volunteers venture into the dangerous outskirts to gather water from the few uncontaminated sources, knowing that each trip could be their last. These water carriers face not just the constant threat of Guard patrols, but also the treacherous terrain, contaminated wells, and the ever-present danger of ambush. Without their daily runs, the Haven would face dehydration, disease, and despair. The carriers are exhausted, their numbers dwindling, and their spirits flagging under the constant pressure. They need protection, support, and hope that their vital mission can continue. The lives of everyone in the Haven depend on keeping these water lines open.",
      costR: 0,
      success: { H: 10, U: 5 },
      failure: { H: -10, O: 5 },
      optionalInvestments: [
        {
          label: "Stealth Kit",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Ignore first failed Stealth/Deception",
        },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Ambush", "Collapsing bridge"],
      ties: ["Haven quartermasters"],
    },
    player: {
      title: "Protect the Water Carriers",
      hook: "The Haven's water supply has become a lifeline that the Guard is determined to cut. Every day, brave volunteers venture into the dangerous outskirts to gather water from the few uncontaminated sources, knowing that each trip could be their last. These water carriers face not just the constant threat of Guard patrols, but also the treacherous terrain, contaminated wells, and the ever-present danger of ambush. Without their daily runs, the Haven would face dehydration, disease, and despair. The carriers are exhausted, their numbers dwindling, and their spirits flagging under the constant pressure. They need protection, support, and hope that their vital mission can continue. The lives of everyone in the Haven depend on keeping these water lines open.",
    },
  },
  {
    gm: {
      id: "q06-lost-caravan",
      title: "Lost Caravan",
      category: "Smuggling",
      hook: "The Haven's most critical supply caravan has vanished without a trace. This wasn't just any shipment—it carried life-saving medicines, precious food stores, and essential supplies that the Haven desperately needs to survive the coming weeks. The caravan was supposed to arrive three days ago, and every hour of delay means more suffering, more deaths, and more despair among the refugees. The route was carefully planned, the drivers were experienced, and the cargo was irreplaceable. Now you must retrace their path through dangerous territory, following clues that grow colder with each passing day. The Guard may have already found them, or worse, they may have fallen victim to bandits, natural disasters, or the many other perils that lurk in the wasteland. Time is running out, and the Haven's survival may depend on what you find.",
      costR: 0,
      success: { R: 2, H: 1 },
      failure: { R: -1, S: -1, O: 1 },
      optionalInvestments: [
        {
          label: "Stealth Kit",
          costR: 1,
          ruleText: "Ignore first failed Survival/Perception",
        },
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
      ],
      complications: ["Thieves", "Cursed cargo", "Guard scouts"],
      ties: ["Haven logistics"],
    },
    player: {
      title: "Lost Caravan",
      hook: "The Haven's most critical supply caravan has vanished without a trace. This wasn't just any shipment—it carried life-saving medicines, precious food stores, and essential supplies that the Haven desperately needs to survive the coming weeks. The caravan was supposed to arrive three days ago, and every hour of delay means more suffering, more deaths, and more despair among the refugees. The route was carefully planned, the drivers were experienced, and the cargo was irreplaceable. Now you must retrace their path through dangerous territory, following clues that grow colder with each passing day. The Guard may have already found them, or worse, they may have fallen victim to bandits, natural disasters, or the many other perils that lurk in the wasteland. Time is running out, and the Haven's survival may depend on what you find.",
    },
  },
  {
    gm: {
      id: "q07-guard-harassment-patrol",
      title: "Guard Harassment Patrol",
      category: "Smuggling",
      //   there are several notable market places in the city but i like this mission. but let's give this market place a spisific name that we can build off later that will be rooted around a certain culture
      hook: "The market square, once a place of commerce and community, has become a scene of daily terror. A particularly brutal Guard patrol has taken to extorting the vendors, demanding protection money, confiscating goods, and making examples of those who resist. The merchants are terrified, their families are hungry, and their livelihoods are being systematically destroyed. The patrol's cruelty knows no bounds—they've beaten elderly vendors, stolen from children, and left families destitute. The people are losing hope, and the market that once symbolized the city's resilience is becoming a symbol of oppression. Someone must stand up to these bullies, not just to save the vendors, but to show the people that resistance is possible. The time has come to drive these tyrants from the streets and restore hope to the marketplace.",
      costR: 0,
      success: { H: 10, U: 5 },
      failure: { H: -10, O: 5 },
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Civilians at risk", "Hidden devourer"],
      ties: ["Market guilds"],
    },
    player: {
      title: "Guard Harassment Patrol",
      hook: "The market square, once a place of commerce and community, has become a scene of daily terror. A particularly brutal Guard patrol has taken to extorting the vendors, demanding protection money, confiscating goods, and making examples of those who resist. The merchants are terrified, their families are hungry, and their livelihoods are being systematically destroyed. The patrol's cruelty knows no bounds—they've beaten elderly vendors, stolen from children, and left families destitute. The people are losing hope, and the market that once symbolized the city's resilience is becoming a symbol of oppression. Someone must stand up to these bullies, not just to save the vendors, but to show the people that resistance is possible. The time has come to drive these tyrants from the streets and restore hope to the marketplace.",
    },
  },
  {
    gm: {
      id: "q08-shelter-collapse-rescue",
      title: "Shelter Collapse Rescue",
      category: "Smuggling",
      //   love this mission.
      hook: "The ancient sewer chamber that has served as a hidden refuge for months has collapsed without warning. The sound of falling masonry and terrified screams echoes through the underground tunnels as families are trapped beneath tons of rubble. The chamber was already unstable, weakened by years of neglect and the constant vibration of the city above, but no one expected it to give way so suddenly. Now refugees are buried alive, their cries for help growing weaker as the hours pass. The collapse has also damaged the water systems, and rising floodwaters threaten to drown anyone still trapped. Every moment of delay could mean another life lost. The rescue effort is dangerous—the remaining structure is unstable, the tunnels are flooding, and the noise could attract unwanted attention. But these are your people, and you cannot abandon them to this underground tomb.",
      costR: 0,
      success: { H: 10, U: 10 },
      failure: { H: -10, O: 5 },
      optionalInvestments: [
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
        {
          label: "Tool Cache",
          costR: 1,
          effectOnSuccess: { R: 1 },
          ruleText: "Shoring tools speed rescue",
        },
      ],
      complications: ["Flooding", "Unstable rubble", "Noise draws patrols"],
      ties: ["Haven leaders"],
    },
    player: {
      title: "Shelter Collapse Rescue",
      hook: "The ancient sewer chamber that has served as a hidden refuge for months has collapsed without warning. The sound of falling masonry and terrified screams echoes through the underground tunnels as families are trapped beneath tons of rubble. The chamber was already unstable, weakened by years of neglect and the constant vibration of the city above, but no one expected it to give way so suddenly. Now refugees are buried alive, their cries for help growing weaker as the hours pass. The collapse has also damaged the water systems, and rising floodwaters threaten to drown anyone still trapped. Every moment of delay could mean another life lost. The rescue effort is dangerous—the remaining structure is unstable, the tunnels are flooding, and the noise could attract unwanted attention. But these are your people, and you cannot abandon them to this underground tomb.",
    },
  },
  {
    gm: {
      id: "q09-spirit-lantern-recovery",
      title: "Spirit Lantern Recovery",
      category: "Smuggling",
      //   undead are not a high threat in the underground. naturally it's more creatures that have built a thriving ecosystem after the underground stopped being a sewer system. also possibility of extra planar creatures and rifts opening in the underground. also the flowrunners are the name of a cell of the rebellion not an old established group. their only a few months old and have no ancient traditions or artifacts
      hook: "The Flowrunners' most sacred artifacts have been lost in the deepest, most dangerous tunnels beneath the city. These ancient spirit lanterns are not mere objects—they are conduits of power that keep the restless dead at bay and maintain the delicate balance between the living and the spirit world. Without them, the underground passages have become haunted by angry spirits, their wails echoing through the tunnels and driving travelers to madness. The Flowrunners are terrified, knowing that their people cannot survive in a world where the dead walk freely among the living. The lanterns were lost during a desperate escape from a Guard patrol, and now they lie somewhere in the most treacherous depths of the underground network. The spirits grow more restless with each passing day, and soon their anger may spill into the Haven itself. Someone must brave the haunted depths to recover these sacred artifacts before the spirit world tears itself apart.",
      costR: 1,
      success: { H: 10, S: 5 },
      failure: { S: -1, O: 1 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
        {
          label: "Warm the Crowd",
          costR: 1,
          effectOnSuccess: { H: 5 },
          ruleText: "Ritual comforts",
        },
      ],
      complications: ["Ghostly apparitions", "ArcanoTech anomalies"],
      ties: ["Flowrunner elders"],
    },
    player: {
      title: "Spirit Lantern Recovery",
      hook: "The Flowrunners' most sacred artifacts have been lost in the deepest, most dangerous tunnels beneath the city. These ancient spirit lanterns are not mere objects—they are conduits of power that keep the restless dead at bay and maintain the delicate balance between the living and the spirit world. Without them, the underground passages have become haunted by angry spirits, their wails echoing through the tunnels and driving travelers to madness. The Flowrunners are terrified, knowing that their people cannot survive in a world where the dead walk freely among the living. The lanterns were lost during a desperate escape from a Guard patrol, and now they lie somewhere in the most treacherous depths of the underground network. The spirits grow more restless with each passing day, and soon their anger may spill into the Haven itself. Someone must brave the haunted depths to recover these sacred artifacts before the spirit world tears itself apart.",
    },
  },

  {
    gm: {
      id: "q10-sabotage-veymar-rally",
      title: "Sabotage a Veymar Rally",
      category: "Propaganda",
      hook: "The charismatic demagogue Veymar has called for a massive rally in the central square, and the city is abuzz with anticipation. His silver tongue has already swayed thousands to his cause, and this gathering promises to be his most powerful display of oratory yet. The crowd is expected to be enormous, filled with desperate people looking for someone to blame for their suffering. Veymar's rhetoric is dangerous—he preaches division, hatred, and violence, turning neighbor against neighbor and stoking the fires of civil unrest. If he succeeds in inflaming this crowd, the city could erupt into chaos, making it impossible for the resistance to operate safely. The time has come to disrupt his carefully orchestrated performance, to expose the lies behind his honeyed words, and to show the people that there is another way. But doing so will require courage, cunning, and the willingness to face the wrath of both Veymar and his fanatical followers.",
      costR: 0,
      success: { H: 10, S: 5, O: -5 },
      failure: { H: -5, O: 5 },
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
        {
          label: "Stealth Kit",
          costR: 1,
          ruleText: "Ignore first failed Deception",
          effectOnSuccess: { S: 5 },
        },
      ],
      complications: ["Zealot students", "Magical surveillance", "Riots"],
      ties: ["Veymar's clique"],
    },
    player: {
      title: "Sabotage a Veymar Rally",
      hook: "The charismatic demagogue Veymar has called for a massive rally in the central square, and the city is abuzz with anticipation. His silver tongue has already swayed thousands to his cause, and this gathering promises to be his most powerful display of oratory yet. The crowd is expected to be enormous, filled with desperate people looking for someone to blame for their suffering. Veymar's rhetoric is dangerous—he preaches division, hatred, and violence, turning neighbor against neighbor and stoking the fires of civil unrest. If he succeeds in inflaming this crowd, the city could erupt into chaos, making it impossible for the resistance to operate safely. The time has come to disrupt his carefully orchestrated performance, to expose the lies behind his honeyed words, and to show the people that there is another way. But doing so will require courage, cunning, and the willingness to face the wrath of both Veymar and his fanatical followers.",
    },
  },
  {
    gm: {
      id: "q11-print-spread-pamphlets",
      title: "Print & Spread Counter-Pamphlets",
      category: "Propaganda",
      hook: "The underground printing press has been discovered, and the censors are closing in. For months, this hidden operation has been the city's only source of uncensored news, exposing the Guard's lies and spreading hope among the oppressed. The press operators have risked everything to keep the truth flowing, but now their time is running out. The Guard has identified the location, and a raid is imminent. Before the press is destroyed and the operators are captured, one final batch of pamphlets must be printed and distributed throughout the city. These documents contain crucial information that could change everything—evidence of corruption, plans for resistance, and messages of hope that could inspire the people to action. The distribution network is already in place, but the window of opportunity is closing fast. The truth must reach the people before the censors silence it forever.",
      costR: 1,
      success: { H: 10, U: 5 },
      failure: { S: -1, O: 1 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
      ],
      complications: ["Informants", "Glyph tracking"],
      ties: ["Selvara's censors"],
    },
    player: {
      title: "Print & Spread Counter-Pamphlets",
      hook: "The underground printing press has been discovered, and the censors are closing in. For months, this hidden operation has been the city's only source of uncensored news, exposing the Guard's lies and spreading hope among the oppressed. The press operators have risked everything to keep the truth flowing, but now their time is running out. The Guard has identified the location, and a raid is imminent. Before the press is destroyed and the operators are captured, one final batch of pamphlets must be printed and distributed throughout the city. These documents contain crucial information that could change everything—evidence of corruption, plans for resistance, and messages of hope that could inspire the people to action. The distribution network is already in place, but the window of opportunity is closing fast. The truth must reach the people before the censors silence it forever.",
    },
  },
  {
    gm: {
      id: "q12-expose-governor-feast",
      title: "Expose the Governor's Feast",
      category: "Propaganda",
      //   the city does not have a governor. It has a council, of 12 members. the decadence may be of note but it's likely that some council members would not partake. there will be notes of mystery regarding what the motivation and impetus fot the tyrannical rule.
      hook: "While the city starves and families go hungry, the Governor and his inner circle are preparing for an extravagant feast that would feed a hundred families for a month. The opulence is staggering—imported delicacies, rare wines, and entertainment that costs more than most citizens earn in a year. The feast is being held in secret, behind closed doors, but the evidence is there for those who know where to look. The contrast between the suffering of the people and the decadence of their rulers is a powder keg waiting to explode. If the truth about this feast reaches the starving masses, it could spark the very revolution that the resistance has been working toward. But exposing this information is dangerous—the Governor's spies are everywhere, and those who speak out against the regime often disappear. The time has come to shine a light on this corruption and let the people see exactly who is responsible for their suffering.",
      costR: 0,
      success: { H: 2, O: -1 },
      failure: { S: -1, O: 1 },
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
      ],
      complications: ["Guard mages", "Noble spies", "Witnesses silenced"],
      ties: ["Magistrates' circle"],
    },
    player: {
      title: "Expose the Governor's Feast",
      hook: "While the city starves and families go hungry, the Governor and his inner circle are preparing for an extravagant feast that would feed a hundred families for a month. The opulence is staggering—imported delicacies, rare wines, and entertainment that costs more than most citizens earn in a year. The feast is being held in secret, behind closed doors, but the evidence is there for those who know where to look. The contrast between the suffering of the people and the decadence of their rulers is a powder keg waiting to explode. If the truth about this feast reaches the starving masses, it could spark the very revolution that the resistance has been working toward. But exposing this information is dangerous—the Governor's spies are everywhere, and those who speak out against the regime often disappear. The time has come to shine a light on this corruption and let the people see exactly who is responsible for their suffering.",
    },
  },
  {
    gm: {
      id: "q13-counterfeit-orders",
      title: "Counterfeit Orders",
      category: "Propaganda",
      //   love it, though lines like "could change the course of the resistance forever" are too grandiose. in a way. the resistance is new and has plans to be over as soon as possible. not a long running global or national rebellion. it's one city state.
      hook: "A talented scribe within the Guard's bureaucracy has secretly joined the resistance, and their skills could be the key to turning the system against itself. This individual has access to official seals, knows the exact format of Guard orders, and can forge documents that would fool even the most suspicious officers. The opportunity is unprecedented—with carefully crafted false orders, entire patrols could be redirected away from sensitive areas, supply convoys could be sent to the wrong locations, and the Guard's own bureaucracy could be used to create chaos and confusion. But this operation is incredibly dangerous. If the scribe is discovered, they will face execution, and the resistance will lose a valuable asset. The forged orders must be perfect in every detail, and the timing must be precise. One mistake could expose the entire network and bring down the wrath of the Guard on everyone involved. The stakes have never been higher, but the potential rewards could change the course of the resistance forever.",
      costR: 1,
      success: { S: 10, U: 5 },
      failure: { U: -5, R: -5, O: 5 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Rival scribe betrays", "Order audits"],
      ties: ["Selvara's bureaucracy"],
    },
    player: {
      title: "Counterfeit Orders",
      hook: "A talented scribe within the Guard's bureaucracy has secretly joined the resistance, and their skills could be the key to turning the system against itself. This individual has access to official seals, knows the exact format of Guard orders, and can forge documents that would fool even the most suspicious officers. The opportunity is unprecedented—with carefully crafted false orders, entire patrols could be redirected away from sensitive areas, supply convoys could be sent to the wrong locations, and the Guard's own bureaucracy could be used to create chaos and confusion. But this operation is incredibly dangerous. If the scribe is discovered, they will face execution, and the resistance will lose a valuable asset. The forged orders must be perfect in every detail, and the timing must be precise. One mistake could expose the entire network and bring down the wrath of the Guard on everyone involved. The stakes have never been higher, but the potential rewards could change the course of the resistance forever.",
    },
  },
  {
    gm: {
      id: "q14-inspire-the-masses",
      title: "Inspire the Masses",
      category: "Propaganda",
      hook: "The annual Harvest Festival approaches, and the city is preparing for what should be a time of celebration and unity. But this year, the festival has become a symbol of everything that is wrong with the current regime. The people are hungry, the streets are filled with fear, and the traditional festivities have been replaced with forced displays of loyalty to the Governor. The resistance sees this as an opportunity—a chance to stage a bold public display that could inspire the masses and show them that change is possible. The plan is audacious: during the festival's main ceremony, when the entire city is watching, the resistance will make their presence known in a way that cannot be ignored. But the risks are enormous. The Guard will be out in force, and any sign of resistance will be met with brutal violence. The choice is stark: inspire the people with a message of hope, or invite a massacre that could crush the resistance forever.",
      costR: 0,
      success: { H: 3, U: 1, O: 1 },
      failure: { H: -10, O: 10 },
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
        {
          label: "Stealth Kit",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Diversions reduce heat",
        },
      ],
      complications: ["Crackdown", "Riot risk"],
      ties: ["Citizen circles"],
    },
    player: {
      title: "Inspire the Masses",
      hook: "The annual Harvest Festival approaches, and the city is preparing for what should be a time of celebration and unity. But this year, the festival has become a symbol of everything that is wrong with the current regime. The people are hungry, the streets are filled with fear, and the traditional festivities have been replaced with forced displays of loyalty to the Governor. The resistance sees this as an opportunity—a chance to stage a bold public display that could inspire the masses and show them that change is possible. The plan is audacious: during the festival's main ceremony, when the entire city is watching, the resistance will make their presence known in a way that cannot be ignored. But the risks are enormous. The Guard will be out in force, and any sign of resistance will be met with brutal violence. The choice is stark: inspire the people with a message of hope, or invite a massacre that could crush the resistance forever.",
    },
  },
  {
    gm: {
      id: "q15-spread-songs",
      title: "Spread Songs in the Streets",
      category: "Propaganda",
      hook: "The city's bards and musicians have been silenced for too long, their voices choked by fear and censorship. But now they are ready to rise again, to use their art as a weapon against oppression. These brave performers want to take to the streets and taverns, singing rebel ballads that tell the truth about the regime and inspire hope in the hearts of the people. Their songs are powerful—they speak of freedom, justice, and the dream of a better tomorrow. But performing these songs is incredibly dangerous. The Guard has ears everywhere, and anyone caught singing seditious lyrics will face imprisonment or worse. The bards need protection, cover, and a network of safe spaces where they can perform without fear of immediate arrest. They need allies who can create distractions, provide escape routes, and ensure that their message reaches as many people as possible. The power of music to inspire and unite should not be underestimated, but neither should the risks of using it as a tool of resistance.",
      costR: 0,
      success: { H: 10, U: 5 },
      failure: { H: -10, O: 5 },
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
      ],
      complications: ["Guard raid", "Loyalist spies"],
      ties: ["Martha's artist network"],
    },
    player: {
      title: "Spread Songs in the Streets",
      hook: "The city's bards and musicians have been silenced for too long, their voices choked by fear and censorship. But now they are ready to rise again, to use their art as a weapon against oppression. These brave performers want to take to the streets and taverns, singing rebel ballads that tell the truth about the regime and inspire hope in the hearts of the people. Their songs are powerful—they speak of freedom, justice, and the dream of a better tomorrow. But performing these songs is incredibly dangerous. The Guard has ears everywhere, and anyone caught singing seditious lyrics will face imprisonment or worse. The bards need protection, cover, and a network of safe spaces where they can perform without fear of immediate arrest. They need allies who can create distractions, provide escape routes, and ensure that their message reaches as many people as possible. The power of music to inspire and unite should not be underestimated, but neither should the risks of using it as a tool of resistance.",
    },
  },
  {
    gm: {
      id: "q16-secret-library",
      title: "Secret Library",
      category: "Propaganda",
      hook: "Deep beneath the city, in the forgotten chambers of the ancient sewer system, lies a treasure trove of knowledge that could change everything. A secret library has been discovered, filled with forbidden books, revolutionary texts, and the accumulated wisdom of generations of scholars who dared to think differently. This hidden repository of knowledge could become the intellectual heart of the resistance, a place where scholars and rebels can meet, share ideas, and plan for a better future. But the library's existence is a closely guarded secret, and its discovery by the Guard would mean the destruction of irreplaceable knowledge and the imprisonment or execution of everyone involved. The library needs protection, organization, and a network of trusted individuals who can access its resources safely. The knowledge contained within these walls could inspire the next generation of leaders, but only if it can be preserved and shared without falling into the wrong hands.",
      costR: 2,
      success: { U: 2, H: 2 },
      failure: { S: -1, R: -1, O: 2 },
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Raid & book burnings", "Cave-in"],
      ties: ["University allies"],
    },
    player: {
      title: "Secret Library",
      hook: "Deep beneath the city, in the forgotten chambers of the ancient sewer system, lies a treasure trove of knowledge that could change everything. A secret library has been discovered, filled with forbidden books, revolutionary texts, and the accumulated wisdom of generations of scholars who dared to think differently. This hidden repository of knowledge could become the intellectual heart of the resistance, a place where scholars and rebels can meet, share ideas, and plan for a better future. But the library's existence is a closely guarded secret, and its discovery by the Guard would mean the destruction of irreplaceable knowledge and the imprisonment or execution of everyone involved. The library needs protection, organization, and a network of trusted individuals who can access its resources safely. The knowledge contained within these walls could inspire the next generation of leaders, but only if it can be preserved and shared without falling into the wrong hands.",
    },
  },
  {
    gm: {
      id: "q17-smuggle-printing-press",
      title: "Smuggle a Printing Press",
      category: "Propaganda",
      hook: "The resistance has acquired a printing press, a powerful tool that could revolutionize their ability to spread information and inspire the people. This press can produce thousands of leaflets, pamphlets, and broadsheets in a single night, flooding the city with truth and hope. But getting this precious cargo to its destination is a nightmare of logistics and danger. The press must be smuggled through the treacherous river tunnels, where the water is rising, the passages are unstable, and the Guard's patrols are constant. The press is heavy, fragile, and irreplaceable—if it's damaged or discovered, the resistance will lose their most powerful weapon of information warfare. The smugglers must navigate through flooded chambers, avoid detection by both the Guard and the dangerous creatures that lurk in the depths, and ensure that their precious cargo reaches the hidden printing facility intact. The fate of the resistance may depend on this single, dangerous journey through the heart of darkness.",
      costR: 2,
      success: { H: 10, U: 5 },
      failure: { S: -2, R: -1, O: 2 },
      optionalInvestments: [
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
      ],
      complications: ["Crab pursuit", "Unstable cargo"],
      ties: ["Underground presses"],
    },
    player: {
      title: "Smuggle a Printing Press",
      hook: "The resistance has acquired a printing press, a powerful tool that could revolutionize their ability to spread information and inspire the people. This press can produce thousands of leaflets, pamphlets, and broadsheets in a single night, flooding the city with truth and hope. But getting this precious cargo to its destination is a nightmare of logistics and danger. The press must be smuggled through the treacherous river tunnels, where the water is rising, the passages are unstable, and the Guard's patrols are constant. The press is heavy, fragile, and irreplaceable—if it's damaged or discovered, the resistance will lose their most powerful weapon of information warfare. The smugglers must navigate through flooded chambers, avoid detection by both the Guard and the dangerous creatures that lurk in the depths, and ensure that their precious cargo reaches the hidden printing facility intact. The fate of the resistance may depend on this single, dangerous journey through the heart of darkness.",
    },
  },
  {
    gm: {
      id: "q18-lantern-vigil",
      title: "Lantern Vigil",
      category: "Propaganda",
      hook: "The people have found a way to speak without words, to protest without violence, and to show their unity without risking their lives. The lantern vigil has become a powerful symbol of resistance—citizens lighting candles in their windows as a silent protest against the regime. This simple act of defiance has spread throughout the city, creating a network of light that shows the people are not alone in their suffering. But the Guard has taken notice, and they are determined to crush this peaceful resistance. Patrols are smashing candles, arresting those who participate, and spreading fear among the citizens. The vigil needs protection, coordination, and a way to continue despite the Guard's efforts to silence it. The light of hope must not be extinguished, but keeping it burning will require courage, cunning, and the willingness to stand together against oppression.",
      costR: 0,
      success: { H: 10, U: 5 },
      failure: { H: -10, O: 5 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
      ],
      complications: ["Patrol raids", "Spies smash candles"],
      ties: ["Neighborhood committees"],
    },
    player: {
      title: "Lantern Vigil",
      hook: "The people have found a way to speak without words, to protest without violence, and to show their unity without risking their lives. The lantern vigil has become a powerful symbol of resistance—citizens lighting candles in their windows as a silent protest against the regime. This simple act of defiance has spread throughout the city, creating a network of light that shows the people are not alone in their suffering. But the Guard has taken notice, and they are determined to crush this peaceful resistance. Patrols are smashing candles, arresting those who participate, and spreading fear among the citizens. The vigil needs protection, coordination, and a way to continue despite the Guard's efforts to silence it. The light of hope must not be extinguished, but keeping it burning will require courage, cunning, and the willingness to stand together against oppression.",
    },
  },

  {
    gm: {
      id: "q19-shared-training-drills",
      title: "Shared Training Drills",
      category: "Unity",
      hook: "The resistance is fractured, with different groups operating in isolation and often at cross-purposes. The Union veterans, hardened by years of conflict, have skills that could transform the Flowrunner scouts from desperate refugees into a formidable fighting force. But bringing these two groups together is like mixing oil and water—the veterans are disciplined and methodical, while the Flowrunners are improvisational and independent. The training sessions are tense, with old grudges and cultural differences threatening to erupt into violence. The veterans want to impose military discipline, while the Flowrunners resist what they see as authoritarian control. Someone must oversee these sessions, mediating conflicts, preventing accidents, and ensuring that both groups can learn from each other without destroying the fragile unity that holds the resistance together. The stakes are high—if the training succeeds, the resistance will have a unified, skilled force. If it fails, the resulting infighting could tear the movement apart.",
      costR: 1,
      success: { U: 2, H: 1 },
      failure: { U: -5, O: 5 },
      optionalInvestments: [
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
      ],
      complications: ["Hotheads", "Guard intrusion", "Unstable grounds"],
      ties: ["Leo's allies"],
    },
    player: {
      title: "Shared Training Drills",
      hook: "The resistance is fractured, with different groups operating in isolation and often at cross-purposes. The Union veterans, hardened by years of conflict, have skills that could transform the Flowrunner scouts from desperate refugees into a formidable fighting force. But bringing these two groups together is like mixing oil and water—the veterans are disciplined and methodical, while the Flowrunners are improvisational and independent. The training sessions are tense, with old grudges and cultural differences threatening to erupt into violence. The veterans want to impose military discipline, while the Flowrunners resist what they see as authoritarian control. Someone must oversee these sessions, mediating conflicts, preventing accidents, and ensuring that both groups can learn from each other without destroying the fragile unity that holds the resistance together. The stakes are high—if the training succeeds, the resistance will have a unified, skilled force. If it fails, the resulting infighting could tear the movement apart.",
    },
  },
  {
    gm: {
      id: "q20-council-of-cells",
      title: "Council of Cells",
      category: "Unity",
      hook: "The resistance has reached a critical juncture, and the leaders of all the major cells have been called together for a strategic council. This meeting could determine the future of the entire movement, but bringing these proud, independent leaders together is like herding cats. Each cell has its own agenda, its own methods, and its own suspicions about the others. The Union veterans distrust the Flowrunners' chaotic approach, the Flowrunners resent the veterans' rigid discipline, and both groups are suspicious of the underground networks that operate in the shadows. The council is a powder keg of egos, grudges, and competing visions for the future. Someone must mediate these discussions, prevent the inevitable arguments from escalating into violence, and find a way to forge a unified strategy that all the cells can support. The fate of the resistance hangs in the balance, and the wrong word at the wrong time could shatter the fragile alliance forever.",
      costR: 0,
      success: { U: 3 },
      failure: { U: -2, O: 1 },
      optionalInvestments: [
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
        {
          label: "Stealth Kit",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Hidden venue prevents disruption",
        },
      ],
      complications: ["Spy reveals location", "Heated arguments"],
      ties: ["Bree & Eliah"],
    },
    player: {
      title: "Council of Cells",
      hook: "The resistance has reached a critical juncture, and the leaders of all the major cells have been called together for a strategic council. This meeting could determine the future of the entire movement, but bringing these proud, independent leaders together is like herding cats. Each cell has its own agenda, its own methods, and its own suspicions about the others. The Union veterans distrust the Flowrunners' chaotic approach, the Flowrunners resent the veterans' rigid discipline, and both groups are suspicious of the underground networks that operate in the shadows. The council is a powder keg of egos, grudges, and competing visions for the future. Someone must mediate these discussions, prevent the inevitable arguments from escalating into violence, and find a way to forge a unified strategy that all the cells can support. The fate of the resistance hangs in the balance, and the wrong word at the wrong time could shatter the fragile alliance forever.",
    },
  },
  {
    gm: {
      id: "q21-underground-tournament",
      title: "Underground Tournament",
      category: "Unity",
      hook: "The young fighters of the resistance are restless, eager to prove their worth and test their skills against their peers. They demand a tournament—a chance to compete, to show their strength, and to earn the respect of their comrades. But organizing such an event in the underground is fraught with danger. The tournament must be held in secret, away from the prying eyes of the Guard, and the noise of combat could attract unwanted attention. The fighters are passionate and competitive, and without proper oversight, the tournament could devolve into chaos, with old grudges and wounded pride leading to serious injuries or even death. But if run properly, the tournament could be a powerful tool for building unity, allowing the different cells to come together in friendly competition and mutual respect. The stakes are high—success could forge stronger bonds between the resistance groups, while failure could create lasting divisions that weaken the entire movement.",
      costR: 1,
      success: { U: 2, H: 1 },
      failure: { U: -1 },
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Injuries", "Sabotage", "Guard hears noise"],
      ties: ["Ember Rats"],
    },
    player: {
      title: "Underground Tournament",
      hook: "The young fighters of the resistance are restless, eager to prove their worth and test their skills against their peers. They demand a tournament—a chance to compete, to show their strength, and to earn the respect of their comrades. But organizing such an event in the underground is fraught with danger. The tournament must be held in secret, away from the prying eyes of the Guard, and the noise of combat could attract unwanted attention. The fighters are passionate and competitive, and without proper oversight, the tournament could devolve into chaos, with old grudges and wounded pride leading to serious injuries or even death. But if run properly, the tournament could be a powerful tool for building unity, allowing the different cells to come together in friendly competition and mutual respect. The stakes are high—success could forge stronger bonds between the resistance groups, while failure could create lasting divisions that weaken the entire movement.",
    },
  },
  {
    gm: {
      id: "q22-festival-of-lanterns",
      title: "Festival of Lanterns",
      category: "Unity",
      hook: "The refugees have been living in darkness for too long, both literally and figuratively. They yearn for a night of light and song, a chance to celebrate their culture and lift their spirits in the face of overwhelming oppression. The Festival of Lanterns is a traditional celebration that has been forbidden by the regime, but the people are determined to keep their customs alive. The festival would bring together refugees from different backgrounds, allowing them to share their stories, their music, and their hope for a better future. But organizing such an event is incredibly dangerous. The Guard has banned all public gatherings, and the discovery of the festival could lead to mass arrests, violence, and the destruction of the Haven. The refugees need protection, coordination, and a way to celebrate their heritage without putting themselves at risk. The festival could be a powerful symbol of resistance and unity, but it could also be a disaster that destroys everything the resistance has built.",
      costR: 1,
      success: { H: 3, U: 1, O: 1 },
      failure: { H: -10, O: 5 },
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
      ],
      complications: ["Patrol raid", "Crowd panic"],
      ties: ["Haven communities"],
    },
    player: {
      title: "Festival of Lanterns",
      hook: "The refugees have been living in darkness for too long, both literally and figuratively. They yearn for a night of light and song, a chance to celebrate their culture and lift their spirits in the face of overwhelming oppression. The Festival of Lanterns is a traditional celebration that has been forbidden by the regime, but the people are determined to keep their customs alive. The festival would bring together refugees from different backgrounds, allowing them to share their stories, their music, and their hope for a better future. But organizing such an event is incredibly dangerous. The Guard has banned all public gatherings, and the discovery of the festival could lead to mass arrests, violence, and the destruction of the Haven. The refugees need protection, coordination, and a way to celebrate their heritage without putting themselves at risk. The festival could be a powerful symbol of resistance and unity, but it could also be a disaster that destroys everything the resistance has built.",
    },
  },
  {
    gm: {
      id: "q23-message-old-guard",
      title: "Message from the Old Guard",
      category: "Unity",
      hook: "A recording has been discovered, hidden in the ruins of an old safe house. It contains the final message of a fallen hero, a leader of the resistance who gave their life fighting for freedom. The recording is powerful, filled with words of hope, courage, and determination that could inspire the entire movement. The fallen hero speaks of sacrifice, of the importance of standing together, and of the belief that the resistance will ultimately triumph. But the recording is also dangerous—it contains information that could compromise current operations, and the Guard would stop at nothing to destroy it. The message must be spread discreetly, reaching the right people at the right time, without alerting the authorities. The recording could be the spark that ignites a new wave of resistance, but it could also be the catalyst for a devastating crackdown. The fate of the movement may depend on how this message is handled.",
      costR: 0,
      success: { H: 2 },
      failure: { S: -1, O: 1 },
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
      ],
      complications: ["Magical interference", "Spies intercept"],
      ties: ["People's Sword legacy"],
    },
    player: {
      title: "Message from the Old Guard",
      hook: "A recording has been discovered, hidden in the ruins of an old safe house. It contains the final message of a fallen hero, a leader of the resistance who gave their life fighting for freedom. The recording is powerful, filled with words of hope, courage, and determination that could inspire the entire movement. The fallen hero speaks of sacrifice, of the importance of standing together, and of the belief that the resistance will ultimately triumph. But the recording is also dangerous—it contains information that could compromise current operations, and the Guard would stop at nothing to destroy it. The message must be spread discreetly, reaching the right people at the right time, without alerting the authorities. The recording could be the spark that ignites a new wave of resistance, but it could also be the catalyst for a devastating crackdown. The fate of the movement may depend on how this message is handled.",
    },
  },
  {
    gm: {
      id: "q24-build-hidden-sanctuary",
      title: "Build a Hidden Sanctuary",
      category: "Unity",
      hook: "Deep beneath the city, in the most remote and forgotten tunnels, lies a sacred shrine that has been abandoned for generations. This ancient place of worship could become the neutral ground that the resistance desperately needs—a place where different cells can meet, discuss strategy, and forge alliances without fear of betrayal or violence. The shrine is hidden, protected by its remote location and the superstitions that surround it, but it is also in ruins, its walls crumbling and its sacred spaces defiled by time and neglect. Restoring the shrine would be a massive undertaking, requiring resources, skilled workers, and the cooperation of multiple factions. But if successful, the shrine could become the spiritual heart of the resistance, a place where the different groups can come together in peace and unity. The risks are enormous—the restoration could attract unwanted attention, and the shrine's location could be compromised. But the potential rewards could change the course of the resistance forever.",
      costR: 2,
      success: { U: 2, S: 1 },
      failure: { U: -5, R: -5, O: 5 },
      optionalInvestments: [
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
      ],
      complications: ["Collapse risk", "Cursed relics", "Spirits"],
      ties: ["Inter-faction clerics"],
    },
    player: {
      title: "Build a Hidden Sanctuary",
      hook: "Deep beneath the city, in the most remote and forgotten tunnels, lies a sacred shrine that has been abandoned for generations. This ancient place of worship could become the neutral ground that the resistance desperately needs—a place where different cells can meet, discuss strategy, and forge alliances without fear of betrayal or violence. The shrine is hidden, protected by its remote location and the superstitions that surround it, but it is also in ruins, its walls crumbling and its sacred spaces defiled by time and neglect. Restoring the shrine would be a massive undertaking, requiring resources, skilled workers, and the cooperation of multiple factions. But if successful, the shrine could become the spiritual heart of the resistance, a place where the different groups can come together in peace and unity. The risks are enormous—the restoration could attract unwanted attention, and the shrine's location could be compromised. But the potential rewards could change the course of the resistance forever.",
    },
  },
  {
    gm: {
      id: "q25-forge-a-symbol",
      title: "Forge a Symbol",
      category: "Unity",
      hook: "The resistance needs a symbol—a banner, an emblem, or a flag that can unite all the different cells under a single identity. A powerful symbol can inspire hope, rally the people, and give the movement a sense of purpose and direction. But creating such a symbol is fraught with danger and controversy. The different cells have their own traditions, their own symbols, and their own ideas about what the resistance should represent. Forging a unified symbol requires compromise, diplomacy, and the ability to find common ground among groups that are often at odds with each other. The symbol must be created in secret, away from the prying eyes of the Guard, and its unveiling must be carefully orchestrated to maximize its impact. But the risks are enormous—if the symbol is discovered before it's ready, it could lead to a devastating crackdown. And if the different cells can't agree on the symbol's design, the resulting conflict could tear the resistance apart. The fate of the movement may depend on finding a symbol that everyone can rally behind.",
      costR: 1,
      success: { H: 10, U: 10 },
      failure: { H: -10, O: 5 },
      optionalInvestments: [
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
      ],
      complications: ["Symbol disputes", "Infiltrators"],
      ties: ["Sword leadership"],
    },
    player: {
      title: "Forge a Symbol",
      hook: "The resistance needs a symbol—a banner, an emblem, or a flag that can unite all the different cells under a single identity. A powerful symbol can inspire hope, rally the people, and give the movement a sense of purpose and direction. But creating such a symbol is fraught with danger and controversy. The different cells have their own traditions, their own symbols, and their own ideas about what the resistance should represent. Forging a unified symbol requires compromise, diplomacy, and the ability to find common ground among groups that are often at odds with each other. The symbol must be created in secret, away from the prying eyes of the Guard, and its unveiling must be carefully orchestrated to maximize its impact. But the risks are enormous—if the symbol is discovered before it's ready, it could lead to a devastating crackdown. And if the different cells can't agree on the symbol's design, the resulting conflict could tear the resistance apart. The fate of the movement may depend on finding a symbol that everyone can rally behind.",
    },
  },
  {
    gm: {
      id: "q26-underground-parliament",
      title: "Underground Parliament",
      category: "Unity",
      hook: "The civilians of the Haven are tired of being led by others—they want a voice in their own destiny. They demand representation, a council where they can discuss their concerns, make decisions about their community, and have a say in the resistance's strategy. Forming such a council would be a powerful step toward true unity, giving the people a sense of ownership and investment in the movement's success. But creating an underground parliament is incredibly dangerous. The Guard is always looking for signs of organized resistance, and a formal council would be a prime target for infiltration and destruction. The council would need to operate in complete secrecy, with careful protocols to prevent discovery and betrayal. The civilians are passionate and determined, but they lack the experience and discipline needed to maintain operational security. Someone must guide them through the process, teaching them how to organize, how to keep secrets, and how to make decisions that won't compromise the entire resistance. The stakes are high—success could create a truly democratic resistance, while failure could lead to the destruction of the Haven.",
      costR: 0,
      success: { U: 3 },
      failure: { U: -2, S: -1, O: 1 },
      optionalInvestments: [
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Factional disputes", "Spies"],
      ties: ["Haven citizen leaders"],
    },
    player: {
      title: "Underground Parliament",
      hook: "The civilians of the Haven are tired of being led by others—they want a voice in their own destiny. They demand representation, a council where they can discuss their concerns, make decisions about their community, and have a say in the resistance's strategy. Forming such a council would be a powerful step toward true unity, giving the people a sense of ownership and investment in the movement's success. But creating an underground parliament is incredibly dangerous. The Guard is always looking for signs of organized resistance, and a formal council would be a prime target for infiltration and destruction. The council would need to operate in complete secrecy, with careful protocols to prevent discovery and betrayal. The civilians are passionate and determined, but they lack the experience and discipline needed to maintain operational security. Someone must guide them through the process, teaching them how to organize, how to keep secrets, and how to make decisions that won't compromise the entire resistance. The stakes are high—success could create a truly democratic resistance, while failure could lead to the destruction of the Haven.",
    },
  },
  {
    gm: {
      id: "q27-alliance-river-folk",
      title: "Alliance with River Folk",
      category: "Unity",
      hook: "Deep in the underground rivers and waterways that crisscross beneath the city, there are rumors of strange folk who have made their home in the watery depths. These river-dwellers are mysterious, their culture unknown, their intentions unclear. But they could be powerful allies if approached with care and respect. The river folk have knowledge of the underground waterways that the resistance desperately needs, and their unique abilities could provide crucial advantages in the fight against the Guard. But reaching out to them is incredibly dangerous. The river folk are secretive and suspicious, and a wrong move could turn them into enemies. The underground rivers are treacherous, filled with dangerous creatures and hidden perils, and the journey to find the river folk could be deadly. The resistance needs someone who can navigate these dangerous waters, both literally and figuratively, and forge an alliance that could change the course of the resistance. But the risks are enormous—failure could mean death, and success could mean the difference between victory and defeat.",
      costR: 1,
      success: { U: 2, S: 1 },
      failure: { U: -5, O: 5 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
      ],
      complications: ["Miscommunication", "Wildlife", "Arcane accidents"],
      ties: ["Flowrunner diplomats"],
    },
    player: {
      title: "Alliance with River Folk",
      hook: "Deep in the underground rivers and waterways that crisscross beneath the city, there are rumors of strange folk who have made their home in the watery depths. These river-dwellers are mysterious, their culture unknown, their intentions unclear. But they could be powerful allies if approached with care and respect. The river folk have knowledge of the underground waterways that the resistance desperately needs, and their unique abilities could provide crucial advantages in the fight against the Guard. But reaching out to them is incredibly dangerous. The river folk are secretive and suspicious, and a wrong move could turn them into enemies. The underground rivers are treacherous, filled with dangerous creatures and hidden perils, and the journey to find the river folk could be deadly. The resistance needs someone who can navigate these dangerous waters, both literally and figuratively, and forge an alliance that could change the course of the resistance. But the risks are enormous—failure could mean death, and success could mean the difference between victory and defeat.",
    },
  },

  {
    gm: {
      id: "q28-shadow-the-spies",
      title: "Shadow the Spies",
      category: "Secrecy",
      hook: "The resistance has been compromised, and a known informer has been spotted following rebel operatives through the city streets. This informer is dangerous—they have already betrayed several safe houses and led to the capture of key resistance members. But they are also a potential source of valuable intelligence. By tracking the informer back to their handler, the resistance could uncover the entire spy network that has been infiltrating their operations. The informer must be followed carefully, without alerting them to the surveillance, and the handler must be identified before they can escape or call for reinforcements. The operation is incredibly dangerous—if the informer realizes they are being followed, they could lead the resistance into a trap. And if the handler is discovered, they could be a powerful enemy with resources and connections that could destroy the entire movement. The stakes are high, but the potential rewards could turn the tide of the resistance.",
      costR: 0,
      success: { S: 2, O: -1 },
      failure: { S: -1, O: 1 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
      ],
      complications: ["Ambush", "Handler is devourer host"],
      ties: ["Selvara's spy web"],
    },
    player: {
      title: "Shadow the Spies",
      hook: "The resistance has been compromised, and a known informer has been spotted following rebel operatives through the city streets. This informer is dangerous—they have already betrayed several safe houses and led to the capture of key resistance members. But they are also a potential source of valuable intelligence. By tracking the informer back to their handler, the resistance could uncover the entire spy network that has been infiltrating their operations. The informer must be followed carefully, without alerting them to the surveillance, and the handler must be identified before they can escape or call for reinforcements. The operation is incredibly dangerous—if the informer realizes they are being followed, they could lead the resistance into a trap. And if the handler is discovered, they could be a powerful enemy with resources and connections that could destroy the entire movement. The stakes are high, but the potential rewards could turn the tide of the resistance.",
    },
  },
  {
    gm: {
      id: "q29-silent-bells",
      title: "Silent Bells",
      category: "Secrecy",
      hook: "The city's bell towers are more than just architectural landmarks—they are the Guard's early warning system, designed to spread alarm throughout the city at the first sign of trouble. When the bells ring, they can mobilize the entire Guard force in minutes, turning a small operation into a city-wide manhunt. The resistance has learned this lesson the hard way, losing several operatives because the bells alerted the Guard to their presence. Now, a critical operation is planned, and the bells must be silenced before they can sound the alarm. The bell towers are heavily guarded, their keepers loyal to the regime, and their mechanisms protected by both physical and magical defenses. The operation requires stealth, precision, and the ability to disable the bells without alerting the guards or triggering any backup systems. The stakes are enormous—if the bells ring, the entire operation will fail, and the resistance will lose not just the mission, but potentially the lives of everyone involved. The silence of the bells could mean the difference between success and disaster.",
      costR: 0,
      success: { S: 1, O: -1 },
      failure: { S: -2, O: 2 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Loyalist bell keepers", "Archers"],
      ties: ["Guard signaling"],
    },
    player: {
      title: "Silent Bells",
      hook: "The city's bell towers are more than just architectural landmarks—they are the Guard's early warning system, designed to spread alarm throughout the city at the first sign of trouble. When the bells ring, they can mobilize the entire Guard force in minutes, turning a small operation into a city-wide manhunt. The resistance has learned this lesson the hard way, losing several operatives because the bells alerted the Guard to their presence. Now, a critical operation is planned, and the bells must be silenced before they can sound the alarm. The bell towers are heavily guarded, their keepers loyal to the regime, and their mechanisms protected by both physical and magical defenses. The operation requires stealth, precision, and the ability to disable the bells without alerting the guards or triggering any backup systems. The stakes are enormous—if the bells ring, the entire operation will fail, and the resistance will lose not just the mission, but potentially the lives of everyone involved. The silence of the bells could mean the difference between success and disaster.",
    },
  },
  {
    gm: {
      id: "q30-counter-scrying-ritual",
      title: "Counter-Scrying Ritual",
      category: "Secrecy",
      hook: "The Guard's diviners have been using powerful scrying magic to track the movements of resistance operatives through the underground tunnels. These magical eyes can see through walls, follow targets across great distances, and reveal the locations of safe houses and meeting places. The resistance has been operating in constant fear of discovery, knowing that every move they make could be watched by unseen eyes. But there is a way to fight back—an ancient counter-scrying ritual that can create a shield of magical protection around the resistance cells. The ritual is complex and dangerous, requiring rare components, skilled practitioners, and the cooperation of multiple resistance groups. If successful, it could blind the Guard's diviners and give the resistance the freedom to operate without constant surveillance. But if the ritual fails, it could alert the Guard to the resistance's magical capabilities and lead to a devastating counterattack. The stakes are high, but the potential rewards could change the course of the resistance forever.",
      costR: 1,
      success: { S: 3 },
      failure: { S: -2, O: 2 },
      optionalInvestments: [
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
      ],
      complications: ["Backlash", "Cult interference"],
      ties: ["Selvara's diviners"],
    },
    player: {
      title: "Counter-Scrying Ritual",
      hook: "The Guard's diviners have been using powerful scrying magic to track the movements of resistance operatives through the underground tunnels. These magical eyes can see through walls, follow targets across great distances, and reveal the locations of safe houses and meeting places. The resistance has been operating in constant fear of discovery, knowing that every move they make could be watched by unseen eyes. But there is a way to fight back—an ancient counter-scrying ritual that can create a shield of magical protection around the resistance cells. The ritual is complex and dangerous, requiring rare components, skilled practitioners, and the cooperation of multiple resistance groups. If successful, it could blind the Guard's diviners and give the resistance the freedom to operate without constant surveillance. But if the ritual fails, it could alert the Guard to the resistance's magical capabilities and lead to a devastating counterattack. The stakes are high, but the potential rewards could change the course of the resistance forever.",
    },
  },
  {
    gm: {
      id: "q31-sabotage-arcano-relay",
      title: "Sabotage Arcano-Relay Tower",
      category: "Secrecy",
      hook: "The Guard's command and control network relies on a series of arcane relay towers that allow instant communication between different units and headquarters. These towers are the backbone of the Guard's operational efficiency, enabling them to coordinate patrols, share intelligence, and respond to threats with unprecedented speed. But this network is also their greatest vulnerability. If one of these relay towers is destroyed, it could cripple the Guard's ability to coordinate their forces, creating chaos and confusion that the resistance could exploit. The relay towers are heavily guarded, their mechanisms protected by both physical and magical defenses, and their destruction would be considered an act of war. The operation requires precision, stealth, and the ability to cause maximum damage while minimizing the risk to the resistance. The stakes are enormous—success could give the resistance a crucial advantage, while failure could lead to a devastating counterattack that could destroy the entire movement.",
      costR: 2,
      success: { O: -2, S: 1 },
      failure: { S: -2, R: -1, O: 2 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Guard mages", "Exploding crystals"],
      ties: ["Drach's network"],
    },
    player: {
      title: "Sabotage Arcano-Relay Tower",
      hook: "The Guard's command and control network relies on a series of arcane relay towers that allow instant communication between different units and headquarters. These towers are the backbone of the Guard's operational efficiency, enabling them to coordinate patrols, share intelligence, and respond to threats with unprecedented speed. But this network is also their greatest vulnerability. If one of these relay towers is destroyed, it could cripple the Guard's ability to coordinate their forces, creating chaos and confusion that the resistance could exploit. The relay towers are heavily guarded, their mechanisms protected by both physical and magical defenses, and their destruction would be considered an act of war. The operation requires precision, stealth, and the ability to cause maximum damage while minimizing the risk to the resistance. The stakes are enormous—success could give the resistance a crucial advantage, while failure could lead to a devastating counterattack that could destroy the entire movement.",
    },
  },
  {
    gm: {
      id: "q32-steal-governor-seal",
      title: "Steal the Governor's Seal",
      category: "Secrecy",
      hook: "The Governor's arcane seal is more than just a symbol of authority—it is a powerful magical artifact that can authenticate official documents, bypass security measures, and grant access to restricted areas throughout the city. With this seal, the resistance could forge decrees, pass through checkpoints, and operate with the full authority of the regime. The seal is kept in the Governor's private chambers, protected by layers of security, magical wards, and loyal guards. Stealing it would be an act of incredible audacity, requiring infiltration of the most secure location in the city. The operation is fraught with danger—if discovered, the resistance would face the full wrath of the regime, and the seal's theft could trigger a city-wide manhunt. But if successful, the seal could give the resistance unprecedented freedom to operate, allowing them to move through the city with impunity and access resources that were previously out of reach. The stakes are enormous, but the potential rewards could change the course of the resistance forever.",
      costR: 1,
      success: { S: 2, U: 2 },
      failure: { S: -2, R: -1, O: 2 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Noble guards", "Traps"],
      ties: ["Magistrates' office"],
    },
    player: {
      title: "Steal the Governor's Seal",
      hook: "The Governor's arcane seal is more than just a symbol of authority—it is a powerful magical artifact that can authenticate official documents, bypass security measures, and grant access to restricted areas throughout the city. With this seal, the resistance could forge decrees, pass through checkpoints, and operate with the full authority of the regime. The seal is kept in the Governor's private chambers, protected by layers of security, magical wards, and loyal guards. Stealing it would be an act of incredible audacity, requiring infiltration of the most secure location in the city. The operation is fraught with danger—if discovered, the resistance would face the full wrath of the regime, and the seal's theft could trigger a city-wide manhunt. But if successful, the seal could give the resistance unprecedented freedom to operate, allowing them to move through the city with impunity and access resources that were previously out of reach. The stakes are enormous, but the potential rewards could change the course of the resistance forever.",
    },
  },
  {
    gm: {
      id: "q33-expose-corrupt-official",
      title: "Expose a Corrupt Official",
      category: "Secrecy",
      hook: "A mid-level official in the city's bureaucracy has been embezzling funds, siphoning off money that was meant for public services and using it to enrich themselves and their cronies. This corruption is not just a crime—it is a symbol of everything that is wrong with the current regime. The official has been living in luxury while the people suffer, and their greed has directly contributed to the city's decline. Evidence of this corruption could be a powerful weapon in the resistance's arsenal, rallying public anger and exposing the hypocrisy of the regime. But gathering this evidence is incredibly dangerous. The official has powerful friends, and their corruption is protected by a web of complicity that extends throughout the bureaucracy. The resistance must gather irrefutable proof of the embezzlement, document the official's lavish lifestyle, and expose the network of corruption that supports them. The stakes are high—success could turn public opinion against the regime, while failure could lead to the destruction of the resistance's intelligence network.",
      costR: 0,
      success: { H: 10, S: 5 },
      failure: { S: -1, O: 1 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
        { label: "Warm the Crowd", costR: 1, effectOnSuccess: { H: 5 } },
      ],
      complications: ["Rival spies", "Intimidation of witnesses"],
      ties: ["Selvara discredited"],
    },
    player: {
      title: "Expose a Corrupt Official",
      hook: "A mid-level official in the city's bureaucracy has been embezzling funds, siphoning off money that was meant for public services and using it to enrich themselves and their cronies. This corruption is not just a crime—it is a symbol of everything that is wrong with the current regime. The official has been living in luxury while the people suffer, and their greed has directly contributed to the city's decline. Evidence of this corruption could be a powerful weapon in the resistance's arsenal, rallying public anger and exposing the hypocrisy of the regime. But gathering this evidence is incredibly dangerous. The official has powerful friends, and their corruption is protected by a web of complicity that extends throughout the bureaucracy. The resistance must gather irrefutable proof of the embezzlement, document the official's lavish lifestyle, and expose the network of corruption that supports them. The stakes are high—success could turn public opinion against the regime, while failure could lead to the destruction of the resistance's intelligence network.",
    },
  },
  {
    gm: {
      id: "q34-hidden-tunnel-mapping",
      title: "Hidden Tunnel Mapping",
      category: "Secrecy",
      hook: "The underground sewer system is a living, breathing maze that shifts and changes with the flow of water, the settling of the earth, and the passage of time. What was a safe passage yesterday might be a dead end today, and what was a collapsed tunnel last week might now be a new route to freedom. The resistance desperately needs accurate maps of these ever-changing passages, but creating such maps is incredibly dangerous. The sewers are filled with hazards—collapsing walls, flooding chambers, dangerous creatures, and the constant threat of discovery by the Guard. The mappers must navigate these treacherous waters, documenting safe routes, identifying dangerous areas, and updating their maps as the tunnels shift and change. The stakes are enormous—accurate maps could give the resistance crucial advantages in their operations, while outdated or incorrect maps could lead to disaster. The resistance needs someone who can brave the depths, chart the unknown, and keep the rebellion one step ahead of the ever-changing underground maze.",
      costR: 1,
      success: { S: 10, U: 5 },
      failure: { S: -1, R: -1 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Collapse", "River spirits", "Crab patrol"],
      ties: ["Flowrunner prestige"],
    },
    player: {
      title: "Hidden Tunnel Mapping",
      hook: "The underground sewer system is a living, breathing maze that shifts and changes with the flow of water, the settling of the earth, and the passage of time. What was a safe passage yesterday might be a dead end today, and what was a collapsed tunnel last week might now be a new route to freedom. The resistance desperately needs accurate maps of these ever-changing passages, but creating such maps is incredibly dangerous. The sewers are filled with hazards—collapsing walls, flooding chambers, dangerous creatures, and the constant threat of discovery by the Guard. The mappers must navigate these treacherous waters, documenting safe routes, identifying dangerous areas, and updating their maps as the tunnels shift and change. The stakes are enormous—accurate maps could give the resistance crucial advantages in their operations, while outdated or incorrect maps could lead to disaster. The resistance needs someone who can brave the depths, chart the unknown, and keep the rebellion one step ahead of the ever-changing underground maze.",
    },
  },
  {
    gm: {
      id: "q35-break-the-seal",
      title: "Break the Seal",
      category: "Special",
      hook: "The Guard has captured a devourer, one of the most dangerous and destructive creatures known to exist. These beings are living embodiments of chaos and destruction, capable of consuming everything in their path and leaving only devastation behind. The Guard plans to unleash this captured devourer in a populated area, using the resulting terror and destruction to justify even harsher measures against the people. This is not just a military operation—it is an act of pure evil, designed to sacrifice innocent lives for political gain. The resistance must stop this atrocity before it can be carried out. The devourer is being held in a heavily guarded facility, protected by the Guard's most elite forces and powerful magical wards. The operation to stop the release is incredibly dangerous, requiring infiltration of the most secure location in the city and the ability to either destroy the devourer or prevent its release. The stakes are enormous—failure could mean the death of thousands of innocent people, while success could expose the Guard's true nature and rally the people to the resistance's cause.",
      costR: 1,
      success: { O: -2, U: 1, S: 1 },
      failure: { S: -2, O: 2 },
      optionalInvestments: [
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
      ],
      complications: ["Devourer escapes", "Arcane backlash", "Elite arrival"],
      ties: ["Brother Malvek's cult"],
    },
    player: {
      title: "Break the Seal",
      hook: "The Guard has captured a devourer, one of the most dangerous and destructive creatures known to exist. These beings are living embodiments of chaos and destruction, capable of consuming everything in their path and leaving only devastation behind. The Guard plans to unleash this captured devourer in a populated area, using the resulting terror and destruction to justify even harsher measures against the people. This is not just a military operation—it is an act of pure evil, designed to sacrifice innocent lives for political gain. The resistance must stop this atrocity before it can be carried out. The devourer is being held in a heavily guarded facility, protected by the Guard's most elite forces and powerful magical wards. The operation to stop the release is incredibly dangerous, requiring infiltration of the most secure location in the city and the ability to either destroy the devourer or prevent its release. The stakes are enormous—failure could mean the death of thousands of innocent people, while success could expose the Guard's true nature and rally the people to the resistance's cause.",
    },
  },
  {
    gm: {
      id: "q36-defend-waterwheel-generators",
      title: "Defend the Waterwheel Generators",
      category: "Resources",
      hook: "The Haven's survival depends on a network of hidden waterwheel generators that power the protective wards and magical defenses that keep the refugees safe from the Guard's detection. These generators are the lifeblood of the Haven, providing not just power but hope—the knowledge that the people can still find sanctuary in a world that has turned against them. But the Guard has discovered the location of these generators, and they are closing in with overwhelming force. The generators must be defended at all costs, for their destruction would mean the end of the Haven and the death of everyone who has sought refuge there. The defense will be desperate and bloody, with the resistance fighting against superior numbers and firepower. The stakes are enormous—success could preserve the Haven and give the resistance a crucial victory, while failure could mean the destruction of everything they have built and the death of everyone they have sworn to protect.",
      costR: 0,
      success: { U: 2, S: 1 },
      failure: { H: -10, O: 5 },
      optionalInvestments: [
        { label: "Hearts & Hands", costR: 1, effectOnSuccess: { U: 5 } },
        { label: "Stealth Kit", costR: 1, effectOnSuccess: { S: 5 } },
      ],
      complications: ["Crab Surveyor pulses", "Flooding"],
      ties: ["Haven survival"],
    },
    player: {
      title: "Defend the Waterwheel Generators",
      hook: "The Haven's survival depends on a network of hidden waterwheel generators that power the protective wards and magical defenses that keep the refugees safe from the Guard's detection. These generators are the lifeblood of the Haven, providing not just power but hope—the knowledge that the people can still find sanctuary in a world that has turned against them. But the Guard has discovered the location of these generators, and they are closing in with overwhelming force. The generators must be defended at all costs, for their destruction would mean the end of the Haven and the death of everyone who has sought refuge there. The defense will be desperate and bloody, with the resistance fighting against superior numbers and firepower. The stakes are enormous—success could preserve the Haven and give the resistance a crucial victory, while failure could mean the destruction of everything they have built and the death of everyone they have sworn to protect.",
    },
  },
  // New quests that can reduce oppression
  {
    gm: {
      id: "q37-expose-corruption",
      title: "Expose Guard Corruption",
      category: "Propaganda",
      hook: "The Guard's reputation for incorruptibility has been shattered by evidence of widespread bribery and corruption among their officers. Documents have surfaced showing that high-ranking Guard officials have been accepting bribes from criminal organizations, turning a blind eye to illegal activities, and using their authority to enrich themselves at the expense of the people they are sworn to protect. This corruption is not just a moral failing—it is a systemic problem that undermines the very foundation of the Guard's authority. The evidence is damning, but exposing it is incredibly dangerous. The corrupt officers have powerful friends, and their network of complicity extends throughout the Guard hierarchy. The resistance must gather irrefutable proof of the corruption, document the officers' lavish lifestyles, and expose the network of bribery that has infected the entire organization. The stakes are enormous—success could turn public opinion against the Guard and reduce their oppressive power, while failure could lead to the destruction of the resistance's intelligence network and the death of everyone involved.",
      costR: 1,
      success: { S: 10, O: -5 },
      failure: { S: -5, O: 5 },
      optionalInvestments: [
        {
          label: "Evidence Gathering",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Ignore first failed Investigation roll",
        },
        {
          label: "Safe Distribution",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Reduce risk of exposure",
        },
      ],
      complications: [
        "Counter-intelligence",
        "Fake evidence",
        "Guard retaliation",
      ],
      ties: ["Corrupt officers", "Underground journalists"],
    },
    player: {
      title: "Expose Guard Corruption",
      hook: "The Guard's reputation for incorruptibility has been shattered by evidence of widespread bribery and corruption among their officers. Documents have surfaced showing that high-ranking Guard officials have been accepting bribes from criminal organizations, turning a blind eye to illegal activities, and using their authority to enrich themselves at the expense of the people they are sworn to protect. This corruption is not just a moral failing—it is a systemic problem that undermines the very foundation of the Guard's authority. The evidence is damning, but exposing it is incredibly dangerous. The corrupt officers have powerful friends, and their network of complicity extends throughout the Guard hierarchy. The resistance must gather irrefutable proof of the corruption, document the officers' lavish lifestyles, and expose the network of bribery that has infected the entire organization. The stakes are enormous—success could turn public opinion against the Guard and reduce their oppressive power, while failure could lead to the destruction of the resistance's intelligence network and the death of everyone involved.",
    },
  },
  {
    gm: {
      id: "q38-liberate-prisoners",
      title: "Liberate Political Prisoners",
      category: "Unity",
      hook: "A group of resistance fighters has been captured and imprisoned in the Guard's most secure facility, where they face torture, execution, and the destruction of everything they have fought for. These prisoners are not just individuals—they are symbols of the resistance's determination and the people's hope for freedom. Their capture has dealt a devastating blow to morale, and their continued imprisonment serves as a constant reminder of the Guard's power and the resistance's vulnerability. Freeing them would be more than just a rescue mission—it would be a powerful statement that the resistance cannot be broken, that hope cannot be extinguished, and that the people will not be cowed by oppression. But the prison is heavily guarded, its defenses designed to prevent exactly this kind of operation. The rescue will require careful planning, precise execution, and the willingness to risk everything for the sake of freedom. The stakes are enormous—success could strike a devastating blow against oppression and boost the resistance's morale, while failure could mean the death of the prisoners and the destruction of the rescue team.",
      costR: 2,
      success: { U: 10, H: 5, O: -5 },
      failure: { U: -5, H: -5, O: 5 },
      optionalInvestments: [
        {
          label: "Inside Information",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Get detailed prison layout",
        },
        {
          label: "Diversion Tactics",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Create distraction during escape",
        },
      ],
      complications: ["Heavy security", "Injured prisoners", "False intel"],
      ties: ["Prison guards", "Resistance network"],
    },
    player: {
      title: "Liberate Political Prisoners",
      hook: "A group of resistance fighters has been captured and imprisoned in the Guard's most secure facility, where they face torture, execution, and the destruction of everything they have fought for. These prisoners are not just individuals—they are symbols of the resistance's determination and the people's hope for freedom. Their capture has dealt a devastating blow to morale, and their continued imprisonment serves as a constant reminder of the Guard's power and the resistance's vulnerability. Freeing them would be more than just a rescue mission—it would be a powerful statement that the resistance cannot be broken, that hope cannot be extinguished, and that the people will not be cowed by oppression. But the prison is heavily guarded, its defenses designed to prevent exactly this kind of operation. The rescue will require careful planning, precise execution, and the willingness to risk everything for the sake of freedom. The stakes are enormous—success could strike a devastating blow against oppression and boost the resistance's morale, while failure could mean the death of the prisoners and the destruction of the rescue team.",
    },
  },
  {
    gm: {
      id: "q39-undermine-propaganda",
      title: "Undermine Guard Propaganda",
      category: "Propaganda",
      hook: "The Guard has launched a massive propaganda campaign designed to spread fear, sow division, and crush the people's hope for a better future. Their lies are everywhere—in the streets, in the markets, in the very air the people breathe. They paint the resistance as terrorists, the people as ungrateful, and the current regime as the only thing standing between order and chaos. This psychological warfare is as dangerous as any physical attack, for it seeks to break the people's spirit and make them accept their oppression willingly. The resistance must fight back with the truth, exposing the Guard's lies and showing the people that there is another way. But countering propaganda is incredibly dangerous—the Guard will stop at nothing to silence the truth, and those who speak out face imprisonment, torture, and death. The resistance needs someone who can spread the truth without being caught, who can reach the people without alerting the authorities, and who can turn the Guard's own lies against them. The stakes are enormous—success could break the Guard's psychological hold and rally the people to the resistance's cause, while failure could mean the destruction of the resistance's information network and the death of everyone involved.",
      costR: 1,
      success: { H: 10, O: -5 },
      failure: { H: -5, O: 5 },
      optionalInvestments: [
        {
          label: "Truth Campaign",
          costR: 1,
          effectOnSuccess: { H: 5 },
          ruleText: "Double the hope gain on success",
        },
        {
          label: "Safe Distribution",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Reduce risk of exposure",
        },
      ],
      complications: ["Censorship", "Counter-propaganda", "Guard crackdown"],
      ties: ["Underground press", "Disillusioned citizens"],
    },
    player: {
      title: "Undermine Guard Propaganda",
      hook: "The Guard has launched a massive propaganda campaign designed to spread fear, sow division, and crush the people's hope for a better future. Their lies are everywhere—in the streets, in the markets, in the very air the people breathe. They paint the resistance as terrorists, the people as ungrateful, and the current regime as the only thing standing between order and chaos. This psychological warfare is as dangerous as any physical attack, for it seeks to break the people's spirit and make them accept their oppression willingly. The resistance must fight back with the truth, exposing the Guard's lies and showing the people that there is another way. But countering propaganda is incredibly dangerous—the Guard will stop at nothing to silence the truth, and those who speak out face imprisonment, torture, and death. The resistance needs someone who can spread the truth without being caught, who can reach the people without alerting the authorities, and who can turn the Guard's own lies against them. The stakes are enormous—success could break the Guard's psychological hold and rally the people to the resistance's cause, while failure could mean the destruction of the resistance's information network and the death of everyone involved.",
    },
  },
  {
    gm: {
      id: "q40-sabotage-oppression",
      title: "Sabotage Oppression Infrastructure",
      category: "Special",
      hook: "The Guard's surveillance network is the backbone of their oppressive control, a vast system of cameras, sensors, and magical monitoring devices that allows them to watch every move the people make. This network is their greatest weapon, enabling them to track resistance operatives, monitor public gatherings, and maintain constant surveillance over the entire city. But this network has a critical weakness—a central hub that, if destroyed, could cripple their entire surveillance system and give the resistance the freedom to operate without constant fear of discovery. The hub is heavily guarded, its defenses designed to prevent exactly this kind of attack, and its destruction would be considered an act of war. The operation requires technical expertise, precise planning, and the ability to cause maximum damage while minimizing the risk to the resistance. The stakes are enormous—success could give the resistance unprecedented freedom to operate and significantly reduce the Guard's ability to oppress, while failure could lead to a devastating counterattack that could destroy the entire movement. This is the resistance's chance to strike a decisive blow against the very foundation of the Guard's power.",
      costR: 3,
      success: { S: 10, O: -10 },
      failure: { S: -10, O: 10 },
      optionalInvestments: [
        {
          label: "Technical Expertise",
          costR: 2,
          effectOnSuccess: { S: 5 },
          ruleText: "Reduce difficulty of technical rolls",
        },
        {
          label: "Stealth Equipment",
          costR: 1,
          effectOnSuccess: { S: 5 },
          ruleText: "Ignore first failed Stealth roll",
        },
      ],
      complications: ["Advanced security", "Backup systems", "Guard response"],
      ties: ["Technical resistance", "Former Guard engineers"],
    },
    player: {
      title: "Sabotage Oppression Infrastructure",
      hook: "The Guard's surveillance network is the backbone of their oppressive control, a vast system of cameras, sensors, and magical monitoring devices that allows them to watch every move the people make. This network is their greatest weapon, enabling them to track resistance operatives, monitor public gatherings, and maintain constant surveillance over the entire city. But this network has a critical weakness—a central hub that, if destroyed, could cripple their entire surveillance system and give the resistance the freedom to operate without constant fear of discovery. The hub is heavily guarded, its defenses designed to prevent exactly this kind of attack, and its destruction would be considered an act of war. The operation requires technical expertise, precise planning, and the ability to cause maximum damage while minimizing the risk to the resistance. The stakes are enormous—success could give the resistance unprecedented freedom to operate and significantly reduce the Guard's ability to oppress, while failure could lead to a devastating counterattack that could destroy the entire movement. This is the resistance's chance to strike a decisive blow against the very foundation of the Guard's power.",
    },
  },
];
