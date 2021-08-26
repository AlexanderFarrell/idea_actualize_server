# Idea

Tool for creating, organizing, planning and implementing ideas.

## Create

- Collects ideas
- Lets ideas be decorated with attributes, like text, colors and emojis

## Organize

- Categorize ideas
- Connect ideas as parent/children (lists), reference ideas, connect ideas to plans and add alternatives
- Powerfully search ideas by category, name or content.
- View connected ideas
- Get ideas by id

## Plan

- Find unplanned ideas
- Create projects from ideas.
- Create requirements from ideas in projects.
- Place accountability for ideas, such as checkboxes or journal entries.
- Add alternatives & possible solutions

## Implement

- Version ideas
- Add links to products
- Maintain projects

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

# Server

## Api



# Future Ideas

- Add a time type
- Add a validation list