<!--
  <<< Author notes: Step 5 >>>
  This step teaches about GitHub collaboration and repository setup.
  Focus on practical steps for setting up a collaborative repository.
-->

## Step 5: GitHub Collaboration (The "Legacy")

_Great work on completing the basics! Now let's learn about collaboration! :rocket:_

To ensure your AI and Copilot can collaborate effectively, your code needs to be in a repository that supports team collaboration. This step will guide you through creating a collaborative repository and setting up your team.

**What is collaboration on GitHub?**: Collaboration on GitHub allows multiple developers to work together on the same project. By inviting collaborators to your repository, you enable team members to contribute code, review changes, and manage the project together. For more information, see "[Inviting collaborators to a personal repository](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)".

### :keyboard: Activity: Create and Set Up IdentAgent-Core Repository

#### Part 1: Create the Repository on GitHub

1. Log in to [GitHub](https://github.com).
2. In the upper-right corner of any page, click **+**, then click **New repository**.
3. In the "Repository name" field, type `IdentAgent-Core`.
4. Optionally, add a description for your repository.
5. Choose repository visibility (Public or Private).
6. Click **Create repository**.

#### Part 2: Initialize Git in Your Local Folder

If you have an existing `IdentAgent-Live` folder on your computer with code you want to push:

1. Open your terminal or command prompt.
2. Navigate to your `IdentAgent-Live` folder:

   ```bash
   cd /path/to/IdentAgent-Live
   ```

3. Initialize Git in this folder:

   ```bash
   git init
   ```

4. Add all files to the staging area:

   ```bash
   git add .
   ```

5. Create your initial commit:

   ```bash
   git commit -m "Initial Launch"
   ```

#### Part 3: Connect Your Local Repository to GitHub

1. Copy your GitHub repository URL (found on the repository page).
2. Add the remote repository connection:

   ```bash
   git remote add origin [Your GitHub Repo Link]
   ```

   Replace `[Your GitHub Repo Link]` with your actual repository URL, for example:
   `https://github.com/yourusername/IdentAgent-Core.git`

3. Push your code to GitHub:

   ```bash
   git push -u origin main
   ```

   **Note**: If you get an error about the branch name, your default branch might be named `master`. You can either:
   - Rename it: `git branch -M main`
   - Or use: `git push -u origin master`

#### Part 4: Invite Collaborators

1. Navigate to your `IdentAgent-Core` repository on GitHub.
2. Click on the **Settings** tab.
3. In the left sidebar, click **Collaborators** (or **Collaborators and teams** for organization repos).
4. Click **Add people** (or **Add collaborator**).
5. Enter the GitHub username or email address of your team member.
6. Click **Add [username] to this repository**.
7. The collaborator will receive an email invitation and must accept it before they can contribute.

### :bulb: Tips for Successful Collaboration

- **Use branches**: Create separate branches for features to avoid conflicts.
- **Pull requests**: Always use pull requests for code review before merging.
- **Communication**: Use issue comments and PR reviews to communicate with your team.
- **Protect main branch**: Consider adding branch protection rules in Settings > Branches.

### What's Next?

After setting up collaboration:

- Team members can clone the repository with `git clone [repo-url]`
- Use `git pull` regularly to stay updated with team changes
- Create issues to track bugs and features
- Use project boards to organize work

For more information on team collaboration, see the [GitHub Docs on Collaborating](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests).

**Congratulations!** You now know how to set up a collaborative GitHub repository! :tada:
