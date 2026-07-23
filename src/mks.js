const lawStatements = [
  "Orientation precedes navigation.",
  "Every recurring outcome has a system behind it.",
  "Clarity compounds.",
  "Energy should never end with the creator.",
  "Great systems become independent of their creator.",
  "Emergence cannot be fully designed; it can be initiated.",
  "Purpose is fulfilled when the reaction sustains itself.",
  "Conserve effort before initiation so the reaction multiplies it.",
  "Value comes from transferred energy.",
  "Reserve human energy for uniquely human work.",
  "Steward the process. Learn from the reaction.",
  "Progress is better measured by capability created than hours consumed."
];

const laws = lawStatements.map((statement, index) => ({
  id: `L-${String(index + 1).padStart(3, "0")}`,
  title: `Meridian Law ${String(index + 1).padStart(3, "0")}`,
  classification: "Law",
  status: "Locked",
  statement,
  purpose: "Provide a durable design test for purposeful human systems.",
  rationale: "A Meridian law is a concise claim intended to be examined in practice, not accepted on authority.",
  validity: "Apply as a design principle when its assumptions match the system and context under examination.",
  applications: ["System design", "Decision review", "Stewardship"],
  examples: ["Use the statement as a test before committing resources or institutionalizing a process."],
  counterexamples: ["Treating the statement as universally binding without examining context."],
  relationships: ["D-001", "M-001"],
  version: "0.5"
}));

const frameworks = [
  ["F-001", "Orientation", "Establish where you stand before deciding where to move.", "Foundation"],
  ["F-002", "Decision Lens", "Evaluate choices against purpose, consequence, and time.", "Foundation"],
  ["F-003", "Thought Pathways", "Make the routes between questions, ideas, and action visible.", "Foundation"],
  ["F-004", "Junction Theory", "Recognize moments when a choice changes the shape of the journey.", "Developing"],
  ["F-005", "Catalyst Model", "Find the minimum necessary action that initiates useful motion.", "Foundation"],
  ["F-006", "Capability Multipliers", "Turn one investment of effort into reusable increases in capacity.", "Developing"],
  ["F-007", "Reflection Loop", "Convert experience into learning that can influence the next cycle.", "Developing"],
  ["F-008", "Discovery Model", "Expose the unknowns that matter before prescribing an answer.", "Seed"],
  ["F-009", "Horizon Model", "Separate the immediate route from longer-range direction.", "Seed"],
  ["F-010", "System Health", "Examine transfer, resilience, feedback, and founder dependence.", "Seed"]
].map(([id, title, statement, status]) => ({
  id, title, statement, status, classification: "Framework",
  purpose: "Make a recurring systems question visible and usable.",
  rationale: "Frameworks translate Meridian doctrine into a structured way of seeing.",
  validity: "Use when the named condition is materially shaping a decision or system.",
  applications: ["Diagnosis", "Planning", "Facilitation"],
  examples: [`Apply ${title} to a live problem, record assumptions, and identify the next useful action.`],
  counterexamples: ["Using the framework as a substitute for observing reality."],
  relationships: ["M-001", "L-001"],
  version: "0.5"
}));

const patterns = [
  ["P-001", "Analysis Paralysis", "More consideration produces less movement."],
  ["P-002", "Founder Dependency", "A system cannot continue without its original creator."],
  ["P-003", "Decision Fatigue", "Repeated low-value choices consume judgment needed elsewhere."],
  ["P-004", "Scope Drift", "The work expands while its original purpose becomes less visible."],
  ["P-005", "Burnout", "Human energy is consumed faster than the system restores or transfers it."],
  ["P-006", "Knowledge Silos", "Useful understanding cannot move to the people who need it."],
  ["P-007", "Perfectionism", "The demand for certainty prevents reality-tested learning."],
  ["P-008", "Trust Erosion", "Unreliable transfer weakens confidence in the system and its people."],
  ["P-009", "Context Switching", "Attention is repeatedly taxed before meaningful work can compound."],
  ["P-010", "Cognitive Debt", "Unresolved decisions and undocumented knowledge create future friction."]
].map(([id, title, statement]) => ({
  id, title, statement, classification: "Pattern", status: "Seed",
  purpose: "Give a recognizable name to a recurring human-system condition.",
  rationale: "People enter the specification through the problem they can recognize.",
  validity: "A seed pattern is a working hypothesis until its symptoms, causes, and interventions are validated.",
  applications: ["Problem recognition", "Diagnosis", "Framework selection"],
  examples: ["Observe repeated symptoms across more than one event before naming the pattern."],
  counterexamples: ["Labeling a person when the pattern belongs to the surrounding system."],
  relationships: ["F-001", "M-001"],
  version: "0.5"
}));

export const mksObjects = [
  {
    id: "D-001", title: "The First Domino", classification: "Doctrine", status: "Locked",
    statement: "The first domino is not part of the pattern. It is the plan that initiates the realization of the pattern.",
    purpose: "Distinguish deliberate initiation from the emergent pattern that follows.",
    rationale: "The first action cannot contain the future. Its value is the useful reaction it makes possible.",
    validity: "Applies where an intentional act is meant to initiate a reaction whose later form will be shaped by reality.",
    applications: ["Product initiation", "Teaching", "Organizational change"],
    examples: ["A working prototype that creates the feedback needed to discover the right product."],
    counterexamples: ["A launch that creates attention but transfers no useful energy to a second action."],
    relationships: ["D-002", "D-003", "F-005"], version: "0.5"
  },
  {
    id: "D-002", title: "Kinetic Purpose", classification: "Doctrine", status: "Foundation",
    statement: "The success of the first domino is measured by the movement it makes possible.",
    purpose: "Move evaluation from the initiating act to the continuity of its transfer.",
    rationale: "An action that ends with itself has produced an event, not a self-sustaining system.",
    validity: "Applies when continuity or multiplication is part of the intended purpose.",
    applications: ["Automation", "Delegation", "Knowledge transfer"],
    examples: ["Documentation that allows another person to perform and improve the work."],
    counterexamples: ["A process that requires the creator to rescue every transfer."],
    relationships: ["D-001", "L-004", "L-007"], version: "0.5"
  },
  {
    id: "D-003", title: "Catalytic Action", classification: "Doctrine", status: "Foundation",
    statement: "Seek the minimum necessary action capable of initiating the greatest beneficial reaction.",
    purpose: "Conserve finite human effort by investing it at the point of highest useful leverage.",
    rationale: "The objective is not minimal effort at any cost; it is sufficient initiating energy without avoidable waste.",
    validity: "Applies where cause, transfer, and feedback can be observed.",
    applications: ["Prioritization", "Automation", "Experiment design"],
    examples: ["Automate the repeated handoff that unlocks several downstream tasks."],
    counterexamples: ["Underinvesting until the reaction cannot reach the second step."],
    relationships: ["F-005", "L-008", "G-001"], version: "0.5"
  },
  ...laws,
  ...frameworks,
  {
    id: "M-001", title: "Meridian Operating Cycle", classification: "Method", status: "Foundation",
    statement: "Observe, orient, discover, design, catalyze, react, reflect, learn, compound, and steward.",
    purpose: "Provide a repeatable operating sequence from reality to sustained capability.",
    rationale: "A healthy cycle uses the reaction as evidence and turns learning into the next orientation.",
    validity: "Stages may overlap, but observation and reflection must not be omitted when uncertainty is material.",
    applications: ["Projects", "Consulting", "AI-assisted work"],
    examples: ["Use one complete cycle to test a small intervention before scaling it."],
    counterexamples: ["Treating the cycle as a rigid checklist that ignores feedback."],
    relationships: ["F-001", "F-005", "F-007"], version: "0.5"
  },
  ...[
    ["I-001", "Meridian Compass", "Tests whether action remains aligned with purpose."],
    ["I-002", "Meridian Sextant", "Uses known references to establish position under uncertainty."],
    ["I-003", "Meridian Horizon", "Distinguishes immediate visibility from longer-range direction."],
    ["I-004", "Meridian Lighthouse", "Makes stable guidance visible at recurring points of risk."],
    ["I-005", "Meridian Cartographer", "Records the route reality revealed so others can navigate it."]
  ].map(([id, title, statement]) => ({
    id, title, statement, classification: "Instrument", status: "Seed",
    purpose: "Provide a practical aid for observing or navigating a system.",
    rationale: "An instrument extends judgment; it does not replace it.",
    validity: "Use only after defining what is being observed and why.",
    applications: ["Workshops", "Reviews", "System navigation"],
    examples: [`Use the ${title} during a structured Meridian cycle.`],
    counterexamples: ["Confusing the instrument's output with reality itself."],
    relationships: ["M-001", "F-001"], version: "0.5"
  })),
  ...patterns,
  {
    id: "G-001", title: "GEN Measurement Standard", classification: "Measurement", status: "Locked",
    statement: "Geniuses (gen) quantifies units of specialized, AI-driven intellectual work completed.",
    purpose: "Make completed intellectual contribution visible without confusing activity with value.",
    rationale: "Hours describe input. GEN describes completed, reviewable work that creates a meaningful, reusable increase in capability, understanding, or value.",
    validity: "Count work only when it is complete enough to review and reuse. GEN measures contribution, never human worth.",
    applications: ["AI work accounting", "Portfolio review", "Capability planning"],
    examples: ["A reusable decision framework delivered in a reviewable form may count as completed GEN."],
    counterexamples: ["Counting prompts, drafts, token volume, or unsupported claims as completed work."],
    relationships: ["G-002", "L-012", "D-003"], version: "0.5"
  },
  {
    id: "G-002", title: "Return on Time", classification: "Measurement", status: "Foundation",
    statement: "RoT equals completed gen divided by human hours invested.",
    purpose: "Estimate how effectively finite human time creates reusable intellectual capability.",
    rationale: "Return on Time connects Meridian's unit of completed work to the human resource its systems are designed to conserve.",
    validity: "Use directionally among comparable kinds of work; never as an isolated measure of quality or human performance.",
    applications: ["Project comparison", "Automation review", "Investment decisions"],
    examples: ["48 completed gen divided by 6 human hours yields 8 gen per hour."],
    counterexamples: ["Optimizing the number while ignoring truth, safety, quality, or downstream cost."],
    relationships: ["G-001", "L-010", "L-012"], version: "0.5"
  }
];

export const classifications = ["All", "Doctrine", "Law", "Framework", "Method", "Instrument", "Pattern", "Measurement"];

export function getObject(id) {
  return mksObjects.find((item) => item.id.toLowerCase() === id.toLowerCase());
}
