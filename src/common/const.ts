export const API_BASE = "http://localhost:1337/api"; // Change this to your backend API base URL if needed
export const promocodes = [
  {
    code: "10LINKWELNESS",
    discount: 10,
    expTimeSeconds: 600,
  },
  {
    code: "20LINKWELNESS",
    discount: 20,
    expTimeSeconds: 600,
  },
  {
    code: "30LINKWELNESS",
    discount: 30,
    expTimeSeconds: 600,
  },
  {
    code: "40LINKWELNESS",
    discount: 40,
    expTimeSeconds: 600,
  },
  {
    code: "50LINKWELNESS",
    discount: 50,
    expTimeSeconds: 600,
  },
];

export const cardAndPromos = [
  {
    image: "/smahan.png",
    promo: [
      { code: "SMS25", date: "14/06/2025" },
      { code: "SMU25", date: "15/06/2025" },
      { code: "SMM25", date: "16/06/2025" },
      { code: "SMT25", date: "17/06/2025" },
      { code: "SMW25", date: "18/06/2025" },
      { code: "SMH25", date: "19/06/2025" },
      { code: "SMF25", date: "20/06/2025" },
      { code: "SME25", date: "21/06/2025" },
      { code: "SMD25", date: "22/06/2025" },
      { code: "SMTEST25", date: null },
    ],
  },
  {
    image: "/Sp.png",
    promo: [
      { code: "BLS25", date: "14/06/2025" },
      { code: "BLU25", date: "15/06/2025" },
      { code: "BLM25", date: "16/06/2025" },
      { code: "BLT25", date: "17/06/2025" },
      { code: "BLW25", date: "18/06/2025" },
      { code: "BLH25", date: "19/06/2025" },
      { code: "BLF25", date: "20/06/2025" },
      { code: "BLE25", date: "21/06/2025" },
      { code: "BLD25", date: "22/06/2025" },
      { code: "BLTEST25", date: null },
    ],
  },
  {
    image: "/Sudantha.png",
    promo: [
      { code: "SDS25", date: "14/06/2025" },
      { code: "SDU25", date: "15/06/2025" },
      { code: "SDM25", date: "16/06/2025" },
      { code: "SDT25", date: "17/06/2025" },
      { code: "SDW25", date: "18/06/2025" },
      { code: "SDH25", date: "19/06/2025" },
      { code: "SDF25", date: "20/06/2025" },
      { code: "SDE25", date: "21/06/2025" },
      { code: "SDD25", date: "22/06/2025" },
      { code: "SDTEST25", date: null },
    ],
  },
  {
    image: "/Amurthe.png",
    promo: [
      { code: "AMS25", date: "14/06/2025" },
      { code: "AMU25", date: "15/06/2025" },
      { code: "AMM25", date: "16/06/2025" },
      { code: "AMT25", date: "17/06/2025" },
      { code: "AMW25", date: "18/06/2025" },
      { code: "AMH25", date: "19/06/2025" },
      { code: "AMF25", date: "20/06/2025" },
      { code: "AME25", date: "21/06/2025" },
      { code: "AMD25", date: "22/06/2025" },
      { code: "AMTEST25", date: null },
    ],
  },
  {
    image: "/thripala.jpg",
    promo: [
      { code: "THS25", date: "14/06/2025" },
      { code: "THU25", date: "15/06/2025" },
      { code: "THM25", date: "16/06/2025" },
      { code: "THT25", date: "17/06/2025" },
      { code: "THW25", date: "18/06/2025" },
      { code: "THH25", date: "19/06/2025" },
      { code: "THF25", date: "20/06/2025" },
      { code: "THE25", date: "21/06/2025" },
      { code: "THD25", date: "22/06/2025" },
      { code: "THTEST25", date: null },
    ],
  },
  {
    image: "/kesha.jpg",
    promo: [
      { code: "KES25", date: "14/06/2025" },
      { code: "KEU25", date: "15/06/2025" },
      { code: "KEM25", date: "16/06/2025" },
      { code: "KET25", date: "17/06/2025" },
      { code: "KEW25", date: "18/06/2025" },
      { code: "KEH25", date: "19/06/2025" },
      { code: "KEF25", date: "20/06/2025" },
      { code: "KEE25", date: "21/06/2025" },
      { code: "KED25", date: "22/06/2025" },
      { code: "KETEST25", date: null },
    ],
  },
];
export const questions = [
  {
    id: 1,
    set: 1,
    question: "සුවතාවය යනු?",
    answers: [
      "ලෙඩ ල ෝග වලින් ලතා වීම",
      "ශාරීරික, මානසික හා අධ්‍යාත්මික සුවතාව පවත්මවා ගැනීම",
      "ලෙඩ ල ෝගවලින් ලතා වීම සමඟම කායික, මානසික හා අධ්‍යාත්මික සුවතාව යහපත්මව පවත්මවා ගැනීම",
    ],
    answerIndex: 2,
  },
  {
    id: 2,
    set: 1,
    question: "ලගෝලීය සුවතා දිනය ලයදී ඇත්මලත්ම?",
    answers: ["ජුනි 10", "ජුනි 14", "ජුනි 08"],
    answerIndex: 2,
  },
  {
    id: 3,
    set: 1,
    question: "ශාරීරික සුවතාව සඳහා කළ හැකි ලෙයක් වන්ලන්?",
    answers: ["ගුණොයක ආහා ෙබා ගැනීම", "භාවනා කිරීම"],
    answerIndex: 0,
  },
  {
    id: 4,
    set: 1,
    question: "ආහා ජීර්ණය ක්‍රමවත්ම කිරීමට ොයක වන ලින්ක් නිශ්පාදනය වන්ලන්?",
    answers: ["ස්වස්ථ තිඵො", "ස්වස්ථ අමෘත"],
    answerIndex: 0,
  },
  {
    id: 5,
    set: 1,
    question: "ලගාටුලකාෙ ලත්ම පානය කිරීලමන් ඔබට ෙැලබන ප්‍රතිොභයක් වන්ලන්?",
    answers: ["කිවිසුම් යාම පාෙනය ලේ", "මතක ශක්තිය වර්ධ්‍නය කිරීමට උපකාරී ලේ"],
    answerIndex: 1,
  },
  {
    id: 6,
    set: 1,
    question: "වැදි ඉරියේ නිසා අපට ඇති වන ශාරීරික අපහසුතාවක් වන්ලන්?",
    answers: ["ලකාන්ලේ ලේෙනාව", "ලසම්ප්‍රතිශයාව"],
    answerIndex: 0,
  },
  {
    id: 7,
    set: 1,
    question: `"ලින්ක් ක්‍රෑම්්ගාඩ් විශේෂත්වයක් නම් එයට - මස්පිඬු පළලීමක් සිදු වීමට පටන් එය වළක්වා ගත හැකි වීම ලේ"`,
    answers: ["වැදීම", "නිවැදීම"],
    answerIndex: 1,
  },
  {
    id: 8,
    set: 1,
    question:
      "ලින්ක් සමහර නිෂ්පාදන සායනික පරීක්ෂණයට පත්කළ ඇත්තේ කුමන ජර්නලයහිද?",
    answers: ["සිලෙෝන් මඩිකල් ජර්නල්", "ශ්‍රී ලංකා ජර්නල් ඔෆ් මඩිසින්"],
    answerIndex: 1,
  },
  {
    id: 9,
    set: 1,
    question: "ලින්ක් සුවිශේෂ පස්පංගුවලහි අඩංගු ශාකකෞෂධයක් වන්නේ?",
    answers: ["බුළු", "විෂ්ණුක්‍රාන්ති"],
    answerIndex: 1,
  },
  {
    id: 10,
    set: 1,
    question:
      "සමබ හා සෞඛ්‍ය සම්පන්න ආහාරය පවත්වා ගැනීම, නිතර ශාරීරික ක්‍රියාකාරකම් සහ ප්‍රමාණවත් නින්ද වැදගත් වන්නේ?",
    answers: ["ශාරීරික සුවතාවයට", "මානසික සුවතාවයට", "ආධ්‍යාත්මික සුවතාවයට"],
    answerIndex: 0,
  },
  {
    id: 11,
    set: 2,
    question: `"සුවතාවය - ශාරීරික, මානසික හා ආධ්‍යාත්මික යහපැවැත්මය යන කොටස් තුනකින් සමන්විතය" යන්න`,
    answers: ["නිවැදි", "වැදි"],
    answerIndex: 0,
  },
  {
    id: 12,
    set: 2,
    question: "ලගෝලීය සුවතා දිනය ලයදී ඇත්මලත්ම?",
    answers: ["ජුනි 10", "ජුනි 14", "ජුනි 08"],
    answerIndex: 2,
  },
  {
    id: 13,
    set: 2,
    question:
      "මානසික ආතතිය කළමනාකරණය කිරීම සහ චිත්තවේගීය සුවතාවය වර්ධනය සඳහා කළ හැක්කක් වන්නේ?",
    answers: [
      "දිනපතා පැය 2ක පමණ කාලයක නින්දක් ගැනීම",
      "මිතුරන් සහ පවුලේ අයගෙන් සහාය ලබා ගැනීම",
    ],
    answerIndex: 1,
  },
  {
    id: 14,
    set: 2,
    question: "සුෙන්ත වෙ සායනික හා විද්‍යාත්මක පරීක්ෂණ සිදුකළ විශ්ව විද්‍යාල?",
    answers: [
      "1ක් කෝළඹ විශ්ව විද්‍යාලය සහ 3ක් වොෂින්ටන් විශ්ව විද්‍යාලය",
      "2ක් කෝළඹ විශ්ව විද්‍යාලය සහ 2ක් වොෂින්ටන් විශ්ව විද්‍යාලය",
    ],
    answerIndex: 1,
  },
  {
    id: 15,
    set: 2,
    question:
      "සමබ හා සෞඛ්‍ය සම්පන්න ආහාරය, නිතර ශාරීරික ක්‍රියාකාරකම් සහ ප්‍රමාණවත් නින්ද වැදගත් වන්නේ?",
    answers: ["ශාරීරික සුවතාවයට", "මානසික සුවතාවයට", "ආධ්‍යාත්මික සුවතාවයට"],
    answerIndex: 0,
  },
  {
    id: 16,
    set: 2,
    question:
      "Soft සහ Medium වර්ග 2 අතරින් දන්ත වෛද්‍යවරුන් වඩාත් නිර්දේශ කරන්නේ කුමන වර්ගයේ දත් බුරුසුවක්ද?",
    answers: ["Soft", "Medium"],
    answerIndex: 0,
  },
  {
    id: 17,
    set: 2,
    question: "ස්වස්ථ අමෘත නිතර පානය කිරීමෙන් ඔබට ලැබිය හැකි ප්‍රතිලාභය වන්නේ?",
    answers: [
      "ආහාර ජීර්ණය ක්‍රමවත් කිරීමයි.",
      "ශරීර උෂ්ණත්වය සමනය කිරීමයි.",
      "Atorvastatin සමඟ ගත් විට රුධිරයෙහි අහිතකර ලිපිඩ මට්ටම පහත දැමීමයි.",
    ],
    answerIndex: 2,
  },
  {
    id: 18,
    set: 2,
    question: "ස්වස්ථ ත්‍රිපොට අඩංගු ශාකකෞෂධය වන්නේ?",
    answers: ["බුළු", "සකිඳ", "අලු"],
    answerIndex: 1,
  },
  {
    id: 19,
    set: 2,
    question: "ෆයිබර් හර්බ්ස්වෙ අඩංගු ශාකකෞෂධය වන්නේ?",
    answers: ["ලනලි", "ලබලි ගැට මෙව"],
    answerIndex: 1,
  },
  {
    id: 20,
    set: 2,
    question: "ලගාටුලකාෙ ලත්ම පානය කිරීලමන් ඔබට ෙැලබන ප්‍රතිොභයක් වන්ලන්?",
    answers: ["කිවිසුම් යාම පාෙනය ලේ", "මතක ශක්තිය වර්ධ්‍නය කිරීමට උපකාරී ලේ"],
    answerIndex: 1,
  },
];
