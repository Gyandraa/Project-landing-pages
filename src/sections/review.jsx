export default function Review() {
  const reviews = [
    {
      id: 1,
      name: "Rizky",
      ulasan: "Browniesnya enak banget, teksturnya lembut, bikin ketagihan. Mantul!",
    },
    {
      id: 2,
      name: "Elina",
      ulasan: "Brownies green tea-nya enak banget! Wajib coba.",
    },
    {
      id: 3,
      name: "Gyan",
      ulasan: "Rasanya enak dan super moist. Auto ketagihan sih ini.",
    },
    {
      id: 4,
      name: "Angel",
      ulasan: "Rasanya mantep banget, harga terjangkau pula. Fix langganan!",
    },
  ];

  return (
    <section id="review" className="bg-slate-900 text-slate-100 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-teal-500">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition hover:-translate-y-1"
            >
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-xl">
                  {review.name.charAt(0).toUpperCase()}
                </div>

                <h3 className="text-lg font-semibold text-orange-400">
                  {review.name}
                </h3>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm">
                {review.ulasan}
              </p>

              <div className="mt-4 text-yellow-400 text-lg">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
