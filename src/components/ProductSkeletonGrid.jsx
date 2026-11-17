import ProductSkeleton from './ProductSkeleton';

function ProductSkeletonGrid({ className, count = 6 }) {
  return (
    <div aria-busy="true" aria-label="Loading products" className={className} role="status">
      <span className="sr-only">Loading products...</span>
      {Array.from({ length: count }, (_, index) => <ProductSkeleton key={index} />)}
    </div>
  );
}

export default ProductSkeletonGrid;
