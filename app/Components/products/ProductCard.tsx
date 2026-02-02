import { Star } from "lucide-react";

export default function ProductCard({ product, addToCart }: any) {
  return (
    <div className="border rounded-lg hover:shadow-lg">
      <div className="h-48 flex items-center justify-center bg-gray-100">
        <span className="text-6xl">{product.image}</span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>

        <div className="flex items-center my-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
