# Class: DataManager

## DataManager ()

#### new DataManager ()

The static class that manages the database and game objects.

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `_globalId` | [String](http://tonbi.jp/Game/RPGMakerMV/String.html) | [static] |
| `_lastAccessedId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | [static] |
| `_errorUrl` | * | [static] |
| `_databaseFiles` | [Array](http://tonbi.jp/Game/RPGMakerMV/Array.html).<Object> | [static] |

<dl>
</dl>

### Methods

#### (static) checkError ()

<dl>
</dl>

#### (static) createGameObjects ()

<dl>
</dl>

#### (static) extractMetadata (data)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `data` | object |  |

<dl>
</dl>

#### (static) extractSaveContents (contents)

Extracts the save file contents into the game's variables. An excellent method to alias when you wish to extend the game's save contents for a plugin.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `contents` | object |  |

<dl>
</dl>

#### (static) isAnySavefileExists () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isArmor (item) → {Boolean}

Returns a boolean value given an item. Item must be a database armor to be true.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | object |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isBattleTest () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isDatabaseLoaded () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isEventTest () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isItem (item) → {Boolean}

Returns a boolean value given an item. Item must be a database item to be true.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | object |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isMapLoaded () → {Boolean}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isSkill (item) → {Boolean}

Returns a boolean value given an item. Item being a database object representing a skill.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | object |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isThisGameFile (savefileId) → {Boolean}

Returns a boolean value given a savefileId. If the savefileId exists; the value will be true.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) isWeapon (item) → {Boolean}

Returns a boolean value given an item. Item must be a database weapon to be true.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `item` | object |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) lastAccessedSavefileId () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

Returns the last accessed save fileId upon saving or loading the game.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) latestSavefileId () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) loadAllSavefileImages ()

<dl>
</dl>

#### (static) loadDatabase ()

<dl>
</dl>

#### (static) loadDataFile (name, src)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `name` | [String](http://tonbi.jp/Game/RPGMakerMV/String.html) |  |
| `src` | [String](http://tonbi.jp/Game/RPGMakerMV/String.html) |  |

<dl>
</dl>

#### (static) loadGame (savefileId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

#### (static) loadGameWithoutRescue (savefileId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) loadGlobalInfo () → {[Array](http://tonbi.jp/Game/RPGMakerMV/Array.html).<*>}

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Array</a>.&lt;*&gt;</span>
                </dd>
            </dl>

#### (static) loadMapData (mapId)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `mapId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

#### (static) loadSavefileImages (info)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `info` | object |  |

<dl>
</dl>

#### (static) loadSavefileInfo (savefileId) → {object}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>object</span>
                </dd>
            </dl>

#### (static) makeEmptyMap ()

<dl>
</dl>

#### (static) makeSaveContents () → {object}

Creates the save file contents when saving your game. Good for aliasing when you want to add more data to the game's save contents.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>object</span>
                </dd>
            </dl>

#### (static) makeSavefileInfo ()

Creates a new save file on the global save file information containing important data such as play time, characters, timestamp.
<dl>
</dl>

#### (static) maxSavefiles () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

Returns the maximum number of save files allocated in the game.
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### (static) onLoad (object)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `object` | * |  |

<dl>
</dl>

#### (static) saveGame (savefileId) → {Boolean}

Saves the RPGMakerMV game given a savefileId. Returns true if successful.

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) saveGameWithoutRescue (savefileId) → {Boolean}

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `savefileId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### (static) saveGlobalInfo (info)

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `info` | object |  |

<dl>
</dl>

#### (static) selectSavefileForNewGame ()

<dl>
</dl>

#### (static) setupBattleTest ()

<dl>
</dl>

#### (static) setupEventTest ()

<dl>
</dl>

#### (static) setupNewGame ()

<dl>
</dl>

## [Home](http://tonbi.jp/Game/RPGMakerMV/index.html)

### Classes

* [Array](http://tonbi.jp/Game/RPGMakerMV/Array.html)
* [AudioManager](http://tonbi.jp/Game/RPGMakerMV/AudioManager.html)
* [BattleManager](http://tonbi.jp/Game/RPGMakerMV/BattleManager.html)
* [Bitmap](http://tonbi.jp/Game/RPGMakerMV/Bitmap.html)
* [CacheEntry](http://tonbi.jp/Game/RPGMakerMV/CacheEntry.html)
* [CacheMap](http://tonbi.jp/Game/RPGMakerMV/CacheMap.html)
* [ConfigManager](http://tonbi.jp/Game/RPGMakerMV/ConfigManager.html)
* [DataManager](http://tonbi.jp/Game/RPGMakerMV/DataManager.html)
* [Decrypter](http://tonbi.jp/Game/RPGMakerMV/Decrypter.html)
* [Game_Action](http://tonbi.jp/Game/RPGMakerMV/Game_Action.html)
* [Game_ActionResult](http://tonbi.jp/Game/RPGMakerMV/Game_ActionResult.html)
* [Game_Actor](http://tonbi.jp/Game/RPGMakerMV/Game_Actor.html)
* [Game_Actors](http://tonbi.jp/Game/RPGMakerMV/Game_Actors.html)
* [Game_Battler](http://tonbi.jp/Game/RPGMakerMV/Game_Battler.html)
* [Game_BattlerBase](http://tonbi.jp/Game/RPGMakerMV/Game_BattlerBase.html)
* [Game_Character](http://tonbi.jp/Game/RPGMakerMV/Game_Character.html)
* [Game_CharacterBase](http://tonbi.jp/Game/RPGMakerMV/Game_CharacterBase.html)
* [Game_CommonEvent](http://tonbi.jp/Game/RPGMakerMV/Game_CommonEvent.html)
* [Game_Enemy](http://tonbi.jp/Game/RPGMakerMV/Game_Enemy.html)
* [Game_Event](http://tonbi.jp/Game/RPGMakerMV/Game_Event.html)
* [Game_Follower](http://tonbi.jp/Game/RPGMakerMV/Game_Follower.html)
* [Game_Followers](http://tonbi.jp/Game/RPGMakerMV/Game_Followers.html)
* [Game_Interpreter](http://tonbi.jp/Game/RPGMakerMV/Game_Interpreter.html)
* [Game_Item](http://tonbi.jp/Game/RPGMakerMV/Game_Item.html)
* [Game_Map](http://tonbi.jp/Game/RPGMakerMV/Game_Map.html)
* [Game_Message](http://tonbi.jp/Game/RPGMakerMV/Game_Message.html)
* [Game_Party](http://tonbi.jp/Game/RPGMakerMV/Game_Party.html)
* [Game_Picture](http://tonbi.jp/Game/RPGMakerMV/Game_Picture.html)
* [Game_Player](http://tonbi.jp/Game/RPGMakerMV/Game_Player.html)
* [Game_Screen](http://tonbi.jp/Game/RPGMakerMV/Game_Screen.html)
* [Game_SelfSwitches](http://tonbi.jp/Game/RPGMakerMV/Game_SelfSwitches.html)
* [Game_Switches](http://tonbi.jp/Game/RPGMakerMV/Game_Switches.html)
* [Game_System](http://tonbi.jp/Game/RPGMakerMV/Game_System.html)
* [Game_Temp](http://tonbi.jp/Game/RPGMakerMV/Game_Temp.html)
* [Game_Timer](http://tonbi.jp/Game/RPGMakerMV/Game_Timer.html)
* [Game_Troop](http://tonbi.jp/Game/RPGMakerMV/Game_Troop.html)
* [Game_Unit](http://tonbi.jp/Game/RPGMakerMV/Game_Unit.html)
* [Game_Variables](http://tonbi.jp/Game/RPGMakerMV/Game_Variables.html)
* [Game_Vehicle](http://tonbi.jp/Game/RPGMakerMV/Game_Vehicle.html)
* [Graphics](http://tonbi.jp/Game/RPGMakerMV/Graphics.html)
* [Html5Audio](http://tonbi.jp/Game/RPGMakerMV/Html5Audio.html)
* [ImageCache](http://tonbi.jp/Game/RPGMakerMV/ImageCache.html)
* [ImageManager](http://tonbi.jp/Game/RPGMakerMV/ImageManager.html)
* [Input](http://tonbi.jp/Game/RPGMakerMV/Input.html)
* [JsonEx](http://tonbi.jp/Game/RPGMakerMV/JsonEx.html)
* [Math](http://tonbi.jp/Game/RPGMakerMV/Math.html)
* [AudioParameters](http://tonbi.jp/Game/RPGMakerMV/MV.AudioParameters.html)
* [BattleLogMethod](http://tonbi.jp/Game/RPGMakerMV/MV.BattleLogMethod.html)
* [BattlerAnimation](http://tonbi.jp/Game/RPGMakerMV/MV.BattlerAnimation.html)
* [BattleRewards](http://tonbi.jp/Game/RPGMakerMV/MV.BattleRewards.html)
* [CommandItem](http://tonbi.jp/Game/RPGMakerMV/MV.CommandItem.html)
* [ConfigData](http://tonbi.jp/Game/RPGMakerMV/MV.ConfigData.html)
* [DatabaseFile](http://tonbi.jp/Game/RPGMakerMV/MV.DatabaseFile.html)
* [Matrix](http://tonbi.jp/Game/RPGMakerMV/MV.Matrix.html)
* [Motion](http://tonbi.jp/Game/RPGMakerMV/MV.Motion.html)
* [PluginSettings](http://tonbi.jp/Game/RPGMakerMV/MV.PluginSettings.html)
* [SaveContents](http://tonbi.jp/Game/RPGMakerMV/MV.SaveContents.html)
* [SaveFileInfo](http://tonbi.jp/Game/RPGMakerMV/MV.SaveFileInfo.html)
* [TextState](http://tonbi.jp/Game/RPGMakerMV/MV.TextState.html)
* [TouchInputEvents](http://tonbi.jp/Game/RPGMakerMV/MV.TouchInputEvents.html)
* [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)
* [PluginManager](http://tonbi.jp/Game/RPGMakerMV/PluginManager.html)
* [Point](http://tonbi.jp/Game/RPGMakerMV/Point.html)
* [Rectangle](http://tonbi.jp/Game/RPGMakerMV/Rectangle.html)
* [RequestQueue](http://tonbi.jp/Game/RPGMakerMV/RequestQueue.html)
* [ResourceHandler](http://tonbi.jp/Game/RPGMakerMV/ResourceHandler.html)
* [Actor](http://tonbi.jp/Game/RPGMakerMV/RPG.Actor.html)
* [Animation](http://tonbi.jp/Game/RPGMakerMV/RPG.Animation.html)
* [Timing](http://tonbi.jp/Game/RPGMakerMV/RPG.Animation.Timing.html)
* [Armor](http://tonbi.jp/Game/RPGMakerMV/RPG.Armor.html)
* [AudioFile](http://tonbi.jp/Game/RPGMakerMV/RPG.AudioFile.html)
* [BaseItem](http://tonbi.jp/Game/RPGMakerMV/RPG.BaseItem.html)
* [BattleEventPage](http://tonbi.jp/Game/RPGMakerMV/RPG.BattleEventPage.html)
* [Conditions](http://tonbi.jp/Game/RPGMakerMV/RPG.BattleEventPage.Conditions.html)
* [Class](http://tonbi.jp/Game/RPGMakerMV/RPG.Class.html)
* [Learning](http://tonbi.jp/Game/RPGMakerMV/RPG.Class.Learning.html)
* [CommonEvent](http://tonbi.jp/Game/RPGMakerMV/RPG.CommonEvent.html)
* [Damage](http://tonbi.jp/Game/RPGMakerMV/RPG.Damage.html)
* [Effect](http://tonbi.jp/Game/RPGMakerMV/RPG.Effect.html)
* [Enemy](http://tonbi.jp/Game/RPGMakerMV/RPG.Enemy.html)
* [Action](http://tonbi.jp/Game/RPGMakerMV/RPG.Enemy.Action.html)
* [DropItem](http://tonbi.jp/Game/RPGMakerMV/RPG.Enemy.DropItem.html)
* [EquipItem](http://tonbi.jp/Game/RPGMakerMV/RPG.EquipItem.html)
* [Event](http://tonbi.jp/Game/RPGMakerMV/RPG.Event.html)
* [EventCommand](http://tonbi.jp/Game/RPGMakerMV/RPG.EventCommand.html)
* [Conditions](http://tonbi.jp/Game/RPGMakerMV/RPG.EventPage.Conditions.html)
* [Image](http://tonbi.jp/Game/RPGMakerMV/RPG.EventPage.Image.html)
* [Item](http://tonbi.jp/Game/RPGMakerMV/RPG.Item.html)
* [Map](http://tonbi.jp/Game/RPGMakerMV/RPG.Map.html)
* [Encounter](http://tonbi.jp/Game/RPGMakerMV/RPG.Map.Encounter.html)
* [MapInfo](http://tonbi.jp/Game/RPGMakerMV/RPG.MapInfo.html)
* [MetaData](http://tonbi.jp/Game/RPGMakerMV/RPG.MetaData.html)
* [MoveCommand](http://tonbi.jp/Game/RPGMakerMV/RPG.MoveCommand.html)
* [MoveRoute](http://tonbi.jp/Game/RPGMakerMV/RPG.MoveRoute.html)
* [Skill](http://tonbi.jp/Game/RPGMakerMV/RPG.Skill.html)
* [State](http://tonbi.jp/Game/RPGMakerMV/RPG.State.html)
* [System](http://tonbi.jp/Game/RPGMakerMV/RPG.System.html)
* [AttackMotion](http://tonbi.jp/Game/RPGMakerMV/RPG.System.AttackMotion.html)
* [Terms](http://tonbi.jp/Game/RPGMakerMV/RPG.System.Terms.html)
* [TestBattler](http://tonbi.jp/Game/RPGMakerMV/RPG.System.TestBattler.html)
* [Vehicle](http://tonbi.jp/Game/RPGMakerMV/RPG.System.Vehicle.html)
* [Tileset](http://tonbi.jp/Game/RPGMakerMV/RPG.Tileset.html)
* [Trait](http://tonbi.jp/Game/RPGMakerMV/RPG.Trait.html)
* [Troop](http://tonbi.jp/Game/RPGMakerMV/RPG.Troop.html)
* [UsableItem](http://tonbi.jp/Game/RPGMakerMV/RPG.UsableItem.html)
* [Weapon](http://tonbi.jp/Game/RPGMakerMV/RPG.Weapon.html)
* [Scene_Base](http://tonbi.jp/Game/RPGMakerMV/Scene_Base.html)
* [Scene_Battle](http://tonbi.jp/Game/RPGMakerMV/Scene_Battle.html)
* [Scene_Boot](http://tonbi.jp/Game/RPGMakerMV/Scene_Boot.html)
* [Scene_Debug](http://tonbi.jp/Game/RPGMakerMV/Scene_Debug.html)
* [Scene_Equip](http://tonbi.jp/Game/RPGMakerMV/Scene_Equip.html)
* [Scene_File](http://tonbi.jp/Game/RPGMakerMV/Scene_File.html)
* [Scene_GameEnd](http://tonbi.jp/Game/RPGMakerMV/Scene_GameEnd.html)
* [Scene_Gameover](http://tonbi.jp/Game/RPGMakerMV/Scene_Gameover.html)
* [Scene_Item](http://tonbi.jp/Game/RPGMakerMV/Scene_Item.html)
* [Scene_ItemBase](http://tonbi.jp/Game/RPGMakerMV/Scene_ItemBase.html)
* [Scene_Load](http://tonbi.jp/Game/RPGMakerMV/Scene_Load.html)
* [Scene_Map](http://tonbi.jp/Game/RPGMakerMV/Scene_Map.html)
* [Scene_Menu](http://tonbi.jp/Game/RPGMakerMV/Scene_Menu.html)
* [Scene_MenuBase](http://tonbi.jp/Game/RPGMakerMV/Scene_MenuBase.html)
* [Scene_Name](http://tonbi.jp/Game/RPGMakerMV/Scene_Name.html)
* [Scene_Options](http://tonbi.jp/Game/RPGMakerMV/Scene_Options.html)
* [Scene_Save](http://tonbi.jp/Game/RPGMakerMV/Scene_Save.html)
* [Scene_Shop](http://tonbi.jp/Game/RPGMakerMV/Scene_Shop.html)
* [Scene_Skill](http://tonbi.jp/Game/RPGMakerMV/Scene_Skill.html)
* [Scene_Status](http://tonbi.jp/Game/RPGMakerMV/Scene_Status.html)
* [Scene_Title](http://tonbi.jp/Game/RPGMakerMV/Scene_Title.html)
* [SceneManager](http://tonbi.jp/Game/RPGMakerMV/SceneManager.html)
* [ScreenSprite](http://tonbi.jp/Game/RPGMakerMV/ScreenSprite.html)
* [ShaderTilemap](http://tonbi.jp/Game/RPGMakerMV/ShaderTilemap.html)
* [SoundManager](http://tonbi.jp/Game/RPGMakerMV/SoundManager.html)
* [Sprite](http://tonbi.jp/Game/RPGMakerMV/Sprite.html)
* [Sprite_Actor](http://tonbi.jp/Game/RPGMakerMV/Sprite_Actor.html)
* [Sprite_Animation](http://tonbi.jp/Game/RPGMakerMV/Sprite_Animation.html)
* [Sprite_Balloon](http://tonbi.jp/Game/RPGMakerMV/Sprite_Balloon.html)
* [Sprite_Base](http://tonbi.jp/Game/RPGMakerMV/Sprite_Base.html)
* [Sprite_Battler](http://tonbi.jp/Game/RPGMakerMV/Sprite_Battler.html)
* [Sprite_Button](http://tonbi.jp/Game/RPGMakerMV/Sprite_Button.html)
* [Sprite_Character](http://tonbi.jp/Game/RPGMakerMV/Sprite_Character.html)
* [Sprite_Damage](http://tonbi.jp/Game/RPGMakerMV/Sprite_Damage.html)
* [Sprite_Destination](http://tonbi.jp/Game/RPGMakerMV/Sprite_Destination.html)
* [Sprite_Enemy](http://tonbi.jp/Game/RPGMakerMV/Sprite_Enemy.html)
* [Sprite_Picture](http://tonbi.jp/Game/RPGMakerMV/Sprite_Picture.html)
* [Sprite_StateIcon](http://tonbi.jp/Game/RPGMakerMV/Sprite_StateIcon.html)
* [Sprite_StateOverlay](http://tonbi.jp/Game/RPGMakerMV/Sprite_StateOverlay.html)
* [Sprite_Timer](http://tonbi.jp/Game/RPGMakerMV/Sprite_Timer.html)
* [Sprite_Weapon](http://tonbi.jp/Game/RPGMakerMV/Sprite_Weapon.html)
* [Spriteset_Base](http://tonbi.jp/Game/RPGMakerMV/Spriteset_Base.html)
* [Spriteset_Battle](http://tonbi.jp/Game/RPGMakerMV/Spriteset_Battle.html)
* [Spriteset_Map](http://tonbi.jp/Game/RPGMakerMV/Spriteset_Map.html)
* [Stage](http://tonbi.jp/Game/RPGMakerMV/Stage.html)
* [StorageManager](http://tonbi.jp/Game/RPGMakerMV/StorageManager.html)
* [String](http://tonbi.jp/Game/RPGMakerMV/String.html)
* [TextManager](http://tonbi.jp/Game/RPGMakerMV/TextManager.html)
* [Tilemap](http://tonbi.jp/Game/RPGMakerMV/Tilemap.html)
* [TilingSprite](http://tonbi.jp/Game/RPGMakerMV/TilingSprite.html)
* [ToneFilter](http://tonbi.jp/Game/RPGMakerMV/ToneFilter.html)
* [ToneSprite](http://tonbi.jp/Game/RPGMakerMV/ToneSprite.html)
* [TouchInput](http://tonbi.jp/Game/RPGMakerMV/TouchInput.html)
* [Member](http://tonbi.jp/Game/RPGMakerMV/Troop.Member.html)
* [Utils](http://tonbi.jp/Game/RPGMakerMV/Utils.html)
* [Weather](http://tonbi.jp/Game/RPGMakerMV/Weather.html)
* [WebAudio](http://tonbi.jp/Game/RPGMakerMV/WebAudio.html)
* [Window](http://tonbi.jp/Game/RPGMakerMV/Window.html)
* [Window_ActorCommand](http://tonbi.jp/Game/RPGMakerMV/Window_ActorCommand.html)
* [Window_Base](http://tonbi.jp/Game/RPGMakerMV/Window_Base.html)
* [Window_BattleActor](http://tonbi.jp/Game/RPGMakerMV/Window_BattleActor.html)
* [Window_BattleEnemy](http://tonbi.jp/Game/RPGMakerMV/Window_BattleEnemy.html)
* [Window_BattleItem](http://tonbi.jp/Game/RPGMakerMV/Window_BattleItem.html)
* [Window_BattleLog](http://tonbi.jp/Game/RPGMakerMV/Window_BattleLog.html)
* [Window_BattleSkill](http://tonbi.jp/Game/RPGMakerMV/Window_BattleSkill.html)
* [Window_BattleStatus](http://tonbi.jp/Game/RPGMakerMV/Window_BattleStatus.html)
* [Window_ChoiceList](http://tonbi.jp/Game/RPGMakerMV/Window_ChoiceList.html)
* [Window_Command](http://tonbi.jp/Game/RPGMakerMV/Window_Command.html)
* [Window_DebugEdit](http://tonbi.jp/Game/RPGMakerMV/Window_DebugEdit.html)
* [Window_DebugRange](http://tonbi.jp/Game/RPGMakerMV/Window_DebugRange.html)
* [Window_EquipCommand](http://tonbi.jp/Game/RPGMakerMV/Window_EquipCommand.html)
* [Window_EquipItem](http://tonbi.jp/Game/RPGMakerMV/Window_EquipItem.html)
* [Window_EquipSlot](http://tonbi.jp/Game/RPGMakerMV/Window_EquipSlot.html)
* [Window_EquipStatus](http://tonbi.jp/Game/RPGMakerMV/Window_EquipStatus.html)
* [Window_EventItem](http://tonbi.jp/Game/RPGMakerMV/Window_EventItem.html)
* [Window_GameEnd](http://tonbi.jp/Game/RPGMakerMV/Window_GameEnd.html)
* [Window_Gold](http://tonbi.jp/Game/RPGMakerMV/Window_Gold.html)
* [Window_Help](http://tonbi.jp/Game/RPGMakerMV/Window_Help.html)
* [Window_HorzCommand](http://tonbi.jp/Game/RPGMakerMV/Window_HorzCommand.html)
* [Window_ItemCategory](http://tonbi.jp/Game/RPGMakerMV/Window_ItemCategory.html)
* [Window_ItemList](http://tonbi.jp/Game/RPGMakerMV/Window_ItemList.html)
* [Window_MapName](http://tonbi.jp/Game/RPGMakerMV/Window_MapName.html)
* [Window_MenuActor](http://tonbi.jp/Game/RPGMakerMV/Window_MenuActor.html)
* [Window_MenuCommand](http://tonbi.jp/Game/RPGMakerMV/Window_MenuCommand.html)
* [Window_MenuStatus](http://tonbi.jp/Game/RPGMakerMV/Window_MenuStatus.html)
* [Window_Message](http://tonbi.jp/Game/RPGMakerMV/Window_Message.html)
* [Window_NameEdit](http://tonbi.jp/Game/RPGMakerMV/Window_NameEdit.html)
* [Window_NameInput](http://tonbi.jp/Game/RPGMakerMV/Window_NameInput.html)
* [Window_NumberInput](http://tonbi.jp/Game/RPGMakerMV/Window_NumberInput.html)
* [Window_Options](http://tonbi.jp/Game/RPGMakerMV/Window_Options.html)
* [Window_PartyCommand](http://tonbi.jp/Game/RPGMakerMV/Window_PartyCommand.html)
* [Window_SavefileList](http://tonbi.jp/Game/RPGMakerMV/Window_SavefileList.html)
* [Window_ScrollText](http://tonbi.jp/Game/RPGMakerMV/Window_ScrollText.html)
* [Window_Selectable](http://tonbi.jp/Game/RPGMakerMV/Window_Selectable.html)
* [Window_ShopBuy](http://tonbi.jp/Game/RPGMakerMV/Window_ShopBuy.html)
* [Window_ShopCommand](http://tonbi.jp/Game/RPGMakerMV/Window_ShopCommand.html)
* [Window_ShopNumber](http://tonbi.jp/Game/RPGMakerMV/Window_ShopNumber.html)
* [Window_ShopSell](http://tonbi.jp/Game/RPGMakerMV/Window_ShopSell.html)
* [Window_ShopStatus](http://tonbi.jp/Game/RPGMakerMV/Window_ShopStatus.html)
* [Window_SkillList](http://tonbi.jp/Game/RPGMakerMV/Window_SkillList.html)
* [Window_SkillStatus](http://tonbi.jp/Game/RPGMakerMV/Window_SkillStatus.html)
* [Window_SkillType](http://tonbi.jp/Game/RPGMakerMV/Window_SkillType.html)
* [Window_Status](http://tonbi.jp/Game/RPGMakerMV/Window_Status.html)
* [Window_TitleCommand](http://tonbi.jp/Game/RPGMakerMV/Window_TitleCommand.html)
* [WindowLayer](http://tonbi.jp/Game/RPGMakerMV/WindowLayer.html)

### Namespaces

* [MV](http://tonbi.jp/Game/RPGMakerMV/MV.html)
* [RPG](http://tonbi.jp/Game/RPGMakerMV/RPG.html)

### Global

* [$dataActors](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataActors)
* [$dataAnimations](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataAnimations)
* [$dataArmors](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataArmors)
* [$dataClasses](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataClasses)
* [$dataCommonEvents](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataCommonEvents)
* [$dataEnemies](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataEnemies)
* [$dataItems](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataItems)
* [$dataMap](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataMap)
* [$dataMapInfos](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataMapInfos)
* [$dataSkills](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataSkills)
* [$dataStates](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataStates)
* [$dataSystem](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataSystem)
* [$dataTilesets](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataTilesets)
* [$dataTroops](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataTroops)
* [$dataWeapons](http://tonbi.jp/Game/RPGMakerMV/global.html#$dataWeapons)
* [$gameActors](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameActors)
* [$gameMap](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameMap)
* [$gameMessage](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameMessage)
* [$gameParty](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameParty)
* [$gamePlayer](http://tonbi.jp/Game/RPGMakerMV/global.html#$gamePlayer)
* [$gameScreen](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameScreen)
* [$gameSelfSwitches](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameSelfSwitches)
* [$gameSwitches](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameSwitches)
* [$gameSystem](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameSystem)
* [$gameTemp](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameTemp)
* [$gameTimer](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameTimer)
* [$gameTroop](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameTroop)
* [$gameVariables](http://tonbi.jp/Game/RPGMakerMV/global.html#$gameVariables)
* [$testEvent](http://tonbi.jp/Game/RPGMakerMV/global.html#$testEvent)
* [plugins](http://tonbi.jp/Game/RPGMakerMV/global.html#plugins)

 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc) on Sat Sep 22 2018 22:16:17 GMT+0900 (JST)
