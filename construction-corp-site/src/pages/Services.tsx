const Services = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-serif font-bold text-brand-dark mb-10">サービス内容</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-light p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">建設</h3>
          <p className="text-gray">
            住宅および商業ビルプロジェクトを精度と品質で提供します。
          </p>
        </div>
        <div className="bg-gray-light p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">不動産</h3>
          <p className="text-gray">
            エンドツーエンドのプロパティ開発、販売、管理サービスを提供します。
          </p>
        </div>
        <div className="bg-gray-light p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">リノベーション</h3>
          <p className="text-gray">
            既存の建物を現代化するための革新的なリノベーションソリューションを提供します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
