/**
 * 店主围裙与袖套叙事（纯函数，可单测）
 * 穿上围裙 = 进入「可以接住别人」的角色；袖套护住动手做的时间。
 */

export function formatApronLine(day: number): string {
  if (day % 3 === 0) return "围裙系带重新打了结：今天也准备好动手。";
  if (day % 2 === 0) return "亚麻围裙上有一点茶渍：像诚实的店记。";
  return "围裙挂在门后：穿上它，店就醒了。";
}

export function formatCuffLine(circulationsToday: number): string {
  if (circulationsToday <= 0) return "袖套还叠着：第一份手工会把它展开。";
  if (circulationsToday < 3) return "袖套边沿有细粉与花瓣：说明手在忙。";
  return `袖套陪你做了 ${circulationsToday} 次流通：布料比早上更软。`;
}

export function formatApronAside(warmth: number): string {
  if (warmth <= 0) return "围裙口袋是空的：温存会慢慢装进来。";
  if (warmth < 12) return "口袋里有一枚未用的价签：还有空位给下一位。";
  return "围裙口袋鼓鼓的：笔记、丝带、一点点勇气。";
}

export function formatKeeperEncourage(queueLength: number): string {
  if (queueLength <= 0) return "店主也可以歇一下：围裙解开，也不算打烊。";
  if (queueLength === 1) return "有一位在等：系好围裙，慢慢迎上去。";
  return `门外约有 ${queueLength} 份心情——一件围裙，够接住很多双手。`;
}

export function formatApronPair(day: number, circulationsToday: number): string {
  return `${formatApronLine(day)} ${formatCuffLine(circulationsToday)}`;
}
