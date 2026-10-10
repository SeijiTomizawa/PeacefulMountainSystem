/**
 * 画像アセット集中管理ファイル
 * すべての画像インポートをここで一元管理します
 *
 * 【使用方法】
 * - 名前付きインポート: import { logoImage } from '../assets/images';
 * - 全てインポート: import * as Images from '../assets/images';
 *
 */

// ================================================
// ベースURL定数
// ================================================
const R2_STORAGE_URL = "https://pub-488a24026ed4411b8d591260b603cdd1.r2.dev";

// ================================================
// Base画像 
// ================================================
// ロゴ・ブランド画像
export const logoImage = R2_STORAGE_URL + "/parts/LOGO_2.webp";
export const taizanLogo = R2_STORAGE_URL + "/parts/LOGO.webp";

// ================================================
// トップページ画像
// ================================================

export const indexCarousel = [
  R2_STORAGE_URL + "/dojo/DOJO_04.webp",
  R2_STORAGE_URL + "/dojo/DOJO_07.webp",
  R2_STORAGE_URL + "/dojo/DOJO_08.webp",
];

// サムネイル画像
export const thumbnailImages = [
  R2_STORAGE_URL + "/dojo/DOJO_08.webp",
  R2_STORAGE_URL + "/shiatsu/SHIATSU_DO_02.webp",
  R2_STORAGE_URL + "/biography/SOKE_JOE_MILLER.webp",
  R2_STORAGE_URL + "/seminar/2023/SEMINAR_2023_NEWYORK_10.webp",
  R2_STORAGE_URL + "/dojo/DOJO_05.webp",
  R2_STORAGE_URL + "/shiatsu/SHIATSU_DO_04.webp",
];

// アクセス・施設画像
export const hachiojiStationImage = R2_STORAGE_URL + "/parts/big-photo0000-6654.jpg";

// ================================================
// 道場画像
// ================================================
export const selfDefenseHeroBgs = Array.from({ length: 9 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `${R2_STORAGE_URL}/dojo/DOJO_${num}.webp`;
});

export const selfDefenseDojoStudents = R2_STORAGE_URL + "/dojo/OFFICIAL_STUDENT.webp";

export const selfDefenseCertificates = Array.from({ length: 16 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `${R2_STORAGE_URL}/dojo/CERTIFICATION_${num}.webp`;
});

// ================================================
// 義経流柔術ページ画像
// ================================================
export const ytStudentsImage = R2_STORAGE_URL + "/yoshitsune/flanagan.jpg";
export const ytTeacherImage = R2_STORAGE_URL + "/yoshitsune/1789300597875.jpg";

// ================================================
// 宗家ページ画像
// ================================================
// 宗家セクション用画像
export const sokeImage = R2_STORAGE_URL + "/biography/SOKE_JOE_MILLER.webp";

export const sokeHeroImage = R2_STORAGE_URL + "/biography/MILLER_photo_01.webp";
export const sokeSokeCouple = R2_STORAGE_URL + "/biography/MILLER_photo_02.webp";

export const sokeShihanSaulCohe = R2_STORAGE_URL + "/biography/ROOTS_02.webp";
export const sokeSokeMichaelDePasquale = R2_STORAGE_URL + "/biography/ROOTS_03.webp";
export const sokeShodaiOkuyama = R2_STORAGE_URL + "/biography/ROOTS_04.webp";

// 宗家の仲間たち
export const martialartPhotos = Array.from({ length: 20 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `${R2_STORAGE_URL}/biography/MARTIALART_photo_${num}.webp`;
});

// 宗家の若い頃の写真
export const biographySokePhotos = Array.from({ length: 29 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `${R2_STORAGE_URL}/biography/MILLER_photo_${num}.webp`;
});

// 宗家の宣材写真
export const sokeMarketingPhotos = Array.from({ length: 3 }, (_, i) => {
  const num = String(i + 31).padStart(2, "0");
  return `${R2_STORAGE_URL}/biography/MILLER_photo_${num}.jpg`;
});


// ================================================
// 指圧・整体ページ画像
// ================================================

// 施術画像
export const shiatsuImages = Array.from({ length: 7 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `${R2_STORAGE_URL}/shiatsu/SHIATSU_DO_${num}.webp`;
});

// お客様からのレター
export const clientLetters = Array.from({ length: 4 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `${R2_STORAGE_URL}/shiatsu/SHIATSU_LETTER_${num}.webp`;
});

// 資格証明書
export const shiatsuCertificates = [
  R2_STORAGE_URL + "/shiatsu/SHIATSU_CERTIFICATION_1.webp",
  R2_STORAGE_URL + "/shiatsu/SHIATSU_CERTIFICATION_2.webp",
  R2_STORAGE_URL + "/shiatsu/SHIATSU_STUDY_01.webp",
];

// 著書
export const shiatsuTextbook1 = R2_STORAGE_URL + "/parts/41nYq%2Bw7QAL._SY445_SX342_ML2_.jpg";

// お客様の声
export const shiatsuTestimonialsImage = R2_STORAGE_URL + "/shiatsu/SHIATSU_Testimonials_260610.jpg";

// ================================================
// 大会画像
// ================================================
// 2023年ニューヨークセミナー画像
export const newyorkSeminar = Array.from({ length: 11 }, (_, i) => {
  const num = String(i + 3).padStart(2, "0");
  return `${R2_STORAGE_URL}/seminar/2023/SEMINAR_2023_NEWYORK_${num}.webp`;
});

// 2025年愛知セミナー画像
export const aichiSeminar = Array.from({ length: 11 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `${R2_STORAGE_URL}/seminar/2025/SEMINAR_2025_AICHI_${num}.webp`;
});

// ================================================
// その他画像
// ================================================
// メンバーページ画像
export const membersGroupImage = R2_STORAGE_URL + "/dojo/OFFICIAL_STUDENT.webp";





export default {
  // base
  logoImage,
  taizanLogo,
  // index
  indexCarousel,
  thumbnailImages,
  hachiojiStationImage,
  // 護身術・逮捕術
  selfDefenseHeroBgs,
  selfDefenseDojoStudents,
  selfDefenseCertificates,
  // 義経流柔術
  ytStudentsImage,
  // 指圧・整体
  shiatsuImages,
  shiatsuCertificates,
  shiatsuTextbook1,
  shiatsuTestimonialsImage,
  // お客様の声
  clientLetters,
  // 宗家について
  sokeImage,
  sokeHeroImage,
  sokeSokeCouple,
  sokeShihanSaulCohe,
  sokeSokeMichaelDePasquale,
  sokeShodaiOkuyama,
  martialartPhotos,
  biographySokePhotos,
  // 大会
  newyorkSeminar,
  aichiSeminar,
  // その他
  membersGroupImage,
};