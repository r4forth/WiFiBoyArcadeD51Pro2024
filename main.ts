/**
 * This is the main file for your project.
 *
 * Create images, tilemaps, animations, and songs using the
 * asset explorer in VS Code. You can reference those assets
 * using the tagged templates on the assets namespace:
 *
 *     assets.image`myImageName`
 *     assets.tilemap`myTilemapName`
 *     assets.tile`myTileName`
 *     assets.animation`myAnimationName`
 *     assets.song`mySongName`
 *
 * New to MakeCode Arcade? Try creating a new project using one
 * of the templates to learn about Sprites, Tilemaps, Animations,
 * and more! Or check out the reference docs here:
 *
 * https://arcade.makecode.com/reference
 */

game.onUpdate(() => {
    // Code in this function will run once per frame. MakeCode
    // Arcade games run at 30 FPS
    // 設定背景顏色為綠色
    scene.setBackgroundColor(9)

    // 建立一個蘋果圖案
    let appleImage = img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `
    // 在螢幕中央顯示主角
    let appleSprite = sprites.create(appleImage, SpriteKind.Player)
    appleSprite.setPosition(80, 60) // 80, 60 是屏幕中央的位置

});
