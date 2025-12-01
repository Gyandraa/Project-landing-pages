import image from "../../public/images/Brownies-kukus.jpg";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-20 py-20 bg-slate-50">
      
      <div className="max-w-lg">
        <p className="text-amber-600 text-lg font-semibold tracking-wide">
          Welcome to Browsun👌
        </p>

        <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mt-2">
          The best brownies <br /> in Bandung 
        </h1>

        <p className="text-slate-600 mt-4 text-lg leading-relaxed">
          Brownies premium dengan bahan berkualitas tinggi, tekstur lembut, 
          dan rasa yang bikin kamu ketagihan terus.
        </p>

        <button
          className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold shadow-md transition"
        >
          Order Now
        </button>
      </div>

      <img
        src={image}
        alt="image"
        className="w-1/3 h-auto rounded-xl shadow-xl"
      />
    </div>
  );
}
