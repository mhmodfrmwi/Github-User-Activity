# GitHub User Activity CLI

A command-line interface (CLI) tool that fetches and displays recent activity from a specified GitHub user using the GitHub API.

## Features

- Fetches the three most recent events from a GitHub user.
- Supports various event types like `PushEvent`, `IssuesEvent`, `WatchEvent`, `ForkEvent`, and `CreateEvent`.
- Displays relevant information for each event in the terminal.

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

2. Clone this repository or download the script.

3. Navigate to the project directory:

   ```bash
   cd Github-User-Activity
   ```

4. Install the required dependencies:

   ```bash
   npm install commander
   ```

## Usage

Run the script with the following command:

```bash
node index.js <GitHub-Username>
```

Replace `<GitHub-Username>` with the username of the GitHub user whose activity you want to fetch.

### Example

```bash
node index.js octocat
```

### Project Source

**https://roadmap.sh/projects/github-user-activity**
