const Hero = () => {
  return (
    <section
      className="relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/modern-office.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-3xl text-center text-white animate-fadeIn px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6">
          未来を築くパートナー
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 font-sans text-gray-200">
          信頼できる建設・不動産ソリューションを、あなたの明日のために。
        </p>
        <button className="bg-white border border-gray-300 text-brand-dark px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-gray-400 transition">
          プロジェクトを見る
        </button>
      </div>
    </section>
  );
};

export default Hero;
