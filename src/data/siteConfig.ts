/**
 * サイト全体の共通設定・テキスト・画像集約ファイル
 * 
 * 💡 このファイルを編集するだけで、店舗情報、全セクションの文言、画像URL、
 * ナビゲーション、お問い合わせフォームの選択肢などを誰でも簡単に差し替えられます。
 */

export const siteConfig = {
  // ==========================================
  // 1. 店舗基本情報 (Store Information)
  // ==========================================
  store: {
    nameEn: "save room for dessert MASTER KEY",
    nameJa: "マスターキー",
    subtitle: "Patisserie & Baked Sweets",
    logo: "/images/logo.png",
    tagline: "心も別腹も満たす、特別なスイーツを。",
    shortConcept: "分け合うおいしさ・分かち合うしあわせ。すべてのお客さまの心のカギになる洋菓子を塩尻から。",
    description: "東京・帝国ホテルで14年間腕を磨いたパティシエが営む洋菓子店。松本市で親しまれた10年を経て、2024年に塩尻市広丘野村へ移転リニューアル。「甘いものは別腹」を合言葉に、美しく繊細なホールケーキや看板ナポレオンパイ、厳選素材の焼き菓子をお届けします。",
    postalCode: "399-0702",
    address: "長野県塩尻市広丘野村1788-387",
    tel: "0263-75-2134",
    email: "info@masterkey-sweets.com",
    businessHours: "11:00 ～ 18:00",
    businessHoursNote: "※当日分のお菓子が無くなり次第終了となる場合がございます",
    holidays: "毎週月曜日 / 火曜日",
    holidaysNote: "※祝日等の営業・振替や臨時休業は公式Instagramにてお知らせいたします",
    // 営業カレンダーで定休日に指定する曜日 (0:日曜, 1:月曜, 2:火曜, 3:水曜, 4:木曜, 5:金曜, 6:土曜)
    weeklyHolidayDays: [1, 2],
    // 特別営業日（定休日の曜日でも営業する日: "YYYY-MM-DD" または "MM-DD"）
    specialOpenDates: ["2026-09-21", "09-21"],
    // 臨時休業日・振替休業日（通常営業の曜日でも休業する日: "YYYY-MM-DD" または "MM-DD"）
    specialHolidayDates: ["2026-09-23", "09-23"],
    accessList: [
      "JR篠ノ井線「広丘駅」西口より車で約4分 / 徒歩約15分",
      "塩尻市道広丘東通線沿い（ヤマト運輸 広丘野村営業所近く）",
      "長野自動車道「塩尻IC」「塩尻北IC」より車で各約10〜15分"
    ],
    parking: "専用駐車場 約10台完備（店舗前）",
    instagramUrl: "https://www.instagram.com/sr4d.masterkey/",
    instagramAccountName: "@sr4d.masterkey",
    threadsUrl: "https://www.threads.com/@sr4d.masterkey",
    threadsAccountName: "@sr4d.masterkey",
    xUrl: "https://x.com/original_sweets",
    xAccountName: "@original_sweets",
    googleMapsUrl: "https://share.google/CiXDHRYt4PyEuizA8",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=save+room+for+dessert+MASTER+KEY+塩尻市広丘野村1788-387&output=embed",
    copyrightYear: "2026"
  },

  // ==========================================
  // 2. ナビゲーションメニュー (Navigation)
  // ==========================================
  navigation: {
    links: [
      { id: "concept", labelEn: "Concept", labelJa: "こだわり", href: "#concept" },
      { id: "collection", labelEn: "Menu", labelJa: "商品一覧", href: "#collection" },
      { id: "specialty", labelEn: "Specialité", labelJa: "オーダーメイド", href: "#specialty" },
      { id: "about", labelEn: "Chef & Story", labelJa: "職人の想い", href: "#about" },
      { id: "store", labelEn: "Store", labelJa: "店舗情報", href: "#store" },
      { id: "news", labelEn: "News", labelJa: "お知らせ", href: "#news" }
    ],
    contactBtnText: "ご予約（お電話）",
    mobileContactBtnText: "お電話でのご予約・お問い合わせ"
  },

  // ==========================================
  // 3. 画像設定 (Images Management)
  // ==========================================
  images: {
    // トップの大きなカルーセル画像
    heroSlides: [
      {
        url: "/images/hero/hero-napoleon.jpg",
        subTitle: "House Specialité",
        title: "心も別腹も満たす、\n極上のナポレオンパイ。",
        tag: "Napoleon Pie"
      },
      {
        url: "/images/hero/hero-anniversary.jpg",
        subTitle: "Celebration & Memory",
        title: "分け合うおいしさ、\n分かち合うしあわせのケーキ。",
        tag: "Anniversary Cake"
      },
      {
        url: "/images/hero/hero-storefront.jpg",
        subTitle: "Welcome to MASTER KEY",
        title: "すべてのお客さまの\n心のカギになる洋菓子店。",
        tag: "Shiojiri Atelier"
      }
    ],

    // コンセプトセクション画像（メイン・サブ）
    concept: {
      main: "/images/concept/concept-main.jpg",
      sub: "/images/concept/concept-sub.jpg"
    },

    // オーダーメイド（Sur-Mesure）ギャラリー画像
    specialite: {
      items: [
        {
          id: "anniversary-hall-cake",
          title: "2025 X'mas Specialité",
          subTitle: "2025 クリスマスケーキ",
          desc: "美しく繊細なデコレーションと軽やかな生クリーム。特別な記念日を彩る評判のホールケーキ。",
          image: "/images/specialite/001.jpg",
          aspect: "standard"
        },
        {
          id: "strawberry-celebration",
          title: "2025 X'mas Specialité",
          subTitle: "2025 クリスマスケーキ",
          desc: "口どけの良い北海道産純生クリームと厳選された旬の苺を贅沢に重ねた王道のアニバーサリーケーキ。",
          image: "/images/specialite/002.jpg",
          aspect: "standard"
        },
        {
          id: "gateau-chocolat",
          title: "GATEAU CHOCOLAT",
          subTitle: "ガトーショコラ",
          desc: "上質なクーベルチュールの深いコクとアロマが広がる大人のための記念日ショコラケーキ。",
          image: "/images/specialite/004.jpg",
          aspect: "standard"
        },
        {
          id: "custom-fruits-cake",
          title: "DECORATION CAKE",
          subTitle: "デコレーションケーキ",
          desc: "市場や契約農家直送の旬果実を惜しみなくあしらった、華やかでみずみずしい特注ケーキ。",
          image: "/images/specialite/003.jpg",
          aspect: "wide"
        },
        {
          id: "hina-strawberry-cake",
          title: "HINA ICHIGO DECORATION",
          subTitle: "ひな祭り苺デコレーション 2026",
          desc: "",
          image: "/images/specialite/005.jpg",
          aspect: "standard"
        },
        {
          id: "fruits-tarte",
          title: "FRUITS TARTE",
          subTitle: "フルーツタルト",
          desc: "",
          image: "/images/specialite/006.jpg",
          aspect: "wide"
        }
      ]
    },

    // シェフ・工房紹介セクション画像
    about: {
      image: "/images/about/chef-horiuchi.jpg",
      roleText: "Owner Chef & Pastry Craftsman"
    },

    // Instagramギャラリー写真
    gallery: [
      {
        url: "/images/specialite/napoleon-pie.jpg",
        caption: "名物 ナポレオンパイ"
      },
      {
        url: "/images/gallery/gallery-showcase.jpg",
        caption: "彩り豊かなショーケース"
      },
      {
        url: "/images/gallery/gallery-baked.jpg",
        caption: "国産発酵バターの焼き菓子"
      },
      {
        url: "/images/specialite/anniversary-cake.jpg",
        caption: "記念日アニバーサリーケーキ"
      },
      {
        url: "/images/specialite/coco-gift.jpg",
        caption: "愛猫ココちゃんのギフト缶"
      },
      {
        url: "/images/concept/concept-sub.jpg",
        caption: "遊び心あふれる鍵型の小窓"
      }
    ]
  },

  // ==========================================
  // 4. 各セクションの文章・見出し (Content Texts)
  // ==========================================
  content: {
    // --- コンセプトセクション (Concept) ---
    concept: {
      badge: "こだわり",
      titleEn: "Concept",
      subtitleJa: "心も別腹も満たす。分け合うおいしさ、分かち合うしあわせ。",
      lead: "すべてのお客さまの心のカギになるスイーツを。",
      paragraphs: [
        "店名「MASTER KEY（マスターキー）」には、“すべてのお客さまの心のカギになる”という温かい願いを込めています。イメージカラーのオレンジ色は、果物の「ミカン＝未完」から。初心を忘れることなく、常に向上心とチャレンジ精神を持って菓子づくりと向き合っています。",
        "サブタイトルの「save room for dessert」は、“甘いものは別腹。気にせず気軽に楽しんでほしい”という想い。ケーキが切り分けられたようなロゴマークは「分け合うおいしさ・分かち合うしあわせ」を象徴しています。",
        "木目を基調とした温もりあふれる店内には、お子さまがのぞき込める鍵型の小窓など遊び心もたっぷり。記念日やお祝いはもちろん、日常のちょっとしたご褒美にも、笑顔をお届けします。"
      ],
      promisesTitle: "Our 3 Commitments",
      promises: [
        {
          num: "01. 厳選された基本素材",
          title: "信州ノニタマゴと国産発酵バター",
          desc: "松本産の安心・安全な「信州ノニタマゴ」や国産発酵バター100%など、素直な美味しさを支える素材を厳選。"
        },
        {
          num: "02. 帝国ホテル仕込みの技",
          title: "14年の研鑽が生む繊細な調和",
          desc: "名門ホテルで培った確かなクラフトマンシップで、甘さと軽やかさ、食感の心地よいバランスを追求。"
        },
        {
          num: "03. 出来立てと温かい空間",
          title: "木と遊び心が調和する塩尻のアトリエ",
          desc: "松本の10年を経て塩尻へ。独立型店舗として広々とした駐車場と木の温もりある空間でお迎えします。"
        }
      ]
    },

    // --- オーダーメイドセクション (Order Made) ---
    specialite: {
      badge: "オーダーメイド・ホールケーキ",
      titleEn: "Custom Cakes",
      subtitleJa: "特別な記念日やお祝いを彩る、繊細なデザインのホールケーキ",
      heading: "分け合うおいしさ\n分かち合うしあわせ",
      desc: "誕生日、記念日、ウェディング、季節のお祝いに。東京の有名ホテルで腕を磨いたパティシエが、デザイン性と美味しさを兼ね備えた特別なホールケーキをお仕立てします。お客様のご希望のテーマやご用途に合わせて、ひとつひとつ心を込めてお作りいたします。",
      tags: ["# ホールケーキ", "# アニバーサリー", "# 誕生日ケーキ", "# オーダーメイド", "# 記念日"],
      catalogBtn: "お電話でのご予約について",
      reservationNotice: "※ホールケーキ・オーダーメイドのご予約はお電話のみにて承っております。",
      hoverBadge: "詳細を見る",
      menuLink: "商品ラインナップを見る"
    },

    // --- 商品一覧セクション (Collection) ---
    menu: {
      badge: "商品一覧",
      titleEn: "Collection",
      subtitleJa: "定番の生ケーキから名物ナポレオンパイ、手土産に喜ばれる焼き菓子まで",
      hoverBadge: "詳しく見る",
      taxLabel: "（税込）",
      closeButtonText: "閉じる",
      noticeBoxTitle: "【ホールケーキのご予約について】",
      noticeBoxText: "ホールケーキやナポレオンパイのご予約はお電話（0263-75-2134）のみにて承っております。※Web・メール・SNSでのご予約受付は行っておりません。愛猫ココちゃんのギフトボックスや焼き菓子の地方発送についてもお気軽にお電話にてお問い合わせください。",
      ctaButton: "お電話でのご予約・お問い合わせ"
    },

    // --- シェフ・工房セクション (About) ---
    about: {
      badge: "シェフの想い",
      titleEn: "Chef & Story",
      subtitleJa: "男女年齢問わず、誰にでも愛されるスイーツを届けていきたい。",
      paragraphs: [
        "東京の「帝国ホテル」で14年間にわたりパティシエとしての腕を磨き、その後長野県松本市・上高地の有名ホテルを経て、2013年4月に夫婦で松本市出川に「original sweets MASTER KEY」をオープンいたしました。",
        "約10年間、地域の皆さまに支えていただきながら歩みを続け、2024年1月27日、妻の地元である塩尻市広丘野村へ「save room for dessert MASTER KEY」として移転リニューアルオープンを迎えました。",
        "「男女年齢問わず、誰にでも愛される商品」をモットーに、基本となる卵やバター、粉の選定から温度・焼き加減まで妥協せず、毎日心を込めて焼き上げています。",
        "「心も別腹も満たすケーキをご提供します！」 大切な人とケーキを囲む時間に、温かなしあわせが灯りますように。"
      ],
      chefTitle: "オーナーパティシエ",
      chefName: "堀内 健介",
      chefNameEn: "Kensuke Horiuchi"
    },

    // --- お知らせ＆Instagramセクション (News) ---
    news: {
      badge: "お知らせ",
      titleEn: "NEWS",
      subtitleJa: "最新情報・営業案内・メディア掲載",
      instagramBadge: "公式SNS",
      instagramTitleEn: "Social Media",
      instagramSubtitleJa: "Instagram・Threads・Xで日々の最新情報を配信中",
      instagramCta: "最新情報を見る",
      instagramHoverBadge: "SNSを開く"
    },

    // --- 店舗情報＆営業カレンダー (Store) ---
    store: {
      badge: "店舗情報",
      titleEn: "STORE",
      subtitleJa: "店舗情報・営業案内・交通アクセス",
      calendarTitle: "営業カレンダー",
      legendHoliday: "定休日（月・火）",
      legendToday: "本日",
      tableLabels: {
        address: "住所",
        tel: "電話番号",
        hours: "営業時間",
        access: "アクセス",
        parking: "駐車場"
      },
      calendar: {
        weekdays: ["日", "月", "火", "水", "木", "金", "土"],
        prevMonthAria: "前月",
        nextMonthAria: "次月"
      }
    },

    // --- フッター (Footer) ---
    footer: {
      navTitle: "Navigation",
      storeTitle: "Store Information",
      snsTitle: "Official Social Accounts",
      backToTop: "Back to Top"
    },

    // --- お電話でのご予約・お問い合わせモーダル (Reservation Guide Modal) ---
    contact: {
      badge: "お電話でのご予約・お問い合わせ",
      titleEn: "Reservation by Phone",
      subtitleJa: "ご予約・お取り置きはお電話のみにて承っております",
      desc: "当店では確実なお渡しとお客様のご要望に寄り添ったお仕立てのため、ホールケーキや商品のご予約・お取り置きはお電話でのみ承っております。（Web・SNS DM・メールでのご予約受付は行っておりません）",
      phoneNoticeTitle: "【ご予約・お問い合わせ専用ダイヤル】",
      callButtonText: "お電話をかける",
      hoursText: "受付時間：11:00 ～ 18:00（月曜・火曜 定休日）",
      checklistTitle: "お電話の際にお伺いする内容",
      checklistItems: [
        { label: "ご希望の商品", detail: "ホールケーキの種類・サイズ（号数）、ナポレオンパイ、焼き菓子ギフトなど" },
        { label: "お受取日時", detail: "ご来店予定の日時（営業時間 11:00〜18:00 内）" },
        { label: "メッセージプレート・ローソク", detail: "お名前、記念日メッセージ、ローソクの本数など" },
        { label: "お客様情報", detail: "お名前、当日ご連絡のつくお電話番号" }
      ],
      noticeTitle: "ご予約に関するお願い",
      noticeList: [
        "ホールケーキ・特注ケーキは、できるだけお早めのご予約（数日前〜1週間前目安）をお願いいたします。",
        "当日のお取り置きも在庫状況により承りますので、お気軽にお電話にてお確かめください。",
        "作業中や接客中はお電話に出られない場合がございます。その際は誠に恐れ入りますが、少し時間を置いておかけ直しいただけますようお願い申し上げます。"
      ],
      closeBtnText: "閉じる"
    }
  }
};
