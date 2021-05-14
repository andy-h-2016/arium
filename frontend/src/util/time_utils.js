

export const daysCounter = (priorDate, latterDate = new Date()) => {
  if (priorDate === undefined) {return 0};
  const priorDateLocal = new Date(priorDate.getFullYear(), priorDate.getMonth(), priorDate.getDate())
  const latterDateLocal = new Date(latterDate.getFullYear(), latterDate.getMonth(), latterDate.getDate())
  const msElapsed = latterDateLocal - priorDateLocal;
  const daysElapsed = msElapsed / (1000 * 60 * 60 * 24);

  return daysElapsed;
}

export const getLocalDateTimeStrings = () => {
  const dateTimeFormat = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  };
  const currentUtcTime = new Date();
  const localDateTimeString = new Intl.DateTimeFormat('en-US', dateTimeFormat).format(currentUtcTime);
  const [_, dayOfTheWeek, localDateString, localTimeString] = localDateTimeString.match(/(\w+),\s([\w\s\d]+),\s(\d\d:.+)/);
  return {date: localDateString, time: localTimeString};
}

