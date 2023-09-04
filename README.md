# 網頁切版直播班 -【 搜趣找貓 】專題製作

## 🕺作者
  - [BF Tsai](https://github.com/bftsai)

## 特別感謝 - 作品指導
  - 六角學院 / 洧杰老師
    
## 特別感謝 - 設計協作
  - 六角學院 / 合作設計師
  - [設計稿](https://www.figma.com/file/zth5XUKMHePyTIxwxYbuBi/2023-切版夏季班-W8---AI-虛擬陪伴?type=design&node-id=0-1&mode=design&t=wWrJSUjDvbGsgaKc-0)

## 圖片素材來源
- [GitHub](https://github.com/hexschool/2022-web-layout-training/tree/main/week8-ai)

## 資料夾結構
assets/
|-- week8
    |-- .DS_Store
    |-- .gitignore
    |-- README.md
    |-- main.js
    |-- package-lock.json
    |-- package.json
    |-- vite.config.js
    |-- assets
    |   |-- .DS_Store
    |   |-- images
    |   |   |-- .DS_Store
    |   |   |-- index
    |   |       |-- .DS_Store
    |   |       |-- Ellipse-black.svg
    |   |       |-- Ellipse-white.svg
    |   |       |-- arrow-next.svg
    |   |       |-- arrow-previous.svg
    |   |       |-- carousel-1.svg
    |   |       |-- carousel-2.jpg
    |   |       |-- carousel-3.jpg
    |   |       |-- carousel_background.jpg
    |   |       |-- carousel_background.png
    |   |       |-- carousel_background.svg
    |   |       |-- circle-2.svg
    |   |       |-- circle.svg
    |   |       |-- diane.svg
    |   |       |-- diane_mobile.svg
    |   |       |-- diane_vertical.png
    |   |       |-- felix.svg
    |   |       |-- felix_mobile.svg
    |   |       |-- felix_vertical.png
    |   |       |-- index-second-bg-mobile.svg
    |   |       |-- index-second-bg.svg
    |   |       |-- index-top-bg.svg
    |   |       |-- karina.svg
    |   |       |-- karina_mobile.svg
    |   |       |-- karina_verticalgle.png
    |   |       |-- logo.svg
    |   |       |-- multiply-icon.svg
    |   |       |-- multiply-white-icon.svg
    |   |       |-- subscription.svg
    |   |       |-- subsription-white-icon.svg
    |   |       |-- subsription-white.png
    |   |       |-- vito.svg
    |   |       |-- vito_mobile.svg
    |   |       |-- vito_vertical.png
    |   |       |-- white-Line 14.svg
    |   |       |-- white-arrow-155.svg
    |   |       |-- white-arrow-196.svg
    |   |       |-- white-arrow-90.svg
    |   |-- js
    |   |   |-- collapse.js
    |   |   |-- collapse.js.map
    |   |   |-- index.js
    |   |   |-- swiper-test.js
    |   |-- scss
    |       |-- .DS_Store
    |       |-- all.scss
    |       |-- base
    |       |   |-- _base.scss
    |       |   |-- _reboot.scss
    |       |   |-- _root.scss
    |       |-- component
    |       |   |-- .DS_Store
    |       |   |-- _buttons.scss
    |       |   |-- _csshake-customer.scss
    |       |   |-- _csshake.scss
    |       |   |-- _forms.scss
    |       |   |-- _navbar.scss
    |       |   |-- _swiper.scss
    |       |   |-- _tools.scss
    |       |   |-- _whirling.scss
    |       |-- helpers
    |       |   |-- _helper.scss
    |       |   |-- _variables-dark.scss
    |       |   |-- _variables.scss
    |       |-- layout
    |       |   |-- _footer.scss
    |       |   |-- _header.scss
    |       |-- mixin
    |       |   |-- _breakpoint_customer.scss
    |       |-- pages
    |       |   |-- _index.scss
    |       |   |-- _swiperTest.scss
    |       |-- utilis
    |           |-- _utilities-customer.scss
    |           |-- _utilities.scss
    |-- dist
    |   |-- about.html
    |   |-- index.html
    |   |-- swiper-test.html
    |   |-- assets
    |       |-- Ellipse-black-31565d87.svg
    |       |-- Ellipse-white-383f4e56.svg
    |       |-- arrow-next-4f7b6cc0.svg
    |       |-- arrow-previous-953130ef.svg
    |       |-- bootstrap-e636a74d.css
    |       |-- bootstrap.bundle-c2c29494.js
    |       |-- carousel-1-0b3cc486.svg
    |       |-- carousel-2-76f63b7e.jpg
    |       |-- carousel-3-7fa6a14d.jpg
    |       |-- carousel_background-4b415692.svg
    |       |-- circle-2-ec2fa90f.svg
    |       |-- circle-4ce3cb0d.svg
    |       |-- diane_mobile-a6760d36.svg
    |       |-- diane_vertical-40c86c41.png
    |       |-- felix_mobile-aacaabc9.svg
    |       |-- felix_vertical-90896552.png
    |       |-- index-f2c2316d.js
    |       |-- karina_mobile-4a96a86d.svg
    |       |-- karina_verticalgle-b1db6fd3.png
    |       |-- logo-e30d83a2.svg
    |       |-- multiply-icon-4b9cdb15.svg
    |       |-- multiply-white-icon-4b50ba6f.svg
    |       |-- subscription-16416e86.svg
    |       |-- swiper-bundle-ae89c236.js
    |       |-- swiper-test-43a3f75c.js
    |       |-- vito_mobile-4ff770c7.svg
    |       |-- vito_vertical-48c6dd67.png
    |       |-- white-Line 14-cd3bfa3b.svg
    |       |-- white-arrow-155-6ce319cc.svg
    |       |-- white-arrow-196-841de761.svg
    |       |-- white-arrow-90-1fc195c0.svg
    |-- layout
    |   |-- footer.ejs
    |   |-- header.ejs
    |-- pages
        |-- about.html
        |-- index.html
        |-- swiper-test.html

## 🧑‍💻前端
![html5](https://camo.githubusercontent.com/49fbb99f92674cc6825349b154b65aaf4064aec465d61e8e1f9fb99da3d922a1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d2532334533344632362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465)
![css3](https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)
### 六角學院協助架構
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)




