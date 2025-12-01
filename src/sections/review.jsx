export default function Review() {
  const reviews = [
    {
      id: 1,
      name: "Rizky",
      ulasan:
        "Browniesnya enak banget,teksturnya lembut banget bikin ketagihan,pokonya mantul deh",
    },
    {
      id: 2,
      name: "Elina",
      ulasan:
        "Rasa Browniesnya enak banget,apalagi yang rasa green tea enak banget,rekomendasi banget",
    },
    {
      id: 3,
      name: "Gyan",
      ulasan:
        "Wah mantap sih browniesnya,rasanya enak dan lembutjuga,pokonya bikin ketagihan terus",
    },
    {
      id: 4,
      name: "angel",
      ulasan:
        "Auto jadi langganan sih,rasanya mantep banget pokonya mantul deh sama harganya yang terjangkau",
    },
  ];
  return (
    <section
      id="review"
      className="bg-slate-900 text-slate-100 py-20 px-20 pb-10"
    >
      <div className="py-4 px-6 bg-slate-900 text-slate-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-800 border border-slate-700 w-72 p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2 text-orange-400">
                {review.name}
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {review.ulasan}
              </p>

              <div className="mt-4 flex items-center gap-1">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
