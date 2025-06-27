# Calculator App

A modern, responsive web calculator with dark/light theme toggle and smooth animations.

## Features

- ✨ **Modern UI Design** - Clean and intuitive interface with smooth animations
- 🌙 **Dark/Light Theme** - Toggle between dark and light modes with local storage persistence
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🔢 **Full Calculator Functionality** - Support for basic arithmetic operations (+, -, ×, ÷)
- ⌫ **Backspace Support** - Delete individual characters or clear the entire calculation
- 🎯 **Smart Input Handling** - Prevents invalid inputs and handles edge cases
- 💾 **Local Storage** - Remembers your preferred theme setting

## Demo

The calculator includes:
- Number input (0-9)
- Basic arithmetic operations (+, -, ×, ÷)
- Decimal point support
- Clear (C) and backspace (⌫) functionality
- Equals (=) for calculations
- Theme toggle (☀️/🌑)

## Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - Interactive functionality and calculations

## File Structure

```
calculator/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── script.js       # Calculator logic and event handling
└── readme.md       # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start calculating!

### Local Development

```bash
# Navigate to the project directory
cd calculator

# Open with a local server (optional, but recommended)
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then open http://localhost:8000 in your browser
```

## Usage

1. **Basic Calculations**: Click number buttons and operators to build your expression
2. **Decimal Numbers**: Use the decimal point (.) for floating-point calculations
3. **Clear**: Use 'C' to clear the entire calculation
4. **Backspace**: Use '⌫' to delete the last entered character
5. **Calculate**: Press '=' to evaluate the expression
6. **Theme Toggle**: Click the sun/moon icon (☀️/🌑) to switch themes

## Key Features Explained

### Smart Input Validation
- Prevents multiple decimal points in a single number
- Handles leading zeros intelligently
- Prevents invalid operator sequences

### Theme Persistence
- Your preferred theme (dark/light) is saved in browser's local storage
- Theme preference persists across browser sessions

### Responsive Design
- Optimized for screens from 320px to 1536px+ width
- Touch-friendly button sizing for mobile devices
- Scalable layout that maintains usability across all devices

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## License

This project is open source and available under the [MIT License](LICENSE).

---
