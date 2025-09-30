const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-serif font-bold text-brand-dark mb-10">実績紹介</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-light rounded-lg overflow-hidden shadow">
          <img src="/images/modern-office.png" alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">モダンオフィスビル</h3>
            <p className="text-gray">革新のために設計された最先端のオフィス。</p>
          </div>
        </div>
        <div className="bg-gray-light rounded-lg overflow-hidden shadow">
          <img src="/images/residential-complex.png" alt="Project 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">住宅団地</h3>
            <p className="text-gray">現代的な設備を備えた持続可能な住宅ユニット。</p>
          </div>
        </div>
        <div className="bg-gray-light rounded-lg overflow-hidden shadow">
          <img src="/images/shopping-mall.png" alt="Project 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">ショッピングモール</h3>
            <p className="text-gray">古い空間を活気ある中心地に変革します。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
