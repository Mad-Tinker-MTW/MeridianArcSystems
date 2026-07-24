import React, { useEffect, useMemo, useState } from "react";
import { classifications, getObject, mksObjects, roadmap } from "./mks";

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

const frameworks = [
  { id: "F-001", name: "Orientation", text: "Establish where you stand before deciding where to move.", status: "Foundation" },
  { id: "F-002", name: "Decision Lens", text: "Evaluate choices against purpose, consequence, and time.", status: "Foundation" },
  { id: "F-003", name: "Thought Pathways", text: "Make the routes between questions, ideas, and action visible.", status: "Foundation" },
  { id: "F-004", name: "Junction Theory", text: "Recognize moments when a choice changes the shape of the journey.", status: "Developing" },
  { id: "F-005", name: "Catalyst Model", text: "Find the minimum necessary action that initiates useful motion.", status: "Foundation" },
  { id: "F-006", name: "Capability Multipliers", text: "Turn one investment of effort into reusable increases in capacity.", status: "Developing" }
];

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
    ["#/roadmap", "Roadmap"],
    ["#specification", "Specification"],
    ["#frameworks", "Frameworks"],
    ["#metrics", "Metrics"],
    ["#labs", "Labs"],
    ["#academy", "Academy"]
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
            <div className={`glyph glyph-${index + 1}`}><i /><i /><i /></div>
            <h3>{framework.name}</h3>
            <p>{framework.text}</p>
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
        <a href="#/mks">MKS Library</a><a href="#/roadmap">Roadmap</a><a href="#specification">Specification</a><a href="#frameworks">Frameworks</a><a href="#metrics">Metrics</a><a href="#labs">Labs</a><a href="#academy">Academy</a>
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

export default function App() {
  const [route, setRoute] = useState(typeof window === "undefined" ? "#/" : (window.location.hash || "#/"));
  useEffect(() => {
    const update = () => { setRoute(window.location.hash || "#/"); window.scrollTo(0, 0); };
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  const path = route.slice(1).split("?")[0];
  const objectId = path.match(/^\/mks\/([^/]+)$/)?.[1];
  if (objectId) return <><Header /><ObjectPage item={getObject(decodeURIComponent(objectId))} /><Footer /></>;
  if (path === "/mks") return <><Header /><Library /><Footer /></>;
  if (path === "/roadmap") return <><Header /><RoadmapPage /><Footer /></>;
  return <><Header /><main><Hero /><Origin /><Specification /><Reaction /><Frameworks /><Metrics /><Laws /><Homes /><Begin /></main><Footer /></>;
}
