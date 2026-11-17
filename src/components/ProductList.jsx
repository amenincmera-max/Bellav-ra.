import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productsApi';
import ProductCard from './ProductCard';
import Loading from '../../loading/Loading';

const PRODUCT_GRID_CLASSES =
  'grid grid-cols-2 gap-x-3.25 gap-y-7 sm:gap-x-5 sm:gap-y-8.75 lg:grid-cols-3 lg:gap-x-6.25 lg:gap-y-10.5';
const FASHION_INTRO_DURATION = 1600;
const FASHION_EXIT_DURATION = 500;

function ProductList({ onAddToCart }) {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let isActive = true;
    let completionTimer;
    const loadingStartedAt = performance.now();

    async function loadProducts() {
      try {
        const data = await fetchProducts();
        if (!Array.isArray(data)) {
          throw new TypeError('Product data must be an array.');
        }
        if (isActive) {
          setProductData(data);
          setError('');
          const remainingIntroTime = Math.max(
            FASHION_INTRO_DURATION - (performance.now() - loadingStartedAt),
            0,
          );
          completionTimer = window.setTimeout(() => {
            if (isActive) {
              setIsExiting(true);
              setIsLoading(false);
            }
          }, remainingIntroTime);
        }
      } catch (loadError) {
        if (isActive) {
          console.error('Failed to load products:', loadError);
          setError("We couldn't load the collection. Please try again.");
          setIsLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      isActive = false;
      window.clearTimeout(completionTimer);
    };
  }, [retryCount]);

  useEffect(() => {
    if (!isExiting) {
      return undefined;
    }

    const exitTimer = window.setTimeout(() => {
      setIsExiting(false);
    }, FASHION_EXIT_DURATION);

    return () => window.clearTimeout(exitTimer);
  }, [isExiting]);

  function retryProducts() {
    setIsLoading(true);
    setError('');
    setIsExiting(false);
    setRetryCount((count) => count + 1);
  }

  return (
    <section className="mx-auto w-[calc(100%-36px)] py-18 sm:w-[calc(100%-64px)] sm:py-26.25 lg:max-w-300" id="products">
      <div className="mb-6.25 flex flex-col items-start gap-2.5 sm:mb-8.25 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
        <div>
          <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent">Curated for you</p>
          <h2 className="m-0 font-display text-[clamp(34px,4vw,46px)] font-normal tracking-[-1.3px]">The Collection</h2>
        </div>
        <p className="m-0 text-[13px] text-muted sm:mb-1.5">Timeless pieces, thoughtfully chosen.</p>
      </div>

      <div aria-busy={isLoading} className={isLoading ? 'relative min-h-[320px]' : 'relative'}>
        {!isLoading && error && (
          <div className="flex flex-col items-center gap-4 py-12 text-center" role="alert">
            <p className="m-0 text-sm text-muted">{error}</p>
            <button
              className="min-h-10 border border-ink bg-ink px-5 text-xs text-white transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              onClick={retryProducts}
              type="button"
            >
              Try again
            </button>
          </div>
        )}
        {!isLoading && !error && productData.length > 0 && (
          <div className={PRODUCT_GRID_CLASSES}>
            {productData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
        {!isLoading && !error && productData.length === 0 && (
          <p className="py-12 text-center text-sm text-muted">The collection is currently empty.</p>
        )}
        {(isLoading || isExiting) && <Loading isLoading={isLoading} />}
      </div>
    </section>
  );
}

export default ProductList;
