export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 text-black font-bold">
      <h1 className="text-2xl font-bold">Browsun</h1>
      <ul className="flex space-x-4 mr-8">
        <li className="px-2 py-2 rounded-lg transition-all duration-300 hover:rounded-2xl hover:bg-amber-600">
          <a href="/">Home</a>
        </li>

        <li className="px-2 py-2 rounded-lg transition-all duration-300 hover:rounded-2xl hover:bg-amber-600">
          <a href="#about">About</a>
        </li>
        <li className="px-2 py-2 rounded-lg transition-all duration-300 hover:rounded-2xl hover:bg-amber-600">
          <a href="#products">Products</a>
        </li>
        <li className="px-2 py-2 rounded-lg transition-all duration-300 hover:rounded-2xl hover:bg-amber-600">
          <a href="#review">Review</a>
        </li>
        <li className="px-2 py-2 rounded-lg transition-all duration-300 hover:rounded-2xl hover:bg-amber-600">
          <a href="#contacts">Contact</a>
        </li>
      </ul>
    </div>
  );
}
