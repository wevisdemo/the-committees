function groupCommittee(data) {
  const result = [];
  const map = {};

  data.forEach((item) => {
    const committeeName = item.committee;
    const committeeHouse = item.house;
    const key = `${committeeName}_${committeeHouse}`; // Create unique key combining name and house

    if (!map[key]) {
      map[key] = {
        committee: committeeName,
        house: committeeHouse,
        sum: 1,
      };
    } else {
      map[key].sum += 1;
    }
  });

  // Convert map to array
  for (const key in map) {
    result.push(map[key]);
  }

  // Sort by sum descending
  result.sort((a, b) => b.sum - a.sum);

  return result;
}

export default groupCommittee;
