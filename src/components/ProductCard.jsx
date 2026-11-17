import { useState } from 'react';
import { formatPrice } from '../data/products';

function ProductCard({ product, onAddToCart }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="min-w-0">
      <div className="group relative aspect-[4/5] overflow-hidden bg-[#f0ede8]">
        {imageFailed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[#857b70]" role="img" aria-label={`${product.title} image unavailable`}>
            <span className="font-display text-[27px]">Bellavèra</span>
            <small className="text-[11px]">Image unavailable</small>
          </div>
        ) : (
          <img
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.035]"
            src={product.image}
            alt={product.title}
            onError={() => setImageFailed(true)}
          />
        )}
        {product.featured && <span className="absolute left-2 top-2 bg-paper px-1.75 py-1.5 text-[8px] uppercase tracking-[1px] sm:left-3.5 sm:top-3.5 sm:px-2.5 sm:text-[9px]">Featured</span>}
      </div>
      <div className="pt-3 sm:pt-4.25">
        <p className="mb-1.5 min-h-6 text-[8px] uppercase tracking-[0.8px] text-muted sm:text-[10px]">{product.category}</p>
        <h3 className="m-0 font-display text-lg font-medium sm:text-[21px]">{product.title}</h3>
        <p className="mb-3 mt-2.5 text-[13px] font-semibold text-[#4b463f] sm:mb-4 sm:mt-2.5">
          {formatPrice(product.price)}
        </p>
        <button
          className="flex min-h-10 w-full items-center justify-between border border-[#d9d2c8] bg-transparent px-2.25 text-[10px] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white sm:min-h-10.75 sm:px-3.5 sm:text-[11px]"
          onClick={() => onAddToCart(product)}
          type="button"
        >
          Add to Cart <span className="text-lg font-light" aria-hidden="true">+</span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;