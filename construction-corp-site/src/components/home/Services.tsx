const Services = () => {
  return (
    <section className="bg-gray-light py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-brand-dark mb-10">
          サービス内容
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">建設</h3>
            <p className="text-gray">
              住宅および商業ビルの建設を精密に行います。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">不動産</h3>
            <p className="text-gray">
              クライアントのニーズに合わせた不動産開発と管理を行います。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">リノベーション</h3>
            <p className="text-gray">
              物件に新しい命を吹き込むリノベーションサービスを提供します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
