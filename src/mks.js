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

const rawObjects = [
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

const operationalSpecs = {
  "D-001": {
    inputs: ["A purpose worth initiating", "A defined first transfer", "A real recipient or responding system"],
    outputs: ["An observable second action", "Evidence about the emerging pattern", "A decision to continue, adapt, or stop"],
    steps: [
      ["Name the reaction", "State what should begin moving after the initiating act."],
      ["Identify the second domino", "Define the first observable transfer that proves initiation occurred."],
      ["Place the minimum true action", "Build only enough to make the transfer possible and reviewable."],
      ["Observe without defending", "Record what reality does, including resistance and unexpected movement."],
      ["Decide from evidence", "Continue, alter, or retire the plan based on the reaction—not attachment."]
    ],
    checks: ["Can the intended second action be observed?", "Does the first action transfer useful energy?", "Will the reaction teach us something we could not know in planning?"],
    genEvidence: "Count completed GEN only for the reviewable initiating artifact and the recorded learning it produces—not for intention alone."
  },
  "D-002": {
    inputs: ["A completed initiating action", "An intended transfer", "An observable downstream actor or event"],
    outputs: ["A transfer assessment", "A continuity decision", "A documented point of energy loss"],
    steps: [
      ["Trace the transfer", "Follow the work beyond the creator to the next actor or system."],
      ["Locate the stop", "Find where movement weakens, waits, or returns for rescue."],
      ["Strengthen the handoff", "Add the smallest condition that makes the next action reliable."],
      ["Test continuity", "Remove the initiator temporarily and observe whether useful motion continues."]
    ],
    checks: ["Did value reach a second participant?", "Can the transfer be repeated?", "Does the system still require avoidable rescue?"],
    genEvidence: "GEN is evidenced by a completed handoff that another person or system can review and reuse."
  },
  "D-003": {
    inputs: ["A desired beneficial reaction", "Candidate initiating actions", "Constraints on human time and risk"],
    outputs: ["A selected catalyst", "A bounded test", "A stop or scale condition"],
    steps: [
      ["Define beneficial", "Name who benefits, how, and what harm must be avoided."],
      ["List candidate catalysts", "Identify actions that could reach the first necessary transfer."],
      ["Compare leverage", "Estimate transfer potential, required effort, reversibility, and learning."],
      ["Run the smallest sufficient test", "Invest enough energy to produce a credible reaction."],
      ["Scale only after transfer", "Increase investment when evidence shows the reaction can carry it."]
    ],
    checks: ["Is the action sufficient, not merely small?", "Is the expected reaction beneficial and observable?", "Can the test be stopped or corrected?"],
    genEvidence: "Record the delivered catalyst, the human time invested, and the completed capability produced."
  },
  "F-001": {
    inputs: ["Current reality", "Desired destination", "Known constraints", "Available references"],
    outputs: ["A current-position statement", "A confidence level", "The next orientation question"],
    steps: [
      ["Observe position", "Describe present conditions without prescribing movement."],
      ["Separate known from assumed", "Mark evidence, interpretation, and unknowns distinctly."],
      ["Choose references", "Use stable facts or trusted signals to establish position."],
      ["State orientation", "Summarize where the system stands and how certain that statement is."],
      ["Authorize navigation", "Move only when orientation is sufficient for the risk involved."]
    ],
    checks: ["What do we know directly?", "Which assumption would most change the route?", "Is our confidence appropriate to the consequence?"],
    genEvidence: "A completed orientation brief counts when its evidence, assumptions, and next question are reviewable."
  },
  "F-002": {
    inputs: ["A real choice", "Purpose", "Candidate options", "Consequences and time horizon"],
    outputs: ["A decision record", "A stated tradeoff", "A review condition"],
    steps: [
      ["Restate purpose", "Define what the decision is meant to protect or create."],
      ["Name viable options", "Include the option to wait or do nothing when it is real."],
      ["Examine consequence", "Consider immediate, transferred, and delayed effects."],
      ["Test time", "Ask whether the decision conserves or consumes future human attention."],
      ["Commit and review", "Choose, record why, and define what evidence could reopen it."]
    ],
    checks: ["Does this serve the stated purpose?", "Who inherits the consequence?", "What future attention does this choice create or remove?"],
    genEvidence: "A decision counts as completed work when the choice, rationale, owner, and review condition are recorded."
  },
  "F-005": {
    inputs: ["A desired reaction", "The first required transfer", "Available energy", "Failure boundaries"],
    outputs: ["A catalyst hypothesis", "A minimum sufficient action", "Reaction measures"],
    steps: [
      ["Define the reaction", "Describe continued movement, not just the first event."],
      ["Find the transfer point", "Identify what must move from the catalyst to the next element."],
      ["Set sufficient energy", "Determine the least effort credible enough to reach that transfer."],
      ["Instrument the reaction", "Choose signals for movement, learning, harm, and continuity."],
      ["Release and steward", "Initiate, observe, and intervene only where evidence requires it."]
    ],
    checks: ["What exactly receives the transferred energy?", "How will we know the reaction is carrying itself?", "What condition requires intervention or shutdown?"],
    genEvidence: "GEN is completed when the catalyst and its measured reaction are delivered in a reviewable form."
  },
  "M-001": {
    inputs: ["A meaningful situation", "A responsible steward", "A bounded cycle", "A place to record evidence"],
    outputs: ["A reality-tested intervention", "A learning record", "A stronger next orientation"],
    steps: [
      ["Observe", "Attend to reality before naming the answer."],
      ["Orient", "Establish position, references, purpose, and uncertainty."],
      ["Discover", "Find the unknowns and relationships that materially shape action."],
      ["Design", "Create a bounded response with explicit transfer and feedback."],
      ["Catalyze", "Apply the minimum necessary initiating energy."],
      ["React", "Allow the system and reality to answer."],
      ["Reflect", "Compare intent, action, and observed consequence."],
      ["Learn", "Turn evidence into a change in understanding or capability."],
      ["Compound", "Make the useful learning reusable."],
      ["Steward", "Protect continuity and begin the next cycle from stronger orientation."]
    ],
    checks: ["What did reality reveal?", "What capability now exists that did not exist before?", "What should the next cycle inherit?"],
    genEvidence: "Close the cycle with a reviewable artifact, completed GEN, human time invested, RoT, and the capability transferred."
  },
  "G-001": {
    inputs: ["A completed intellectual artifact", "Review evidence", "A reuse or capability claim"],
    outputs: ["A GEN record", "An evidence link", "A classification of contribution"],
    steps: [
      ["Confirm completion", "The artifact must be usable and reviewable in its current state."],
      ["Name specialization", "Identify the domain-specific intellectual work performed."],
      ["Test meaningfulness", "State the capability, understanding, or value that increased."],
      ["Test reusability", "Show how the result can inform or enable future work."],
      ["Record GEN", "Log the unit estimate with evidence and reviewer context."]
    ],
    checks: ["Is there a completed artifact?", "Can another person review the claimed contribution?", "Does it create reusable capability rather than temporary activity?"],
    genEvidence: "The GEN record must cite the completed artifact and explain the increase in capability, understanding, or value."
  },
  "G-002": {
    inputs: ["Completed GEN", "Human hours directly invested", "Comparable work context"],
    outputs: ["RoT in gen per human hour", "A scope note", "A decision-use warning"],
    steps: [
      ["Set the boundary", "Define which completed work and human time belong to the comparison."],
      ["Validate GEN", "Use only completed, reviewable GEN records."],
      ["Count human time", "Include direct human attention required to produce and review the result."],
      ["Calculate", "Divide completed GEN by invested human hours."],
      ["Interpret carefully", "Use the result with quality, risk, and downstream cost—not alone."]
    ],
    checks: ["Are the compared scopes similar?", "Was review time included?", "Could a higher number be hiding lower quality or transferred cost?"],
    genEvidence: "Preserve the numerator, denominator, scope, and date so the calculation can be reviewed."
  }
};

const lawDetails = [
  ["L-001", "Prevent movement based on a false understanding of position.", "Direction is meaningful only in relation to a known starting point, reference, and purpose.", "The required depth of orientation increases with novelty, uncertainty, irreversibility, and consequence.", "A team verifies the actual failure state before choosing a repair.", "Repeating a familiar emergency response when the environment has materially changed.", ["Incident response", "Strategy", "Personal decisions"], ["F-001", "M-001"], ["What position are we actually in?", "Which reference establishes that position?", "What uncertainty could change the route?"]],
  ["L-002", "Reveal the structure producing a repeated result.", "When an outcome recurs, attention should move from the latest event to the conditions that reliably recreate it.", "A single event may be accidental; repetition and shared causes must be established before inferring a system.", "Repeated late approvals are traced to unclear ownership and a serial handoff.", "Blaming the last person in the chain while preserving the conditions that guarantee another delay.", ["Operations", "Quality", "Organizational diagnosis"], ["P-004", "F-010"], ["What recurs?", "Which conditions remain present each time?", "What change would alter the recurrence?"]],
  ["L-003", "Make understanding reusable so each cycle starts from a stronger position.", "Clear definitions, decisions, and records reduce repeated interpretation and allow learning to accumulate.", "Clarity must remain connected to reality; oversimplification can compound error just as easily.", "A documented decision record prevents the same unresolved debate from consuming the next meeting.", "Producing polished documentation that hides uncertainty or is never used.", ["Documentation", "Teaching", "Decision systems"], ["F-003", "P-010"], ["Can another person use this without reinterpretation?", "What ambiguity was removed?", "What future work becomes easier?"]],
  ["L-004", "Ensure useful knowledge, capability, and responsibility move beyond their source.", "Creation becomes durable only when value can reach a second steward, learner, or system.", "Some responsibilities must remain with their accountable owner; transfer does not mean abandonment.", "A technician records and teaches a diagnostic method another technician can improve.", "A founder completes every critical task personally and calls the dependence quality control.", ["Knowledge transfer", "Leadership", "Automation"], ["D-002", "P-002"], ["What receives the energy next?", "What can the recipient now do?", "Where does transfer stop?"]],
  ["L-005", "Use independence from the creator as evidence of successful system design.", "A durable system preserves purpose and capability without requiring continuous rescue from its originator.", "Independent does not mean ungoverned; high-risk systems still require accountable oversight and maintenance.", "A service continues reliably during the founder’s absence because authority and knowledge have transferred.", "Removing expert oversight from a hazardous process merely to claim autonomy.", ["Succession", "Product design", "Team capability"], ["P-002", "F-006"], ["Can the system continue without its creator present?", "What oversight remains legitimately necessary?", "Is dependency intentional or accidental?"]],
  ["L-006", "Create conditions for beneficial emergence without pretending to control every outcome.", "Novel patterns arise through interaction with reality; plans can shape conditions but cannot contain all future responses.", "Where safety, law, or irreversible harm demands control, emergence must remain bounded by explicit constraints.", "A prototype is released to a bounded group to reveal uses the designers could not predict.", "Calling preventable chaos ‘emergence’ after omitting basic safeguards.", ["Innovation", "Research", "Community design"], ["D-001", "D-003"], ["Which conditions are designed?", "What remains open to discovery?", "What boundaries protect against unacceptable harm?"]],
  ["L-007", "Evaluate purpose through sustained consequence rather than ceremonial completion.", "An initiating act fulfills its purpose only when the intended value transfers and continues.", "Some actions are legitimately complete in one event; continuity must be part of the stated purpose before applying this test.", "Training succeeds when learners can perform and teach the capability afterward.", "Counting attendance as success when no capability changes.", ["Education", "Change programs", "Automation"], ["D-002", "M-001"], ["What continuation was intended?", "Did the next actor move?", "How long must the reaction persist to count?"]],
  ["L-008", "Preserve human energy for stewardship by investing only the force initiation truly requires.", "Excess effort before evidence creates waste; insufficient effort creates a false test that cannot reach transfer.", "Minimum necessary effort is constrained by credibility, safety, quality, and the energy required to reach the second action.", "A team builds the smallest reliable integration that can complete a real handoff.", "Shipping a fragile demonstration and interpreting its failure as proof that the idea is wrong.", ["Experiment design", "Prioritization", "Automation"], ["D-003", "F-005"], ["What is the first required transfer?", "What is the least credible energy needed to reach it?", "Which effort can wait for evidence?"]],
  ["L-009", "Locate value in movement that creates capability beyond the original act.", "Stored expertise and completed work become socially useful when they reach another context, person, or process.", "Not every transfer creates value; distortion, coercion, or transferred burden can destroy it.", "A reusable template lets many teams perform work that previously required a specialist.", "Automating a task by shifting hidden correction work onto customers.", ["Product design", "Knowledge systems", "Service operations"], ["D-002", "G-001"], ["What moved?", "Who gained capability?", "Was cost or burden merely displaced?"]],
  ["L-010", "Protect finite human attention for work requiring human purpose, judgment, creativity, compassion, and stewardship.", "Repeated mechanical demands consume the same life resource needed for meaning and accountable choice.", "Automation must not remove human judgment where dignity, ambiguity, consent, safety, or accountability requires it.", "Routine reconciliation is automated while a person reviews exceptions and consequences.", "Using automation to deny a person meaningful explanation or appeal.", ["Responsible automation", "Work design", "Service delivery"], ["G-002", "P-003"], ["What uniquely human capacity should be protected?", "Which judgment must remain accountable?", "Whose time is actually being conserved?"]],
  ["L-011", "Make observation and learning part of responsible system stewardship.", "Plans are hypotheses; reactions provide evidence that must change how the system is understood and guided.", "Observation is not passivity. Immediate intervention remains necessary when defined safety or integrity boundaries are crossed.", "A rollout includes explicit feedback signals and changes course when harm appears.", "Watching a failing process continue in the name of learning after stop conditions are met.", ["Governance", "Iteration", "Program leadership"], ["M-001", "F-007"], ["What did the reaction reveal?", "What boundary requires action?", "What should change in the next cycle?"]],
  ["L-012", "Measure progress by durable capability created rather than time or activity consumed.", "Hours, prompts, meetings, and volume describe motion; completed reusable capability describes contribution.", "Capability measures must remain paired with quality, truth, safety, and human impact; they must never become measures of human worth.", "A completed, reviewable framework is recorded with the capability it enables and the time invested.", "Inflating output counts with low-quality artifacts that create review debt.", ["AI work accounting", "Portfolio review", "Learning systems"], ["G-001", "G-002"], ["What completed capability now exists?", "Can the contribution be reviewed and reused?", "What quality or downstream cost qualifies the measure?"]]
];

const lawSpecs = Object.fromEntries(lawDetails.map(([id, purpose, rationale, validity, example, counterexample, applications, relationships, checks]) => [id, {
  purpose, rationale, validity, applications, relationships,
  examples: [example],
  counterexamples: [counterexample],
  inputs: ["A real decision, process, or recurring condition", "Observable evidence", "An accountable steward"],
  outputs: ["A written law test", "A decision with stated boundaries", "Evidence for the next review"],
  steps: [
    ["State the situation", "Describe the actual condition without using the law as the conclusion."],
    ["Test the claim", checks[0]],
    ["Examine the boundary", checks[1]],
    ["Decide and record", checks[2]]
  ],
  checks,
  genEvidence: "A law test counts as completed GEN only when the situation, evidence, boundary, decision, and reviewable outcome are recorded."
}]));

const patternDetails = [
  ["P-001", ["Decisions repeatedly reopen", "Research expands without narrowing the choice", "People seek certainty that the situation cannot provide"], ["The decision boundary is undefined", "Consequences and reversibility are not distinguished", "No accountable decider or stopping rule exists"], "Adding more information without naming what evidence would be sufficient.", "Define the smallest reversible decision and the evidence required to take it.", ["A bounded decision is made", "New evidence has a stated role", "The decision stays closed until its review condition"], ["F-002", "F-005", "L-008"]],
  ["P-002", ["Critical work waits for one person", "Delegation returns as questions or rescue", "Absence stops improvement or delivery"], ["Knowledge and authority remain tacit", "Handoffs transfer tasks but not judgment", "The creator is rewarded for intervention"], "Assigning more tasks while preserving all decisions with the founder.", "Transfer one complete decision domain with its knowledge, authority, and feedback.", ["Work continues during absence", "A second steward can decide and teach", "Founder intervention becomes exceptional"], ["L-004", "L-005", "F-006"]],
  ["P-003", ["Small choices feel disproportionately difficult", "Important judgment is delayed late in the day", "Standards vary as attention declines"], ["Repeated choices have not become policy", "Low-value decisions interrupt high-value work", "Defaults and ownership are unclear"], "Trying to become more disciplined while leaving the decision volume unchanged.", "Turn one recurring low-value choice into a trusted default or rule.", ["Fewer repeated decisions reach a human", "High-consequence choices receive protected attention", "Exceptions are visible"], ["L-010", "F-002", "D-003"]],
  ["P-004", ["Deliverables grow while completion recedes", "New requests enter without displacing old work", "The original purpose becomes hard to state"], ["The work lacks an explicit boundary", "Tradeoffs are hidden", "Progress is measured by inclusion rather than outcome"], "Creating a larger plan that accommodates every addition.", "Restate the purpose and require every addition to name what it replaces.", ["Scope changes are explicit decisions", "Completion conditions remain stable", "The delivered result serves the original purpose"], ["L-001", "F-009", "F-002"]],
  ["P-005", ["Recovery no longer restores capacity", "Work requires increasing effort for the same result", "Cynicism, withdrawal, or error rises"], ["Demand persistently exceeds renewable human energy", "Responsibility is not matched by control or support", "The system treats individual endurance as capacity"], "Offering recovery advice while preserving the conditions consuming the person.", "Remove or transfer one recurring demand and restore control over a meaningful boundary.", ["Sustainable capacity returns", "Required effort no longer rises", "The system changes—not only the individual"], ["L-010", "F-010", "P-003"]],
  ["P-006", ["Teams recreate known work", "Answers depend on knowing whom to ask", "Decisions conflict across boundaries"], ["Knowledge is stored with people rather than accessible systems", "Documentation is detached from real work", "Sharing creates cost without visible reward"], "Launching another repository without embedding transfer into the workflow.", "Capture one high-cost recurring answer at the moment it is used and connect it to its owner.", ["The answer is found without private routing", "Reuse is observable", "Knowledge gains a steward and revision path"], ["L-003", "L-004", "F-003"]],
  ["P-007", ["Work remains nearly finished", "Standards rise as delivery approaches", "Feedback is postponed until confidence is impossible"], ["Identity or safety is attached to flawlessness", "Reversible and irreversible decisions are treated alike", "The learning value of release is discounted"], "Setting a more ambitious deadline while retaining an undefined standard of perfect.", "Define the smallest credible, reversible release and its explicit quality floor.", ["A real artifact reaches review", "Feedback replaces imagined judgment", "Quality improves through cycles"], ["L-006", "L-008", "F-005"]],
  ["P-008", ["Verification and escalation increase", "Commitments require repeated follow-up", "People protect themselves with private records or workarounds"], ["Promises and outcomes repeatedly diverge", "Bad news travels slowly", "Accountability is ambiguous or consequence-free"], "Demanding trust or adding surveillance without repairing reliability.", "Make one meaningful commitment observable, owned, and reliably closed.", ["Commitments predict outcomes more accurately", "Bad news appears earlier", "Verification cost declines"], ["L-009", "L-011", "F-010"]],
  ["P-009", ["Deep work rarely reaches momentum", "Many tasks are active but few complete", "Reorientation consumes visible time"], ["Interruptions are treated as free", "Work lacks protected completion windows", "Ownership and urgency signals are poorly designed"], "Using personal focus techniques while the surrounding interruption system remains unchanged.", "Protect one complete work interval and create a visible intake point for noncritical demands.", ["Completion rises without longer hours", "Interruptions become explicit choices", "Reorientation time declines"], ["L-010", "F-009", "P-003"]],
  ["P-010", ["Old questions repeatedly return", "Work depends on remembered context", "Small changes carry surprising risk"], ["Decisions and assumptions were not recorded", "Temporary exceptions became permanent", "Unresolved ambiguity accumulated interest"], "Adding new tools or features on top of undocumented decisions.", "Close one recurring ambiguity with a decision record, owner, and review condition.", ["Repeated explanation declines", "Changes require less reconstruction", "Future decisions start from stronger orientation"], ["L-003", "F-007", "F-003"]]
];

const patternSpecs = Object.fromEntries(patternDetails.map(([id, symptoms, causes, falseFix, catalyst, successSignals, relationships]) => [id, {
  status: "Foundation",
  purpose: `Recognize and interrupt ${rawObjects.find((item) => item.id === id)?.title} as a system condition rather than a personal label.`,
  rationale: "A named pattern becomes useful when its observable signals, producing conditions, and first intervention can be distinguished.",
  validity: "Apply only when multiple symptoms recur and plausible system causes are supported by observation. Do not diagnose a person from one event.",
  applications: ["Pattern recognition", "System diagnosis", "Intervention design"],
  examples: [`A steward records recurring signals of ${rawObjects.find((item) => item.id === id)?.title}, tests a system cause, and runs one bounded intervention.`],
  counterexamples: [falseFix],
  relationships,
  symptoms, causes, falseFix, catalyst, successSignals,
  inputs: ["Recurring observable signals", "Context across more than one event", "People affected by the condition", "A bounded place to intervene"],
  outputs: ["A pattern hypothesis", "A tested system cause", "A first catalyst", "Success and stop signals"],
  steps: [
    ["Observe recurrence", "Record when, where, and for whom the symptoms appear."],
    ["Test system causes", "Look for conditions that remain present across events."],
    ["Reject the false fix", falseFix],
    ["Place the catalyst", catalyst],
    ["Read the reaction", `Look for: ${successSignals.join("; ")}.`]
  ],
  checks: ["Are several symptoms recurring?", "Does evidence support a system cause?", "Will the catalyst change a condition rather than blame a person?"],
  genEvidence: "A pattern intervention counts as completed GEN when the observed signals, tested cause, delivered catalyst, and measured reaction are reviewable."
}]));

export const mksObjects = rawObjects.map((item) => ({
  ...item,
  maturity: (operationalSpecs[item.id] || lawSpecs[item.id] || patternSpecs[item.id]) ? "Operational" : item.status === "Seed" ? "Registered" : "Specified",
  ...(operationalSpecs[item.id] || lawSpecs[item.id] || patternSpecs[item.id] || {})
}));

export const roadmap = [
  { phase: "Built", count: 43, label: "Knowledge objects have permanent, searchable homes.", status: "Complete" },
  { phase: "Operational", count: 31, label: "Core entries include steps, checks, inputs, outputs, and GEN evidence.", status: "Active" },
  { phase: "Next", count: 5, label: "Instrument seeds need worksheets, scales, and worked examples.", status: "Queued" },
  { phase: "Then", count: 3, label: "Remaining framework seeds need full operating protocols.", status: "Queued" }
];

export const classifications = ["All", "Doctrine", "Law", "Framework", "Method", "Instrument", "Pattern", "Measurement"];

export function getObject(id) {
  return mksObjects.find((item) => item.id.toLowerCase() === id.toLowerCase());
}
