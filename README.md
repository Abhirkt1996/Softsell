SoftSell - React Landing Page
Features Implemented
1. Responsive Design
A fully responsive one-page landing page using TailwindCSS.

The page adapts to various screen sizes from desktop to mobile.

2. Dark/Light Mode Toggle
Integrated a theme toggle feature that switches between light and dark modes.

The theme persists across page reloads using localStorage.

3. Hero Section
A welcoming hero section with a logo, a headline, a description, and a "Get a Quote" button.

Smooth animation when the hero section is loaded, using Framer Motion.

4. How It Works Section
A section explaining how SoftSell works with 3 steps: Upload License, Get Valuation, and Get Paid.

Each step has an associated icon and description.

Added smooth animations when each step appears using Framer Motion.

5. Testimonials Section
A section showcasing testimonials from clients, including their feedback, name, role, and company.

Testimonials appear with a fade-in effect as the user scrolls down the page.

Data is fetched from dummy data for showcasing.

6. Animations
Framer Motion is used to add animations on scroll, making the page more interactive.

Animations include fade-in, slide-up, and scale effects.

7. Mobile-Friendly
The site is designed to be fully mobile-responsive.

Mobile-friendly navigation and layout.

8. Custom Icons
React Icons are used for the icons in the "How It Works" section, giving a clean and professional look.

Design Choices
Color Scheme

The color palette is kept simple and professional. The background uses a gradient of blue and white for a light mode and a dark gray gradient for the dark mode.

Text colors were chosen to be legible on both light and dark backgrounds.

Font

The font family used is default sans-serif, and we use a mix of font sizes to emphasize headings and titles.

Font weights are varied to create visual hierarchy between titles, subtitles, and body text.

Animation and Transitions

Smooth transition effects are implemented to create an engaging user experience.

Framer Motion was chosen for animations due to its smooth performance and ease of use.

Layout

The layout is based on a grid system for consistency and alignment, with spacing controlled via TailwindCSS utilities.

The layout is fully responsive and adjusts elements to be displayed properly on both desktop and mobile devices.

Theme Toggle

The theme toggle provides users with the ability to switch between light and dark modes, offering a more customizable and user-friendly experience.

The state of the theme is stored in localStorage, so it persists even after a page reload.

Time Spent
Estimated Time Breakdown:
Initial Setup & Project Structure: ~2 hours

Hero Section Design & Animation: ~3 hours

Theme Toggle Implementation: ~1 hour

How It Works Section: ~2 hours

Testimonials Section: ~1.5 hours

Animations (Framer Motion): ~2 hours

Debugging & Testing Responsiveness: ~1 hour

Documentation (README.md): ~1 hour

Total Time Spent: ~13.5 hours
Installation & Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/softsell.git
cd softsell
Install dependencies:

bash
Copy
Edit
npm install
Run the project:

bash
Copy
Edit
npm run dev
Open your browser and go to http://localhost:3000 to view the website.

Future Improvements
Backend Integration

Integrate a backend for handling user registration, license uploads, and payment processing.

Contact Form

Add a working contact form that allows users to send inquiries.

SEO Enhancements

Improve the SEO of the website with better meta tags and descriptions.

