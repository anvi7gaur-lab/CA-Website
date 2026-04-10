#!/bin/bash
# TaxForecast Setup Script for macOS/Linux

echo ""
echo "====================================================="
echo "    TaxForecast - Installation & Setup"
echo "====================================================="
echo ""

echo "Checking for Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed"
    echo "Please download and install Node.js from https://nodejs.org/"
    exit 1
fi

node --version
npm --version
echo ""

echo "Installing dependencies..."
echo ""
npm install

if [ $? -ne 0 ]; then
    echo "Error installing dependencies"
    exit 1
fi

echo ""
echo "====================================================="
echo "Dependencies installed successfully!"
echo "====================================================="
echo ""
echo "Setup Complete! Ready to run TaxForecast"
echo ""
echo "Next steps:"
echo "1. Update .env file with your Firebase credentials"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:5173 in your browser"
echo ""
