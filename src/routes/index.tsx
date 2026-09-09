import { createFileRoute } from "@tanstack/react-router";
import { Badge, Panel, Section, TableWrap, Td, Th } from "@/components/soc/primitives";
import {
  AUTH_LOGS,
  CASE_META,
  ENDPOINT_EVIDENCE,
  FINDINGS,
  IOCS,
  MITRE,
  NETWORK_LOGS,
  PHISH_EMAIL,
  RISKS,
  TIMELINE,
} from "@/data/investigation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "SOC Investigation Case Study | Suspicious Network Activity — UDS",
      },
      {
        name: "description",
        content:
          "A portfolio SOC case study: phishing-led credential abuse and suspected C2 beaconing at fictional Ubuntu Digital Services, with logs, IOCs, MITRE ATT&CK mapping and an analyst report.",
      },
      { property: "og:title", content: "SOC Investigation: Suspicious Network Activity" },
      {
        property: "og:description",
        content:
          "Full junior SOC analyst investigation — triage, evidence, IOCs, MITRE ATT&CK mapping, risk matrix and remediation plan.",
      },
    ],
  }),
  component: CaseStudy,
});

const NAV = [
  ["scenario", "Scenario"],
  ["timeline", "Timeline"],
  ["auth", "Auth Logs"],
  ["network", "Network"],
  ["endpoint", "Endpoint"],
  ["phishing", "Phishing"],
  ["analysis", "Analysis"],
  ["intel", "Threat Intel"],
  ["mitre", "ATT&CK"],
  ["risk", "Risk"],
  ["report", "Report"],
] as const;

const rowTone: Record<string, string> = {
  normal: "",
  suspicious: "bg-severity-medium/[0.06]",
  critical: "bg-severity-critical/[0.09]",
};

function CaseStudy() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-3">
          <span className="font-mono text-sm font-semibold text-primary">UDS&nbsp;SOC</span>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-24">
        {/* Hero */}
        <div className="py-16 md:py-24">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Badge tone="info">Case {CASE_META.caseId}</Badge>
            <Badge tone="high">Severity: {CASE_META.severity}</Badge>
            <Badge tone="low">{CASE_META.status}</Badge>
          </div>
          <h1 className="max-w-4xl text-3xl leading-tight font-bold md:text-5xl">
            Threat Analysis &amp; SOC Investigation:{" "}
            <span className="text-primary">Suspicious Network Activity</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            A junior SOC analyst walkthrough of a phishing-led credential abuse incident at Ubuntu
            Digital Services — from alert triage through evidence correlation, ATT&amp;CK mapping and
            a full remediation plan.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Analyst", CASE_META.analyst],
              ["Date", CASE_META.date],
              ["Affected host", CASE_META.workstation],
              ["Detection", "SIEM rule SOC-CR-118"],
            ].map(([k, v]) => (
              <Panel key={k}>
                <div className="label-mono mb-2">{k}</div>
                <div className="text-sm font-medium">{v}</div>
              </Panel>
            ))}
          </div>
          <p className="mt-8 rounded-md border border-accent/30 bg-accent/10 px-4 py-3 text-xs text-muted-foreground">
            <strong className="text-accent">Lab notice:</strong> Ubuntu Digital Services is a
            fictional organisation. Every log entry, IP address, hash, filename and account in this
            case study was invented for training. No real systems, people or malicious code are
            involved, and no offensive tooling or instructions are provided.
          </p>
        </div>

        {/* Scenario */}
        <Section
          id="scenario"
          index="01"
          title="Scenario & Objective"
          kicker="Ubuntu Digital Services is an 80-person business running Windows workstations, corporate Wi-Fi, email, cloud services and an internal customer database. The SOC received an alert on a single finance workstation."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <Panel className="lg:col-span-2">
              <h3 className="mb-4 text-lg font-semibold">What the monitoring system reported</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Multiple failed login attempts from a single internal host",
                  "A successful login seconds after the failure burst",
                  "Unusual outbound network connections outside baseline hours",
                  "Repeated contact with a suspicious external IP address",
                  "An unfamiliar executable written to the Downloads folder",
                  "A sharp increase in outbound traffic volume from the workstation",
                  "The employee had recently opened an email attachment that looked like an invoice",
                ].map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </Panel>
            <Panel>
              <h3 className="mb-4 text-lg font-semibold">Analyst workflow</h3>
              <ol className="space-y-1.5 font-mono text-xs text-muted-foreground">
                {[
                  "Alert identification",
                  "Initial triage",
                  "Evidence collection",
                  "Indicator analysis",
                  "Threat identification",
                  "Risk assessment",
                  "Incident classification",
                  "Containment",
                  "Remediation",
                  "Final report",
                ].map((s, i) => (
                  <li key={s}>
                    <span className="text-primary">{String(i + 1).padStart(2, "0")}</span> {s}
                  </li>
                ))}
              </ol>
            </Panel>
          </div>
        </Section>

        {/* Timeline */}
        <Section
          id="timeline"
          index="02"
          title="Investigation Timeline"
          kicker="All times SAST (UTC+2), 09 September 2026."
        >
          <ol className="relative space-y-5 border-l border-border pl-6">
            {TIMELINE.map((t) => (
              <li key={t.time + t.title} className="relative">
                <span
                  className={`absolute top-1.5 -left-[1.72rem] h-3 w-3 rounded-full border-2 border-background ${
                    t.level === "bad"
                      ? "bg-severity-critical"
                      : t.level === "warn"
                        ? "bg-severity-medium"
                        : t.level === "good"
                          ? "bg-severity-low"
                          : "bg-primary"
                  }`}
                />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-sm text-primary">{t.time}</span>
                  <span className="font-semibold">{t.title}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Auth logs */}
        <Section
          id="auth"
          index="03"
          title="Windows Authentication Logs"
          kicker="Security event log extract from UDS-WS-0421 and the domain controller. Highlighted rows deviate from the user's 30-day baseline."
        >
          <TableWrap>
            <thead>
              <tr>
                <Th>Time</Th>
                <Th>Event ID</Th>
                <Th>Username</Th>
                <Th>Source IP</Th>
                <Th>Logon type</Th>
                <Th>Status</Th>
                <Th>Description</Th>
              </tr>
            </thead>
            <tbody className="font-mono text-[0.8rem]">
              {AUTH_LOGS.map((e, i) => (
                <tr key={i} className={rowTone[e.flag]}>
                  <Td>{e.time}</Td>
                  <Td>{e.eventId}</Td>
                  <Td>{e.user}</Td>
                  <Td>{e.srcIp}</Td>
                  <Td>{e.logonType}</Td>
                  <Td>
                    <Badge
                      tone={
                        e.status === "Failure" ? "high" : e.status === "Success" ? "low" : "neutral"
                      }
                    >
                      {e.status}
                    </Badge>
                  </Td>
                  <Td className="font-sans text-muted-foreground">{e.desc}</Td>
                </tr>
              ))}
            </tbody>
          </TableWrap>
        </Section>

        {/* Network */}
        <Section
          id="network"
          index="04"
          title="Network Logs"
          kicker="Perimeter firewall and internal flow records for the alert window. Both routine business traffic and anomalies are included."
        >
          <TableWrap>
            <thead>
              <tr>
                <Th>Time</Th>
                <Th>Source IP</Th>
                <Th>Destination IP</Th>
                <Th>Port</Th>
                <Th>Protocol</Th>
                <Th>Bytes</Th>
                <Th>Action</Th>
                <Th>Risk</Th>
              </tr>
            </thead>
            <tbody className="font-mono text-[0.8rem]">
              {NETWORK_LOGS.map((n, i) => (
                <tr key={i} className={n.risk === "High" ? "bg-severity-critical/[0.07]" : ""}>
                  <Td>{n.time}</Td>
                  <Td>{n.src}</Td>
                  <Td>{n.dst}</Td>
                  <Td>{n.port}</Td>
                  <Td>{n.proto}</Td>
                  <Td>{n.bytes}</Td>
                  <Td>
                    <Badge tone={n.action === "Blocked" ? "neutral" : "info"}>{n.action}</Badge>
                  </Td>
                  <Td>
                    <Badge tone={n.risk}>{n.risk}</Badge>
                  </Td>
                </tr>
              ))}
            </tbody>
          </TableWrap>
        </Section>

        {/* Endpoint */}
        <Section
          id="endpoint"
          index="05"
          title="Endpoint Evidence"
          kicker="Artefacts collected from the affected workstation by the EDR agent before isolation."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {ENDPOINT_EVIDENCE.map((e) => (
              <Panel key={e.label}>
                <div className="label-mono mb-2">{e.label}</div>
                <div className="font-mono text-sm break-all">{e.value}</div>
              </Panel>
            ))}
          </div>
        </Section>

        {/* Phishing */}
        <Section
          id="phishing"
          index="06"
          title="Phishing Email Evidence"
          kicker="Message headers and body characteristics recovered from the mail gateway quarantine copy."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <Panel>
              <div className="space-y-2.5 font-mono text-sm">
                {[
                  ["From", `${PHISH_EMAIL.displayName} <${PHISH_EMAIL.sender}>`],
                  ["To", PHISH_EMAIL.recipient],
                  ["Subject", PHISH_EMAIL.subject],
                  ["Received", PHISH_EMAIL.timestamp],
                  ["Return-Path", PHISH_EMAIL.returnPath],
                  ["Attachment", PHISH_EMAIL.attachment],
                  ["Type", PHISH_EMAIL.attachmentType],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[7rem_1fr] gap-3">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="break-words">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                <Badge tone="high">SPF: {PHISH_EMAIL.spf}</Badge>
                <Badge tone="high">DKIM: {PHISH_EMAIL.dkim}</Badge>
                <Badge tone="critical">DMARC: {PHISH_EMAIL.dmarc}</Badge>
              </div>
            </Panel>
            <div className="space-y-5">
              <Panel>
                <h3 className="mb-3 font-semibold">Suspicious indicators</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {PHISH_EMAIL.indicators.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-severity-high" />
                      {i}
                    </li>
                  ))}
                </ul>
              </Panel>
              <Panel>
                <h3 className="mb-3 font-semibold">Social-engineering techniques</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {PHISH_EMAIL.socialEngineering.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </div>
        </Section>

        {/* Analysis */}
        <Section
          id="analysis"
          index="07"
          title="Threat Analysis"
          kicker="Correlating the three evidence sources to separate genuine threat activity from noise."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {FINDINGS.map((f) => (
              <Panel key={f.q}>
                <h3 className="mb-2 font-semibold text-primary">{f.q}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </Panel>
            ))}
          </div>
        </Section>

        {/* Threat intel */}
        <Section
          id="intel"
          index="08"
          title="Threat Intelligence"
          kicker="Indicators of compromise extracted from the case, and how an analyst would validate them."
        >
          <TableWrap>
            <thead>
              <tr>
                <Th>IOC type</Th>
                <Th>Indicator</Th>
                <Th>Evidence</Th>
                <Th>Risk</Th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {IOCS.map((i) => (
                <tr key={i.indicator}>
                  <Td className="whitespace-nowrap">{i.type}</Td>
                  <Td className="font-mono break-all">{i.indicator}</Td>
                  <Td className="text-muted-foreground">{i.evidence}</Td>
                  <Td>
                    <Badge tone={i.risk}>{i.risk}</Badge>
                  </Td>
                </tr>
              ))}
            </tbody>
          </TableWrap>
          <Panel className="mt-5">
            <h3 className="mb-3 font-semibold">How these indicators would be validated</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                "Submit hashes to reputation services such as VirusTotal or the organisation's own sandbox, comparing detection ratios and first-seen dates rather than trusting a single verdict.",
                "Check IP and domain reputation through commercial or open feeds (AlienVault OTX, abuse.ch, Cisco Talos, Spamhaus) and confirm registration age via WHOIS — domains registered days before an incident are a strong signal.",
                "Search the SIEM for the same indicators across all hosts to establish scope: is this one workstation, or a campaign?",
                "Compare observed behaviour with MITRE ATT&CK technique descriptions and published threat-actor profiles to test the working hypothesis.",
                "Grade each indicator by confidence and lifespan. A file hash is durable; an IP address may be shared infrastructure and can produce false positives if blocked indiscriminately.",
                "Record validated indicators in the case ticket and push high-confidence ones to blocklists, keeping the low-confidence ones on a watchlist instead.",
              ].map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
              All indicators listed above are fictional and use documentation ranges. Analysts should
              never connect to suspected malicious infrastructure from a corporate host — validation
              is done through passive intelligence sources or an isolated sandbox.
            </p>
          </Panel>
        </Section>

        {/* MITRE */}
        <Section
          id="mitre"
          index="09"
          title="MITRE ATT&CK Mapping"
          kicker="Only techniques directly supported by the collected evidence are mapped."
        >
          <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs">
            {[
              "Initial Access",
              "Execution",
              "Credential Activity",
              "Network Communication",
              "Potential Impact",
            ].map((s, i, a) => (
              <span key={s} className="flex items-center gap-2">
                <span className="rounded border border-primary/40 bg-primary/10 px-2.5 py-1.5 text-primary">
                  {s}
                </span>
                {i < a.length - 1 && <span className="text-muted-foreground">→</span>}
              </span>
            ))}
          </div>
          <TableWrap>
            <thead>
              <tr>
                <Th>Tactic</Th>
                <Th>Technique</Th>
                <Th>ID</Th>
                <Th>Evidence</Th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {MITRE.map((m) => (
                <tr key={m.id + m.tactic}>
                  <Td className="whitespace-nowrap">{m.tactic}</Td>
                  <Td>{m.tech}</Td>
                  <Td className="font-mono whitespace-nowrap text-primary">{m.id}</Td>
                  <Td className="text-muted-foreground">{m.evidence}</Td>
                </tr>
              ))}
            </tbody>
          </TableWrap>
        </Section>

        {/* Risk */}
        <Section
          id="risk"
          index="10"
          title="Risk Assessment"
          kicker="Likelihood × impact for each risk area, with the reasoning behind each rating."
        >
          <div className="space-y-4">
            {RISKS.map((r) => (
              <Panel key={r.risk}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{r.risk}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge tone={r.likelihood}>Likelihood: {r.likelihood}</Badge>
                    <Badge tone={r.impact}>Impact: {r.impact}</Badge>
                    <Badge tone={r.severity}>Severity: {r.severity}</Badge>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.rationale}</p>
              </Panel>
            ))}
          </div>
        </Section>

        {/* Report */}
        <Section
          id="report"
          index="11"
          title="SOC Analyst Report"
          kicker={`Case ${CASE_META.caseId} — final report prepared for IT management and the business owner.`}
        >
          <div className="space-y-5">
            <Panel>
              <h3 className="mb-3 text-lg font-semibold">1. Executive Summary</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                On the morning of 9 September 2026, a staff member in the finance team received an
                email that looked like an overdue invoice from an internal department. It was not
                genuine. Opening the attachment allowed an unauthorised program to run on the
                laptop. That program switched off the security software, tried to guess several
                staff passwords, gained access to the employee's account, created a hidden
                administrator account and began sending information out to an external computer on
                the internet. The security team detected the pattern within an hour, isolated the
                laptop from the network, disabled the account and blocked the external address. One
                machine and one account were affected; there is no evidence that other staff
                machines were successfully accessed. Some business data may have left the network,
                so we treat this as a High severity incident and recommend the controls listed in
                section 10.
              </p>
            </Panel>

            <Panel>
              <h3 className="mb-4 text-lg font-semibold">2. Incident Overview</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["Date", CASE_META.date],
                  ["Affected workstation", CASE_META.workstation],
                  ["Affected user", `UDS\\${CASE_META.user} (Finance)`],
                  ["Detection source", CASE_META.detection],
                  ["Incident type", CASE_META.incidentType],
                  ["Severity", CASE_META.severity],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="label-mono mb-1">{k}</div>
                    <div className="text-sm">{v}</div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel>
              <h3 className="mb-3 text-lg font-semibold">3. Indicators of Compromise</h3>
              <p className="text-sm text-muted-foreground">
                The consolidated IOC table is in section 08 above. Eleven indicators were extracted:
                two external IP addresses, two domains, one file hash, two filenames, two accounts,
                one registry key and one behavioural pattern. Nine are rated High risk and were
                pushed to perimeter and endpoint blocklists.
              </p>
            </Panel>

            <Panel>
              <h3 className="mb-3 text-lg font-semibold">4. Investigation Findings</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Process ancestry ties the executable directly to the opened attachment, confirming email as the entry point rather than a web download or removable media.",
                  "The authentication burst is machine-speed and spans four usernames including default administrative names — inconsistent with human error and consistent with automated guessing.",
                  "The successful logon 14 seconds after the last failure, followed by a special-privileges event, indicates the attacker obtained a working credential and an elevated token.",
                  "Outbound sessions to 198.51.100.24:8443 repeat on an almost exact 5-minute interval with near-identical small payloads — a beaconing signature, not user-driven browsing.",
                  "A 36.7 MB database read immediately preceding a 128.9 MB outbound transfer suggests data was staged and then exfiltrated over the same channel.",
                  "Network segmentation blocked SMB and RDP attempts to two of three peer hosts, which materially limited the blast radius.",
                  "Baseline traffic to sanctioned cloud services and the scheduled svc_backup logons were reviewed and excluded as benign.",
                ].map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel>
              <h3 className="mb-4 text-lg font-semibold">5. Attack Chain</h3>
              <div className="space-y-3">
                {[
                  ["Initial Access", "Spearphishing attachment opened by a finance user at 10:33."],
                  ["Execution", "Macro spawns cmd.exe and hidden PowerShell; unsigned binary written to Downloads and launched at 10:52."],
                  ["Credential Activity", "Password guessing across four accounts, then a successful logon with elevated privileges; a local admin account is created for persistence."],
                  ["Network Communication", "Fixed-interval TLS beacons to an external host on port 8443, plus high-entropy DNS queries."],
                  ["Potential Impact", "Database read followed by a large outbound transfer; lateral movement attempted against three peer workstations."],
                ].map(([stage, detail], i) => (
                  <div key={stage} className="flex gap-4">
                    <span className="mt-0.5 font-mono text-sm text-primary">0{i + 1}</span>
                    <div>
                      <div className="font-semibold">{stage}</div>
                      <p className="text-sm text-muted-foreground">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel>
              <h3 className="mb-3 text-lg font-semibold">6. MITRE ATT&amp;CK Mapping</h3>
              <p className="text-sm text-muted-foreground">
                Thirteen techniques across nine tactics were mapped in section 09, from
                T1566.001 (Spearphishing Attachment) at initial access through to T1041
                (Exfiltration Over C2 Channel).
              </p>
            </Panel>

            <Panel>
              <h3 className="mb-3 text-lg font-semibold">7. Risk Assessment</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Overall risk is <strong className="text-severity-high">High</strong>. Credential
                compromise and malware infection are both confirmed rather than suspected, and the
                affected host held a live route to the customer database. Exfiltration is rated
                Medium likelihood because the transfer volume and timing are strongly suggestive but
                the payload contents could not be recovered from encrypted sessions. Business
                disruption remains Low: containment affected one user, and no destructive or
                ransomware behaviour was observed.
              </p>
            </Panel>

            <div className="grid gap-5 lg:grid-cols-2">
              <Panel>
                <h3 className="mb-3 text-lg font-semibold">8. Containment Recommendations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Isolate UDS-WS-0421 from the network while retaining EDR connectivity for forensics.",
                    "Disable t.mokoena and svc_sql, and delete the unauthorised sysupd_svc account.",
                    "Block 198.51.100.24, 203.0.113.77 and the two identified domains at the firewall and DNS resolver.",
                    "Force a password reset for the affected user and any account touched by the guessing attempt; revoke active sessions and tokens.",
                    "Review authentication logs across the domain for the same source pattern on other hosts.",
                    "Preserve evidence: capture memory and a disk image, and export the relevant log ranges with hashes before remediation begins.",
                    "Quarantine the phishing message across all mailboxes and check whether other recipients received it.",
                  ].map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-severity-low" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Panel>
              <Panel>
                <h3 className="mb-3 text-lg font-semibold">9. Eradication &amp; Recovery</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Remove the malicious binary, the APPDATA payload directory and the HKCU Run persistence key.",
                    "Rebuild the workstation from a trusted gold image rather than cleaning in place, given the admin-level compromise.",
                    "Patch Office, the operating system and the browser to current baseline before returning the host to service.",
                    "Restore user data from a backup taken before 10:28 on 9 September and scan it before restoring.",
                    "Re-enable and verify EDR real-time protection, and add a rule alerting on any attempt to disable it.",
                    "Monitor the affected accounts and the rebuilt host for 30 days with elevated logging.",
                    "Re-scan peer hosts 10.20.4.22–.24 for the same indicators before closing the case.",
                  ].map((s) => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>

            <Panel>
              <h3 className="mb-4 text-lg font-semibold">10. Lessons Learned</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["Multi-factor authentication", "Enforce MFA on all accounts, including internal network logons where supported. MFA would likely have stopped the successful logon at 10:42."],
                  ["Email security", "Block macro-enabled attachments from external senders, enforce DMARC quarantine, and add external-sender banners plus look-alike-domain detection."],
                  ["Endpoint protection", "Prevent standard users from disabling EDR, enable tamper protection, and apply application control so unsigned binaries cannot run from Downloads."],
                  ["Security awareness", "Run quarterly phishing simulations targeted at finance and executive roles, with one-click reporting built into the mail client."],
                  ["Logging", "Ensure process-creation (4688) and PowerShell script-block logging are on across the estate and retained for at least 12 months."],
                  ["SIEM monitoring", "Add detections for fixed-interval beaconing, EDR tamper events, local admin account creation and Office spawning script interpreters."],
                  ["Password policy", "Move to long passphrases with a breached-password check, and tighten lockout thresholds so a 9-attempt burst locks the account automatically."],
                  ["Network monitoring", "Alert on TLS to non-standard ports, unusual outbound volume from workstations, and extend segmentation so workstations cannot reach each other over SMB or RDP at all."],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-md border border-border/70 bg-secondary/30 p-4">
                    <div className="mb-1.5 font-semibold text-primary">{k}</div>
                    <p className="text-sm text-muted-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </Section>

        <footer className="border-t border-border/60 pt-8 text-xs text-muted-foreground">
          Portfolio case study · Ubuntu Digital Services is fictional · All data synthetic and for
          educational use only.
        </footer>
      </main>
    </div>
  );
}
