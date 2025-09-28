# PR POLICY

THis policy defines the rules and guidelines for creating, reviewing and merging pull requests in this repository

## 1.Purpose

Ensure that changes are reviewed for quality and
correctiness
Knowledge is shared among team members
Standards for perfomance and mentainability are upheld

## 2.Creating PR

### Branching

. All new work must be done in a feature branch
.branch names should follow the
convetion:

`feature/<short-description>
bugfix/<issue-id>
hotfix/<critical-fix>
`

Kepps PRS small and focused on a single concern
Large PRs should be broken down into multiple PRs

### Description

Clearly define the purpose of the PR
Reference related issue numbers for your PR

### Review

2 reviewrs must confirm the PR before merging

## 2. Branch name conversions

Branc naming and commit statements must follow this feature:
**Types:**

- `feature/` → New feature or functionality
- `bugfix/` → Fixing a bug
- `hotfix/` → Urgent production fix
- `chore/` → Maintenance, configs, or dependencies
- `docs/` → Documentation changes

**Examples:**

- `feature/user-authentication`
- `bugfix/fix-login-crash`
- `docs/update-readme`

## 3.Definition of done

Befor merging make sure of the following:
Before merging, ensure the following checklist is complete:

- [ ] Code compiles without errors/warnings
- [ ] Tests added/updated and passing(from week 4)
- [ ] Documentation updated (if needed)
- [ ] No unresolved TODOs or debugging code
- [ ] Reviewed and approved by at least 2 teammates

## 4.Commit

Make sure you commit changes to your files only
Do not push to main before aproved preview
