export const API_BASE = "https://backend.aeturns.com/api"; // Change this to your backend API base URL if needed
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
    link: "https://estore.linknaturalproducts.com/products/samahan%20ayurvedic%20herbal%20tea?size=4g_x_10s",
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
    link: "https://estore.linknaturalproducts.com/products/link-natural-sp-balm?size=20g",
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
    link: "https://estore.linknaturalproducts.com/products/sudantha%20toothpaste%20price?weight=80gx2",
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
    link: "https://estore.linknaturalproducts.com/products/link-swastha-amurtha-",
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
    link: "https://estore.linknaturalproducts.com/products/triphala-tablets?tablet-quantity=30_tablets",
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
    link: "https://estore.linknaturalproducts.com/products/link-kesha-classic?kesha-classic=50ml",
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
      "ලෙඩ රෝග වලින් තොර වීම",
      "ශාරීරික, මානසික හා අධ්‍යාත්මික සුවතාව පවත්වා ගැනීම",
      "ලෙඩ රෝගවලින් තොර වීම සමඟම කායික, මානසික හා අධ්‍යාත්මික සුවතාව යහපත්ව පවත්වා ගැනීම",
    ],
    answerIndex: 2,
  },
  {
    id: 2,
    set: 1,
    question: "ගෝලීය සුවතා දිනය යෙදී ඇත්තේ?",
    answers: ["ජුනි 10", "ජුනි 14", "ජුනි 08"],
    answerIndex: 1,
  },
  {
    id: 3,
    set: 1,
    question: "ශාරීරික සුවතාව සඳහා කළ හැකි දෙයක් වන්නේ?",
    answers: ["ගුණදායක ආහාර ලබා ගැනීම", "භාවනා කිරීම"],
    answerIndex: 0,
  },
  {
    id: 4,
    set: 1,
    question:
      "ආහාර ජීර්ණය ක්‍රමවත් කිරීමට දායක වන ලින්ක් නැචුරල් නිෂ්පාදනය වන්නේ?",
    answers: ["ස්වස්ථ ත්‍රිථලා", "ස්වස්ථ අමෘත"],
    answerIndex: 0,
  },
  {
    id: 5,
    set: 1,
    question: "ගොටුකොල තේ පානය කිරීමෙන් ලැබෙන ඔබට ප්‍රතිලාභයක් වන්නේ?",
    answers: ["කිවිසුම් යාම පාලනය වේ", "මතක ශක්තිය වර්ධනය කිරීමට උපකාරී වේ"],
    answerIndex: 1,
  },
  {
    id: 6,
    set: 1,
    question: "වැරදි ඉරියව් නිසා අපට ඇති වන ශාරීරික අපහසුතාවය වන්නේ?",
    answers: ["කොන්දේ වේදනාව", "සෙම්ප්‍රතිශ්‍යාව"],
    answerIndex: 0,
  },
  {
    id: 7,
    set: 1,
    question:
      "“ලින්ක් ක්‍රරෑම්ප්ගාඩ් ප්ලස් වල විශේෂත්වයක් නම් එයට - මස්පිඩු පෙරළීමක් සිදු වීමට පෙර එය වළක්වා ගත හැකි වීම වේ - මෙම ප්‍රකාශය",
    answers: ["වැරදි", "නිවැරදි"],
    answerIndex: 1,
  },
  {
    id: 8,
    set: 1,
    question: "ලින්ක් සමහන් වල සායනික පරීක්ෂණය පළ කර ඇත්තේ කුමන ජර්නලයෙහිද?",
    answers: ["සිලෝන් මෙඩිකල් ජර්නල්", "ශ්‍රී ලංකා ජර්නල් ඔෆ් මෙඩිසින්"],
    answerIndex: 0,
  },
  {
    id: 9,
    set: 1,
    question: "ලින්ක් සුවිශේෂ පස්ප༠ගුවෙහි අඩංගු ශාකෞෂධයක් වන්නේ:",
    answers: ["බුළු", "විෂ්ණුක්‍රාන්ති"],
    answerIndex: 1,
  },
  {
    id: 10,
    set: 1,
    question:
      "සමබර හා සෞක්‍ය සම්පන්න ආහාර වේලක් පවත්වා ගැනීම, නිතිපතා ශාරීරික ක්‍රියාකාරකම්වල යෙදීම සහ ප්‍රමාණවත් නින්දක් ලබා ගැනීම වැදගත් වන්නේ:",
    answers: ["ශාරීරික සුවතාවයට", "මානසික සුවතාවයට", "ආධ්‍යාත්මික සුවතාවයට"],
    answerIndex: 0,
  },
  {
    id: 11,
    set: 2,
    question:
      "සුවතාවය - ශාරීරික, මානසික හා ආධ්‍යාත්මික යහපැවැත්ම යන කොටස් තුනකින් සමන්විත වේ. මෙම ප්‍රකාශය:",
    answers: ["නිවැරදි", "වැරදි"],
    answerIndex: 0,
  },
  {
    id: 12,
    set: 2,
    question: "ගෝලීය සුවතා දිනය යෙදී ඇත්තේ?",
    answers: ["ජුනි 10", "ජුනි 14", "ජුනි 08"],
    answerIndex: 1,
  },
  {
    id: 13,
    set: 2,
    question:
      "මානසික ආතතිය කළමනාකරණය කිරීම සහ චිත්තවේගීය සුවතාවය ප්‍රවර්ධනය කිරීම සදහා කල හැක්කක් වන්නේ?",
    answers: [
      "දිනපතා පැය 2ක පමණ කාලයක නින්දක් ගැනීම",
      "මිතුරන් සහ පවුලේ අයගෙන් සහාය ලබා ගැනීම",
    ],
    answerIndex: 1,
  },
  {
    id: 14,
    set: 2,
    question:
      "සුදන්ත වල සායනික හා විද්‍යාත්මික පරීක්ෂණ කොපමණ කර ඇත්ද සහ එම පරීක්ෂණ සිදුකර ඇත්තේ කුමණ විශ්ව විද්‍යාල වලද යන්න දක්වා ඇති නිවැරදි පිලිතුර නම් කරන්න",
    answers: [
      "1ක් පේරාදෙණිය විශ්ව විද්‍යාලය සහ 3ක් වොෂිංටන් විශ්ව විද්‍යාලය",
      "2ක් පේරාදෙණිය විශ්ව විද්‍යාලය සහ 2ක් වොෂිංටන් විශ්ව විද්‍යාලය",
    ],
    answerIndex: 1,
  },
  {
    id: 15,
    set: 2,
    question:
      "සමබර සහ සෞක්‍ය සම්පන්න ආහාර වේලක් පවත්වා ගැනීම, නිතිපතා ශාරීරික ක්‍රියාකාරකම්වල යෙදීම සහ ප්‍රමාණවත් නින්දක් ලබා ගැනීම වැදගත් වන්නේ:",
    answers: ["ශාරීරික සුවතාවයට", "මානසික සුවතාවයට", "ආධ්‍යාත්මික සුවතාවයට"],
    answerIndex: 0,
  },
  {
    id: 16,
    set: 2,
    question:
      "Soft සහ Medium දත් බුරුසු වර්ග 2 අතරින් දන්ත වෛද්‍යවරුන් වඩාත් නිර්දේශ කරන්නේ කුමන වර්ගයේ දත් බුරුසුවක් භාවිතා කිරීමද?",
    answers: ["Soft", "Medium"],
    answerIndex: 0,
  },
  {
    id: 17,
    set: 2,
    question:
      "ස්වස්ථ අමෘත නිතිපතා පානය කිරීමෙන් ලබාගත හැකි ප්‍රතිලාභයක් වන්නේ?",
    answers: [
      "ආහාර ජීර්ණය ක්‍රමවත් කරයි",
      "ශරීරයේ උෂ්ණාධික බව සමනය කරයි",
      "Atorvastatin සමග ගත විට රුධිරයේ අහිතකර කොලොස්ට්‍රෝල් මට්ටම පාලනය කරන බවට සායනිකව තහවුරු කර ඇති නිසා",
    ],
    answerIndex: 1,
  },
  {
    id: 18,
    set: 2,
    question: "ස්වස්ථ ත්‍රිථලා වල අඩංගු ශාකෞෂධයක් නොවන්නේ?",
    answers: ["බුළු", "රසකිඳ", "අරළු"],
    answerIndex: 1,
  },
  {
    id: 19,
    set: 2,
    question: "ෆයිව් හර්බ්ස් වල අඩංගු ශාකෞෂධයක් වන්නේ?",
    answers: ["නෙල්ලි", "බෙලි ගැට මද"],
    answerIndex: 1,
  },
  {
    id: 20,
    set: 2,
    question: "ගොටුකොල තේ පානය කිරීමෙන් ඔබට ලැබෙන ප්‍රතිලාභයක් වන්නේ?",
    answers: ["කිවිසුම් යාම පාලනය වේ", "මතක ශක්තිය වර්ධනය කිරීමට උපකාරී "],
    answerIndex: 1,
  },
];
