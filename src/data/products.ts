export interface Product {
  id: string;
  name: string;
  englishName: string;
  category: 'cake' | 'baked' | 'gift';
  categoryLabel: string;
  price: string;
  description: string;
  flavorNote?: string;
  ingredients: string[];
  isSpecialite?: boolean;
  isSeasonal?: boolean;
  image: string;
}

export const categories = [
  { id: 'all', label: 'All Menu', subLabel: '全商品' },
  { id: 'cake', label: 'Fresh Cakes', subLabel: '生菓子' },
  { id: 'baked', label: 'Baked Goods', subLabel: '焼き菓子' },
  { id: 'gift', label: 'Gift Sets', subLabel: 'ギフト・詰め合わせ' },
] as const;

export const products: Product[] = [
  {
    id: 'napoleon-pie',
    name: 'ナポレオンパイ',
    englishName: 'Napoleon Pie',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥600（ホール ¥3,000〜）',
    description: 'たっぷり折り込んだバターのザクザク食感と、ほろっと崩れる口どけが絶妙な当店の看板ミルフィーユ。断面の美しさと濃厚な自家製カスタード、甘酸っぱい苺のハーモニーをお楽しみいただけます。ご希望人数に応じたホールケーキも承ります。',
    flavorNote: '芳醇なバターの香ばしさと、ザクザク食感＆カスタードのコク',
    ingredients: ['国産発酵バター', '厳選苺', '自家製濃厚カスタード', 'パイ生地'],
    isSpecialite: true,
    image: 'https://www.web-komachi.com/webko/wp-content/uploads/2024/01/VDQA0434.jpg'
  },
  {
    id: 'choux-creme',
    name: '濃厚カスタードのシュークリーム',
    englishName: 'Cream Puff',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥360',
    description: '松本産「信州ノニタマゴ」を使用した濃厚な自家製カスタードクリームを、香ばしく焼き上げたクッキーシュー皮にたっぷりと詰め込みました。長年愛される評判の逸品です。',
    flavorNote: '卵の豊かな風味と天然バニラの華やかな香り',
    ingredients: ['信州ノニタマゴ', '低温殺菌牛乳', '天然マダガスカルバニラ', '発酵バター'],
    isSpecialite: true,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'shortcake',
    name: '苺のショートケーキ',
    englishName: 'Strawberry Shortcake',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥650',
    description: 'きめ細かくふんわりと焼き上げたスポンジに、口どけ軽やかな純生クリームとみずみずしい旬の苺を贅沢に重ねました。甘すぎず、どなたにも愛される王道のケーキです。',
    flavorNote: '軽やかな純生クリームのコクと、苺の爽やかな酸味',
    ingredients: ['信州ノニタマゴ', '北海道産純生クリーム', '契約農家直送苺', '国産小麦'],
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'custard-pudding',
    name: '信州ノニタマゴのなめらかプリン',
    englishName: 'Vanilla Custard Pudding',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥420',
    description: '松本産のブランド卵「信州ノニタマゴ」と濃厚な牛乳、天然バニラビーンズを贅沢に使用。なめらかな舌触りと卵本来のやさしいコク、ほろ苦い自家製カラメルが調和します。',
    flavorNote: '濃厚な卵の甘みと、ほろ苦く香ばしいカラメルソース',
    ingredients: ['信州ノニタマゴ', '濃厚牛乳', 'マダガスカル産バニラ', 'きび砂糖'],
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'tarte-fruits',
    name: '季節のフルーツタルト',
    englishName: 'Seasonal Fruit Tart',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥680',
    description: '発酵バター香るサクサクのパート・シュクレに自家製クレームダマンドを焼き込み、旬の新鮮なフルーツを贅沢にあしらいました。季節ごとの果実の美味しさを存分に味わえます。',
    flavorNote: 'サクサク香ばしいタルト生地と、フルーツのみずみずしい果汁',
    ingredients: ['旬のフレッシュフルーツ', '発酵バター', 'アーモンドクリーム', '信州ノニタマゴ'],
    isSeasonal: true,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'chocolat-classique',
    name: 'クラシック・ショコラ',
    englishName: 'Classic Chocolate Cake',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥620',
    description: '上質なクーベルチュールチョコレートを贅沢に使用したビターなショコラケーキ。しっとりとなめらかな口どけと、カカオの芳醇なアロマをお楽しみいただけます。',
    flavorNote: '深みのあるビターカカオのコクと心地よい余韻',
    ingredients: ['最高級クーベルチュール', '国産発酵バター', '信州ノニタマゴ', 'ココア'],
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'financier',
    name: '国産発酵バター100% フィナンシェ',
    englishName: 'Brown Butter Financier',
    category: 'baked',
    categoryLabel: '焼き菓子',
    price: '¥300 / 個',
    description: '国産発酵バターを100%贅沢に使用。丁寧に火入れした焦がしバターのナッツのような香ばしさと、アーモンドの豊かな風味が詰まった看板焼き菓子です。外はカリッと、中はしっとり。',
    flavorNote: '焦がしバターの芳醇なアロマとアーモンドのコク',
    ingredients: ['国産発酵バター100%', 'アーモンドパウダー', '信州ノニタマゴ卵白', 'ゲランド塩'],
    isSpecialite: true,
    image: 'https://www.web-komachi.com/webko/wp-content/uploads/2024/01/IMG_E3796.jpg'
  },
  {
    id: 'madeleine',
    name: 'ハニーマドレーヌ',
    englishName: 'Honey Madeleine',
    category: 'baked',
    categoryLabel: '焼き菓子',
    price: '¥260〜 / 個',
    description: '貝殻の形にふっくら焼き上げたクラシックな焼き菓子。上質なバターと天然蜂蜜のやさしい甘み、ほんのり香るレモンゼストが爽やかなアクセントです。',
    flavorNote: 'バターと蜂蜜のしっとりした甘み、爽やかな柑橘の香り',
    ingredients: ['国産発酵バター', '信州ノニタマゴ', '天然蜂蜜', 'レモンゼスト'],
    image: 'https://www.web-komachi.com/webko/wp-content/uploads/2024/01/IMG_E3793.jpg'
  },
  {
    id: 'canele',
    name: '伝統製法 カヌレ・ド・ボルドー',
    englishName: 'Canelé de Bordeaux',
    category: 'baked',
    categoryLabel: '焼き菓子',
    price: '¥320 / 個',
    description: '蜜蝋を塗った銅型でじっくりと高温で焼き上げました。外側はカリッと香ばしく、中はカスタードクリームのようにしっとりもっちり。ダークラムとバニラが香ります。',
    flavorNote: '外側のカリッとしたカラメル香と、中のもっちりラムバニラ感',
    ingredients: ['低温殺菌牛乳', '信州ノニタマゴ', 'ダークラム酒', 'バニラビーンズ'],
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'coco-gift-box',
    name: '愛猫ココちゃん 特製ギフトボックス',
    englishName: 'Coco Gift Box',
    category: 'gift',
    categoryLabel: 'ギフト・詰め合わせ',
    price: '¥2,800〜 / 箱',
    description: '塩尻の新店舗にしあわせを呼ぶといわれるカギのしっぽを持つ看板猫「ココちゃん」がくつろぐ様子をあしらった特製ギフトボックス。自慢のフィナンシェやマドレーヌを美しく詰め合わせました。お祝いや手土産に大人気です。',
    flavorNote: '厳選素材の焼き菓子が織りなす温かな味わい',
    ingredients: ['国産発酵バターフィナンシェ', 'マドレーヌ', '焼き菓子各種（個別包装）'],
    isSpecialite: true,
    image: 'https://www.web-komachi.com/webko/wp-content/uploads/2024/01/IMG_E3792.jpg'
  }
];
