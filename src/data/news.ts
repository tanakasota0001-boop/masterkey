export interface NewsItem {
  id: string;
  date: string;
  category: 'Seasonal' | 'Notice' | 'Event';
  title: string;
  excerpt: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    date: '2024.01.27',
    category: 'Notice',
    title: '塩尻市広丘野村へ移転リニューアルオープンいたしました',
    excerpt: '松本市で10年間親しんでいただいたMASTER KEYが、塩尻市広丘野村にて独立型店舗として新たにオープンいたしました。駐車場約10台を完備し、木の温もりあふれる空間でお待ちしております。',
  },
  {
    id: 'news-2',
    date: '2024.02.01',
    category: 'Seasonal',
    title: '看板商品「ナポレオンパイ」＆ホールケーキのご予約について',
    excerpt: 'ザクザクの折り込みパイ生地と濃厚カスタードが自慢のナポレオンパイをはじめ、お誕生日や記念日の特注ホールケーキのご予約はお電話（0263-75-2134）のみにて承っております。丁寧にお仕立てするため、事前のお電話予約をお願いいたします。※WebやSNS DMでの受付は行っておりません。',
  },
  {
    id: 'news-3',
    date: '2024.01.26',
    category: 'Event',
    title: 'Web-Komachi（長野Komachi）にて当店をご紹介いただきました',
    excerpt: 'Web-Komachi様の新店レポートにて、移転オープンの経緯やお店のこだわり、ナポレオンパイや愛猫ココちゃんのギフトボックスなどを詳しく特集していただきました。',
  }
];
