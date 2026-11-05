import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { 
  langAtom, 
  eduArticles, 
  sanitationQuiz, 
  userPointsAtom, 
  quizCompletedAtom 
} from '../data';
import { 
  BookOpen, 
  ShieldAlert, 
  Leaf, 
  Recycle, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  Award, 
  ArrowRight, 
  Sparkles,
  ChevronDown
} from 'lucide-react';

export function PertanianBeluntasSection() {
  const [lang] = useAtom(langAtom);
  const [points, setPoints] = useAtom(userPointsAtom);
  const [quizCompleted, setQuizCompleted] = useAtom(quizCompletedAtom);

  const [selectedArticle, setSelectedArticle] = useState<string>(eduArticles[0].id);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizFeedback, setQuizFeedback] = useState<Record<number, boolean>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const activeArt = eduArticles.find(a => a.id === selectedArticle) || eduArticles[0];

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleQuizSubmit = () => {
    const feedback: Record<number, boolean> = {};
    let correctCount = 0;

    sanitationQuiz.forEach(q => {
      const isCorrect = quizAnswers[q.id] === q.correctIndex;
      feedback[q.id] = isCorrect;
      if (isCorrect) correctCount++;
    });

    setQuizFeedback(feedback);
    setQuizSubmitted(true);

    if (!quizCompleted) {
      setPoints(prev => prev + 25);
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizFeedback({});
    setQuizSubmitted(false);
  };

  return (
    <section className="page-section active flex-1 relative min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 reveal-scale">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Fitur Utama 3 • Edu-Hub Preview' : 'Core Feature 3 • Edu-Hub Preview'}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            {lang === 'id' ? 'Sains Sanitasi & Ekologi Sircho' : 'Sanitation Science & Sircho Ecology'}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {lang === 'id' 
              ? 'Pelajari bahaya demam tifoid akibat sanitasi toilet, keunggulan ilmiah ekstrak daun sirih, dan sirkularitas sabut kelapa yang menjaga ekosistem air bersih.' 
              : 'Discover the silent risks of typhoid fever, the proven science of betel leaf antibacterial power, and how upcycled coconut coir nurtures clean water.'}
          </p>
        </div>

        {/* 3 Core Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Typhoid Fever Prevention */}
          <div 
            onClick={() => setSelectedArticle('edu-typhoid')}
            className={`glass-panel p-6 rounded-3xl cursor-pointer transition-all card-hover border ${selectedArticle === 'edu-typhoid' ? 'border-cyan-400 bg-cyan-950/40 shadow-xl scale-[1.02]' : 'border-white/15 hover:border-cyan-400/50'}`}
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
              SDG 3: Good Health
            </span>
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              {lang === 'id' ? 'Pencegahan Demam Tifoid' : 'Typhoid Fever Prevention'}
            </h3>
            <p className="text-xs text-white/75 leading-relaxed">
              {lang === 'id' 
                ? 'Bagaimana mikroba Salmonella Typhi menyebar via aerosol siraman kloset dan cara memutus rantai infeksinya dengan film pelindung higienis.' 
                : 'How Salmonella Typhi spreads through toilet flush aerosols and how hygienic biofilm barriers break the contagion cycle.'}
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cyan-300 font-semibold">
              <span>{lang === 'id' ? 'Baca Ulasan Sains' : 'Read Science Article'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Betel Leaf Active Phytochemicals */}
          <div 
            onClick={() => setSelectedArticle('edu-betel')}
            className={`glass-panel p-6 rounded-3xl cursor-pointer transition-all card-hover border ${selectedArticle === 'edu-betel' ? 'border-emerald-400 bg-emerald-950/40 shadow-xl scale-[1.02]' : 'border-white/15 hover:border-emerald-400/50'}`}
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              SDG 6: Clean Water
            </span>
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              {lang === 'id' ? 'Keunggulan Ekstrak Daun Sirih' : 'Power of Betel Leaf Extract'}
            </h3>
            <p className="text-xs text-white/75 leading-relaxed">
              {lang === 'id' 
                ? 'Senyawa fenol kavikol dan eugenol alami berdaya antibakteri 5x lebih ampuh dari fenol standar tanpa merusak bakteri pengurai septic tank.' 
                : 'Natural chavicol & eugenol phenolic compounds provide 5x antibacterial efficacy without hurting beneficial septic tank digesters.'}
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-300 font-semibold">
              <span>{lang === 'id' ? 'Baca Ulasan Sains' : 'Read Science Article'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Coconut Coir Agro-Waste Circularity */}
          <div 
            onClick={() => setSelectedArticle('edu-coir')}
            className={`glass-panel p-6 rounded-3xl cursor-pointer transition-all card-hover border ${selectedArticle === 'edu-coir' ? 'border-[#C89B3B] bg-amber-950/30 shadow-xl scale-[1.02]' : 'border-white/15 hover:border-[#C89B3B]/60'}`}
          >
            <div className="w-12 h-12 rounded-2xl bg-[#C89B3B]/20 border border-[#C89B3B]/40 flex items-center justify-center text-[#C89B3B] mb-4">
              <Recycle className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold text-[#C89B3B] uppercase tracking-wider block mb-1">
              SDG 8 & 12: Circular Agro
            </span>
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              {lang === 'id' ? 'Biomassa Sabut Kelapa' : 'Upcycled Coconut Coir'}
            </h3>
            <p className="text-xs text-white/75 leading-relaxed">
              {lang === 'id' 
                ? 'Mengolah jutaan ton limbah sabut kelapa petani lokal menjadi scrub mikro-abrasif biodegradeable anti-gores pengganti mikroplastik sintetis.' 
                : 'Converting tons of agricultural coconut coir into scratch-free, biodegradable micro-scrubbers replacing synthetic microplastics.'}
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#C89B3B] font-semibold">
              <span>{lang === 'id' ? 'Baca Ulasan Sains' : 'Read Science Article'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

        {/* Selected Article In-Depth Reading Panel */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl mb-12 shadow-2xl reveal relative overflow-hidden border-white/20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#C89B3B]/20 border border-[#C89B3B]/40 text-[#C89B3B]">
                  {activeArt.tag}
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/10 text-white/80">
                  {activeArt.sdgTag}
                </span>
                <span className="text-xs text-white/50 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {activeArt.readTime}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                {lang === 'id' ? activeArt.titleId : activeArt.titleEn}
              </h3>
            </div>
          </div>

          <div className="text-sm md:text-base text-white/85 leading-relaxed whitespace-pre-line space-y-4">
            {lang === 'id' ? activeArt.contentId : activeArt.contentEn}
          </div>

          {/* Key Takeaway Banner */}
          <div className="mt-8 p-5 rounded-2xl bg-black/40 border border-emerald-500/30 flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-emerald-300 mb-1">
                {lang === 'id' ? 'Komitmen Inovasi Nuvora Co' : 'Nuvora Co Innovation Pledge'}
              </h4>
              <p className="text-xs text-white/80 leading-relaxed">
                {lang === 'id' 
                  ? 'Kami tidak sekadar menciptakan produk pembersih, melainkan membangun sistem sirkular terpadu: memutus rantai demam tifoid, memberdayakan komunitas petani lokal, dan mengeliminasi botol plastik sekali pakai selamanya.' 
                  : 'We do not simply create a toilet cleaner; we build a restorative circular ecosystem: halting typhoid transmission, empowering local farming communities, and eliminating single-use plastic bottles forever.'}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Sanitation Quiz Section */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl reveal border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                {lang === 'id' ? 'Kuis Interaktif Sanitasi & Ekologi' : 'Interactive Sanitation Quiz'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                {lang === 'id' ? 'Uji Wawasan Sanitasi & Raih +25 Green Points' : 'Test Sanitation IQ & Earn +25 Green Points'}
              </h3>
            </div>

            <div className="px-4 py-2 rounded-2xl bg-[#C89B3B]/20 border border-[#C89B3B]/40 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#C89B3B]" />
              <span className="text-xs font-bold text-white">
                {quizCompleted ? (lang === 'id' ? 'Telah Dikerjakan (+25 PTS)' : 'Completed (+25 PTS)') : '+25 Green Points'}
              </span>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {sanitationQuiz.map((q, idx) => {
              const selectedOpt = quizAnswers[q.id];
              const isSubmitted = quizSubmitted;
              const isCorrect = quizFeedback[q.id];

              return (
                <div key={q.id} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="font-serif text-base font-bold text-white">
                      {lang === 'id' ? q.questionId : q.questionEn}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="grid sm:grid-cols-2 gap-3 pl-10">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      let btnStyle = 'bg-black/30 border-white/10 text-white/80 hover:bg-white/10';

                      if (isSelected) {
                        btnStyle = 'bg-emerald-600/30 border-emerald-400 text-white font-semibold';
                      }

                      if (isSubmitted) {
                        if (optIdx === q.correctIndex) {
                          btnStyle = 'bg-emerald-600/40 border-emerald-400 text-emerald-200 font-bold';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'bg-red-900/40 border-red-400 text-red-200';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={isSubmitted}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isSubmitted && optIdx === q.correctIndex && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Explanation */}
                  {isSubmitted && (
                    <div className={`mt-4 ml-10 p-3.5 rounded-xl text-xs border ${isCorrect ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' : 'bg-red-950/40 border-red-500/40 text-amber-200'}`}>
                      <p className="font-semibold mb-1">
                        {isCorrect ? '✅ Jawaban Anda Tepat!' : 'ℹ️ Penjelasan Edukatif:'}
                      </p>
                      <p>{lang === 'id' ? q.explanationId : q.explanationEn}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quiz Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-3 pt-6 border-t border-white/10">
            {!quizSubmitted ? (
              <button
                onClick={handleQuizSubmit}
                disabled={Object.keys(quizAnswers).length < sanitationQuiz.length}
                className="w-full sm:w-auto glass-button px-8 py-3 rounded-xl font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg"
              >
                {lang === 'id' ? 'Kirim Jawaban & Klaim Poin' : 'Submit Answers & Claim Points'}
              </button>
            ) : (
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="text-xs text-emerald-400 font-semibold">
                  🎉 {lang === 'id' ? 'Terima kasih telah belajar bersama Sircho!' : 'Thank you for learning with Sircho!'}
                </span>
                <button
                  onClick={handleResetQuiz}
                  className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20"
                >
                  {lang === 'id' ? 'Ulangi Kuis' : 'Try Again'}
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
