// import ProductCard from "./productCard";
// export default function ProductList({ products, onDelete, onEdit }) {
//   return (
//     <div>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <div>
//               <ProductCard
//                 name={product.name}
//                 price={product.price}
//                 jumlahStok={product.jumlahStok}
//                 onDelete={() => onDelete(product.id)}
//                 onEdit={() => onEdit(product.id)}
//               />
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function Productlist({products, onDelete, onEdit}) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>Name Siswa : {product.name}</h3>
            <p>Status : {product.status}</p>
            <button onClick={() => onDelete(product.id)}>Delete</button>
            <button onClick={() => onEdit(product.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
}