
const ProductCard = ({ name, price, category, inStock, imageUrl }) => {
  
 
  const formatPrice = (price) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 0, 
    }).format(price).replace('THB', 'บาท'); 
  };
  const cardClasses = `
    bg-white rounded-xl shadow-lg overflow-hidden relative transition duration-300 ease-in-out
    hover:shadow-2xl hover:-translate-y-1 transform cursor-pointer
    ${!inStock ? 'opacity-60 grayscale' : ''}  `;
  return (
    <div className={cardClasses}>
      
      {!inStock && (
        <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full z-10 shadow-md">
          สินค้าหมด
        </div>
      )}
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={name}
        onError={(eror) => { eror.target.onerror = null; e.target.src="https://placehold.co/300x200/cccccc/333333?text=No+Image" }}/>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-bold truncate mb-1 text-gray-900">{name}</h3>
        <p className="text-sm font-medium text-indigo-600 mb-3 uppercase">{category}</p>
        <p className="text-2xl font-extrabold text-teal-600">
          {formatPrice(price)} 
        </p>
      </div>
    </div>
  );
};

export default ProductCard;