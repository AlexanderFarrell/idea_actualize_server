# Data

- Account
- Item
- Category
- ItemType
- Idea
- Html
- Project
- Requirement
- Checkmark
- Journal
- ItemItemLink
- ItemLinkKind
- Product

## Account

(Already implemented)

## Item

- id, name, created_by, created_on, public_id

## Category

- id, name, item_id

## ItemType: enum

- account, item, category, html, idea, project, requirement, checkmark, journal, product

## Idea

- id, desc, color, emoji, item_id

## Html

- id, text, item_id

## Project

- id, version_major, version_minor, version_revision, item_id

## Requirement

- id, text

## Checkmark

- id, completed (computed by view), completed_on

## Journal

- id, date, text

## ItemItemLink

- item_id
- item_id
- kind
- u_item_id_item_id

## ItemLinkKind: enum

- parent, common, alternate

## Product

- id, text