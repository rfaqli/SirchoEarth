import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { 
  langAtom, 
  currentPageAtom, 
  sirchoProducts, 
  userPointsAtom, 
  refillCountAtom 
} from '../data';
import { 
  ShoppingBag, 
  Check, 
  Star, 
  Plus, 
  Minus, 
  CreditCard, 
  Wallet, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Leaf, 
  Tag, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export function NityaShopSection() {
  const [lang] = useAtom(langAtom);
  const [, setCurrentPage] = useAtom(currentPageAtom);
  const [, setPoints] = useAtom(userPointsAtom);
  const [, setRefillCount] = useAtom(refillCountAtom);

  const [selectedProduct, setSelectedProduct] = useState(sirchoProducts[0]);
  const [quantity, setQuantity] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('ewallet');
  const [step, setStep] = useState<1 | 2>(1); // 1: catalog & checkout, 2: success

  const basePrice = selectedProduct.price * quantity;
  const discountAmount = discountApplied ? Math.round(basePrice * 0.2) : 0;
  const shippingFee = 0; // Free Eco shipping
  const totalPrice = basePrice - discountAmount + shippingFee;
  const pointsToEarn = quantity * 50;
  const plasticSavedGrams = quantity * 48;

  const handleApplyPromo = () => {
    if (promoCode.trim().length > 3) {
      setDiscountApplied(true);
    }
  };

  const handleCompleteOrder = () => {
    // Add bonus points and refills
    setPoints(prev => prev + pointsToEarn);
    setRefillCount(prev => prev + (quantity * (selectedProduct.id === 'prod-family-bulk' ? 4 : 2)));
    setStep(2);
  };

  if (step === 2) {
    return (
      <section className="page-section active flex-1 relative min-h-screen pt-24 pb-16 flex items-center justify-center px-4">
        <div className="glass-panel p-8 max-w-lg w-full text-center reveal-scale shadow-2xl border-2 border-emerald-400/50 bg-black/45">
          <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-300">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
            {lang === 'id' ? 'Pesanan Berhasil Dikonfirmasi!' : 'Order Successfully Confirmed!'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
            Terima Kasih, Sahabat Bumi!
          </h2>
          <p className="text-xs text-white/80 max-w-sm mx-auto mb-6 leading-relaxed">
            {lang === 'id' 
              ? `Pesanan ${selectedProduct.name} (${quantity}x) sedang disiapkan dengan kemasan ramah lingkungan non-plastik. Anda mendapatkan +${pointsToEarn} Green Points!` 
              : `Order for ${selectedProduct.name} (${quantity}x) is being packaged plastic-free. You earned +${pointsToEarn} Green Points!`}
          </p>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-left text-xs space-y-2 mb-6">
            <div className="flex justify-between">
              <span className="text-white/60">Nomor Pesanan:</span>
              <span className="font-mono font-bold text-[#C89B3B]">NVRA-ECO-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Plastik Sekali Pakai Dicegah:</span>
              <span className="font-bold text-emerald-300">+{plasticSavedGrams} Gram</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Green Points Dikreditkan:</span>
              <span className="font-bold text-[#C89B3B]">+{pointsToEarn} PTS</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => setCurrentPage('product')} 
              className="flex-1 glass-button py-3 rounded-xl font-bold text-xs"
            >
              {lang === 'id' ? 'Lihat di Eco-Tracker' : 'View in Eco-Tracker'}
            </button>
            <button 
              onClick={() => { setStep(1); setDiscountApplied(false); setPromoCode(''); }} 
              className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold text-xs border border-white/20"
            >
              {lang === 'id' ? 'Belanja Lagi' : 'Shop Again'}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section active flex-1 relative min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-10 reveal-scale">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C89B3B]/20 border border-[#C89B3B]/40 text-[#C89B3B] text-xs font-semibold mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Katalog Sircho Stamp & Refill' : 'Sircho Stamp & Refill Store'}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            {lang === 'id' ? 'Pilih Paket Refill Ramah Lingkungan' : 'Choose Your Eco Refill Bundle'}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {lang === 'id' 
              ? 'Aplikator sekali beli, isi ulang selamanya. Hemat biaya hingga 40% dibandingkan pembersih kimia konvensional dan bebas sampah plastik tebal.' 
              : 'Buy the applicator once, refill forever. Save up to 40% compared to harsh chemical cleaners with zero single-use plastic bottles.'}
          </p>
        </div>

        {/* Product Cards Selector Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sirchoProducts.map((prod) => {
            const isSelected = selectedProduct.id === prod.id;
            return (
              <div 
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`glass-panel p-6 rounded-3xl cursor-pointer transition-all card-hover flex flex-col justify-between border-2 ${
                  isSelected ? 'border-[#F9D342] bg-black/45 shadow-2xl scale-[1.02]' : 'border-white/20 hover:border-white/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F9D342]/20 text-[#F9D342] border border-[#F9D342]/40">
                      {lang === 'id' ? prod.badgeId : prod.badgeEn}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-amber-300 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                      <span>{prod.rating}</span>
                      <span className="text-white/40 text-[10px]">({prod.reviews})</span>
                    </div>
                  </div>

                  <div className="h-48 rounded-2xl overflow-hidden mb-4 bg-black/30 border border-white/10 relative flex items-center justify-center p-2">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-black/70 backdrop-blur-sm text-[10px] text-emerald-300 font-semibold flex items-center gap-1">
                      <Leaf className="w-3 h-3" /> Daun Sirih & Sabut Kelapa
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white mb-1">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-white/70 mb-4">
                    {lang === 'id' ? prod.subtitleId : prod.subtitleEn}
                  </p>

                  <ul className="space-y-1.5 text-xs text-white/80 mb-6">
                    {(lang === 'id' ? prod.featuresId : prod.featuresEn).map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-white/50 line-through block">
                      Rp {prod.originalPrice.toLocaleString('id-ID')}
                    </span>
                    <span className="font-serif text-xl font-bold text-white">
                      Rp {prod.price.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <button 
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                      isSelected ? 'bg-[#F9D342] text-black font-extrabold' : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {isSelected ? (lang === 'id' ? 'Terpilih' : 'Selected') : (lang === 'id' ? 'Pilih Paket' : 'Select')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Checkout & Summary Panel */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl reveal border-white/20">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Configuration & Payment Method */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  {lang === 'id' ? 'Konfigurasi Pembelian' : 'Order Configuration'}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                  {selectedProduct.name}
                </h3>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                <div>
                  <span className="text-xs font-bold text-white block">
                    {lang === 'id' ? 'Jumlah Paket (Quantity):' : 'Package Quantity:'}
                  </span>
                  <span className="text-[11px] text-emerald-300">
                    +{plasticSavedGrams}g plastik dicegah • +{pointsToEarn} Green Points
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center text-white text-base"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-base text-white w-6 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg glass-button flex items-center justify-center text-white text-base"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Promo Code / Voucher input (from Green Rewards) */}
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#C89B3B]" />
                  {lang === 'id' ? 'Punya Voucher Diskon dari Green Rewards?' : 'Have a Green Rewards Voucher Code?'}
                </label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Contoh: ECO-VOUCHER-2026"
                    className="flex-1 glass-input px-4 py-2.5 rounded-xl text-xs uppercase text-white outline-none focus:border-[#C89B3B]"
                  />
                  <button 
                    onClick={handleApplyPromo}
                    className="px-5 py-2.5 glass-button text-xs font-bold rounded-xl whitespace-nowrap"
                  >
                    {lang === 'id' ? 'Terapkan' : 'Apply'}
                  </button>
                </div>
                {discountApplied && (
                  <p className="text-[11px] text-emerald-300 font-semibold mt-1.5 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Voucher Diskon 20% Berhasil Diterapkan!
                  </p>
                )}
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-medium text-white/80 mb-2">
                  {lang === 'id' ? 'Pilih Metode Pembayaran:' : 'Select Payment Method:'}
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  <label className={`p-3.5 rounded-2xl border cursor-pointer flex flex-col items-center text-center transition-all ${paymentMethod === 'ewallet' ? 'bg-[#226b3e]/40 border-emerald-400 text-white' : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'}`}>
                    <input type="radio" name="pay" value="ewallet" checked={paymentMethod === 'ewallet'} onChange={() => setPaymentMethod('ewallet')} className="hidden" />
                    <Wallet className="w-5 h-5 text-emerald-400 mb-1" />
                    <span className="text-xs font-bold">QRIS / E-Wallet</span>
                    <span className="text-[10px] text-white/50">GoPay, OVO, ShopeePay</span>
                  </label>

                  <label className={`p-3.5 rounded-2xl border cursor-pointer flex flex-col items-center text-center transition-all ${paymentMethod === 'transfer' ? 'bg-[#226b3e]/40 border-emerald-400 text-white' : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'}`}>
                    <input type="radio" name="pay" value="transfer" checked={paymentMethod === 'transfer'} onChange={() => setPaymentMethod('transfer')} className="hidden" />
                    <Building2 className="w-5 h-5 text-amber-300 mb-1" />
                    <span className="text-xs font-bold">Transfer Bank</span>
                    <span className="text-[10px] text-white/50">BCA, Mandiri, BRI, BNI</span>
                  </label>

                  <label className={`p-3.5 rounded-2xl border cursor-pointer flex flex-col items-center text-center transition-all ${paymentMethod === 'card' ? 'bg-[#226b3e]/40 border-emerald-400 text-white' : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'}`}>
                    <input type="radio" name="pay" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="hidden" />
                    <CreditCard className="w-5 h-5 text-cyan-300 mb-1" />
                    <span className="text-xs font-bold">Kartu Debit / Kredit</span>
                    <span className="text-[10px] text-white/50">Visa, Mastercard</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right: Order Summary Sticky Card */}
            <div className="lg:col-span-5 glass-card p-6 rounded-3xl border-white/20 sticky top-24">
              <h4 className="font-serif text-lg font-bold text-white mb-4 border-b border-white/10 pb-3">
                {lang === 'id' ? 'Ringkasan Pesanan' : 'Order Summary'}
              </h4>

              <div className="space-y-3 text-xs mb-6">
                <div className="flex justify-between text-white/80">
                  <span>{selectedProduct.name} x {quantity}</span>
                  <span className="font-bold text-white">Rp {basePrice.toLocaleString('id-ID')}</span>
                </div>

                {discountApplied && (
                  <div className="flex justify-between text-emerald-300 font-semibold">
                    <span>Diskon Voucher 20%</span>
                    <span>- Rp {discountAmount.toLocaleString('id-ID')}</span>
                  </div>
                )}

                <div className="flex justify-between text-white/80">
                  <span>Pengiriman Ramah Lingkungan</span>
                  <span className="text-emerald-400 font-bold">GRATIS</span>
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-white">Total Pembayaran</span>
                  <span className="font-serif text-2xl font-black text-[#C89B3B]">
                    Rp {totalPrice.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              {/* Eco Guarantee Callout */}
              <div className="p-3.5 rounded-xl bg-black/30 border border-emerald-500/30 text-[11px] text-white/80 space-y-1 mb-6">
                <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Garansi Formula Higienis & Eco</span>
                </div>
                <p>100% Bebas Klorin, aman bagi septik tank, dan dikemas tanpa selotip plastik sintetis.</p>
              </div>

              <button 
                onClick={handleCompleteOrder}
                className="w-full glass-button py-3.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer"
              >
                <span>{lang === 'id' ? 'Konfirmasi & Bayar Sekarang' : 'Confirm & Pay Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
