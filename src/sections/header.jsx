import image from "../../public/images/Brownies-kukus.jpg";

export default function Header() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="max-w-xl">
          <p className="text-amber-600 font-semibold tracking-wide text-lg">
            Fresh • Premium • Homemade
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mt-3">
            The Best Brownies <br /> in Bandung
          </h1>

          <p className="text-slate-600 mt-4 text-lg leading-relaxed">
            Brownies premium dengan bahan berkualitas tinggi, tekstur super moist, 
            dan rasa rich yang bikin kamu ketagihan setiap gigitan.
          </p>

          <button
            className="mt-6 px-7 py-3.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold shadow-lg transition"
          >
            Order Now
          </button>
        </div>

        <img
          src={image}
          alt="Brownies"
          className="w-full md:w-1/3 rounded-2xl shadow-2xl object-cover"
        />
      </div>
    </section>
  );
}
