import React, { useMemo, useState } from "react";

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
    D: { title: "Doctrine", desc: "Durable principles that establish how Meridian Arc understands systems, time, trust, and purposeful action.", count: "12 laws", examples: ["D-001 · The First Domino", "D-002 · Kinetic Purpose", "D-003 · Catalytic Action"] },
    F: { title: "Frameworks", desc: "Structured ways to see a situation clearly, expose its relationships, and prepare intelligent action.", count: "10 registered", examples: ["F-001 · Orientation", "F-003 · Thought Pathways", "F-005 · Catalyst Model"] },
    M: { title: "Methods", desc: "Repeatable operating sequences that turn understanding into accountable movement and learning.", count: "1 active", examples: ["M-001 · Meridian Operating Cycle", "Observe · Orient · Discover", "Catalyze · Reflect · Compound"] },
    I: { title: "Instruments", desc: "Practical tools for measuring, diagnosing, and navigating real systems without mistaking the map for reality.", count: "5 seeded", examples: ["I-001 · Meridian Compass", "I-002 · Meridian Sextant", "I-003 · Meridian Horizon"] },
    P: { title: "Patterns", desc: "Recurring conditions people recognize in life and work, mapped to the methods that can change them.", count: "10 seeded", examples: ["Analysis Paralysis", "Founder Dependency", "Cognitive Debt"] }
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
          <button className="quiet-button">Collection preview · v0.5</button>
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
          <article key={framework.id}>
            <div className="card-top"><span>{framework.id}</span><span>{framework.status}</span></div>
            <div className={`glyph glyph-${index + 1}`}><i /><i /><i /></div>
            <h3>{framework.name}</h3>
            <p>{framework.text}</p>
            <span className="card-link">View specification <b>↗</b></span>
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
        <a href="#specification">Specification</a><a href="#frameworks">Frameworks</a><a href="#metrics">Metrics</a><a href="#labs">Labs</a><a href="#academy">Academy</a>
      </div>
      <div className="footer-bottom">
        <span>Meridian Arc Systems, LLC</span>
        <span>MKS Foundation · v0.5</span>
        <span>Because Your Time Matters.</span>
      </div>
    </footer>
  );
}

export default function App() {
  return <><Header /><main><Hero /><Origin /><Specification /><Reaction /><Frameworks /><Metrics /><Laws /><Homes /><Begin /></main><Footer /></>;
}
