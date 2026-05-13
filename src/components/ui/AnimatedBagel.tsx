export function AnimatedBagel() {
  return (
    <div aria-hidden="true" className="relative h-36 w-36 sm:h-44 sm:w-44">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f8cc76] via-[#d98634] to-[#8a431f] shadow-lift motion-safe:animate-[float_5s_ease-in-out_infinite]" />
      <div className="absolute inset-[28%] rounded-full bg-cream shadow-inner" />
      <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-espresso/35" />
      <div className="absolute left-20 top-10 h-2 w-2 rounded-full bg-espresso/30" />
      <div className="absolute bottom-9 left-14 h-2 w-2 rounded-full bg-espresso/25" />
      <div className="absolute right-9 top-20 h-2 w-2 rounded-full bg-espresso/30" />
    </div>
  );
}
