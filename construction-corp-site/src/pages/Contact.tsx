const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-serif font-bold text-brand-dark mb-6">お問い合わせ</h1>
      <p className="text-gray mb-8">
        プロジェクトについてお考えですか？以下のフォームにご記入いただくか、直接ご連絡ください。
        <br />
        <span className="font-semibold">contact@buildcorp.com</span>
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">お名前</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="お名前"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">メールアドレス</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">メッセージ</label>
          <textarea
            rows={5}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            placeholder="メッセージをこちらにご記入ください..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-dark transition"
        >
          メッセージを送信
        </button>
      </form>
    </section>
  );
};

export default Contact;
