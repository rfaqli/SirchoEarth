import { atom } from 'jotai';

export type Page = 'hero' | 'product' | 'about' | 'contact' | 'pertanian' | 'shop' | 'profil' | 'game';

export const currentPageAtom = atom<Page>('hero');
export const profileCompletedAtom = atom<boolean>(false);
export const userAvatarAtom = atom<string>('');
export const userNameAtom = atom<string>('Rifki Fadhila');
export const userEducationAtom = atom<string>('sarjana');
export const userUniversityAtom = atom<string>('Surabaya, Indonesia');
export const userFieldAtom = atom<string>('sanitasi-berkelanjutan');
export const userLinkedinAtom = atom<string>('https://linkedin.com/in/rifki-eco');

export const langAtom = atom<'id' | 'en'>(
  (typeof window !== 'undefined' && localStorage.getItem('language_pref') === 'id') ? 'id' : 'en'
);

// Sircho Stamp Tracking & Gamification Atoms
export const refillCountAtom = atom<number>(4);
export const userPointsAtom = atom<number>(200);

export interface ScannedStamp {
  id: string;
  code: string;
  date: string;
  points: number;
  variant: string;
}

export const initialScannedStamps: ScannedStamp[] = [
  { id: 'stamp-1', code: 'SIRCHO-ECO-8821', date: '04 Nov 2026', points: 50, variant: 'Sirih Fresh Classic' },
  { id: 'stamp-2', code: 'SIRCHO-COIR-4412', date: '28 Okt 2026', points: 50, variant: 'Citrus Coir Fresh' },
  { id: 'stamp-3', code: 'SIRCHO-LEAF-9930', date: '15 Okt 2026', points: 50, variant: 'Sirih Fresh Classic' },
  { id: 'stamp-4', code: 'SIRCHO-EUC-1209', date: '01 Okt 2026', points: 50, variant: 'Eucalyptus Herbal' }
];

export const scannedStampsAtom = atom<ScannedStamp[]>(initialScannedStamps);

export interface RedeemedReward {
  id: string;
  title: string;
  code: string;
  date: string;
  pointsCost: number;
  type: 'voucher' | 'tree' | 'merch';
}

export const initialRedeemedRewards: RedeemedReward[] = [
  { id: 'red-1', title: 'Donasi 1 Bibit Pohon Mangrove Pesisir', code: 'TREE-PLANT-MGR-88', date: '20 Okt 2026', pointsCost: 150, type: 'tree' }
];

export const redeemedRewardsAtom = atom<RedeemedReward[]>(initialRedeemedRewards);
export const quizScoreAtom = atom<number>(0);
export const quizCompletedAtom = atom<boolean>(false);

// Constants for impact calculations
export const IMPACT_METRICS = {
  // Grams of virgin single-use plastic bottle prevented per refill pack
  PLASTIC_PER_REFILL_GRAMS: 48,
  // Grams of coconut coir agricultural biomass utilized per refill pack
  COIR_BIOMASS_PER_REFILL_GRAMS: 35,
  // Millions of CFU sanitation pathogens (Salmonella Typhi & E. coli) neutralized
  CFU_PATHOGENS_MILLIONS_PER_REFILL: 2.5,
  // Days of active hygienic toilet bowl protection per refill
  PROTECTION_DAYS_PER_REFILL: 28,
  // Chemical chlorine runoff avoided (grams)
  CHLORINE_AVOIDED_GRAMS: 120,
  // Points earned per stamp scan
  POINTS_PER_STAMP: 50
};

// Rewards Store Items
export const rewardsCatalog = [
  {
    id: 'rew-voucher-20',
    titleId: 'Voucher Diskon 20% Refill Pack',
    titleEn: '20% Off Refill Pack Voucher',
    pointsCost: 100,
    type: 'voucher' as const,
    descriptionId: 'Potongan 20% untuk pembelian berikutnya di Nuvora Official Store.',
    descriptionEn: 'Get 20% discount on your next refill purchase at Nuvora Official Store.',
    icon: 'Percent'
  },
  {
    id: 'rew-tree-planting',
    titleId: 'Donasi 1 Bibit Pohon Pesisir & Sirih Komunitas',
    titleEn: 'Donate 1 Coastal Tree & Community Betel Sapling',
    pointsCost: 150,
    type: 'tree' as const,
    descriptionId: 'Nuvora menanam 1 bibit mangrove di pesisir Jawa Timur atas namamu.',
    descriptionEn: 'Nuvora plants 1 mangrove sapling on East Java coast under your name.',
    icon: 'TreePine'
  },
  {
    id: 'rew-free-shipping',
    titleId: 'Gratis Ongkir Ekologis Nuvora',
    titleEn: 'Eco Free Shipping Voucher',
    pointsCost: 50,
    type: 'voucher' as const,
    descriptionId: 'Bebas biaya pengiriman dengan kurir armada listrik/rendah emisi.',
    descriptionEn: 'Free delivery with electric vehicle / carbon-offset courier.',
    icon: 'Truck'
  },
  {
    id: 'rew-brush-coir',
    titleId: 'Sikat Kloset Serat Sabut Kelapa & Bambu',
    titleEn: 'Bamboo & Coconut Coir Toilet Brush',
    pointsCost: 200,
    type: 'merch' as const,
    descriptionId: 'Sikat kloset 100% biodegradable anti-gores dan ramah septic tank.',
    descriptionEn: '100% biodegradable scratch-free toilet brush, safe for septic tanks.',
    icon: 'Sparkles'
  },
  {
    id: 'rew-sanitation-kit',
    titleId: 'Donasi Paket Sanitasi Jamban Sehat Warga',
    titleEn: 'Donate Healthy Latrine Sanitation Kit',
    pointsCost: 250,
    type: 'tree' as const,
    descriptionId: 'Bantuan sanitasi sehat untuk pemukiman rentan penularan tifoid.',
    descriptionEn: 'Sanitation kit aid for communities vulnerable to typhoid transmission.',
    icon: 'HeartHandshake'
  }
];

// Product Catalog
export const sirchoProducts = [
  {
    id: 'prod-starter-kit',
    name: 'Sircho Stamp Starter Kit',
    subtitleId: 'Aplikator Ergonomis + 2 Gel Refill Pack',
    subtitleEn: 'Ergonomic Applicator + 2 Gel Refill Packs',
    price: 49000,
    originalPrice: 65000,
    badgeId: 'Paling Populer',
    badgeEn: 'Best Seller',
    rating: 4.9,
    reviews: 1420,
    featuresId: [
      '12 Stamp gel bio-sirih higienis',
      'Mencegah kerak & biofilm Salmonella Typhi',
      'Aroma herbal segar daun sirih alami',
      'Aplikator dapat diisi ulang selamanya'
    ],
    featuresEn: [
      '12 bio-betel hygienic stamp gels',
      'Prevents scale & Salmonella Typhi biofilm',
      'Fresh natural herbal betel fragrance',
      'Reusable forever applicator'
    ],
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=450&fit=crop'
  },
  {
    id: 'prod-refill-duo',
    name: 'Sircho Stamp Refill Duo Pack',
    subtitleId: '2 Cartridge Refill Sabut Kelapa & Daun Sirih',
    subtitleEn: '2 Coconut Coir & Betel Leaf Cartridge Refills',
    price: 36000,
    originalPrice: 45000,
    badgeId: 'Hemat Plastik',
    badgeEn: 'Plastic Saver',
    rating: 4.8,
    reviews: 980,
    featuresId: [
      'Setara 2 botol pembersih konvensional (96g plastik dicegah)',
      'Aman untuk bakteri pengurai septic tank',
      'Bahan abrasif mikro sabut kelapa lembut',
      'Cukup untuk pemakaian 2 bulan rumah tangga'
    ],
    featuresEn: [
      'Replaces 2 conventional cleaner bottles (96g plastic saved)',
      'Safe for septic tank microbiome',
      'Gentle coconut coir micro-abrasive',
      'Lasts 2 months for average household'
    ],
    img: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=450&fit=crop'
  },
  {
    id: 'prod-family-bulk',
    name: 'Sircho Eco Family 4-Pack Bundle',
    subtitleId: 'Paket Refill Komplit 4 Cartridge + Bonus Coir Sponge',
    subtitleEn: 'Complete 4-Cartridge Refill + Bonus Coir Sponge',
    price: 68000,
    originalPrice: 90000,
    badgeId: 'Best Value',
    badgeEn: 'Best Value',
    rating: 5.0,
    reviews: 2150,
    featuresId: [
      'Mencegah 192g limbah botol plastik sekali pakai',
      'Mendukung petani sabut kelapa lokal',
      'Bonus 1x Spons Kloset Sabut Kelapa Nuvora',
      'Gratis 200 Green Points langsung'
    ],
    featuresEn: [
      'Prevents 192g single-use plastic bottle waste',
      'Supports local coconut coir farming partners',
      'Bonus 1x Nuvora Coconut Coir Toilet Sponge',
      'Instant 200 Green Points included'
    ],
    img: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&h=450&fit=crop'
  }
];

// Edu-Hub Content
export const eduArticles = [
  {
    id: 'edu-typhoid',
    tag: 'Sanitasi Kesehatan',
    titleId: 'Bahaya Laten Demam Tifoid: Mengapa Sanitasi Toilet Adalah Garis Pertahanan Utama',
    titleEn: 'The Silent Risk of Typhoid Fever: Why Toilet Sanitation is First Line of Defense',
    excerptId: 'Salmonella Typhi ditularkan melalui rute fekal-oral yang sering bersumber dari aerosol siraman toilet dan biofilm kloset yang tidak steril.',
    excerptEn: 'Salmonella Typhi transmits via fecal-oral routes frequently originating from toilet flush aerosols and unsterile bowl biofilms.',
    contentId: `Demam tifoid (tifus) merupakan infeksi bakteri akut yang disebabkan oleh Salmonella enterica serovar Typhi. Menurut data kesehatan global dan Kemenkes RI, sanitasi buruk dan toilet yang tidak terawat menjadi jalur penyebaran mikroba patogen terbesar. 

Saat kloset disiram tanpa desinfeksi kontinyu, terjadi efek aerosol mikro yang menerbangkan bakteri patogen hingga radius 1.5 meter ke udara dan hinggap di gagang pintu, dinding, maupun sikat gigi di kamar mandi. 

Sircho Stamp oleh Nuvora Co bekerja dengan melepaskan mikro-film antibakteri setiap kali tombol flush ditekan. Lapisan hidrofilik alami dari ekstrak daun sirih melapisi permukaan keramik, menghentikan adhesi koloni bakteri sebelum sempat berkembang biak, serta mensterilkan air genangan kloset secara aman tanpa uap klorin berbahaya.`,
    contentEn: `Typhoid fever is an acute systemic infection caused by Salmonella enterica serovar Typhi. Poor toilet sanitation and biofilmed fixtures serve as the leading vector for waterborne and fecal-oral contagion.

When an untreated toilet is flushed, turbulent water releases micro-aerosol plumes carrying viable pathogens up to 1.5 meters into ambient air, contaminating nearby surfaces and toiletries.

Sircho Stamp by Nuvora Co releases an active antibacterial hydrophilic film across the bowl with every flush. The natural betel leaf phenolics neutralize bacterial adhesion sites, keeping the standing water sterile without emitting toxic chlorine vapors.`,
    readTime: '4 menit baca',
    sdgTag: 'SDG 3 & 6',
    icon: 'ShieldAlert'
  },
  {
    id: 'edu-betel',
    tag: 'Fitokimia Alam',
    titleId: 'Kekuatan Antimikroba Daun Sirih (Piper betle L.): Alternatif Alami Pengganti Klorin',
    titleEn: 'Antimicrobial Power of Betel Leaf (Piper betle L.): Natural Alternative to Harsh Chlorine',
    excerptId: 'Kaya akan kavikol, kavibetol, dan eugenol yang merusak dinding sel bakteri patogen tanpa membunuh bakteri anaerobik pengurai septik tank.',
    excerptEn: 'Rich in chavicol, chavibetol, and eugenol which disrupt bacterial cell walls without destroying beneficial septic tank microflora.',
    contentId: `Pembersih toilet konvensional sering menggunakan asam klorida (HCl) pekat atau natrium hipoklorit (bleach). Selain merusak enamel kloset dan menghasilkan uap klorin yang mengiritasi saluran pernapasan, bahan kimia ini membunuh bakteri pengurai di dalam tangki septik (septic tank), mengakibatkan septic tank cepat penuh dan mencemari air tanah pemukiman.

Ekstrak Daun Sirih (Piper betle L.) yang diformulasikan dalam Sircho Stamp mengandung senyawa aktif fenolik golongan kavikol dan hidroksikavikol. Penelitian mikrobiologi membuktikan daya hambatnya terhadap bakteri gram negatif (seperti Salmonella Typhi dan E. coli) hingga 99.8%. 

Hebatnya, saat dibilas ke dalam tangki septik, konsentrasi alaminya terurai secara hayati (biodegradable) dalam 48 jam, menjaga keseimbangan mikrobioma tanah dan air limbah domestik tetap lestari.`,
    contentEn: `Conventional chemical cleaners rely heavily on hydrochloric acid and sodium hypochlorite bleach. Beyond corroding enamel and releasing corrosive fumes, they wipe out the beneficial anaerobic microbiome in septic tanks, triggering rapid tank overflows and contaminating groundwater.

Piper betle L. extract formulated into Sircho Stamp features chavicol and hydroxychavicol phenolics proven to deliver up to 99.8% inhibition of Salmonella Typhi and E. coli.

Crucially, upon entering drainage, the organic actives biodegrade completely within 48 hours, safeguarding soil microbiota and downstream domestic waterways.`,
    readTime: '3 menit baca',
    sdgTag: 'SDG 6 & 12',
    icon: 'Leaf'
  },
  {
    id: 'edu-coir',
    tag: 'Sirkular Biomassa',
    titleId: 'Sabut Kelapa: Mengubah Limbah Perkebunan Menjadi Agen Pembersih Abrasif Lembut',
    titleEn: 'Coconut Coir: Transforming Plantation Waste into Gentle Abrasive Cleaning Agent',
    excerptId: 'Pemanfaatan serat biomassa kelapa lokal mencegah pembakaran limbah pertanian dan menyediakan tekstur scouring alami bebas mikroplastik.',
    excerptEn: 'Utilizing local coconut fiber biomass prevents agricultural burning and provides microplastic-free natural scouring texture.',
    contentId: `Indonesia merupakan salah satu produsen kelapa terbesar di dunia, namun jutaan ton sabut kelapa (coconut coir) sering dibuang begitu saja atau dibakar di ladang, memicu emisi karbon dan polusi udara partikulat.

Nuvora Co mengolah limbah sabut kelapa menjadi bubuk selulosa mikro-serat yang diintegrasikan ke dalam matriks gel Sircho Stamp. Butiran halus biomassa ini bekerja sebagai agen abrasif mekanis ramah lingkungan yang mampu mengangkat kerak air dan noda kalsium tanpa menggores porselen kloset.

Inisiatif sirkular ini memberdayakan kelompok tani kelapa lokal di Jawa dan Sumatra, sekaligus menghentikan penggunaan manik-manik mikroplastik sintetis yang selama ini mencemari ekosistem laut.`,
    contentEn: `Indonesia is a global coconut leader, yet vast quantities of fibrous coconut coir agricultural residue are routinely dumped or open-burned, contributing to carbon emissions and smog.

Nuvora Co converts agricultural coir waste into fine micro-cellulose scrubbers suspended within the Sircho Stamp matrix. These organic micro-particles provide gentle, scratch-free mechanical stain removal without synthetic plastic microbeads.

This circular value chain directly empowers local coconut farming communities across Java and Sumatra while preventing marine microplastic pollution.`,
    readTime: '3 menit baca',
    sdgTag: 'SDG 8 & 12',
    icon: 'Recycle'
  }
];

// Interactive Quiz Questions
export const sanitationQuiz = [
  {
    id: 1,
    questionId: 'Bakteri penyebab utama penyakit demam tifoid yang kerap tersebar melalui sanitasi buruk adalah...',
    questionEn: 'The primary bacteria causing typhoid fever frequently transmitted via poor sanitation is...',
    options: [
      'Salmonella Typhi',
      'Lactobacillus bulgaricus',
      'Saccharomyces cerevisiae',
      'Spirulina platensis'
    ],
    correctIndex: 0,
    explanationId: 'Tepat! Salmonella Typhi adalah bakteri patogen yang menginfeksi saluran pencernaan manusia melalui transmisi fekal-oral dari sanitasi toilet yang tidak higienis.',
    explanationEn: 'Correct! Salmonella Typhi is the pathogen infecting the digestive tract via fecal-oral transmission from unhygienic toilets.'
  },
  {
    id: 2,
    questionId: 'Mengapa pembersih berbahan klorin pekat dan asam keras buruk untuk tangki septik (septic tank)?',
    questionEn: 'Why are harsh chlorine bleach and strong acids harmful to septic tanks?',
    options: [
      'Membuat air kloset menjadi terlalu wangi',
      'Membunuh bakteri baik pengurai feses di dalam septic tank sehingga cepat mampet dan meluap',
      'Membuat warna porselen kloset menjadi emas berkilau',
      'Mempercepat pertumbuhan sabut kelapa alami'
    ],
    correctIndex: 1,
    explanationId: 'Klorin dan asam kuat mematikan mikroba anaerob pengurai limbah, sehingga feses tidak terurai dan tangki septik cepat penuh serta mencemari air tanah.',
    explanationEn: 'Chlorine and strong acids destroy anaerobic digestion microbes, halting waste breakdown, causing septic overflow and groundwater contamination.'
  },
  {
    id: 3,
    questionId: 'Senyawa aktif utama dalam daun sirih (Piper betle L.) yang berfungsi sebagai agen antibakteri alami adalah...',
    questionEn: 'The primary active phytochemical compound in betel leaf functioning as natural antibacterial is...',
    options: [
      'Kavikol (Chavicol) & Hidroksikavikol',
      'Monosodium Glutamat (MSG)',
      'Polietilena Tereftalat (PET)',
      'Asam Sulfat Anorganik'
    ],
    correctIndex: 0,
    explanationId: 'Kavikol dan hidroksikavikol adalah fenol alami daun sirih dengan daya antibakteri 5x lebih kuat daripada fenol standar namun ramah lingkungan.',
    explanationEn: 'Chavicol and hydroxychavicol are natural betel leaf phenols with 5x stronger antibacterial potency than standard phenol, yet biodegradable.'
  }
];

// SDG Alignment
export const sdgData = [
  {
    number: '3',
    title: 'Good Health & Well-being',
    titleId: 'Kehidupan Sehat dan Sejahtera',
    descId: 'Memutus rantai transmisi bakteri patogen seperti Salmonella Typhi melalui sanitasi toilet higienis tanpa gas beracun.',
    descEn: 'Breaking pathogen transmission chains like Salmonella Typhi via hygienic toilets without toxic chemical fumes.',
    color: '#4C9F38'
  },
  {
    number: '6',
    title: 'Clean Water & Sanitation',
    titleId: 'Air Bersih dan Sanitasi Layak',
    descId: 'Formula biodegradable bebas klorin yang menjaga mikroba pengurai tangki septik dan mencegah rembesan polutan ke air tanah.',
    descEn: 'Chlorine-free biodegradable formula protecting septic biome and preventing toxic pollutant seepage into groundwater.',
    color: '#26BDE2'
  },
  {
    number: '8',
    title: 'Decent Work & Economic Growth',
    titleId: 'Pekerjaan Layak & Pertumbuhan Ekonomi',
    descId: 'Pemberdayaan petani kelapa dan pekebun sirih lokal dengan menyerap limbah biomassa sabut kelapa bernilai tambah.',
    descEn: 'Empowering local coconut and betel farmers by upcycling agricultural coir biomass into high-value green products.',
    color: '#A21942'
  },
  {
    number: '12',
    title: 'Responsible Consumption & Production',
    titleId: 'Konsumsi dan Produksi Bertanggung Jawab',
    descId: 'Sistem cartridge refill yang mengeliminasi botol plastik tebal sekali pakai, mewujudkan ekonomi sirkular zero-waste.',
    descEn: 'Refill cartridge ecosystem eliminating thick single-use virgin plastic bottles, achieving circular zero-waste economy.',
    color: '#BF8B2E'
  }
];
