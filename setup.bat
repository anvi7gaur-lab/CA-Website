@echo off
REM TaxForecast Setup Script for Windows

echo.
echo =====================================================
echo    TaxForecast - Installation & Setup
echo =====================================================
echo.

:check_node
echo Checking for Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo Error: Node.js is not installed or not in PATH
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
node --version
npm --version
echo.

:install_dependencies
echo Installing dependencies...
echo.
call npm install
if errorlevel 1 (
    echo Error installing dependencies
    pause
    exit /b 1
)
echo.
echo =====================================================
echo Dependencies installed successfully!
echo =====================================================
echo.

:setup_complete
echo.
echo Setup Complete! Ready to run TaxForecast
echo.
echo Next steps:
echo 1. Update .env file with your Firebase credentials
echo 2. Run 'npm run dev' to start the development server
echo 3. Open http://localhost:5173 in your browser
echo.
pause
