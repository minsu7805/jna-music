@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ========================================
echo   JNA 실용음악학원 - 로컬 서버 실행
echo ========================================
echo.
echo YouTube 영상 재생을 위해 반드시 이 파일로 열어 주세요.
echo HTML 파일을 직접 더블클릭하면 영상 오류(153)가 납니다.
echo.
echo 브라우저 주소: http://localhost:5500
echo.
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
