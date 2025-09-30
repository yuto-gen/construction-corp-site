const CTA = () => {
  return (
    <section className="bg-white text-gray-700 py-16 text-center">
      <h2 className="text-3xl font-serif font-bold mb-4">さあ、始めましょう</h2>
      <p className="mb-6">
        お気軽にお問い合わせください。
      </p>
      <a
        href="/contact"
        className="bg-white text-black border border-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
      >
        お問い合わせ
      </a>
    </section>
  );
};

export default CTA;
