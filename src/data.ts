import { atom } from 'jotai';

export type Page = 'hero' | 'product' | 'about' | 'contact' | 'pertanian' | 'shop' | 'profil' | 'game';

export const currentPageAtom = atom<Page>('hero');
export const profileCompletedAtom = atom<boolean>(true);
export const userAvatarAtom = atom<string>('');
export const userNameAtom = atom<string>('Rifki Fadhila');
export const userEducationAtom = atom<string>('sarjana');
export const userUniversityAtom = atom<string>('Surabaya, Jawa Timur');
export const userFieldAtom = atom<string>('rumah-tangga');
export const userLinkedinAtom = atom<string>('https://instagram.com/rifki_nuvora');

export const langAtom = atom<'id' | 'en'>(
  (typeof window !== 'undefined' && localStorage.getItem('language_pref') === 'id') ? 'id' : 'en'
);

// GreenCircle Membership & Points State (Defaults matching prompt: Tier Sprout, 1,250 Points)
export const userPointsAtom = atom<number>(1250);
export const memberTierAtom = atom<string>('Sprout');
export const refillCountAtom = atom<number>(6);

// Impact Constants
export const IMPACT_METRICS = {
  PLASTIC_PER_REFILL_GRAMS: 125, // 6 refills * 125g = 750g as in prompt
  COIR_BIOMASS_PER_REFILL_GRAMS: 250, // 6 refills * 250g = 1.5 kg
  BETEL_LEAF_PER_REFILL_GRAMS: 333, // 6 refills * 333g = 2.0 kg
  CO2_REDUCED_PER_REFILL_KG: 0.25, // 1.5 kg CO2e
  CFU_PATHOGENS_MILLIONS_PER_REFILL: 4.5,
  PROTECTION_DAYS_PER_REFILL: 28,
  POINTS_PER_STAMP: 50
};

// Monthly Biomassa Data for Animated Charts
export interface MonthlyImpactData {
  month: string;
  coirKg: number;
  betelKg: number;
  plasticGrams: number;
  co2Kg: number;
}

export const monthlyImpactHistory: MonthlyImpactData[] = [
  { month: 'Jun', coirKg: 0.8, betelKg: 1.1, plasticGrams: 375, co2Kg: 0.7 },
  { month: 'Jul', coirKg: 1.0, betelKg: 1.3, plasticGrams: 500, co2Kg: 0.9 },
  { month: 'Agt', coirKg: 1.2, betelKg: 1.6, plasticGrams: 625, co2Kg: 1.1 },
  { month: 'Sep', coirKg: 1.3, betelKg: 1.8, plasticGrams: 680, co2Kg: 1.3 },
  { month: 'Okt', coirKg: 1.4, betelKg: 1.9, plasticGrams: 710, co2Kg: 1.4 },
  { month: 'Nov', coirKg: 1.5, betelKg: 2.0, plasticGrams: 750, co2Kg: 1.5 },
];

export interface ScannedStamp {
  id: string;
  code: string;
  date: string;
  points: number;
  variant: string;
  location: string;
}

export const initialScannedStamps: ScannedStamp[] = [
  { id: 'stamp-1', code: 'SIRCHO-ECO-8821', date: '04 Nov 2026', points: 50, variant: 'Sirih Fresh Classic', location: 'Refill Hub Gubeng' },
  { id: 'stamp-2', code: 'SIRCHO-COIR-4412', date: '28 Okt 2026', points: 50, variant: 'Citrus Coir Fresh', location: 'Bank Sampah Rungkut' },
  { id: 'stamp-3', code: 'SIRCHO-LEAF-9930', date: '15 Okt 2026', points: 50, variant: 'Sirih Fresh Classic', location: 'Zero Waste Store Surabaya Barat' },
  { id: 'stamp-4', code: 'SIRCHO-EUC-1209', date: '01 Okt 2026', points: 50, variant: 'Eucalyptus Herbal', location: 'Eco Station Surabaya Pusat' }
];

export const scannedStampsAtom = atom<ScannedStamp[]>(initialScannedStamps);

export interface RedeemedReward {
  id: string;
  title: string;
  code: string;
  date: string;
  pointsCost: number;
  type: 'discount' | 'free_refill' | 'tree' | 'b2b';
}

export const initialRedeemedRewards: RedeemedReward[] = [
  { id: 'red-1', title: 'Voucher Diskon 5% GreenCircle', code: 'GC-DISC-5PCT-991', date: '02 Nov 2026', pointsCost: 100, type: 'discount' },
  { id: 'red-2', title: '1x Free Sircho Refill Cartridge', code: 'FREE-REFILL-SIR-220', date: '22 Okt 2026', pointsCost: 500, type: 'free_refill' }
];

export const redeemedRewardsAtom = atom<RedeemedReward[]>(initialRedeemedRewards);

// GreenCircle Loyalty Rewards Catalog (featuring 5% Discount, Free Refill, etc.)
export const greenCircleRewards = [
  {
    id: 'rew-5pct',
    titleId: 'Voucher Diskon 5% Pembelian Berikutnya',
    titleEn: '5% Discount Voucher on Next Purchase',
    pointsCost: 100,
    type: 'discount' as const,
    discountLabel: '5% OFF',
    descriptionId: 'Potongan langsung 5% untuk semua pemesanan Refill Pack di Nuvora Store.',
    descriptionEn: 'Direct 5% discount for all Refill Pack purchases at Nuvora Store.'
  },
  {
    id: 'rew-free-refill',
    titleId: '1x Free Sircho Refill Cartridge',
    titleEn: '1x Free Sircho Refill Cartridge',
    pointsCost: 500,
    type: 'free_refill' as const,
    discountLabel: 'FREE ITEM',
    descriptionId: 'Klaim 1 cartridge refill gratis di titik Refill Station mitra Surabaya terdekat.',
    descriptionEn: 'Claim 1 free refill cartridge at your nearest partner Refill Station in Surabaya.'
  },
  {
    id: 'rew-tree-donation',
    titleId: 'Donasi 1 Bibit Pohon Mangrove Pesisir Surabaya',
    titleEn: 'Donate 1 Coastal Mangrove Tree Sapling',
    pointsCost: 350,
    type: 'tree' as const,
    discountLabel: 'ECO IMPACT',
    descriptionId: 'Nuvora menanam 1 bibit mangrove di kawasan pesisir Wonorejo Surabaya.',
    descriptionEn: 'Nuvora plants 1 mangrove sapling in Wonorejo coastal reserve, Surabaya.'
  },
  {
    id: 'rew-b2b-sample',
    titleId: 'Paket Tester B2B Kos & Cafe (Sample Kit)',
    titleEn: 'B2B Hospitality Tester Kit',
    pointsCost: 750,
    type: 'b2b' as const,
    discountLabel: 'B2B TRIAL',
    descriptionId: 'Sampel lengkap Sircho Stamp untuk uji coba sanitasi fasilitas komersial Anda.',
    descriptionEn: 'Comprehensive Sircho Stamp sample pack for testing commercial facility sanitation.'
  }
];

// Concept: "Press, Stick, Flush" Steps
export const howItWorksSteps = [
  {
    step: '01',
    name: 'PRESS',
    titleId: 'Tekan Aplikator Ergonomis',
    titleEn: 'Press Ergonomic Applicator',
    descId: 'Buka tutup pengaman dan tempelkan moncong aplikator stempel ke permukaan keramik kloset yang kering.',
    descEn: 'Uncap the protective lid and press the ergonomic applicator against the dry ceramic toilet bowl.',
    icon: 'Fingerprint'
  },
  {
    step: '02',
    name: 'STICK',
    titleId: 'Gel Menempel Sempurna',
    titleEn: 'Bio-Gel Sticks Firmly',
    descId: 'Dorong tab pendorong stempel 1 klik. Gel matriks biomassa sabut kelapa dan ekstrak sirih langsung merekat kokoh.',
    descEn: 'Push the dispensing notch 1 click. The coconut coir and betel leaf bio-gel instantly bonds securely.',
    icon: 'Sparkles'
  },
  {
    step: '03',
    name: 'FLUSH',
    titleId: 'Siram & Bersih Alami',
    titleEn: 'Flush & Natural Clean',
    descId: 'Setiap aliran siraman air mengaktifkan mikro-busa kavikol antibakteri, mencegah noda kapur dan mensterilkan kloset.',
    descEn: 'Every flush activates natural antibacterial chavicol micro-foam, preventing limescale and sterilizing pathogens.',
    icon: 'Droplets'
  }
];

// Community & Refill Map Data (Focus: Surabaya & Sekitarnya)
export interface RefillStation {
  id: string;
  name: string;
  type: 'refill_station' | 'waste_bank' | 'zero_waste_store';
  district: string;
  address: string;
  hours: string;
  stockStatus: 'Tersedia Banyak' | 'Tersedia Terbatas' | 'Restock Besok';
  distance: string;
  phone: string;
}

export const refillStationsSurabaya: RefillStation[] = [
  {
    id: 'st-1',
    name: 'Refill Hub Gubeng — Nuvora Eco Corner',
    type: 'refill_station',
    district: 'Surabaya Pusat / Gubeng',
    address: 'Jl. Raya Gubeng No. 42, Surabaya',
    hours: '08:00 - 20:00 WIB',
    stockStatus: 'Tersedia Banyak',
    distance: '1.2 km',
    phone: '+62 812-3344-5566'
  },
  {
    id: 'st-2',
    name: 'Bank Sampah Induk Surabaya Bersih',
    type: 'waste_bank',
    district: 'Surabaya Timur / Rungkut',
    address: 'Jl. Rungkut Asri Timur No. 18, Surabaya',
    hours: '08:30 - 16:30 WIB (Tukar Sabut & Poin)',
    stockStatus: 'Tersedia Banyak',
    distance: '3.4 km',
    phone: '+62 813-8899-7711'
  },
  {
    id: 'st-3',
    name: 'Zero Waste Store Surabaya Barat (Citraland)',
    type: 'zero_waste_store',
    district: 'Surabaya Barat / Sambikerep',
    address: 'Ruko G-Walk Citraland Blok B-12, Surabaya',
    hours: '09:00 - 21:00 WIB',
    stockStatus: 'Tersedia Banyak',
    distance: '5.8 km',
    phone: '+62 811-2233-4455'
  },
  {
    id: 'st-4',
    name: 'Komunitas Eco-Sanitasi Wonokromo',
    type: 'refill_station',
    district: 'Surabaya Selatan / Wonokromo',
    address: 'Jl. Diponegoro No. 88, Surabaya',
    hours: '08:00 - 18:00 WIB',
    stockStatus: 'Tersedia Terbatas',
    distance: '2.7 km',
    phone: '+62 812-9900-1122'
  },
  {
    id: 'st-5',
    name: 'Bank Sampah Kenjeran Pesisir Asri',
    type: 'waste_bank',
    district: 'Surabaya Utara / Kenjeran',
    address: 'Jl. Pantai Kenjeran No. 105, Surabaya',
    hours: '09:00 - 17:00 WIB',
    stockStatus: 'Tersedia Banyak',
    distance: '6.1 km',
    phone: '+62 813-4455-6677'
  }
];

// Community Live Feed Posts
export interface CommunityPost {
  id: string;
  author: string;
  role: string;
  avatar: string;
  time: string;
  text: string;
  tags: string[];
  likes: number;
  refillCount: number;
}

export const communityFeedPosts: CommunityPost[] = [
  {
    id: 'post-1',
    author: 'Dinda Ayuningtyas',
    role: 'Pengelola Kos Mahasiswi Rungkut',
    avatar: '👩🏻‍💼',
    time: '2 jam yang lalu',
    text: 'Baru refill 3 packs, stamp kelima! Kloset 12 kamar kos jadi bebas bau apek dan ga ada kerak air lagi tanpa bikin pusing aroma klorin tajam. Anak-anak kos pada suka aromanya!',
    tags: ['#NuvoraEcoHero', '#SirchoStamp', '#KosSehatSurabaya'],
    likes: 42,
    refillCount: 5
  },
  {
    id: 'post-2',
    author: 'Kevin Setiawan',
    role: 'Cafe Owner — Spazio Surabaya',
    avatar: '👨🏻‍💻',
    time: '5 jam yang lalu',
    text: 'Toilet kafe kami sekarang 100% pakai Sircho Stamp. Customer banyak yang notice toiletnya estetik & wangi herbal segar. Plus poin GreenCircle-nya udah kekumpul banyak buat donasi mangrove!',
    tags: ['#SirchoStamp', '#GreenBusiness', '#ZeroWasteCafe'],
    likes: 38,
    refillCount: 8
  },
  {
    id: 'post-3',
    author: 'Ibu Ratna Wardani',
    role: 'Aktivis Bank Sampah Rungkut',
    avatar: '🧕🏼',
    time: '1 hari yang lalu',
    text: 'Hari ini berhasil kumpulkan 25kg sabut kelapa dari warga untuk disetor ke Nuvora Co. Senang sekali limbah sabut sekarang diserap jadi produk bernilai tinggi. Keren Sircho!',
    tags: ['#CircularEconomy', '#BankSampahSurabaya', '#NuvoraCo'],
    likes: 67,
    refillCount: 4
  }
];

// Products Catalog
export const sirchoProducts = [
  {
    id: 'prod-starter-kit',
    name: 'Sircho Stamp Starter Kit',
    subtitleId: 'Aplikator Ergonomis + 2 Gel Refill Pack',
    subtitleEn: 'Ergonomic Applicator + 2 Gel Refill Packs',
    price: 49000,
    originalPrice: 65000,
    badgeId: 'Starter Pack',
    badgeEn: 'Starter Pack',
    rating: 4.9,
    reviews: 1420,
    featuresId: [
      '12 Stamp gel bio-sirih higienis',
      'Konsep "Press, Stick, Flush" mudah dipakai',
      'Mencegah kerak & biofilm Salmonella Typhi',
      'Aplikator dapat diisi ulang selamanya'
    ],
    featuresEn: [
      '12 bio-betel hygienic stamp gels',
      'Easy "Press, Stick, Flush" concept',
      'Prevents scale & Salmonella Typhi biofilm',
      'Reusable forever applicator'
    ],
    img: '/gambar/kemasanproduk.png'
  },
  {
    id: 'prod-refill-duo',
    name: 'Sircho Stamp Refill Duo Pack',
    subtitleId: '2 Cartridge Refill Sabut Kelapa & Daun Sirih',
    subtitleEn: '2 Coconut Coir & Betel Leaf Cartridge Refills',
    price: 36000,
    originalPrice: 45000,
    badgeId: 'Paling Hemat',
    badgeEn: 'Best Seller Refill',
    rating: 4.8,
    reviews: 980,
    featuresId: [
      'Setara 2 botol pembersih konvensional (250g plastik dicegah)',
      'Aman untuk bakteri pengurai septic tank',
      'Bahan abrasif mikro sabut kelapa lembut',
      'Cukup untuk pemakaian 2 bulan rumah tangga'
    ],
    featuresEn: [
      'Replaces 2 conventional cleaner bottles (250g plastic saved)',
      'Safe for septic tank microbiome',
      'Gentle coconut coir micro-abrasive',
      'Lasts 2 months for average household'
    ],
    img: '/gambar/kemasanproduk.png'
  },
  {
    id: 'prod-family-bulk',
    name: 'Sircho Eco Family & B2B 4-Pack Bundle',
    subtitleId: 'Paket 4 Cartridge + Bonus Coir Sponge & 200 PTS',
    subtitleEn: 'Complete 4-Cartridge Refill + Bonus Coir Sponge',
    price: 68000,
    originalPrice: 90000,
    badgeId: 'B2B & Family Choice',
    badgeEn: 'Best Value',
    rating: 5.0,
    reviews: 2150,
    featuresId: [
      'Mencegah 500g limbah botol plastik sekali pakai',
      'Mendukung petani sabut kelapa & bank sampah lokal',
      'Bonus 1x Spons Kloset Sabut Kelapa Nuvora',
      'Bonus langsung 200 GreenCircle Points'
    ],
    featuresEn: [
      'Prevents 500g single-use plastic bottle waste',
      'Supports local coconut coir farming partners',
      'Bonus 1x Nuvora Coconut Coir Toilet Sponge',
      'Instant 200 Green Points included'
    ],
    img: '/gambar/kemasanproduk.png'
  }
];

// B2B Partnership Packages (Kos, Hotel, Cafe, Restoran)
export const b2bPackages = [
  {
    id: 'b2b-kos',
    title: 'Paket Pengelola Kos & Hunian Mahasiswa',
    rooms: '10 - 30 Kamar',
    priceEstimate: 'Mulai Rp 180.000 / bln',
    benefits: [
      'Penghematan biaya sanitasi bulanan hingga 35%',
      'Bebas aroma klorin tajam yang memicu batuk penghuni',
      'Sertifikat Kos Ramah Lingkungan (Green Dorm Verified)',
      'Pengantaran refill otomatis berkala ke lokasi'
    ],
    highlight: 'Favorit 85+ Kos Surabaya'
  },
  {
    id: 'b2b-cafe',
    title: 'Paket Kafe & Restoran Higienis',
    rooms: '1 - 5 Restroom Pelanggan',
    priceEstimate: 'Mulai Rp 95.000 / bln',
    benefits: [
      'Toilet wangi herbal segar & bersih mengesankan tamu',
      'Stiker akrilik "Cleaned with Natural Sircho Stamp"',
      'Mencegah kerak kalsium air sumur & pipa mampet',
      'Dukungan promosi bersama di Community Feed'
    ],
    highlight: 'Dipercaya Kafe Kekinian'
  },
  {
    id: 'b2b-hotel',
    title: 'Paket Hotel & Villa Eco-Resort',
    rooms: '30+ Kamar / Unit',
    priceEstimate: 'Kustomisasi Kontrak B2B',
    benefits: [
      'Dokumentasi audit ESG & reduksi jejak karbon resmi',
      'Aplikator kustom berlogo hotel (Co-Branded)',
      '100% aman untuk pengolahan limbah STP & septic tank hotel',
      'Dedicated Account Manager Nuvora Co'
    ],
    highlight: 'Kemitraan Hotel Berkelanjutan'
  }
];

// SDG Alignment
export const sdgData = [
  {
    number: '3',
    title: 'Good Health & Well-being',
    desc: 'Memutus transmisi patogen fekal-oral (Salmonella Typhi) dengan kavikol alami daun sirih.'
  },
  {
    number: '6',
    title: 'Clean Water & Sanitation',
    desc: 'Bebas klorin dan asam pekat, melindungi mikroba septic tank dan air tanah dari kontaminasi.'
  },
  {
    number: '8',
    title: 'Decent Work & Economic Growth',
    desc: 'Memberdayakan petani kelapa & bank sampah lokal melalui penyerapan limbah biomassa bernilai tambah.'
  },
  {
    number: '12',
    title: 'Responsible Consumption & Production',
    desc: 'Sistem cartridge isi ulang yang mengeliminasi botol plastik sekali pakai dan mempromosikan sirkularitas.'
  }
];
