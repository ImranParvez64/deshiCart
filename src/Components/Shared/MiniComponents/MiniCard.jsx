

const MiniCard = ({ product }) => {


  return (
    <div className="border border-gray-300 rounded-sm">
      <div className="flex p-5  items-center ">
        <div>
          <img src={product.img} className="w-20" alt="" />
        </div>
        <div className="ml-4">
          <h1 className="font-semibold text-gray-500">{product.title}</h1>
          <p className="text-gray-400">{product.category}</p>
          <div className="flex gap-2 items-center ">
            <p className=" font-semibold text-gray-800">${product.discountPrice}</p>
            <p className="line-through text-red-600 text-sm">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
