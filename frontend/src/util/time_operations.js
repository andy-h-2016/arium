

const daysCounter = (priorDate, latterDate = new Date()) => {
  if (priorDate === undefined) {return 0};
  const priorDateLocal = new Date(priorDate.getFullYear(), priorDate.getMonth(), priorDate.getDate())
  const latterDateLocal = new Date(latterDate.getFullYear(), latterDate.getMonth(), latterDate.getDate())
  console.log('priorDate', priorDate)
  console.log('latterDate', latterDate)
  const msElapsed = latterDateLocal - priorDateLocal;
  const daysElapsed = msElapsed / (1000 * 60 * 60 * 24);

  return daysElapsed;
}

module.exports = {daysCounter}