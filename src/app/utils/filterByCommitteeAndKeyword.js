function filterByCommitteeAndKeyword(data, committeeName, keyword) {
  return data.filter((item) => {
    // ถ้าไม่ได้ส่ง committeeName มา → ผ่าน
    const matchCommittee =
      !committeeName || item.committee.includes(committeeName);

    // ถ้าไม่ได้ส่ง keyword มา → ผ่าน
    const matchKeyword =
      !keyword ||
      item.keywords.filter((k) =>
        k.toLowerCase().includes(keyword.toLowerCase())
      );

    // ใช้ AND ทั้งคู่
    return matchCommittee && matchKeyword;
  });
}
export default filterByCommitteeAndKeyword;
