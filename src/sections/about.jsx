import image from "../../public/images/brownies.jpg";

export default function About() {
  return (
    <section id="about" className="bg-slate-900 text-slate-100 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-6 text-teal-500">
          About Browsun
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="max-w-2xl">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Browsun berawal dari hobi sederhana membuat brownies untuk keluarga 
              dan teman terdekat. Respon mereka selalu positif—bahkan sering meminta 
              dibuatkan lagi.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              Dari situlah muncul kepercayaan diri untuk mulai merintis usaha 
              brownies homemade ini. Alhamdulillah, hingga sekarang semakin banyak 
              pelanggan yang menyukai rasa brownies kami dan terus memberikan dukungan 
              untuk menghadirkan varian baru yang lebih kreatif.
            </p>
          </div>

          <img 
            src={image}
            alt="Brownies Browsun"
            className="w-full md:w-1/2 rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
