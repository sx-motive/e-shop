import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="box left">
        <h5>Подпишись на рассылку и получи купон на скидку.</h5>
        <Link href="/">
          <a className="subscribe-btn">Подписаться на рассылку ↗︎</a>
        </Link>
        <span className="agreement">
          Отправляя свои данные, вы соглашаетесь с условиями. Наша
          <Link href="/privacy-policy">
            <a className="privacy-link">политика конфиденциальности.</a>
          </Link>
        </span>
        <div className="col">
          <ul>
            <li>Купон на скидку 5%</li>
            <li>Интересные предложения</li>
            <li>Новости обновления ассортимента</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Информация о поступлении</li>
            <li>Учестие в клубе</li>
            <li>Специальные предложения</li>
          </ul>
        </div>
      </div>
      <div className="box right">
        <Link href="/">
          <a className="logo">
            <svg
              width="40"
              height="26"
              viewBox="0 0 40 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Db North America</title>
              <path
                d="M37.7832 10.2203C36.5391 8.60228 34.899 7.79327 32.8592 7.79327C31.834 7.79327 30.8789 8.04823 29.9946 8.55904C29.5116 8.84462 28.9871 9.26534 28.4218 9.8239V0.296875H21.4191V1.17796C22.1616 1.28696 22.6685 1.47705 22.9396 1.74913C23.2108 2.0212 23.3463 2.54372 23.3463 3.31759V6.14552C22.8997 5.36895 22.3654 4.65453 21.7381 4.00588C19.343 1.53381 15.8634 0.297775 11.3019 0.297775H0V1.25183C0.974683 1.33742 1.66139 1.49057 2.05835 1.71129C2.74418 2.09057 3.08797 2.76354 3.08797 3.73021V22.2707C3.08797 23.2744 2.72646 23.9662 2.0043 24.3446C1.59494 24.5536 0.926835 24.687 0 24.7482V25.7032H11.6811C15.9059 25.7032 19.2527 24.3753 21.7195 21.7194C22.3548 21.0347 22.8953 20.305 23.3463 19.532V25.6987H23.8594L26.7054 23.6122C27.3532 24.2356 28.0496 24.7392 28.7921 25.123C29.5347 25.5068 30.3897 25.6987 31.3556 25.6987C33.7125 25.6987 35.6841 24.8753 37.2701 23.2266C38.8553 21.5789 39.6484 19.2329 39.6484 16.1888C39.6484 13.8275 39.0272 11.8383 37.7832 10.2203ZM16.4659 22.078C15.0571 23.6509 13.2575 24.4374 11.0671 24.4374C10.2608 24.4374 9.73443 24.2662 9.48721 23.923C9.24 23.5807 9.09911 23.023 9.06278 22.2527V3.74823C9.06278 2.97705 9.15937 2.45724 9.35164 2.18787C9.6405 1.77165 10.2661 1.56354 11.2292 1.56354C14.1418 1.56354 16.2125 3.09958 17.4397 6.17165C18.1982 8.08066 18.5775 10.3635 18.5775 13.0185C18.5784 17.4852 17.8739 20.505 16.4659 22.078ZM33.5575 22.514C33.0444 23.8464 32.1699 24.5122 30.9311 24.5122C29.9414 24.5122 29.2334 24.0924 28.809 23.2527C28.5972 22.8212 28.467 22.2689 28.4209 21.596V11.9131C28.4209 11.6617 28.653 11.2437 29.1191 10.6626C29.5852 10.0807 30.2063 9.78967 30.9843 9.78967C32.3046 9.78967 33.1915 10.4852 33.6452 11.8771C34.0989 13.2689 34.3257 14.9311 34.3257 16.8626C34.3266 19.2987 34.0705 21.1825 33.5575 22.514Z"
                fill="black"
              ></path>
              <path
                d="M36.3245 0.296875L36.352 0.879757H36.2838C36.2705 0.777055 36.2528 0.704082 36.2297 0.659037C36.1925 0.588767 36.1429 0.535614 36.0809 0.50228C36.0189 0.468947 35.9373 0.451829 35.8363 0.451829H35.4925V2.35003C35.4925 2.50318 35.5085 2.59778 35.5413 2.63561C35.5864 2.68696 35.6573 2.71309 35.7521 2.71309H35.8363V2.78066H34.8005V2.71309H34.8864C34.9901 2.71309 35.0628 2.68156 35.1062 2.6176C35.1337 2.57796 35.147 2.48877 35.147 2.34913V0.45273H34.8528C34.7385 0.45273 34.6578 0.46174 34.6091 0.478857C34.5471 0.50228 34.493 0.546425 34.4496 0.61219C34.4053 0.677956 34.3787 0.767145 34.3699 0.879757H34.3016L34.3309 0.296875H36.3245Z"
                fill="black"
              ></path>
              <path
                d="M37.954 2.78156L37.0103 0.691469V2.35093C37.0103 2.50408 37.0263 2.59868 37.059 2.63651C37.1034 2.68787 37.1734 2.71399 37.2699 2.71399H37.3568V2.78156H36.5061V2.71399H36.5921C36.6949 2.71399 36.7684 2.68246 36.8118 2.6185C36.8375 2.57886 36.8517 2.48967 36.8517 2.35003V0.727505C36.8517 0.617596 36.8393 0.537415 36.8154 0.488767C36.7985 0.453631 36.7675 0.423902 36.7223 0.399578C36.6771 0.376154 36.6045 0.364443 36.5052 0.364443V0.296875H37.1973L38.0842 2.24102L38.9561 0.296875H39.6482V0.364443H39.5631C39.4585 0.364443 39.385 0.395974 39.3416 0.459037C39.315 0.497775 39.3017 0.587866 39.3017 0.726604V2.34913C39.3017 2.50228 39.3185 2.59687 39.3522 2.63471C39.3965 2.68606 39.4665 2.71219 39.5631 2.71219H39.6482V2.77976H38.6106V2.71219H38.6965C38.802 2.71219 38.8746 2.68066 38.9163 2.61669C38.9428 2.57705 38.9561 2.48787 38.9561 2.34823V0.688767L38.0142 2.77886H37.954V2.78156Z"
                fill="black"
              ></path>
            </svg>
          </a>
        </Link>
        <div className="footer-menu">
          <span className="menu-title">Поддержка</span>

          <div className="col">
            <ul>
              <li>Центр поддержки</li>
              <li>Возврат товара</li>
              <li>Отслеживание статуса заказа</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Партнерская программа</li>
              <li>Бонусы за друзей</li>
            </ul>
          </div>
        </div>
        <div className="footer-socials-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Logo Instagram</title>
            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Logo Instagram</title>
            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Logo Instagram</title>
            <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
            <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
          </svg>
        </div>
        <div className="preferences">
          <div className="payment-wrap">
            <div className="payment-img-wrap">
              <Image
                src="/images/payment/paypal@2x.png"
                layout="fill"
                alt="card"
                priority
              />
            </div>
            <div className="payment-img-wrap">
              <Image
                src="/images/payment/maestro@2x.png"
                layout="fill"
                alt="card"
                priority
              />
            </div>
            <div className="payment-img-wrap">
              <Image
                src="/images/payment/visa@2x.png"
                layout="fill"
                alt="card"
                priority
              />
            </div>
            <div className="payment-img-wrap">
              <Image
                src="/images/payment/mastercard@2x.png"
                layout="fill"
                alt="card"
                priority
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom-menu">
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Statement</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>
        <span className="author copyright">
          Project Deveelopment and Promotion by{" "}
          <Link href="https://t.me/sx-motive" target="_blank">
            <a>Denis Kunitsyn.</a>
          </Link>
        </span>
        <span className="author copyright">
          ©2022, DB EQUIPMENT. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}
