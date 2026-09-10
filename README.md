# UDS Threat Hunter

Create a professional, portfolio-ready cybersecurity threat analysis project for an aspiring Cybersecurity Analyst / SOC Analyst.

The project must simulate a realistic cybersecurity investigation in a fictional organisation called Ubuntu Digital Services (UDS). This is a controlled educational/lab scenario and must not involve real people, organisations, credentials, malware, or unauthorized systems.

Project Title

Threat Analysis & SOC Investigation: Suspicious Network Activity

Scenario

Ubuntu Digital Services is an organisation with approximately 80 employees using Windows workstations, Wi-Fi, email, cloud services, and an internal database.

The SOC team receives an alert indicating unusual activity from an employee workstation.

The security monitoring system reports:

Multiple failed login attempts

A successful login shortly after the failed attempts

Unusual outbound network connections

A connection to a suspicious-looking external IP address

An unfamiliar executable downloaded to the Downloads folder

Increased network traffic from the workstation

The employee recently opened an email attachment that appeared to be an invoice

The objective is to determine whether the activity represents a genuine security threat, identify the likely attack technique, assess the risk, and recommend appropriate defensive actions.

Your Role

Act as a Junior SOC / Cybersecurity Analyst investigating the alert.

Follow a professional security-analysis workflow:

Alert identification

Initial triage

Evidence collection

Indicator analysis

Threat identification

Risk assessment

Incident classification

Containment recommendations

Remediation recommendations

Final analyst report

Investigation Data

Create a realistic but completely fictional dataset for the investigation.

Include:

Windows authentication logs

Create approximately 20–30 sample events containing:

Timestamp

Event ID

Username

Source IP

Logon type

Status

Description

Include examples of:

Failed logins

Successful logins

Suspicious authentication patterns

Use fictional IP addresses such as TEST-NET ranges rather than real public IP addresses.

Network logs

Create approximately 20 sample network events containing:

Timestamp

Source IP

Destination IP

Destination port

Protocol

Bytes transferred

Action

Risk level

Include normal and suspicious traffic so that the analyst must distinguish between legitimate activity and potential threats.

Endpoint evidence

Create fictional evidence such as:

Suspicious filename

File creation time

File location

File hash

Parent process

Network connection

User account

Use clearly fictional/example hashes and filenames.

Phishing email evidence

Create a fictional email containing:

Sender

Recipient

Subject

Timestamp

Attachment name

Attachment type

Suspicious indicators

Social-engineering techniques

Do not provide functional malicious files or instructions for creating malware.

Threat Analysis

Analyse the evidence and determine:

What happened?

Which indicators are suspicious?

Which indicators are benign?

What attack technique may have been involved?

Was the initial access likely caused by phishing?

Is the authentication activity consistent with credential abuse?

Does the network traffic suggest possible command-and-control activity?

What assets may be at risk?

What information could potentially be exposed?

What is the severity of the incident?

Map the findings, where appropriate, to the MITRE ATT&CK framework using technique IDs and names. Only use techniques relevant to the evidence.

Threat Intelligence Section

Create a small fictional threat-intelligence analysis.

Explain:

Indicators of Compromise (IOCs)

IP addresses

Domains

File hashes

User accounts

Filenames

Network behaviour

Explain how a SOC analyst would normally validate these indicators using legitimate threat-intelligence sources.

Do not use real malicious infrastructure or provide instructions for interacting with malicious systems.

Risk Assessment

Create a risk matrix using:

Likelihood: Low / Medium / High

Impact: Low / Medium / High

Overall severity

Assess risks involving:

Credential compromise

Malware infection

Data exfiltration

Lateral movement

Business disruption

Explain the reasoning behind each rating.

Investigation Timeline

Create a chronological timeline showing:

Phishing email received

Attachment opened

Suspicious file created

Authentication attempts

Successful login

Network connections

SOC alert

Investigation

Containment recommendation

SOC Analyst Report

Produce a professional final report containing:

1. Executive Summary

Explain the incident in simple business language.

2. Incident Overview

Describe:

Date

Affected workstation

Affected user

Detection source

Incident type

Severity

3. Indicators of Compromise

Create a table containing:

IOC TypeIndicatorEvidenceRisk

4. Investigation Findings

Explain the evidence and what it indicates.

5. Attack Chain

Present the likely attack progression:

Initial Access → Execution → Credential Activity → Network Communication → Potential Impact

6. MITRE ATT&CK Mapping

Create a table:

TacticTechniqueTechnique IDEvidence

7. Risk Assessment

Explain the overall risk.

8. Containment Recommendations

Recommend safe defensive actions such as:

Isolating the affected workstation

Disabling or securing compromised accounts

Blocking identified indicators

Resetting credentials

Reviewing authentication logs

Preserving evidence

9. Eradication & Recovery

Recommend:

Removing malicious or suspicious artifacts

Patching vulnerable systems

Restoring systems from trusted sources

Monitoring affected accounts

Reviewing endpoint security controls

10. Lessons Learned

Identify security improvements involving:

MFA

Email security

Endpoint protection

Security awareness

Logging

SIEM monitoring

Password policies

Network monitoring

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ud-investigate-playbook.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/03b86c72-dc25-4666-89eb-28c64acd6485).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
