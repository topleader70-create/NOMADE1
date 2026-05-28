/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  TrendingUp, 
  ArrowRight, 
  Play, 
  Mail, 
  Globe, 
  BadgeCheck, 
  Bitcoin, 
  Briefcase, 
  PiggyBank,
  PlayCircle
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 border-b border-slate-200/50 bg-white/75 backdrop-blur-lg shadow-sm">
        <div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary-container transition-all duration-300">
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                alt="Rich-som Logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjmk0yFGFtCswVgzbDs0-TH2nYJPLkcrpqjg64npvD9EXjZMTZ6yWln8rROp9r57hqK2-2W-vLbWbylRqmYhx00uNgIbOTOM8iLyrHTk8CDiMuvzOVCZfse4521z6EILIyXvKrAguivADE1DYHG-j0yc8csAx53Y93IYPjBzi53wlRg21Py89blQpVrbfRdJcYG53ZGNePwe3cOC4ZM7Zo2PH8zxX0VnPUrAX9wQbvl2u6PRp3uYMAHqwDXku--yPdvA1UNPogyXk" 
              />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-primary-container via-primary to-amber-500 bg-clip-text text-transparent tracking-tight">리치솜</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#" className="text-primary-container font-black border-b-2 border-primary-container pb-1 text-lg">홈</a>
            <a href="#" className="text-slate-600 font-semibold hover:text-primary-container transition-colors text-lg relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary-container after:transition-all after:duration-300">머니레터</a>
            <a href="#" className="text-slate-600 font-semibold hover:text-primary-container transition-colors text-lg relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary-container after:transition-all after:duration-300">블로그</a>
            <a href="#" className="text-slate-600 font-semibold hover:text-primary-container transition-colors text-lg relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary-container after:transition-all after:duration-300">유튜브</a>
            <a href="#" className="text-slate-600 font-semibold hover:text-primary-container transition-colors text-lg relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary-container after:transition-all after:duration-300">리치솜 소개</a>
          </nav>
          
          <button className="bg-gradient-to-r from-primary to-primary-container text-white px-6 py-2.5 rounded-full font-bold hover:opacity-95 hover:shadow-md hover:shadow-primary/20 active:scale-95 transition-all shadow-sm">
            구독하기
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-50/40 via-white to-amber-50/30 overflow-hidden">
          {/* Decorative glowing circles */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-200/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-28 flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8 z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-fixed rounded-full text-on-primary-fixed font-bold text-sm shadow-sm shadow-amber-500/10 border border-amber-300/20">
                <BadgeCheck className="w-4 h-4 text-amber-700" />
                <span>20,340명이 매주 읽고 있어요</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                리치솜과 함께하는 <br/>
                <span className="bg-gradient-to-r from-primary-container via-purple-600 to-amber-500 bg-clip-text text-transparent">경제이야기</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-medium">
                복잡한 금융 시장의 흐름을 리치솜이 한눈에 정리해 드립니다. <br />
                직장인을 위한 맞춤형 경제 인사이트를 매일 아침 메일함으로 배달해요.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-2xl font-black text-xl shadow-xl shadow-primary/25 hover:from-primary-container hover:to-indigo-500 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                  무료 뉴스레터 구독하기
                </button>
                <button className="border-2 border-slate-300 bg-white/50 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold text-xl hover:bg-primary-fixed/20 hover:border-primary-container/30 hover:text-primary-container active:scale-95 transition-all duration-300">
                  지난 레터 보기
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative w-full"
            >
              <div className="relative w-full aspect-square max-w-[520px] mx-auto">
                <div className="absolute inset-0 bg-primary-container/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative rounded-[48px] overflow-hidden border-8 border-white shadow-2xl z-10">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Rich-som Mascot"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBskDD0MdiiCoiONczr8KRROEf1HT73clTgqTJDUaMHpUWKz08lxT_Y9agWx4nMLjG1-84PUdM3UalMOwameT5RbYSU5l4ETrwWihvw-Qpdx0E8c9-PBJ1r0Iq1UlJnEeFSaFaZKLzY9nm2xb_DGb5Vb3jnjTA1c7A9bghjiVr8PtcKYc-tno5sUAjFV5d7QPFrKZSgZMhNo_t3Z_XGBiyew02xKLprI5iiGIL17qmsd8K22ihwyqF_zSJmyauM1QObQRe2SiqXcHg" 
                  />
                </div>
                
                {/* Floating Index Card */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-8 -left-8 md:-left-12 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-5 z-20 max-w-[260px]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm font-medium">이번 주 경제 지수</p>
                    <p className="font-bold text-2xl text-slate-900">+12.5% 상승</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bento Insights Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">최신 경제 인사이트</h2>
              <p className="text-slate-600 text-lg font-medium">리치솜이 선별한 오늘의 핵심 경제 뉴스를 만나보세요.</p>
            </div>
            <button className="text-primary-container font-black flex items-center gap-2 group text-lg hover:text-primary transition-colors">
              전체보기 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "비트코인 ETF 승인 이후의 변화",
                desc: "가상자산 시장이 제도권으로 편입되면서 기관 투자자들의 자금 유입이 가속화되고 있습니다.",
                icon: <Bitcoin className="w-6 h-6 text-amber-600" />,
                bg: "bg-amber-500/10 border border-amber-500/20"
              },
              {
                title: "N잡러를 위한 절세 꿀팁",
                desc: "부업 수익이 늘어날수록 세금 걱정도 커지죠? 종합소득세 신고 전 반드시 알아야 할 항목들입니다.",
                icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
                bg: "bg-indigo-500/10 border border-indigo-500/20"
              },
              {
                title: "사회초년생 1억 모으기 로드맵",
                desc: "막막하기만 한 종잣돈 마련, 리치솜이 제시하는 단계별 저축 및 투자 가이드를 따라와 보세요.",
                icon: <PiggyBank className="w-6 h-6 text-emerald-600" />,
                bg: "bg-emerald-500/10 border border-emerald-500/20"
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group cursor-pointer bg-white/70 backdrop-blur-md p-8 rounded-[32px] shadow-lg shadow-slate-100/50 border border-slate-200/60 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary-container/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-4 ${card.bg} w-fit rounded-2xl mb-6`}>
                    {card.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-container transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  자세히 보기 <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Blog & YouTube Teasers */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50/50 via-slate-50 to-white rounded-[40px] p-10 md:p-14 flex flex-col justify-between border border-indigo-100/50 hover:border-primary-container/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 h-[320px] md:h-[400px] group cursor-pointer"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">리치솜 블로그</h2>
                <p className="text-slate-650 text-lg mb-8 leading-relaxed font-medium">
                  더 깊이 있는 경제 지식과 리치솜의 일상을 블로그에서 만나보세요.
                </p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-primary-container font-black text-lg group-hover:text-primary transition-colors">
                블로그 글 더보기 
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white rounded-[40px] p-10 md:p-14 flex flex-col justify-between border border-slate-800 hover:border-slate-700/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 h-[320px] md:h-[400px] group cursor-pointer"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">리치솜 유튜브</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed font-medium">
                  영상을 통해 더욱 쉽고 재미있게 경제를 배워보세요.
                </p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-primary-fixed font-black text-lg hover:text-amber-300 transition-colors">
                채널 바로가기 
                <PlayCircle className="w-6 h-6 text-primary-fixed group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Rich-som Tip Editorial */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-500/10 via-amber-100/30 to-amber-500/5 rounded-[48px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 border-l-[12px] border-amber-500 shadow-md shadow-amber-500/5 border border-amber-200/20"
          >
            <div className="w-32 h-32 shrink-0 rounded-full bg-white flex items-center justify-center shadow-xl overflow-hidden border-4 border-amber-200 ring-4 ring-amber-500/10">
              <img 
                className="w-full h-full object-cover" 
                alt="Rich-som Tip"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa-IHFHbmIyoZoPtky6LuWFx7ZedPgL8YoHEb3mMzE66eMvvXe3Y0Vc1ZN--3MHwfbpmJBrCeC_JcGVtcA5TKKHdHcHiD9rgdl54VT4slIIPqgDZlEfP0fOURgsOsGWTGfoQfB523BsXOY2EWJJXmnn-fopEOq2gXzhODbqE0r7NaM9oyg13dIWXKEHPVjisJ-3-fhGuhHk1rluZafya3QTjJFGRHTj_w7QrACRVyG-OxMV4MAWCkPk7FrfLxTqCi5Zn4seP-s264" 
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-amber-800 font-black text-2xl tracking-tight">Rich-som Tips!</span>
                <span className="w-12 h-[3px] bg-amber-500 rounded-full"></span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-amber-950 leading-relaxed">
                "투자를 시작하기 전 가장 중요한 것은 '비상금' 마련이에요. 한 달 생활비의 3~6배 정도는 CMA 통장에 따로 보관해 두면 예상치 못한 지출에도 투자를 중단하지 않을 수 있어요!"
              </p>
            </div>
          </motion.div>
        </section>

        {/* YouTube Detail Section */}
        <section className="bg-gradient-to-b from-slate-900 to-indigo-950 text-white py-32 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">리치솜 유튜브 채널 <br />보러가기</h2>
              <p className="text-slate-350 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                텍스트로 읽는 뉴스레터가 부족하다면? 매주 업로드되는 리치솜의 영상 뉴스를 확인하세요. 어려운 경제 용어도 리치솜과 함께라면 3분 만에 마스터할 수 있습니다.
              </p>
              
              <div className="flex items-center gap-12">
                <div className="space-y-1">
                  <p className="text-4xl font-black text-primary-fixed">45K+</p>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">구독자</p>
                </div>
                <div className="w-[1px] h-12 bg-slate-800"></div>
                <div className="space-y-1">
                  <p className="text-4xl font-black text-primary-fixed">2.1M</p>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">누적 조회수</p>
                </div>
              </div>
              
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 px-10 py-5 rounded-2xl font-black text-lg hover:from-red-500 hover:to-red-600 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-red-950/40">
                <PlayCircle className="w-6 h-6" />
                지금 구독하러 가기
              </button>
            </div>

            <div className="flex-1 w-full relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-video bg-slate-800 rounded-[48px] overflow-hidden relative shadow-2xl group cursor-pointer border border-slate-700/50"
              >
                <img 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                  alt="YouTube Thumbnail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSsZRkqatkaMqZkD0ut6KC33dzR4YBijPKUXyw2Cak9-B4dyvN6MlVp7uoRWG7EW8JUnlkhanP4COMEqbVHGMPuqzvKiHkmnUPg1l6CZVZoK_9uGH7A4LHIfCUfV4yAhD2CpdS8Qa8GY9A9MDtVZ9mh5Yf00ZbHJ_aY16sVNaBMfn1V6t8fPAZI9Q22t5RrsUBx-2bMGGy2_w3PQ-rkfwaYjkoj-o7kgfGdiqKDPOAiEO5BmOjmXcHXg-th5yEyC0VLO3FXTAsrmg" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/20 relative">
                    <div className="absolute inset-0 rounded-full bg-white/5 animate-ping"></div>
                    <Play className="w-10 h-10 text-white fill-white relative z-10" />
                  </div>
                </div>
              </motion.div>
              {/* Decorative Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container/20 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200/50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-6">
            <div className="text-3xl font-black text-slate-900 tracking-tighter">리치솜 <span className="text-primary-container">(Rich-som)</span></div>
            <p className="text-slate-600 leading-relaxed max-w-xs text-lg font-medium">
              당신의 똑똑한 경제 동반자. <br />
              복잡한 세상을 쉽고 따뜻하게 읽어드립니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
            <div className="flex flex-col gap-4">
              <a href="#" className="font-bold text-slate-800 hover:text-primary transition-colors">홈</a>
              <a href="#" className="text-slate-600 font-medium hover:text-primary transition-colors">머니레터</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-slate-600 font-medium hover:text-primary transition-colors">블로그</a>
              <a href="#" className="text-slate-600 font-medium hover:text-primary transition-colors">유튜브</a>
            </div>
            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <a href="#" className="text-slate-600 font-medium hover:text-primary transition-colors">리치솜 소개</a>
            </div>
          </div>

          <div className="space-y-6 text-left md:text-right">
            <div className="flex gap-4 md:justify-end">
              <button className="p-3 rounded-full bg-white shadow-sm border border-slate-200 hover:bg-indigo-50 hover:text-primary transition-colors text-slate-500">
                <Globe className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full bg-white shadow-sm border border-slate-200 hover:bg-indigo-50 hover:text-primary transition-colors text-slate-500">
                <Mail className="w-5 h-5" />
              </button>
            </div>
            <div className="text-slate-500 space-y-2">
              <div className="flex gap-4 md:justify-end font-semibold text-sm">
                <a href="#" className="hover:text-slate-900 transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-slate-900 transition-colors">이용약관</a>
              </div>
              <p className="text-sm font-medium">© 2026 리치솜 (Rich-som). All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
