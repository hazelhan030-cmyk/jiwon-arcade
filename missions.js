// ============================================================
//  지원오락실 미션 목록 (해금 조건)
//  이 파일만 고치면 미션·이름·설명이 바뀌어요. 한 줄 { ... } 이 미션 하나예요.
//
//  reward : 받는 것의 이름표 — 캐릭터(potato) 또는 꾸미기 아이템
//           (아이템 그림은 index.html의 ITEMS에 있어요. 그림이 없는 이름표는 무시돼요)
//           wizHat 견습 마법사 모자 / archHat 대마법사의 수상한 모자 / hachimaki 이자카야 머리띠 / afro 폭탄 머리  (모자)
//           goldChain 수상한 금목걸이 / octoStache 문어 수염  (얼굴)
//           dumbbell 으랏차 아령 / moneyCase 돈가방 / sword 전사의 검  (손)
//           tinyWings 작디작은 날개  (옷)
//  name   : 화면에 보이는 이름 (해금 팝업 "○○를 받았다!", 옷장)
//  desc   : 아이템 설명 (해금 팝업, 옷장에서 눌렀을 때)
//  hidden : true 면 히든 — 잠겨 있는 동안 이름·설명은 보이고 해금 미션만 ??? 로 가려져요
//  text   : 옷장에 보이는 해금 미션 설명
//
//  game   : 어느 게임의 미션인지
//           jump = 줄넘기 / bj = 블랙잭(감자 카지노) / tako = 타코야끼 타이쿤 / mon = 몬스터 팡팡
//           any  = 아무 게임이나
//  type   : 조건 종류
//           enter  = 그 게임에 들어가기만 하면
//           score  = 한 판 점수가 value점 이상
//           exact  = 한 판 점수가 딱 value점
//           streak = 그 게임에서 나가지 않고 value판 연속 (다시 하기로 이어 한 판 포함, 나가면 0부터)
//           stat   = 한 판 기록 stat 이 value 이상
//           total  = 여러 판에 걸쳐 쌓인 누적 기록 stat 이 value 이상
//  stat   : stat / total 에서 쓰는 기록 이름
//           mon  : stun = 그 판의 스턴(헛방) 횟수
//           bj   : allinWins = 나가지 않는 동안 올인으로 연속 이긴 최고 횟수 (비기거나 지면 끊김)
//           tako : served = 손님에게 낸 타코야키 개수 (PERFECT + GOOD)
//  value  : 숫자
//
//  만두(mandu)는 처음부터 가지고 있는 기본 캐릭터예요.
//  한 번 받은 것은 미션을 지우거나 바꿔도 사라지지 않아요.
//  미션 팝업은 게임오버 뒤에 떠요 (enter는 게임에 들어갈 때).
// ============================================================
window.ARCADE_MISSIONS = [
  { reward: 'potato', game: 'bj', type: 'enter',
    text: '감자 카지노(블랙잭)에 입장하기' },

  { reward: 'wizHat', name: '견습 마법사 모자', desc: '초보 마법사 클럽 회원이 되었다!',
    game: 'mon', type: 'score', value: 300, text: '몬스터 팡팡에서 300점 이상 달성' },

  { reward: 'goldChain', name: '수상한 금목걸이', desc: '카지노에서 볼법한 금목걸이', hidden: true,
    game: 'bj', type: 'streak', value: 10, text: '블랙잭에서 나가지 않고 연속 10게임 하기' },

  { reward: 'tinyWings', name: '작디작은 날개', desc: '날아갑니다…~',
    game: 'jump', type: 'score', value: 50, text: '줄넘기 50점 이상 달성' },

  { reward: 'archHat', name: '대마법사의 수상한 모자', desc: '모자가 속삭인다… 너는 위대한 마법사가 될 운명이야!',
    game: 'mon', type: 'score', value: 1500, text: '몬스터 팡팡에서 1500점 이상 달성' },

  { reward: 'hachimaki', name: '이자카야 머리띠', desc: '이랏샤이마세~',
    game: 'tako', type: 'total', stat: 'served', value: 100, text: '타코야키를 손님에게 누적 100개 내기' },

  { reward: 'dumbbell', name: '으랏차 아령', desc: '이제 근력운동을 해야할 것 같다.', hidden: true,
    game: 'jump', type: 'streak', value: 5, text: '줄넘기에서 나가지 않고 연속 5판 하기' },

  { reward: 'octoStache', name: '문어 수염', desc: '문어다리같은 콧수염',
    game: 'tako', type: 'score', value: 50, text: '타코야키 타이쿤 50점 이상 달성' },

  { reward: 'afro', name: '폭탄 머리', desc: '실수로 다 태워버렸다', hidden: true,
    game: 'mon', type: 'stat', stat: 'stun', value: 5, text: '몬스터 팡팡 한 판에서 스턴 5번' },

  { reward: 'moneyCase', name: '돈가방', desc: '난 딴 돈의 절반만 가져가',
    game: 'bj', type: 'stat', stat: 'allinWins', value: 3, text: '블랙잭에서 올인으로 3판 연속 이기기' },

  { reward: 'sword', name: '전사의 검', desc: '나는 법사보다 전사.', hidden: true,
    game: 'mon', type: 'exact', value: 0, text: '몬스터 팡팡에서 정확히 0점' },
];
