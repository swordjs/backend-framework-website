import Image from "next/image";

export default function Home() {
  return (
    <div className="index">
      {/* 头部板块 */}
      <div className="header-block">
        {/* 标题 */}
        <div className="title">Sword.js</div>
        {/* 介绍 */}
        <div className="desc">一个运行在Server和Serverless上的Nodejs框架</div>
        {/* button */}
        <div className="buttons">
          <a
            href="https://github.com/swordCodePractice/backend-framework"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="button black">
              <div className="icon">
                <img src="/github.svg" alt="" />
              </div>
              Github
            </div>
          </a>
          <a
            href="https://www.yuque.com/mlgrgm/lrf0ra"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="button white">Get Start</div>
          </a>
        </div>
      </div>
    </div>
  );
}
