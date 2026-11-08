import { Check, Receipt } from "lucide-react";
import { cn } from "@ds/cn";

/** Static phone-screen mock of a completed MTD quarterly update. */
export function ScreenMock({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-full flex-col bg-[var(--color-canvas)]", className)} aria-hidden>
      <StatusBar />
      <div className="flex-1 px-4 pt-3 pb-5 overflow-hidden">
        <MtdDoneScreen />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex h-[44px] items-end justify-between px-5 pb-1.5 text-[11px] font-semibold text-[var(--color-ink)]">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <SignalBars />
        <span>4G</span>
        <BatteryGlyph />
      </div>
    </div>
  );
}

function SignalBars() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <rect x="0" y="7" width="2" height="3" rx="0.5" fill="currentColor" />
      <rect x="4" y="5" width="2" height="5" rx="0.5" fill="currentColor" />
      <rect x="8" y="3" width="2" height="7" rx="0.5" fill="currentColor" />
      <rect x="12" y="0" width="2" height="10" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function BatteryGlyph() {
  return (
    <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
      <rect
        x="0.5"
        y="0.5"
        width="18"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeOpacity="0.5"
      />
      <rect x="2" y="2" width="14" height="7" rx="1" fill="currentColor" />
      <rect x="20" y="3.5" width="1.5" height="4" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function MtdDoneScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center px-2">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-[var(--color-success-50)] ring-8 ring-[var(--color-success-100)]/40">
        <Check
          className="h-10 w-10 text-[var(--color-success-600)]"
          strokeWidth={3}
        />
      </div>

      <h2 className="mt-6 text-[26px] font-extrabold tracking-tight leading-tight text-[var(--color-ink)] text-balance">
        You're done.
      </h2>
      <p className="mt-2 text-[13px] font-medium text-[var(--color-ink-muted)] max-w-[18ch]">
        HMRC has your Q1 update. Receipt: <span className="font-mono">#A4-9F2K</span>
      </p>

      <div className="mt-6 w-full rounded-2xl bg-white p-4 ring-1 ring-[var(--color-neutral-100)] shadow-sm">
        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-neutral-500)]">
          Next thing to do
        </p>
        <div className="mt-2 flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-primary-50)]">
            <Receipt
              className="h-4 w-4 text-[var(--color-primary-700)]"
              strokeWidth={2.4}
            />
          </div>
          <div className="text-left">
            <p className="text-[13px] font-bold text-[var(--color-ink)] leading-tight">
              Q2 update
            </p>
            <p className="text-[11px] text-[var(--color-ink-muted)]">
              Due 5 August
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-[11px] text-[var(--color-neutral-500)]">
        We'll remind you. Nothing to do until then.
      </p>
    </div>
  );
}
