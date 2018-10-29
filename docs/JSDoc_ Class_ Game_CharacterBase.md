# Class: Game_CharacterBase

## (abstract) Game_CharacterBase ()

#### (abstract) new Game_CharacterBase ()

 キャラクタに共通する画像処理を行うクラス。 [Game_Character](http://tonbi.jp/Game/RPGMakerMV/Game_Character.html) のスーパークラス。

##### Properties:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | [read-only] |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | [read-only] |
| `_x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_realX` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_realY` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_moveSpeed` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_moveFrequency` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_opacity` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_blendMode` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_direction` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_pattern` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_priorityType` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_tileId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_characterName` | [String](http://tonbi.jp/Game/RPGMakerMV/String.html) |  |
| `_characterIndex` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_isObjectCharacter` | Boolean |  |
| `_walkAnime` | Boolean |  |
| `_stepAnime` | Boolean |  |
| `_directionFix` | Boolean |  |
| `_through` | Boolean |  |
| `_transparent` | Boolean |  |
| `_bushDepth` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_animationId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_balloonId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_animationPlaying` | Boolean |  |
| `_balloonPlaying` | Boolean |  |
| `_animationCount` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_stopCount` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_jumpCount` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_jumpPeak` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `_movementSuccess` | Boolean |  |

<dl>
</dl>

### Methods

#### animationId () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 アニメーションIDを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### animationWait () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 アニメーションの待ち時間を返す。
<dl>
</dl>

##### Returns:

 フレーム
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### balloonId () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 フキダシアイコンIDを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### blendMode () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

[合成方法]を返す。
<dl>
</dl>

##### Returns:

0: 通常, 1: 加算, 2: 乗算, 3: スクリーン
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### bushDepth () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

[茂み]の深さを返す。
<dl>
</dl>

##### Returns:

 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### canPass (x, y, d) → {Boolean}

 指定位置から指定向きへの通行が可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `d` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  向き(テンキー対応) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### canPassDiagonally (x, y, horz, vert) → {Boolean}

 指定位置から斜め指定向きへの通行が可能か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `horz` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  横方向(テンキー対応) |
| `vert` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  縦方向(テンキー対応) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### characterIndex () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 キャラクタ画像の番号を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### characterName () → {[String](http://tonbi.jp/Game/RPGMakerMV/String.html)}

 キャラクタ画像のファイル名を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>String</a></span>
                </dd>
            </dl>

#### checkEventTriggerTouch (x, y) → {Boolean}

 指定位置にあるイベントトリガを起動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### checkEventTriggerTouchFront (d)

 指定方向にあるイベントトリガを起動。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  向き(テンキー対応) |

<dl>
</dl>

#### checkStop (threshold) → {Boolean}

 停止状態が閾値を超えたか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `threshold` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  停止カウントの閾値(フレーム) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### copyPosition (character)

 指定キャラクタの位置を自身の位置にコピー。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `character` | [Game_Player](http://tonbi.jp/Game/RPGMakerMV/Game_Player.html) |  |

<dl>
</dl>

#### direction () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 向きを返す。
<dl>
</dl>

##### Returns:

 向き(テンキー対応)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### distancePerFrame () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 フレーム毎の移動距離を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### endAnimation ()

[アニメーション]表示を終了。
<dl>
</dl>

#### endBalloon ()

[フキダシアイコン]表示を終了。
<dl>
</dl>

#### hasStepAnime () → {Boolean}

[足踏みアニメ]するか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### hasWalkAnime () → {Boolean}

[歩行アニメ]するか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### increaseSteps ()

 歩き出す(歩数を増やす)。
<dl>
</dl>

#### initialize ()

 オブジェクト生成時の初期化。
<dl>
</dl>

#### initMembers ()

 メンバ変数の初期化。
<dl>
</dl>

#### isAnimationPlaying () → {Boolean}

[アニメーション]表示中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isBalloonPlaying () → {Boolean}

[フキダシアイコン]表示中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isCollidedWithCharacters (x, y) → {Boolean}

 指定位置がキャラによって塞がれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isCollidedWithEvents (x, y) → {Boolean}

 指定位置が[イベント]によって塞がれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isCollidedWithVehicles (x, y) → {Boolean}

 指定位置が[乗り物]によって塞がれているか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDashing () → {Boolean}

 現在ダッシュ中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDebugThrough () → {Boolean}

 デバッグ用のすり抜け移動中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isDirectionFixed () → {Boolean}

[向き固定]か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isJumping () → {Boolean}

 ジャンプ中か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMapPassable (x, y, d) → {Boolean}

 指定位置から指定向きへのマップ通行が可能か。 キャラ・[イベント]による障害を考慮しない。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `d` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  向き(テンキー対応) |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMovementSucceeded (x opt, y opt) → {Boolean}

 移動可能か。

##### Parameters:

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | <optional> |  |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | <optional> |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isMoving () → {Boolean}

 移動中(タイル毎の座標ではない)か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isNearTheScreen () → {Boolean}

 画面端に近いか。あるいは、スクロールを止める位置か。
<dl>
</dl>

##### Returns:

}
<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isNormalPriority () → {Boolean}

[プライオリティ]が[通常キャラと同じ]か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isObjectCharacter () → {Boolean}

 キャラクタ用(characters フォルダ以下)の画像か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isOnBush () → {Boolean}

[茂み]に乗っているか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isOnLadder () → {Boolean}

[梯子]に乗っているか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isOriginalPattern () → {Boolean}

 オリジナルのパターンか。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isStopping () → {Boolean}

 止まっている(タイル毎の座標にいる)か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isThrough () → {Boolean}

[すり抜け]状態か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isTile () → {Boolean}

 タイル用(tilesets フォルダ以下)の画像か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### isTransparent () → {Boolean}

[透明]状態か。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### jump (xPlus, yPlus)

[ジャンプ]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `xPlus` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | x方向の移動(タイル数) |
| `yPlus` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | y方向の移動(タイル数) |

<dl>
</dl>

#### jumpHeight () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 現在のジャンプの高さを返す。
<dl>
</dl>

##### Returns:

 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### locate (x, y)

 現在のマップ内での[イベントの位置設定]。 [Game_CharacterBase#setPosition](http://tonbi.jp/Game/RPGMakerMV/Game_CharacterBase.html#setPosition) と異なり、姿勢などを初期化。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |

<dl>
</dl>

#### maxPattern () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 最大パターン数を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### moveDiagonally (horz, vert)

 指定の方向に斜めに進む。 テンキーの対応に従って9で右上に進めそうだが、水平と垂直を別に指定する。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `horz` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  水平向き(4: 左, 6:右) |
| `vert` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  垂直向き(2: 下, 8: 上) |

<dl>
</dl>

#### moveFrequency () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 移動[頻度]を返す。
<dl>
</dl>

##### Returns:

1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### moveSpeed () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 移動[速度]を返す。
<dl>
</dl>

##### Returns:

1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### moveStraight (d)

 指定の向きへ[一歩前進]。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  向き(テンキー対応) |

<dl>
</dl>

#### opacity () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

[不透明度]を返す。
<dl>
</dl>

##### Returns:

0〜255
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### pattern () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 歩行パターンの番号を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### pos (x, y) → {Boolean}

 指定位置にいるか。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### posNt (x, y) → {Boolean}

 指定位置にいて、通行不可か。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span>Boolean</span>
                </dd>
            </dl>

#### realMoveSpeed () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

(ダッシュ状態も考慮して)現在の移動速度を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### refreshBushDepth ()

[茂み]の深さを更新。
<dl>
</dl>

#### regionId () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 乗っているリージョンIDを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### requestAnimation (animationId)

 アニメーションIDの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `animationId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

#### requestBalloon (balloonId)

 フキダシアイコンIDを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `balloonId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

#### resetPattern ()

 オリジナルのパターンにリセット。
<dl>
</dl>

#### resetStopCount ()

 停止カウンタをリセット。
<dl>
</dl>

#### reverseDir (d) → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 指定向きの逆向きを返す。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  向き(テンキー対応) |

<dl>
</dl>

##### Returns:

 向き(テンキー対応)
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### screenX () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 画面上の x座標を返す。
<dl>
</dl>

##### Returns:

 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### screenY () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 画面上の y座標を返す。
<dl>
</dl>

##### Returns:

 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### screenZ () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 重なり位置を返す。
<dl>
</dl>

##### Returns:

1: 通常キャラの下, 3:通常キャラと同じ , 5: 通常キャラの上
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### scrolledX () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### scrolledY () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

<dl>
                <dt>To Do:</dt>
                <dd>
                    <ul>
                        <li>&#x3053;&#x306E;&#x7528;&#x8A9E;&#x306E;&#x610F;&#x5473;&#x304C;&#x5206;&#x304B;&#x3063;&#x305F;&#x3089;&#x6559;&#x3048;&#x3066;&#x304F;&#x3060;&#x3055;&#x3044;</li>
                    </ul>
                </dd>
            </dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### setBlendMode (blendMode)

[合成方法]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `blendMode` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | 0: 通常, 1: 加算, 2: 乗算, 3: スクリーン |

<dl>
</dl>

#### setDirection (d)

 向きの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `d` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  向き(テンキー対応) |

<dl>
</dl>

#### setDirectionFix (directionFix)

[向き固定]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `directionFix` | Boolean |  |

<dl>
</dl>

#### setImage (characterName, characterIndex)

 キャラクタ画像の設定(タイル画像と同時には設定できない)。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `characterName` | [String](http://tonbi.jp/Game/RPGMakerMV/String.html) |  ファイル名 |
| `characterIndex` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  番号 |

<dl>
</dl>

#### setMoveFrequency (moveFrequency)

 移動[頻度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveFrequency` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | 1: 最低, 2: 低, 3: 通常, 4: 高, 5: 最高 |

<dl>
</dl>

#### setMovementSuccess (success)

 移動可能かの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `success` | Boolean |  |

<dl>
</dl>

#### setMoveSpeed (moveSpeed)

 移動[速度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `moveSpeed` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | 1: 1/8倍速, 2: 1/4倍速, 3: 1/2倍速, 4: 通常速, 5: 2倍速, 6: 4倍速 |

<dl>
</dl>

#### setOpacity (opacity)

[不透明度]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `opacity` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | 0〜255 |

<dl>
</dl>

#### setPattern (pattern)

 指定番号のパターンを設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `pattern` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  |

<dl>
</dl>

#### setPosition (x, y)

 現在のマップ内での[イベントの位置設定]

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `x` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |
| `y` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイル数 |

<dl>
</dl>

#### setPriorityType (priorityType)

[プライオリティ]の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `priorityType` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) | 0: 通常キャラの下, 1:通常キャラと同じ , 2: 通常キャラの上 |

<dl>
</dl>

#### setStepAnime (stepAnime)

[足踏みアニメ]するかの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `stepAnime` | Boolean |  |

<dl>
</dl>

#### setThrough (through)

[すり抜け]状態の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `through` | Boolean |  |

<dl>
</dl>

#### setTileImage (tileId)

 タイル画像の設定(キャラクタ画像と同時には設定できない)。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `tileId` | [Number](http://tonbi.jp/Game/RPGMakerMV/Number.html) |  タイルID |

<dl>
</dl>

#### setTransparent (transparent)

[透明]状態の設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `transparent` | Boolean |  |

<dl>
</dl>

#### setWalkAnime (walkAnime)

[歩行アニメ]するかの設定。

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `walkAnime` | Boolean |  |

<dl>
</dl>

#### shiftY () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 縦方向へのシフト量を返す。
<dl>
</dl>

##### Returns:

 ピクセル
<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### startAnimation ()

[アニメーション]表示開始。
<dl>
</dl>

#### startBalloon ()

[フキダシアイコン]表示開始。
<dl>
</dl>

#### straighten ()

 キャラを(歩き・足踏みの途中でない)直立状態に。
<dl>
</dl>

#### terrainTag () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 乗っている[地形タグ]を返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### tileId () → {[Number](http://tonbi.jp/Game/RPGMakerMV/Number.html)}

 タイルIDを返す。
<dl>
</dl>

##### Returns:

<dl>
                <dt> Type </dt>
                <dd>
                    <span><a>Number</a></span>
                </dd>
            </dl>

#### update ()

 キャラをアップデート。
<dl>
</dl>

#### updateAnimation ()

 アニメーションをアップデート。
<dl>
</dl>

#### updateAnimationCount ()

 アニメーションのカウンタをアップデート。
<dl>
</dl>

#### updateJump ()

 ジャンプ状態をアップデート。
<dl>
</dl>

#### updateMove ()

 移動状態をアップデート。
<dl>
</dl>

#### updatePattern ()

 パターンをアップデート。
<dl>
</dl>

#### updateStop ()

 停止状態をアップデート。
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
* [EventPage](http://tonbi.jp/Game/RPGMakerMV/RPG.EventPage.html)
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
* [$plugins](http://tonbi.jp/Game/RPGMakerMV/global.html#$plugins)
* [$testEvent](http://tonbi.jp/Game/RPGMakerMV/global.html#$testEvent)

 <br>

  Documentation generated by [JSDoc 3.5.5](https://github.com/jsdoc3/jsdoc) on Sat Oct 06 2018 05:06:50 GMT+0900 (JST)
