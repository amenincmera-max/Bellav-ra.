import cardigan from '../assets/cardigan.jpg';

function Hero() {
  return (
    <section className="mx-auto mt-3.5 grid w-[calc(100%-28px)] grid-cols-1 gap-7 overflow-hidden bg-sand px-6.25 py-8.75 sm:mt-7.5 sm:w-[calc(100%-64px)] sm:px-[6%] sm:py-11.5 md:min-h-120 md:grid-cols-[1fr_0.78fr] md:items-center md:gap-[7%] md:px-[8%] lg:min-h-137.5" id="home">
      <div className="py-0 md:py-6.25">
        <p className="mb-4.5 text-[10px] font-bold uppercase tracking-[2px] text-accent">Italian Fashion Boutique</p>
        <h1 className="m-0 font-display text-[clamp(55px,16vw,76px)] font-normal leading-none tracking-[-3px] md:text-[clamp(54px,7vw,92px)] md:tracking-[-4px]">
          Bellavèra
        </h1>
        <h2 className="mb-3 mt-4.5 font-display text-[clamp(27px,3.2vw,41px)] font-normal leading-[1.18] md:mb-3 md:mt-5.75">
          Discover Your Style
        </h2>
        <p className="m-0 max-w-102.5 text-sm leading-[1.9] text-muted">
          Explore our collection and find pieces that express your individuality.
        </p>
        <a className="mt-7.25 inline-flex min-h-12.25 items-center justify-center gap-6 bg-ink px-5.5 text-xs text-white no-underline transition-colors hover:bg-accent" href="#products">
          Shop Now <span aria-hidden="true">↗</span>
        </a> 
      </div>
      <div className="relative aspect-[4/5] max-h-113.75 overflow-hidden bg-[#d7d0c7]">
        <img className="h-full w-full object-cover object-[center_36%]" src={cardigan} alt="A timeless knit cardigan from the collection" />
        <span className="absolute bottom-0 right-0 bg-paper/95 px-4 py-3 font-display text-[13px] italic text-[#51483f]">
          La dolce vita, in every detail
        </span>
      </div>
    </section>
  );
}

export default Hero;