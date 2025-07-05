function summarizeKeywords(data) {
  const keywordMap = {};

  data.forEach((item) => {
    if (Array.isArray(item.keywords)) {
      item.keywords.forEach((keyword) => {
        if (keywordMap[keyword]) {
          keywordMap[keyword] += 1;
        } else {
          keywordMap[keyword] = 1;
        }
      });
    }
  });

  // แปลง object เป็น array
  const result = Object.entries(keywordMap).map(([keyword, sum]) => ({
    keyword,
    sum,
  }));

  // ✅ เรียงจากมากไปน้อย
  result.sort((a, b) => b.sum - a.sum);

  return result;
}

export default summarizeKeywords;
//
