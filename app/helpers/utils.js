export function filterCars (car, filters) {
  for (const feature in filters.reqFeatures) {
    if (feature === 'hasColor' && filters.reqFeatures[feature]) {
      if (car.color !== filters.reqColor) { return false }
    } else if (feature === 'hasPrice' && filters.reqFeatures[feature]) {
      if (car.price > filters.reqPrice) { return false }
    } else if (filters.reqFeatures[feature] && !car[feature]) {
      return false
    }
  }

  let hasOptional = false

  for (const feature in filters.wantFeatures) {
    if (filters.wantFeatures[feature]) {
      hasOptional = true
      if (feature === 'hasColor') {
        if (car.color === filters.wantColor) { return true }
      } else if (feature === 'hasPrice' && filters.wantFeatures[feature]) {
        if (car.price <= filters.wantPrice) { return true }
      } else if (car[feature]) {
        return true
      }
    }
  }

  return !hasOptional
}
