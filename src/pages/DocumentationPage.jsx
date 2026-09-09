const CONTENTS = [
  "Getting Started",
  "CPU Architecture",
  "Fetch-Decode-Execute",
  "Instruction Set",
  "ALU (Arithmetic Logic Unit)",
  "Registers",
  "Memory",
  "Cache Hierarchy",
  "Performance Analysis",
  "Running a Program",
  "Controls & Interface"
];

const INSTRUCTIONS = [
  ["0001", "LOAD", "LOAD R1, [M]", "Load value from memory M into register R1"],
  ["0010", "STORE", "STORE R1, [M]", "Store value from register R1 into memory M"],
  ["0011", "MOV", "MOV R1, R2", "Move value from R2 to R1"],
  ["0100", "ADD", "ADD R1, R2, R3", "R1 ← R2 + R3"],
  ["0101", "SUB", "SUB R1, R2, R3", "R1 ← R2 − R3"],
  ["0110", "AND", "AND R1, R2, R3", "Bitwise AND operation"],
  ["0111", "OR", "OR R1, R2, R3", "Bitwise OR operation"]
];

export default function DocumentationPage() {
  return (
    <section className="documentation-page">
      <aside className="docs-contents">
        <p>Contents</p>
        <nav>
          {CONTENTS.map((item, index) => (
            <a key={item} className={index === 0 ? "active" : ""} href={`#${item.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <article className="docs-article">
        <header className="docs-heading" id="getting-started">
          <span>Documentation</span>
          <h1>ArchSim Documentation</h1>
          <p>
            Welcome to the official documentation for ArchSim, a high-fidelity computer architecture
            simulator designed for academic and technical analysis. This guide covers everything from
            basic CPU components to advanced cache performance metrics.
          </p>
        </header>

        <div className="docs-callout">
          <div className="callout-icon">!</div>
          <div>
            <h3>Getting Started Tip</h3>
            <p>
              For your first run, navigate to the <strong>Instruction Execution</strong> tab, load the
              sample program, and use the “Step” function to observe data flowing through the data paths.
            </p>
          </div>
        </div>

        <section className="docs-section" id="instruction-set">
          <h2>Instruction Set Architecture (ISA)</h2>
          <p>
            ArchSim implements a simplified RISC-like instruction set. Instructions are 16-bit wide,
            with opcodes occupying the most significant 4 bits.
          </p>
          <div className="docs-table-wrap">
            <table className="docs-table">
              <thead><tr><th>Opcode</th><th>Mnemonic</th><th>Syntax</th><th>Description</th></tr></thead>
              <tbody>
                {INSTRUCTIONS.map(row => (
                  <tr key={row[0]}>{row.map((cell, index) => <td key={cell} className={index < 3 ? "code-cell" : ""}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </section>
  );
}
