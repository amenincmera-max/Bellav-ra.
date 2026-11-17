import './Loading.css';

function Loading({ isLoading = true }) {
  return (
    <div
      aria-hidden={!isLoading}
      aria-label={isLoading ? 'Preparing the fashion collection' : undefined}
      className={`fashion-loading${isLoading ? '' : ' fashion-loading--exiting'}`}
      role={isLoading ? 'status' : undefined}
    >
      <div className="fashion-loading__content">
        <div className="fashion-loading__artwork" aria-hidden="true">
          <div className="fashion-loading__item fashion-loading__trousers">
            <svg className="fashion-loading__garment fashion-loading__trousers-float" fill="none" viewBox="0 0 120 160">
              <path d="M29 13h62l3 43-9 91H60l-3-75-7 75H24l-8-91 3-43h10Z" fill="#827b72" stroke="#5d574f" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="M29 14h62M60 16v19m0 0-9 8m9-8 9 8M28 25l-8 5m72-5 8 5M31 51l17 3m41-3-16 3" stroke="#d4cbc0" strokeLinecap="round" strokeWidth="1.4" />
              <path d="M57 35v34" stroke="#5d574f" strokeLinecap="round" strokeWidth="1.2" />
            </svg>
          </div>

          <div className="fashion-loading__item fashion-loading__shirt">
            <svg className="fashion-loading__garment fashion-loading__shirt-float" fill="none" viewBox="0 0 120 150">
              <path d="m40 17 12-8 8 13 8-13 12 8 28 19-14 20-12-10 4 89H34l4-89-12 10-14-20 28-19Z" fill="#f3eee5" stroke="#a99b89" strokeLinejoin="round" strokeWidth="1.5" />
              <path d="m40 17 12-8 8 13-13 13-11-18Zm40 0L68 9l-8 13 13 13 11-18Z" fill="#e6ded2" stroke="#a99b89" strokeLinejoin="round" strokeWidth="1.3" />
              <path d="M60 22v117m-18-91 18 13 18-13" stroke="#b6a894" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              <circle cx="60" cy="57" r="1.6" fill="#8a7967" />
              <circle cx="60" cy="72" r="1.6" fill="#8a7967" />
              <circle cx="60" cy="87" r="1.6" fill="#8a7967" />
              <path d="M39 139h42" stroke="#c5b9aa" strokeLinecap="round" strokeWidth="1" />
            </svg>
          </div>

          <div className="fashion-loading__item fashion-loading__jacket">
            <svg className="fashion-loading__garment fashion-loading__jacket-float" fill="none" viewBox="0 0 120 160">
              <path d="m39 18 13-9 8 12 8-12 13 9 27 19-14 25-12-11 5 91H33l5-91-12 11-14-25 27-19Z" fill="#9a8069" stroke="#67584b" strokeLinejoin="round" strokeWidth="1.7" />
              <path d="m39 18 13-9 8 12-13 25-14-11 6-17Zm42 0L68 9l-8 12 13 25 14-11-6-17Z" fill="#bba48d" stroke="#67584b" strokeLinejoin="round" strokeWidth="1.4" />
              <path d="m60 21-4 35 4 5 4-5-4-35Zm0 40v77M38 61l16 7m28-7-16 7" stroke="#dfcfbd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
              <circle cx="68" cy="79" r="1.8" fill="#e4d3bf" />
              <circle cx="68" cy="94" r="1.8" fill="#e4d3bf" />
              <path d="M34 144h52" stroke="#705f50" strokeLinecap="round" strokeWidth="1.2" />
            </svg>
          </div>
        </div>

        <div className="fashion-loading__caption">
          <p className="fashion-loading__eyebrow">Bellavèra · The Collection</p>
          <p className="fashion-loading__message">Curating your next favorite</p>
          <div className="fashion-loading__indicators" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
