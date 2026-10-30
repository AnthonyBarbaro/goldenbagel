import { useId, type ReactElement } from "react";

type BagelLoadingProps = {
  title?: string;
  message?: string;
  fullScreen?: boolean;
};

const seeds = [
  [99, 114, -28], [126, 100, 22], [158, 94, -12], [193, 98, 32],
  [222, 110, -24], [243, 135, 24], [239, 162, -34], [211, 182, 16],
  [172, 192, -15], [133, 183, 28], [99, 167, -22], [86, 141, 18]
];

export function BagelLoading({
  title = "A little schmear. Almost here.",
  message = "Getting your favorites ready…",
  fullScreen = false
}: BagelLoadingProps): ReactElement {
  const id = useId();

  return (
    <div role="status" aria-live="polite" aria-busy="true" className={`bagel-loading flex flex-col items-center justify-center bg-cream px-5 text-center ${fullScreen ? "min-h-[calc(100svh-9rem)] py-12" : "min-h-[420px] py-9 sm:py-12"}`}>
      <p className="text-[0.65rem] font-black uppercase tracking-[0.26em] text-toast">Golden Bagel Cafe</p>
      <svg aria-hidden="true" viewBox="0 0 340 260" className="my-3 w-64 max-w-full overflow-visible sm:my-4 sm:w-72">
        <defs>
          <linearGradient id={`${id}-crust`} x1="0" y1="0" x2="0.7" y2="1">
            <stop offset="0" stopColor="#f7c46b" />
            <stop offset="0.5" stopColor="#e7a04a" />
            <stop offset="1" stopColor="#bd6b2d" />
          </linearGradient>
          <linearGradient id={`${id}-knife`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f6f5f0" />
            <stop offset="0.5" stopColor="#ced2cb" />
            <stop offset="1" stopColor="#aab1a9" />
          </linearGradient>
          <mask id={`${id}-ring`}>
            <ellipse cx="170" cy="146" rx="91" ry="53" fill="white" />
            <ellipse cx="170" cy="144" rx="23" ry="14" fill="black" />
          </mask>
          <clipPath id={`${id}-spread`}>
            <rect x="72" y="86" width="196" height="122" className="bagel-loading-reveal" />
          </clipPath>
        </defs>
        <ellipse cx="170" cy="223" rx="113" ry="12" fill="#4b2f22" opacity="0.07" />
        <ellipse cx="170" cy="204" rx="133" ry="35" fill="#ebdfcc" />
        <ellipse cx="170" cy="199" rx="133" ry="35" fill="#fffdf7" stroke="#e5d7c2" strokeWidth="1.5" />
        <ellipse cx="170" cy="198" rx="109" ry="23" fill="none" stroke="#f2e9d9" strokeWidth="2" />
        <g className="bagel-loading-bagel">
          <ellipse cx="170" cy="166" rx="100" ry="60" fill="#9e572a" />
          <path d="M70 149c0 35 45 64 100 64s100-29 100-64v15c0 34-45 62-100 62S70 198 70 164Z" fill="#b16b34" />
          <ellipse cx="170" cy="146" rx="100" ry="61" fill={`url(#${id}-crust)`} stroke="#b36a2f" strokeWidth="1.5" />
          <ellipse cx="170" cy="145" rx="88" ry="50" fill="#f4c575" />
          <ellipse cx="170" cy="145" rx="82" ry="45" fill="#f7d794" />
          <ellipse cx="170" cy="145" rx="24" ry="15" fill="#9e572a" />
          <ellipse cx="170" cy="150" rx="20" ry="11" fill="#fff8ec" />
          <g fill="#be8544" opacity="0.35">
            <circle cx="112" cy="131" r="2" /><circle cx="135" cy="158" r="2.5" />
            <circle cx="204" cy="121" r="2.5" /><circle cx="222" cy="155" r="2" />
            <circle cx="174" cy="179" r="2" /><circle cx="146" cy="115" r="2" />
          </g>
          <g clipPath={`url(#${id}-spread)`} mask={`url(#${id}-ring)`}>
            <path d="M80 138c5-29 44-47 90-45 49-2 89 22 91 50 7 28-39 53-89 54-51 2-95-26-92-59Z" fill="#fffdf9" />
            <path d="M93 151c17 24 48 34 78 32m38-59c14 7 25 17 29 27m-113-28c9-7 21-11 34-12m-36 50c10 7 20 10 29 11m40-3c15-4 25-10 30-18" fill="none" stroke="#eee4d5" strokeWidth="3" strokeLinecap="round" />
          </g>
          {seeds.map(([x, y, angle]) => (
            <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="1.6" ry="4" fill="#fff0c4" transform={`rotate(${angle} ${x} ${y})`} />
          ))}
        </g>
        <g className="bagel-loading-knife">
          <path d="M130 91c-13 3-30 12-30 20 0 7 12 11 25 7l71-21-6-17Z" fill={`url(#${id}-knife)`} stroke="#9ba398" strokeWidth="1" />
          <path d="m189 80 65-21c11-3 17 1 19 7 2 7-2 13-11 16l-66 15Z" fill="#68432c" stroke="#4b2f22" strokeWidth="1.5" />
          <path d="m202 82 54-17" stroke="#987355" strokeWidth="2" strokeLinecap="round" />
          <path d="M105 111c3-5 10-7 16-7l12 2-18 8Z" fill="#fffdf9" />
          <path d="m119 99 53-16" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        </g>
        <g className="bagel-loading-sparkle" fill="none" stroke="#bc7a2b" strokeWidth="2" strokeLinecap="round">
          <path d="M76 72v10m-5-5h10m175 24v8m-4-4h8" />
        </g>
      </svg>
      <h2 className="max-w-sm font-serif text-3xl font-black leading-tight tracking-tight text-charcoal sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-sm text-sm font-semibold leading-6 text-espresso/70">{message}</p>
      <span aria-hidden="true" className="mt-6 flex gap-1.5">
        <span className="bagel-loading-dot h-1.5 w-1.5 rounded-full bg-toast" />
        <span className="bagel-loading-dot h-1.5 w-1.5 rounded-full bg-toast" />
        <span className="bagel-loading-dot h-1.5 w-1.5 rounded-full bg-toast" />
      </span>
    </div>
  );
}
