function formatEventDateTime(
  startAt: string | undefined,
  endAt: string | undefined,
): string {
  if (!startAt || !endAt) {
    return "이벤트 날짜가 유효하지 않습니다.";
  }

  console.log(startAt, endAt);

  const startDate = new Date(startAt);
  const endDate = new Date(endAt);

  if (startDate > endDate) {
    return "이벤트 날짜가 올바르지 않습니다.";
  }

  const startMonth = startDate.getMonth() + 1;
  const startDay = startDate.getDate();
  const endMonth = endDate.getMonth() + 1;
  const endDay = endDate.getDate();

  const startHours = startDate.getHours();
  const endHours = endDate.getHours();

  const startMinutes = startDate.getMinutes();
  const endMinutes = endDate.getMinutes();

  const startPeriod = startHours >= 12 ? "오후" : "오전";
  const endPeriod = endHours >= 12 ? "오후" : "오전";

  const formattedStartHours = startHours % 12 || 12;
  const formattedEndHours = endHours % 12 || 12;

  const formattedStartMinutes = startMinutes.toString().padStart(2, "0");
  const formattedEndMinutes = endMinutes.toString().padStart(2, "0");

  if (startDay === endDay && startMonth === endMonth) {
    return `${startMonth}월 ${startDay}일 ${startPeriod} ${formattedStartHours}:${formattedStartMinutes}~${formattedEndHours}:${formattedEndMinutes}`;
  } else {
    return `${startMonth}월 ${startDay}일 ${startPeriod} ${formattedStartHours}:${formattedStartMinutes}~${endMonth}월 ${endDay}일 ${endPeriod} ${formattedEndHours}:${formattedEndMinutes}`;
  }
}

export default formatEventDateTime;
