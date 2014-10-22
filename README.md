Koo-Koo-Island
==============

Stuck on an island you await the fish to guide you through an amazing adventure.

### Progress:

#### General
- C Level module's scoping upon currentGame.levels.\<x\>
- C updating dollar.js with helper to test whether the current user's browser complies with modern Javascript standards and features that are used for this game.
- C Checking format of loaded game (if someone just posts nonsense the game will break)
- C disable attack buttons when dead

### Player
- M Adding attack strength for chosen weapon
- M Adding item rewards callback
- M Adding skill attacks
- M Adding magic attacks
- M Able to use items in battle
- C Adding animations for magic attacks
- C Adding animations for enemy

#### Island
- M Adding underwater shack level
- M Making it possible to spawn fish from left to right and right to left
- M Initiate in multiple battles
- M Making it possible to build the bridge for 100 wood
- C Cleaning up levels/LonelyIsland.js
- C Moving showBridge method from the GameMap to LonelyIsland

#### Squirrel House
- M Adding progress for squirrel house
- M Grabbing spear of wall progress item
- M Figuring out what is in the closet
- M Figuring out what will be on the small portrait on the wall
- M Initiate boss fight with the painting in the attic

#### Cliffhill town Part I

#### Forest of protectors

#### Temeloe Town

#### Sideous cave

#### The boat

#### Cliffhill town Part II

#### Secret base Part I

#### Secret base Part II

#### Secret base Part III

#### Secret base Part IV

#### Done
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

### Technological goal

The technological goal of this game is to build a game with the least amount of external Javascript libraries and therefor the least amount of - what I like to refer to as - 'magic'.
