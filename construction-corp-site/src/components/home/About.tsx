// src/components/About.tsx
const About = () => {
  return (
    <section className="py-16 bg-gray-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="/images/Residential Complex.png"
            alt="住宅団地"
            className="w-full rounded-lg shadow-lg object-cover h-64 md:h-96"
          />

          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6 text-brand-dark">
              私たちについて
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-sans leading-relaxed">
              私たちは長年にわたり、地域社会とともに歩んできた建設会社です。  
              信頼と技術力を基盤に、オフィスビル、住宅団地、商業施設など、幅広いプロジェクトを手掛けています。  
              <br /><br />
              これからも持続可能で快適な環境づくりを通じて、お客様の未来を支えてまいります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
