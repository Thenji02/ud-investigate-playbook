// Fictional lab dataset — Ubuntu Digital Services (UDS) SOC exercise.
// All IPs use RFC 5737 TEST-NET / RFC 1918 ranges. Hashes and filenames are invented.

export const CASE_META = {
  caseId: "UDS-IR-2026-0417",
  title: "Threat Analysis & SOC Investigation: Suspicious Network Activity",
  org: "Ubuntu Digital Services (UDS)",
  analyst: "Junior SOC Analyst",
  date: "09 September 2026",
  workstation: "UDS-WS-0421 (Windows 11 Pro)",
  user: "t.mokoena",
  detection: "SIEM correlation rule — SOC-CR-118 (Brute force followed by success)",
  incidentType: "Phishing-led credential abuse with suspected C2 beaconing",
  severity: "High",
  status: "Contained — monitoring",
};

export type AuthEvent = {
  time: string;
  eventId: string;
  user: string;
  srcIp: string;
  logonType: string;
  status: "Failure" | "Success" | "Info";
  desc: string;
  flag: "normal" | "suspicious" | "critical";
};

export const AUTH_LOGS: AuthEvent[] = [
  { time: "08:02:14", eventId: "4624", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "2 - Interactive", status: "Success", desc: "Workstation unlock, start of shift", flag: "normal" },
  { time: "08:05:47", eventId: "4624", user: "n.dlamini", srcIp: "10.20.4.33", logonType: "2 - Interactive", status: "Success", desc: "Normal interactive logon", flag: "normal" },
  { time: "08:31:09", eventId: "4624", user: "svc_backup", srcIp: "10.20.9.10", logonType: "5 - Service", status: "Success", desc: "Scheduled backup service start", flag: "normal" },
  { time: "09:14:52", eventId: "4624", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Success", desc: "File share access, FIN-SHARE01", flag: "normal" },
  { time: "10:41:03", eventId: "4625", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Bad password (0xC000006A) — first anomaly", flag: "suspicious" },
  { time: "10:41:07", eventId: "4625", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Bad password (0xC000006A)", flag: "suspicious" },
  { time: "10:41:11", eventId: "4625", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Bad password (0xC000006A)", flag: "suspicious" },
  { time: "10:41:16", eventId: "4625", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Bad password (0xC000006A)", flag: "suspicious" },
  { time: "10:41:22", eventId: "4625", user: "admin", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Unknown username (0xC0000064) — account enumeration", flag: "suspicious" },
  { time: "10:41:27", eventId: "4625", user: "administrator", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Unknown username (0xC0000064)", flag: "suspicious" },
  { time: "10:41:33", eventId: "4625", user: "helpdesk", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Unknown username (0xC0000064)", flag: "suspicious" },
  { time: "10:41:39", eventId: "4625", user: "s.naidoo", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Bad password (0xC000006A)", flag: "suspicious" },
  { time: "10:41:44", eventId: "4625", user: "s.naidoo", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Bad password (0xC000006A)", flag: "suspicious" },
  { time: "10:41:52", eventId: "4625", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Bad password (0xC000006A) — 9th failure in 49s", flag: "suspicious" },
  { time: "10:42:06", eventId: "4624", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Success", desc: "Successful logon immediately after failure burst", flag: "critical" },
  { time: "10:42:08", eventId: "4672", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Info", desc: "Special privileges assigned to new logon", flag: "critical" },
  { time: "10:43:31", eventId: "4648", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "9 - NewCredentials", status: "Success", desc: "Explicit credential logon to DB-SRV02 — possible lateral movement attempt", flag: "critical" },
  { time: "10:44:02", eventId: "4625", user: "svc_sql", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Bad password against DB-SRV02 service account", flag: "suspicious" },
  { time: "10:44:19", eventId: "4625", user: "svc_sql", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Bad password against DB-SRV02 service account", flag: "suspicious" },
  { time: "10:47:55", eventId: "4624", user: "p.vandermerwe", srcIp: "10.20.5.14", logonType: "2 - Interactive", status: "Success", desc: "Normal interactive logon (unrelated)", flag: "normal" },
  { time: "10:52:30", eventId: "4688", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "n/a", status: "Info", desc: "New process created: invoice_march_2026.pdf.exe", flag: "critical" },
  { time: "11:05:12", eventId: "4624", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Success", desc: "Repeat network logon during off-pattern window", flag: "suspicious" },
  { time: "11:18:44", eventId: "4634", user: "n.dlamini", srcIp: "10.20.4.33", logonType: "2 - Interactive", status: "Info", desc: "Logoff, lunch break", flag: "normal" },
  { time: "11:26:03", eventId: "4720", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "n/a", status: "Info", desc: "Local account created: 'sysupd_svc' — persistence attempt", flag: "critical" },
  { time: "11:26:41", eventId: "4732", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "n/a", status: "Info", desc: "'sysupd_svc' added to local Administrators group", flag: "critical" },
  { time: "11:40:18", eventId: "4624", user: "svc_backup", srcIp: "10.20.9.10", logonType: "5 - Service", status: "Success", desc: "Scheduled backup service run", flag: "normal" },
  { time: "12:02:55", eventId: "4625", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "3 - Network", status: "Failure", desc: "Logon blocked after SOC-initiated account disable", flag: "normal" },
  { time: "12:03:10", eventId: "4740", user: "t.mokoena", srcIp: "10.20.4.21", logonType: "n/a", status: "Info", desc: "Account locked out by SOC containment action", flag: "normal" },
];

export type NetEvent = {
  time: string;
  src: string;
  dst: string;
  port: number;
  proto: string;
  bytes: string;
  action: "Allowed" | "Blocked";
  risk: "Low" | "Medium" | "High";
};

export const NETWORK_LOGS: NetEvent[] = [
  { time: "08:03:21", src: "10.20.4.21", dst: "10.20.9.5", port: 445, proto: "TCP/SMB", bytes: "1.2 MB", action: "Allowed", risk: "Low" },
  { time: "08:12:40", src: "10.20.4.21", dst: "203.0.113.10", port: 443, proto: "TCP/TLS", bytes: "4.8 MB", action: "Allowed", risk: "Low" },
  { time: "09:01:16", src: "10.20.4.21", dst: "10.20.9.20", port: 1433, proto: "TCP/SQL", bytes: "820 KB", action: "Allowed", risk: "Low" },
  { time: "09:33:02", src: "10.20.4.21", dst: "203.0.113.25", port: 443, proto: "TCP/TLS", bytes: "12.4 MB", action: "Allowed", risk: "Low" },
  { time: "10:35:48", src: "10.20.4.21", dst: "203.0.113.77", port: 80, proto: "TCP/HTTP", bytes: "684 KB", action: "Allowed", risk: "High" },
  { time: "10:52:33", src: "10.20.4.21", dst: "198.51.100.24", port: 8443, proto: "TCP/TLS", bytes: "3 KB", action: "Allowed", risk: "High" },
  { time: "10:57:33", src: "10.20.4.21", dst: "198.51.100.24", port: 8443, proto: "TCP/TLS", bytes: "3 KB", action: "Allowed", risk: "High" },
  { time: "11:02:33", src: "10.20.4.21", dst: "198.51.100.24", port: 8443, proto: "TCP/TLS", bytes: "3 KB", action: "Allowed", risk: "High" },
  { time: "11:07:33", src: "10.20.4.21", dst: "198.51.100.24", port: 8443, proto: "TCP/TLS", bytes: "3 KB", action: "Allowed", risk: "High" },
  { time: "11:09:14", src: "10.20.4.21", dst: "10.20.4.22", port: 445, proto: "TCP/SMB", bytes: "2.1 MB", action: "Allowed", risk: "Medium" },
  { time: "11:09:41", src: "10.20.4.21", dst: "10.20.4.23", port: 445, proto: "TCP/SMB", bytes: "2.0 MB", action: "Blocked", risk: "Medium" },
  { time: "11:10:05", src: "10.20.4.21", dst: "10.20.4.24", port: 3389, proto: "TCP/RDP", bytes: "48 KB", action: "Blocked", risk: "High" },
  { time: "11:12:33", src: "10.20.4.21", dst: "198.51.100.24", port: 8443, proto: "TCP/TLS", bytes: "3 KB", action: "Allowed", risk: "High" },
  { time: "11:17:33", src: "10.20.4.21", dst: "198.51.100.24", port: 8443, proto: "TCP/TLS", bytes: "3 KB", action: "Allowed", risk: "High" },
  { time: "11:22:09", src: "10.20.4.21", dst: "192.0.2.148", port: 53, proto: "UDP/DNS", bytes: "96 KB", action: "Allowed", risk: "High" },
  { time: "11:24:51", src: "10.20.4.21", dst: "10.20.9.20", port: 1433, proto: "TCP/SQL", bytes: "36.7 MB", action: "Allowed", risk: "High" },
  { time: "11:31:12", src: "10.20.4.21", dst: "198.51.100.24", port: 8443, proto: "TCP/TLS", bytes: "128.9 MB", action: "Allowed", risk: "High" },
  { time: "11:44:03", src: "10.20.4.33", dst: "203.0.113.10", port: 443, proto: "TCP/TLS", bytes: "6.3 MB", action: "Allowed", risk: "Low" },
  { time: "11:52:33", src: "10.20.4.21", dst: "198.51.100.24", port: 8443, proto: "TCP/TLS", bytes: "3 KB", action: "Allowed", risk: "High" },
  { time: "12:01:47", src: "10.20.4.21", dst: "198.51.100.24", port: 8443, proto: "TCP/TLS", bytes: "0 KB", action: "Blocked", risk: "High" },
];

export const ENDPOINT_EVIDENCE = [
  { label: "Suspicious filename", value: "invoice_march_2026.pdf.exe" },
  { label: "File created", value: "09 Sep 2026, 10:35:52 SAST" },
  { label: "File location", value: "C:\\Users\\t.mokoena\\Downloads\\" },
  { label: "SHA-256 (fictional)", value: "a1b2c3d4e5f60718293a4b5c6d7e8f90112233445566778899aabbccddeeff00" },
  { label: "MD5 (fictional)", value: "0f1e2d3c4b5a69788796a5b4c3d2e1f0" },
  { label: "Digital signature", value: "Unsigned" },
  { label: "Parent process", value: "OUTLOOK.EXE → EXCEL.EXE → cmd.exe" },
  { label: "Child process", value: "powershell.exe -w hidden -enc <base64 blob, redacted>" },
  { label: "Network connection", value: "198.51.100.24:8443 (outbound TLS, 5-minute interval)" },
  { label: "Persistence artefact", value: "HKCU\\...\\Run\\SysUpdateSvc → %APPDATA%\\sysupd\\sysupd.exe" },
  { label: "User account context", value: "UDS\\t.mokoena (standard user, later local admin)" },
  { label: "AV/EDR status", value: "Real-time protection disabled at 10:53:04 by local process" },
];

export const PHISH_EMAIL = {
  sender: "accounts@uds-billing-portal.example",
  displayName: "UDS Accounts Payable",
  recipient: "t.mokoena@ubuntudigital.example",
  subject: "RE: Outstanding Invoice #INV-2026-0318 — Payment Due Today",
  timestamp: "09 Sep 2026, 10:28:41 SAST",
  attachment: "invoice_march_2026.xlsm",
  attachmentType: "Excel macro-enabled workbook (application/vnd.ms-excel.sheet.macroEnabled.12)",
  returnPath: "no-reply@mail-relay-77.example",
  spf: "SOFTFAIL",
  dkim: "None",
  dmarc: "Fail",
  indicators: [
    "Look-alike sender domain (uds-billing-portal.example) not owned by UDS",
    "Display name spoofs an internal department while envelope sender is external",
    "SPF softfail, no DKIM signature, DMARC failure",
    '"RE:" prefix implying a prior conversation that does not exist',
    "Macro-enabled attachment from an external sender",
    "Attachment triggers a download of a secondary executable payload",
    "Generic greeting with an unfamiliar invoice reference number",
  ],
  socialEngineering: [
    "Urgency — 'payment due today'",
    "Authority — impersonates internal finance function",
    "Familiarity — fake reply thread",
    "Routine pretext — invoices are normal for this recipient's role",
  ],
};

export const IOCS = [
  { type: "IPv4", indicator: "198.51.100.24", evidence: "Repeating 3 KB outbound TLS beacons every 5 min, then 128.9 MB upload", risk: "High" },
  { type: "IPv4", indicator: "203.0.113.77", evidence: "HTTP payload download immediately before file creation", risk: "High" },
  { type: "Domain", indicator: "uds-billing-portal.example", evidence: "Phishing sender domain, look-alike of corporate brand", risk: "High" },
  { type: "Domain", indicator: "cdn-update-node.example", evidence: "Long, high-entropy DNS queries at 11:22 — possible DNS tunnelling", risk: "High" },
  { type: "SHA-256", indicator: "a1b2c3…eeff00", evidence: "Unsigned executable in Downloads, spawned by Office process chain", risk: "High" },
  { type: "Filename", indicator: "invoice_march_2026.pdf.exe", evidence: "Double extension masquerading as a PDF", risk: "High" },
  { type: "Filename", indicator: "invoice_march_2026.xlsm", evidence: "Macro-enabled phishing attachment", risk: "High" },
  { type: "Account", indicator: "sysupd_svc", evidence: "Local admin account created at 11:26, not in HR or IT records", risk: "High" },
  { type: "Account", indicator: "t.mokoena", evidence: "9 failed logons then success; privileged token issued", risk: "Medium" },
  { type: "Registry", indicator: "HKCU\\…\\Run\\SysUpdateSvc", evidence: "Autorun persistence key created post-execution", risk: "Medium" },
  { type: "Behaviour", indicator: "5-minute fixed-interval beacon", evidence: "Low-jitter periodic callbacks typical of C2 framework", risk: "High" },
];

export const MITRE = [
  { tactic: "Initial Access", tech: "Phishing: Spearphishing Attachment", id: "T1566.001", evidence: "Macro-enabled invoice attachment from look-alike domain, opened 10:33" },
  { tactic: "Execution", tech: "User Execution: Malicious File", id: "T1204.002", evidence: "User enabled macros; EXCEL.EXE spawned cmd.exe" },
  { tactic: "Execution", tech: "Command and Scripting Interpreter: PowerShell", id: "T1059.001", evidence: "powershell.exe -w hidden -enc launched by cmd.exe" },
  { tactic: "Defense Evasion", tech: "Masquerading: Double File Extension", id: "T1036.007", evidence: "invoice_march_2026.pdf.exe presented as a PDF" },
  { tactic: "Defense Evasion", tech: "Impair Defenses: Disable or Modify Tools", id: "T1562.001", evidence: "EDR real-time protection disabled at 10:53:04" },
  { tactic: "Persistence", tech: "Boot or Logon Autostart Execution: Registry Run Keys", id: "T1547.001", evidence: "HKCU Run key 'SysUpdateSvc' created" },
  { tactic: "Persistence", tech: "Create Account: Local Account", id: "T1136.001", evidence: "Event 4720 — 'sysupd_svc' created and added to Administrators (4732)" },
  { tactic: "Credential Access", tech: "Brute Force: Password Guessing", id: "T1110.001", evidence: "9 failed logons across 4 accounts in 49 seconds" },
  { tactic: "Discovery", tech: "Remote System Discovery", id: "T1018", evidence: "Sequential SMB/RDP attempts to 10.20.4.22–.24" },
  { tactic: "Lateral Movement", tech: "Remote Services: SMB/Windows Admin Shares", id: "T1021.002", evidence: "SMB connections to peer workstations, two blocked" },
  { tactic: "Command and Control", tech: "Application Layer Protocol: Web Protocols", id: "T1071.001", evidence: "TLS beacons to 198.51.100.24:8443" },
  { tactic: "Command and Control", tech: "Non-Standard Port", id: "T1571", evidence: "TLS carried over 8443 rather than 443" },
  { tactic: "Exfiltration", tech: "Exfiltration Over C2 Channel", id: "T1041", evidence: "128.9 MB outbound burst at 11:31 after 36.7 MB SQL read" },
];

export const RISKS = [
  { risk: "Credential compromise", likelihood: "High", impact: "High", severity: "Critical", rationale: "A success immediately followed a failure burst, and a privileged token was issued. The account's password must be treated as known to the attacker." },
  { risk: "Malware infection", likelihood: "High", impact: "High", severity: "Critical", rationale: "Unsigned executable ran from Downloads with an Office parent chain, disabled EDR and established registry persistence." },
  { risk: "Data exfiltration", likelihood: "Medium", impact: "High", severity: "High", rationale: "A 36.7 MB database read was followed by a 128.9 MB outbound transfer to the C2 host — volume and sequencing are consistent with staged exfiltration, though content was not confirmed." },
  { risk: "Lateral movement", likelihood: "Medium", impact: "High", severity: "High", rationale: "SMB and RDP attempts to three peer workstations plus explicit-credential logons to DB-SRV02; segmentation blocked two attempts, limiting spread." },
  { risk: "Business disruption", likelihood: "Low", impact: "Medium", severity: "Medium", rationale: "One workstation isolated and one account disabled. No ransomware or destructive behaviour observed; finance user productivity temporarily affected." },
];

export const TIMELINE = [
  { time: "10:28", title: "Phishing email received", detail: "Look-alike invoice email delivered to t.mokoena; SPF softfail, DMARC fail.", level: "warn" },
  { time: "10:33", title: "Attachment opened, macros enabled", detail: "EXCEL.EXE spawns cmd.exe — first deviation from normal endpoint behaviour.", level: "warn" },
  { time: "10:35", title: "Payload downloaded", detail: "HTTP request to 203.0.113.77 creates invoice_march_2026.pdf.exe in Downloads.", level: "bad" },
  { time: "10:41", title: "Authentication attempts", detail: "9 failed logons across 4 accounts in 49 seconds from 10.20.4.21.", level: "bad" },
  { time: "10:42", title: "Successful login", detail: "Event 4624 followed by 4672 — special privileges assigned.", level: "bad" },
  { time: "10:52", title: "Executable launched, EDR disabled", detail: "Hidden encoded PowerShell child process; real-time protection turned off.", level: "bad" },
  { time: "10:57", title: "C2 beaconing begins", detail: "3 KB TLS callbacks to 198.51.100.24:8443 on a fixed 5-minute interval.", level: "bad" },
  { time: "11:09", title: "Lateral movement attempts", detail: "SMB and RDP to three peer hosts; two blocked by segmentation policy.", level: "bad" },
  { time: "11:26", title: "Persistence established", detail: "Local admin account 'sysupd_svc' created; HKCU Run key added.", level: "bad" },
  { time: "11:31", title: "Large outbound transfer", detail: "128.9 MB pushed to the C2 host after a 36.7 MB database read.", level: "bad" },
  { time: "11:38", title: "SOC alert raised", detail: "Correlation rule SOC-CR-118 fires; case UDS-IR-2026-0417 opened.", level: "info" },
  { time: "11:38–12:00", title: "Triage & investigation", detail: "Authentication, network and endpoint evidence collected and correlated.", level: "info" },
  { time: "12:02", title: "Containment", detail: "Workstation isolated, account disabled, C2 indicators blocked at the perimeter.", level: "good" },
];

export const FINDINGS = [
  { q: "What happened?", a: "A finance user opened a macro-enabled invoice attachment from a look-alike domain. The macro downloaded and executed an unsigned binary that disabled endpoint protection, attempted password guessing against several accounts, gained a privileged session, created persistence, probed neighbouring hosts and established periodic encrypted callbacks to an external host before a large outbound transfer." },
  { q: "Which indicators are suspicious?", a: "Nine failed logons across four accounts inside 49 seconds; a success at 10:42 immediately after; a privileged-token event; an unsigned double-extension executable in Downloads with an Office parent chain; hidden encoded PowerShell; EDR disabled by a local process; fixed-interval 3 KB TLS beacons to 198.51.100.24:8443; a 128.9 MB outbound burst; a local admin account not present in HR or IT records." },
  { q: "Which indicators are benign?", a: "Morning interactive logons for t.mokoena, n.dlamini and p.vandermerwe; the svc_backup service logons at 08:31 and 11:40 that match the scheduled job; SMB traffic to the file server at 08:03; the 12.4 MB TLS session to 203.0.113.25, which matches the sanctioned cloud storage provider; routine SQL queries under 1 MB." },
  { q: "Attack technique involved?", a: "Spearphishing attachment (T1566.001) leading to user execution (T1204.002) and PowerShell-based execution (T1059.001), followed by password guessing (T1110.001) and HTTPS command-and-control on a non-standard port (T1071.001, T1571)." },
  { q: "Was initial access likely phishing?", a: "Yes. The process ancestry OUTLOOK.EXE → EXCEL.EXE → cmd.exe places the origin squarely in the opened attachment, and the file creation at 10:35 sits two minutes after the attachment was opened." },
  { q: "Is the authentication activity consistent with credential abuse?", a: "Yes. The pattern — rapid failures across multiple usernames including default admin names, then a success on the original account — is characteristic of automated guessing rather than a user mistyping a password. A human retry pattern would be slower and confined to one account." },
  { q: "Does the network traffic suggest C2?", a: "Yes. Twenty-second-tolerance periodicity, near-identical 3 KB payload sizes, a non-standard TLS port and traffic continuing outside user activity are all consistent with an implant checking in with a controller." },
  { q: "What assets are at risk?", a: "The workstation UDS-WS-0421, the t.mokoena and svc_sql credentials, the internal customer database on DB-SRV02, three peer workstations targeted over SMB/RDP, and any cloud services reachable with the compromised session." },
  { q: "What information could be exposed?", a: "Finance records and invoice data held locally, database rows read during the 36.7 MB query, cached mailbox content, and any credentials stored in the browser profile of the affected user." },
  { q: "Severity?", a: "High. Confirmed execution, confirmed credential abuse, established persistence and probable exfiltration on a host with access to a business-critical database — mitigated only by segmentation blocking part of the lateral movement." },
];
