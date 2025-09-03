function filterByCommitteeAndKeyword(data, committeeName, keyword, options) {
  return data.filter((item) => {
    // ถ้าไม่ได้ส่ง committeeName มา → ผ่าน
    const matchCommittee =
      !committeeName || item.committee.includes(committeeName);

    // ถ้าไม่ได้ส่ง keyword มา → ผ่าน
    const matchKeyword =
      !keyword ||
      item.keywords.some((k) =>
        k.toLowerCase().includes(keyword.toLowerCase())
      );

    const matchOptions = !options || item.house === options;

    // ใช้ AND ทั้งคู่
    return matchCommittee && matchKeyword && matchOptions;
  });
}
export default filterByCommitteeAndKeyword;
