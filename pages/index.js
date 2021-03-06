import { Prism } from "@mantine/prism";
import Head from "next/head";

export default function Home() {
  const publicUrl = (url) => {
    // 判断是否是生产环境
    return `${
      process.env.NODE_ENV !== "production"
        ? url
        : `https://swordjs.github.io/backend-framework-website${url}`
    }`;
  };
  const routeIndexCode = `

// 当前路由是：POST http://localhost:3000/api/product/add

import { useApi, POST } from '@swordjs/sword-framework';
import { ReqQuery, ReqParams, Res } from './proto';

export const main = useApi<{
  query: ReqQuery;
  params: ReqParams;
  res: Promise<Res>;
}>({
  instruct: [POST()],
  handler: async (ctx) => {
    return {
      message: 'hello'
    };
  }
});
`;

  return (
    <div className="index">
      <Head>
        <title>SwordJS 是一个运行在Server和Serverless上的Nodejs框架</title>
        <link rel="shortcut icon" href={publicUrl("/favicon.png")} />
      </Head>
      {/* 头部板块 */}
      <div className="header-block">
        {/* 标题 */}
        <div className="title">Sword.js</div>
        {/* 介绍 */}
        <div className="desc">一个运行在Server和Serverless上的Nodejs框架</div>
        {/* button */}
        <div className="buttons">
          <a
            href="https://github.com/swordjs/backend-framework"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="button black">
              <div className="icon">
                <img
                  src="https://yinzhuoei-static.oss-cn-beijing.aliyuncs.com/typecho/2022/03/github.svg"
                  alt=""
                />
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
      {/* 功能介绍 */}
      <div className="function-block">
        <div className="title">TypeScript运行时类型校验</div>
        {/* 介绍 */}
        <div className="desc">
          在TypeScript中，我们可以通过类型系统来检查代码的运行时类型。
        </div>
        {/* 插入视频 */}
        <div className="video" style={{ marginTop: "2vw" }}>
          <video
            style={{
              width: "38%",
              height: "38%",
            }}
            src={publicUrl("/video/type-check.mov")}
            autoPlay="autoplay"
            loop="loop"
          ></video>
        </div>
      </div>
      <div className="function-block function-block-black">
        <div className="title">毫秒级启动和构建</div>
        <div className="desc">就算你有数百个接口，也不会给你喝茶的功夫</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "40vw",
            margin: "0 auto",
            marginTop: "2vw",
          }}
        >
          <img
            style={{ width: "14%" }}
            src={publicUrl("/typescript.png")}
          ></img>
          <div className="code-block">
            <Prism colorScheme="dark" language="bash">
              {`
> sword dev
ℹ 启动入口文件: src/index.ts 
ℹ 正在监听工程中的src/api文件夹... 
✔ API.Schema加载成功
2022-4-9 20:28:59 HTTP服务启动中...
2022-4-9 20:28:59 程序运行在3000端口上
              `}
            </Prism>
          </div>
          <img style={{ width: "18%" }} src={publicUrl("/esbuild.png")}></img>
        </div>
      </div>
      <div className="function-block">
        <div className="title">文件系统就是路由</div>
        <div className="desc">
          最自然的树形结构就能代表路由，我们为什么还要配置文件呢？
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2vw",
          }}
        >
          <div className="code-block">
            <Prism colorScheme="dark" language="shell">
              {`|- src
  |- api
    |- product
      |- add
        |- index.ts
        |- proto.ts`}
            </Prism>
          </div>
          <div
            className="code-block"
            style={{
              marginLeft: "2vw",
            }}
          >
            <Prism colorScheme="dark" language="ts">
              {routeIndexCode}
            </Prism>
          </div>
        </div>
      </div>
      <div className="function-block function-block-black">
        <div className="title">一键生成API文档</div>
        <div className="desc">
          不与业务耦合, 在Proto中写一段注释, 就可以生成Markdown & OpenAPI文档
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2vw",
          }}
        >
          <div className="code-block">
            <Prism colorScheme="dark" language="typescript">
              {`/**
* 这是hello接口
* 1
*/

export interface ReqParams {
  
}

export interface ReqQuery {
  /**
  * id
  * 编号
  */
  id: string,
  /**
  * nickname
  * 昵称
  */
  nickname?: string,
}

/**
* 返回的res是一个string
* 这里不用返回其他信息
*/
export type Res = string;
`}
            </Prism>
          </div>
          <img
            style={{ marginLeft: "2vw", width: "20%" }}
            src={publicUrl("/doc.png")}
          ></img>
        </div>
      </div>
      <div className="function-block">
        <div className="title">Hook API设计</div>
        <div className="desc">
          异步函数编程风格, 轻量级超低学习门槛, 让你快速开发云函数
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2vw",
          }}
        >
          <img
            style={{ marginLeft: "2vw", width: "40%" }}
            src={publicUrl("/hook.png")}
          ></img>
        </div>
      </div>
      <div className="function-block function-block-black">
        <div className="title">开箱即用的开发套件</div>
        <div className="desc">我们提供了一些开发套件，可以帮助我们快速开发</div>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "2vw auto 0 auto",
          }}
        >
          <div>
            <img src={publicUrl("/box.svg")}></img>
            <p style={{ textAlign: "center" }}>初始化工程</p>
          </div>
          <div>
            <img src={publicUrl("/file.svg")}></img>
            <p style={{ textAlign: "center" }}>便捷符创建API组</p>
          </div>
          <div>
            <img src={publicUrl("/tool.svg")}></img>
            <p style={{ textAlign: "center" }}>编译多平台产物</p>
          </div>
          <div>
            <img src={publicUrl("/code.svg")}></img>
            <p style={{ textAlign: "center" }}>VSCODE插件</p>
          </div>
        </div>
      </div>
      <div className="footer-shim" style={{ height: "3vh" }}></div>
      {/* 底部 */}
      <div className="footer">
        <span>版权所有 © {new Date().getFullYear()}</span>
        <a
          style={{ marginLeft: "10px" }}
          href="https://github.com/swordjs"
          target="__blank"
        >
          swordjs剑指题解团队
        </a>
      </div>
    </div>
  );
}
