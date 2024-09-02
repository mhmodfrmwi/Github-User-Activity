const GITHUB_API_URL = " https://api.github.com/users/";
const { program } = require("commander");

program
  .name("Github User Activity")
  .description(
    "Use GitHub API to fetch user activity and display it in the terminal."
  )
  .version("1.0.0");

program
  .description(
    "Fetch the recent activity of the specified GitHub user using the GitHub API."
  )
  .argument("<userName>", "userName to get his recent activities")
  .action(async (userName) => {
    try {
      const url = `${GITHUB_API_URL}${userName}/events`;
      const activities = await fetch(url);
      const data = await activities.json();
      for (let index = 0; index < 3; index++) {
        const element = data[index];
        const eventType = element.type;
        const repoName = element.repo.name;
        const actionSize = element.payload.commits?.length;
        if (eventType === "PushEvent") {
          console.log(`Pushed ${actionSize} commit(s) to ${repoName}`);
        } else if (eventType === "IssuesEvent") {
          console.log(`Opened a new issue in ${repoName}`);
        } else if (eventType === "WatchEvent") {
          console.log(`Starred ${repoName}`);
        } else if (eventType === "ForkEvent") {
          console.log(`Forked ${repoName}`);
        } else if (eventType === "CreateEvent") {
          console.log(`Created ${element.payload.ref_type} in ${repoName}`);
        } else {
          console.log(`${element.type.replace("Event", "")} in ${repoName}`);
        }
      }
    } catch (error) {
      console.log("error in the user name or in feching data try another one");
    }
  });

program.parse();
