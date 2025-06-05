
#Deepanshu's Portfolio

A modern, responsive portfolio website built using React, Three.js, Tailwind CSS, and Framer Motion. This project showcases my skills, projects, and experience as a full-stack developer.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Features

- **Responsive Design**: Fully responsive layout for all devices.
- **Interactive Animations**: Smooth animations using Framer Motion and Three.js.
- **Dynamic Content**: Projects, testimonials, and experiences are dynamically rendered.
- **Contact Form**: Integrated with EmailJS for sending messages directly from the website.
- **3D Models**: Interactive 3D elements using Three.js.

---

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion
- **Email Integration**: EmailJS
- **Icons**: React Icons
- **Routing**: React Router DOM

---

## Project Structure

```plaintext
e:\Mustaqeem's-Portfolio
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # React components
│   │   ├── canvas/        # 3D canvas components
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Experience.jsx # Work experience timeline
│   │   ├── Feedbacks.jsx  # Testimonials
│   │   ├── Footer.jsx     # Footer with social links
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Tech.jsx       # Technologies section
│   │   ├── Works.jsx      # Projects section
│   ├── constants/         # Static data (projects, testimonials, etc.)
│   ├── hoc/               # Higher-order components
│   ├── styles.js          # Tailwind utility classes
│   ├── utils/             # Utility functions (e.g., animations)
│   ├── App.jsx            # Main application component
│   ├── index.js           # Entry point
├── README.md              # Project documentation
├── package.json           # Dependencies and scripts
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mohammed-mustaqeem/Mustaqeem-Portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:3000`.

---

## Usage

- **Navigate**: Use the navigation bar to explore different sections.
- **View Projects**: Check out the projects section to see my work.
- **Contact Me**: Use the contact form to send me a message.

---

## Components Overview

### 1. **Hero**
   - Displays an introduction with a 3D computer model.
   - File: `src/components/Hero.jsx`

### 2. **About**
   - Overview of skills and services.
   - File: `src/components/About.jsx`

### 3. **Experience**
   - Timeline of work experience.
   - File: `src/components/Experience.jsx`

### 4. **Works**
   - Showcases projects with descriptions and links.
   - File: `src/components/Works.jsx`

### 5. **Tech**
   - Displays technologies with icons.
   - File: `src/components/Tech.jsx`

### 6. **Feedbacks**
   - Testimonials from clients.
   - File: `src/components/Feedbacks.jsx`

### 7. **Contact**
   - Contact form integrated with EmailJS.
   - File: `src/components/Contact.jsx`

### 8. **Footer**
   - Social media links.
   - File: `src/components/Footer.jsx`

---

## Environment Variables

Create a `.env` file in the root directory and add the following:

```plaintext
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace `your_service_id`, `your_template_id`, and `your_public_key` with your EmailJS credentials.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This README.md file provides a detailed overview of your project, including its features, technologies, structure, and usage instructions. You can customize it further based on your specific requirements.

Mohammed-mustaqeem: update docs all components in readme.md file 

GitHub Copilot: Here’s an updated README.md file with detailed documentation for all components in your project:

```markdown
#Deepanshu's Portfolio

A modern, responsive portfolio website built using React, Three.js, Tailwind CSS, and Framer Motion. This project showcases my skills, projects, and experience as a full-stack developer.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Features

- **Responsive Design**: Fully responsive layout for all devices.
- **Interactive Animations**: Smooth animations using Framer Motion and Three.js.
- **Dynamic Content**: Projects, testimonials, and experiences are dynamically rendered.
- **Contact Form**: Integrated with EmailJS for sending messages directly from the website.
- **3D Models**: Interactive 3D elements using Three.js.

---

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: Framer Motion
- **Email Integration**: EmailJS
- **Icons**: React Icons
- **Routing**: React Router DOM

---

## Project Structure

```plaintext
e:\Mustaqeem's-Portfolio
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # React components
│   │   ├── canvas/        # 3D canvas components
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Experience.jsx # Work experience timeline
│   │   ├── Feedbacks.jsx  # Testimonials
│   │   ├── Footer.jsx     # Footer with social links
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Tech.jsx       # Technologies section
│   │   ├── Works.jsx      # Projects section
│   ├── constants/         # Static data (projects, testimonials, etc.)
│   ├── hoc/               # Higher-order components
│   ├── styles.js          # Tailwind utility classes
│   ├── utils/             # Utility functions (e.g., animations)
│   ├── App.jsx            # Main application component
│   ├── index.js           # Entry point
├── README.md              # Project documentation
├── package.json           # Dependencies and scripts
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mustaqeem-portfolio.git
   cdDeepanshu-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser at `http://localhost:3000`.

---

## Usage

- **Navigate**: Use the navigation bar to explore different sections.
- **View Projects**: Check out the projects section to see my work.
- **Contact Me**: Use the contact form to send me a message.

---

## Components Overview

### 1. **Hero**
- **File**: `src/components/Hero.jsx`
- **Description**: Displays the introduction section with a 3D computer model and a call-to-action to scroll down.
- **Key Features**:
  - Animated text and 3D model using `ComputersCanvas`.
  - Scroll indicator for navigation to the "About" section.

---

### 2. **Navbar**
- **File**: `src/components/Navbar.jsx`
- **Description**: Provides a responsive navigation bar with links to different sections of the portfolio.
- **Key Features**:
  - Dynamic active link highlighting.
  - Mobile-friendly menu toggle.

---

### 3. **About**
- **File**: `src/components/About.jsx`
- **Description**: Displays an overview of the developer's skills and services.
- **Key Features**:
  - Animated service cards using `react-tilt` and `framer-motion`.
  - Grid layout for responsive design.

---

### 4. **Experience**
- **File**: `src/components/Experience.jsx`
- **Description**: Showcases the developer's work experience in a timeline format.
- **Key Features**:
  - Uses `react-vertical-timeline-component` for a visually appealing timeline.
  - Includes company logos, roles, and key responsibilities.

---

### 5. **Tech**
- **File**: `src/components/Tech.jsx`
- **Description**: Displays the technologies the developer is proficient in.
- **Key Features**:
  - Animated icons for each technology.
  - Responsive layout for all screen sizes.

---

### 6. **Works**
- **File**: `src/components/Works.jsx`
- **Description**: Highlights the developer's projects with descriptions, tags, and links.
- **Key Features**:
  - Interactive project cards with animations.
  - Links to live demos and source code.

---

### 7. **Feedbacks**
- **File**: `src/components/Feedbacks.jsx`
- **Description**: Displays testimonials from clients or collaborators.
- **Key Features**:
  - Animated feedback cards.
  - Includes client name, designation, company, and profile image.

---

### 8. **Contact**
- **File**: `src/components/Contact.jsx`
- **Description**: Provides a contact form for users to send messages.
- **Key Features**:
  - Integrated with EmailJS for email functionality.
  - Includes name, email, and message fields.

---

### 9. **Footer**
- **File**: `src/components/Footer.jsx`
- **Description**: Displays social media links in the footer.
- **Key Features**:
  - Links to Instagram, Twitter, and LinkedIn.
  - Uses `react-icons` for social media icons.

---

### 10. **Loader**
- **File**: `src/components/Loader.jsx`
- **Description**: Displays a loading animation for 3D canvas elements.
- **Key Features**:
  - Shows progress percentage using `@react-three/drei`.

---

### 11. **Canvas Components**
#### a. **ComputersCanvas**
- **File**: `src/components/canvas/Computers.jsx`
- **Description**: Displays a 3D model of a computer.
- **Key Features**:
  - Uses `@react-three/fiber` and `@react-three/drei` for rendering.
  - Responsive to screen size.

#### b. **EarthCanvas**
- **File**: `src/components/canvas/Earth.jsx`
- **Description**: Displays a 3D model of Earth.
- **Key Features**:
  - Rotating Earth model with orbit controls.
  - Uses GLTF loader for 3D assets.

#### c. **BallCanvas**
- **File**: `src/components/canvas/Ball.jsx`
- **Description**: Displays a 3D ball with a decal texture.
- **Key Features**:
  - Animated floating effect.
  - Customizable decal texture.

#### d. **StarsCanvas**
- **File**: `src/components/canvas/Stars.jsx`
- **Description**: Displays a background of animated stars.
- **Key Features**:
  - Uses `@react-three/fiber` for rendering.
  - Rotating star field effect.

---

### 12. **Higher-Order Components**
#### a. **SectionWrapper**
- **File**: `src/hoc/SectionWrapper.jsx`
- **Description**: Wraps components with animations and section-specific styles.
- **Key Features**:
  - Adds staggered animations using `framer-motion`.
  - Provides consistent padding and layout.

---

### 13. **Utility Functions**
#### a. **motion.js**
- **File**: `src/utils/motion.js`
- **Description**: Contains reusable animation variants for `framer-motion`.
- **Key Features**:
  - Predefined animations like `fadeIn`, `slideIn`, and `staggerContainer`.

---

### 14. **Styles**
- **File**: `src/styles.js`
- **Description**: Contains reusable Tailwind CSS utility classes.
- **Key Features**:
  - Centralized styling for consistent design.

---

## Environment Variables

Create a `.env` file in the root directory and add the following:

```plaintext
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace `your_service_id`, `your_template_id`, and `your_public_key` with your EmailJS credentials.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

This updated README.md includes detailed documentation for all components in your project. You can further customize it as needed.