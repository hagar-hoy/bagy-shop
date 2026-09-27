import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="my-16 w-full px-6 lg:px-10">
      <div className="grid min-h-[600px] w-full grid-cols-1 overflow-hidden bg-[#b5a494] md:grid-cols-2">
        <div className="flex flex-col justify-center px-10 py-16 md:px-14 lg:px-20">
          <p className="mb-4 text-sm uppercase tracking-[0.25em]">
            New Collection
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] lg:text-6xl xl:text-7xl">
            Your Style,
            <br />
            Your Bag.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-stone-700 lg:text-lg">
            Discover timeless bags designed to elevate your everyday style.
          </p>

          <Link
            to="/products"
            className="group mt-8 flex w-fit items-center gap-3 rounded-xl bg-[#402a26] px-7 py-4 text-white transition-colors hover:bg-[#2d1b18]"
          >
            Shop Now
            <MoveRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="relative min-h-[400px]">
          <img
            src="/background.jpg"
            alt="New collection"
            className="h-full w-full object-cover brightness-[0.95] contrast-[0.95]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
