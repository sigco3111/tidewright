/* ============================================================================
   TIDEWRIGHT — content.js
   The nine tides, the tools, the codex. Everything a designer would touch.
   ========================================================================== */
'use strict';

(function (T) {

/* ─────────────────────────── icons ─────────────────────────── */
const I = {
  shovel: '<path d="M6 3v6M4 9h4l-1 8a2 2 0 0 0 4 0l-1-8h4M6 3h0"/><path d="M8 17l-3 4h6l-3-4z" transform="translate(4 0)"/>',
  pail:   '<path d="M5 8h14l-1.6 11a2 2 0 0 1-2 1.8H8.6a2 2 0 0 1-2-1.8L5 8z"/><path d="M7 8a5 5 0 0 1 10 0"/><path d="M9.5 12.5v4M14.5 12.5v4"/>',
  pat:    '<path d="M4 15h16"/><path d="M7 15V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6"/><path d="M9 4v2M12 3v3M15 4v2"/><path d="M4 19h16"/>',
  water:  '<path d="M12 3s6 6.4 6 10.4A6 6 0 0 1 6 13.4C6 9.4 12 3 12 3z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/>',
  bucket: '<path d="M7 21V9l5-5 5 5v12"/><path d="M7 9h10"/><path d="M9 9V6.5M12 9V4.5M15 9V6.5"/><path d="M4 21h16"/>',
  wall:   '<path d="M3 20h18"/><path d="M4 20v-6h16v6"/><path d="M4 14v-3h3v3M10 14v-3h4v3M17 14v-3h3v3"/>',
  carve:  '<path d="M15 3l6 6-9.5 9.5-6-6L15 3z"/><path d="M11.5 6.5l6 6"/><path d="M5.5 12.5L3 21l8.5-2.5"/>',
  drip:   '<path d="M12 2c0 0 3 4.5 3 6.5a3 3 0 1 1-6 0C9 6.5 12 2 12 2z"/><path d="M8 21c0-4 1.6-6 4-6s4 2 4 6"/><path d="M6 21h12"/>',
  level:  '<path d="M3 12h18"/><path d="M3 12l3-3M21 12l-3-3M3 12l3 3M21 12l-3 3"/><path d="M12 4v3M12 17v3"/>',
  adorn:  '<path d="M12 3l2.2 5.6L20 9.2l-4.4 3.6 1.4 5.7L12 15.6 7 18.5l1.4-5.7L4 9.2l5.8-.6L12 3z"/>',
  flagI:  '<path d="M6 21V3"/><path d="M6 4h11l-2.5 3.5L17 11H6"/>',
  shellI: '<path d="M12 20C6 20 3 15 3 11a9 9 0 0 1 18 0c0 4-3 9-9 9z"/><path d="M12 20V4M8 19.2L6 5.4M16 19.2L18 5.4"/>',
  starI:  '<path d="M12 3l2.6 6.3 6.8.5-5.2 4.4 1.6 6.6L12 17.3 6.2 20.8l1.6-6.6L2.6 9.8l6.8-.5L12 3z"/>',
  woodI:  '<path d="M3 14c3-3 5 1 8-2s4 2 7-1"/><path d="M4 18c3-3 5 1 8-2s4 2 7-1"/>',
  lampI:  '<path d="M12 3a5 5 0 0 1 5 5c0 3-2 4-2 6H9c0-2-2-3-2-6a5 5 0 0 1 5-5z"/><path d="M10 17h4M10.5 20h3"/>',
  cairnI: '<path d="M8 20h8"/><ellipse cx="12" cy="18" rx="5" ry="2.2"/><ellipse cx="12" cy="13.6" rx="3.8" ry="1.9"/><ellipse cx="12" cy="9.8" rx="2.7" ry="1.6"/><ellipse cx="12" cy="6.6" rx="1.7" ry="1.2"/>',
  parasolI:'<path d="M12 12v9"/><path d="M10.5 21h3"/><path d="M2.5 12a9.5 9.5 0 0 1 19 0z"/><path d="M6.5 12c0-5.5 2.5-9.5 5.5-9.5s5.5 4 5.5 9.5"/>',
  pinwheelI:'<path d="M12 12V21"/><circle cx="12" cy="12" r="1.4"/><path d="M12 10.6c0-4 1-6.6 3.4-6.6S18 8 13.4 11.3"/><path d="M13.4 12.6c4 0 6.6 1 6.6 3.4S16 18.6 12.7 14"/><path d="M10.6 12.6c-4 0-6.6-1.4-6.6-3.6S8 5.4 11.3 10"/>',
  pailI:  '<path d="M4 8h13l-1.4 10.6a2 2 0 0 1-2 1.7H7.4a2 2 0 0 1-2-1.7L4 8z"/><path d="M6 8a4.5 4.5 0 0 1 9 0"/><path d="M19 20V9M21.5 9h-5"/>',
  boatI:  '<path d="M3 17h18l-2.5 4h-13L3 17z"/><path d="M12 16V3"/><path d="M12.8 4.2c3 1.6 5 3.4 6.2 5.6h-6.2z"/><path d="M11.2 6.5C9 7.6 7.4 8.6 6.2 9.8h5z"/>',
  bottleI:'<path d="M10 2h4v4.5c0 1 .6 1.6 1.2 2.3.9 1 1.3 1.8 1.3 3V19a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-7.2c0-1.2.4-2 1.3-3C9.4 8.1 10 7.5 10 6.5z"/><path d="M9.5 13h5"/>',
  kelpI:  '<path d="M8 21c-1.5-4 .5-7 1-11S8 3 8 3"/><path d="M14 21c2-4 .5-7 0-11s1.5-6 1.5-6"/><path d="M11 21c-.5-3 1-5 1-8"/>',
  /* mould shapes */
  mTurret:'<path d="M6 21V9l6-5 6 5v12"/><path d="M6 9h12"/><path d="M8 9V6.2M12 9V4.5M16 9V6.2"/>',
  mKeep:  '<path d="M4 21V7h16v14z"/><path d="M4 7V4h3v2h3V4h4v2h3V4h3v3"/>',
  mGate:  '<path d="M3 21V7h5v14M16 21V7h5v14"/><path d="M8 21v-8h8v8"/><path d="M10.5 21v-4a1.5 1.5 0 0 1 3 0v4"/>',
  mStar:  '<path d="M12 2.5l2.8 6.3 6.8.6-5.2 4.5 1.6 6.6L12 17l-6 3.5 1.6-6.6L2.4 9.4l6.8-.6L12 2.5z"/>',
  mZig:   '<path d="M2 21h20"/><path d="M4 21v-4h16v4"/><path d="M6.5 17v-4h11v4"/><path d="M9 13V9h6v4"/><path d="M11 9V5.5h2V9"/>',
  mSpire: '<path d="M12 2l4.5 19h-9z"/><path d="M9 15h6M10 9h4"/>',
  mScallop:'<path d="M12 20.5C6 20.5 2.8 15.5 2.8 11a9.2 9.2 0 0 1 18.4 0c0 4.5-3.2 9.5-9.2 9.5z"/><path d="M12 20.5V3M8 20.2 6 4.6M16 20.2 18 4.6"/>',
  mFish:  '<path d="M20 12c-2.6 3.6-5.4 5.4-8.4 5.4S6 15.6 4 12c2-3.6 4.6-5.4 7.6-5.4S17.4 8.4 20 12z"/><path d="M20 12l3-3.4v6.8L20 12z"/><circle cx="8" cy="11" r=".9"/>',
  mCrab:  '<ellipse cx="12" cy="13.5" rx="5.5" ry="4"/><path d="M6 8.5 3.6 6.4a2 2 0 1 1 2-2L7.6 6.5"/><path d="M18 8.5l2.4-2.1a2 2 0 1 0-2-2L16.4 6.5"/><path d="M6.6 16 3 18M17.4 16 21 18M7.5 12.5 3.5 12M16.5 12.5 20.5 12"/>',
  mStarfish:'<path d="M12 3l2.4 6.1 6.5.4-5 4.2 1.7 6.3L12 16.6 6.4 20l1.7-6.3-5-4.2 6.5-.4L12 3z"/><circle cx="12" cy="12.5" r="1"/>'
};
T.ICONS = I;

/* ─────────────────────────── tools ─────────────────────────── */
/* `moves`: what the tool does to the amount of sand in the world.
   -1 takes it away (into your pail) · +1 puts it back · 0 leaves it alone and
   changes what the sand is *like*. Shown in the interface, because the
   difference between Water and Drip is exactly this and nothing else. */
T.TOOLS = [
  { id:'shovel', key:'1', name:'삽',   icon:I.shovel, mode:1, unlock:1, moves:-1,
    rad:1.5, str:0.62, short:'모래를 퍼내 양동이를 채운다.',
    desc:'모래를 세상에서 퍼내 양동이에 담는다. 수분도 그대로다. 촉촉한 모래를 파면 양동이도 촉촉하다. 재료를 얻는 방법이자 해자를 만드는 방법이다.' },
  { id:'pail',   key:'2', name:'양동이',     icon:I.pail,   mode:2, unlock:1, moves:1,
    rad:1.3, str:0.55, short:'양동이의 모래를 쏟아 쌓는다.',
    desc:'진짜 모래를 던져 떨어진 곳에 쌓는다. 양동이의 수분 상태 그대로 쏟아지니, 쓰기 전에 수치를 확인하자.' },
  { id:'pat',    key:'3', name:'다지기',      icon:I.pat,    mode:3, unlock:1, moves:0,
    rad:1.1, str:0.55, short:'꾹 눌러 다진다. 모래는 늘지 않는다.',
    desc:'압축한다. 다진 모래는 훨씬 가파른 면을 유지하고 바다에도 잘 버틴다. 어느 해변에서든 가장 덜 쓰이는 도구다.' },
  { id:'water',  key:'4', name:'물',    icon:I.water,  mode:4, unlock:1, moves:0,
    rad:1.6, str:0.60, short:'이미 있는 모래를 적신다. 모래는 더하지 않는다.',
    desc:'브러시 아래 모래의 수분을 올려 알갱이들이 서로 이어지고 더 가파르게 설 수 있게 한다. 무언가를 쌓지는 않는다. 쌓으려면 양동이나 물방울 도구를 쓰자.' },
  { id:'bucket', key:'5', name:'틀',    icon:I.bucket, mode:10, unlock:1, moves:1,
    rad:1.0, str:1.0, short:'누르고 있으면 채워지고, 클릭하면 찍어낸다.',
    desc:'촉촉한 모래 위에서 누르고 있으면 틀이 가득 찬다. 그다음 조준하고 클릭해서 찍어낸다. 나오는 모래는 들어간 모래와 똑같이 젖어 있다.' },
  { id:'wall',   key:'6', name:'성벽',  icon:I.wall,   mode:6, unlock:2, moves:1,
    rad:0.9, str:0.9, short:'드래그해서 벽을 쌓는다.',
    desc:'처음 누른 높이까지 벽을 올린다. 바다 쪽에 길고 다져 쌓은 둑은 방파제가 된다.' },
  { id:'carve',  key:'7', name:'깎기',    icon:I.carve,  mode:5, unlock:3, moves:-1,
    rad:0.55, str:0.62, short:'처음 누른 높이까지 깎아 내린다.',
    desc:'삽이 아니라 칼날이다. 원하는 높이를 누르고 드래그하면 지나간 곳이 모두 그 높이까지 내려가고, 깎인 가장자리는 단단히 다져져 무너지지 않는다. 벽 옆의 모래를 누르고 벽을 가로질러 드래그하면 출입구가 생긴다. 촉촉한 모래는 선명한 가장자리를 남기고, 마른 모래는 부서져 비탈이 된다.' },
  { id:'level',  key:'8', name:'평탄화',    icon:I.level,  mode:8, unlock:3, moves:0,
    rad:1.8, str:0.6, short:'처음 누른 높이로 평평하게 만든다.',
    desc:'처음 클릭한 곳의 높이로 땅을 맞춘다. 안뜰, 단상, 탑의 평평한 기초에 좋다.' },
  { id:'drip',   key:'9', name:'물방울 쌓기',     icon:I.drip,   mode:7, unlock:4, moves:1,
    rad:0.34, str:0.75, short:'아주 질척한 모래로 첨탑을 쌓는다.',
    desc:'양동이의 모래를 꺼내 나올 때 물을 조금 섞고 한 덩이씩 떨어뜨린다. 해변에서만 만들 수 있는 울퉁불퉁한 고딕 첨탑이 자란다. 양동이가 비면 첨탑도 부실하다. 물과 달리 이 도구는 쌓는다.' },
  { id:'adorn',  key:'0', name:'장식',    icon:I.adorn,  mode:0, unlock:5, moves:0,
    rad:0.5, str:1, short:'장난감을 놓는다.',
    desc:'장식물은 아래 모래가 움직이면 기울고, 물이 닿으면 쓰러진다.' }
];

T.ADORN = [
  { id:'flag',     name:'깃발',   icon:I.flagI,     scale:1.0 },
  { id:'parasol',  name:'파라솔',   icon:I.parasolI,  scale:1.0 },
  { id:'pinwheel', name:'바람개비',  icon:I.pinwheelI, scale:1.0 },
  { id:'lantern',  name:'등불',   icon:I.lampI,     scale:1.0 },
  { id:'pail',     name:'양동이와 삽', icon:I.pailI,  scale:1.0 },
  { id:'boat',     name:'장난감 배',  icon:I.boatI,     scale:1.0 },
  { id:'shell',    name:'가리비',   icon:I.shellI,    scale:1.0 },
  { id:'star',     name:'불가사리',  icon:I.starI,     scale:1.0 },
  { id:'wood',     name:'유목', icon:I.woodI,     scale:1.0 },
  { id:'kelp',     name:'켈프',      icon:I.kelpI,     scale:1.0 },
  { id:'bottle',   name:'병',    icon:I.bottleI,   scale:1.0 },
  { id:'cairn',    name:'돌탑',     icon:I.cairnI,    scale:1.0 }
];

/* ─────────────────────────── the moulds ───────────────────────────
   The plastic shapes in the bottom of the beach bag. `id` indexes
   mouldShape() in glsl.js — keep the two in step.                   */
T.MOULDS = [
  { id:0, name:'원형 탑', icon:I.mTurret,  rad:0.95, h:1.55, detail:9,  wet:0.55 },
  { id:1, name:'사각 본채',  icon:I.mKeep,    rad:1.05, h:1.35, detail:0,  wet:0.55 },
  { id:2, name:'성문',    icon:I.mGate,    rad:1.30, h:1.25, detail:0,  wet:0.58 },
  { id:3, name:'별 요새',    icon:I.mStar,    rad:1.35, h:0.95, detail:0,  wet:0.55 },
  { id:4, name:'지구라트',     icon:I.mZig,     rad:1.25, h:1.25, detail:0,  wet:0.50 },
  { id:5, name:'첨탑',        icon:I.mSpire,   rad:0.70, h:2.10, detail:0,  wet:0.68 },
  { id:6, name:'가리비',      icon:I.mScallop, rad:0.95, h:0.50, detail:0,  wet:0.42 },
  { id:7, name:'물고기',         icon:I.mFish,    rad:1.20, h:0.46, detail:0,  wet:0.42 },
  { id:8, name:'게',         icon:I.mCrab,    rad:1.20, h:0.42, detail:0,  wet:0.45 },
  { id:9, name:'불가사리',     icon:I.mStarfish,rad:1.20, h:0.34, detail:0,  wet:0.38 }
];

/* ─────────────────────────── the nine tides ─────────────────────────── */
function O(text, fn) { return { text, check: fn }; }

T.TIDES = [
  { n:1, name:'첫 소금',
    verse:'“첫 번째 밀물은 당신이 거기 있다는 것만 알고 싶어 한다. 작고 정직한 것을 내어 주어라. 그래도 한 모퉁이는 가져갈 것이다. 그것이 바다의 인사법이다.”',
    low:-0.34, high:0.30, build:170, flood:62, amp:0.55, sun:[62,205], cloud:0.55,
    objs:[
      O('기억 320 남기기', s => s.worth >= 320),
      O('밀물이 지나가도 4분의 3 지키기', s => s.kept >= 0.75)
    ] },
  { n:2, name:'양동이가 돌다',
    verse:'“틀은 당신과 모래 속 물 사이의 약속이다. 약속을 깨고 마른 탑을 찍어내면, 모래가 당신을 어떻게 생각하는지 정확히 보여 줄 것이다.”',
    low:-0.32, high:0.44, build:170, flood:66, amp:0.68, sun:[52,176], cloud:0.6,
    objs:[
      O('만조선보다 1.4 m 높은 구조물 세우기', s => s.peakAbove >= 1.4),
      O('기억 520 남기기', s => s.worth >= 520),
      O('밀물이 지나가도 10분의 7 지키기', s => s.kept >= 0.70)
    ] },
  { n:3, name:'도랑과 둑',
    verse:'“모든 도랑은 곧 둑이다. 파낸 흙은 어딘가로 가야 하고, 그곳을 정하는 것이 기술의 전부다. 바다 쪽으로 파고, 바다에서 먼 쪽으로 쌓아라.”',
    low:-0.30, high:0.56, build:180, flood:72, amp:0.80, sun:[43,150], cloud:0.7,
    objs:[
      O('물이 실제로 차오르는 해자를 파기', s => s.moatFilled),
      O('기억 760 남기기', s => s.worth >= 760),
      O('밀물이 지나가도 10분의 7 지키기', s => s.kept >= 0.70)
    ] },
  { n:4, name:'다지는 밀물',
    verse:'“다진 모래는 손바닥 아래에서 독특한 소리를 낸다. 다른 방에서 문이 닫히는 것 같은 둔하고 가까운 소리다. 어디서나 그 소리가 들릴 때까지 다져라.”',
    low:-0.28, high:0.66, build:180, flood:78, amp:0.94, sun:[33,127], cloud:0.75,
    objs:[
      O('제대로 다진 모래 45 m³ 확보', s => s.packed >= 45),
      O('기억 1000 남기기', s => s.worth >= 1000),
      O('밀물이 지나가도 3분의 2 지키기', s => s.kept >= 0.66)
    ] },
  { n:5, name:'황금빛 물',
    verse:'“다섯 번째 밀물에는 해가 물 위로 내려앉아 해안 전체가 갓 찍은 동전 빛이 된다. 멈춰서 바라보지 마라. 여섯 번째 밀물이 벌써 오고 있다.”',
    low:-0.26, high:0.76, build:185, flood:84, amp:1.08, sun:[23,108], cloud:0.85,
    objs:[
      O('만조선보다 1.9 m 높은 구조물 세우기', s => s.peakAbove >= 1.9),
      O('기억 1350 남기기', s => s.worth >= 1350),
      O('밀물이 지나가도 3분의 2 지키기', s => s.kept >= 0.66)
    ] },
  { n:6, name:'등불들',
    verse:'“벨라마르는 사백 년 동안 매일 저녁 방파제를 따라 등불을 밝혔다. 마지막 저녁에도 밝혔다. 바다가 되돌릴 수 없는 것은 바로 그 부분이다.”',
    low:-0.24, high:0.86, build:190, flood:90, amp:1.22, sun:[13,94], cloud:0.8,
    objs:[
      O('장식 여섯 개를 놓고 네 개는 세워 두기', s => s.propsAlive >= 4),
      O('기억 1700 남기기', s => s.worth >= 1700),
      O('밀물이 지나가도 5분의 3 지키기', s => s.kept >= 0.60)
    ] },
  { n:7, name:'서쪽에서 온 너울',
    verse:'“이제는 날씨다. 파도는 세 개씩 밀려오고, 세 번째는 거짓말쟁이다. 세 번째를 대비해 지어라.”',
    low:-0.22, high:0.95, build:195, flood:96, amp:1.48, sun:[5,84], cloud:1.0,
    objs:[
      O('기억 1900 남기기', s => s.worth >= 1900),
      O('다진 모래 85 m³ 확보', s => s.packed >= 85),
      O('밀물이 지나가도 5분의 3 지키기', s => s.kept >= 0.60)
    ] },
  { n:8, name:'황혼의 물',
    verse:'“여덟 번째 밀물 즈음이면 이것을 더는 모래로 생각하지 않게 된다. 좋다. 모래도 한참 전부터 당신을 낯선 사람으로 여기지 않았다.”',
    low:-0.20, high:1.04, build:200, flood:104, amp:1.66, sun:[-4,76], cloud:0.9,
    objs:[
      O('기억 2300 남기기', s => s.worth >= 2300),
      O('만조선보다 2.4 m 높은 구조물 세우기', s => s.peakAbove >= 2.4),
      O('밀물이 지나가도 절반 넘게 지키기', s => s.kept >= 0.55)
    ] },
  { n:9, name:'아홉 번째 밀물',
    verse:'“아홉 번째는 어둠 속에서 오는 밀물이고, 끝까지 들어온다. 물이 돌아설 때 서 있는 것은 더 이상 당신의 것이 아니며 애초에 그랬던 적도 없다. 그것은 형태의 것이다. 형태를 지켜라.”',
    low:-0.18, high:1.14, build:215, flood:120, amp:1.85, sun:[-13,68], cloud:0.7,
    objs:[
      O('기억 2700 남기기', s => s.worth >= 2700),
      O('어두운 물이 지나가도 절반 지키기', s => s.kept >= 0.50),
      O('끝까지 등불 하나를 세워 두기', s => s.lanternAlive)
    ] }
];

/* ─────────────────────────── codex ─────────────────────────── */
T.CODEX = [
  { id:'c1', tide:1, title:'이곳에 있던 나라에 대하여',
    src:'타이드라이트 입문서, 서문',
    body:[
      '벨라마르는 낮은 땅의 나라였고, 스스로도 그것을 알았다. 도시들은 강이 만든 둑 위에 세워졌고, 봄마다 둑을 손으로 고쳤으며, 가을마다 바다가 조금씩 되가져갔다. 이 균형은 구백 년쯤 이어졌다.',
      '폭풍으로 끝난 것이 아니다. 연대기들은 그 점을 분명히, 고집스럽게 적고 있고 의심할 이유도 없다. 바다가 잔잔한 고요한 밤에 끝났다. 둑은 멀쩡했고 등불은 켜져 있었다. 아침이 되자 나라가 있던 자리에 물이 있었고, 그것을 가리킬 말은 어느 것도 더는 통하지 않았다.',
      '남은 것은 이 해변이다. 곱게 갈린 벨라마르로 이루어진.'
    ] },
  { id:'c2', tide:2, title:'틀은 왜 젖어 있어야 하는가',
    src:'타이드라이트 입문서, 두 번째 가르침',
    body:[
      '마른 모래를 엄지와 검지로 쥐면 뭉쳐지지 않는다. 물을 조금 더하면 잠깐 고체가 된다. 물이 풀처럼 붙여서가 아니라, 물방울 하나하나가 주변 알갱이를 당기고 수천 개의 작은 메니스커스가 알갱이들을 서로 맞대어 누르기 때문이다.',
      '물을 더하면 물방울들이 서로 닿아 더는 당기지 않는다. 누르는 힘이 사라지고 모래는 흘러내린다.',
      '그러니 젖은 것이 아니라 촉촉하게. 그 경계가 어디인지는 넘어 보는 수밖에 없다. 여러 번 넘게 될 것이고, 그러다 어느 날부터는 넘지 않게 된다.'
    ] },
  { id:'c3', tide:3, title:'해자의 목적',
    src:'현장 노트, 아홉 번째 노베나',
    body:[
      '해자는 물을 막지 않는다. 물을 막는 것은 없다. 해자는 물을 소모시킨다.',
      '벽에 닿는 파도는 에너지를 한꺼번에 벽에 쏟는다. 도랑에 닿는 파도는 먼저 도랑을 채워야 하고, 도랑을 채우는 일은 일이며, 그 일의 값은 파도가 치른다. 그 뒤에 벽에 닿는 것은 더 느리고, 더 얇고, 훨씬 멍청하다.',
      '누구나 걸려드는 결과가 있다. 내륙으로 물이 빠지는 해자는 배달 서비스다. 배수구는 바다 쪽으로 내라.'
    ] },
  { id:'c4', tide:4, title:'안식각에 대하여',
    src:'타이드라이트 입문서, 세 번째 가르침',
    body:[
      '마른 모래를 탁자에 부으면 원뿔이 생긴다. 더 부으면 옆면이 똑같은 더 큰 원뿔이 된다. 더 가파르게 만들 수는 없다. 이 모래에서는 약 33도인 그 각도는 제안이 아니다. 모래가 자신이 될 수 있는 유일한 모양을 알려 주는 것이다.',
      '여기서 짓는 모든 것은 그 각도와의 논쟁이다. 물이 하나의 논거이고, 손바닥이 또 하나의 논거이며, 바다는 그에 대한 반박이다.'
    ] },
  { id:'c5', tide:5, title:'다섯 번째 저녁의 빛깔',
    src:'여백의 메모, 서명 없음',
    body:[
      '노베나의 다섯 번째 밀물에는 빛이 수면을 따라 납작하게 들어와, 약 십일 분 동안 해변의 젖은 면이 모두 거울처럼 된다고 한다. 그 십일 분 동안은 가라앉은 거리가 모래에 비쳐 보인다. 모래가 아니라 비친 모습이라는 구분을 이런 글을 쓰는 이들은 지나치게 즐긴다.',
      '나는 아홉 번 지켜보았다. 거리는 한 번도 보지 못했다. 대신 아주 훌륭한 빛을 아주 많이 보았다. 이제는 그것이 같은 주장을 정직하게 한 것이라고 생각한다.'
    ] },
  { id:'c6', tide:6, title:'등불지기들',
    src:'벨라마르 시 기록 (단편)',
    body:[
      '항목: 방파제 등불지기에게, 이번 분기 기름값 - 지급 완료.',
      '항목: 날씨로 잃은 등불 열한 개의 교체 - 지급 완료.',
      '항목: 홍수가 난 밤의 같은 항목 - 기재가 다른 필체로 끝맺어졌고, *지급 완료*라는 말이 적혀 있다.',
      '장부 전체에서 유일한 친절이며, 누군가 되돌아와 그것을 적었다.'
    ] },
  { id:'c7', tide:7, title:'파도 묶음 읽기',
    src:'현장 노트, 아홉 번째 노베나',
    body:[
      '파도는 고르게 오지 않는다. 묶음으로 오고, 묶음 안에서 점점 커지며, 한 묶음의 마지막 파도가 벽의 밑동을 찾아낸다.',
      '도착하기 약 사 초 전에 그것이 오는 소리가 들린다. 앞쪽의 물이 조용해지기 때문이다. 물이 그 파도의 면 속으로 뒤로 끌려가고 있는 것이다. 해안이 쉬익 하다가 멈추면, 다지기를 멈추고 지켜보라.'
    ] },
  { id:'c8', tide:8, title:'밑동 파기',
    src:'타이드라이트 입문서, 마지막 가르침',
    body:[
      '여기서는 무엇도 쓰러뜨려지지 않는다. 모든 것이 스스로 무너진다.',
      '바다는 탑을 때리지 않는다. 탑 밑동에서 한 줌을 가져갈 뿐이고, 그러면 탑은 모래가 버틸 수 있는 것보다 더 가파른 비탈 위에 서 있게 되고, 그다음에는 서 있지 못한다.',
      '다시 말해 발을 지켜라. 모래성의 꼭대기가 문제였던 적은 한 번도 없다.'
    ] },
  { id:'c9', tide:9, title:'아홉 번째 밀물은 무엇을 위한 것인가',
    src:'타이드라이트 입문서, 맺음말',
    body:[
      '타이드라이트는 무언가를 보존하기 위해 일한다고들 말한다. 그것은 편안하지만 잘못된 이해다.',
      '여기서 만든 것은 아무것도 살아남지 않는다. 아홉 번의 밀물은 긴 시간이 아니고, 아홉 번째가 마지막도 아니다. 열 번째가 있고, 그것은 내일이며, 그것을 지켜보는 사람은 없다.',
      '타이드라이트가 보존하는 것은 *형태*다. 이 알갱이들의 배열이 가능했고, 선택되었고, 평범한 오후에 누군가가 일부러 만들었다는 사실이다. 바다는 모래를 가져갈 수 있다. 그 사실을 가져간 적은 한 번도 없다.',
      '형태를 지켜라. 그다음엔 놓아 주어라. 그리고 다시 하라.'
    ] },
  { id:'cx1', tide:0, hidden:true, title:'첨탑에 대하여',
    src:'해금: 2미터가 넘는 물방울 첨탑을 쌓았다',
    body:[
      '물방울 첨탑은 이 기술에서 건축이 아닌 유일한 부분이다. 계획할 수 없다. 아주 젖은 모래를 한 점 위에 들고 조금씩 놓아 주면, 쌓이는 것은 표면장력과 중력이 완전히 설계한 탑이고 당신은 그 전달 수단일 뿐이다.',
      '구조적으로도 터무니없다. 물이 빠져나가는 중인 물로 이어 붙인 덩어리들의 더미다. 그래서 잘 된 것들은 항상 서둘러 끝나고 항상 약간 틀리며, 같은 것을 두 번 만든 사람이 없다.'
    ] },
  { id:'cx2', tide:0, hidden:true, title:'양동이에 대하여',
    src:'해금: 양동이를 비웠다',
    body:[
      '이 만에 있는 모래 중 이 만의 다른 곳에서 가져오지 않은 모래는 없다.',
      '초보자들은 편하다는 이유로 성 뒤에 구덩이를 판다. 그러다 바다가 그 구덩이를 계단처럼 타고 올라와 성을 뒤에서 가져가면 놀란다.',
      '구덩이가 필요한 곳에 파라. 구덩이가 필요한 곳은 언제나 있다.'
    ] }
];

/* ─────────────────────────── the looks ─────────────────────────── */
T.LOOKS = [
  { id:0, name:'소금과 빛', note:'있는 그대로의 해안' },
  { id:1, name:'양동이와 삽', note:'그림, 잉크, 아늑함' },
  { id:2, name:'해변 갈대', note:'스크린 인쇄 포스터' },
  { id:3, name:'측량도', note:'모래의 측량 지도' },
  { id:4, name:'펠트와 플란넬', note:'공예 장터 디오라마' },
  { id:5, name:'바위 웅덩이', note:'맑은 물 한 발 아래' },
  { id:6, name:'양철 장난감', note:'압연 양철 위 에나멜' },
  { id:7, name:'창작 판화', note:'목판, 거친 윤곽' },
  { id:8, name:'한겨울', note:'철 지난 해변' }
];

/* ─────────────────────────── the day ───────────────────────────
   A beach that faces west: the sun comes up behind the dunes and goes down
   over the water, which is the entire reason anyone builds here.            */
const DAWN = 0.235, DUSK = 0.795;
T.sunFromDay = function (t) {
  const p = (t - DAWN) / (DUSK - DAWN);
  return [66 * Math.sin(Math.PI * p), 272 - 182 * p];
};
T.dayClock = function (t) {
  const m = Math.floor(((t % 1) + 1) % 1 * 1440);
  return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
};
T.dayPhase = function (t) {
  const e = T.sunFromDay(t)[0];
  const rising = t < 0.515;
  if (e < -8) return '깊은 밤';
  if (e < 0)  return rising ? '첫 빛' : '황혼';
  if (e < 8)  return rising ? '일출' : '일몰';
  if (e < 20) return rising ? '이른 빛' : '황금빛 물';
  if (e < 42) return rising ? '아침' : '오후';
  if (e < 60) return rising ? '늦은 아침' : '한낮의 오후';
  return '정오';
};
T.DAY_SPEEDS = [
  { name: '정지',  s: 0 },
  { name: '느림',  s: 1 / 1500 },
  { name: '보통',s: 1 / 720 },
  { name: '빠름', s: 1 / 300 }
];

/* ─────────────────────────── grading ─────────────────────────── */
T.grade = function (s) {
  let pts = 0;
  pts += Math.min(s.worth / Math.max(s.target, 1), 1.6) * 55;
  pts += Math.min(s.kept, 1) * 32;
  pts += s.objsDone / Math.max(s.objsTotal, 1) * 13;
  if (pts >= 96) return { g: 'S', line: '형태가 버텼다. 전부.' };
  if (pts >= 84) return { g: 'A', line: '물이 다시 빠져나갔고, 할 말을 찾지 못했다.' };
  if (pts >= 68) return { g: 'B', line: '한 모퉁이를 가져갔다. 언제나 한 모퉁이는 가져간다.' };
  if (pts >= 50) return { g: 'C', line: '대체로 서 있다. 발부터 무너졌다.' };
  if (pts >= 30) return { g: 'D', line: '바다는 당신의 기초에 의견이 있다.' };
  return { g: 'E', line: '전부 아직 여기 있다. 다만 이제 평평할 뿐이다.' };
};

})(TW);
