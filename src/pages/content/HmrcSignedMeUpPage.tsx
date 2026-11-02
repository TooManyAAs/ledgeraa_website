import { ContentLayout } from "./ContentLayout";
import { GOV } from "@/config/site";

export function HmrcSignedMeUpPage() {
  return (
    <ContentLayout
      path="/making-tax-digital/hmrc-signed-me-up"
      eyebrow="MTD guide"
      title="HMRC signed me up for Making Tax Digital. What now?"
      lede="From September 2026, HMRC began signing up sole traders and landlords who should be using Making Tax Digital but hadn't joined. If that's you, here's what to do next."
      related={[
        { href: "/making-tax-digital/first-quarterly-update", label: "Your first quarterly update, step by step" },
        { href: "/making-tax-digital/deadlines", label: "Every MTD deadline, 2026 to 2028" },
        { href: "/making-tax-digital/do-i-need-it", label: "Do I need Making Tax Digital? Check your start date" },
      ]}
    >
      <h2>What it means</h2>
      <p>
        HMRC has looked at your tax return and decided your qualifying income
        is over the threshold, so you now need to keep digital records and send
        quarterly updates. You don't need to sign up again.
      </p>

      <h2>1. Check HMRC has it right</h2>
      <p>
        Qualifying income is your self-employment and property income before
        expenses. <a href="/making-tax-digital/do-i-need-it">Use our checker</a>{" "}
        or HMRC's guide to{" "}
        <a href={GOV.qualifyingIncome}>working out your qualifying income</a>. If
        you think you should be exempt, contact HMRC.
      </p>

      <h2>2. Choose software</h2>
      <p>
        HMRC doesn't provide software for MTD for Income Tax. Pick one from its
        list of <a href={GOV.findSoftware}>software that works with MTD</a>. If
        you have an accountant, ask which software they support.
      </p>

      <h2>3. Connect it to HMRC</h2>
      <p>
        Sign in to your software with your Government Gateway details and give
        it permission to talk to HMRC.
      </p>

      <h2>4. Catch up on your records</h2>
      <p>
        Add your income and expenses from 6 April. Each quarterly update covers
        the tax year so far, so your next update will bring HMRC up to date.
      </p>

      <h2>5. Put the next deadline in your diary</h2>
      <p>
        The next quarterly updates are due on 7 November, 7 February and 7 May.{" "}
        <a href="/making-tax-digital/deadlines">See every deadline</a>.
      </p>
    </ContentLayout>
  );
}
