# 🏡 مطبخ الحي — Matbakh Al-Hay

متجر إلكتروني لبيع الطعام — نكهات عالمية، بأيد محلية

## 🚀 رفع المشروع على Vercel (خطوات بسيطة)

### الطريقة الأولى: من خلال GitHub (الأفضل)

1. **أنشئ حساباً على GitHub** على [github.com](https://github.com)
2. **أنشئ Repository جديد** باسم `matbakh-alhay`
3. **ارفع الملفات** على GitHub:
   - اضغط "Add file" > "Upload files"
   - ارفع جميع ملفات المشروع
   - اضغط "Commit changes"
4. **انتقل إلى Vercel** على [vercel.com](https://vercel.com)
5. **سجّل دخولاً بحساب GitHub**
6. اضغط **"New Project"**
7. اختر الـ Repository وقم بـ **Deploy**
8. ✅ موقعك جاهز على رابط مجاني مثل `matbakh-alhay.vercel.app`

### الطريقة الثانية: Vercel CLI

```bash
npm install -g vercel
cd matbakh-alhay
npm install
vercel
```

## 🛠️ تشغيل محلي

```bash
npm install
npm run dev
```

## 📁 هيكل المشروع

```
matbakh-alhay/
├── index.html
├── vite.config.js
├── vercel.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── Navbar.jsx + .css
│       ├── Hero.jsx + .css
│       ├── Menu.jsx + .css
│       ├── Cart.jsx + .css
│       └── Footer.jsx + .css
```

## ✨ المميزات

- ٱ عربي كامل (RTL)
- 🛒 سلة تسوق تفاعلية
- 📱 متجاوب مع الجوال
- ⚡ Vite + React 18
- 🎨 تصميم حداثي بألوان دافئة
