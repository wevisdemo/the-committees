function groupCommittee(data) {
  const result = [];
  const map = {};

  data.forEach((item) => {
    const committeeName = item.committee;
    const committeeHouse = item.house;

    if (!map[committeeName]) {
      map[committeeName] = {
        committee: committeeName,
        house: committeeHouse,
        houses: new Set([committeeHouse]), // Track unique houses
        sum: 1,
      };
    } else {
      map[committeeName].houses.add(committeeHouse);
      // Update house field if both types exist
      if (map[committeeName].houses.size > 1) {
        map[committeeName].house = "สว.,สส.";
      }
      map[committeeName].sum += 1;
    }
  });

  for (const key in map) {
    const item = { ...map[key] };
    delete item.houses; // Remove the tracking Set before returning
    result.push(item);
  }

  result.sort((a, b) => b.sum - a.sum);

  return result;
}

export default groupCommittee;
