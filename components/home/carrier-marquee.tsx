const CARRIERS = ["FedEx Express", "UPS Store Network", "DHL Express", "US Postal Service", "Authorized ShipCenter", "Merchant Network"];

/** Infinite CSS marquee of carrier / partner names. Pauses on hover. */
export default function CarrierMarquee() {
  const items = [...CARRIERS, ...CARRIERS];

  return (
    <section
      aria-label="Shipping carriers and industry partners"
      className="marquee-track border-b border-border bg-surface"
    >
      <div className="mx-auto flex max-w-7xl items-center">
        <p className="relative z-10 shrink-0 border-r border-border bg-surface-muted px-4 py-3.5 text-[11px] font-bold tracking-widest text-primary uppercase sm:px-6 sm:text-xs">
          Authorized Carriers
        </p>
        <div className="relative flex-1 overflow-hidden">
          <ul className="animate-marquee flex w-max items-center gap-12 py-4 pl-8" aria-hidden={false}>
            {items.map((name, index) => (
              <li
                key={`${name}-${index}`}
                className="font-display text-lg font-extrabold tracking-wide whitespace-nowrap text-secondary/40 uppercase transition-colors hover:text-primary"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
