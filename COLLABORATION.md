# GitHub Collaboration Guide

This guide will help you set up a collaborative GitHub repository for team development.

## Overview

Collaboration on GitHub enables multiple developers to work together on the same project. By setting up proper collaboration workflows, you can manage contributions, review code, and maintain project quality.

## Step-by-Step: Create and Set Up IdentAgent-Core Repository

### Part 1: Create the Repository on GitHub

1. **Log in to GitHub**
   - Navigate to [github.com](https://github.com) and sign in

2. **Create a new repository**
   - Click the **+** icon in the upper-right corner
   - Select **New repository**
   - Enter `IdentAgent-Core` as the repository name
   - Add an optional description
   - Choose visibility (Public or Private)
   - Click **Create repository**

### Part 2: Initialize Git in Your Local Folder

If you have an existing project in a folder called `IdentAgent-Live`:

```bash
# Navigate to your project folder
cd /path/to/IdentAgent-Live

# Initialize Git
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial Launch"
```

### Part 3: Connect Local Repository to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/IdentAgent-Core.git

# Push to GitHub
git push -u origin main
```

**Note**: If you encounter a branch naming error:
- Your default branch might be `master` instead of `main`
- Either rename it: `git branch -M main`
- Or use: `git push -u origin master`

### Part 4: Invite Collaborators

1. **Navigate to repository settings**
   - Go to your `IdentAgent-Core` repository on GitHub
   - Click the **Settings** tab

2. **Add collaborators**
   - In the left sidebar, click **Collaborators**
   - Click **Add people**
   - Enter the GitHub username or email of your team member
   - Click **Add [username] to this repository**

3. **Collaborator acceptance**
   - Invited users will receive an email
   - They must accept the invitation before contributing

## Best Practices for Team Collaboration

### Branch Strategy

- **Feature branches**: Create separate branches for each feature
  ```bash
  git checkout -b feature/new-feature
  ```

- **Keep main protected**: Set up branch protection rules
  - Go to Settings > Branches
  - Add rule for `main` branch
  - Require pull request reviews

### Pull Request Workflow

1. **Create a pull request** for all changes
2. **Request reviews** from team members
3. **Address feedback** before merging
4. **Keep PRs focused** - one feature per PR

### Communication

- **Use Issues** to track bugs and features
- **Comment on PRs** for code reviews
- **Use discussions** for broader topics
- **Tag team members** with @mentions

### Stay Synchronized

```bash
# Fetch latest changes
git fetch origin

# Pull changes to your local branch
git pull origin main

# Before starting work
git pull

# Before pushing
git pull --rebase
```

## Collaboration Tools

### Project Boards

- Organize work with GitHub Projects
- Create columns: To Do, In Progress, Done
- Link issues and PRs to cards

### Code Reviews

- Enable required reviews in branch protection
- Use inline comments for specific feedback
- Approve PRs only when ready to merge

### Continuous Integration

- Set up GitHub Actions for automated testing
- Require CI checks to pass before merging
- Use quality checks and linting

## Team Workflow Example

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/IdentAgent-Core.git
   cd IdentAgent-Core
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/user-authentication
   ```

3. **Make changes and commit**
   ```bash
   git add .
   git commit -m "Add user authentication feature"
   ```

4. **Push to GitHub**
   ```bash
   git push origin feature/user-authentication
   ```

5. **Create pull request**
   - Go to repository on GitHub
   - Click **Pull requests** > **New pull request**
   - Select your branch
   - Add description and reviewers
   - Click **Create pull request**

6. **Review and merge**
   - Team reviews the PR
   - Address any feedback
   - Merge when approved

## Security Considerations

- **Never commit secrets** (API keys, passwords)
- **Use .gitignore** to exclude sensitive files
- **Enable Dependabot** for security updates
- **Review security alerts** regularly
- **Use branch protection** to prevent direct pushes to main

## Additional Resources

- [GitHub Docs: Collaborating with pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)
- [GitHub Docs: Inviting collaborators](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)
- [GitHub Skills: Introduction to GitHub](https://github.com/skills/introduction-to-github)
- [Git Documentation](https://git-scm.com/doc)

## Troubleshooting

### Push Rejected

If `git push` is rejected:
```bash
# Pull latest changes first
git pull --rebase origin main

# Then try pushing again
git push origin your-branch-name
```

### Merge Conflicts

If you encounter merge conflicts:
1. Pull the latest changes
2. Resolve conflicts in your editor
3. Mark as resolved and commit
4. Push the changes

### Access Denied

If a collaborator can't access the repository:
- Verify they accepted the invitation
- Check their permissions in Settings > Collaborators
- Ensure the repository visibility matches expectations

---

**Need help?** Open an issue or consult the [Contributing Guide](CONTRIBUTING.md).
