import image from "../../public/images/brownies.jpg";

export default function About() {
  return (
    <section id="about" className="bg-slate-900 text-slate-100 py-20 px-20 pb-40">
      <h2 className="text-4xl font-bold mb-5">About Browsun</h2>

      <div className="flex items-center justify-between gap-10">
        <div className="max-w-2xl">
          <p className="text-slate-300 text-lg leading-relaxed">
            Semua ini dimulai dari hobi saya membuat brownies untuk keluarga dan
            teman-teman terdekat. Karena mereka selalu menyukai rasanya dan
            sering meminta dibuatkan lagi, saya mulai percaya diri untuk
            merintis usaha brownies ini. Alhamdulillah, hingga kini banyak orang
            yang menyukai brownies buatan saya dan terus memberikan dukungan
            serta saran untuk mengembangkan varian rasa baru.
          </p>
        </div>

        <img
          src={image}
          alt="image"
          className="w-1/3 h-auto rounded-xl shadow-xl"
        />
      </div>
    </section>
  );
}
