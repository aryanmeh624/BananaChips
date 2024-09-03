import kaboom from "kaboom";

// initialize context
kaboom({
  width: 800,
  height: 600,
  root: document.getElementById("cont"),
  font: "sinko",
  background: [0, 0, 0,],
});

// load sprites
loadSprite("banana", "sprites/banatemp.png");
loadSprite("peel", "sprites/bananapeeltemp.png");
loadSprite("oil", "sprites/oiltemp.png");
loadSprite("potato", "sprites/pacman.png");
loadSprite("wall_down", "sprites/wall_down.png");
loadSprite("wall_top", "sprites/wall_top.png");
loadSprite("wall_left", "sprites/wall_left.png");
loadSprite("wall_right", "sprites/wall_right.png");
loadSprite("wall_h", "sprites/wall_h.png");
loadSprite("wall_v", "sprites/wall_v.png");
loadSprite("instruc_btn", "sprites/instruc_btn.png");
loadSprite("start_btn", "sprites/start_btn.png");
loadSprite("box", "sprites/box.png");
loadSprite("back", "sprites/back.png");
loadSprite("door", "sprites/door.png");
loadSprite("porta1", "sprites/portal.png");
loadSprite("deadmrb", "sprites/dedbanana.png");
loadSprite("deadmrp", "sprites/mrpded.png");
loadSprite("potatoleft", "sprites/pacmanleft.png");
loadSprite("sauce", "sprites/sauce.png");
loadSprite("chips", "sprites/chips.png");
loadSprite("portal", "sprites/portal.png");
//loadSprite("raise-l", "sprites/raise-l.png");
//loadSprite("raise-m", "sprites/raise-m.png");
loadSprite("raise", "sprites/raise.png");
loadSprite("purplebutton", "sprites/purplebutton.png");
// Scene Starter Screen
scene('home', () => {
  add([
    text('BANANA CHIPS!', { size: 50 }),
    pos(center().x, 250),
    origin('center')
  ])
  const instruct = add([
    sprite('instruc_btn'),
    pos(200, 350),
    origin('center'),
    scale(2),
    area(),
    'instruct'
  ])
  const start = add([
    sprite('start_btn'),
    pos(600, 350),
    origin('center'),
    scale(2),
    area(),
    'start'
  ])
  clicks('start', () => { go("game1") })
  clicks('instruct', () => { go("instruction") })
});

scene('game1', () => {
  layers(['p','b','ui'])
  addLevel([
    '<======================================>',
    '^                                      ^',
    '!                                   &  !',
    '!                                      !',
    '!=^     <=============================>!',
    '! !                                    !',
    '! #*=^                                 !',
    '!    !                                 !',
    '!    !                                 !',
    '!<=============***=========@=====>[    !',
    '!                                      !',
    '!                                      !',
    '!                                      !',
    '!                                      !',
    '!                                      !',
    '!    <=========@======***=============>!',
    '!                                      !',
    '!                                      !',
    '!=>                                    !',
    '!<=>                                   !',
    '!  #                                   !',
    '!<========$$$===================>      !',
    '!                                      !',
    '!                                  <==>!',
    '!                                  ^   !',
    '!<=======>                         !   !',
    '!                               ^=>#   !',
    '!                               !      !',
    '#                               #      #',
    '<===============****====$$$$===========>',
  ], {
    width: 20,
    height: 20,
    '<': () => [sprite('wall_left'), solid(), area(), scale(0.5),/*layer('p'),layer('b'),*/ 'wall'],
    '>': () => [sprite('wall_right'), solid(), area(), scale(0.5),/*layer('p'),layer('b'),*/'wall'],
    '!': () => [sprite('wall_v'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'wall'],
    '=': () => [sprite('wall_h'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'wall'],
    '^': () => [sprite('wall_top'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'wall'],
    '#': () => [sprite('wall_down'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'wall'],
    '*': () => [sprite('oil'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'oil'],
    '$': () => [sprite('peel'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'peel'],
    '&': () => [sprite('door'), solid(), area(), scale(1,1), /*layer('p'),layer('b'),*/'door'],
    '[': () => [sprite('raise'), solid(), area(), scale(2.5,0.5), /*layer('p'),layer('b'),*/'raise'],
    '@': () => [sprite('purplebutton'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'btn'],
  })
  const mrb = add([
    sprite('banana'),
    pos(center().x - 380, center().y + 150),
    body(),
    area(),
    scale(0.8),
    //layer('b'),
    'banana'
  ]);
  const mrp = add([
    sprite('potato'),
    pos(center().x - 380, center().y + 250),
    body(),
    area(),
    //layer('p'),
    scale(0.8), 
    'potato'
  ]);
  var cord=get('raise')[0].pos.y
  action('btn',(b)=>{
    
    if (b.isTouching(mrp) || b.isTouching(mrb)){
      
      every('raise',(r)=>{
        
        r.move(0,40);
      })
    } else {
      if (get('raise')[0].pos.y>cord){
        every('raise',(r)=>{
          r.move(0,-20);
        })
      }
    }
  })
  /*const portal2 = add([
    sprite('porta1'),
    pos(center().x, center().y+30),
    scale(0.3),
    'portal2',
    area()
  ]);*/
  /*
  const portal1 = add([
    sprite('porta1'),
    pos(center().x-250, center().y+175),
    scale(0.3),
    'portal1',
    area()
  ]);
  const portal2 = add([
    sprite('porta1'),
    pos(center().x, center().y+30),
    scale(0.3),
    'portal2',
    area()
  ]);
  const portal3 = add([
    sprite('porta1'),
    pos(center().x-250, center().y+175),
    scale(0.3),
    'portal1',
    area()
  ]);
  const portal4 = add([
    sprite('porta1'),
    pos(center().x-250, center().y+175),
    scale(0.3),
    'portal1',
    area()
  ]);
  */
  keyDown('left', () => {
    mrp.move(-220, 0)
    //mrp.changeSprite('')
  });
  keyDown('right', () => {
    mrp.move(220, 0)
  });
  keyPress('up', () => {
    if (mrp.grounded())
      mrp.jump(475)
  });
  keyDown('a', () => {
    mrb.move(-220, 0)
  });
  keyDown('d', () => {
    mrb.move(220, 0)
  });
  keyPress('w', () => {
    if (mrb.grounded())
      mrb.jump(475)
  });
  mrb.collides('door', (m) => {
    destroy(mrb);
    mrp.collides('door', (m) => {
      destroy(mrp);
      go("winl1");
    });
  });
  mrb.collides('oil', (m) => {
    go("oildeath");
  });
  mrp.collides('peel', (m) => {
    go("bananadeath");
  });
  /*
  mrp.collides('portal1', (m) => {
    mrp.pos = portal2.pos
    readd(mrp);
  });
  mrb.collides('portal1', (m) => {
    mrb.pos = portal2.pos
    readd(mrb);
  });
  */
  mrp.collides('door', (m) => {
    destroy(mrp);
    mrb.collides('door', (m) => {
      destroy(mrb);
      go("game2");
    });
  });
});
// Scene Game level 1
scene('instruction', () => {
  add([
    text('Instructions', { size: 50 }),
    pos(center().x, 40),
    origin('center')
  ])
  add([
    sprite('box'),
    pos(200, 350),
    origin('center'),
    scale(20, 7)
  ])
  add([
    text('1. Mr. Potato slips on banana peels.', { size: 23 }),
    pos(center().x - 40, center().y - 55),
    origin('center')
  ])
  add([
    text('2. Mr. Banana gets fried in oil.', { size: 23 }),
    pos(center().x - 40, center().y - 25),
    origin('center')
  ])
  add([
    text('3. Both the superheros die in sauce', { size: 23 }),
    pos(center().x - 40, center().y + 5),
    origin('center')
  ])
  add([
    text('4. Use arrow keys to move Mr. Potato', { size: 23 }),
    pos(center().x - 40, center().y + 35),
    origin('center')
  ])
  add([
    text('5. Use A-W-D keys to move Mr. Banana', { size: 23 }),
    pos(center().x - 40, center().y + 65),
    origin('center')
  ])
  const back = add([
    sprite('back'),
    pos(center().x, center().y + 150),
    origin('center'),
    scale(2),
    area(),
    'back'
  ])
  clicks('back', () => { go("home") })
});

scene('oildeath', () => {
  add([
    text('Mr. Banana Cannot survive in the oil pool!', { size: 20 }),
    pos(center().x, 250),
    origin('center')
  ])
    add([
      sprite('deadmrb'),
      pos(center().x, center().y),
      area(),
      //layer('p'),
      scale(4),
  ]);
  const back = add([
    sprite('back'),
    pos(center().x, center().y + 250),
    origin('center'),
    scale(2),
    area(),
    'back'
  ])
  clicks('back', () => { go("home") })
});
scene('bananadeath', () => {
  add([
    text('Mr. Potato Slipped to death!', { size: 20 }),
    pos(center().x, 250),
    origin('center')
  ])
    add([
      sprite('deadmrp'),
      pos(center().x, center().y),
      area(),
      //layer('p'),
      scale(4),
  ]);
  const back = add([
    sprite('back'),
    pos(center().x, center().y + 250),
    origin('center'),
    scale(2),
    area(),
    'back'
  ])
  clicks('back', () => { go("home") })
});



scene('winl1', () => {
  add([
    text('Yay! You get a small packet of banana chips. Click on it to continue.', { size: 20 }),
    pos(center().x, 250),
    origin('center')
  ])
    add([
      sprite('chips'),
      pos(center().x, center().y),
      area(),
      //layer('p'),
      scale(2),
      'chips'
  ]);
  
  clicks('chips', () => { go("game2") })
});

scene('winl2', () => {
  add([
    text('Yay! You get a HUUUGGGE packet of banana chips.', { size: 20 }),
    pos(center().x, 250),
    origin('center')
  ])
    add([
      sprite('chips'),
      pos(center().x, center().y),
      area(),
      //layer('p'),
      scale(4),
      'chips'
  ]);
  
  clicks('chips', () => { go("game2") })
});



scene('saucedeath', () => {
  add([
    text('Wow! Banana chips in sauce!', { size: 20 }),
    pos(center().x, 250),
    origin('center')
  ])
    add([
      sprite('deadmrp'),
      pos(center().x-100, center().y),
      area(),
      //layer('p'),
      scale(2),
  ]);
  add([
      sprite('deadmrb'),
      pos(center().x+100, center().y),
      area(),
      //layer('p'),
      scale(2),
  ]);
  const back = add([
    sprite('back'),
    pos(center().x, center().y + 250),
    origin('center'),
    scale(2),
    area(),
    'back'
  ])
  clicks('back', () => { go("home") })
});

scene('game2', () => {
  
  addLevel([
    '<======================================>',
    '^                                      ^',
    '!                                      !',
    '!<==========>    <======>      <======>!',
    '!                  ^^                  !',
    '!   [              !!                  !',
    '!  ^               !!<==@=======>      !',
    '!  !               !!           !      !',
    '!  !               !!                  !',
    '!  #               !!                  !',
    '!  <==============>!!           <=====>!',
    '!                                     !',
    '!                                      !',
    '!<===========>         <=====>         !',
    '!                                      !',
    '!                                      !',
    '!                                      !',
    '!                              <=====> !',
    '!                                      !',
    '!                  <===>               !',
    '!                                      !',
    '!                                      !',
    '!                                      !',
    '!+                                     !',
    '!<==>                                  !',
    '! &                                     !',
    '!                                      !',
    '!<==========>                          !',
    '#                                      #',
    '<~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~>',
  ], {
    width: 20,
    height: 20,
    '<': () => [sprite('wall_left'), solid(), area(), scale(0.5),/*layer('p'),layer('b'),*/ 'wall'],
    '>': () => [sprite('wall_right'), solid(), area(), scale(0.5),/*layer('p'),layer('b'),*/'wall'],
    '!': () => [sprite('wall_v'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'wall'],
    '=': () => [sprite('wall_h'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'wall'],
    '^': () => [sprite('wall_top'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'wall'],
    '#': () => [sprite('wall_down'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'wall'],
    '*': () => [sprite('oil'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'oil'],
    '$': () => [sprite('peel'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'peel'],
    '&': () => [sprite('door'), solid(), area(), scale(1,1), /*layer('p'),layer('b'),*/'door'],
    '[': () => [sprite('raise'), solid(), area(), scale(2.5,0.5), /*layer('p'),layer('b'),*/'raise'],
    '@': () => [sprite('purplebutton'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'btn'],
    '~': () => [sprite('sauce'), solid(), area(), scale(0.5), /*layer('p'),layer('b'),*/'sauce'],
    
  })
  const mrb = add([
    sprite('banana'),
    pos(650,40),
    body(),
    area(),
    scale(0.8),
    //layer('b'),
    'banana'
  ]);
  const mrp = add([
    sprite('potato'),
    pos(50, 40),
    body(),
    area(),
    //layer('p'),
    scale(0.8), 
    'potato'
  ]);
  var cord=get('raise')[0].pos.y
  action('btn',(b)=>{
    
    if (b.isTouching(mrp) || b.isTouching(mrb)){
      
      every('raise',(r)=>{
        
        r.move(0,40);
      })
    } else {
      if (get('raise')[0].pos.y>cord){
        every('raise',(r)=>{
          r.move(0,-20);
        })
      }
    }
  })
  
 
  
  
  keyDown('left', () => {
    mrp.move(-220, 0)
    //mrp.changeSprite('')
  });
  keyDown('right', () => {
    mrp.move(220, 0)
  });
  keyPress('up', () => {
    if (mrp.grounded())
      mrp.jump(475)
  });
  keyDown('a', () => {
    mrb.move(-220, 0)
  });
  keyDown('d', () => {
    mrb.move(220, 0)
  });
  keyPress('w', () => {
    if (mrb.grounded())
      mrb.jump(475)
  });
  mrb.collides('door', (m) => {
    destroy(mrb);
    mrp.collides('door', (m) => {
      destroy(mrp);
      go("winl2");
    });
  });
  mrb.collides('oil', (m) => {
    go("oildeath");
  });
  mrp.collides('peel', (m) => {
    go("bananadeath");
  });
  mrp.collides('sauce', (m) => {
    go("saucedeath");
  });
  mrb.collides('sauce', (m) => {
    go("saucedeath");
  });
  
  
  
  mrp.collides('door', (m) => {
    destroy(mrp);
    mrb.collides('door', (m) => {
      destroy(mrb);
      go("lvl2");
    });
  });
});


go("home");


//
