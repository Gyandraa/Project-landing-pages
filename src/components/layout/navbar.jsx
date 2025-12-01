export default function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-200 text-black font-bold">
            <h1 className="text-2xl font-bold">Browsun</h1>
            <ul className="flex space-x-4 mr-8">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#review">Review</a></li>
                <li><a href="#contacts">Contact</a></li>
            </ul>
        </div>
    )
}