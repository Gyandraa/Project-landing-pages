export default function Products() {
  const products = [
    {
      id: 1,
      name: "Brownies Original",
      harga: 25000,
      image: "/images/brownies-original.jpg",
    },
    { id: 2, name: "Brownies Lemon Cheese", harga: 28000, image: "/images/brownies-lemon-cheese.jpeg"},
    { id: 3, name: "Brownies Green Tea", harga: 28500, image: "/images/brownies-green-tea.jpeg"},
    { id: 4, name: "Brownies Strawberry", harga: 27000, image: "/images/brownies-strawberry.jpg"},
    { id: 5, name: "Brownies Kukus Cokelat-Keju", harga: 30000, image: "/images/brownies-cokelat-keju.jpg"},
  ];

  return (
    <section id="products" className="py-16 px-6">

      <h1 className="text-3xl font-bold text-center text-slate-800 mb-10">
        Produk Browsun
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 w-48 hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="text-sm font-semibold mt-3">{product.name}</h3>
            <p className="text-xs text-gray-600">
              Harga: Rp {product.harga.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
