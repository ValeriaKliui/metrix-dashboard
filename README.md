# 📊 Metrix Dashboard

A customizable SaaS analytics dashboard built with modern web technologies. Designed for data visualization, user personalization, and API integrations.  
Based on the [Metrix SaaS Dashboard UI Kit (Figma)](https://www.figma.com/design/83q8nPoIPVFu0A9HSIrHZS/Metrix-SaaS-Dashboard-UI-Kit--Community-?node-id=2-381&p=f&t=MCNHGbI2WO5ymVam-0)

## 🚀 Tech Stack

| Tech                             | Purpose                                              |
| -------------------------------- | ---------------------------------------------------- |
| **React + Next.js**              | Core framework with SSR/SSG for performance and SEO  |
| **MUI (Material UI)**            | UI components and styling                            |
| **Chart.js**                     | Graphs and data visualization                        |
| **React Query**                  | API data fetching, caching, and synchronization      |
| **GCP (Google Cloud Platform)**  | Hosting, storage, and CI/CD                          |
| **Auth0** (or Firebase Auth)     | User authentication and authorization                |
| **Storybook**                    | Component development and documentation in isolation |
| **Jest + React Testing Library** | Unit and integration tests for frontend              |
| **Sentry**                       | Real-time error monitoring                           |

## ✨ Features

- 🔐 **Authentication & Registration**  
  via Auth0 (with optional Firebase Auth fallback)

- 📊 **Interactive Dashboard with Charts**  
  Built using Chart.js for visualizing metrics

- 📁 **CSV Upload Support**  
  Users can upload metric files and visualize them

- 🔌 **External API Integrations**  
  Integrate data from platforms like YouTube, Instagram, Medium, and more

- 🧩 **Customizable Widgets**  
  Drag-and-drop dashboard layout with widget config (metric type, display format)

- 💾 **Dashboard Settings Persistence**  
  Save user dashboard layout to the database or local storage

- 🛠️ **(Optional) Admin Panel**  
  Manage users, permissions, and system-wide settings
