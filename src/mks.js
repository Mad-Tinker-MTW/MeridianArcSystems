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
    ["M-002", "Orientation Brief", "Convert observations, assumptions, unknowns, and reference signals into a bounded statement of present position.", ["F-001", "I-002", "L-001"]],
    ["M-003", "Catalyst Design", "Specify the minimum sufficient initiating action, intended second action, evidence signals, and safeguards.", ["F-005", "D-003", "L-008"]],
    ["M-004", "Transfer Review", "Examine whether knowledge, execution, judgment, and ownership moved beyond the original creator.", ["F-006", "L-004", "L-005"]],
    ["M-005", "Reaction Reflection", "Compare intended and observed reactions, preserve discrepancy, and convert learning into the next orientation.", ["F-007", "L-011", "M-001"]],
    ["M-006", "System Stewardship Review", "Review purpose, transfer, feedback, resilience, independence, harm, and accountable continuation.", ["F-010", "I-005", "L-010"]]
  ].map(([id, title, statement, relationships]) => ({
    id, title, statement, relationships, classification: "Method", status: "Foundation",
    purpose: "Provide a repeatable operating protocol that produces a reviewable Meridian artifact.",
    rationale: "Methods convert a way of seeing into consistent action, evidence, and transfer.",
    validity: "Use when the named output is necessary for another person to inspect, continue, or challenge the work.",
    applications: ["System design", "Governance", "Teaching", "Operational review"],
    examples: [`Apply ${title} to one live system and preserve the completed record for an independent reviewer.`],
    counterexamples: ["Completing the steps without producing evidence another person can inspect or use."],
    version: "0.6"
  })),
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
    worksheet: [["Position", "Where does the situation stand now?", "text"], ["Evidence", "What directly supports that position?", "text"], ["Assumptions", "What is believed but not yet verified?", "text"], ["References", "Which stable signals establish position?", "text"], ["Confidence", "How sufficient is orientation for the consequence?", "scale"], ["Next question", "What would most improve orientation?", "text"]],
    interpretation: ["1–2: orient further before consequential movement", "3: proceed only with reversible steps", "4–5: sufficiently oriented for the stated risk"],
    workedExample: "Before selecting the next MKS build, the team counts operational objects, identifies the seven incomplete frameworks, and chooses that visible gap instead of inventing another category.",
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
    worksheet: [["Choice", "What real decision must be made?", "text"], ["Purpose", "What must the decision protect or create?", "text"], ["Options", "What viable choices exist, including waiting?", "text"], ["Consequences", "Who inherits immediate and delayed effects?", "text"], ["Time", "What future attention does each option create or remove?", "text"], ["Decision", "What is chosen, why, and when will it be reviewed?", "text"]],
    interpretation: ["A complete decision preserves purpose, tradeoff, consequence, owner, and review condition."],
    workedExample: "The public site is kept on GitHub Pages for family access while the owner-only Sites deployment remains a controlled working checkpoint.",
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
    worksheet: [["Desired reaction", "What useful motion should continue after initiation?", "text"], ["Receiver", "What person or system must move second?", "text"], ["Candidate catalyst", "What minimum sufficient action could reach it?", "text"], ["Transfer signal", "What observable event proves energy moved?", "text"], ["Stop boundary", "What condition requires correction or shutdown?", "text"], ["Stewardship", "Who watches the reaction and what do they record?", "text"]],
    interpretation: ["The smallest action is not the catalyst unless it reaches the receiver.", "Scale only after the first transfer is observable."],
    workedExample: "Publishing one usable framework canvas is a stronger catalyst than drafting an entire academy because a real user can complete it and reveal what teaching is needed next.",
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

const frameworkSpecs = {
  "F-003": {
    status: "Foundation",
    purpose: "Expose how observations become interpretations, options, and action so hidden assumptions can be examined.",
    rationale: "People often disagree at the conclusion while the real divergence occurred several reasoning steps earlier.",
    validity: "Use when a question is consequential, reasoning is contested, or an action rests on assumptions that have not been made visible.",
    applications: ["Reasoning review", "Facilitation", "Knowledge transfer"],
    relationships: ["L-003", "I-005", "F-004"],
    inputs: ["A consequential question", "Observable evidence", "Current interpretations", "Candidate actions"],
    outputs: ["A visible reasoning path", "Named assumptions", "An evidence-linked next action"],
    steps: [["State the question", "Write one decision-shaped question without embedding the preferred answer."], ["Separate observation from interpretation", "Record what is directly known before explaining what it means."], ["Map the branches", "Show alternate interpretations and the assumptions that produce each one."], ["Connect options to consequences", "Make the path from interpretation to action visible."], ["Choose a learning path", "Select the action that serves purpose while producing useful evidence."]],
    checks: ["Where does the first unsupported assumption enter?", "What alternate path fits the same observations?", "Can another person reconstruct why the action follows?"],
    worksheet: [["Starting question", "What consequential question are you trying to answer?", "text"], ["Observations", "What is directly known or observed?", "text"], ["Assumptions", "What are you adding that has not been verified?", "text"], ["Alternative path", "What other interpretation fits the observations?", "text"], ["Chosen action", "What will you do, and why does it follow?", "text"], ["Learning signal", "What evidence would change this pathway?", "text"]],
    interpretation: ["A strong pathway keeps facts, assumptions, interpretations, and choices distinguishable.", "If no evidence could change the path, it is a commitment—not an inquiry."],
    workedExample: "A low signup rate is mapped as an observation. Instead of assuming weak demand, the team records alternate paths—unclear promise, excessive friction, or wrong audience—and tests the smallest distinguishing signal.",
    genEvidence: "The completed pathway counts when another person can inspect its evidence, assumptions, alternatives, selected action, and learning signal."
  },
  "F-004": {
    status: "Foundation",
    purpose: "Recognize choices that materially alter future routes and give them attention proportional to consequence.",
    rationale: "Not every decision is a junction. Treating routine choices as strategic wastes judgment; overlooking true junctions creates hidden lock-in.",
    validity: "Use when options create meaningfully different downstream states, especially where reversibility, timing, or inherited consequences differ.",
    applications: ["Strategy", "Architecture", "Governance"],
    relationships: ["F-002", "F-003", "I-005"],
    inputs: ["A decision point", "Viable branches", "Reversibility and timing", "Downstream consequences"],
    outputs: ["A junction record", "A branch comparison", "A decision and revisit trigger"],
    steps: [["Test for a junction", "Ask whether the choice changes the future route, not merely the next task."], ["Name viable branches", "Include delay or no action when either is real."], ["Map inheritance", "Identify what each branch gives to—or imposes on—the next steward."], ["Assess reversibility", "Separate reversible experiments from commitments that narrow future choice."], ["Choose and mark the junction", "Record the branch, rejected alternatives, and evidence that could justify returning."]],
    checks: ["Does this choice materially alter downstream options?", "Which branch creates the most difficult-to-reverse consequence?", "Who inherits the selected route?"],
    worksheet: [["Junction", "What choice may change the route?", "text"], ["Branches", "What viable paths exist, including waiting?", "text"], ["Inheritance", "What does each branch give to the future?", "text"], ["Reversibility", "Which consequences can and cannot be undone?", "text"], ["Decision rule", "What principle or evidence decides the branch?", "text"], ["Revisit trigger", "What signal would reopen this junction?", "text"]],
    interpretation: ["High-consequence, low-reversibility junctions require deeper orientation.", "A reversible branch can be used to learn before committing the full route."],
    workedExample: "Choosing a permanent publishing platform is treated as a junction because URLs, access, and workflows will inherit the choice; a visual color tweak is not.",
    genEvidence: "A junction becomes reviewable GEN when branches, inherited consequences, reversibility, decision, and revisit trigger are recorded."
  },
  "F-006": {
    status: "Foundation",
    purpose: "Design one investment of effort to create capability that can be reused, transferred, and improved.",
    rationale: "Output ends with completion; a multiplier changes what future people or systems can accomplish.",
    validity: "Use where repetition, transfer, or scale is expected. Do not claim multiplication when hidden maintenance or correction costs exceed the capability created.",
    applications: ["Automation", "Education", "Reusable systems"],
    relationships: ["L-004", "L-005", "G-001"],
    inputs: ["A repeated need", "A seed capability", "Intended recipients", "Maintenance and decay risks"],
    outputs: ["A multiplier hypothesis", "A transfer mechanism", "A reuse and maintenance test"],
    steps: [["Name the repeated need", "Identify work or judgment that must occur more than once."], ["Define the seed capability", "State what one investment will make possible."], ["Design transfer", "Specify how another person or system receives and applies it."], ["Test independent reuse", "Observe use without the creator rescuing the result."], ["Measure net multiplication", "Compare repeated capability with maintenance, correction, and transferred burden."]],
    checks: ["What can the recipient do afterward?", "Can the capability survive without its creator present?", "Is cost conserved or merely displaced?"],
    worksheet: [["Repeated need", "What keeps requiring human effort or expertise?", "text"], ["Seed capability", "What one investment could become reusable?", "text"], ["Recipients", "Who or what should gain capability?", "text"], ["Transfer mechanism", "How will capability reach and guide them?", "text"], ["Decay risk", "What will make the multiplier weaken or become wrong?", "text"], ["Multiplier evidence", "What independent reuse will prove multiplication?", "text"]],
    interpretation: ["A multiplier is demonstrated by independent, repeated use—not projected reach.", "Maintenance belongs in the multiplier calculation."],
    workedExample: "A diagnostic playbook becomes a multiplier only after another technician uses it successfully, records a correction, and no longer needs the author for every case.",
    genEvidence: "Count the reusable artifact and demonstrated independent use; record maintenance and correction costs beside the capability claim."
  },
  "F-007": {
    status: "Foundation",
    purpose: "Convert the difference between intention and reality into a deliberate change in the next cycle.",
    rationale: "Experience alone does not compound. Learning occurs when evidence changes understanding, action, or the system.",
    validity: "Use after meaningful action or reaction. Reflection must not delay urgent correction when safety or integrity boundaries are crossed.",
    applications: ["After-action review", "Iteration", "Personal practice"],
    relationships: ["L-011", "M-001", "I-005"],
    inputs: ["Original intent", "Action taken", "Observed reaction", "A responsible next steward"],
    outputs: ["A discrepancy statement", "A retained lesson", "A changed next action"],
    steps: [["Recover intent", "State what the action was meant to cause."], ["Record the reaction", "Describe what actually happened without cleaning the story."], ["Find the discrepancy", "Locate meaningful differences between expectation and reality."], ["Extract the lesson", "Name what the discrepancy changes in understanding."], ["Close the loop", "Assign a concrete change to the next action, system, or map."]],
    checks: ["What did reality reveal that planning could not?", "What belief or capability changed?", "Where will the lesson alter future behavior?"],
    worksheet: [["Intent", "What did you expect the action to cause?", "text"], ["Action", "What was actually done?", "text"], ["Reaction", "What did reality do in response?", "text"], ["Discrepancy", "Where did expectation and outcome differ?", "text"], ["Lesson", "What must now change in understanding?", "text"], ["Next cycle", "What specific action or system will inherit the lesson?", "text"]],
    interpretation: ["A reflection is incomplete until a future action or system inherits the learning.", "Unexpected success deserves the same examination as failure."],
    workedExample: "A public knowledge page attracts visits but no reuse. The lesson changes the next cycle from publishing more prose to adding a runnable worksheet and an observable completion signal.",
    genEvidence: "Reflection counts when evidence, discrepancy, lesson, and the changed next action are preserved together."
  },
  "F-008": {
    status: "Foundation",
    purpose: "Identify the unknown whose resolution would most improve orientation or change action.",
    rationale: "Discovery is not collecting more information. It is reducing the uncertainty that materially shapes the route.",
    validity: "Use before prescribing solutions in unfamiliar, ambiguous, or disputed conditions.",
    applications: ["Research", "Product discovery", "Diagnosis"],
    relationships: ["F-001", "I-002", "M-001"],
    inputs: ["Current knowledge", "Assumptions", "Meaningful unknowns", "Decision consequence"],
    outputs: ["A discovery question", "A cheapest credible evidence plan", "A stop condition"],
    steps: [["Inventory knowledge", "Separate known, assumed, and unknown."], ["Rank unknowns", "Ask which uncertainty would most change the route."], ["Form a discovery question", "Make the unknown answerable through observable evidence."], ["Choose the cheapest credible sighting", "Select an ethical test sufficient to improve orientation."], ["Stop and update", "End discovery when evidence is sufficient for the risk, then revise the map."]],
    checks: ["Would the answer change action?", "Is this evidence credible enough for the consequence?", "Are we discovering—or postponing commitment?"],
    worksheet: [["Known", "What is supported by direct evidence?", "text"], ["Assumed", "What is presently believed but unverified?", "text"], ["Unknown", "Which uncertainties could matter?", "text"], ["Leverage unknown", "Which answer would most change the route?", "text"], ["Evidence plan", "What is the cheapest credible way to learn?", "text"], ["Stop condition", "When is orientation sufficient to act?", "text"]],
    interpretation: ["The highest-leverage unknown, not the easiest question, leads discovery.", "A stop condition prevents research from becoming avoidance."],
    workedExample: "Before building a full course, Meridian tests whether a new reader can independently use one framework canvas and describe the capability gained.",
    genEvidence: "The discovery artifact counts when the question, evidence plan, findings, and resulting orientation change are reviewable."
  },
  "F-009": {
    status: "Foundation",
    purpose: "Hold long-range direction without pretending that distant terrain can be planned in detail.",
    rationale: "False precision creates brittle plans; direction without near commitment creates drift.",
    validity: "Use when the work must move now while future conditions remain materially uncertain.",
    applications: ["Roadmapping", "Strategy", "Long-range stewardship"],
    relationships: ["I-003", "L-006", "F-007"],
    inputs: ["Long-range direction", "Present visibility", "Near commitments", "Horizon-changing signals"],
    outputs: ["A near planning horizon", "A far directional horizon", "An extension trigger"],
    steps: [["State enduring direction", "Name the capability or condition pursued beyond the current plan."], ["Mark current visibility", "Define what evidence allows the route to be planned now."], ["Commit the near horizon", "Choose concrete deliverables within visible terrain."], ["Protect the far horizon from false detail", "Keep distant work directional and revisable."], ["Advance on signal", "Extend or alter the plan only when named evidence arrives."]],
    checks: ["What can be responsibly committed now?", "Which detail is invented rather than observed?", "What signal moves the horizon?"],
    worksheet: [["Direction", "What enduring future capability guides the work?", "text"], ["Visible terrain", "What can be responsibly understood now?", "text"], ["Near horizon", "What concrete commitment belongs in this cycle?", "text"], ["Far horizon", "What remains direction rather than plan?", "text"], ["Signals", "What evidence will extend or redirect the route?", "text"]],
    interpretation: ["Near work should be specific; distant work should preserve intent without false certainty.", "The Horizon framework defines the reasoning; I-003 records the reading."],
    workedExample: "The MKS commits to operational frameworks now while treating certification as a far horizon until practical use reveals what competency actually requires.",
    genEvidence: "A Horizon record counts when direction, current commitment, withheld detail, and the signal for extension are explicit."
  },
  "F-010": {
    status: "Foundation",
    purpose: "Assess whether a system transfers value, learns, recovers, and continues under accountable stewardship.",
    rationale: "A system can appear productive while hiding dependence, fragility, delayed harm, or an inability to learn.",
    validity: "Use as a directional health assessment with observable evidence. Scores are prompts for inquiry, not objective truth.",
    applications: ["System review", "Governance", "Operational resilience"],
    relationships: ["L-002", "L-005", "I-004"],
    inputs: ["A bounded system", "Evidence of transfer and outcomes", "Failure and recovery history", "Stewardship ownership"],
    outputs: ["A five-dimension health profile", "A weakest-dimension diagnosis", "A bounded intervention"],
    steps: [["Bound the system", "Name its purpose, participants, and the period under review."], ["Score five dimensions", "Assess transfer, feedback, resilience, independence, and stewardship from evidence."], ["Find the weakest dimension", "Treat the low reading as the first diagnostic question."], ["Trace the cause", "Locate the condition producing weakness rather than labeling people."], ["Apply and review one catalyst", "Change a bounded condition and watch the next health reading."]],
    checks: ["What observable evidence supports each score?", "Which weakness threatens purpose most?", "Who owns correction and the next review?"],
    worksheet: [["System boundary", "What system, purpose, participants, and time period are being reviewed?", "text"], ["Transfer", "Does useful value reach the next participant?", "scale"], ["Feedback", "Can reality change how the system operates?", "scale"], ["Resilience", "Can the system recover from disruption?", "scale"], ["Independence", "Can it continue without avoidable creator rescue?", "scale"], ["Stewardship", "Are consequences owned, observed, and corrected?", "scale"], ["First intervention", "What bounded condition will be changed first?", "text"]],
    interpretation: ["1–2: material weakness—investigate before scaling", "3: functioning but fragile or unclear", "4–5: healthy enough for current purpose; continue observation"],
    workedExample: "A founder-led service scores transfer 4, feedback 4, resilience 2, independence 1, and stewardship 3. The first intervention is a documented escalation path tested during a planned founder absence.",
    genEvidence: "The health assessment counts when every score cites evidence and the weakest dimension produces an owned, reviewable intervention."
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

const instrumentSpecs = {
  "I-001": {
    status: "Foundation",
    purpose: "Test whether a proposed action remains aligned with purpose, people, time, and stewardship.",
    rationale: "Direction can look efficient while moving a system away from the reason it exists.",
    validity: "Use before consequential action or when momentum has made purpose less visible. The Compass informs judgment; it does not make the decision.",
    applications: ["Decision review", "Project initiation", "Governance"],
    relationships: ["F-002", "L-001", "L-010"],
    inputs: ["A proposed action", "The purpose it should serve", "People affected", "Time and stewardship consequences"],
    outputs: ["An alignment profile", "A visible tension", "A proceed, revise, pause, or stop decision"],
    steps: [["Name true north", "Write the purpose without describing the proposed action."], ["Score four bearings", "Assess purpose, people, time, and stewardship from 1 to 5."], ["Find the weakest bearing", "Treat the lowest score as the first question, not an average to hide."], ["Record the decision", "Proceed, revise, pause, or stop—and state the evidence required for review."]],
    checks: ["Is purpose independent of the proposed solution?", "Whose time or agency changes?", "What stewardship obligation continues after launch?"],
    worksheet: [
      ["True north", "What purpose must this action serve?", "text"],
      ["Purpose alignment", "Does it directly serve that purpose?", "scale"],
      ["People alignment", "Does it protect dignity, agency, and needed judgment?", "scale"],
      ["Time alignment", "Whose time is conserved—and whose is consumed?", "scale"],
      ["Stewardship alignment", "Can consequences be observed and responsibly governed?", "scale"],
      ["Decision", "Proceed, revise, pause, or stop. Why?", "text"]
    ],
    interpretation: ["1–2: stop and investigate", "3: unresolved—revise or gather evidence", "4–5: aligned enough to proceed with stewardship"],
    workedExample: "A team considering automated customer triage scores purpose 5, people 2, time 4, and stewardship 3. The low people score prevents a confident launch; they add explanation, appeal, and human review before proceeding.",
    genEvidence: "The completed Compass record, its evidence, and the resulting decision form the reviewable artifact."
  },
  "I-002": {
    status: "Foundation",
    purpose: "Establish position under uncertainty by comparing current observations with trusted references.",
    rationale: "When direct visibility is poor, position can still be inferred from stable external signals.",
    validity: "Use only with references whose relevance and reliability can be explained. A precise answer from weak references is false confidence.",
    applications: ["Ambiguous projects", "Risk assessment", "Organizational diagnosis"],
    relationships: ["F-001", "L-001", "F-008"],
    inputs: ["An uncertain position", "Two or more trusted references", "Current observations", "Confidence limits"],
    outputs: ["A position hypothesis", "A confidence statement", "The next observation needed"],
    steps: [["Name the unknown", "State the position question precisely."], ["Choose references", "Select stable signals and explain why each is trustworthy."], ["Take observations", "Record current evidence without forcing agreement."], ["Triangulate", "Compare where references converge and diverge."], ["State position and confidence", "Name the best current position and what would change it."]],
    checks: ["Are the references independent?", "Could they share the same hidden error?", "What observation would most change confidence?"],
    worksheet: [["Position question", "What are you trying to locate or understand?", "text"], ["Reference one", "Trusted signal and why it matters", "text"], ["Reference two", "Independent signal and why it matters", "text"], ["Observation", "What does current reality show?", "text"], ["Confidence", "How confident are you in the position?", "scale"], ["Next sighting", "What evidence would most improve orientation?", "text"]],
    interpretation: ["1–2: position is speculative", "3: usable only for reversible movement", "4–5: sufficiently oriented for the stated risk"],
    workedExample: "A new service lacks direct retention data. The team triangulates repeat usage, voluntary referrals, and support dependence, then records moderate confidence and the next cohort measure needed.",
    genEvidence: "A completed position hypothesis must preserve references, observations, confidence, and the next sighting."
  },
  "I-003": {
    status: "Foundation",
    purpose: "Separate the visible near-term route from longer-range direction and uncertainty.",
    rationale: "Teams confuse what can be planned now with what can only be held as direction, producing either rigidity or drift.",
    validity: "Use when near-term commitments and long-term intent must coexist. The horizon is expected to move as the system advances.",
    applications: ["Roadmapping", "Strategy", "Portfolio planning"],
    relationships: ["F-009", "L-006", "M-001"],
    inputs: ["Long-range direction", "Current visibility", "Near-term commitments", "Signals that would move the horizon"],
    outputs: ["A near horizon", "A directional horizon", "Explicit no-plan-beyond-this boundary"],
    steps: [["Name direction", "State the future quality or capability being pursued."], ["Mark visibility", "Separate what is observable from what is assumed."], ["Commit near", "Plan only the work that current visibility can support."], ["Hold far as direction", "Describe longer-range intent without false detail."], ["Set horizon signals", "Name evidence that will justify extending or changing the route."]],
    checks: ["Which detail is knowable now?", "What are we pretending to know?", "Which signal permits the next planning horizon?"],
    worksheet: [["Direction", "What longer-range capability are we pursuing?", "text"], ["Visible terrain", "What can we responsibly see and plan now?", "text"], ["Near commitment", "What will be completed in the current horizon?", "text"], ["Beyond the horizon", "What remains direction rather than plan?", "text"], ["Horizon signal", "What evidence lets us extend or change the route?", "text"]],
    interpretation: ["A healthy Horizon has concrete near commitments and deliberately low detail beyond current visibility."],
    workedExample: "Meridian commits to an operational Pattern Library now while holding Academy certification as direction until real use reveals the curriculum.",
    genEvidence: "The horizon artifact is complete when near commitments, far direction, and extension signals are explicit."
  },
  "I-004": {
    status: "Foundation",
    purpose: "Make stable guidance visible at recurring moments of risk, pressure, or disorientation.",
    rationale: "People often need guidance most when attention is least available to reconstruct it.",
    validity: "Use for recurring decision points with a stable principle and clear escalation path. Do not use slogans to replace case-specific judgment.",
    applications: ["Safety", "Service standards", "Escalation design"],
    relationships: ["L-010", "L-011", "F-010"],
    inputs: ["A recurring risk point", "Stable guidance", "Observable trigger", "Safe action and escalation"],
    outputs: ["A lighthouse statement", "Trigger-action guidance", "An owner and review cadence"],
    steps: [["Locate the hazard", "Identify the recurring point where judgment degrades or risk rises."], ["Define the signal", "Make the trigger recognizable in real time."], ["Write stable guidance", "State the smallest principle that remains true under pressure."], ["Connect action and escalation", "Specify what to do and when human judgment must enter."], ["Assign stewardship", "Give the lighthouse an owner and review date."]],
    checks: ["Will the signal be visible under pressure?", "Is the guidance stable but not simplistic?", "Who maintains and can retire it?"],
    worksheet: [["Hazard", "Where does recurring risk or disorientation appear?", "text"], ["Signal", "What observable condition activates guidance?", "text"], ["Stable guidance", "What must remain true under pressure?", "text"], ["Safe action", "What should happen immediately?", "text"], ["Escalation", "When and to whom must judgment transfer?", "text"], ["Steward", "Who reviews this guidance and when?", "text"]],
    interpretation: ["A lighthouse is useful only when its signal, immediate action, escalation, and owner are all visible."],
    workedExample: "An AI support system flags low-confidence medical language, gives no recommendation, and transfers the case to a trained human with the original context intact.",
    genEvidence: "Count the deployed guidance only when trigger, action, escalation, ownership, and review are testable."
  },
  "I-005": {
    status: "Foundation",
    purpose: "Record the route reality revealed so another person can navigate, challenge, and improve it.",
    rationale: "A route kept only in memory cannot transfer capability or compound learning.",
    validity: "Map observed decisions and evidence, not a cleaned-up story that erases detours and uncertainty.",
    applications: ["After-action review", "Playbooks", "Knowledge transfer"],
    relationships: ["L-003", "L-004", "F-003"],
    inputs: ["Starting orientation", "Decision junctions", "Evidence and detours", "Current destination or stopping point"],
    outputs: ["A route record", "Reusable waypoints", "Known hazards and unresolved territory"],
    steps: [["Mark the origin", "Record the actual starting condition and confidence."], ["Capture junctions", "Document consequential choices and rejected routes."], ["Place waypoints", "Preserve evidence or capabilities worth reusing."], ["Mark hazards and unknowns", "Keep failures, constraints, and uncertainty visible."], ["Publish the next route", "Make the map accessible with an owner and revision path."]],
    checks: ["Could another person reproduce the route?", "Are detours and failures preserved?", "Who can correct the map when reality changes?"],
    worksheet: [["Origin", "Where did the work actually begin?", "text"], ["Destination", "What outcome or stopping point was reached?", "text"], ["Junctions", "Which choices materially changed the route?", "text"], ["Waypoints", "What evidence or capability should be reused?", "text"], ["Hazards", "What failed, constrained, or remains uncertain?", "text"], ["Next cartographer", "Who owns revision and continuation?", "text"]],
    interpretation: ["A useful map transfers judgment, not merely the sequence of tasks."],
    workedExample: "After building the MKS Library, the route record preserves the decision to use permanent knowledge objects, the hash-routing constraint, deployment lessons, and the next unbuilt instrument layer.",
    genEvidence: "The route map counts when another person can review the evidence, follow the choices, and continue the work."
  }
};

export const mksObjects = rawObjects.map((item) => ({
  ...item,
  maturity: (operationalSpecs[item.id] || frameworkSpecs[item.id] || lawSpecs[item.id] || patternSpecs[item.id] || instrumentSpecs[item.id]) ? "Operational" : item.status === "Seed" ? "Registered" : "Specified",
  ...(operationalSpecs[item.id] || frameworkSpecs[item.id] || lawSpecs[item.id] || patternSpecs[item.id] || instrumentSpecs[item.id] || {})
}));

const glossaryRows = [
  ["orientation", "Orientation", "Position", "The disciplined act of establishing where a person or system stands before choosing movement.", "Orientation establishes position; navigation chooses movement from that position.", "Before repairing a failed service, the team verifies the actual failure state, constraints, and confidence.", ["navigation", "horizon"], ["F-001", "L-001"]],
  ["navigation", "Navigation", "Movement", "Purposeful movement from an established position toward a chosen direction while reality continues to provide feedback.", "Navigation is not a fixed route. It is movement informed by orientation and changing conditions.", "A team advances through reversible steps and updates the route when new evidence arrives.", ["orientation", "waypoint"], ["F-001", "M-001"]],
  ["purpose", "Purpose", "Foundation", "The reason a system should exist or an action should be taken, stated independently of the preferred solution.", "Purpose explains why; a plan proposes how to begin serving it.", "Protect human attention for judgment is a purpose. Automate the intake form is one possible plan.", ["plan", "stewardship"], ["D-001", "F-002"]],
  ["plan", "Plan", "Foundation", "A deliberate arrangement of intent, conditions, and initiating action created before the reaction begins.", "The plan initiates the reaction; it is not the pattern that later emerges.", "Publish one usable framework canvas to learn what readers can apply independently.", ["first-domino", "reaction"], ["D-001", "F-005"]],
  ["first-domino", "First Domino", "Initiation", "The first true action in a plan that transfers sufficient energy to an intended second action.", "It is valuable because of the transfer it makes possible, not because it occurs first.", "A prototype becomes a first domino only when a real user can use it and produce feedback.", ["catalyst", "transfer"], ["D-001", "D-002"]],
  ["catalyst", "Catalyst", "Initiation", "The minimum sufficient action capable of initiating a defined beneficial reaction.", "Minimum means no avoidable effort; sufficient means enough energy to reach the first required transfer.", "A single live worksheet can catalyze learning that a folder of unfinished essays cannot.", ["first-domino", "reaction"], ["D-003", "F-005"]],
  ["transfer", "Transfer", "Kinetics", "The movement of useful knowledge, capability, responsibility, confidence, or execution from one actor or system to another.", "Completion belongs to the creator; transfer creates capability beyond the creator.", "A documented diagnostic method another technician can use and improve demonstrates transfer.", ["capability", "continuity"], ["D-002", "L-004"]],
  ["reaction", "Reaction", "Kinetics", "The observable response produced when initiating energy encounters people, systems, and reality.", "A reaction is evidence, not automatic proof of success; it may reveal motion, resistance, harm, or learning.", "After a framework is published, completions, confusion, and abandonment are all parts of the reaction.", ["catalyst", "emergence"], ["D-002", "M-001"]],
  ["emergence", "Emergence", "Kinetics", "A pattern progressively revealed through the interaction of intention with reality.", "Emergence is not unmanaged chaos and cannot excuse missing safeguards.", "Unexpected reader use reveals a teaching path the original plan did not contain.", ["reaction", "pattern"], ["L-006", "F-009"]],
  ["pattern", "Pattern", "Kinetics", "A recurring, recognizable arrangement of conditions and outcomes revealed across events.", "A pattern describes a system condition; it must never reduce a person to a label.", "Repeated reopened decisions with expanding research may reveal Analysis Paralysis.", ["emergence", "system-health"], ["P-001", "L-002"]],
  ["stewardship", "Stewardship", "Continuity", "Accountable care for a system's purpose, consequences, learning, maintenance, and continuity.", "Stewardship guides and corrects without pretending to control every emergent result.", "A named owner watches an automated service, preserves appeal, and changes it when harm appears.", ["purpose", "continuity"], ["L-011", "F-010"]],
  ["continuity", "Continuity", "Continuity", "The condition in which useful movement or capability persists beyond the initiating act and its creator.", "Repetition alone is not continuity if every cycle still requires avoidable rescue.", "A service continues through a founder's absence because authority and knowledge have transferred.", ["transfer", "multiplication"], ["D-002", "L-005"]],
  ["capability", "Capability", "Value", "A demonstrated ability that a person or system can apply to produce a meaningful result.", "Information becomes capability only when it can be used; activity is not evidence of capability.", "A learner independently performs and teaches the diagnostic method.", ["gen", "multiplication"], ["G-001", "F-006"]],
  ["gen", "GEN", "Measurement", "A unit of specialized, AI-driven intellectual work completed in a reviewable form that creates a meaningful, reusable increase in capability, understanding, or value.", "GEN measures completed contribution, never intelligence, busyness, token volume, or human worth.", "A tested framework with a usable canvas and evidence standard may support a GEN record.", ["capability", "return-on-time"], ["G-001", "L-012"]],
  ["return-on-time", "Return on Time", "Measurement", "A directional measure calculated as completed GEN divided by the human hours invested.", "RoT compares comparable work while remaining subordinate to quality, truth, safety, and downstream cost.", "48 completed gen divided by 6 human hours equals 8 gen per hour.", ["gen", "stewardship"], ["G-002", "L-010"]],
  ["doctrine", "Doctrine", "Knowledge Architecture", "A durable Meridian claim that establishes how the discipline understands a foundational aspect of purposeful systems.", "Doctrine invites examination and includes conditions of validity; it does not demand belief.", "The First Domino distinguishes the initiating plan from the emergent pattern.", ["law", "framework"], ["D-001", "D-003"]],
  ["law", "Law", "Knowledge Architecture", "A concise, testable design principle used to examine a real decision, process, or system condition.", "A law is a design test with boundaries, not a commandment applied without context.", "Orientation precedes navigation is tested more deeply as uncertainty and consequence rise.", ["doctrine", "framework"], ["L-001", "L-012"]],
  ["framework", "Framework", "Knowledge Architecture", "A structured way of seeing a recurring systems question through defined inputs, outputs, steps, checks, and evidence.", "A framework disciplines inquiry; it does not replace observation or judgment.", "The Decision Lens makes purpose, options, consequences, and review conditions visible.", ["method", "instrument"], ["F-001", "F-010"]],
  ["method", "Method", "Knowledge Architecture", "A repeatable operating sequence that converts observation and understanding into action, learning, and continuity.", "A method orders work across time; a framework structures a particular way of seeing.", "The Meridian Operating Cycle moves from Observe through Steward and into the next cycle.", ["framework", "instrument"], ["M-001"]],
  ["instrument", "Instrument", "Knowledge Architecture", "A practical tool that makes evidence, position, direction, guidance, or learning visible enough to improve judgment.", "An instrument informs the steward; the steward remains responsible for interpretation and action.", "The Meridian Sextant triangulates an uncertain position from trusted references.", ["framework", "waypoint"], ["I-001", "I-005"]],
  ["junction", "Junction", "Navigation", "A decision point where viable choices lead to materially different downstream routes or inherited consequences.", "Not every choice is a junction; consequence and reversibility determine the attention required.", "Choosing a permanent publishing platform is a junction because future access and workflows inherit it.", ["navigation", "waypoint"], ["F-004", "F-002"]],
  ["waypoint", "Waypoint", "Navigation", "A recorded position, evidence point, or completed capability that helps another traveler verify and continue a route.", "A waypoint supports orientation along a route; it is not the destination.", "A deployed, tested framework library becomes a waypoint for the next glossary build.", ["junction", "horizon"], ["I-005", "F-003"]],
  ["horizon", "Horizon", "Navigation", "The boundary between terrain that can be responsibly planned now and direction that must remain revisable.", "The near horizon supports concrete commitment; the far horizon preserves intent without false detail.", "Operational applications are held as the next horizon while certification remains directional.", ["orientation", "waypoint"], ["F-009", "I-003"]],
  ["reflection", "Reflection", "Learning", "The deliberate comparison of intent, action, and observed reaction to produce a change in understanding or future behavior.", "Experience becomes learning only when a later action or system inherits the lesson.", "Low reuse changes the next cycle from publishing more prose to building interactive tools.", ["reaction", "cognitive-debt"], ["F-007", "M-001"]],
  ["multiplication", "Multiplication", "Value", "The repeated creation of capability from one prior investment through reuse, transfer, teaching, or automation.", "Reach is not multiplication until independent use creates net capability after maintenance and correction costs.", "A playbook used and improved by several technicians multiplies the author's original effort.", ["capability", "continuity"], ["F-006", "L-009"]],
  ["cognitive-debt", "Cognitive Debt", "System Condition", "Future friction created by unresolved decisions, undocumented knowledge, ambiguous ownership, or understanding kept only in memory.", "Like technical debt, it accumulates carrying cost in repeated interpretation, interruption, and avoidable rediscovery.", "A decision repeatedly reopened because its rationale was never recorded creates cognitive debt.", ["reflection", "waypoint"], ["P-010", "L-003"]],
  ["system-health", "System Health", "System Condition", "The evidence-based condition of a system across transfer, feedback, resilience, independence, and stewardship.", "Health is a directional profile, not a single score or a claim that the system is problem-free.", "A service may transfer value well yet remain unhealthy because it cannot recover without its founder.", ["stewardship", "continuity"], ["F-010", "L-002"]]
];

export const glossaryTerms = glossaryRows.map(([slug, term, category, definition, distinction, example, relatedTerms, relatedObjects]) => ({
  slug, term, category, definition, distinction, example, relatedTerms, relatedObjects, status: "Foundation", version: "0.5"
}));

export function getGlossaryTerm(slug) {
  return glossaryTerms.find((item) => item.slug === slug.toLowerCase());
}

const applicationRows = [
  ["A-001", "Founder Bottleneck", "Business", "A growing company waits for its founder to approve, explain, or rescue critical work.", "The recurring delay is evidence of Founder Dependency, not simply a busy calendar.", "Document one recurring decision, transfer its authority and boundary to a named steward, then test it during a planned founder absence.", "A second steward completes the decision without rescue and records what the system still lacked.", ["P-002", "F-006", "I-005"], ["Cycle time without founder", "Number of rescue requests", "Quality and reversibility of delegated decisions"], "Delegation can hide abandonment. High-risk authority still needs explicit oversight and escalation.", "Count the decision record, transferred playbook, independent trial, and learning update when reviewable."],
  ["A-002", "Approval Delay", "Business", "Work repeatedly queues at the same approval point while customers and staff wait.", "A recurring outcome has a system behind it; the last approver is not automatically the cause.", "Map the approval junction, remove one unnecessary serial handoff, and define the smallest safe authority boundary.", "Low-risk work moves independently while exceptions reach the accountable approver with context intact.", ["L-002", "F-004", "I-005"], ["Queue age", "Exception rate", "Rework after approval"], "Speed must not erase legal, financial, safety, or consent requirements.", "Count the revised approval map and measured handoff test, not the meeting that proposed them."],
  ["A-003", "Meeting That Produces No Movement", "Business", "The same issues return each week without a durable decision or changed capability.", "Conversation is being counted as work while decisions remain unresolved and create cognitive debt.", "End one meeting with a recorded choice, owner, next evidence, and condition for reopening.", "The next meeting begins from the prior decision instead of reconstructing it.", ["P-010", "F-002", "L-003"], ["Repeated agenda items", "Recorded decisions completed", "Time spent reconstructing context"], "A forced decision is not progress when required evidence or accountable participants are absent.", "Count completed decision records and transferred actions only."],
  ["A-004", "Customer Support Triage", "Business", "Skilled people spend attention sorting routine requests while complex customers wait.", "Human energy is being consumed before work reaches the point where judgment is uniquely required.", "Automate classification for clear, reversible cases while preserving explanation, appeal, and human escalation.", "Routine cases route faster and ambiguous or consequential cases arrive with context for human judgment.", ["L-010", "I-004", "F-010"], ["Time to human review", "Misroute and appeal rate", "Customer effort"], "Automation can transfer hidden correction work to customers or deny meaningful appeal.", "Count the tested triage flow, safeguards, and measured transfer—not model output volume."],
  ["A-005", "Operational Knowledge Handoff", "Business", "A capable employee leaves and essential work becomes uncertain or stops.", "Knowledge existed as personal memory rather than transferable system capability.", "Have a successor perform one critical process from a route map while the expert observes silently.", "The successor completes the work, identifies missing judgment, and improves the map.", ["L-004", "F-006", "I-005"], ["Independent completion", "Clarification requests", "Map corrections discovered"], "Documentation may expose sensitive access or create unsafe confidence if boundaries are omitted.", "Count the route map, independent run, and incorporated corrections."],
  ["A-006", "Shared Household Responsibility", "Family", "One family member carries the invisible planning, remembering, and coordination for everyone.", "Tasks may be distributed while cognitive ownership remains concentrated.", "Transfer one complete responsibility, including noticing, deciding, doing, and reviewing—not just the final task.", "Another person independently recognizes and completes the responsibility without repeated prompting.", ["L-004", "F-006", "P-003"], ["Prompts required", "Responsibilities independently completed", "Reported attention burden"], "Capability, age, consent, and fairness matter; equal task counts do not guarantee equitable burden.", "Count a clearly transferred responsibility and an observed independent cycle."],
  ["A-007", "Preserving a Family Story", "Family", "Important experience lives only in one person's memory and may disappear with them.", "Stored knowledge has not yet transferred into a form another generation can receive and reinterpret.", "Record one story with its context, uncertainty, artifacts, and permission for future family stewardship.", "A younger family member can retell the story accurately and add a question or connection.", ["L-003", "L-004", "I-005"], ["Stories captured with context", "Independent retelling", "Corrections and permissions recorded"], "Private, painful, or contested memories require consent and visible uncertainty.", "Count the reviewable story artifact and demonstrated transfer, not recording time alone."],
  ["A-008", "Caregiving Coordination", "Family", "Appointments, medication questions, transportation, and updates are scattered across several relatives.", "The family lacks a shared orientation and stable handoff, creating cognitive debt and duplicated effort.", "Create one current-position brief with owners, verified facts, open questions, and the next appointment waypoint.", "Each caregiver can see what is known, what is not, and what they own without reconstructing the situation.", ["F-001", "I-005", "P-010"], ["Missed handoffs", "Conflicting information", "Open questions resolved"], "The record supports coordination and must not substitute for medical judgment, consent, or professional advice.", "Count the consented coordination brief, completed handoffs, and updated map."],
  ["A-009", "Teaching for Independence", "Education", "A lesson appears successful while learners still require the instructor to perform the skill.", "Attendance and explanation are being mistaken for transferred capability.", "Require each learner to complete and explain one authentic task without instructor rescue.", "Learners perform, explain, and correct the capability using observable evidence.", ["L-007", "F-006", "G-001"], ["Independent task completion", "Quality of explanation", "Transfer to a new example"], "Assessment must match the intended capability and remain accessible to different learners.", "Count demonstrated learner capability and the reusable instructional artifact."],
  ["A-010", "Student Stuck in Research", "Education", "A learner gathers more sources but cannot narrow a question or begin a project.", "The highest-leverage unknown and stopping condition have not been defined.", "Write one answerable discovery question and the minimum credible evidence required to act.", "Research narrows, a bounded claim becomes possible, and the learner begins a reversible next step.", ["P-001", "F-008", "F-005"], ["Question specificity", "Evidence stop condition met", "Time from research to action"], "A stopping rule must not justify weak sourcing or unsupported claims.", "Count the discovery brief, evidence set, bounded claim, and initiated test."],
  ["A-011", "Teacher Knowledge Transfer", "Education", "A strong course depends on one teacher's tacit judgment and cannot be reproduced or improved by colleagues.", "The curriculum stores content but not the decision pathways that make instruction effective.", "Map one difficult teaching junction, including signals, choices, common false paths, and reflection questions.", "Another teacher uses the map, adapts it responsibly, and records a new lesson.", ["F-003", "F-004", "I-005"], ["Independent lesson delivery", "Adaptations recorded", "Learner outcome consistency"], "Transfer must preserve teacher judgment rather than mandate a rigid script.", "Count the junction map, independent delivery, and incorporated reflection."],
  ["A-012", "Delegation Without Dumping", "Leadership", "A leader assigns tasks but retains context, authority, or judgment, forcing repeated returns for permission.", "Execution moved, but capability and responsibility did not fully transfer.", "Delegate one outcome with purpose, boundaries, authority, evidence, and escalation—not only instructions.", "The steward makes bounded decisions and returns with evidence rather than requests for every step.", ["L-004", "F-006", "I-001"], ["Decision returns", "Escalations within boundary", "Outcome quality"], "Leaders remain accountable; delegation does not transfer blame or remove support.", "Count the delegation record, independent decision cycle, and review."],
  ["A-013", "Succession Before Crisis", "Leadership", "A critical role has no tested successor and continuity depends on one person's presence.", "Independence has been assumed but never tested under real conditions.", "Run a planned absence simulation with transferred authority, route maps, and explicit lighthouses.", "The system continues, exceptions escalate correctly, and hidden dependencies become visible.", ["L-005", "F-010", "I-004"], ["Continuity during absence", "Unplanned rescue", "Dependencies discovered"], "Simulation boundaries must protect safety, legal authority, and people affected.", "Count the succession design, live test, dependency record, and corrected system."],
  ["A-014", "Decision Reopening", "Leadership", "A team repeatedly revisits settled choices whenever membership, pressure, or memory changes.", "The rationale, tradeoff, and review trigger were not preserved, creating cognitive debt.", "Publish a one-page decision record linked to evidence and the exact condition that authorizes reopening.", "Routine disagreement consults the record; only new qualifying evidence reopens the junction.", ["F-002", "F-004", "P-010"], ["Reopened decisions", "New evidence cited", "Time saved from reconstruction"], "A decision record must not silence dissent or block correction when conditions materially change.", "Count the record and one observed use that either preserves or responsibly reopens the choice."],
  ["A-015", "Document Intake Assistant", "AI", "People repeatedly read and sort incoming documents before the real work begins.", "Routine classification consumes attention, but exceptions may carry privacy, legal, or human consequence.", "Use AI to propose classification with confidence and reasons; require human review for defined sensitive or uncertain cases.", "Clear documents route faster while risky cases retain accountable review and source context.", ["L-010", "I-002", "I-004"], ["Human minutes per document", "Sensitive-case recall", "Correction and appeal rate"], "Protect private data, preserve source documents, and never let confidence replace accountability.", "Count the tested workflow, evaluation set, safeguards, and reviewable performance record."],
  ["A-016", "AI Support With Appeal", "AI", "An automated assistant answers quickly but users cannot understand, challenge, or escape a wrong response.", "Time savings are being measured while agency and transferred burden remain invisible.", "Add explanation, uncertainty, a visible human path, and preservation of the user's original context.", "Users resolve routine needs quickly and consequential failures transfer cleanly to accountable people.", ["L-009", "L-010", "F-010"], ["Resolution rate", "Appeal completion", "Repeated explanation burden"], "Do not automate decisions that require human dignity, consent, protected rights, or accountable judgment.", "Count the safeguarded service flow and measured user outcomes, not generated responses."],
  ["A-017", "Prompt Becomes Workflow", "AI", "A useful AI conversation produces insight that disappears when the session ends.", "The result is stored energy without a repeatable transfer mechanism.", "Convert one successful exchange into a named input, prompt pattern, review check, output format, and owner.", "Another person repeats the workflow, reviews the result, and improves the specification.", ["G-001", "F-006", "L-003"], ["Independent reuse", "Review corrections", "Human time per completed artifact"], "Do not freeze an accidental success into a workflow without quality and risk testing.", "Count the reusable workflow, independent run, and incorporated correction."],
  ["A-018", "Human Review Boundary", "AI", "A team says a person is 'in the loop' but has no time, authority, or information to change the outcome.", "Human presence is ceremonial rather than a functional stewardship control.", "Define the trigger, context, authority, response time, and stop power required for meaningful review.", "Reviewers can identify, alter, escalate, or stop consequential output before harm transfers.", ["L-010", "I-004", "F-010"], ["Review interventions", "Context completeness", "Time available versus required"], "A reviewer cannot absorb unlimited system risk; upstream design and bounded automation remain necessary.", "Count the implemented review boundary and a test showing the reviewer can change the outcome."],
  ["A-019", "Incident Before Solution", "Engineering", "A technical failure triggers immediate fixes before the actual system position is known.", "Navigation began from an assumed failure state, risking further damage and lost evidence.", "Freeze destructive change, establish current state from trusted signals, and record confidence before selecting repair.", "The team chooses a bounded action tied to observed position and preserves evidence for reflection.", ["L-001", "F-001", "I-002"], ["Time to reliable orientation", "Changes made before diagnosis", "Repeat incidents"], "Immediate containment remains necessary when safety, security, or irreversible harm boundaries are crossed.", "Count the orientation record, bounded intervention, and after-action learning."],
  ["A-020", "Prototype as Discovery", "Engineering", "A team plans a complete product around assumptions that have not met users or operating reality.", "The plan is pretending to contain the final pattern instead of initiating useful discovery.", "Build the smallest reliable prototype that reaches one real transfer and tests the highest-leverage unknown.", "Observed use changes the next design decision and reveals whether energy reaches the second action.", ["D-001", "F-005", "F-008"], ["Unknown resolved", "Real transfer observed", "Design decisions changed"], "Small must still be credible, safe, and sufficient; a fragile demo can create a false negative.", "Count the working prototype, observed reaction, and documented design change."],
  ["A-021", "Maintenance Playbook", "Engineering", "A system works until an unfamiliar operator encounters a recurring fault.", "Repair capability remains with original builders and cannot continue through personnel change.", "Map one fault from signal through diagnosis, safe action, escalation, and post-repair verification.", "Another operator restores service without unsafe improvisation and records map corrections.", ["I-004", "I-005", "F-006"], ["Independent recovery", "Mean time to restore", "Unsafe or unnecessary escalation"], "Playbooks must state when to stop; stale instructions can multiply harm.", "Count the tested playbook, independent recovery, and revision ownership."],
  ["A-022", "Architecture Junction", "Engineering", "A technical platform choice quietly determines years of access, maintenance, cost, and future options.", "A consequential junction is being treated like a routine implementation preference.", "Compare branches by purpose, reversibility, inheritance, exit cost, and the smallest evidence-producing commitment.", "The chosen architecture has a recorded rationale, review trigger, and deliberately preserved options.", ["F-004", "F-009", "I-003"], ["Options preserved", "Switching cost exposed", "Assumptions validated before lock-in"], "False reversibility and underestimated migration costs must remain visible.", "Count the architecture decision record and evidence from the bounded commitment."],
  ["A-023", "Volunteer Onboarding", "Community", "New volunteers arrive motivated but depend on a few experienced people for every decision.", "Goodwill exists, but purpose, route, and safe authority have not transferred.", "Give one real contribution a purpose statement, route map, decision boundary, and named steward.", "A new volunteer completes useful work independently and knows when to escalate.", ["F-001", "F-006", "I-004"], ["Time to first independent contribution", "Mentor interruptions", "Volunteer retention"], "Onboarding must not exploit unpaid labor or hide safeguarding responsibilities.", "Count the onboarding artifact, independent contribution, and volunteer feedback."],
  ["A-024", "Navigating Public Services", "Community", "A resident repeats their story across disconnected offices and still cannot identify the next valid step.", "The service boundary is organized around institutions rather than the person's route and conserved time.", "Create a resident-centered waypoint showing current position, verified requirements, next action, and accountable escalation.", "The resident can move without restarting orientation at every handoff.", ["F-001", "I-005", "L-010"], ["Repeated information requests", "Successful handoffs", "Resident time to next valid step"], "Protect privacy, accessibility, due process, and the right to human assistance.", "Count the tested waypoint, successful transfer, and corrected service map."],
  ["A-025", "Personal Learning Project", "Personal", "A person collects tools, tutorials, and ideas but finishes no reusable capability.", "Potential energy is growing while no catalyst reaches a completed, reviewable result.", "Choose one small artifact that proves a capability, define done, and publish or demonstrate it to a real reviewer.", "Feedback creates the next orientation and the completed artifact becomes a waypoint rather than another intention.", ["P-001", "F-005", "G-001"], ["Completed artifact", "Reviewer evidence", "Capability reused in a second context"], "The artifact should fit available energy and must not turn learning into a measure of personal worth.", "Count the completed artifact, review, and demonstrated capability transfer."]
];

export const applications = applicationRows.map(([id, title, domain, situation, diagnosis, catalyst, reaction, relatedObjects, evidence, risks, genStandard]) => ({
  id, title, domain, situation, diagnosis, catalyst, reaction, relatedObjects, evidence, risks, genStandard, status: "Worked", version: "0.5"
}));

export function getApplication(id) {
  return applications.find((item) => item.id.toLowerCase() === id.toLowerCase());
}

const academyRows = [
  ["LP-001", "Begin at 0,0", "Foundation", "45 minutes", "Produce an evidence-based orientation brief before choosing movement.", "Anyone entering a new problem, project, or role.", ["No prior Meridian study required"], [["Name the position", "Describe present reality without prescribing a solution.", "F-001"], ["Separate evidence", "Mark what is known, assumed, and unknown.", "I-002"], ["Choose references", "Identify the signals that make the position credible.", "L-001"], ["Decide the next move", "State your confidence and the next question you need answered.", "M-001"]], "Complete the Orientation canvas for one real situation and have another person identify the evidence, assumptions, and next question without explanation.", ["Current position is stated independently of the desired destination", "Evidence and assumptions are visibly separated", "Confidence matches consequence", "The next question can change the route"], ["Present a new situation and produce a reviewable orientation brief in 15 minutes.", "Explain which uncertainty would most change the route.", "Name one condition under which movement should pause."], ["F-001", "I-002", "A-019"]],
  ["LP-002", "Find the First True Domino", "Foundation", "60 minutes", "Design a minimum sufficient catalyst tied to an observable second action.", "Builders, founders, teachers, and anyone initiating change.", ["LP-001 or equivalent orientation"], [["Define the reaction", "Describe continued useful motion, not merely the first event.", "D-001"], ["Find the receiver", "Identify the person or system that must move second.", "D-002"], ["Set sufficient energy", "Choose the least effort credible enough to reach transfer.", "D-003"], ["Instrument the test", "Name reaction, harm, and stop signals before release.", "F-005"]], "Turn one active plan into a catalyst record with a receiver, transfer signal, and shutdown boundary.", ["The first action is linked to an observable second action", "Minimum does not weaken credibility or safety", "A useful reaction can be distinguished from attention", "A steward and stop condition are named"], ["Given three possible first actions, defend which is sufficient and why.", "Identify what receives transferred energy.", "State what evidence authorizes scaling."], ["D-001", "F-005", "A-020"]],
  ["LP-003", "Make Reasoning Visible", "Foundation", "60 minutes", "Map a thought pathway so another person can inspect its evidence, assumptions, branches, and action.", "Teams facing disagreement, complexity, or hidden assumptions.", ["LP-001 recommended"], [["State one question", "Remove the preferred answer from the question itself.", "F-003"], ["Separate layers", "Distinguish observation, assumption, and interpretation.", "L-003"], ["Map alternate paths", "Show another interpretation that fits the same evidence.", "F-008"], ["Choose a learning action", "Select movement that serves purpose and reveals evidence.", "M-001"]], "Build a Thought Pathway from a disputed real decision and ask a reviewer to locate the first unsupported assumption.", ["Question is decision-shaped and neutral", "Facts and interpretations remain distinguishable", "At least one credible alternate path exists", "The chosen action includes a learning signal"], ["Map a short argument without hiding uncertainty.", "Identify where two interpretations diverge.", "Revise the action when one assumption changes."], ["F-003", "F-008", "A-011"]],
  ["LP-004", "Decide at the Junction", "Practice", "75 minutes", "Recognize a consequential junction and create a decision record with inherited consequences and a review trigger.", "Leaders, designers, families, and technical decision-makers.", ["LP-001", "LP-003 recommended"], [["Test the junction", "Determine whether the choice materially changes future options.", "F-004"], ["Restate purpose", "Keep purpose independent of the preferred branch.", "F-002"], ["Map inheritance", "Show who receives delayed benefits, burdens, and constraints.", "L-009"], ["Commit and revisit", "Record the branch, tradeoff, owner, and reopening condition.", "I-005"]], "Use the Junction canvas on one decision with at least two viable branches and a meaningful reversal cost.", ["Routine choice is not inflated into a junction", "Reversibility and inheritance are explicit", "The selected branch serves stated purpose", "The review trigger is evidence-based"], ["Distinguish a junction from a routine decision.", "Defend one branch without erasing its cost.", "State the exact evidence that could reopen it."], ["F-002", "F-004", "A-022"]],
  ["LP-005", "Close the Reflection Loop", "Practice", "60 minutes", "Convert experience into a specific change inherited by the next cycle.", "Individuals and teams who want learning to compound.", ["One completed action or event to examine"], [["Recover intent", "State what the action was meant to cause.", "F-007"], ["Observe reaction", "Record what reality did without cleaning the story.", "L-011"], ["Find discrepancy", "Locate where expectation and consequence differed.", "M-001"], ["Transfer the lesson", "Change a future action, map, or system.", "I-005"]], "Complete a Reflection Loop for a recent success or failure and update one real operating artifact from the lesson.", ["Intent and reaction are separately stated", "Unexpected success is examined as seriously as failure", "The lesson changes understanding", "A future system visibly inherits the change"], ["Explain why experience alone is not learning.", "Name the discrepancy that matters most.", "Show the artifact changed by reflection."], ["F-007", "I-005", "A-003"]],
  ["LP-006", "Build a Capability Multiplier", "Practice", "90 minutes", "Turn one investment of expertise into independently reusable capability.", "Experts, educators, operators, and automation designers.", ["LP-002 recommended"], [["Name repeated need", "Identify work or judgment that will recur.", "F-006"], ["Define capability", "State what another actor should be able to do.", "G-001"], ["Design transfer", "Create a mechanism that carries context and boundaries.", "L-004"], ["Test independence", "Observe use without creator rescue and record maintenance.", "L-005"]], "Create one reusable playbook, template, teaching aid, or workflow and test it with a real second user.", ["A recipient gains demonstrated capability", "Use succeeds without avoidable rescue", "Corrections and maintenance are counted", "Burden is not merely displaced"], ["Demonstrate the artifact with an unfamiliar user.", "Record where transfer stopped.", "Calculate the net capability after correction cost."], ["F-006", "G-001", "A-005"]],
  ["LP-007", "Diagnose the Pattern, Not the Person", "Practice", "75 minutes", "Recognize a recurring system condition and select a catalyst that changes its cause.", "Managers, families, teachers, facilitators, and community stewards.", ["LP-001 recommended"], [["Observe recurrence", "Require more than one event before naming a pattern.", "L-002"], ["Separate symptom and cause", "Trace conditions that recreate the outcome.", "P-001"], ["Reject the false fix", "Identify action that treats appearance or blames a person.", "F-010"], ["Choose a system catalyst", "Change one causal condition and watch the reaction.", "F-005"]], "Use one Pattern specification on a recurring situation and collect evidence for symptoms, causes, false fix, catalyst, and success signal.", ["The person is not reduced to the pattern", "Evidence supports recurrence", "The proposed cause is testable", "The catalyst changes a condition rather than a label"], ["Given a recurring problem, separate symptom from system cause.", "Name the attractive false fix.", "Select one bounded causal intervention."], ["L-002", "F-010", "A-001"]],
  ["LP-008", "Steward Meaningful Automation", "Advanced", "120 minutes", "Design an AI-assisted workflow that conserves time while preserving accountable human judgment.", "AI builders, service owners, policy leaders, and reviewers.", ["LP-002", "LP-004 recommended"], [["Name human purpose", "Identify the human capacity automation should protect.", "L-010"], ["Bound automation", "Separate routine reversible work from consequential judgment.", "I-004"], ["Preserve agency", "Provide explanation, appeal, context, and meaningful stop power.", "F-010"], ["Measure full transfer", "Count correction, review, displaced effort, and harm signals.", "G-002"]], "Redesign one AI-assisted process with a human review boundary, appeal path, evaluation evidence, and accountable steward.", ["Human review has time, context, authority, and stop power", "The affected person can understand and challenge the result", "Hidden correction work is measured", "Quality and safety qualify RoT"], ["Trace one automated outcome from input through appeal.", "Demonstrate that a reviewer can change the result.", "Explain whose time is conserved and whose may be consumed."], ["L-010", "I-004", "A-018"]],
  ["LP-009", "Map a Living System", "Advanced", "120 minutes", "Create a route map and health profile that another steward can use, challenge, and revise.", "Operators, successors, program managers, and system architects.", ["LP-001", "LP-005 recommended"], [["Bound the system", "Name purpose, participants, period, and accountable steward.", "F-010"], ["Map the route", "Preserve origin, junctions, waypoints, hazards, and unknowns.", "I-005"], ["Assess health", "Examine transfer, feedback, resilience, independence, and stewardship.", "L-005"], ["Publish revision", "Assign a next cartographer and a review signal.", "F-009"]], "Map one live system, score its health from evidence, and have another steward continue one cycle from the map.", ["The map preserves detours and uncertainty", "Every health reading cites evidence", "The weakest dimension produces an intervention", "Revision ownership is explicit"], ["Orient a new steward using only the map.", "Defend the weakest health dimension.", "Show how the map changes after one reaction."], ["F-010", "I-005", "A-021"]],
  ["LP-010", "Meridian Practitioner Capstone", "Capstone", "3–5 hours", "Apply the full Meridian Operating Cycle to create and transfer a reality-tested capability.", "Learners ready to demonstrate independent Meridian practice.", ["LP-001 through LP-007; LP-008 or LP-009 by domain"], [["Orient and discover", "Establish position and identify the highest-leverage unknown.", "M-001"], ["Design and catalyze", "Build the minimum sufficient action with safeguards.", "F-005"], ["Observe and reflect", "Record reaction, discrepancy, harm, and learning.", "F-007"], ["Compound and steward", "Transfer the resulting capability with ownership and revision.", "F-006"]], "Complete one original Meridian application from real situation through transferred capability, including all evidence and a reviewer who was not part of its creation.", ["All claims link to observable evidence", "The catalyst reaches a second action", "Reality changes the design or understanding", "Another person can use and continue the result", "GEN and human time are recorded with appropriate qualifications"], ["Present the complete operating cycle and evidence chain.", "Respond to a counterexample or boundary challenge.", "Demonstrate independent use by a second steward.", "Publish the revised application for reuse."], ["M-001", "G-001", "A-025"]]
];

export const academyPaths = academyRows.map(([id, title, level, duration, outcome, audience, prerequisites, lessons, exercise, mastery, assessment, relatedObjects]) => ({
  id, title, level, duration, outcome, audience, prerequisites, lessons, exercise, mastery, assessment, relatedObjects, status: "Guided", version: "0.5"
}));

export function getAcademyPath(id) {
  return academyPaths.find((item) => item.id.toLowerCase() === id.toLowerCase());
}

export const roadmap = [
  { phase: "Built", count: 125, label: "The knowledge system now includes evidence mapping, durable records, roles, administration, expanded methods, reader releases, and an externally validated foundation.", status: "Complete" },
  { phase: "Operational", count: 48, label: "Every current object includes a usable evidence standard or operating protocol.", status: "Complete" },
  { phase: "Glossary", count: 27, label: "Core terms have definitions, distinctions, examples, and cross-links.", status: "Complete" },
  { phase: "Applications", count: 25, label: "Worked scenarios test Meridian across eight real-life domains.", status: "Complete" },
  { phase: "Academy", count: 10, label: "Guided paths teach independent use and end in observable mastery.", status: "Complete" },
  { phase: "GEN Ledger", count: 1, label: "Completed capability, evidence, review state, human time, and Return on Time are now recorded.", status: "Complete" },
  { phase: "Journal", count: 1, label: "Observations, actions, reactions, learning, and next-cycle inheritance now form a reusable evidence chain.", status: "Complete" },
  { phase: "Labs", count: 1, label: "Hypotheses now become bounded experiments with safeguards, evidence signals, outcomes, and accountable review.", status: "Complete" },
  { phase: "Studio", count: 1, label: "Specification objects now compile into traceable field guides, lessons, and executive briefs for named audiences.", status: "Complete" },
  { phase: "Publication", count: 1, label: "Studio drafts now pass through accountable review, evidence, revision, acceptance, and release states.", status: "Complete" },
  { phase: "Release Library", count: 2, label: "Reviewed publications now have reader-facing records, provenance, revision details, and downloadable copies.", status: "Complete" },
  { phase: "Platform", count: 5, label: "Evidence Graph, D1 records, role authority, governance administration, and five expanded methods operate as one milestone.", status: "Complete" },
  { phase: "Validation", count: 10, label: "All ten hardening gates are proven; eight missions carry evidence, with a 94/100 usability score and no blocked tasks.", status: "Complete" },
  { phase: "Remediation", count: 4, label: "Validation findings now drive clearer first-use instructions, plainer Academy language, stronger light-theme contrast, and visible release evidence.", status: "Complete" },
  { phase: "Next", count: 1, label: "Prepare the validated Foundation as a versioned release candidate with a frozen scope and named acceptance criteria.", status: "Active" }
];

export const classifications = ["All", "Doctrine", "Law", "Framework", "Method", "Instrument", "Pattern", "Measurement"];

export function getObject(id) {
  return mksObjects.find((item) => item.id.toLowerCase() === id.toLowerCase());
}
