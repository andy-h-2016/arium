

const daysCounter = (priorDate, latterDate) => {
  if (priorDate === undefined) {return 0};
  latterDate ||= new Date();

  const priorDateSansTime = new Date(priorDate.getFullYear(), priorDate.getMonth(), priorDate.getDate())
  const latterDateSansTime = new Date(latterDate.getFullYear(), latterDate.getMonth(), latterDate.getDate())
  const msElapsed = latterDateSansTime - priorDateSansTime;
  const daysElapsed = msElapsed / (1000 * 60 * 60 * 24);

  return daysElapsed;
}

module.exports = {daysCounter}
