import { Fragment, type ReactNode } from "react";

/**
 * Markdown - a small, dependency-free renderer for our own trusted Markdown
 * (the legal pages in src/content/legal). It is NOT a general CommonMark
 * engine: it supports exactly the block and inline syntax those documents use.
 *
 * Blocks:  ## / ### headings, paragraphs, - and 1. lists, > blockquotes,
 *          GFM pipe tables, ``` fenced code.
 * Inline:  **bold**, *italic*, `code`, [text](url). Literal text (including
 *          square-bracket placeholders) passes through untouched.
 *
 * ponytail: hand-rolled over adding react-markdown + remark-gfm for 8 static
 * files. Upgrade to a library only if we start rendering untrusted or
 * CommonMark-complete Markdown.
 */
export function Markdown({ source }: { source: string }) {
  return <>{renderBlocks(source)}</>;
}

/* ── block level ──────────────────────────────────────────────────────── */

function renderBlocks(src: string): ReactNode[] {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  let key = 0;
  const push = (node: ReactNode) => out.push(<Fragment key={key++}>{node}</Fragment>);

  while (i < lines.length) {
    const line = lines[i];

    // Blank line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Fenced code block
    if (line.startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) buf.push(lines[i++]);
      i++; // closing fence
      push(
        <pre className="my-5 overflow-x-auto rounded-xl bg-[var(--color-neutral-900)] p-4 text-[13px] leading-relaxed text-[var(--color-neutral-50)]">
          <code>{buf.join("\n")}</code>
        </pre>
      );
      continue;
    }

    // Heading
    const h = line.match(/^(#{2,3})\s+(.*)$/);
    if (h) {
      const level = h[1].length; // 2 or 3
      const text = h[2].trim();
      push(level === 2 ? <h2>{inline(text)}</h2> : <h3>{inline(text)}</h3>);
      i++;
      continue;
    }

    // Blockquote (consecutive > lines)
    if (line.startsWith(">")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      push(<blockquote>{renderBlocks(buf.join("\n"))}</blockquote>);
      continue;
    }

    // Table (a | row followed by a |---| separator)
    if (line.includes("|") && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1]) && lines[i + 1].includes("-")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].includes("|")) buf.push(lines[i++]);
      push(renderTable(buf));
      continue;
    }

    // List (consecutive - or 1. items)
    if (/^(\s*)([-*]|\d+\.)\s+/.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && (/^(\s*)([-*]|\d+\.)\s+/.test(lines[i]) || (lines[i].startsWith("    ") && lines[i].trim() !== ""))) {
        buf.push(lines[i++]);
      }
      push(renderList(buf));
      continue;
    }

    // Paragraph (until blank line or next block starter)
    const buf: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith(">") &&
      !lines[i].startsWith("```") &&
      !/^(\s*)([-*]|\d+\.)\s+/.test(lines[i])
    ) {
      buf.push(lines[i++]);
    }
    push(<p>{inline(buf.join(" "))}</p>);
  }

  return out;
}

function renderList(lines: string[]): ReactNode {
  const ordered = /^\s*\d+\.\s+/.test(lines[0]);
  const items: string[] = [];
  for (const line of lines) {
    const m = line.match(/^\s*([-*]|\d+\.)\s+(.*)$/);
    if (m) items.push(m[2]);
    else if (items.length) items[items.length - 1] += " " + line.trim(); // continuation
  }
  const children = items.map((it, idx) => <li key={idx}>{inline(it)}</li>);
  return ordered ? <ol>{children}</ol> : <ul>{children}</ul>;
}

function renderTable(lines: string[]): ReactNode {
  const cells = (row: string) =>
    row
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
  const head = cells(lines[0]);
  const body = lines.slice(2).map(cells);
  return (
    <div className="my-6 overflow-x-auto rounded-xl ring-1 ring-[var(--color-neutral-200)]">
      <table className="w-full min-w-[32rem] border-collapse text-left text-[15px]">
        <thead className="bg-[var(--color-neutral-50)]">
          <tr>
            {head.map((h, j) => (
              <th key={j} scope="col" className="px-4 py-3 font-semibold text-[var(--color-ink)]">
                {inline(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((r, ri) => (
            <tr key={ri} className="border-t border-[var(--color-neutral-200)] align-top">
              {r.map((c, ci) => (
                <td key={ci} className="px-4 py-3 text-[var(--color-ink-muted)]">
                  {inline(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── inline level ─────────────────────────────────────────────────────── */

// Split on the inline tokens we support, innermost handled by recursion.
function inline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Order matters: links first, then code, then bold, then italic.
  const re =
    /\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+?)\*\*|\*([^*]+?)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      nodes.push(
        <a key={key++} href={m[2]} {...externalAttrs(m[2])}>
          {m[1]}
        </a>
      );
    } else if (m[3] !== undefined) {
      nodes.push(
        <code key={key++} className="rounded bg-[var(--color-neutral-100)] px-1.5 py-0.5 text-[0.9em] text-[var(--color-ink)]">
          {m[3]}
        </code>
      );
    } else if (m[4] !== undefined) {
      nodes.push(<strong key={key++}>{m[4]}</strong>);
    } else if (m[5] !== undefined) {
      nodes.push(<em key={key++}>{m[5]}</em>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function externalAttrs(href: string) {
  return /^https?:\/\//.test(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}
