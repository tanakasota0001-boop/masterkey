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
    id: 'fromage-duo',
    name: 'フロマージュ・デュオ',
    englishName: 'Fromage Duo',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥600',
    description: '安曇野で作られているクリームチーズを主軸に、サワークリームやクレームドゥーブルで酸味と乳味に奥行きを出したレアチーズムース',
    flavorNote: '芳醇なバターの香ばしさと、ザクザク食感＆カスタードのコク',
    ingredients: ['国産発酵バター', '厳選苺', '自家製濃厚カスタード', 'パイ生地'],
    isSpecialite: true,
    image: '/images/products/01.jpg'
  },
  {
    id: 'choux-creme',
    name: 'フォレノワール',
    englishName: 'Forest Noir',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥600',
    description: 'ココアクッキー生地とアーモンドクリームにチェリーを仕込んで焼き上げたタルト',
    flavorNote: '卵の豊かな風味と天然バニラの華やかな香り',
    ingredients: ['信州ノニタマゴ', '低温殺菌牛乳', '天然マダガスカルバニラ', '発酵バター'],
    isSpecialite: true,
    image: '/images/products/02.jpg'
  },
  {
    id: 'shortcake',
    name: 'ネクタリンパイ',
    englishName: 'Nectarine Pie',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥600',
    description: '長野県産のネクタリンを軽いパイ生地とアーモンドクリームでしっとりザックリ焼き上げたパイ菓子です。カスタードクリームとホイップクリームを薄く絞りフレッシュのネクタリンをあしらってタルト仕立てでご提供しております。',
    flavorNote: '軽やかな純生クリームのコクと、苺の爽やかな酸味',
    ingredients: ['信州ノニタマゴ', '北海道産純生クリーム', '契約農家直送苺', '国産小麦'],
    image: '/images/products/03.jpg'
  },
  {
    id: 'custard-pudding',
    name: 'シャインマスカットのナポレオンパイ',
    englishName: 'Shine Muscat Napoleon Pie',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥750',
    description: 'お手製の逆仕込みパイとバタークリームベースのクレーム・ムースリーヌ、長野県産のシャインマスカットをナポレオンパイに仕立てました',
    flavorNote: '濃厚な卵の甘みと、ほろ苦く香ばしいカラメルソース',
    ingredients: ['信州ノニタマゴ', '濃厚牛乳', 'マダガスカル産バニラ', 'きび砂糖'],
    image: '/images/products/04.jpg'
  },
  {
    id: 'tarte-fruits',
    name: '桃のナポレオンパイ',
    englishName: 'Peach Napoleon Pie',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥680',
    description: 'お手製の逆仕込みパイとバタークリームベースのクレーム・ムースリーヌ、旬の桃をふんだんに使用しナポレオンパイに仕立てました',
    flavorNote: 'サクサク香ばしいタルト生地と、フルーツのみずみずしい果汁',
    ingredients: ['旬のフレッシュフルーツ', '発酵バター', 'アーモンドクリーム', '信州ノニタマゴ'],
    isSeasonal: true,
    image: '/images/products/05.jpg'
  },
  {
    id: 'chocolat-classique',
    name: 'レモンタルト',
    englishName: 'Lemon Tart',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥620',
    description: 'レモンのコンフィチュールをひと塗りしたタルト生地の中にフランス菓子仕込みのクレーム・シトロンとアメリカンダイナーのパイをイメージしたレモンクリームを重ねたMKのレモンタルトです．',
    flavorNote: '深みのあるビターカカオのコクと心地よい余韻',
    ingredients: ['最高級クーベルチュール', '国産発酵バター', '信州ノニタマゴ', 'ココア'],
    image: '/images/products/06.jpg'
  },
  {
    id: 'financier',
    name: 'ボネ',
    englishName: 'Bonet',
    category: 'cake',
    categoryLabel: '生菓子',
    price: '¥650',
    description: '%苺ムースの中にピスタチオブリュレとレモンクリームアーモンドビスキュイトップにはラズベリーのコンフィチュール、自家製ピスタチオプラリネのクリームを詰めたプチシューをあしらいました',
    flavorNote: '焦がしバターの芳醇なアロマとアーモンドのコク',
    ingredients: ['国産発酵バター100%', 'アーモンドパウダー', '信州ノニタマゴ卵白', 'ゲランド塩'],
    isSpecialite: true,
    image: '/images/products/07.jpg'
  },
  {
    id: 'langue-de-chat',
    name: 'ラングドシャ',
    englishName: 'Langue de Chat',
    category: 'baked',
    categoryLabel: '焼き菓子',
    price: '¥1700 / 缶（40枚入り）',
    description: '長いフォルムにザラっとした手触りが、まさにフランス語で「猫の舌」を意味する薄焼きのクッキーです.日本では四角や丸で焼き上げホワイトチョレートをサンドした姿で楽しまれている事が多いです',
    flavorNote: 'バターと蜂蜜のしっとりした甘み、爽やかな柑橘の香り',
    ingredients: ['国産発酵バター', '信州ノニタマゴ', '天然蜂蜜', 'レモンゼスト'],
    image: '/images/products/08.jpg'
  }
];
