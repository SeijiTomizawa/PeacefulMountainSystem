export interface NewsItem {
  id: string;
  slug: string;
  data: {
    title: string;
    date: string;
    category: string;
    body?: string;
  };
}

export const news: NewsItem[] = [
  {
    id: "aichi-seminar-2025",
    slug: "aichi-seminar-2025",
    data: {
      title: "愛知セミナー開催のご報告",
      date: "2025-09-20",
      category: "お知らせ",
      body: "2025年9月、愛知にて泰山流セミナーを開催いたしました。多くの方にご参加いただき、盛況のうちに終了しました。次回のセミナー情報もお楽しみに。",
    },
  },
  {
    id: "trial-visit-info",
    slug: "trial-visit-info",
    data: {
      title: "体験・見学のお申し込みについて",
      date: "2025-08-01",
      category: "お知らせ",
      body: "体験・見学を希望される方は、必ず事前にお問い合わせください。定員に限りがありますので、お早めにご連絡いただくようお願いいたします。",
    },
  },
  {
    id: "website-renewal",
    slug: "website-renewal",
    data: {
      title: "道場ウェブサイトをリニューアルしました",
      date: "2025-07-15",
      category: "更新",
      body: "泰山流八王子本部道場のウェブサイトをリニューアルいたしました。今後も情報を随時更新してまいります。どうぞよろしくお願いいたします。",
    },
  },
];
