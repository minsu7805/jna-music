@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo JNA 실용음악학원 로컬 서버를 시작합니다...
echo 브라우저에서 http://localhost:5500 으로 열립니다.
echo 종료하려면 이 창을 닫으세요.
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
