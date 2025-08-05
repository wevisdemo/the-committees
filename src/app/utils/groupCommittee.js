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
        sum: 1,
      };
    } else {
      map[committeeName].sum += 1;
    }
  });

  for (const key in map) {
    result.push(map[key]);
  }

  // ✅ Sort จากมาก → น้อย ตาม sum
  result.sort((a, b) => b.sum - a.sum);

  return result;
}

export default groupCommittee;
