// //tugas variable
// export function Variable() {
//   const name = "Gyandra";
//   const age = 18;
//   const hobi = "Ngoding";
//   return (
//     <div>
//       <ul>
//         <li>Name: {name}</li>
//         <li>Age: {age}</li>
//         <li>Hobi: {hobi}</li>
//       </ul>
//     </div>
//   );
// }
// // tugas props
// export function Card(props) {
//   return (
//     <h2>
//       iam a Card component with title {props.title} and description
//       {props.description}
//     </h2>
//   );
// }

import { useEffect, useState } from "react";
import Productlist from "./productlist";

// //tugas props 2
// export function Cars() {
//   const carlist = [
//     { id: 1, brand: "Toyota", model: "Aavanza" },
//     { id: 2, brand: "Bmw", model: "M4" },
//     { id: 3, brand: "Porsche", model: "911" },
//   ];
//   return (
//     <div>
//       <h1>Wishlist My car In 2035</h1>
//       <ul>
//         {carlist.map((car) => (
//           <li key={car.id}>
//             {car.brand} {car.model}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export function Productlist({ products }) {
//   return (
//     <div>
//       <ul>
//         {products.products.map((product) => (
//           <li key={product.id}>
//             <Productcard
//               name={product.name}
//               price={product.price}
//               jumlahPembelian={product.jumlahPembelian}
//               totaLHarga={product.price * product.jumlahPembelian}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export function Productcard({ name, price, jumlahPembelian }) {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>Rp : {price}</p>
//       <p>Jumlah pembelian : {jumlahPembelian}</p>
//       <p>Total Harga : {price * jumlahPembelian}</p>
//     </div>
//   );
// }

// export default function Training() {
//   const products = [
//     { id: 1, name: "Keyboard", price: 150000, jumlahPembelian: 1 },
//     { id: 2, name: "Mouse", price: 80000, jumlahPembelian: 2 },
//     { id: 3, name: "Headset", price: 200000, jumlahPembelian: 3 },
//   ];
//   return (
//     <div>
//       <h1>Training Component</h1>
//       <Variable />
//       <Card title="Ini Judul" description="Ini Deskripsi" />
//       <Cars />
//       <Productlist products={products} />
//     </div>
//   );
// // }
// import ProductList from "./component/productlist";
// export default function App() {
//   const products = [
//     {
//       id: 1,
//       name: "Keyboard",
//       price: 150000,
//       image: "https://via.placeholder.com/150",
//       description: "Keyboard mechanical RGB",
//     },
//     {
//       id: 2,
//       name: "Mouse",
//       price: 80000,
//       image: "https://via.placeholder.com/150",
//       description: "Mouse gaming",
//     },
//     {
//       id: 3,
//       name: "Headset",
//       price: 200000,
//       image: "https://via.placeholder.com/150",
//       description: "Headset bass terbaik",
//     },
//   ];

//   return (
//     <div>
//       <h1>Products</h1>
//       <ProductList products={products} />
//     </div>
//   );
// }

// export default function Usestate() {
//   const [count, setCount] = useState(0);

//   function tambah() {
//     setCount(count + 1);
//   }
//   function kurang() {
//     setCount(count - 1);
//   }

//   return (
//     <div>
//       <h1>counter {count} </h1>
//       <button onClick={kurang}>-</button>
//       <button onClick={tambah}>+</button>
//     </div>
//   );
// }

// // latihan menggabungkan pembelajaran
// import ProductList from "./component/productlist";

// export default function App() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [jumlahStok, setJumlahStok] = useState("");
//   const [search, setSearch] = useState("");

//   const [editingId, setEditingId] = useState(null);

//   const [products, setProducts] = useState([
//     { id: 1, name: "Kulkas", price: 2500000, jumlahStok: 2 },
//     { id: 2, name: "Tv", price: 3500000, jumlahStok: 1 },
//     { id: 3, name: "Meja Belajar", price: 250000, jumlahStok: 3 },
//   ]);

//   const deleteProduct = (id) => {
//     setProducts(products.filter((item) => item.id !== id));
//   };

//   const startEdit = (id) => {
//     const product = products.find((item) => item.id === id);
//     setName(product.name);
//     setPrice(product.price);
//     setJumlahStok(product.jumlahStok);
//     setEditingId(id);
//   };
//   const addProduct = () => {
//     if (!name || !price || !jumlahStok) return alert("Form belum lengkap!");

//     const newProduct = {
//       id: products.length + 1,
//       name,
//       price: Number(price),
//       jumlahStok: Number(jumlahStok),
//     };

//     setProducts([...products, newProduct]);
//     resetForm();
//   };

//   const updateProduct = () => {
//     setProducts(
//       products.map((item) => {
//         if (item.id === editingId) {
//           return {
//             ...item,
//             name: name,
//             price: Number(price),
//             jumlahStok: Number(jumlahStok),
//           };
//         } else {
//           return item;
//         }
//       })
//     );
//     resetForm();
//   };
//   const resetForm = () => {
//     setName("");
//     setPrice("");
//     setJumlahStok("");
//     setEditingId(null);
//   };

//   const searchProduct = products.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Halaman admin produk</h1>

//       <input
//         type="text"
//         placeholder="Nama produk"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Harga"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Stok"
//         value={jumlahStok}
//         onChange={(e) => setJumlahStok(e.target.value)}
//       />

//       {editingId === null ? (
//         <button onClick={addProduct}>Tambah</button>
//       ) : (
//         <button onClick={updateProduct}>Update</button>
//       )}

//       <input
//         type="text"
//         placeholder="Cari produk"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <ProductList
//         products={searchProduct}
//         onDelete={deleteProduct}
//         onEdit={startEdit}
//       />
//     </div>
//   );
// }

// training from chat gpt, and he says this training make my logic better and i want to try this training, and bismillah enjoy and trust to proccess

import ProductList from "./productlist";

export default function App() {
  const [name, setName] = useState("")
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [editingId, setEditingId] = useState(null)
   const [absensis, setAbsensis] = useState([
    { id: 1, name: "Gyandra", status: "hadir"},
    { id: 2, name: "Riki", status: "izin"},
    { id: 3, name: "Rahmat", status: "alfa"},
  ])

 
  const editing = (id) => {
    const absensi = absensis.find((item) => item.id === id)
    setName(absensi.name) 
    setStatus(absensi.status)
    setEditingId(id)
  }

  const updateAbsensi = () => {
    setAbsensis(absensis.map((item) => {
      if (item.id === editingId) {
        return { 
          ...item,
          name,
          status,
        }
      }
      return item
    }))
    setName("")
    setStatus("")
    setEditingId(null)
  }

  const deleteAbsensi = (id) => {
    setAbsensis(absensis.filter((item) => item.id !== id))
  }
  const searchAbsensi = absensis.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  })

  const addAbsensi = () =>  {
    if (!name || !status) {
      alert("Form harus lengkap")
      return
    }

    const newAbsensi = {
      id: absensis.length + 1,
      name,
      status,
    }
    setAbsensis([...absensis, newAbsensi])
    setName("")
    setStatus("")
    
    setTimeout(() => {
      alert("Absensi success to list")
    }, 1000)
  }

  return (
    <div>
      <h1>Halaman Admin Absensi</h1>
      <input type="text" placeholder="Nama" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Status Kehadiran" value={status} onChange={e => setStatus(e.target.value)} />
      
      {editingId === null ? (
        <button onClick={addAbsensi}>Tambah</button>
       ) : (
         <button onClick={updateAbsensi}>Update</button>
       )}
      <input type="text" placeholder="Cari" value={search} onChange={e => setSearch(e.target.value)} />
      <ProductList products={searchAbsensi} onDelete={deleteAbsensi} onEdit = {editing} />
    </div>
  )
}