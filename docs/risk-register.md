# FacadeOps validation risk register

Status meanings: **open** requires evidence; **blocked** prevents the affected activity; **verified** requires a dated source or accountable partner record.

| Area | Risk | Current status | Required evidence or control | Owner before pilot | Gate |
|---|---|---|---|---|---|
| Aviation | Operator, pilot, aircraft, or operation is not authorized for the intended mission | Open | Direct verification with ANAC requirements and operator documents for the specific mission | Authorized operator | No flight |
| Airspace | Building location or operation requires approval not yet obtained | Open | Location-specific airspace assessment and written approval where required | Authorized operator | No flight |
| Import/ownership | Proposed aircraft or equipment lacks required import, ownership, registration, or project authorization | Open | Aircraft record and applicable ANAC authorization | Authorized operator | No flight |
| Insurance | Aviation, public liability, professional liability, or worker cover is absent or insufficient | Open | Broker/insurer confirmation tied to responsibilities and limits | FacadeOps + partners | No contract/flight |
| Worksite safety | People, traffic, or property enter an uncontrolled area | Open | Site plan, barriers, notices, spotters, emergency process, stop-work authority | Site manager + operator | No flight |
| Weather | Wind, precipitation, visibility, or heat exceed operator/equipment limits | Open | Recorded limits, forecast, on-site check, cancellation rule | Remote pilot | No flight |
| Privacy | Imagery captures homes, residents, workers, vehicles, or neighboring property beyond scope | Open | Capture plan, notices/consent where required, minimization, masking, access, retention, deletion | FacadeOps | No capture/delivery |
| Security | Building imagery or access details reveal security-sensitive information | Open | Customer classification, restricted fields, encryption, named access, sharing log | Customer + FacadeOps | No public/shared record |
| Technical competence | Imagery is interpreted as a structural or engineering diagnosis without appropriate competence | Blocked by policy | Named qualified reviewer, signed scope, limitations, escalation criteria | Technical partner | No diagnostic claim |
| Evidence quality | Missing scale, angle, focus, coverage, or location makes findings unreliable | Open | Capture specification and pre-delivery quality review | Operator + reviewer | Recapture or qualify limitation |
| Independence | Capture, diagnosis, and repair incentives are not disclosed | Open | Role disclosure and separate acceptance of repair quotation | FacadeOps | Disclosure required |
| Contract | Customer assumes all visible defects will be detected | Open | Scope, exclusions, inaccessible areas, uncertainty, liability terms | Legal review | No paid pilot |
| Data retention | Evidence remains longer than needed or cannot be deleted reliably | Open | Retention schedule, deletion test, backup policy, customer export | FacadeOps | No production data |
| Marketing | “Safer,” “cheaper,” “faster,” “certified,” or “first” claims are unsupported | Blocked by policy | Comparative evidence and attributable certification only | FacadeOps | No publication |
| Partner continuity | One operator or reviewer becomes a single point of failure | Open | Backup-partner qualification or explicit capacity limit | FacadeOps | Pilot may proceed with disclosed limit |
| Customer authority | Requester lacks permission to authorize inspection or imagery | Open | Written representation of authority and property-owner approval where needed | Customer | No site work |

## Minimum go/no-go review

A pilot is **no-go** if any flight, site-control, insurance, privacy, customer-authority, or technical-competence row remains open for that mission. Commercial pressure never changes a no-go item into an accepted risk.

