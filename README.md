# 網頁切版直播班 -【 AI 虛擬陪伴 】網頁製作

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
    |&emsp;|-- .DS_Store  
    |&emsp;|-- images  
    |&emsp;|&emsp;|-- .DS_Store  
    |&emsp;|&emsp;|-- index  
    |&emsp;|&emsp;|-- .DS_Store  
    |&emsp;|&emsp;|-- Ellipse-black.svg  
    |&emsp;|&emsp;|-- Ellipse-white.svg  
    |&emsp;|&emsp;|-- arrow-next.svg  
    |&emsp;|&emsp;|-- arrow-previous.svg  
    |&emsp;|&emsp;|-- carousel-1.svg  
    |&emsp;|&emsp;|-- carousel-2.jpg  
    |&emsp;|&emsp;|-- carousel-3.jpg  
    |&emsp;|&emsp;|-- carousel_background.jpg  
    |&emsp;|&emsp;|-- carousel_background.png  
    |&emsp;|&emsp;|-- carousel_background.svg  
    |&emsp;|&emsp;|-- circle-2.svg  
    |&emsp;|&emsp;|-- circle.svg  
    |&emsp;|&emsp;|-- diane.svg  
    |&emsp;|&emsp;|-- diane_mobile.svg  
    |&emsp;|&emsp;|-- diane_vertical.png  
    |&emsp;|&emsp;|-- felix.svg  
    |&emsp;|&emsp;|-- felix_mobile.svg  
    |&emsp;|&emsp;|-- felix_vertical.png  
    |&emsp;|&emsp;|-- index-second-bg-mobile.svg  
    |&emsp;|&emsp;|-- index-second-bg.svg  
    |&emsp;|&emsp;|-- index-top-bg.svg  
    |&emsp;|&emsp;|-- karina.svg  
    |&emsp;|&emsp;|-- karina_mobile.svg  
    |&emsp;|&emsp;|-- karina_verticalgle.png  
    |&emsp;|&emsp;|-- logo.svg  
    |&emsp;|&emsp;|-- multiply-icon.svg  
    |&emsp;|&emsp;|-- multiply-white-icon.svg  
    |&emsp;|&emsp;|-- subscription.svg  
    |&emsp;|&emsp;|-- subsription-white-icon.svg  
    |&emsp;|&emsp;|-- subsription-white.png  
    |&emsp;|&emsp;|-- vito.svg  
    |&emsp;|&emsp;|-- vito_mobile.svg  
    |&emsp;|&emsp;|-- vito_vertical.png  
    |&emsp;|&emsp;|-- white-Line 14.svg  
    |&emsp;|&emsp;|-- white-arrow-155.svg  
    |&emsp;|&emsp;|-- white-arrow-196.svg  
    |&emsp;|&emsp;|-- white-arrow-90.svg  
    |&emsp;|-- js  
    |&emsp;|&emsp;|-- collapse.js  
    |&emsp;|&emsp;|-- collapse.js.map  
    |&emsp;|&emsp;|-- index.js  
    |&emsp;|&emsp;|-- swiper-test.js  
    |&emsp;|-- scss  
    |&emsp;|-- .DS_Store  
    |&emsp;|-- all.scss  
    |&emsp;|-- base  
    |&emsp;|&emsp;|-- _base.scss  
    |&emsp;|&emsp;|-- _reboot.scss  
    |&emsp;|&emsp;|-- _root.scss  
    |&emsp;|-- component  
    |&emsp;|&emsp;|-- .DS_Store  
    |&emsp;|&emsp;|-- _buttons.scss  
    |&emsp;|&emsp;|-- _csshake-customer.scss  
    |&emsp;|&emsp;|-- _csshake.scss  
    |&emsp;|&emsp;|-- _forms.scss  
    |&emsp;|&emsp;|-- _navbar.scss  
    |&emsp;|&emsp;|-- _swiper.scss  
    |&emsp;|&emsp;|-- _tools.scss  
    |&emsp;|&emsp;|-- _whirling.scss  
    |&emsp;|-- helpers  
    |&emsp;|&emsp;|-- _helper.scss  
    |&emsp;|&emsp;|-- _variables-dark.scss  
    |&emsp;|&emsp;|-- _variables.scss  
    |&emsp;|-- layout  
    |&emsp;|&emsp;|-- _footer.scss  
    |&emsp;|&emsp;|-- _header.scss  
    |&emsp;|-- mixin  
    |&emsp;|&emsp;|-- _breakpoint_customer.scss  
    |&emsp;|-- pages  
    |&emsp;|&emsp;|-- _index.scss  
    |&emsp;|&emsp;|-- _swiperTest.scss  
    |&emsp;|-- utilis  
    |&emsp;&emsp;|-- _utilities-customer.scss  
    |&emsp;&emsp;|-- _utilities.scss  
    |-- layout  
    |&emsp;|-- footer.ejs  
    |&emsp;|-- header.ejs  
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




