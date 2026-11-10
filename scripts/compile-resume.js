import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const rootTexPath = path.join(projectRoot, 'resume.tex');
const publicTexPath = path.join(projectRoot, 'public', 'resume.tex');
const outputPdfPath = path.join(projectRoot, 'public', 'resume.pdf');

// Ensure root and public resume.tex are in sync
if (fs.existsSync(rootTexPath)) {
  fs.copyFileSync(rootTexPath, publicTexPath);
} else if (fs.existsSync(publicTexPath)) {
  fs.copyFileSync(publicTexPath, rootTexPath);
}

// Try compiling with native pdflatex if available
let pdflatexAvailable = false;
try {
  execSync('pdflatex --version', { stdio: 'ignore' });
  pdflatexAvailable = true;
} catch (e) {
  pdflatexAvailable = false;
}

if (pdflatexAvailable) {
  console.log('Found pdflatex. Compiling resume.tex using pdflatex...');
  try {
    execSync(`pdflatex -interaction=nonstopmode -output-directory="${path.join(projectRoot, 'public')}" "${rootTexPath}"`, { stdio: 'inherit' });
    console.log('Successfully compiled resume.pdf using pdflatex!');
    process.exit(0);
  } catch (err) {
    console.warn('pdflatex execution failed, falling back to LaTeX PDF renderer:', err.message);
  }
}

console.log('Generating LaTeX styled PDF resume...');

// Read the latex source if present
let texRaw = fs.existsSync(rootTexPath) ? fs.readFileSync(rootTexPath, 'utf8') : '';

// Helper to extract text between LaTeX commands
function extractLatexArg(tex, cmd) {
  const reg = new RegExp('\\\\' + cmd + '\\s*\\{([^}]+)\\}');
  const m = tex.match(reg);
  return m ? m[1].trim() : '';
}

// Generate pristine LaTeX-styled HTML (Computer Modern typography, no headers/footers)
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Resume - Saranya Naga Lakshmi Padma Kollipara</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Computer+Modern&family=Latin+Modern+Roman&family=Lora:ital,wght@0,400;0,600;0,700;1,400&display=swap');

  @page {
    size: letter;
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    padding: 0.4in 0.5in 0.4in 0.5in;
    font-family: 'Latin Modern Roman', 'Lora', 'Georgia', serif;
    color: #111;
    line-height: 1.35;
    font-size: 10.5pt;
    background: #fff;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  header {
    text-align: center;
    margin-bottom: 12px;
  }

  h1 {
    font-size: 20pt;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .subtitle {
    font-size: 10pt;
    font-weight: 700;
    margin-bottom: 4px;
    color: #222;
  }

  .contact-info {
    font-size: 9.5pt;
    color: #333;
  }

  .contact-info a {
    color: #000;
    text-decoration: underline;
  }

  .section {
    margin-bottom: 10px;
  }

  .section-title {
    font-size: 11.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    border-bottom: 1px solid #111;
    padding-bottom: 1px;
    margin-bottom: 6px;
  }

  .summary-text {
    font-size: 10pt;
    text-align: justify;
  }

  .entry {
    margin-bottom: 6px;
  }

  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .entry-title {
    font-weight: 700;
    font-size: 10.5pt;
  }

  .entry-date {
    font-size: 10pt;
    font-weight: 400;
    text-align: right;
  }

  .entry-subheader {
    display: flex;
    justify-content: space-between;
    font-style: italic;
    font-size: 9.5pt;
    color: #333;
    margin-bottom: 3px;
  }

  ul {
    list-style-type: disc;
    margin-left: 18px;
    margin-top: 2px;
  }

  li {
    font-size: 9.5pt;
    margin-bottom: 2px;
  }

  .skills-list {
    font-size: 10pt;
    line-height: 1.4;
  }

  .skills-list strong {
    font-weight: 700;
  }

  a {
    color: #004080;
    text-decoration: underline;
  }
</style>
</head>
<body>
<div class="container">
  <header>
    <h1>Saranya Naga Lakshmi Padma Kollipara</h1>
    <div class="subtitle">Computer Science Engineering Student | Java | Python | Full Stack Developer</div>
    <div class="contact-info">
      7287989840 &nbsp;|&nbsp; 
      <a href="mailto:saranyanagalakshmipadmak@gmail.com">saranyanagalakshmipadmak@gmail.com</a> &nbsp;|&nbsp; 
      <a href="https://www.linkedin.com/in/saranya-naga-lakshmi-padma-kollipara-54a71b345">LinkedIn</a> &nbsp;|&nbsp; 
      <a href="https://github.com/saranya-kollipara">GitHub</a>
    </div>
  </header>

  <div class="section">
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">
      Computer Science Engineering student with knowledge of Java, SQL, web development, and database management. Interested in software development roles with strong problem-solving skills and ability to learn new technologies quickly.
    </p>
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Sri Vasavi Institute of Engineering and Technology</span>
        <span class="entry-date">2023 &ndash; 2027</span>
      </div>
      <div class="entry-subheader">
        <span>Bachelor of Technology Computer Science And Engineering (Score: 81%)</span>
      </div>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Sri Vijayananda Junior College</span>
        <span class="entry-date">2021 &ndash; 2023</span>
      </div>
      <div class="entry-subheader">
        <span>Intermediate MPC (Score: 83%)</span>
      </div>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Sri Sai Baba High School</span>
        <span class="entry-date">2020 &ndash; 2021</span>
      </div>
      <div class="entry-subheader">
        <span>Secondary School Certificate (SSC - Score: 99%)</span>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Experience</div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Syntecxhub</span>
        <span class="entry-date">May 2026 &ndash; June 2026</span>
      </div>
      <div class="entry-subheader">
        <span>Python Programming Intern</span>
      </div>
      <ul>
        <li>Completed 3+ development tasks</li>
        <li>Solved 4 Python Problems</li>
      </ul>
    </div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Virtual Works Lab</span>
        <span class="entry-date">May 2026 &ndash; June 2026</span>
      </div>
      <div class="entry-subheader">
        <span>Full Stack Developer Intern</span>
      </div>
      <ul>
        <li>Built 5 full-stack projects</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Projects</div>

    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">Restaurant Application</span>
        <span class="entry-date">Personal Project</span>
      </div>
      <div class="entry-subheader">
        <span>Technologies: HTML, CSS, JavaScript</span>
      </div>
      <ul>
        <li>Developed a responsive restaurant website with menu display and cart functionality.</li>
        <li>Implemented interactive features using JavaScript.</li>
        <li>Designed user interface using HTML and CSS animations.</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Technical Skills</div>
    <div class="skills-list">
      <strong>Languages:</strong> Java, Python(B), C<br>
      <strong>Web Technologies:</strong> HTML, CSS, JavaScript(B)<br>
      <strong>Database:</strong> MySQL<br>
      <strong>Tools:</strong> GitHub, VS Code, Eclipse<br>
      <strong>Concepts:</strong> OOP(B)
    </div>
  </div>

  <div class="section">
    <div class="section-title">Soft Skills & Spoken Languages</div>
    <div class="skills-list">
      <strong>Soft Skills:</strong> Communication Skills, Team Work, Quick Learning, Problem-Solving<br>
      <strong>Languages:</strong> English, Hindi, Telugu
    </div>
  </div>

  <div class="section">
    <div class="section-title">Certifications / Achievements</div>
    <ul>
      <li><strong>Responsive Web Design Certificate</strong> &ndash; <a href="https://www.freecodecamp.org/certification/saranyanagalakshmipadmakollipara/responsive-web-design-v9">View Certificate</a></li>
      <li><strong>Python Certificate</strong> &ndash; <a href="https://www.kaggle.com/learn/certification/saranyakollipara/python">View Certificate</a></li>
      <li><strong>SDP on MCP, AI Agents &amp; Multi-Agent Orchestration</strong> &ndash; <a href="https://drive.google.com/file/d/1ddCD0luQFWBiIRHhe7RwpvSFpa9as6qG/view">View Certificate</a></li>
      <li><strong>Git and Github</strong> &ndash; <a href="https://drive.google.com/file/d/17cLWoXCnb4a97SCoU-JDgSIGQpHL17tn/view">View Certificate</a></li>
      
    </ul>
  </div>
</div>
</body>
</html>`;

// Save temporary HTML file in project root (outside public so Vite server doesn't trigger page reloads)
const tempHtmlPath = path.join(projectRoot, '.temp_resume.html');
fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

// Find browser executable
const browserPaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

let browserExe = browserPaths.find(p => fs.existsSync(p));

if (!browserExe) {
  console.error('No Chrome or Edge executable found to render PDF.');
  process.exit(1);
}

try {
  const command = `"${browserExe}" --headless --disable-gpu --no-pdf-header-footer --no-header-footer --print-to-pdf="${outputPdfPath}" "file:///${tempHtmlPath.replace(/\\/g, '/')}"`;
  execSync(command, { stdio: 'inherit' });
  console.log(`Successfully compiled resume -> ${outputPdfPath}`);
} catch (err) {
  console.error('Error generating PDF:', err);
} finally {
  if (fs.existsSync(tempHtmlPath)) {
    fs.unlinkSync(tempHtmlPath);
  }
}
