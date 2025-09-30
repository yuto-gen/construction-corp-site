const About = () => {
  return (
    <div className="bg-white">
      <section className="py-20 text-center bg-gray-light animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">
          信頼と品質で未来を築く
        </h1>
        <div className="h-1 w-20 bg-brand-dark mx-auto my-6"></div>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          私たちは建設・不動産分野で培った経験を活かし、持続可能で安心できる社会インフラを提供します。
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 animate-fadeIn">
        <h2 className="text-3xl font-serif font-bold text-brand-dark mb-10 tracking-wide uppercase">
          会社概要
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700 divide-y md:divide-y-0 md:divide-x">
          <div className="space-y-3 pr-6">
            <p><span className="font-bold">会社名:</span> BuildCorp株式会社</p>
            <p><span className="font-bold">設立:</span> 2010年</p>
            <p><span className="font-bold">所在地:</span> 東京都新宿区〇〇1-2-3</p>
          </div>
          <div className="space-y-3 pl-6">
            <p><span className="font-bold">代表者:</span> 山田 太郎</p>
            <p><span className="font-bold">事業内容:</span> 建設業、不動産開発、リノベーション</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-20 px-6 animate-fadeIn">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-brand-dark mb-6">
            私たちの理念
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            「人々が安心して暮らせる街を作る」  
            これが私たちの使命です。品質と安全を第一に、持続可能な社会に貢献します。
          </p>
          <div className="flex justify-center">
            <img
              src="/images/ceo-placeholder.jpg"
              alt="代表者"
              className="w-32 h-32 object-cover rounded-full border-4 border-brand-dark"
            />
          </div>
          <p className="mt-4 text-gray-600 italic">代表取締役 山田 太郎</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6 animate-fadeIn">
        <h2 className="text-3xl font-serif font-bold text-brand-dark mb-10 tracking-wide uppercase">
          沿革
        </h2>
        <div className="space-y-8 relative border-l-2 border-brand-dark pl-6">
          <div className="relative">
            <span className="top-1 w-4 h-4 bg-brand-dark rounded-full"></span>
            <h3 className="font-bold text-brand-dark">2010年</h3>
            <p className="text-gray-700">BuildCorp設立</p>
          </div>
          <div className="relative">
            <span className="top-1 w-4 h-4 bg-brand-dark rounded-full"></span>
            <h3 className="font-bold text-brand-dark">2015年</h3>
            <p className="text-gray-700">本社を新宿区に移転</p>
          </div>
          <div className="relative">
            <span className="top-1 w-4 h-4 bg-brand-dark rounded-full"></span>
            <h3 className="font-bold text-brand-dark">2020年</h3>
            <p className="text-gray-700">大型プロジェクト「〇〇モール」完成</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
