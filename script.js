/* ==========================================================================
   Masa Hsin-Lung Tu Portfolio Interactive JavaScript Engine
   ========================================================================== */

// --- Database Definitions ---
const RACES_DATABASE = [
  {
    "id": 85,
    "name": "2026 府城100公里超級馬拉松 09/13 5:30起跑",
    "date": "2026/9/13",
    "time": "30.5K；3:34:50",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 84,
    "name": "2026 聖母廟月老姻緣紅線牽馬拉松",
    "date": "2026/8/15",
    "time": "04:56:58",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 83,
    "name": "2026 年旭海超級馬拉松 - 日月同跑 04/11 六 01:00",
    "date": "4/11/2026",
    "time": "60K, 8:55",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 82,
    "name": "2026 XTRAIL 100K，爬升4000(錶)，94k",
    "date": "2026/3/6~8",
    "time": "19:29",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 81,
    "name": "2026 府城英雄馬拉松 6:00",
    "date": "2/8/2026",
    "time": "04:50:32",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 80,
    "name": "2026 臺南保生盃全國馬拉松 6:10",
    "date": "1/18/2026",
    "time": "01:52:43",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 79,
    "name": "2026 臺灣國際馬拉松(in臺南) 6:30",
    "date": "1/11/2026",
    "time": "04:26:06AM",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 78,
    "name": "2025 南鯤鯓馬拉松 北門",
    "date": "2025/12/13",
    "time": "04:44:10",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 77,
    "name": "2025 跑山獸 75K 11/29 75K, 4:00開跑, 爬升4100,記錄80k",
    "date": "2025/11/29",
    "time": "16:36:54",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 76,
    "name": "2025 赤兔馬 龍崎",
    "date": "2025/11/2",
    "time": "04:46:10",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 75,
    "name": "2025 府城100公里超級馬拉松 09/20 5:30起跑",
    "date": "2025/09/20",
    "time": "80K；10：37",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 74,
    "name": "2025 聖母廟月老姻緣紅線牽 馬拉松 08/23",
    "date": "2025/8/23",
    "time": "05:13:42",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 73,
    "name": "2025 將軍漁港馬拉松 05/25 日，熱",
    "date": "2025/5/25",
    "time": "04:35:56",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 72,
    "name": "2025 阿勃勒西拉雅馬拉松 05/18 日 (官田) ，熱",
    "date": "2025/5/18",
    "time": "06:09",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 71,
    "name": "2025 大亞旺萊馬拉松 03/30 日，熱",
    "date": "2025/3/30",
    "time": "04:22:27",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 70,
    "name": "2025 - Xtrail 100 越野跑挑戰賽 (93k)  - 爬升2715",
    "date": "2025/3/15",
    "time": "21:17",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 69,
    "name": "2025 英雄馬拉松",
    "date": "2025/2/16",
    "time": "04:03:39",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 68,
    "name": "2024南鯤鯓馬拉松 北門",
    "date": "2024/12/14",
    "time": "04:28:54",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 67,
    "name": "曾文水庫12月8日",
    "date": "2024/12/8",
    "time": "04:35:36",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 66,
    "name": "跑山獸 11/23 40k，5:30開跑  - 爬升2305",
    "date": "2024/11/23",
    "time": "08:23:25",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 65,
    "name": "台南秋季馬-新市",
    "date": "2024/11/17",
    "time": "04:35:41",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 64,
    "name": "2024 阿公店盃全國馬拉松賽活動 10/13 繞圈",
    "date": "202410/13",
    "time": "04:46",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 63,
    "name": "2024 聖母廟月老姻緣紅線牽馬拉松",
    "date": "2024/8/10",
    "time": "?",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 63,
    "name": "2024 府城100公里超級馬拉松 9/21 (冷，大雨)",
    "date": "2024/9/21",
    "time": "05:14:27AM",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 62,
    "name": "2024將軍漁港馬拉松 5/26",
    "date": "2024/5/26",
    "time": "05:00:22",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 61,
    "name": "台南市山上花園水道博物館",
    "date": "2024/5/19",
    "time": "04:47:34",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 60,
    "name": "2024年旭海超級馬拉松 4/20 , 70K 車城 1:00AM起跑  - 爬升837",
    "date": "2024/4/20",
    "time": "09:39:56",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 59,
    "name": "2024臺灣文旦大聯盟 柚花追香路跑-下營場",
    "date": "2024/4/14",
    "time": "01:57:35",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 58,
    "name": "2024歲次甲辰年埔鹽順澤宮祈福路跑",
    "date": "2024/3/24",
    "time": "01:56:17",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 57,
    "name": "2024臺灣文旦大聯盟 柚花追香路跑-麻豆場 (frist Garmin record)",
    "date": "2024/3/10",
    "time": "01:50:42",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 56,
    "name": "2024西拉雅情人馬拉松 官田",
    "date": "2024/2/14",
    "time": "04:32:40",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 55,
    "name": "2024府城英雄馬拉松 2/4 (全)",
    "date": "2024/2/4",
    "time": "04:16:31",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 54,
    "name": "2024 紅瓦厝保生盃公益馬拉松 (半)",
    "date": "2024/1/21",
    "time": "01:54:32",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 53,
    "name": "2024-關廟龍崎文衡殿馬拉松",
    "date": "2024/1/1",
    "time": "04:23:27",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 52,
    "name": "2023台糖公益路跑 - 柳營尖山埤渡假村",
    "date": "2023/12/16",
    "time": "01:56:12",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 51,
    "name": "2023-曾文水庫馬拉松",
    "date": "2023/12/10",
    "time": "05:02:55",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 50,
    "name": "2023-彰化-田中馬",
    "date": "2023/11/12",
    "time": "04:37:13",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 49,
    "name": "2023-台南秋季馬-官田",
    "date": "2023.10.22",
    "time": "05:41:27",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 48,
    "name": "2023 聖母廟月老姻緣紅線牽馬拉松 南安區 4 :00PM 鹿耳門",
    "date": "2023/8/19",
    "time": "05:25:24",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 47,
    "name": "2023將軍漁港馬拉松 5/21",
    "date": "2023/5/21",
    "time": "05:15:24",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 46,
    "name": "2023府城超級馬拉松",
    "date": "2023/4/22",
    "time": "53.5 KM / 7: 13",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 45,
    "name": "2023 台灣日月潭越野 45k - 爬升3456",
    "date": "2023/3/18",
    "time": "13:43:48",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 44,
    "name": "2023 柚花追香路跑-麻豆場",
    "date": "2023/3/12",
    "time": "01:58:06",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 43,
    "name": "2023-關廟龍崎文衡殿馬拉松",
    "date": "2023/1/1",
    "time": "04:49",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 42,
    "name": "2022 紅瓦厝保生盃公益馬拉松",
    "date": "2022/12/18",
    "time": "01:57:42",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 41,
    "name": "2022屏東高樹蜜鄉馬拉松",
    "date": "2022/12/11",
    "time": "05:14:13",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 40,
    "name": "2022-彰化-田中馬",
    "date": "2022/11/13",
    "time": "04:47",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 39,
    "name": "2022-台南鯤喜灣星光馬拉松",
    "date": "2022/10/15",
    "time": "04:57",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 38,
    "name": "2022 邂逅黃金雨阿勃勒半馬 紅瓦厝",
    "date": "2022/5/22",
    "time": "02:11",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 37,
    "name": "2022 柚花追香半程馬拉松-麻豆場",
    "date": "2022.3.13",
    "time": "02:10",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 36,
    "name": "2022-關廟龍崎文衡殿馬拉松",
    "date": "2022/1/1",
    "time": "04:58:55",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 35,
    "name": "2021阿里山雲端路跑",
    "date": "2021/5/9",
    "time": "04:51:06",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 34,
    "name": "2021-阿勃勒月世界馬拉松 (龍崎)",
    "date": "2021/4/18",
    "time": "05:14:20",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 33,
    "name": "2021 柚花追香半程馬拉松-麻豆場",
    "date": "2021/3/14",
    "time": "01:48:20",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 32,
    "name": "2021 鯤鯓王文化路跑嘉年華 (北門)",
    "date": "2021/1/10",
    "time": "01:48:33",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 31,
    "name": "2021-關廟龍崎文衡殿馬拉松",
    "date": "2021/1/1",
    "time": "04:41:16",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 30,
    "name": "2020 紅瓦厝保生盃公益馬拉松 （歸仁）",
    "date": "2020/12/20",
    "time": "01:50:25",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 29,
    "name": "2020-山上水道博物館馬拉松",
    "date": "2020/12/12  (已延)",
    "time": "04:35:38",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 28,
    "name": "2020-府城超級馬拉松 6小時",
    "date": "2020/6/13 (已延) ，11/28",
    "time": "49.59K",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 27,
    "name": "2020-彰化-田中馬",
    "date": "2020/11/8",
    "time": "04:21:04",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 26,
    "name": "2020-龍崎-左鎮 308高地越野馬拉松",
    "date": "2020/11/1",
    "time": "05:05:45",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 25,
    "name": "2020-台南秋季馬-東山",
    "date": "2020/10/25",
    "time": "04:54:34",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 24,
    "name": "2020-麻豆; 柚花追香半程馬拉松",
    "date": "2020/8/16  (已延)",
    "time": "02:12:38",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 23,
    "name": "2020-新化木架山馬拉松",
    "date": "2020/2/23",
    "time": "04:52:37",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 22,
    "name": "2020-紅瓦厝（歸仁）;半馬 Power in Run",
    "date": "2020/1/19",
    "time": "02:00:04",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 21,
    "name": "2020-關廟龍崎文衡殿馬拉松",
    "date": "2020/1/1",
    "time": "04:28:08",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 20,
    "name": "2019-曾文水庫馬拉松",
    "date": "2019/12/8",
    "time": "05:01:44",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 19,
    "name": "2019-彰化-田中馬",
    "date": "2019/11/10",
    "time": "05:08:00",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 18,
    "name": "2019-台南秋季馬 三營+鹽水",
    "date": "2019/10/27",
    "time": "05:05:00",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 17,
    "name": "2019-玉井tapani古戰場17k 馬拉松",
    "date": "2019/8/4",
    "time": "01:54:40",
    "category": "other",
    "categoryDisplay": "其它"
  },
  {
    "id": 16,
    "name": "2019-虎頭埤 阿勃勒馬拉松， cháu 6 lìn。",
    "date": "2019/6/16",
    "time": "02:13",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 15,
    "name": "2019-府城超級馬拉松 6小時",
    "date": "2019/4/27",
    "time": "53.516KM",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 14,
    "name": "2019-佳里阿勃勒北頭洋 馬拉松",
    "date": "2019/4/7",
    "time": "04:56",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 13,
    "name": "2019-台中牛罵頭馬拉松",
    "date": "2019/3/3",
    "time": "4:22:43",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 12,
    "name": "2018-曾文水庫馬拉松",
    "date": "2018/12/9",
    "time": "05:25:00",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 11,
    "name": "2018-台南東山秋季馬",
    "date": "2018/10/28",
    "time": "4:34",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 10,
    "name": "2018-新化阿勃勒馬拉松",
    "date": "2018/4/1",
    "time": "05:15:00",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 8,
    "name": "2017-大目降 木架山馬拉松",
    "date": "2017/4/3",
    "time": "05:30:00",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 7,
    "name": "2015-南投望鄉久美超極馬拉松 （72K）",
    "date": "2015.2.28",
    "time": "10:59:30",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 6,
    "name": "2015-新竹鎮西堡超極馬拉松 （100K）",
    "date": "2015.1.25",
    "time": "12:58:40",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 5,
    "name": "2014-南投集集馬拉松",
    "date": "2014.12.28",
    "time": "04:22:05",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 4,
    "name": "2014-綠島馬拉松",
    "date": "2014.9.28~30",
    "time": "04:42:59",
    "category": "full",
    "categoryDisplay": "全馬"
  },
  {
    "id": 3,
    "name": "2014-台東南橫超極馬拉松 （45K）",
    "date": "2014.3.8",
    "time": "06:03:45",
    "category": "ultra",
    "categoryDisplay": "超級馬拉松"
  },
  {
    "id": 2,
    "name": "2013-花蓮太魯閣馬拉松（半馬）",
    "date": "2013.11.2",
    "time": "02:35:38",
    "category": "half",
    "categoryDisplay": "半馬"
  },
  {
    "id": 1,
    "name": "2012-花蓮太魯閣馬拉松 （半馬）",
    "date": "2012.11.3",
    "time": "?",
    "category": "half",
    "categoryDisplay": "半馬"
  }
];

const PATENTS_DATABASE = [
  {
    "title": "MICROSTRIP ANTENNA",
    "id": "US Patent 8,253,630",
    "loc": "US"
  },
  {
    "title": "Slot ANTENNA",
    "id": "US Patent 8,274,442",
    "loc": "US"
  },
  {
    "title": "Slot ANTENNA",
    "id": "US Patent 8,223,081",
    "loc": "US"
  },
  {
    "title": "Slot ANTENNA",
    "id": "US Patent 8,519,901",
    "loc": "US"
  },
  {
    "title": "Solid antenna with upper-lower structure",
    "id": "US Patent 8,421,688",
    "loc": "US"
  },
  {
    "title": "Dual frequency antenna module",
    "id": "US Patent 8,847,847",
    "loc": "US"
  },
  {
    "title": "ANTENNA",
    "id": "US Patent 9,054,422",
    "loc": "US"
  },
  {
    "title": "SLOT ANTENNA AND SLOT ANTENNA ARRAY",
    "id": "US Patent 20100315304",
    "loc": "US"
  },
  {
    "title": "NETWORK DEVICE AND ADAPTOR CARD TYPE DETECTION METHOD THEREOF",
    "id": "US Patent US20090248923",
    "loc": "US"
  },
  {
    "title": "SOLID ANTENNA",
    "id": "US Patent US20120105291",
    "loc": "US"
  },
  {
    "title": "ANTENNA FOR SUPPRESSING HARMONIC SIGNALS",
    "id": "US Patent US20120050124",
    "loc": "US"
  },
  {
    "title": "MONOPOLE ANTENNA",
    "id": "US Patent US20110221637",
    "loc": "US"
  },
  {
    "title": "天線",
    "id": "TW Patent M385811",
    "loc": "TW"
  },
  {
    "title": "裝置與系統偵測方法",
    "id": "TW Patent 200941972",
    "loc": "TW"
  },
  {
    "title": "天線",
    "id": "TW Patent TW201246688",
    "loc": "TW"
  },
  {
    "title": "開槽天線",
    "id": "TW Patent TW201238146",
    "loc": "TW"
  },
  {
    "title": "天線",
    "id": "TW Patent TW201210129",
    "loc": "TW"
  },
  {
    "title": "實心天線",
    "id": "TW Patent TW201201449",
    "loc": "TW"
  },
  {
    "title": "天線",
    "id": "TW Patent TWM401879",
    "loc": "TW"
  },
  {
    "title": "實心天線",
    "id": "TW Patent TW201101585",
    "loc": "TW"
  },
  {
    "title": "實心天線與開槽天線組合",
    "id": "TW Patent TW201101586",
    "loc": "TW"
  },
  {
    "title": "無接地天線",
    "id": "TW Patent TW201101594",
    "loc": "TW"
  },
  {
    "title": "天線",
    "id": "CN Patent 201010263682.7",
    "loc": "CN",
    "noResponse": true
  },
  {
    "title": "天線",
    "id": "CN Patent 201110070406.3",
    "loc": "CN",
    "noResponse": true
  },
  {
    "title": "天線組合",
    "id": "CN Patent 201020587467.8",
    "loc": "CN",
    "noResponse": true
  },
  {
    "title": "實心天線",
    "id": "CN Patent 201010193324.3",
    "loc": "CN",
    "noResponse": true
  },
  {
    "title": "實心天線",
    "id": "CN Patent 200910303410.2",
    "loc": "CN",
    "noResponse": true
  },
  {
    "title": "實心天線與實心天線組合",
    "id": "CN Patent 200910303306.3",
    "loc": "CN",
    "noResponse": true
  },
  {
    "title": "無接地天線",
    "id": "CN Patent 200910302835.1",
    "loc": "CN",
    "noResponse": true
  },
  {
    "title": "裝置與網路偵測方法",
    "id": "CN Patent 200810300728.0",
    "loc": "CN",
    "noResponse": true
  },
  {
    "title": "天線",
    "id": "CN Patent 201020130009.1",
    "loc": "CN",
    "noResponse": true
  },
  {
    "title": "槽孔天線",
    "id": "CN Patent 201010246157.4",
    "loc": "CN",
    "noResponse": true
  },
  {
    "title": "實心天線",
    "id": "CN Patent 201110052089.2",
    "loc": "CN",
    "noResponse": true
  }
];

const BADGES_DATABASE = [
  {
    id: "foxconn",
    company: "Foxconn (鴻海精密)",
    companyEn: "Hon Hai Precision Industry",
    period: "2006 - 2011",
    title: "RF System Engineer",
    image: "assets/images/badge_foxconn.jpg",
    caption: "Foxconn 鴻海精密工業股份有限公司 | 識別證 (2006 - 2011)",
    desc: "負責 WiMAX 終端設備與基站模組設計、自動化測試與射頻認證。"
  },
  {
    id: "mstar",
    company: "MStar (晨星半導體)",
    companyEn: "MStar Semiconductor",
    period: "2011 - 2012",
    title: "RF Senior Engineer",
    image: "assets/images/badge_mstar.jpg",
    caption: "MStar Semiconductor 晨星半導體 | 識別證 (2011 - 2012)",
    desc: "負責藍牙晶片系統級測試、設計驗證、失效分析與頻段共存排查。"
  }
];

const BOOKS_DATABASE = [
  {
    "title": "放毒",
    "cover": "assets/images/cover_fangdu.jpg",
    "subtitle": "台語長篇小說",
    "badge": "政治小說 / NCAF 補助案",
    "desc": "最鋒利的一本小說。結合政治、社會與現實，對當代台灣社會進行最直接的叩問。節奏輕快、畫面感強、議題深厚，獲國藝會創作補助。",
    "target": "適合：關心台灣社會局勢與政治脈絡的讀者",
    "paperLinks": {
      "博客來": "https://reurl.cc/7k1AOy",
      "三民": "https://reurl.cc/jDn4xm",
      "誠品": "https://reurl.cc/jDn4bZ",
      "讀冊": "https://reurl.cc/ZW6dRl",
      "金石堂": "https://reurl.cc/Eo9M8R",
      "前衛官網": "https://reurl.cc/2LdkMn"
    },
    "ebookLinks": {
      "讀冊": "https://reurl.cc/x7rjZV"
    }
  },
  {
    "title": "苦慼 Khó͘-chheh",
    "cover": "assets/images/cover_kuchhoeh.jpg",
    "subtitle": "台語現代詩集",
    "badge": "哲學詩集 / NCAF 補助案",
    "desc": "用最直接、生動的台語寫出壓抑、失落與存在感。這本書試圖寫出台灣人心中深藏的歷史之苦與情感烙印，深具哲學意涵。",
    "target": "適合：喜愛深度思想、對土地情感豐厚的讀者",
    "paperLinks": {
      "博客來": "https://reurl.cc/OM0QjD",
      "三民": "https://reurl.cc/lQRn7q",
      "誠品": "https://reurl.cc/bVXeD3",
      "讀冊": "https://reurl.cc/EjnY40",
      "金石堂": "https://reurl.cc/70rY0D",
      "前衛官網": "https://reurl.cc/WxX4L9"
    },
    "ebookLinks": {
      "博客來": "https://reurl.cc/RqqzVz",
      "讀墨": "https://reurl.cc/lQQDW6",
      "Hyread": "https://reurl.cc/z11Y90",
      "Hami書城": "https://reurl.cc/aqqVKY",
      "KOBO": "https://reurl.cc/jWWDAm"
    }
  },
  {
    "title": "Lóng是阮leh烏白想",
    "cover": "assets/images/cover_wobaixiang.jpg",
    "subtitle": "台語現代詩集",
    "badge": "抒情詩集 / NCAF 補助案",
    "desc": "最溫柔、最貼近生活真實的一本詩集。那些看似天馬行空的「烏白想」，其實是生活中最誠摯的情感。字句溫暖，有如行駛於鐵道車窗外的靜謐風景。",
    "target": "適合：通勤閱讀、想要在生活中放慢步調的人",
    "paperLinks": {
      "博客來": "https://reurl.cc/GNoyZD",
      "誠品": "https://reurl.cc/z5MRbp",
      "三民": "https://reurl.cc/A3Km8Z",
      "讀冊": "https://reurl.cc/DOdaQQ",
      "前衛官網": "https://reurl.cc/qYOyR0"
    },
    "ebookLinks": {
      "讀墨": "https://reurl.cc/WOxR4x",
      "Hyread": "https://reurl.cc/2QYz4X",
      "Hami書城": "https://reurl.cc/NxQ4jx",
      "Google": "https://reurl.cc/7V07o9",
      "讀冊": "https://reurl.cc/OmMGqg"
    }
  },
  {
    "title": "烏熊先生穿懸踏仔鞋",
    "cover": "assets/images/cover_wuxiong.jpg",
    "subtitle": "台語兒童繪本",
    "badge": "性別平等 / 尊重包容",
    "desc": "一個充滿愛與力量的故事。透過穿著高跟鞋的烏熊先生，用最自然可愛的方式，教育孩子理解每個人都有做自己的自由，學習尊重包容個體差異。",
    "target": "適合：幼兒教育、啟蒙孩子性平與尊重多元價值者",
    "paperLinks": {
      "博客來": "https://reurl.cc/V215ny",
      "台灣e店": "https://www.taiouan.com.tw/zh-TW/product/bj1328",
      "台灣教會公報社": "https://buy.pctpress.org/product/%E7%83%8F%E7%86%8A%E5%85%88%E7%94%9F%E7%A9%BF%E6%87%B8%E8%B8%8F%E4%BB%94%E9%9E%8B/",
      "PChome": "https://24h.pchome.com.tw/books/prod/DJBP5E-A900IVBFN?srsltid=AfmBOooG_xQddCUL0YvOE54PxX0uP_A9opksP-JuJFQPtBQzy4pf5fsC",
      "momo": "https://www.momoshop.com.tw/product/13642364?srsltid=AfmBOorviDdYT-l3jjBRr6ivOjRowrzlMOvjpQiZ88qbQDvikx7_DFcE",
      "親子天下": "https://exclusive.parenting.com.tw/reading/book/46864",
      "讀冊 TAAZE": "https://www.taaze.tw/rwd_searchResult.html?keyType%5B%5D=0&keyword%5B%5D=%E7%83%8F%E7%86%8A%E5%85%88%E7%94%9F%E7%A9%BF%E6%87%B8%E8%B8%8F%E4%BB%94%E9%9E%8B&srsltid=AfmBOooZExj4Hpk1Oslii2nFrY0IKRQFr8LSOMY-as4oYW2dHpwENEUX",
      "樂天 Rakuten": "https://www.rakuten.com.tw/shop/huatung/product/9786269928804/?srsltid=AfmBOoorzMu7FW_uXeEwzL05TGk8TW7ssFVKi8TNk0DAxHYxLnEcxqhN"
    },
    "ebookLinks": {}
  },
  {
    "title": "阮TAU TŌ是圖書館",
    "cover": "assets/images/cover_library.jpg",
    "subtitle": "台語兒童繪本",
    "badge": "親子教育 / 自由啟蒙",
    "desc": "溫柔引導孩子理解：閱讀是理解世界的方式，也是思考的起點。繪本細膩傳遞了歷史上對於閱讀的限制，讓孩子明白擁有閱讀的自由是多麼可貴的權利。",
    "target": "適合：親子共讀、培養孩子思考與包容力的父母",
    "paperLinks": {
      "台灣e店": "https://www.taiouan.com.tw/zh-TW/product/btj327",
      "momo": "https://www.momoshop.com.tw/product/14733311?srsltid=AfmBOorY76IB_zhMpRbTzQGkQGva_WPEiLUoeE-ianjV7OWPGU2nL_Rj",
      "金石堂": "https://www.kingstone.com.tw/basic/2028630883532/?lid=book_class3_neh&actid=book_class3_neh&srsltid=AfmBOoq4ya3fkG_z-gneOvsc1Tb1i6plTr352AgWn7gXS8H5wLhNH0EC",
      "花通書局": "https://www.huatung.net/books/1102237/show?srsltid=AfmBOorgWdZ7n5lr2xWAcLVLgfLrZhv3kZ_peb09lPJWu_aohszaACST",
      "iRead": "https://www.iread.com.tw/Detail/ProdDetail/B000868818?srsltid=AfmBOoqRbrGrb2K-ytM43D58B9NsyRcoNZfOC4eSwNS2-vewNBvMN8Ot",
      "讀冊 TAAZE": "https://www.taaze.tw/products/11101079173.html?srsltid=AfmBOornGu9sTh7i6cJjHAgL0Xl-FsIH9cGo0CDtl7lZRzx1rAEwZ2R4",
      "誠品": "https://www.eslite.com/product/10012084572683048393006?srsltid=AfmBOorYCOoCxVgRIRkOlgYpIIiN1J_OabCBc9_M2hC2WqUoKgMlQ_Dz"
    },
    "ebookLinks": {}
  },
  {
    "title": "CHHIAU-CHHŌE 樹王公",
    "cover": "assets/images/cover_shuwanggong.jpg",
    "subtitle": "台語兒童繪本",
    "badge": "生態環保 / 未來科幻",
    "desc": "帶有科幻想像色彩的生態繪本。引導孩子反思：若在科技高速發展的未來，人類忘卻了與大自然的連結將會面臨何種危機，重新喚醒對土地與環境的關懷。",
    "target": "適合：引導孩子關心環境保護與大自然的家長",
    "paperLinks": {
      "台灣e店": "https://www.taiouan.com.tw/zh-TW/product/btj326",
      "momo": "https://www.momoshop.com.tw/product/14733309?srsltid=AfmBOoqLL5aQzDmb7iEY47U0oBUMF7HlwtwT7tL_nSpqzndhulHyhUEs",
      "讀冊 TAAZE": "https://www.taaze.tw/products/11101079172.html?srsltid=AfmBOoqsRchdBoCMhJa_jprKVYyW1KQfxaI9A1TDMtvC3guOt_xcRjb_",
      "誠品": "https://www.eslite.com/product/10012084572683048392009?srsltid=AfmBOoq7zw_DDxrsNKPBVhLNaeCEJ23e8_cGWAKQcqCgTf61CHhepWR-",
      "金石堂": "https://www.kingstone.com.tw/basic/2028630883402/?lid=search&actid=WISE&kw=CHHIAU-CHH%C5%8CE%E6%A8%B9%E7%8E%8B%E5%85%AC"
    },
    "ebookLinks": {}
  },
  {
    "title": "Chhit-jī-gia̍t (七字孽)",
    "cover": "assets/images/cover_qizi.jpg",
    "subtitle": "台語七字仔詩集",
    "badge": "韻律之美 / 傳統創新",
    "desc": "傳承台語七字調的經典節奏，融入當代社會議題與土地情感。是詩亦是樂章，文字敲擊心房，充滿強烈的音樂感與行動力，極具台語饒舌說唱趣味。",
    "target": "適合：喜歡台語韻律、詩歌及繞舌感文字的人",
    "paperLinks": {},
    "ebookLinks": {
      "讀墨": "https://reurl.cc/epOmQK"
    }
  },
  {
    "title": "護國",
    "cover": "assets/images/cover_huguo.jpg",
    "subtitle": "社會思辨隨筆",
    "badge": "民主自由 / 社會責任",
    "desc": "筆桿不一定能改變世界，但能拒絕向謊言低頭。<br><br>面對公共議題，知識份子沒有置身事外的權利；思辨不是炫耀聰明，而是承擔社會責任。",
    "target": "適合所有關心台灣未來、願意獨立思考、不甘於人云亦云的讀者閱讀。無論你的職業、年齡或政治立場為何，只要你相信民主需要公民參與，文化需要世代傳承，國家需要人民守護，這本書都是為你而寫。",
    "paperLinks": {},
    "ebookLinks": {}
  },
  {
    "title": "雜雜唸",
    "cover": "assets/images/cover_zazanian.jpg",
    "subtitle": "台語七字仔詩集",
    "badge": "生活記錄 / 傳統與現代",
    "desc": "用七字仔紀錄日常日記，宛如傳統的褒歌與雜唸，更廣泛結合了現代與多種領域的詞彙。以七字仔吟誦生活中的所見、所聽與所讀，留下最真實的紀錄。或許不成曲調，卻句句成篇、趣味滿滿。",
    "target": "適合：喜歡台語韻律、詩歌，以及熱愛饒舌說唱節奏感文字的讀者",
    "paperLinks": {},
    "ebookLinks": {}
  }
];

const AWARDS_DATABASE = [
  {
    "year": "2026",
    "name": "打狗文學獎 | 評審獎",
    "work": "生化長明 ——予陳何"
  },
  {
    "year": "2026",
    "name": "發表著作",
    "work": "Chhit-jī-gia̍t（七字孽）"
  },
  {
    "year": "2025",
    "name": "苗栗縣第27屆夢花文學獎新詩組佳作，作品",
    "work": "土地的 īn聲，交落的名"
  },
  {
    "year": "2025",
    "name": "kap《CHHIAU-CHHŌE樹王公》台語兒童繪本",
    "work": "阮TAU TŌ是圖書館"
  },
  {
    "year": "2024",
    "name": "苗栗縣第26屆夢花文學獎新詩組佳作，作品",
    "work": "兩步七仔-予葉菊蘭"
  },
  {
    "year": "2024",
    "name": "國藝會2024-1期常態獲補助案台語詩集",
    "work": "攏是我咧烏白想"
  },
  {
    "year": "2024",
    "name": "國藝會2024-2期常態獲補助案台語兒童繪本",
    "work": "烏熊先生穿高踏鞋"
  },
  {
    "year": "2023",
    "name": "國藝會2023-1期常態獲補助案台語詩集",
    "work": "苦慼khó͘-chhoeh"
  },
  {
    "year": "2023",
    "name": "苗栗縣第25屆夢花文學獎新詩組佳作，作品〈到底是啥人咧問？--記徐驤紀念公園〉",
    "work": ""
  },
  {
    "year": "2022",
    "name": "苗栗縣第25屆夢花文學獎新詩組佳作，作品〈Manapan的幻影〉",
    "work": ""
  },
  {
    "year": "2022",
    "name": "第十二屆臺南文學獎台語現代詩組佳作，作品〈重耽〉",
    "work": ""
  },
  {
    "year": "2022",
    "name": "嘉義市第十三屆桃城文學獎新詩組第二名",
    "work": "我毋捌藝術"
  },
  {
    "year": "2022",
    "name": "國藝會2022-2期常態獲補助案台語小說",
    "work": "放毒"
  },
  {
    "year": "2021",
    "name": "苗栗縣第24屆夢花文學獎新詩組佳作，作品〈夢lih ê約誓〉",
    "work": ""
  },
  {
    "year": "2021",
    "name": "2021臺灣文學金典獎台語現代詩入圍",
    "work": "我毋是家己的我"
  },
  {
    "year": "2021",
    "name": "第十一屆臺南文學獎臺語小說組首獎",
    "work": "放毒"
  },
  {
    "year": "2021",
    "name": "教育部閩客語文學小說第一名",
    "work": "紅包橐仔"
  },
  {
    "year": "2020",
    "name": "苗栗縣第23屆夢花文學獎新詩組佳作，作品〈虛構ê目屎〉",
    "work": ""
  },
  {
    "year": "2020",
    "name": "臺灣文學金典獎臺語文學創作獎首獎，作品〈你留佇桌仔頂的紙條仔〉",
    "work": ""
  },
  {
    "year": "2020",
    "name": "澎湖縣政府文化局「一起來玩詩」現代詩徵件活動入圍",
    "work": "無"
  },
  {
    "year": "2019",
    "name": "苗栗縣第22屆夢花文學獎新詩組優選",
    "work": "倒轉--記通霄踏查"
  },
  {
    "year": "2019",
    "name": "第七屆台文戰線文學獎台語現代詩優等",
    "work": "𪁎－國姓改編傳奇"
  },
  {
    "year": "2019",
    "name": "2019臺灣文學金典獎台語現代詩入圍",
    "work": "一隻尾蝶仔"
  },
  {
    "year": "2019",
    "name": "第八屆臺中文學獎第三名",
    "work": "大里杙踏查--記訪林爽文古厝"
  },
  {
    "year": "2019",
    "name": "打狗鳳邑文學獎台語新詩組優等",
    "work": "打狗踏查――記高雄雄中二二八 陳仁悲訪談"
  },
  {
    "year": "2019",
    "name": "教育部閩客語文學現代詩第一名",
    "work": "拍交落ê祖靈--記水沙連郭百年事件"
  },
  {
    "year": "2018",
    "name": "苗栗縣第21屆夢花文學獎新詩組佳作，作品〈尖筆山血路〉",
    "work": ""
  },
  {
    "year": "2018",
    "name": "第八屆臺南文學獎臺語現代詩組首獎",
    "work": "拍交落的亡魂"
  },
  {
    "year": "2018",
    "name": "第八屆臺南文學獎臺語散文組首獎",
    "work": "告別"
  },
  {
    "year": "2017",
    "name": "嘉義市第8屆桃城文學獎新詩組優選",
    "work": "桃城毋是逃城"
  },
  {
    "year": "2017",
    "name": "苗栗縣第20屆夢花文學獎新詩組佳作〈掛心-予苗栗八叔（1922~1935/4/21）〉",
    "work": ""
  },
  {
    "year": "2017",
    "name": "恆春民謠大賽民謠詩詞徵稿組乙等",
    "work": "孤線月琴"
  },
  {
    "year": "2016",
    "name": "阿却賞「台語短篇小說」頭賞",
    "work": "阿芬"
  },
  {
    "year": "2016",
    "name": "紀念鄭正煜老師「台灣學」徵文 第一名",
    "work": "Thui-sak Tâi-oân-ha̍k kiàn-kok"
  },
  {
    "year": "2015",
    "name": "前衛出版社『公民，從閱讀中覺醒《被出賣的台灣》有獎徵文活動』優等",
    "work": "是siâng出賣台灣？"
  },
  {
    "year": "2015",
    "name": "教育部閩客語文學現代詩第二名",
    "work": "老"
  },
  {
    "year": "2015",
    "name": "台北西區扶輪社第61屆台灣文化獎台語歌詞佳作，作品〈有魂無體〉",
    "work": ""
  },
  {
    "year": "2014",
    "name": "『林百貨為林寫詩 徵文比賽』新詩組第二名",
    "work": "Hayashi囡仔夢"
  },
  {
    "year": "2014",
    "name": "嘉義市第6屆桃城文學獎新詩組第一名",
    "work": "畫筆"
  }
];

const LECTURES_DATABASE = [
  {
    "title": "2026-0822_打狗講座_文學館台語生活畫本",
    "date": "2026/8/22"
  },
  {
    "title": "2026_0809_台語生態講座",
    "date": "2026/8/9"
  },
  {
    "title": "2026_0727_成大講座_ 我作品內底ê文學趣味？",
    "date": "2026/7/27"
  },
  {
    "title": "白河讀書館 繪本新冊發表會",
    "date": "2026/1/10"
  },
  {
    "title": "自由練習 繪本新冊發表會",
    "date": "2025年12月26日"
  },
  {
    "title": "高雄文學館新冊發表會《Lóng是阮teh烏白想》新冊發表會",
    "date": "2025年10月5日"
  },
  {
    "title": "七字仔講座",
    "date": "2025年10月4日"
  },
  {
    "title": "打狗文學講座",
    "date": "2025/7~12"
  },
  {
    "title": "成大講座〈我的寫作/過程/經驗〉",
    "date": "2025年5月4日"
  },
  {
    "title": "成大〈苦chhoeh〉 新冊發表會",
    "date": "2024年8月2日"
  },
  {
    "title": "成大〈台語現代詩賞析〉 講座",
    "date": "2024年4月13日",
    "highlight": true
  },
  {
    "title": "成大〈放毒〉 新冊發表會",
    "date": "2023年11月4日"
  },
  {
    "title": "打狗開講社〈 我10冬台語路〉",
    "date": "2023/??"
  },
  {
    "title": "新樓家長團契--《說寫母語是人生上好的投資（學習）》",
    "date": "2022/3/30"
  },
  {
    "title": "高雄文學館〈做一个母語作家是人生上好ê 投資〉",
    "date": "2021年8月29日"
  },
  {
    "title": "成大線頂上課〈為啥物寫台語詩？〉",
    "date": "2021年6月25日",
    "highlight": true
  },
  {
    "title": "政大書局講座 〈我的母語寫作-未完成的夢〉",
    "date": "2017年11月16日"
  },
  {
    "title": "政大書局講座 〈予母語初學者2－母語寫作kap閱讀經驗〉",
    "date": "2017年5月11日"
  },
  {
    "title": "政大書局講座 〈予母語初學者1－母語學習起鼓 〉",
    "date": "2017年5月4日"
  },
  {
    "title": "三餘冊店演講 〈我ê 母語寫作kap 閱讀經驗－予母語初學者〉",
    "date": "2017年8月11日"
  },
  {
    "title": "有影講台語頒獎典禮+母語保鮮技術座談(高雄場)",
    "date": "2016年3月20日"
  }
];

const VIDEOS_DATABASE = [
  {
    "title": "2026-0822_打狗講座_文學館台語生活畫本",
    "src": "https://www.youtube.com/embed/6S7_s_Y7Ah8",
    "year": 2026
  },
  {
    "title": "2026_0809_台語生態講座",
    "src": "https://www.youtube.com/embed/25rC_NPJMqk",
    "year": 2026
  },
  {
    "title": "2026_0727_成大講座_ 我作品內底ê文學趣味？",
    "src": "https://www.youtube.com/embed/ABVtxQvcH20",
    "year": 2026
  },
  {
    "title": "2026-01-10白河圖書館新冊發表會",
    "src": "https://www.youtube.com/embed/hE9gLLUVE8U",
    "year": 2026
  },
  {
    "title": "2025-12月27日高雄-自由練習-繪本共同分享會",
    "src": "https://www.youtube.com/embed/4t_5KbLFCDk",
    "year": 2025
  },
  {
    "title": "2025台文作家系列講座－12.21／阿爸講ê故事出繪本／杜信龍",
    "src": "https://www.youtube.com/embed/0PQXdDc6SXI",
    "year": 2025
  },
  {
    "title": "2025台文作家系列講座－11.16／寫詩ê人烏白想、烏白寫？／杜信龍",
    "src": "https://www.youtube.com/embed/rWaKyqIP9e8",
    "year": 2025
  },
  {
    "title": "2025台文作家系列講座－10.19／《苦慼》歷史ê行踏kap土地喊喝／杜信龍",
    "src": "https://www.youtube.com/embed/tWIVCDdExHQ",
    "year": 2025
  },
  {
    "title": "七字仔講座 10/4 - 2025",
    "src": "https://www.youtube.com/embed/LpiNAVDsyk8",
    "year": 2025
  },
  {
    "title": "2025台文作家系列講座－09/14／《苦慼》一个人ê思念kap做老爸ê心情／杜信龍",
    "src": "https://www.youtube.com/embed/A4pePsXJoGY",
    "year": 2025
  },
  {
    "title": "2025台文作家系列講座－08.17／《放毒》ê角色描寫／杜信龍",
    "src": "https://www.youtube.com/embed/oT7Qkx9Z5Ys",
    "year": 2025
  },
  {
    "title": "2025台文作家系列講座－07.20／《放毒》內底ê抵抗kap暗示／杜信龍",
    "src": "https://www.youtube.com/embed/JahOjWcVqQQ",
    "year": 2025
  },
  {
    "title": "成大講座 2025-0504 我的寫作/過程/經驗",
    "src": "https://www.youtube.com/embed/z2iLVNPSCrU",
    "year": 2025
  },
  {
    "title": "2024 第25屆台語文化營 分享野外煮食佮生活撇步",
    "src": "https://www.youtube.com/embed/oRrtrnwVDig",
    "year": 2024
  },
  {
    "title": "2024 4/13 成大台語現代詩賞析 講座",
    "src": "https://www.youtube.com/embed/YNKNHL_3yg8",
    "year": 2024
  },
  {
    "title": "2024 4/13 成大台語現代詩賞析 講座",
    "src": "https://www.youtube.com/embed/K1dJYwrSJKc",
    "year": 2024
  },
  {
    "title": "2022 新樓家長團契分享。說寫母語是人生最大的投資(學習)",
    "src": "https://www.youtube.com/embed/Ax7L_hyf_x8",
    "year": 2022
  },
  {
    "title": "2021 台文博覽會講座：做一ê母語作家是人生siōng大ê投資",
    "src": "https://www.youtube.com/embed/Q9APW90kv0k",
    "year": 2021
  },
  {
    "title": "2021 成大台語現代詩賞析 講座",
    "src": "https://www.youtube.com/embed/cKHys8tpQ4Y",
    "year": 2021
  },
  {
    "title": "2021台南文學獎台語短篇小說：首獎",
    "src": "https://www.youtube.com/embed/uQqybW2GGK4",
    "year": 2021
  },
  {
    "title": "2020臺灣文學獎創作獎 臺語新詩得主",
    "src": "https://www.youtube.com/embed/uSHWdETBKVY",
    "year": 2020
  },
  {
    "title": "2020台文戰線現代詩得獎感言",
    "src": "https://www.youtube.com/embed/du48pxQpxUI",
    "year": 2020
  },
  {
    "title": "2020臺灣文學獎創作獎 得獎感言",
    "src": "https://www.youtube.com/embed/JjEuWlkIX38",
    "year": 2020
  },
  {
    "title": "2017 【打狗台語開講社】我 ê 母語寫作 kap 閱讀經驗－予母語初學者",
    "src": "https://www.youtube.com/embed/hOkILfsTXbk",
    "year": 2017
  },
  {
    "title": "2016-3-20有影講台語頒獎典禮+母語保鮮技術座談(高雄場)",
    "src": "https://www.youtube.com/embed/SVvsj_9zBh4",
    "year": 2016
  },
  {
    "title": "2016 廖士賢 -【有魂無體】作詞： 杜信龍",
    "src": "https://www.youtube.com/embed/w2ZjMANIK8Y",
    "year": 2016
  },
  {
    "title": "2015 嘉義文學獎感言/記錄",
    "src": "https://www.youtube.com/embed/tFlT7dI0YPE",
    "year": 2015
  },
  {
    "title": "2015 阿卻賞小說得獎感言記錄",
    "src": "https://www.youtube.com/embed/9ADCiGJFuHU",
    "year": 2015
  },
  {
    "title": "2015 阿母的歌詩",
    "src": "https://www.youtube.com/embed/VxCAgwCC4T4",
    "year": 2015
  },
  {
    "title": "【哲學非星期五@台北】2015世界母語日 3/9 豬頭皮演唱 / 杜信龍作詞",
    "src": "https://www.youtube.com/embed/OYuZuAX70Qk",
    "year": 2015
  }
];

// --- State Management ---
let currentRacePage = 1;
const racesPerPage = 12;
let filteredRaces = [...RACES_DATABASE];

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initTabNavigation();
    initProfileCardFlip();
    initMobileMenu();
    
    // Tech components
    renderPatents("all");
    initPatentFilters();
    
    // Literature components
    renderBooks();
    renderAwards();
    renderLectures();
    renderVideos();
    
    // Running components
    initRaceLedger();
    
    // Badges components
    renderBadges();
    initBadgesModal();
    
    // Collapsible sections
    initCollapsibleSections();
});

// --------------------------------------------------------------------------
// 1. Theme Toggle Management
// --------------------------------------------------------------------------
function initTheme() {
    const themeToggleBtn = document.getElementById("themeToggle");
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.className = savedTheme + "-theme";
    
    const sendThemeToIframe = (theme) => {
        const mapIframes = document.querySelectorAll('.map-iframe-container iframe');
        mapIframes.forEach(iframe => {
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage({ theme: theme }, '*');
            }
        });
    };

    themeToggleBtn.addEventListener("click", () => {
        let currentTheme;
        if (document.body.classList.contains("dark-theme")) {
            document.body.className = "light-theme";
            localStorage.setItem("theme", "light");
            currentTheme = "light";
        } else {
            document.body.className = "dark-theme";
            localStorage.setItem("theme", "dark");
            currentTheme = "dark";
        }
        sendThemeToIframe(currentTheme);
    });

    // Listen for requests from the iframe (e.g. when it loads)
    window.addEventListener('message', (event) => {
        if (event.data && (event.data.type === 'request-theme' || event.data.type === 'getTheme')) {
            const isDark = document.body.classList.contains("dark-theme");
            if (event.source) {
                event.source.postMessage({ theme: isDark ? 'dark' : 'light' }, '*');
            }
        }
    });
}

// --------------------------------------------------------------------------
// 2. Tab Navigation System
// --------------------------------------------------------------------------
function initTabNavigation() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    const navLinks = document.querySelectorAll(".nav-link[data-tab]");
    const mainNavLinks = document.querySelectorAll(".nav-link");
    
    function switchTab(tabId) {
        // Deactivate all
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));
        
        // Active selected
        const targetBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        const targetContent = document.getElementById(tabId);
        
        if (targetBtn && targetContent) {
            targetBtn.classList.add("active");
            targetContent.classList.add("active");
        }
        
        // Update nav active states
        mainNavLinks.forEach(link => link.classList.remove("active"));
        const targetNavLink = document.querySelector(`.nav-link[data-tab="${tabId}"]`);
        if (targetNavLink) {
            targetNavLink.classList.add("active");
        }
    }
    
    // Main Tab buttons click handlers
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            switchTab(tabId);
            // Smooth scroll to tab navigation
            const tabsNavBar = document.querySelector(".tabs-nav-bar");
            if (tabsNavBar) {
                window.scrollTo({
                    top: tabsNavBar.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Header Links with tab redirection
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const tabId = link.getAttribute("data-tab");
            switchTab(tabId);
            closeMobileMenu();
        });
    });
    
    // Floating link handlers
    document.querySelectorAll(".scroll-to-tabs").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const tabId = btn.getAttribute("data-tab");
            switchTab(tabId);
        });
    });

    // Simple scrollspy to highlight 'About me' vs others
    window.addEventListener("scroll", () => {
        const scrollPos = window.scrollY;
        const aboutSection = document.getElementById("about");
        const contactSection = document.getElementById("contact");
        
        if (scrollPos < (aboutSection.offsetTop + aboutSection.offsetHeight - 150)) {
            mainNavLinks.forEach(link => link.classList.remove("active"));
            document.querySelector(".nav-link[href='#about']").classList.add("active");
        } else if (scrollPos > (contactSection.offsetTop - 300)) {
            mainNavLinks.forEach(link => link.classList.remove("active"));
            document.querySelector(".nav-link[href='#contact']").classList.add("active");
        }
    });
}

// --------------------------------------------------------------------------
// 3. Profile Card Flip Logic
// --------------------------------------------------------------------------
function initProfileCardFlip() {
    const profileCard = document.querySelector(".profile-card");
    if (profileCard) {
        profileCard.addEventListener("click", () => {
            profileCard.classList.toggle("flipped");
        });
    }
}

// --------------------------------------------------------------------------
// 4. Mobile Menu Drawer
// --------------------------------------------------------------------------
const navMenu = document.getElementById("navMenu");
const hamburger = document.getElementById("hamburger");

function initMobileMenu() {
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            hamburger.classList.toggle("active");
            // Toggle hamburger animation
            const bars = hamburger.querySelectorAll(".bar");
            if (hamburger.classList.contains("active")) {
                bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
                bars[1].style.opacity = "0";
                bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
            } else {
                bars[0].style.transform = "none";
                bars[1].style.opacity = "1";
                bars[2].style.transform = "none";
            }
        });
        
        // Close menu on normal links click
        document.querySelectorAll(".nav-link:not([data-tab])").forEach(link => {
            link.addEventListener("click", () => {
                closeMobileMenu();
            });
        });
    }
}

function closeMobileMenu() {
    if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        const bars = hamburger.querySelectorAll(".bar");
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
    }
}

// --------------------------------------------------------------------------
// 5. Tech Component: Patents Renderer & Filter
// --------------------------------------------------------------------------
function initPatentFilters() {
    const filterButtons = document.querySelectorAll(".patent-filter-bar .filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");
            renderPatents(filter);
        });
    });
}

function renderPatents(filter) {
    const patentsList = document.getElementById("patentsList");
    if (!patentsList) return;
    
    patentsList.innerHTML = "";
    
    const filtered = filter === "all" 
        ? PATENTS_DATABASE 
        : PATENTS_DATABASE.filter(p => p.loc === filter);

    const locFlag = { "US": "\uD83C\uDDFA\uD83C\uDDF8", "TW": "\uD83C\uDDF9\uD83C\uDDFC", "CN": "\uD83C\uDDE8\uD83C\uDDF3" };
        
    filtered.forEach(p => {
        const patentItem = document.createElement("div");
        patentItem.className = "patent-item";
        
        const locClass = p.loc.toLowerCase();
        const flag = locFlag[p.loc] || "";
        
        patentItem.innerHTML = `
            <div class="patent-info">
                <div class="patent-title">${p.title}</div>
                <div class="patent-id">${p.id}</div>
            </div>
            <span class="patent-loc-tag ${locClass}">${flag} ${p.loc}</span>
        `;
        patentsList.appendChild(patentItem);
    });
}

// --------------------------------------------------------------------------
// 6. Literature Component: Books & Awards Renderer
// --------------------------------------------------------------------------
function renderBooks() {
    const booksGrid = document.getElementById("booksGrid");
    if (!booksGrid) return;
    
    booksGrid.innerHTML = "";
    
    BOOKS_DATABASE.forEach((b, index) => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.id = `book-card-${index}`;
        
        // Build paper book links
        let paperLinksHtml = "";
        if (b.paperLinks && Object.keys(b.paperLinks).length > 0) {
            paperLinksHtml += `<div style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 6px;"><i class="fa-solid fa-book"></i> 紙本書購買：</div>`;
            paperLinksHtml += `<div class="book-purchase-links">`;
            for (const [platform, link] of Object.entries(b.paperLinks)) {
                if (platform === "博客來") {
                    paperLinksHtml += `<a href="${link}" target="_blank" class="book-link" style="border-color: var(--accent-lit); color: var(--accent-lit); font-weight: 600;">${platform}</a>`;
                } else {
                    paperLinksHtml += `<a href="${link}" target="_blank" class="book-link">${platform}</a>`;
                }
            }
            paperLinksHtml += `</div>`;
        }
        
        // Build ebook links
        let ebookLinksHtml = "";
        if (b.ebookLinks && Object.keys(b.ebookLinks).length > 0) {
            ebookLinksHtml += `<div style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-top: 10px; margin-bottom: 6px;"><i class="fa-solid fa-mobile-screen-button"></i> 電子書購買：</div>`;
            ebookLinksHtml += `<div class="book-purchase-links">`;
            for (const [platform, link] of Object.entries(b.ebookLinks)) {
                if (platform === "讀墨" || platform === "讀墨 (Ebook)") {
                    ebookLinksHtml += `<a href="${link}" target="_blank" class="book-link" style="border-color: var(--accent-tech); color: var(--accent-tech); font-weight: 600;">${platform}</a>`;
                } else {
                    ebookLinksHtml += `<a href="${link}" target="_blank" class="book-link">${platform}</a>`;
                }
            }
            ebookLinksHtml += `</div>`;
        }
        
        bookCard.innerHTML = `
            <div class="book-card-header">
                <div class="book-cover-container">
                    <img src="${b.cover}" alt="${b.title} 書封" class="book-cover" loading="lazy">
                </div>
                <span class="book-badge">${b.badge}</span>
                <div class="book-title-group">
                    <h4 class="book-title">${b.title}</h4>
                    <div class="book-subtitle">${b.subtitle}</div>
                </div>
            </div>
            
            <button type="button" class="book-toggle-btn" onclick="toggleBookCard(${index})" aria-expanded="false" title="點擊展開/收合詳細簡介與購書連結">
                <span class="book-toggle-label">簡介與購買連結</span>
                <span class="book-toggle-icon"><i class="fa-solid fa-chevron-down"></i></span>
            </button>
            
            <div class="book-collapsible-body">
                <p class="book-desc">${b.desc}</p>
                <div class="book-target"><i class="fa-solid fa-circle-info"></i> ${b.target}</div>
                <div class="book-links-wrapper">
                    ${paperLinksHtml || ebookLinksHtml ? paperLinksHtml + ebookLinksHtml : '<div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic;"><i class="fa-solid fa-clock"></i> 目前購買：尚未。待補。</div>'}
                </div>
            </div>
        `;
        
        // Add click listener to zoom/magnify the book cover
        const img = bookCard.querySelector(".book-cover");
        if (img) {
            img.addEventListener("click", () => {
                openImageModal(img.src, img.alt);
            });
        }

        booksGrid.appendChild(bookCard);
    });
}

function toggleBookCard(index) {
    const card = document.getElementById(`book-card-${index}`);
    if (!card) return;
    const isExpanded = card.classList.contains("is-expanded");
    const toggleBtn = card.querySelector(".book-toggle-btn");
    const label = card.querySelector(".book-toggle-label");
    
    if (isExpanded) {
        card.classList.remove("is-expanded");
        if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
        if (label) label.textContent = "簡介與購買連結";
    } else {
        card.classList.add("is-expanded");
        if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
        if (label) label.textContent = "收合簡介與連結";
    }
    updateToggleAllBooksBtn();
}

function toggleAllBooks() {
    const cards = document.querySelectorAll(".books-showcase-grid .book-card");
    const allBtn = document.getElementById("toggleAllBooksBtn");
    if (!cards.length) return;
    
    const allExpanded = Array.from(cards).every(c => c.classList.contains("is-expanded"));
    const shouldExpand = !allExpanded;
    
    cards.forEach(card => {
        const toggleBtn = card.querySelector(".book-toggle-btn");
        const label = card.querySelector(".book-toggle-label");
        if (shouldExpand) {
            card.classList.add("is-expanded");
            if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
            if (label) label.textContent = "收合簡介與連結";
        } else {
            card.classList.remove("is-expanded");
            if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
            if (label) label.textContent = "簡介與購買連結";
        }
    });
    
    if (allBtn) {
        allBtn.innerHTML = shouldExpand 
            ? `<i class="fa-solid fa-angles-up"></i> 全部收合` 
            : `<i class="fa-solid fa-angles-down"></i> 全部展開`;
        allBtn.setAttribute("aria-expanded", String(shouldExpand));
    }
}

function updateToggleAllBooksBtn() {
    const cards = document.querySelectorAll(".books-showcase-grid .book-card");
    const allBtn = document.getElementById("toggleAllBooksBtn");
    if (!cards.length || !allBtn) return;
    const allExpanded = Array.from(cards).every(c => c.classList.contains("is-expanded"));
    allBtn.innerHTML = allExpanded 
        ? `<i class="fa-solid fa-angles-up"></i> 全部收合` 
        : `<i class="fa-solid fa-angles-down"></i> 全部展開`;
    allBtn.setAttribute("aria-expanded", String(allExpanded));
}


function renderLectures() {
    const tableBody = document.getElementById("lecturesTableBody");
    if (!tableBody) return;
    
    tableBody.innerHTML = "";
    
    LECTURES_DATABASE.forEach(l => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${l.title}</td>
            <td>${l.date}</td>
        `;
        tableBody.appendChild(row);
    });

    // Update count badge
    const badge = document.getElementById("lectureCountBadge");
    if (badge) badge.textContent = LECTURES_DATABASE.length + " 場";
}

function toggleSection(btnId, collapsibleId) {
    const btn = document.getElementById(btnId);
    const collapsible = document.getElementById(collapsibleId);
    if (!btn || !collapsible) return;
    const isOpen = collapsible.classList.contains("is-open");
    collapsible.classList.toggle("is-open", !isOpen);
    btn.setAttribute("aria-expanded", String(!isOpen));
}

function renderAwards() {
    const awardsTimeline = document.getElementById("awardsTimeline");
    if (!awardsTimeline) return;
    
    awardsTimeline.innerHTML = "";
    
    AWARDS_DATABASE.forEach(a => {
        const awardItem = document.createElement("div");
        awardItem.className = "award-item";
        
        const workHtml = a.work ? `<div class="award-work">作品：${a.work}</div>` : "";
        
        awardItem.innerHTML = `
            <div class="award-year">${a.year}</div>
            <div class="award-name">${a.name}</div>
            ${workHtml}
        `;
        awardsTimeline.appendChild(awardItem);
    });
}

function renderVideos() {
    const videoGallery = document.getElementById("videoGallery");
    if (!videoGallery) return;
    
    videoGallery.innerHTML = "";
    
    VIDEOS_DATABASE.forEach(v => {
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";
        
        // Extract YouTube video ID
        const ytIdMatch = v.src.match(/embed\/([^/?]+)/);
        const ytId = ytIdMatch ? ytIdMatch[1] : "";
        const imgUrl = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : "";
        
        videoCard.innerHTML = `
            <div class="video-thumbnail-container" style="background-image: url('${imgUrl}'); background-size: cover; background-position: center;">
                <div class="play-overlay">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
            <div class="video-card-body">
                <h4>${v.title}</h4>
            </div>
        `;
        
        // Add click handler to play in modal
        videoCard.addEventListener("click", () => {
            openVideoModal(v.src, v.title);
        });
        
        videoGallery.appendChild(videoCard);
    });
}

// Video Modal Player Control
const videoModal = document.getElementById("videoModal");
const modalIframe = document.getElementById("modalIframe");
const modalVideoTitle = document.getElementById("modalVideoTitle");
const closeModalBtn = document.getElementById("closeModal");

function openVideoModal(src, title) {
    if (videoModal && modalIframe && modalVideoTitle) {
        modalIframe.src = src + "?autoplay=1";
        modalVideoTitle.textContent = title;
        videoModal.classList.add("active");
        videoModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Disable scroll
    }
}

function closeVideoModal() {
    if (videoModal && modalIframe) {
        modalIframe.src = "";
        videoModal.classList.remove("active");
        videoModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto"; // Re-enable scroll
    }
}

if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeVideoModal);
}

if (videoModal) {
    videoModal.addEventListener("click", (e) => {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
}

// --------------------------------------------------------------------------
// 7. Running Component: Searchable Race Ledger Table
// --------------------------------------------------------------------------
function initRaceLedger() {
    const searchInput = document.getElementById("raceSearch");
    const typeFilter = document.getElementById("raceTypeFilter");
    
    if (searchInput && typeFilter) {
        searchInput.addEventListener("input", () => {
            currentRacePage = 1;
            applyRaceFilters();
        });
        
        typeFilter.addEventListener("change", () => {
            currentRacePage = 1;
            applyRaceFilters();
        });
        
        applyRaceFilters();
    }
}

function applyRaceFilters() {
    const query = document.getElementById("raceSearch").value.toLowerCase().trim();
    const typeValue = document.getElementById("raceTypeFilter").value;
    
    filteredRaces = RACES_DATABASE.filter(race => {
        const matchesQuery = race.name.toLowerCase().includes(query) || 
                             race.date.includes(query) || 
                             (race.time && race.time.includes(query));
                             
        const matchesType = typeValue === "all" || race.category === typeValue;
        
        return matchesQuery && matchesType;
    });
    
    renderRaceTable();
    renderRacePagination();
}

function renderRaceTable() {
    const tableBody = document.getElementById("raceTableBody");
    if (!tableBody) return;
    
    tableBody.innerHTML = "";
    
    if (filteredRaces.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 30px; color: var(--text-muted);">無符合條件的賽事記錄</td></tr>`;
        return;
    }
    
    const startIndex = (currentRacePage - 1) * racesPerPage;
    const endIndex = Math.min(startIndex + racesPerPage, filteredRaces.length);
    
    const pageItems = filteredRaces.slice(startIndex, endIndex);
    
    pageItems.forEach(race => {
        const row = document.createElement("tr");
        const badgeClass = race.category;
        
        row.innerHTML = `
            <td style="font-weight: 700; color: var(--text-primary);">${race.id}</td>
            <td style="font-weight: 500; color: var(--text-primary);">${race.name}</td>
            <td>${race.date}</td>
            <td style="font-family: monospace; font-size: 0.95rem; font-weight: 600;">${race.time}</td>
            <td><span class="race-type-badge ${badgeClass}">${race.categoryDisplay}</span></td>
        `;
        tableBody.appendChild(row);
    });
}

function renderRacePagination() {
    const paginationContainer = document.getElementById("racePagination");
    if (!paginationContainer) return;
    
    paginationContainer.innerHTML = "";
    
    const totalPages = Math.ceil(filteredRaces.length / racesPerPage);
    if (totalPages <= 1) return;
    
    const prevBtn = document.createElement("button");
    prevBtn.className = "page-btn";
    prevBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i>';
    prevBtn.disabled = currentRacePage === 1;
    prevBtn.setAttribute("aria-label", "上一頁");
    prevBtn.addEventListener("click", () => {
        if (currentRacePage > 1) {
            currentRacePage--;
            renderRaceTable();
            renderRacePagination();
        }
    });
    paginationContainer.appendChild(prevBtn);
    
    let startPage = Math.max(1, currentRacePage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    
    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.className = `page-btn ${i === currentRacePage ? "active" : ""}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener("click", () => {
            currentRacePage = i;
            renderRaceTable();
            renderRacePagination();
        });
        paginationContainer.appendChild(pageBtn);
    }
    
    const nextBtn = document.createElement("button");
    nextBtn.className = "page-btn";
    nextBtn.innerHTML = '<i class="fa-solid fa-angle-right"></i>';
    nextBtn.disabled = currentRacePage === totalPages;
    nextBtn.setAttribute("aria-label", "下一頁");
    nextBtn.addEventListener("click", () => {
        if (currentRacePage < totalPages) {
            currentRacePage++;
            renderRaceTable();
            renderRacePagination();
        }
    });
    paginationContainer.appendChild(nextBtn);
}

// --------------------------------------------------------------------------
// Collapsible Sections Management
// --------------------------------------------------------------------------
function initCollapsibleSections() {
    const triggers = document.querySelectorAll(".toggle-trigger");
    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const section = trigger.closest(".collapsible-section");
            if (section) {
                section.classList.toggle("collapsed");
            }
        });
    });
}


// Image Lightbox Modal Control
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const imageCaption = document.getElementById("imageCaption");
const closeImageModalBtn = document.getElementById("closeImageModal");

function openImageModal(src, alt) {
    if (imageModal && modalImage) {
        modalImage.src = src;
        if (imageCaption) {
            imageCaption.textContent = alt || "";
        }
        imageModal.classList.add("active");
        imageModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Disable scroll
    }
}

function closeImageModal() {
    if (imageModal && modalImage) {
        imageModal.classList.remove("active");
        imageModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto"; // Re-enable scroll
        setTimeout(() => {
            modalImage.src = "";
        }, 300);
    }
}

if (closeImageModalBtn) {
    closeImageModalBtn.addEventListener("click", closeImageModal);
}

if (imageModal) {
    imageModal.addEventListener("click", (e) => {
        if (e.target === imageModal || e.target === modalImage) {
            closeImageModal();
        }
    });
}

// Add event listeners to all project images
document.addEventListener("DOMContentLoaded", () => {
    const projectImages = document.querySelectorAll(".project-img");
    projectImages.forEach(img => {
        img.addEventListener("click", () => {
            openImageModal(img.src, img.alt);
        });
    });
});

// Projects Slider Navigation Control
document.addEventListener("DOMContentLoaded", () => {
    const sliderTrack = document.getElementById("projectsSliderTrack");
    const prevBtn = document.getElementById("prevProjectBtn");
    const nextBtn = document.getElementById("nextProjectBtn");

    if (sliderTrack && prevBtn && nextBtn) {
        nextBtn.addEventListener("click", () => {
            const firstCard = sliderTrack.querySelector(".project-card");
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth + 30; // card width + gap
                sliderTrack.scrollBy({ left: cardWidth, behavior: "smooth" });
            }
        });
        prevBtn.addEventListener("click", () => {
            const firstCard = sliderTrack.querySelector(".project-card");
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth + 30; // card width + gap
                sliderTrack.scrollBy({ left: -cardWidth, behavior: "smooth" });
            }
        });
    }
});

// --------------------------------------------------------------------------
// 15. Employee Badges Management & Modal Flow
// --------------------------------------------------------------------------
function renderBadges() {
    // 1. Update Hero Card Back Stack & Count
    const stackContainer = document.getElementById("badgeAvatarStack");
    if (stackContainer && typeof BADGES_DATABASE !== "undefined") {
        stackContainer.innerHTML = BADGES_DATABASE.map(b => 
            `<img src="${b.image}" alt="${b.company}" class="badge-stack-img" title="${b.company} (${b.period})">`
        ).join("");
    }
    const badgeCountText = document.getElementById("badgeCountText");
    if (badgeCountText && typeof BADGES_DATABASE !== "undefined") {
        badgeCountText.innerHTML = `${BADGES_DATABASE.length} 張 <i class="fa-solid fa-chevron-right"></i>`;
    }

    // 2. Render Modal List
    const modalList = document.getElementById("badgesModalList");
    if (modalList && typeof BADGES_DATABASE !== "undefined") {
        modalList.innerHTML = BADGES_DATABASE.map(b => `
            <div class="badge-item-card">
                <div class="badge-img-frame" data-img="${b.image}" data-caption="${b.caption}" title="點擊放大檢視">
                    <img src="${b.image}" alt="${b.company}" class="badge-modal-img" loading="lazy">
                    <span class="badge-zoom-hint"><i class="fa-solid fa-magnifying-glass-plus"></i> 點擊放大</span>
                </div>
                <div class="badge-item-info">
                    <div class="badge-item-header">
                        <h4 class="badge-item-company">${b.company}</h4>
                        <span class="badge-item-period">${b.period}</span>
                    </div>
                    <div class="badge-item-title">${b.title}</div>
                    <p class="badge-item-desc">${b.desc || ""}</p>
                </div>
            </div>
        `).join("");

        // Attach click listeners to badge frames inside modal
        modalList.querySelectorAll(".badge-img-frame").forEach(frame => {
            frame.addEventListener("click", () => {
                const src = frame.getAttribute("data-img");
                const cap = frame.getAttribute("data-caption");
                openImageModal(src, cap);
            });
        });
    }
}

function initBadgesModal() {
    const openBtn = document.getElementById("openBadgesModalBtn");
    const modal = document.getElementById("badgesModal");
    const closeBtn = document.getElementById("closeBadgesModal");

    if (openBtn && modal) {
        openBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Stop profile card from flipping
            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            closeBadgesModal();
        });
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeBadgesModal();
            }
        });
    }

    // Keyboard ESC listener
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && modal.classList.contains("active")) {
            closeBadgesModal();
        }
    });

    // Timeline badge link clicks
    document.querySelectorAll(".timeline-badge-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const badgeId = link.getAttribute("data-badge-id");
            if (typeof BADGES_DATABASE !== "undefined") {
                const badge = BADGES_DATABASE.find(b => b.id === badgeId);
                if (badge) {
                    openImageModal(badge.image, badge.caption);
                }
            }
        });
    });
}

function closeBadgesModal() {
    const modal = document.getElementById("badgesModal");
    if (modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "auto";
    }
}
