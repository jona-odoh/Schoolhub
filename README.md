# 🎓 SchoolHub - Advanced SaaS School Management System

A modern, professional, and feature-rich school management system frontend built with HTML, CSS, JavaScript, and Bootstrap 5. This enterprise-grade platform provides comprehensive multi-portal solutions for educational institutions.

![SchoolHub](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple)

## ✨ Features

### 🏢 Multi-Portal Architecture
- **Super Admin Portal** - Platform-wide management, billing, subscriptions
- **School Admin Portal** - Complete school operations management
- **Teacher Portal** - Class management, grading, attendance
- **Student Portal** - Assignments, results, timetable, live classes
- **Parent Portal** - Track children's performance and school activities

### 🎨 Modern UI/UX
- ✅ Clean, professional, enterprise-grade design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Light/Dark mode support
- ✅ Smooth animations and transitions (AOS)
- ✅ Modern gradients, cards, and shadows
- ✅ Interactive charts and visualizations (Chart.js)
- ✅ Advanced data tables (DataTables)

### 📊 Key Functionalities
- **Dashboard Widgets** - Real-time stats and analytics
- **Student Management** - Complete student lifecycle
- **Teacher Management** - Staff records and schedules
- **Attendance Tracking** - Digital attendance system
- **Exams & Results** - Assessment management
- **Fee Management** - Payment tracking and invoicing
- **Timetable** - Automated scheduling
- **Library System** - Book management
- **Hostel & Transport** - Facility management
- **Messaging** - Internal communication
- **Live Classes** - Virtual classroom integration
- **Reports** - Comprehensive analytics

## 📁 Project Structure

```
SchoolHub/
├── index.html                 # Landing page with features & pricing
├── auth/                      # Authentication pages
│   ├── login.html            # Login page
│   ├── signup.html           # Multi-step signup
│   ├── forgot-password.html  # Password recovery
│   └── reset-password.html   # Password reset
├── admin/                     # School Admin Portal
│   ├── dashboard.html        # Admin dashboard
│   ├── students.html         # Student management
│   ├── teachers.html         # Teacher management
│   ├── classes.html          # Class & subject management
│   ├── attendance.html       # Attendance tracking
│   ├── exams.html           # Exam management
│   ├── assignments.html     # Assignment management
│   ├── fees.html            # Fee management
│   ├── timetable.html       # Timetable
│   ├── library.html         # Library management
│   ├── hostel.html          # Hostel management
│   ├── transport.html       # Transport management
│   ├── messaging.html       # Messaging system
│   ├── reports.html         # Reports & analytics
│   └── settings.html        # Settings
├── teacher/                  # Teacher Portal
│   ├── dashboard.html       # Teacher dashboard
│   ├── my-classes.html      # Class management
│   ├── attendance.html      # Mark attendance
│   ├── grading.html         # Grade assignments
│   ├── assignments.html     # Assignment management
│   ├── lessons.html         # Lesson plans
│   └── ...
├── student/                  # Student Portal
│   ├── dashboard.html       # Student dashboard
│   ├── timetable.html       # Class schedule
│   ├── assignments.html     # View assignments
│   ├── exams.html          # Exams & results
│   ├── attendance.html     # View attendance
│   ├── fees.html           # Fee status
│   ├── live-classes.html   # Join live classes
│   └── ...
├── parent/                   # Parent Portal
│   ├── dashboard.html       # Parent dashboard
│   ├── children.html        # Children overview
│   ├── performance.html     # Academic tracking
│   ├── fees.html           # Fee payments
│   └── ...
├── superadmin/              # Super Admin Portal
│   ├── dashboard.html      # Platform dashboard
│   ├── schools.html        # Manage schools
│   ├── subscriptions.html  # Subscription management
│   ├── billing.html        # Billing & invoicing
│   ├── analytics.html      # Platform analytics
│   └── ...
└── assets/                  # Static resources
    ├── css/
    │   └── main.css        # Main stylesheet
    ├── js/
    │   └── main.js         # Main JavaScript
    ├── img/                # Images
    └── fonts/              # Custom fonts
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jona-odoh/Schoolhub.git
   cd Schoolhub
   ```

2. **Open with a local server**
   
   **Option 1: Using Python**
   ```bash
   # Python 3
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

   **Option 2: Using Node.js**
   ```bash
   npx http-server
   # Then visit http://localhost:8080
   ```

   **Option 3: Using VS Code**
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

3. **Open directly (without server)**
   - Simply open `index.html` in your browser
   - Note: Some features may require a web server

## 🎯 Usage

### Accessing Different Portals

1. **Landing Page**: `index.html`
   - View features, pricing, and testimonials
   - Sign up or login

2. **Login Page**: `auth/login.html`
   - Quick access buttons for demo purposes:
     - Super Admin Portal
     - School Admin Portal
     - Teacher Portal
     - Student Portal
     - Parent Portal

3. **Portal Dashboards**:
   - **Super Admin**: `superadmin/dashboard.html`
   - **School Admin**: `admin/dashboard.html`
   - **Teacher**: `teacher/dashboard.html`
   - **Student**: `student/dashboard.html`
   - **Parent**: `parent/dashboard.html`

### Key Features to Explore

#### 🌓 Light/Dark Mode
- Click the theme toggle button (moon/sun icon) in the navbar
- Theme preference is saved in localStorage

#### 📊 Interactive Charts
- View attendance trends
- Monitor performance metrics
- Track fee collection
- Analyze platform statistics

#### 📋 Data Tables
- Sortable columns
- Search functionality
- Pagination
- Export options

#### 🔔 Notifications
- Real-time notification dropdown
- Activity tracking
- System alerts

#### 📱 Responsive Design
- Fully functional on mobile devices
- Collapsible sidebar on small screens
- Touch-friendly interface

## 🛠️ Technologies Used

### Frontend Framework & Libraries
- **Bootstrap 5.3.2** - UI framework
- **Font Awesome 6.5.1** - Icons
- **Chart.js 4.4.1** - Data visualization
- **DataTables 1.13.7** - Advanced tables
- **AOS 2.3.1** - Scroll animations
- **Google Fonts** - Typography (Inter, Poppins)

### Core Technologies
- **HTML5** - Structure
- **CSS3** - Styling (with CSS variables for theming)
- **JavaScript (ES6+)** - Interactivity
- **jQuery 3.7.1** - DOM manipulation (for DataTables)

## 🎨 Customization

### Color Scheme
Edit CSS variables in `assets/css/main.css`:

```css
:root {
    --primary-color: #4F46E5;    /* Primary brand color */
    --secondary-color: #EC4899;   /* Secondary brand color */
    --success-color: #10B981;     /* Success states */
    --warning-color: #F59E0B;     /* Warnings */
    --danger-color: #EF4444;      /* Errors/Danger */
}
```

### Fonts
Change fonts in `assets/css/main.css`:

```css
:root {
    --font-primary: 'Inter', sans-serif;
    --font-heading: 'Poppins', sans-serif;
}
```

### Logo & Branding
- Replace the graduation cap icon with your logo
- Update `SchoolHub` text with your brand name
- Customize colors to match your brand identity

## 📦 Components

### Reusable Components

#### Cards
```html
<div class="card-custom">
    <div class="card-header-custom">
        <h5>Card Title</h5>
    </div>
    <div class="card-body">
        Content here
    </div>
</div>
```

#### Stat Cards
```html
<div class="stat-card">
    <div class="stat-label">Label</div>
    <div class="stat-value">1,234</div>
    <div class="stat-icon bg-gradient-primary">
        <i class="fas fa-icon"></i>
    </div>
</div>
```

#### Modals
```html
<div class="modal-custom" id="myModal">
    <div class="modal-content-custom">
        <div class="modal-header-custom">
            <h5>Modal Title</h5>
            <button data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body-custom">
            Content
        </div>
        <div class="modal-footer-custom">
            <button class="btn btn-primary">Save</button>
        </div>
    </div>
</div>
```

## 🔌 Integration Points

The frontend is designed to be easily integrated with backend APIs:

### API Endpoints (Examples)
```javascript
// Student Management
GET    /api/students          // List students
POST   /api/students          // Create student
GET    /api/students/:id      // Get student
PUT    /api/students/:id      // Update student
DELETE /api/students/:id      // Delete student

// Authentication
POST   /api/auth/login        // Login
POST   /api/auth/signup       // Signup
POST   /api/auth/logout       // Logout
POST   /api/auth/refresh      // Refresh token

// Dashboard Stats
GET    /api/dashboard/stats   // Get dashboard statistics
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ IE 11 (limited support)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Jona Odoh** - [GitHub](https://github.com/jona-odoh)

## 🙏 Acknowledgments

- Bootstrap team for the amazing framework
- Font Awesome for beautiful icons
- Chart.js for powerful visualizations
- All open-source contributors

## 📞 Support

For support, email support@schoolhub.com or join our Slack channel.

## 🗺️ Roadmap

- [ ] Backend API integration
- [ ] Real-time notifications (WebSockets)
- [ ] Progressive Web App (PWA)
- [ ] Mobile apps (React Native)
- [ ] AI-powered analytics
- [ ] Multi-language support
- [ ] Advanced reporting engine
- [ ] Integration with learning management systems

## 📸 Screenshots

### Landing Page
Professional landing page with features, pricing, and testimonials.

### Dashboards
- **Super Admin**: Platform-wide analytics and school management
- **School Admin**: Comprehensive school operations dashboard
- **Teacher**: Class management and grading interface
- **Student**: Academic progress and assignments
- **Parent**: Children's performance tracking

### Key Features
- Interactive charts and graphs
- Advanced data tables with search and filter
- Responsive design for all devices
- Light/dark mode theming
- Real-time notifications

---

**Built with ❤️ for modern education**