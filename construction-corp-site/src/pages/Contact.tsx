import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("送信データ:", data);
    alert("お問い合わせを送信しました。ありがとうございます！");
    reset();
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 text-center bg-gray-light">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">
          お問い合わせ
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          ご質問やご相談は以下のフォームよりお気軽にご連絡ください。
        </p>
      </section>

      {/* フォーム */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">お名前</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">メールアドレス</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">件名</label>
            <input
              {...register("subject", { required: true })}
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="お問い合わせの件名"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">メッセージ</label>
            <textarea
              {...register("message", { required: true })}
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3"
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>

          <button
            type="submit"
            className="bg-brand-dark text-white py-3 px-6 rounded-lg hover:bg-brand-light transition"
          >
            送信する
          </button>
        </form>
      </section>

      {/* Google Map */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-serif font-bold text-brand-dark mb-6">
          本社所在地
        </h2>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.938594948928!2d139.691706!3d35.689487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0aa1a8f90d%3A0x2e77a1d05a1f9d!2z5pel5pys44CB5paw5a6_!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
