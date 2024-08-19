export function formatStartAtToDate(dateString: string): string {
  const date = new Date(dateString);

  const month = date.getMonth() + 1;
  const day = date.getDate();
  let hours = date.getHours();
  const minutes = date.getMinutes();

  const isPM = hours >= 12;
  const period = isPM ? "오후" : "오전";

  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  // 분이 10보다 작을 경우 앞에 0을 붙임
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${month}월 ${day}일 ${period} ${hours}시 ${minutesString}분`;
}
