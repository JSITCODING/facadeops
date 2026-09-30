# Minimum digital maintenance record

The first validation uses files and structured tables. It does not require custom operations software.

## Core entities

### Property

- `property_id`: stable internal identifier
- `display_name`: customer-approved label, not necessarily the address
- `customer_id`
- `building_type`
- `facade_system_notes`
- `privacy_classification`
- `retention_policy_id`

### Inspection

- `inspection_id`
- `property_id`
- `scope_version`
- `observation_date`
- `capture_methods`
- `operator_organization`
- `technical_reviewer`
- `authorization_checklist_reference`
- `coverage_summary`
- `limitations`
- `status`: planned, authorized, captured, under_review, delivered, closed, cancelled

### Evidence

- `evidence_id`
- `inspection_id`
- `captured_at`
- `elevation`
- `location_description`
- `capture_method`
- `file_reference`
- `integrity_hash`
- `privacy_review_status`
- `access_classification`
- `retention_until`

Precise coordinates are optional and restricted. Store them only when the customer outcome requires them.

### Finding

- `finding_id`
- `inspection_id`
- `evidence_ids`
- `observation`
- `condition_category`
- `uncertainty`
- `implication_if_supported`
- `recommended_next_action`
- `priority_rationale`
- `reviewer_role`
- `reviewed_at`
- `status`: draft, open_for_validation, confirmed_observation, superseded, closed

### Action

- `action_id`
- `property_id`
- `finding_ids`
- `action_text`
- `owner_role`
- `target_date`
- `closure_evidence_required`
- `closed_at`
- `status`: proposed, approved, scheduled, completed, cancelled

### Partner verification

- `partner_id`
- `role`
- `document_type`
- `issuer`
- `reference`
- `valid_from`
- `valid_until`
- `verified_by`
- `verified_at`
- `scope_limitations`

Do not place copies of identity documents, licenses, insurance policies, or credentials in a public repository. The record stores controlled references and verification outcomes.

## Audit events

Every material change should record actor, role, timestamp, previous value, new value, reason, and source. Customer-visible exports must clearly identify the version and whether a finding has been superseded.

