# Contributing to ResumeBuilder

First off, thank you for considering contributing to ResumeBuilder! It's people like you that make ResumeBuilder such a great tool.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Project Structure](#project-structure)
- [Adding a New Template](#adding-a-new-template)
- [Testing](#testing)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inspiring community for all. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information without explicit permission
- Other conduct which could reasonably be considered inappropriate

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **Git**
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))

### First-Time Setup

1. **Fork the repository**
   - Click the "Fork" button at the top right of the repository page
   - This creates your own copy of the project

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/resume-builder.git
   cd resume-builder
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/resume-builder.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`
   - You should see the ResumeBuilder app running

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

When you create a bug report, include as many details as possible:

**Bug Report Template:**
```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows 10, macOS 13.0]
 - Browser: [e.g. Chrome 120, Firefox 121]
 - Version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

**Enhancement Template:**
```markdown
**Is your feature request related to a problem?**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features you've considered.

**Additional context**
Add any other context or screenshots about the feature request here.
```

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `documentation` - Improvements or additions to documentation

## Development Setup

### Project Structure

```
resume-builder/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components (Button, Navbar, etc.)
│   │   ├── editor/          # Editor form components
│   │   └── templates/       # Resume templates
│   ├── context/             # React Context (Resume state)
│   ├── pages/               # Page components (Home, Builder)
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
└── vite.config.js           # Vite configuration
```

### Understanding the Codebase

#### Key Files:

1. **`src/context/ResumeContext.jsx`**
   - Manages global resume state
   - Provides functions to update resume data

2. **`src/components/editor/EditorForm.jsx`**
   - Form inputs for editing resume
   - Updates resume context

3. **`src/components/templates/`**
   - Each file is a unique resume template
   - Receives data from `ResumeContext`

4. **`src/pages/Builder.jsx`**
   - Main builder page
   - Handles PDF/Word export
   - Renders selected template

### Making Changes

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
   
   Branch naming conventions:
   - `feature/` - New features
   - `fix/` - Bug fixes
   - `docs/` - Documentation changes
   - `refactor/` - Code refactoring
   - `style/` - Code style changes

2. **Make your changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic

3. **Test your changes**
   ```bash
   npm run dev
   ```
   - Test all templates
   - Test PDF/Word export
   - Check responsive design

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new timeline template"
   ```
   
   Commit message format:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation
   - `style:` - Formatting
   - `refactor:` - Code restructuring
   - `test:` - Adding tests
   - `chore:` - Maintenance

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

## Pull Request Process

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Self-review of your own code
- [ ] Comments added for complex code
- [ ] No console errors or warnings
- [ ] Tested on multiple browsers (Chrome, Firefox, Safari)
- [ ] Tested responsive design (mobile, tablet, desktop)
- [ ] Updated documentation if needed

### Submitting a Pull Request

1. **Update your fork**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

**Pull Request Template:**
```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How has this been tested?

## Screenshots (if applicable)
Add screenshots to demonstrate the changes.

## Checklist
- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code where needed
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested on multiple browsers
```

3. **Wait for Review**
   - Maintainers will review your PR
   - Address any requested changes
   - Once approved, your PR will be merged!

### After Your PR is Merged

1. **Delete your branch**
   ```bash
   git branch -d feature/your-feature-name
   git push origin --delete feature/your-feature-name
   ```

2. **Update your local main**
   ```bash
   git checkout main
   git pull upstream main
   ```

## Style Guidelines

### JavaScript/React

- Use **functional components** with hooks
- Use **arrow functions** for components
- Use **const** for variables that don't change
- Use **camelCase** for variable and function names
- Use **PascalCase** for component names
- Destructure props when possible

**Good Example:**
```jsx
const TemplateCard = ({ title, description, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
```

### CSS/Tailwind

- Use **Tailwind utility classes** when possible
- Keep custom CSS minimal
- Use **responsive design** (mobile-first)
- Group related classes together

**Good Example:**
```jsx
<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <h2 className="text-2xl font-bold text-gray-900">Title</h2>
  <p className="text-base text-gray-600 leading-relaxed">Description</p>
</div>
```

### File Organization

- One component per file
- Keep components under 200 lines
- Extract complex logic into utility functions
- Group related files in folders

## Adding a New Template

Want to add a new resume template? Follow these steps:

### Step 1: Create Template File

Create a new file in `src/components/templates/`:

```jsx
// src/components/templates/YourTemplate.jsx
import React from 'react';
import { useResume } from '../../context/ResumeContext';

const YourTemplate = () => {
  const { resumeData } = useResume();
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  return (
    <div className="w-full h-full bg-white p-16" style={{ minHeight: '297mm' }}>
      {/* Your template design here */}
      <header>
        <h1>{personalInfo.fullName}</h1>
        <p>{personalInfo.jobTitle}</p>
      </header>
      
      {/* Add sections for experience, education, skills */}
    </div>
  );
};

export default YourTemplate;
```

### Step 2: Register Template

Add your template to the template map in `src/pages/Builder.jsx`:

```jsx
import YourTemplate from '../components/templates/YourTemplate';

const templateMap = {
  modern: ModernTemplate,
  classic: ClassicTemplate,
  // ... other templates
  yourtemplate: YourTemplate,  // Add this line
};
```

### Step 3: Add to Template List

Add your template to the list in `src/pages/Home.jsx`:

```jsx
const templates = [
  { id: 'modern', name: 'Modern', description: 'Left sidebar, high impact', color: '#2563eb' },
  // ... other templates
  { id: 'yourtemplate', name: 'Your Template', description: 'Brief description', color: '#your-color' },
];
```

### Step 4: Create Mini Preview

Add a preview layout in `src/pages/Home.jsx`:

```jsx
const layouts = {
  modern: ( /* ... */ ),
  // ... other layouts
  yourtemplate: (
    <div className="flex flex-col p-4 h-full">
      {/* Simple representation of your template */}
    </div>
  ),
};
```

### Template Design Guidelines

- **Use A4 dimensions**: `minHeight: '297mm'` or `minHeight: '1000px'`
- **Respect theme color**: Use `themeColor` from context
- **Be responsive**: Template should look good in preview
- **Use semantic HTML**: Proper heading hierarchy
- **Print-friendly**: Consider how it looks when exported

## Testing

### Manual Testing Checklist

Before submitting your PR, test the following:

- [ ] Template renders correctly in preview
- [ ] All resume data displays properly
- [ ] Theme color changes work
- [ ] PDF export works correctly
- [ ] Word export works correctly
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] No console errors or warnings
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

### Testing Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Community

### Getting Help

- **GitHub Discussions**: Ask questions and share ideas
- **GitHub Issues**: Report bugs and request features
- **Pull Requests**: Contribute code and documentation

### Recognition

Contributors are recognized in several ways:
- Listed in the README.md
- Mentioned in release notes
- GitHub contributor badge

## Additional Resources

### Helpful Links

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

### Code Examples

Check out these files for reference:
- `src/components/templates/ModernTemplate.jsx` - Well-structured template
- `src/components/common/Button.jsx` - Reusable component example
- `src/context/ResumeContext.jsx` - State management pattern

## Questions?

Don't hesitate to ask questions! You can:
- Open a GitHub Discussion
- Comment on an existing issue
- Reach out to maintainers

---

Thank you for contributing to ResumeBuilder! 🎉

Your contributions make this project better for everyone. We appreciate your time and effort!