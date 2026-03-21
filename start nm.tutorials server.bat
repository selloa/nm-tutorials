@echo off
setlocal

cd /d "%~dp0"

set "SITE_URL=http://127.0.0.1:8000/"
set "PYTHON_CMD=python"

if exist ".venv\Scripts\python.exe" (
  set "PYTHON_CMD=.venv\Scripts\python.exe"
)

where "%PYTHON_CMD%" >nul 2>nul
if errorlevel 1 (
  echo Python was not found. Install Python or create the project virtual environment first.
  pause
  exit /b 1
)

"%PYTHON_CMD%" -m mkdocs --version >nul 2>nul
if errorlevel 1 (
  echo MkDocs is not installed for %PYTHON_CMD%.
  echo Installing requirements...
  "%PYTHON_CMD%" -m pip install -r requirements.txt
  if errorlevel 1 (
    echo Failed to install requirements.
    pause
    exit /b 1
  )
)

echo Starting MkDocs development server...
start "MkDocs Local Server" cmd /k ""%PYTHON_CMD%" -m mkdocs serve"

echo Waiting for %SITE_URL% ...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$url = '%SITE_URL%';" ^
  "for ($i = 0; $i -lt 30; $i++) {" ^
  "  try {" ^
  "    Invoke-WebRequest -UseBasicParsing $url | Out-Null;" ^
  "    Start-Process $url;" ^
  "    exit 0" ^
  "  } catch {" ^
  "    Start-Sleep -Seconds 1" ^
  "  }" ^
  "}" ^
  "Start-Process $url"

echo Browser opened for %SITE_URL%
exit /b 0
