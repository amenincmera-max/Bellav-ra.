export function ProductShimmer({ className = '', isActive = true }) {
  const animationClass = isActive
    ? 'motion-safe:animate-fashion-shimmer motion-reduce:animate-none'
    : '';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-500 motion-reduce:transition-none ${className}`}
    >
      <div
        className={`absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent ${animationClass}`}
      />
    </div>
  );
}

function ProductSkeleton() {
  return (
    <article aria-hidden="true" className="min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f0ede8]">
        <ProductShimmer />
      </div>
      <div className="pt-3 sm:pt-4.25">
        <div className="mb-1.5 flex min-h-6 items-center">
          <span className="h-2.5 w-2/5 motion-safe:animate-pulse motion-reduce:animate-none bg-[#e9e4dc]" />
        </div>
        <div className="h-5.5 w-3/5 motion-safe:animate-pulse motion-reduce:animate-none bg-[#e9e4dc]" />
        <div className="mb-3 mt-2.5 h-3.5 w-1/4 motion-safe:animate-pulse motion-reduce:animate-none bg-[#e9e4dc] sm:mb-4" />
        <div className="min-h-10 motion-safe:animate-pulse motion-reduce:animate-none border border-[#d9d2c8] bg-[#eee8df] sm:min-h-10.75" />
      </div>
    </article>
  );
}

export default ProductSkeleton;
