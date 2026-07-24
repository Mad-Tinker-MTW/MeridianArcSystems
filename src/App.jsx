import React, { useEffect, useMemo, useState } from "react";
import { applications, classifications, getApplication, getGlossaryTerm, getObject, glossaryTerms, mksObjects, roadmap } from "./mks";

const laws = [
  ["01", "Orientation precedes navigation."],
  ["02", "Every recurring outcome has a system behind it."],
  ["03", "Clarity compounds."],
  ["04", "Energy should never end with the creator."],
  ["05", "Great systems become independent of their creator."],
  ["06", "Emergence cannot be fully designed; it can be initiated."],
  ["07", "Purpose is fulfilled when the reaction sustains itself."],
  ["08", "Conserve effort before initiation so the reaction multiplies it."],
  ["09", "Value comes from transferred energy."],
  ["10", "Reserve human energy for uniquely human work."],
  ["11", "Steward the process. Learn from the reaction."],
  ["12", "Progress is better measured by capability created than hours consumed."]
];

const frameworks = mksObjects.filter((item) => item.classification === "Framework");

const cycle = ["Observe", "Orient", "Discover", "Design", "Catalyze", "React", "Reflect", "Learn", "Compound", "Steward"];

function Mark() {
  return (
    <div className="mark" aria-label="Meridian Arc origin mark">
      <span className="mark-ring ring-one" />
      <span className="mark-ring ring-two" />
      <span className="mark-axis axis-x" />
      <span className="mark-axis axis-y" />
      <span className="mark-origin">0,0</span>
      <span className="mark-arc arc-one" />
      <span className="mark-arc arc-two" />
      <span className="mark-arc arc-three" />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#/mks", "MKS Library"],
    ["#/glossary", "Glossary"],
    ["#/applications", "Applications"],
    ["#/framework-library", "Frameworks"],
    ["#/laws", "Laws"],
    ["#/patterns", "Patterns"],
    ["#/instruments", "Instruments"],
    ["#/roadmap", "Roadmap"]
  ];

  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Meridian Arc home">
        <span className="mini-mark"><i /><i /><i /></span>
        <span><b>MERIDIAN</b> ARC</span>
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
        <span /><span />
      </button>
      <nav className={open ? "open" : ""}>
        {links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#begin" onClick={() => setOpen(false)}>Begin at 0,0</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-stars" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><span /> Meaningful Automation for Society</p>
        <h1>Build the first<br /><em>true</em> domino.</h1>
        <p className="hero-deck">
          We design systems that convert human intent into lasting capability,
          then return time to the people who created it.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#begin">Start at the origin <span>↗</span></a>
          <a className="text-link" href="#specification">Explore the specification <span>→</span></a>
        </div>
        <div className="proof-line">
          <div><strong>v0.5</strong><span>Foundation specification</span></div>
          <div><strong>12</strong><span>Meridian laws</span></div>
          <div><strong>GEN</strong><span>Capability, measured</span></div>
        </div>
      </div>
      <div className="hero-visual">
        <Mark />
        <p className="orbit-label label-a">Purpose</p>
        <p className="orbit-label label-b">Reaction</p>
        <p className="orbit-label label-c">Pattern</p>
        <div className="visual-caption">
          <span>THE ORIGIN PRINCIPLE</span>
          <p>The plan initiates. Reality answers. The pattern emerges.</p>
        </div>
      </div>
      <a href="#origin" className="scroll-cue"><span>Scroll to orient</span><i /></a>
    </section>
  );
}

function Origin() {
  return (
    <section className="origin section" id="origin">
      <div className="section-label">01 / ORIGIN</div>
      <div className="origin-grid">
        <div>
          <p className="kicker">Know where you stand</p>
          <h2>Every journey begins at <span>0,0.</span></h2>
        </div>
        <div className="origin-statement">
          <p>Before direction, there must be orientation.</p>
          <p>Before movement, there must be purpose.</p>
          <p>Before the pattern, there must be a plan strong enough to begin the reaction.</p>
        </div>
      </div>
      <blockquote>
        “The first domino is not part of the pattern. It is the plan that initiates the realization of the pattern.”
        <cite>Founding Principle · Meridian Arc</cite>
      </blockquote>
    </section>
  );
}

function Specification() {
  const [active, setActive] = useState("D");
  const groups = {
    D: { title: "Doctrine", classification: "Doctrine", desc: "Durable principles that establish how Meridian Arc understands systems, time, trust, and purposeful action.", count: "12 laws", examples: ["D-001 · The First Domino", "D-002 · Kinetic Purpose", "D-003 · Catalytic Action"] },
    F: { title: "Frameworks", classification: "Framework", desc: "Structured ways to see a situation clearly, expose its relationships, and prepare intelligent action.", count: "10 registered", examples: ["F-001 · Orientation", "F-003 · Thought Pathways", "F-005 · Catalyst Model"] },
    M: { title: "Methods", classification: "Method", desc: "Repeatable operating sequences that turn understanding into accountable movement and learning.", count: "1 active", examples: ["M-001 · Meridian Operating Cycle", "Observe · Orient · Discover", "Catalyze · Reflect · Compound"] },
    I: { title: "Instruments", classification: "Instrument", desc: "Practical tools for measuring, diagnosing, and navigating real systems without mistaking the map for reality.", count: "5 seeded", examples: ["I-001 · Meridian Compass", "I-002 · Meridian Sextant", "I-003 · Meridian Horizon"] },
    P: { title: "Patterns", classification: "Pattern", desc: "Recurring conditions people recognize in life and work, mapped to the methods that can change them.", count: "10 seeded", examples: ["Analysis Paralysis", "Founder Dependency", "Cognitive Debt"] }
  };
  const item = groups[active];

  return (
    <section className="spec section" id="specification">
      <div className="section-label">02 / THE KNOWLEDGE SYSTEM</div>
      <div className="section-heading">
        <div><p className="kicker">One source of truth</p><h2>Knowledge built<br />to be used.</h2></div>
        <p>The Meridian Knowledge Specification is not a manifesto stored on a shelf. It is a versioned system from which tools, teaching, software, and decisions can be built.</p>
      </div>
      <div className="spec-browser">
        <div className="spec-tabs" role="tablist" aria-label="Specification collections">
          {Object.entries(groups).map(([key, value]) => (
            <button key={key} className={active === key ? "active" : ""} onClick={() => setActive(key)} role="tab" aria-selected={active === key}>
              <b>{key}</b><span>{value.title}</span>
            </button>
          ))}
        </div>
        <div className="spec-panel">
          <div className="panel-meta"><span>COLLECTION {active}</span><span>{item.count}</span></div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <ul>{item.examples.map((example) => <li key={example}><span>↗</span>{example}</li>)}</ul>
          <a className="quiet-button" href={`#/mks?class=${encodeURIComponent(item.classification)}`}>Open collection · v0.5</a>
        </div>
      </div>
    </section>
  );
}

function Reaction() {
  return (
    <section className="reaction section">
      <div className="section-label">03 / THE REACTION</div>
      <div className="reaction-head">
        <div><p className="kicker">From intent to continuity</p><h2>Design for the energy<br />that continues.</h2></div>
        <p>A system succeeds when it carries useful energy beyond the first push. The operating cycle turns each outcome into orientation for the next.</p>
      </div>
      <div className="cycle">
        {cycle.map((step, index) => (
          <div className="cycle-step" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{step}</b>
            <i />
          </div>
        ))}
      </div>
    </section>
  );
}

function Frameworks() {
  return (
    <section className="frameworks section" id="frameworks">
      <div className="section-label">04 / FRAMEWORKS</div>
      <div className="section-heading">
        <div><p className="kicker">Reusable ways of seeing</p><h2>Tools for the<br />moment you are in.</h2></div>
        <p>Frameworks make doctrine operational. Each one identifies inputs, outputs, boundaries, and the conditions under which it is useful.</p>
      </div>
      <div className="framework-grid">
        {frameworks.map((framework, index) => (
          <article key={framework.id} className="linked-card" onClick={() => { window.location.hash = `/mks/${framework.id}`; }}>
            <div className="card-top"><span>{framework.id}</span><span>{framework.status}</span></div>
            <div className={`glyph glyph-${(index % 6) + 1}`}><i /><i /><i /></div>
            <h3>{framework.title}</h3>
            <p>{framework.statement}</p>
            <a className="card-link" href={`#/mks/${framework.id}`}>View specification <b>↗</b></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Metrics() {
  const [gen, setGen] = useState(48);
  const [hours, setHours] = useState(6);
  const rot = useMemo(() => hours > 0 ? (gen / hours).toFixed(2) : "—", [gen, hours]);

  return (
    <section className="metrics section" id="metrics">
      <div className="metrics-copy">
        <div className="section-label">05 / MEASUREMENT</div>
        <p className="kicker">Measure capability, not motion</p>
        <h2>GEN makes<br />intellectual work visible.</h2>
        <p className="large-copy"><strong>Geniuses (gen)</strong> quantifies units of specialized, AI-driven intellectual work completed.</p>
        <p>Work counts when it reaches a completed, reviewable state and creates a meaningful, reusable increase in capability, understanding, or value.</p>
        <div className="formula"><span>RoT</span><b>=</b><span>completed gen</span><b>÷</b><span>human hours</span></div>
      </div>
      <div className="calculator">
        <div className="calc-head"><span>RETURN ON TIME</span><span>LIVE INSTRUMENT</span></div>
        <label>
          <span><b>Completed work</b><output>{gen} gen</output></span>
          <input type="range" min="1" max="200" value={gen} onChange={(e) => setGen(Number(e.target.value))} />
        </label>
        <label>
          <span><b>Human time invested</b><output>{hours} {hours === 1 ? "hour" : "hours"}</output></span>
          <input type="range" min="1" max="40" value={hours} onChange={(e) => setHours(Number(e.target.value))} />
        </label>
        <div className="rot-result">
          <span>RETURN ON TIME</span>
          <strong>{rot}<small> gen / hr</small></strong>
          <p>This is a directional instrument, not a measure of human worth.</p>
        </div>
      </div>
    </section>
  );
}

function Laws() {
  return (
    <section className="laws section">
      <div className="section-label">06 / MERIDIAN LAWS</div>
      <div className="laws-head">
        <div><p className="kicker">Foundation v0.5</p><h2>Twelve statements<br />to build against.</h2></div>
        <p>Not commandments. Testable design principles, each with conditions of validity and an obligation to survive contact with reality.</p>
      </div>
      <div className="law-list">
        {laws.map(([number, law]) => <div key={number}><span>{number}</span><p>{law}</p></div>)}
      </div>
    </section>
  );
}

function Homes() {
  const homes = [
    ["LABS", "Where working systems are tested against real problems.", "Experiments"],
    ["JOURNAL", "What the reaction teaches us, recorded while it is still alive.", "Field notes"],
    ["ACADEMY", "Where knowledge becomes transferable human capability.", "Learning paths"]
  ];
  return (
    <section className="homes section" id="labs">
      <div className="section-label">07 / PLACES FOR THE WORK</div>
      <div className="homes-grid">
        {homes.map(([title, text, label], index) => (
          <article key={title} id={title === "ACADEMY" ? "academy" : undefined}>
            <span className="home-number">0{index + 1}</span>
            <div className={`home-orbit orbit-${index + 1}`}><i /><i /></div>
            <p className="kicker">{label}</p>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="status-chip">Foundation opening</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Begin() {
  return (
    <section className="begin section" id="begin">
      <div className="begin-origin">0,0</div>
      <p className="eyebrow"><span /> The next useful action</p>
      <h2>You do not need the<br />whole pattern to begin.</h2>
      <p>Orient. Choose the first true domino. Watch what reality reveals.</p>
      <a className="button primary" href="#frameworks">Find your framework <span>↗</span></a>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <span className="mini-mark"><i /><i /><i /></span>
        <div><b>MERIDIAN ARC</b><span>Meaningful Automation for Society</span></div>
      </div>
      <div className="footer-links">
        <a href="#/mks">MKS Library</a><a href="#/glossary">Glossary</a><a href="#/applications">Applications</a><a href="#/framework-library">Frameworks</a><a href="#/laws">Laws</a><a href="#/patterns">Patterns</a><a href="#/instruments">Instruments</a><a href="#/roadmap">Roadmap</a>
      </div>
      <div className="footer-bottom">
        <span>Meridian Arc Systems, LLC</span>
        <span>MKS Foundation · v0.5</span>
        <span>Because Your Time Matters.</span>
      </div>
    </footer>
  );
}

function Status({ children }) {
  return <span className={`object-status status-${children.toLowerCase()}`}>{children}</span>;
}

function Library() {
  const hash = typeof window === "undefined" ? "" : window.location.hash;
  const params = new URLSearchParams((hash.split("?")[1] || ""));
  const [query, setQuery] = useState("");
  const [classification, setClassification] = useState(params.get("class") || "All");
  const [status, setStatus] = useState("All");
  const results = useMemo(() => mksObjects.filter((item) => {
    const text = `${item.id} ${item.title} ${item.classification} ${item.status} ${item.statement} ${item.applications.join(" ")}`.toLowerCase();
    return (classification === "All" || item.classification === classification)
      && (status === "All" || item.status === status)
      && text.includes(query.toLowerCase());
  }), [query, classification, status]);

  return (
    <main className="library-page">
      <section className="library-hero">
        <div>
          <p className="eyebrow"><span /> MKS · FOUNDATION v0.5</p>
          <h1>Knowledge with<br /><em>a permanent home.</em></h1>
        </div>
        <p>Search the doctrine, laws, frameworks, methods, instruments, patterns, and measurements that form Meridian Arc’s source of truth.</p>
      </section>
      <section className="library-workspace">
        <aside className="library-sidebar">
          <p className="filter-title">Classification</p>
          {classifications.map((value) => <button className={classification === value ? "active" : ""} key={value} onClick={() => setClassification(value)}><span>{value}</span><b>{value === "All" ? mksObjects.length : mksObjects.filter((x) => x.classification === value).length}</b></button>)}
          <p className="filter-title">Status</p>
          {["All", "Locked", "Foundation", "Developing", "Seed"].map((value) => <button className={status === value ? "active" : ""} key={value} onClick={() => setStatus(value)}><span>{value}</span></button>)}
        </aside>
        <div className="library-results">
          <label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by ID, term, classification, or problem…" /></label>
          <div className="result-meta"><span>{results.length} knowledge objects</span><span>Versioned · Reviewable · Linked</span></div>
          <div className="object-grid">
            {results.map((item) => (
              <a className="object-card" href={`#/mks/${item.id}`} key={item.id}>
                <div><span className="object-id">{item.id}</span><Status>{item.status}</Status></div>
                <p className="object-class">{item.classification}</p>
                <h2>{item.title}</h2>
                <p>{item.statement}</p>
                <span className="open-object">Open specification <b>↗</b></span>
              </a>
            ))}
          </div>
          {!results.length && <div className="empty-result"><h2>No object found.</h2><p>Try a broader term or remove a filter.</p></div>}
        </div>
      </section>
      <section className="library-roadmap">
        <div><p className="kicker">Build status</p><h2>What is real.<br />What comes next.</h2></div>
        <div className="roadmap-list">
          {roadmap.map((item) => <article key={item.phase}><span>{item.phase}</span><strong>{item.count}</strong><p>{item.label}</p><b>{item.status}</b></article>)}
        </div>
      </section>
    </main>
  );
}

function ObjectPage({ item }) {
  if (!item) return <main className="object-page"><section className="empty-result"><h1>Knowledge object not found.</h1><a href="#/mks">Return to the MKS Library</a></section></main>;
  const sections = [
    ["Purpose", item.purpose],
    ["Rationale", item.rationale],
    ["Conditions of validity", item.validity]
  ];
  const hasProtocol = item.steps?.length;
  return (
    <main className="object-page">
      <div className="object-breadcrumb"><a href="#/mks">MKS Library</a><span>→</span><span>{item.id}</span></div>
      <section className="object-masthead">
        <div className="object-meta"><span>{item.classification}</span><Status>{item.status}</Status><span>Version {item.version}</span></div>
        <p className="object-id large">{item.id}</p>
        <h1>{item.title}</h1>
        <blockquote>{item.statement}</blockquote>
      </section>
      <section className="object-body">
        <div className="object-narrative">
          {sections.map(([title, copy]) => <article key={title}><p className="kicker">{title}</p><p>{copy}</p></article>)}
          <article><p className="kicker">Applications</p><ul>{item.applications.map((value) => <li key={value}>{value}</li>)}</ul></article>
          <div className="evidence-grid">
            <article><p className="kicker">Example</p>{item.examples.map((value) => <p key={value}>{value}</p>)}</article>
            <article><p className="kicker">Counterexample</p>{item.counterexamples.map((value) => <p key={value}>{value}</p>)}</article>
          </div>
          {item.symptoms && <section className="pattern-diagnosis">
            <div className="protocol-heading"><p className="kicker">Pattern diagnosis</p><h2>See the system<br />behind the symptom.</h2></div>
            <div className="diagnosis-grid">
              <article><p className="kicker">Observable symptoms</p><ul>{item.symptoms.map((value) => <li key={value}>{value}</li>)}</ul></article>
              <article><p className="kicker">System causes</p><ul>{item.causes.map((value) => <li key={value}>{value}</li>)}</ul></article>
            </div>
            <article className="false-fix"><p className="kicker">Common false fix</p><p>{item.falseFix}</p></article>
            <article className="first-catalyst"><p className="kicker">First catalyst</p><p>{item.catalyst}</p></article>
            <article className="success-signals"><p className="kicker">Success signals</p>{item.successSignals.map((value) => <span key={value}>{value}</span>)}</article>
          </section>}
          {hasProtocol && <section className="protocol">
            <div className="protocol-heading"><p className="kicker">Operating protocol</p><h2>From principle<br />to practice.</h2></div>
            <div className="io-grid">
              <article><p className="kicker">Inputs</p><ul>{item.inputs.map((value) => <li key={value}>{value}</li>)}</ul></article>
              <article><p className="kicker">Outputs</p><ul>{item.outputs.map((value) => <li key={value}>{value}</li>)}</ul></article>
            </div>
            <ol className="protocol-steps">{item.steps.map(([title, copy], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol>
            <article className="decision-checks"><p className="kicker">Decision checks</p>{item.checks.map((value) => <p key={value}>{value}</p>)}</article>
            <article className="gen-evidence"><p className="kicker">GEN evidence</p><p>{item.genEvidence}</p></article>
          </section>}
          {item.worksheet && <InstrumentWorkbench item={item} />}
        </div>
        <aside className="object-relations">
          <p className="filter-title">Relationships</p>
          {item.relationships.map((id) => {
            const related = getObject(id);
            return related ? <a href={`#/mks/${id}`} key={id}><span>{id}</span><b>{related.title}</b></a> : null;
          })}
          <div className="revision"><span>STATUS</span><b>{item.status}</b><span>RELEASE</span><b>MKS v{item.version}</b></div>
        </aside>
      </section>
      <section className="next-object"><a href="#/mks">← Return to all knowledge objects</a></section>
    </main>
  );
}

function InstrumentWorkbench({ item }) {
  const initial = Object.fromEntries(item.worksheet.map(([label, , type]) => [label, type === "scale" ? "3" : ""]));
  const [answers, setAnswers] = useState(initial);
  const completed = item.worksheet.filter(([label]) => String(answers[label] || "").trim()).length;
  const update = (label, value) => setAnswers((current) => ({ ...current, [label]: value }));
  return <section className="workbench">
    <div className="protocol-heading"><p className="kicker">Live worksheet</p><h2>Use the instrument<br />on a real situation.</h2></div>
    <div className="workbench-progress"><span>{completed} / {item.worksheet.length} fields complete</span><i style={{ width: `${(completed / item.worksheet.length) * 100}%` }} /></div>
    <div className="worksheet-fields">
      {item.worksheet.map(([label, prompt, type]) => <label key={label}>
        <span><b>{label}</b><small>{prompt}</small></span>
        {type === "scale" ? <div className="scale-input"><input type="range" min="1" max="5" value={answers[label]} onChange={(event) => update(label, event.target.value)} /><output>{answers[label]} / 5</output></div> : <textarea value={answers[label]} onChange={(event) => update(label, event.target.value)} placeholder="Record evidence, not just an opinion…" rows="3" />}
      </label>)}
    </div>
    <div className="instrument-guidance">
      <article><p className="kicker">Interpretation</p>{item.interpretation.map((value) => <p key={value}>{value}</p>)}</article>
      <article><p className="kicker">Worked example</p><p>{item.workedExample}</p></article>
    </div>
    <button className="reset-workbench" onClick={() => setAnswers(initial)}>Clear worksheet</button>
    <p className="local-note">This working sheet stays in this browser session. Record the completed result in the relevant project system when it becomes evidence.</p>
  </section>;
}

function RoadmapPage() {
  const maturity = ["Operational", "Specified", "Registered"].map((label) => ({ label, count: mksObjects.filter((item) => item.maturity === label).length }));
  return <main className="roadmap-page">
    <section className="roadmap-hero">
      <p className="eyebrow"><span /> BUILD LEDGER · SPRINT 003</p>
      <h1>Progress without<br /><em>pretending.</em></h1>
      <p>Meridian Arc distinguishes an idea with a home from a specification someone can operate. This ledger shows that difference plainly.</p>
    </section>
    <section className="maturity-grid">
      {maturity.map((item) => <article key={item.label}><span>{item.label}</span><strong>{item.count}</strong><p>{item.label === "Operational" ? "Contains an executable protocol." : item.label === "Specified" ? "Has a structured definition but still needs an operating protocol." : "Has a name and purpose; substantive development remains."}</p></article>)}
    </section>
    <section className="roadmap-detail section">
      <div><p className="kicker">Current sequence</p><h2>Build the reaction,<br />not the appearance.</h2></div>
      <div className="roadmap-timeline">
        {roadmap.map((item, index) => <article key={item.phase}><span>0{index + 1}</span><div><p className="kicker">{item.status}</p><h3>{item.phase} · {item.count}</h3><p>{item.label}</p></div></article>)}
      </div>
    </section>
    <section className="roadmap-standard section">
      <p className="kicker">Definition of operational</p>
      <h2>An entry is operational when another person can use it without its creator in the room.</h2>
      <div><span>01 · Defined inputs</span><span>02 · Observable outputs</span><span>03 · Repeatable steps</span><span>04 · Decision checks</span><span>05 · GEN evidence</span></div>
    </section>
  </main>;
}

function LawsPage() {
  const lawObjects = mksObjects.filter((item) => item.classification === "Law");
  return <main className="laws-page">
    <section className="laws-page-hero">
      <p className="eyebrow"><span /> TWELVE OPERATIONAL TESTS</p>
      <h1>Laws meant to<br /><em>survive reality.</em></h1>
      <p>These are not commandments and they do not ask for belief. Each law now states where it applies, where it can fail, and what evidence a steward must examine before using it.</p>
    </section>
    <section className="laws-page-grid">
      {lawObjects.map((law, index) => <a href={`#/mks/${law.id}`} key={law.id}>
        <div><span>{law.id}</span><Status>{law.status}</Status></div>
        <strong>{String(index + 1).padStart(2, "0")}</strong>
        <h2>{law.statement}</h2>
        <p>{law.purpose}</p>
        <div className="law-test"><span>FIRST TEST</span><b>{law.checks[0]}</b></div>
      </a>)}
    </section>
    <section className="law-use-standard section">
      <div><p className="kicker">The obligation</p><h2>Do not quote a law<br />without testing its boundary.</h2></div>
      <div>
        <p><span>01</span> State the situation before selecting the law.</p>
        <p><span>02</span> Use observable evidence, not agreement, as support.</p>
        <p><span>03</span> Record the condition under which the law may not apply.</p>
        <p><span>04</span> Revisit the decision when reality changes.</p>
      </div>
    </section>
  </main>;
}

function PatternsPage() {
  const patternObjects = mksObjects.filter((item) => item.classification === "Pattern");
  return <main className="patterns-page">
    <section className="patterns-hero">
      <p className="eyebrow"><span /> RECOGNIZE BEFORE PRESCRIBING</p>
      <h1>Problems people<br /><em>already know by feel.</em></h1>
      <p>People rarely arrive asking for a framework. They arrive overwhelmed, dependent, exhausted, stalled, or unable to trust the system around them. Patterns are the human entrance to Meridian Arc.</p>
    </section>
    <section className="pattern-index">
      {patternObjects.map((pattern, index) => <a href={`#/mks/${pattern.id}`} key={pattern.id}>
        <span className="pattern-number">{String(index + 1).padStart(2, "0")}</span>
        <div><p className="kicker">{pattern.id} · {pattern.status}</p><h2>{pattern.title}</h2><p>{pattern.statement}</p></div>
        <div className="pattern-catalyst"><span>FIRST CATALYST</span><p>{pattern.catalyst}</p></div>
        <b>↗</b>
      </a>)}
    </section>
    <section className="pattern-principle section">
      <p className="kicker">A boundary worth keeping</p>
      <h2>Name the pattern.<br />Never reduce the person to it.</h2>
      <p>Meridian patterns describe recurring conditions produced by systems. They are hypotheses to examine, not labels to attach to human beings.</p>
    </section>
  </main>;
}

function InstrumentsPage() {
  const instruments = mksObjects.filter((item) => item.classification === "Instrument");
  return <main className="instruments-page">
    <section className="instruments-hero">
      <p className="eyebrow"><span /> JUDGMENT, EXTENDED</p>
      <h1>Five instruments.<br /><em>Built to be used.</em></h1>
      <p>An instrument does not replace judgment. It makes evidence, position, direction, guidance, or learning visible enough for judgment to improve.</p>
    </section>
    <section className="instrument-grid">
      {instruments.map((item, index) => <a href={`#/mks/${item.id}`} key={item.id}>
        <div className={`instrument-glyph instrument-${index + 1}`}><i /><i /><i /></div>
        <p className="kicker">{item.id} · LIVE WORKSHEET</p>
        <h2>{item.title}</h2>
        <p>{item.statement}</p>
        <span>{item.worksheet.length} evidence fields <b>↗</b></span>
      </a>)}
    </section>
    <section className="instrument-rule section"><p className="kicker">Instrument rule</p><h2>The reading informs the steward.<br />The steward remains responsible.</h2></section>
  </main>;
}

function FrameworkLibraryPage() {
  const bands = [
    ["SEE", ["F-001", "F-003", "F-008"], "Establish position, expose reasoning, and discover what matters."],
    ["DECIDE", ["F-002", "F-004"], "Choose with purpose and recognize the junctions that change the route."],
    ["INITIATE", ["F-005", "F-006"], "Start useful motion and turn effort into reusable capability."],
    ["LEARN", ["F-007", "F-009"], "Let reality update the route without losing long-range direction."],
    ["SUSTAIN", ["F-010"], "Examine whether the system can transfer, recover, learn, and continue."]
  ];
  return <main className="framework-library-page">
    <section className="framework-library-hero">
      <p className="eyebrow"><span /> TEN OPERATIONAL FRAMEWORKS</p>
      <h1>Ways of seeing<br /><em>that lead to action.</em></h1>
      <p>Each framework now includes defined inputs, outputs, repeatable steps, decision checks, GEN evidence, and a live canvas. Pick the situation you are in and begin there.</p>
    </section>
    <section className="framework-bands">
      {bands.map(([band, ids, copy], bandIndex) => <article key={band}>
        <header><span>0{bandIndex + 1}</span><div><p className="kicker">{band}</p><p>{copy}</p></div></header>
        <div>
          {ids.map((id) => {
            const item = getObject(id);
            return <a href={`#/mks/${id}`} key={id}>
              <span>{item.id}</span><h2>{item.title}</h2><p>{item.statement}</p><b>{item.worksheet?.length || 0} canvas fields ↗</b>
            </a>;
          })}
        </div>
      </article>)}
    </section>
    <section className="framework-rule section"><p className="kicker">Framework rule</p><h2>A framework is a disciplined question.<br />Reality still provides the answer.</h2></section>
  </main>;
}

function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(glossaryTerms.map((item) => item.category)))];
  const results = glossaryTerms.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const haystack = `${item.term} ${item.category} ${item.definition} ${item.distinction}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  });
  return <main className="glossary-page">
    <section className="glossary-hero">
      <div><p className="eyebrow"><span /> MERIDIAN LANGUAGE STANDARD</p><h1>Words that keep<br /><em>the system coherent.</em></h1></div>
      <p>Twenty-seven permanent definitions establish what Meridian means—and what it does not mean—before the language is reused in software, teaching, or decisions.</p>
    </section>
    <section className="glossary-tools">
      <label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search term, definition, or distinction…" aria-label="Search glossary" /></label>
      <div className="glossary-filters">{categories.map((value) => <button key={value} className={category === value ? "active" : ""} onClick={() => setCategory(value)}>{value}<b>{value === "All" ? glossaryTerms.length : glossaryTerms.filter((item) => item.category === value).length}</b></button>)}</div>
      <p className="result-meta"><span>{results.length} terms shown</span><span>MKS v0.5 · Foundation language</span></p>
    </section>
    <section className="glossary-grid">
      {results.map((item, index) => <a href={`#/glossary/${item.slug}`} key={item.slug}>
        <div><span>{String(index + 1).padStart(2, "0")}</span><b>{item.category}</b></div>
        <h2>{item.term}</h2><p>{item.definition}</p><strong>Open definition ↗</strong>
      </a>)}
    </section>
    {!results.length && <section className="empty-result"><h2>No term found.</h2><p>Try a broader word or remove the category filter.</p></section>}
  </main>;
}

function GlossaryTermPage({ item }) {
  if (!item) return <main className="glossary-term-page"><section className="empty-result"><h1>Glossary term not found.</h1><a href="#/glossary">Return to the glossary</a></section></main>;
  return <main className="glossary-term-page">
    <div className="object-breadcrumb"><a href="#/glossary">Glossary</a><span>→</span><span>{item.term}</span></div>
    <section className="term-masthead"><p className="kicker">{item.category} · {item.status} · v{item.version}</p><h1>{item.term}</h1><p>{item.definition}</p></section>
    <section className="term-body">
      <div>
        <article><p className="kicker">Critical distinction</p><h2>{item.distinction}</h2></article>
        <article><p className="kicker">In practice</p><p>{item.example}</p></article>
      </div>
      <aside>
        <p className="filter-title">Related terms</p>
        {item.relatedTerms.map((slug) => {
          const related = getGlossaryTerm(slug);
          return <a href={`#/glossary/${slug}`} key={slug}><span>GLOSSARY</span><b>{related.term}</b></a>;
        })}
        <p className="filter-title object-links-title">Specification links</p>
        {item.relatedObjects.map((id) => {
          const related = getObject(id);
          return related ? <a href={`#/mks/${id}`} key={id}><span>{id}</span><b>{related.title}</b></a> : null;
        })}
      </aside>
    </section>
    <section className="next-object"><a href="#/glossary">← Return to all glossary terms</a></section>
  </main>;
}

function ApplicationsPage() {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("All");
  const domains = ["All", ...Array.from(new Set(applications.map((item) => item.domain)))];
  const results = applications.filter((item) => {
    const text = `${item.id} ${item.title} ${item.domain} ${item.situation} ${item.diagnosis}`.toLowerCase();
    return (domain === "All" || item.domain === domain) && text.includes(query.toLowerCase());
  });
  return <main className="applications-page">
    <section className="applications-hero">
      <div><p className="eyebrow"><span /> THE ATLAS · 25 WORKED APPLICATIONS</p><h1>Where principle<br /><em>meets consequence.</em></h1></div>
      <p>Each application begins with a recognizable situation and follows the reaction through diagnosis, catalyst, evidence, risk, and completed GEN.</p>
    </section>
    <section className="application-tools">
      <label className="search-box"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search situation, domain, or diagnosis…" aria-label="Search applications" /></label>
      <div className="application-domains">{domains.map((value) => <button key={value} className={domain === value ? "active" : ""} onClick={() => setDomain(value)}>{value}<b>{value === "All" ? applications.length : applications.filter((item) => item.domain === value).length}</b></button>)}</div>
      <p className="result-meta"><span>{results.length} applications shown</span><span>Eight domains · Worked foundation</span></p>
    </section>
    <section className="application-grid">
      {results.map((item) => <a href={`#/applications/${item.id}`} key={item.id}>
        <div><span>{item.id}</span><b>{item.domain}</b></div><h2>{item.title}</h2><p>{item.situation}</p>
        <strong><span>First catalyst</span>{item.catalyst}</strong><em>Open application ↗</em>
      </a>)}
    </section>
    {!results.length && <section className="empty-result"><h2>No application found.</h2><p>Try a broader phrase or remove the domain filter.</p></section>}
  </main>;
}

function ApplicationPage({ item }) {
  if (!item) return <main className="application-page"><section className="empty-result"><h1>Application not found.</h1><a href="#/applications">Return to applications</a></section></main>;
  return <main className="application-page">
    <div className="object-breadcrumb"><a href="#/applications">Applications</a><span>→</span><span>{item.id}</span></div>
    <section className="application-masthead"><div><p className="kicker">{item.id} · {item.domain} · {item.status}</p><h1>{item.title}</h1></div><p>{item.situation}</p></section>
    <section className="application-sequence">
      <article><span>01</span><div><p className="kicker">Meridian diagnosis</p><h2>{item.diagnosis}</h2></div></article>
      <article><span>02</span><div><p className="kicker">First catalyst</p><h2>{item.catalyst}</h2></div></article>
      <article><span>03</span><div><p className="kicker">Expected reaction</p><h2>{item.reaction}</h2></div></article>
    </section>
    <section className="application-evidence">
      <div><p className="kicker">Evidence to observe</p>{item.evidence.map((value) => <p key={value}><span>↗</span>{value}</p>)}</div>
      <div><p className="kicker">Risk and boundary</p><p>{item.risks}</p></div>
      <div><p className="kicker">GEN completion standard</p><p>{item.genStandard}</p></div>
    </section>
    <ApplicationWorkbench item={item} />
    <section className="application-related"><p className="kicker">Specification behind this application</p><div>{item.relatedObjects.map((id) => { const related = getObject(id); return related ? <a href={`#/mks/${id}`} key={id}><span>{id}</span><b>{related.title}</b><em>↗</em></a> : null; })}</div></section>
    <section className="next-object"><a href="#/applications">← Return to all applications</a></section>
  </main>;
}

function ApplicationWorkbench({ item }) {
  const fields = [["Observed situation", "What evidence shows this situation exists?"], ["System boundary", "What people, process, and period are included?"], ["Chosen catalyst", "Use the proposed catalyst or record a better bounded action."], ["Reaction signal", "What observable second action will prove transfer?"], ["Steward and review", "Who watches consequences, and when will they review?"]];
  const initial = Object.fromEntries(fields.map(([label]) => [label, ""]));
  const [answers, setAnswers] = useState(initial);
  const completed = fields.filter(([label]) => answers[label].trim()).length;
  return <section className="application-workbench">
    <div><p className="kicker">Apply it to your situation</p><h2>Turn the worked case<br />into a bounded test.</h2><p>{completed} / {fields.length} evidence fields complete</p></div>
    <div>{fields.map(([label, prompt]) => <label key={label}><span><b>{label}</b><small>{prompt}</small></span><textarea rows="3" value={answers[label]} onChange={(event) => setAnswers((current) => ({...current, [label]: event.target.value}))} placeholder="Record observable evidence…" /></label>)}</div>
    <button onClick={() => setAnswers(initial)}>Clear application canvas</button>
    <p className="local-note">This canvas stays in this browser session. Preserve a completed result in the system where the work is stewarded.</p>
  </section>;
}

export default function App() {
  const [route, setRoute] = useState("#/");
  useEffect(() => {
    const update = () => { setRoute(window.location.hash || "#/"); window.scrollTo(0, 0); };
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  const path = route.slice(1).split("?")[0];
  const objectId = path.match(/^\/mks\/([^/]+)$/)?.[1];
  const glossarySlug = path.match(/^\/glossary\/([^/]+)$/)?.[1];
  const applicationId = path.match(/^\/applications\/([^/]+)$/)?.[1];
  if (objectId) return <><Header /><ObjectPage item={getObject(decodeURIComponent(objectId))} /><Footer /></>;
  if (glossarySlug) return <><Header /><GlossaryTermPage item={getGlossaryTerm(decodeURIComponent(glossarySlug))} /><Footer /></>;
  if (applicationId) return <><Header /><ApplicationPage item={getApplication(decodeURIComponent(applicationId))} /><Footer /></>;
  if (path === "/mks") return <><Header /><Library /><Footer /></>;
  if (path === "/glossary") return <><Header /><GlossaryPage /><Footer /></>;
  if (path === "/applications") return <><Header /><ApplicationsPage /><Footer /></>;
  if (path === "/framework-library") return <><Header /><FrameworkLibraryPage /><Footer /></>;
  if (path === "/laws") return <><Header /><LawsPage /><Footer /></>;
  if (path === "/patterns") return <><Header /><PatternsPage /><Footer /></>;
  if (path === "/instruments") return <><Header /><InstrumentsPage /><Footer /></>;
  if (path === "/roadmap") return <><Header /><RoadmapPage /><Footer /></>;
  return <><Header /><main><Hero /><Origin /><Specification /><Reaction /><Frameworks /><Metrics /><Laws /><Homes /><Begin /></main><Footer /></>;
}
