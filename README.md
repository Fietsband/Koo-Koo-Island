Koo-Koo-Island
==============

Stuck on an island you await the fish to guide you through an amazing adventure.

### Progress:

#### General
- C Checking format of loaded game (if someone just posts nonsense the game will break)
- C adding more experience callbacks
- W building anti-cheating engine with Object.freeze (deepFreeze)
- C figuring out a method to remove the GameData from the window scope

### Enemy
- W Introduce the enemy in the battle screen (Who are you fighting?)

### Player
- M Adding skill attacks
- C Adding animations for enemy attacks

#### Island
- C Cleaning up levels/LonelyIsland.js
- C Moving showBridge method from the GameMap to LonelyIsland

### Underwater Shack

#### Squirrel House
- M Adding progress for squirrel house
- M Figuring out what is in the closet
- M Figuring out what will be on the small portrait on the wall
- M adding messages near the painting for story purposes

#### Cliffhill town Part I
- Designing all the houses

#### Forest of protectors
- M P initial design

#### Temeloe Town
- M initial design

#### Sideous cave
- M initial design

#### The boat
- M initial design

#### Cliffhill town Part II
- M initial design

#### Secret base Part I
- M initial design

#### Secret base Part II
- M initial design

#### Secret base Part III
- M initial design

#### Secret base Part IV
- M initial design

#### Done
- ~~add fire spell when can click on the star --> see player magic todos~~
- ~~add progress item for star place (disable when already clicked)~~
- ~~Adding magic attacks~~
- ~~Adding animations for magic attacks~~
- ~~hide the painting when the boss battle is done~~
- ~~disable clicking the star at the attic when still trying to fight the boss~~
- ~~initial design cliffhill town~~
- ~~remembering which level you last went~~
- ~~Deepfreeze all statics~~
- ~~Adding item rewards callback~~
- ~~Background-color from fish should be white~~
- ~~Able to use items in battle~~
- ~~disable attack buttons when dead~~
- ~~making timeout in battle between end - reward a litte faster~~
- ~~Initiate boss fight with the painting in the attic~~
- ~~scoping click methods in a different folder (Level.js)~~
- ~~Updating graphics of underwater shack (make it fullscreen + more underwater chareteristics)~~
- ~~updating dollar.js with helper to test whether the current user's browser complies with modern Javascript standards and features that are used for this game.~~
- ~~Level module's scoping upon currentGame.levels.\<x\>~~
- ~~Grabbing spear of wall progress item~~
- ~~Initiate in fights with different enemies than tiny fish~~
- ~~Making it possible to build the bridge for 100 wood~~
- ~~Adding underwater shack level~~
- ~~Making it possible to spawn fish from left to right and right to left~~
- ~~Adding attack strength for chosen weapon~~
- ~~Scoping all animations in separate animations folder~~
- ~~Rewriting part of battle engine - make it 'message event based'. Push event to stack; call event till end.~~
- ~~Adding damage reduction percentage for armor~~
- ~~Adding potions to restore health~~
- ~~Adding experience points for every battle.~~
- ~~Load game popup~~
- ~~Loading game~~
- ~~Setting up basic underwater shack code~~
- ~~Design + implementing player menu~~
- ~~Setting player weapon + armor~~
- ~~Adding deploy shell scripts for future reference~~

### Meaning of letters:
*M* = must have
*C* = could have
*W* = would have
*P* = pending

### Technological goal

The technological goal of this game is to build a game with the least amount of external Javascript libraries and therefor the least amount of - what I like to refer to as - 'magic'.
