# K S N L Padma - Computer Science Engineering Portfolio

A modern, professional, responsive personal portfolio website built with React.js and custom CSS. This website is tailored for Computer Science Engineering students to showcase their skills, projects, internships, and educational background to recruiters and senior developers.

---

## About

This portfolio is designed to look **simple, elegant, clean, and professional**. It utilizes subtle CSS keyframe animations, responsive grid layouts, and custom scroll reveal effects to make a visually engaging impression without being flashy or cluttered.

---

## Technologies Used

* **Frontend Framework:** React.js (Vite template)
* **Styling:** Custom Vanilla CSS3 (Zero Tailwind CSS, zero Bootstrap)
* **Icons:** React Icons (`react-icons/fa` library)
* **Animations:** Pure CSS animations and transitions
* **Scroll Effects:** Native browser `IntersectionObserver` via a custom React hook
* **Build System:** Vite & Rolldown

---

## Features

1. **Fully Responsive Design:** Adapts smoothly across Mobiles, Tablets, Laptops, and Desktops.
2. **Centralized Data Model:** All text, lists, and images are separated from view components for seamless maintenance.
3. **Timeline Education View:** Vertical timeline representing high school, pre-university, and graduation history.
4. **Skill Tags & Cards:** Grid of skills that lift slightly and glow on hover.
5. **Timeline Internship Cards:** Chronological list of internship roles, achievements, and lessons learned.
6. **Project Grid:** Modern dashboard layouts featuring tech tags, image displays, and new-tab links to GitHub.
7. **Validated Contact Form:** Form checking for required fields and proper email formatting, with clear Success/Error feedbacks.
8. **Scroll Reveal Hook:** Lazy-triggers slide-up entries for sections as they enter the screen.
9. **Back to Top Button:** Floating circular trigger to return smoothly to the page header.

---

## Project Structure

```text
ksnl-padma-portfolio/
│
├── public/
│   ├── profile-placeholder.png
│   └── projects/
│       ├── project-1.svg
│       ├── project-2.svg
│       └── project-3.svg
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── profile.png
│   │       ├── project1.svg
│   │       ├── project2.svg
│   │       └── project3.svg
│   │
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   │
│   │   ├── Education/
│   │   │   ├── Education.jsx
│   │   │   └── Education.css
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   │
│   │   ├── Internships/
│   │   │   ├── Internships.jsx
│   │   │   ├── InternshipCard.jsx
│   │   │   └── Internships.css
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── Projects.css
│   │   │
│   │   ├── Skills/
│   │   │   ├── Skills.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   └── Skills.css
│   │   │
│   │   └── ScrollToTop/
│   │       ├── ScrollToTop.jsx
│   │       └── ScrollToTop.css
│   │
│   ├── data/
│   │   └── portfolioData.js
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js
│   │
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   ├── animations.css
│   │   └── responsive.css
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

---

## Installation

To set up the portfolio locally, clone or copy the project folder to your machine and open a terminal inside it.

Install all dependencies:

```bash
npm install
```

---

## Running Locally

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your web browser to view the portfolio.

To run a production build test:

```bash
npm run build
```

---

## Customization

You can fully customize the content of this portfolio without diving into component code. Almost all content is centralized in a single data file.

### 1. Centralized Data Customization
Open [`src/data/portfolioData.js`](file:///c:/Users/saran/SaranyaPortfolio/src/data/portfolioData.js):

* **Personal Details:** Edit the `personalInfo` object to update your name, role title, GitHub/LinkedIn profile links, email address, and statistics counts:
  ```javascript
  export const personalInfo = {
    name: "Your Full Name",
    role: "Your Role / Major",
    github: "https://github.com/your-profile",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "your.email@example.com",
    // ...
  };
  ```
* **Bio Section:** Edit the text string in the `aboutMe` object.
* **Skills List:** Modify the entries in the `skills` array. Each object takes a `name`, `category`, and `icon` (emoji or text string).
* **Education Timeline:** Edit colleges, degrees, locations, and descriptions inside the `education` array.
* **Internships Timeline:** Update company names, durations, roles, and a bulleted list of responsibilities within the `internships` array.
* **Projects Grid:** Replace project names, details, tech tags, and repository link strings inside the `projects` array.

### 2. Styling Customization
To customize colors, shadows, rounded corners, or font styles, edit the CSS variables file [`src/styles/variables.css`](file:///c:/Users/saran/SaranyaPortfolio/src/styles/variables.css):

* **Accent Theme:** Change `--primary-color` and `--primary-hover` to choose a custom accent shade.
* **Backgrounds:** Change `--bg-color` and `--bg-secondary` to modify page background colors.
* **Fonts:** Swap font links in [`src/styles/global.css`](file:///c:/Users/saran/SaranyaPortfolio/src/styles/global.css) and edit variables `--font-family` and `--font-heading` to load fresh typefaces.

### 3. Replacing Images
* **Profile Picture:** Replace the avatar graphic in [`src/assets/images/profile.png`](file:///c:/Users/saran/SaranyaPortfolio/src/assets/images/profile.png) with a clean professional headshot.
* **Project Previews:** Swap project dashboard templates located in `src/assets/images/project1.svg`, `project2.svg`, and `project3.svg` with your actual screenshots.

---

## GitHub Deployment

To easily host this portfolio on GitHub Pages:

1. Install the `gh-pages` helper package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Open `package.json` and add a `homepage` property mapping your deployment path:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repository-name>/"
   ```
3. Add deployment scripts under `scripts` in `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run the publish command:
   ```bash
   npm run deploy
   ```

---

## Future Improvements

* **EmailJS Integration:** Replace the simulated timeout submit in `Contact.jsx` with an EmailJS script to send email notifications directly to your inbox.
* **Dark Mode Toggle:** Implement a theme toggle mapping variables in `variables.css`.
* **GitHub Repository API Integration:** Dynamically fetch project metadata directly from the GitHub API.
