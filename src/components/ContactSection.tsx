import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { langAtom } from '../data';
import { Mail, MessageCircle, MapPin, Send, PhoneCall, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

export function ContactSection() {
  const [lang] = useAtom(langAtom);
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('general');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFullName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <section className="page-section active flex-1 relative min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12 reveal-scale">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-[#C89B3B]" />
            <span>{lang === 'id' ? 'Layanan & Kemitraan Nuvora Co' : 'Nuvora Co Service & Partnerships'}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            {lang === 'id' ? 'Hubungi Tim Nuvora Co' : 'Connect with Nuvora Co'}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {lang === 'id' 
              ? 'Konsultasi sanitasi ramah lingkungan, peluang kemitraan distributor refill, atau pertanyaan seputar produk Sircho Stamp.' 
              : 'Consult on eco-sanitation solutions, explore refill distribution partnerships, or inquire about Sircho Stamp products.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="glass-panel p-8 reveal-left shadow-2xl border-white/20 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              {lang === 'id' ? 'Informasi Kontak & Kantor' : 'Contact & Headquarters'}
            </h3>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === 'id' 
                ? 'Kami siap melayani kebutuhan sanitasi rumah tangga, hotel ramah lingkungan, gedung perkantoran, dan komunitas penggerak SDGs.' 
                : 'Ready to assist households, eco-hotels, corporate offices, and community sanitation pioneers.'}
            </p>

            <div className="space-y-4 pt-2">
              
              <div className="flex items-center gap-4 group p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium">Email Marketing & B2B</p>
                  <a href="mailto:b2b@nuvora.co" className="text-sm font-bold text-white hover:text-[#F9D342] transition-colors">b2b@nuvora.co / hello@nuvora.co</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium">WhatsApp Business (Fast Response)</p>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-[#25D366] transition-colors">+62 812-3456-7890</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#F9D342]/20 flex items-center justify-center text-[#F9D342] flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium">{lang === 'id' ? 'Sentra Inovasi Nuvora' : 'Nuvora Innovation Hub'}</p>
                  <p className="text-sm font-bold text-white">Nuvora Eco Hub, Surabaya, Jawa Timur, Indonesia</p>
                </div>
              </div>

            </div>

            {/* Marketplace Official Stores */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-[11px] font-bold text-white/70 block mb-2">Toko Resmi Marketplace:</span>
              <div className="flex gap-2">
                <a 
                  href="https://tokopedia.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-[#42b549]/20 text-[#42b549] border border-[#42b549]/40 font-bold text-xs text-center hover:bg-[#42b549]/30 transition-colors"
                >
                  Tokopedia Official
                </a>
                <a 
                  href="https://shopee.co.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-xl bg-[#ee4d2d]/20 text-[#ee4d2d] border border-[#ee4d2d]/40 font-bold text-xs text-center hover:bg-[#ee4d2d]/30 transition-colors"
                >
                  Shopee Mall
                </a>
              </div>
            </div>

            {/* Quick Partnership Banner */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-3">
              <Building className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-bold text-xs text-emerald-300">
                  {lang === 'id' ? 'Kemitraan Hotel & Bisnis (B2B)' : 'Hotel & Corporate B2B Refill'}
                </h5>
                <p className="text-[11px] text-white/70 mt-0.5">
                  {lang === 'id' 
                    ? 'Tingkatkan rating ESG hotel atau gedung Anda dengan program pengadaan Sircho Stamp Bulk Refill bebas botol plastik.' 
                    : 'Boost your facility ESG score with plastic-free bulk refill supplies for commercial properties.'}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Message Form */}
          <div className="glass-panel p-8 reveal-right shadow-2xl border-white/20">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              {lang === 'id' ? 'Kirimkan Pesan Anda' : 'Send a Message'}
            </h3>
            <p className="text-xs text-white/70 mb-6">
              {lang === 'id' ? 'Tim spesialis sanitasi dan kemitraan kami akan merespons dalam 1x24 jam.' : 'Our sanitation specialists will respond within 24 hours.'}
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3 animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-white">
                  {lang === 'id' ? 'Pesan Berhasil Terkirim!' : 'Message Sent Successfully!'}
                </h4>
                <p className="text-xs text-white/80">
                  {lang === 'id' 
                    ? 'Terima kasih telah menghubungi Nuvora Co. Perwakilan kami akan segera menghubungi Anda melalui email atau WhatsApp.' 
                    : 'Thank you for contacting Nuvora Co. Our representative will contact you via email or WhatsApp shortly.'}
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl text-xs font-bold glass-button"
                >
                  {lang === 'id' ? 'Kirim Pesan Lain' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    {lang === 'id' ? 'Nama Lengkap / Instansi' : 'Full Name / Organization'}
                  </label>
                  <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required 
                    placeholder="Contoh: Budi Pratama / Green Villa Bali" 
                    className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm text-white outline-none focus:border-[#C89B3B]" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    Email Kontak
                  </label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    placeholder="nama@email.com" 
                    className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm text-white outline-none focus:border-[#C89B3B]" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    {lang === 'id' ? 'Topik Pesan' : 'Subject'}
                  </label>
                  <select 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm text-white outline-none focus:border-[#C89B3B] appearance-none"
                  >
                    <option value="general" className="bg-[#091a10] text-white">Pertanyaan Produk Sircho Stamp</option>
                    <option value="distributor" className="bg-[#091a10] text-white">Keagenan & Distributor Refill</option>
                    <option value="hotel" className="bg-[#091a10] text-white">Pengadaan Hotel / Korporat (B2B)</option>
                    <option value="sdg" className="bg-[#091a10] text-white">Kolaborasi Komunitas SDGs & Lingkungan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    {lang === 'id' ? 'Pesan / Kebutuhan Anda' : 'Your Message'}
                  </label>
                  <textarea 
                    rows={4} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder={lang === 'id' ? 'Tuliskan detail pertanyaan atau rencana kemitraan Anda di sini...' : 'Write your inquiry or partnership plan here...'} 
                    className="w-full glass-input px-4 py-3 rounded-xl text-xs sm:text-sm text-white outline-none focus:border-[#C89B3B] resize-none" 
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full glass-button font-bold rounded-2xl py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'id' ? 'Kirim Pesan ke Nuvora Co' : 'Send Message to Nuvora Co'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
