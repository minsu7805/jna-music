@echo off
chcp 65001 >nul
echo JNA 실용음악학원 Vercel 배포
echo.
echo 1. 브라우저에서 Vercel 로그인
echo 2. Deploy without Git 또는 폴더 업로드 선택
echo 3. jna-music 폴더 내용 업로드 (index.html 이 루트에 있어야 함)
echo 4. Framework: Other, Build Command: 비움
echo 5. Deploy 후 Settings - Deployment Protection 끄기
echo.
start https://vercel.com/new
explorer "%~dp0"
pause
