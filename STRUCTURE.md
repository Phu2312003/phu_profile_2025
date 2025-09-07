# Cấu Trúc Dự Án Portfolio

## 📁 Tổng Quan Cấu Trúc

```
portfolio/
├── 📄 index.html                    # File HTML chính
├── 📁 assets/                       # Thư mục chứa tài nguyên tĩnh
│   ├── 📁 css/                      # Stylesheets
│   │   ├── 📄 main.css             # Styles chính và utilities
│   │   ├── 📄 components.css       # Styles cho các component
│   │   └── 📄 animations.css       # Định nghĩa animations
│   ├── 📁 js/                       # JavaScript modules
│   │   ├── 📄 main.js              # Logic ứng dụng chính
│   │   ├── 📄 animations.js        # Classes và utilities cho animation
│   │   └── 📄 dark-mode.js         # Chức năng dark mode
│   └── 📁 images/                   # Hình ảnh
│       └── 📄 profile.svg          # Ảnh profile
├── 📄 package.json                  # Dependencies và scripts
├── 📄 tailwind.config.js           # Cấu hình Tailwind CSS
├── 📄 vite.config.js               # Cấu hình Vite build
├── 📄 .eslintrc.json               # Cấu hình ESLint
├── 📄 .prettierrc                  # Cấu hình Prettier
├── 📄 .gitignore                   # Quy tắc ignore cho Git
├── 📄 README.md                    # Tài liệu dự án
├── 📄 CONTRIBUTING.md              # Hướng dẫn đóng góp
├── 📄 LICENSE                      # Giấy phép MIT
└── 📄 STRUCTURE.md                 # File này - mô tả cấu trúc
```

## 🎯 Mô Tả Chi Tiết

### 📄 index.html
- File HTML chính chứa toàn bộ cấu trúc trang web
- Sử dụng semantic HTML5
- Tích hợp Tailwind CSS và Font Awesome
- Responsive design với meta viewport

### 📁 assets/css/
#### 📄 main.css
- Styles cơ bản và reset
- Utility classes
- Layout components
- Responsive design rules

#### 📄 components.css
- Styles cho từng component riêng biệt
- Hero section, About, Skills, Experience, Projects, Education, Contact
- Card styles và button styles
- Timeline styles

#### 📄 animations.css
- Định nghĩa tất cả animations
- Keyframes và transitions
- Hover effects
- Scroll reveal animations
- Particle system styles

### 📁 assets/js/
#### 📄 main.js
- Class PortfolioApp chính
- Khởi tạo tất cả modules
- Event listeners
- Form handlers
- Notification system

#### 📄 animations.js
- Class TypingAnimation
- Class ParticleSystem
- Class ScrollReveal
- Utility functions cho animations

#### 📄 dark-mode.js
- Class DarkMode
- Toggle functionality
- Local storage management
- System preference detection
- Custom styles management

### 📁 assets/images/
#### 📄 profile.svg
- Ảnh profile dạng SVG
- Scalable và lightweight
- Tích hợp sẵn trong HTML

## ⚙️ File Cấu Hình

### 📄 package.json
- Dependencies và devDependencies
- Scripts cho development và build
- Metadata dự án
- Browser support

### 📄 tailwind.config.js
- Cấu hình Tailwind CSS
- Custom colors và themes
- Custom animations
- Responsive breakpoints
- Dark mode configuration

### 📄 vite.config.js
- Cấu hình Vite build tool
- Development server settings
- Build optimization
- Asset handling

### 📄 .eslintrc.json
- ESLint rules và configuration
- Code style guidelines
- Error prevention rules
- Modern JavaScript support

### 📄 .prettierrc
- Prettier formatting rules
- Code consistency
- Automatic formatting
- Editor integration

### 📄 .gitignore
- Git ignore patterns
- Node modules
- Build artifacts
- IDE files
- OS generated files

## 📚 Tài Liệu

### 📄 README.md
- Mô tả dự án
- Hướng dẫn cài đặt
- Features và technologies
- Usage instructions
- Contact information

### 📄 CONTRIBUTING.md
- Hướng dẫn đóng góp
- Code style guidelines
- Pull request process
- Development setup
- Areas for contribution

### 📄 LICENSE
- MIT License
- Usage permissions
- Copyright information

## 🚀 Workflow Development

### 1. Development
```bash
npm run dev          # Start development server
npm run lint         # Check code quality
npm run format       # Format code
```

### 2. Build
```bash
npm run build        # Build for production
npm run minify-css   # Minify CSS files
npm run minify-js    # Minify JavaScript files
```

### 3. Deployment
```bash
npm run deploy       # Prepare for deployment
```

## 🎨 Design System

### Colors
- **Primary**: Blue tones (#1E90FF to #1e3a8a)
- **Secondary**: Gray tones (#f8fafc to #0f172a)
- **Accent**: Yellow/Gold tones (#fffbeb to #78350f)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Spacing
- **Base Unit**: 0.25rem (4px)
- **Scale**: 0.25, 0.5, 1, 1.5, 2, 3, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large**: > 1024px

## 🔧 Best Practices

### Code Organization
- Modular structure
- Separation of concerns
- Reusable components
- Consistent naming

### Performance
- Optimized images (SVG)
- Minified assets
- Efficient animations
- Lazy loading

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

### SEO
- Meta tags
- Structured data
- Semantic markup
- Performance optimization

## 📱 Responsive Strategy

### Mobile First
- Base styles for mobile
- Progressive enhancement
- Touch-friendly interactions
- Optimized performance

### Breakpoint Strategy
- Tailwind CSS breakpoints
- Flexible grid system
- Responsive typography
- Adaptive layouts

## 🌙 Dark Mode Implementation

### Features
- System preference detection
- Manual toggle
- Persistent storage
- Smooth transitions
- Custom styles

### Technical Details
- CSS custom properties
- JavaScript state management
- Local storage persistence
- Event-driven updates

---

**Cấu trúc này tuân theo các chuẩn quốc tế và best practices cho web development hiện đại.**
