🚀 DevPulse - Full-Stack Resource Hub

DevPulse is a modern web application designed for software engineering students and beginners to discover and share essential technical resources. It serves as a curated hub featuring both expert-recommended tools and community-contributed content.

🛠️ Tech Stack
This project is built using the latest industry-standard technologies:

Framework: Next.js 15 (App Router)

Language: TypeScript

Database: MongoDB Atlas

Authentication: Clerk Auth

Styling: Tailwind CSS

Animations: Framer Motion


✨ Key Features

Dynamic Resource Categorization: Resources are neatly organized into Frontend, Backend, and UI/UX categories.

Real-time Resource Counting: Displays the actual number of resources available in the database for each category.

Community Contributions: Registered users can suggest and add new resources via a dedicated form.

Save/Bookmark: Users can save their favorite resources for quick access later.

Responsive & Dark Mode: Fully optimized for mobile and desktop with a sleek dark theme.


🏗️ Architecture & Logic

The system leverages Next.js 15 Server Actions for efficient data management:

Server-Side Fetching: Data is retrieved from MongoDB on the server, ensuring fast initial page loads.

Instant Revalidation: Uses revalidatePath to update the UI immediately after a new resource is added without requiring a manual refresh.

Secure Middleware: Implements Clerk middleware to protect routes and ensure only authorized users can contribute data.
