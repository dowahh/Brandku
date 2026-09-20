function Card({ image, title, price, category }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden shadow hover:shadow-md transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain p-4 bg-white"
      />
      <div className="p-4">
        <span className="text-xs text-pink-600 font-medium uppercase tracking-wide">
          {category}
        </span>
        <h3 className="text-sm font-semibold mt-1 mb-2 line-clamp-2 text-slate-800">
          {title}
        </h3>
        <p className="text-pink-600 font-bold text-lg">${price}</p>
      </div>
    </div>
  );
}

export default Card;