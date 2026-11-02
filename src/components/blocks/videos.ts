/**
 * ビデオデータ設定ファイル
 * R2に格納された動画の情報を一元管理
 */

// ビデオデータの型定義
export interface VideoData {
  id: number;
  titleJP: string;
  titleEN: string;
  descriptionJP: string;
  descriptionEN: string;
  order?: number; // 表示順序（オプション、小さい数字が先に表示される）
  r2File?: string; // R2ストレージ上のファイル名（testimonials/ 配下）。指定時はR2から配信する
}

// R2の公開ベースURL（配信課金なし。src/components/blocks/images.ts と同じバケット）
export const R2_MEDIA_BASE_URL = "https://pub-488a24026ed4411b8d591260b603cdd1.r2.dev";

/**
 * R2に保存された動画のURLを生成
 * @param folder - R2バケット内のフォルダ名（例: "testimonials"）
 * @param filename - ファイル名
 */
export function getR2VideoUrl(folder: string, filename: string): string {
  return `${R2_MEDIA_BASE_URL}/${folder}/${filename}`;
}

/**
 * R2に保存された動画サムネイル（posters/ 配下）のURLを生成
 * @param folder - 動画と同じフォルダ名（例: "testimonials"）
 * @param filename - 動画のファイル名（拡張子込み）
 */
export function getR2PosterUrl(folder: string, filename: string): string {
  return `${R2_MEDIA_BASE_URL}/posters/${folder}/${filename}.jpg`;
}

/**
 * ビデオリスト
 * 
 * 各ビデオの設定：
 * - id: ユニークな識別子
 * - titleJP/titleEN: 日本語/英語のタイトル
 * - descriptionJP/descriptionEN: 日本語/英語の説明
 */
const titelJp_1 = '道場での稽古風景';
const titelEn_1 = 'Dojo Training Session';
const descriptionJp_1 = '八王子本部道場での日常的な稽古の様子';
const descriptionEn_1 = 'Daily training at Hachioji Honbu Dojo';

export const videosData: VideoData[] = [
  {
    id: 1,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_001.mp4',
    order: 2, // 2番目に表示
  },
  {
    id: 2,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_002.mp4',
  },
  {
    id: 3,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_003.mp4',
  },
  {
    id: 4,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_004.MOV',
  },
  {
    id: 5,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_005.MOV',
  },
  {
    id: 6,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_006.MOV',
  },
  {
    id: 7,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_007.MOV',
  },
  {
    id: 8,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_08.MOV',
  },
  {
    id: 9,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_09.MOV',
  },
  {
    id: 10,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_10.MOV',
  },
  {
    id: 11,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_11.mp4',
  },
  {
    id: 12,
    titleJP: titelJp_1,
    titleEN: titelEn_1,
    descriptionJP: descriptionJp_1,
    descriptionEN: descriptionEn_1,
    r2File: 'TAIZAN_KEIKO_12.MOV',
  },
  
];

/**
 * 武術の解説ビデオリスト
 * Martial Arts Technique Explanation Video List
 */
export const martialArtsTechniquesData: VideoData[] = [
  {
    id: 201,
    titleJP: '武術について',
    titleEN: 'Basic Stance',
    descriptionJP: '泰山流護身術の基本姿勢と構え方',
    descriptionEN: 'Basic posture and stance in TaizanRyu Self-Defense',
    r2File: 'TAIZAN_VIDEO_01.mp4',
  },
  {
    id: 202,
    titleJP: '海外武術番組に出演',
    titleEN: 'Appearing on an overseas martial arts program',
    descriptionJP: '武術解説',
    descriptionEN: 'Techniques',
    r2File: 'EL_CAMINO_DEL_DRAGON.mp4',
  },
  {
    id: 203,
    titleJP: '武術の基本',
    titleEN: 'Basic of Bujutsu',
    descriptionJP: '武術解説',
    descriptionEN: 'techniques',
    r2File: 'TAIZAN_ENBU_01.VOB',
  },
  {
    id: 204,
    titleJP: 'ミラー宗家による演武01',
    titleEN: 'Martial Arts Performance No.01',
    descriptionJP: '武術解説',
    descriptionEN: 'Techniques',
    r2File: 'TAIZAN_ENBU_01.mp4',
  },
  {
    id: 205,
    titleJP: 'ミラー宗家による演武02',
    titleEN: 'Martial Arts Performance No.02',
    descriptionJP: '武術解説',
    descriptionEN: 'Techniques',
    r2File: 'TAIZAN_ENBU_02.mp4',
  },
  {
    id: 206,
    titleJP: '2025セミナーinアメリカニュージャージー',
    titleEN: '2025 Seminar in New Jersey',
    descriptionJP: '武術解説',
    descriptionEN: 'Techniques',
    r2File: 'TAIZAN_SEMINAR_2025.MP4',
  },
  
];

/**
 * 指圧お客様の声ビデオリスト
 * Shiatsu Testimonials Video List
 */
export const shiatsuTestimonialsData: VideoData[] = [
  {
    id: 101,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_001.MOV',
    order: 3,
  },
  {
    id: 102,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_002.MP4',
  },
  {
    id: 103,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_003.MP4',
  },
  {
    id: 104,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_004.MP4',
  },
  {
    id: 105,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_005.MP4',
  },
  {
    id: 106,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_006.MP4',
  },
  {
    id: 107,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_007.MP4',
  },
  {
    id: 108,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_008.MOV',
  },
  {
    id: 109,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_009.MP4',
  },
  {
    id: 110,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_010.MP4',
  },
  {
    id: 111,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_011.MP4',
  },
  {
    id: 112,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_012.MP4',
  },
  {
    id: 113,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_013.MP4',
  },
  {
    id: 114,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_014.MP4',
  },
  {
    id: 115,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_015.MP4',
  },
  {
    id: 116,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_016.MOV',
  },
  {
    id: 117,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_017.MP4',
  },
  {
    id: 118,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_018.MP4',
  },
  {
    id: 119,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_019.MP4',
  },
  {
    id: 120,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_020.MP4',
  },
  {
    id: 121,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_021.MP4',
  },
  {
    id: 122,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_022.MP4',
  },
  {
    id: 123,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_023.MP4',
  },
  {
    id: 124,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_024.MP4',
  },
  {
    id: 125,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_025.MOV',
    order: 3,
  },
  {
    id: 126,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_026.MP4',
    order: 2,
  },
  {
    id: 127,
    titleJP: 'お客様の声',
    titleEN: 'Customer Testimonial',
    descriptionJP: '',
    descriptionEN: '',
    r2File: 'TAIZAN_SHIATSU_TESTIMONIALS_027.MP4',
    order: 1,
  },
];
