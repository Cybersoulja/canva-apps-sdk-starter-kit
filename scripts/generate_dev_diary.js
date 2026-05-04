const { execSync } = require('child_process');
const fs = require('fs');

try {
  const logOutput = execSync('git log --pretty=format:"## %ad - %s%n%n%b" --date=short').toString();

  const content = `# Development Diary\n\nThis diary is generated from commit history to track project progress.\n\n${logOutput}`;

  fs.writeFileSync('docs/dev_diary.md', content);
  console.log('Successfully generated docs/dev_diary.md');
} catch (error) {
  console.error('Error generating dev diary:', error);
}
