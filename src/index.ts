const showOvertime = () => {
  const table = document.evaluate(
    //  所定外時間を取得
    "//div[@class='htBlock-adjastableTableF_inner']/table/tbody/tr/td[@class='custom2 specific-align_right ']/p",
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  const range = [...Array(table.snapshotLength)].map((_, k) => k);
  // => [0, 1, 2 ...]

  const totalMinutes = range.reduce((prev, index) => {
    const overtime = table
      .snapshotItem(index)
      ?.firstChild?.parentElement?.innerText.split(".");
    if (overtime && overtime.length === 2) {
      // 例 1.32 = 1時間32分
      // overtime[0] = 1, overtime[1] = 32 なので、 分に変換して加算していく
      return prev + Number(overtime[0]) * 60 + Number(overtime[1]);
    }
    // 年休や休日などで所定時間が空欄の場合はスキップ
    return prev;
  }, 0);
  const hour = (totalMinutes / 60) | 0;
  const minute = totalMinutes % 60;
  alert(`今月の残業時間は ${hour}時間${minute}分 です`);
};
showOvertime();
