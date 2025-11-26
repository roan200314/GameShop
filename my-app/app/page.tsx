import { game } from "./data/GameData"
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-28 sm:px-8">
        {/* Hero section */}`~
        <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
              New season • Limited drops
            </p>
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Build your <span className="text-emerald-400">ultimate</span>{" "}
              game collection.
            </h1>
            <p className="max-w-xl text-sm text-zinc-300 sm:text-base">
              Pre-order the newest titles, score deals on classics, and keep
              everything organized in one clear inventory. No hassle, only games.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-zinc-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:shadow-emerald-400/40 bg-emerald-400">
                View top deals
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900/60">
                Next-gen only
              </button>
            </div>
          </div>

          <div className="mt-4 flex w-full max-w-md flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-xl md:mt-0">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>In your cart</span>
              <span>3 items</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-zinc-900/80 px-3 py-2">
                <div className="space-y-0.5">
                  <p className="font-medium text-zinc-50">GTA VI</p>
                  <p className="text-xs text-zinc-400">PS5 • Pre-order</p>
                </div>
                <p className="text-sm font-semibold text-emerald-400">
                  €79,99
                </p>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-zinc-900/80 px-3 py-2">
                <div className="space-y-0.5">
                  <p className="font-medium text-zinc-50">Elden Ring</p>
                  <p className="text-xs text-zinc-400">Shadow of the Erdtree</p>
                </div>
                <p className="text-sm font-semibold text-emerald-400">
                  €59,99
                </p>
              </div>
            </div>
            <div className="mt-1 flex items-center justify-between border-t border-zinc-800 pt-3 text-sm">
              <span className="text-zinc-400">Total (incl. VAT)</span>
              <span className="text-base font-semibold text-zinc-50">
                €139,98
              </span>
            </div>
            <button className="mt-2 cursor-pointer w-full rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-400">
              Checkout
            </button>
          </div>
        </section>

        {/* Filters / header row */}
        <section className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Games in stock
            </h2>
            <p className="text-xs text-zinc-400 sm:text-sm">
              {game.length} titles • Filtered by popular releases
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <button className="rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1.5 text-zinc-100 hover:border-emerald-400 hover:text-emerald-300">
              All genres
            </button>
            <button className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-zinc-300 hover:border-zinc-600">
              PS5
            </button>
            <button className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-zinc-300 hover:border-zinc-600">
              PC
            </button>
            <button className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-zinc-300 hover:border-zinc-600">
              Xbox
            </button>
            <select className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-zinc-300 focus:outline-none">
              <option>Sort: popular</option>
              <option>Price low → high</option>
              <option>Price high → low</option>
              <option>Newest first</option>
            </select>
          </div>
        </section>

        {/* Product grid */}
        <section className="mt-2">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {game.map((game) => (
              <article
                key={game.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 shadow-md shadow-black/40 transition hover:-translate-y-1 hover:border-emerald-400/70 hover:shadow-emerald-500/30"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={game.cover}
                    alt={game.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {game.badge && (
                    <span className="absolute left-2 top-2 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-950 shadow-md">
                      {game.badge}
                    </span>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col gap-2 px-3.5 py-3">
                  <div>
                    <h3 className="line-clamp-1 text-sm font-semibold text-zinc-50">
                      {game.title}
                    </h3>
                    <p className="line-clamp-1 text-xs text-zinc-400">
                      {game.subtitle}
                    </p>
                  </div>

                  <div className="mt-1 flex flex-wrap gap-1 text-[11px] text-zinc-400">
                    <span className="rounded-full border border-zinc-700/80 px-2 py-0.5">
                      {game.genre}
                    </span>
                    <span className="rounded-full border border-zinc-700/80 px-2 py-0.5">
                      {game.platform}
                    </span>
                  </div>

                  <div className="mt-auto flex items-end justify-between pt-2">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-emerald-400">
                        {game.price}
                      </span>
                      {game.oldPrice && (
                        <span className="text-[11px] text-zinc-500 line-through">
                          {game.oldPrice}
                        </span>
                      )}
                    </div>
                    <button className="rounded-xl bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-950 transition hover:bg-white">
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
