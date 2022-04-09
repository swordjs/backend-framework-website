(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},3678:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return r}});var i=n(5893),c=n(2286);function r(){return(0,i.jsxs)("div",{className:"index",children:[(0,i.jsxs)("div",{className:"header-block",children:[(0,i.jsx)("div",{className:"title",children:"Sword.js"}),(0,i.jsx)("div",{className:"desc",children:"\u4e00\u4e2a\u8fd0\u884c\u5728Server\u548cServerless\u4e0a\u7684Nodejs\u6846\u67b6"}),(0,i.jsxs)("div",{className:"buttons",children:[(0,i.jsx)("a",{href:"https://github.com/swordCodePractice/backend-framework",target:"_blank",rel:"noreferrer",children:(0,i.jsxs)("div",{className:"button black",children:[(0,i.jsx)("div",{className:"icon",children:(0,i.jsx)("img",{src:"https://yinzhuoei-static.oss-cn-beijing.aliyuncs.com/typecho/2022/03/github.svg",alt:""})}),"Github"]})}),(0,i.jsx)("a",{href:"https://www.yuque.com/mlgrgm/lrf0ra",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("div",{className:"button white",children:"Get Start"})})]})]}),(0,i.jsxs)("div",{className:"function-block",children:[(0,i.jsx)("div",{className:"title",children:"TypeScript\u8fd0\u884c\u65f6\u7c7b\u578b\u6821\u9a8c"}),(0,i.jsx)("div",{className:"desc",children:"\u5728TypeScript\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u7c7b\u578b\u7cfb\u7edf\u6765\u68c0\u67e5\u4ee3\u7801\u7684\u8fd0\u884c\u65f6\u7c7b\u578b\u3002"}),(0,i.jsx)("div",{className:"video",style:{marginTop:"2vw"},children:(0,i.jsx)("video",{style:{width:"38%",height:"38%"},src:"/video/type-check.mov",autoPlay:"autoplay",loop:"loop"})})]}),(0,i.jsxs)("div",{className:"function-block function-block-black",children:[(0,i.jsx)("div",{className:"title",children:"\u6beb\u79d2\u7ea7\u542f\u52a8\u548c\u6784\u5efa"}),(0,i.jsx)("div",{className:"desc",children:"\u5c31\u7b97\u4f60\u6709\u6570\u767e\u4e2a\u63a5\u53e3\uff0c\u4e5f\u4e0d\u4f1a\u7ed9\u4f60\u559d\u8336\u7684\u529f\u592b"}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"2vw"},children:[(0,i.jsxs)("div",{className:"images",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)("img",{style:{marginLeft:"4vw"},src:"/esbuild.png"}),(0,i.jsx)("img",{style:{width:"335px",height:"15%",marginLeft:"4vw"},src:"/swc.png"})]}),(0,i.jsx)("div",{className:"code-block",style:{marginLeft:"4vw"},children:(0,i.jsx)(c.p1,{colorScheme:"dark",language:"bash",children:"\n> sword dev\n\u2139 \u542f\u52a8\u5165\u53e3\u6587\u4ef6: src/index.ts \n\u2139 \u6b63\u5728\u76d1\u542c\u5de5\u7a0b\u4e2d\u7684src/api\u6587\u4ef6\u5939... \n\u2714 Proto\u52a0\u8f7d\u6210\u529f\n2022-4-9 20:28:59 HTTP\u670d\u52a1\u542f\u52a8\u4e2d...\n2022-4-9 20:28:59 \u7a0b\u5e8f\u8fd0\u884c\u57283000\u7aef\u53e3\u4e0a\n              "})})]})]}),(0,i.jsxs)("div",{className:"function-block",children:[(0,i.jsx)("div",{className:"title",children:"\u6587\u4ef6\u7cfb\u7edf\u5c31\u662f\u8def\u7531"}),(0,i.jsx)("div",{className:"desc",children:"\u6700\u81ea\u7136\u7684\u6811\u5f62\u7ed3\u6784\u5c31\u80fd\u4ee3\u8868\u8def\u7531\uff0c\u6211\u4eec\u4e3a\u4ec0\u4e48\u8fd8\u8981\u914d\u7f6e\u6587\u4ef6\u5462\uff1f"}),(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"2vw"},children:[(0,i.jsx)("div",{className:"code-block",children:(0,i.jsx)(c.p1,{colorScheme:"dark",language:"shell",children:"|- src\n  |- api\n    |- product\n      |- add\n        |- index.ts\n        |- proto.ts"})}),(0,i.jsx)("div",{className:"code-block",style:{marginLeft:"2vw"},children:(0,i.jsx)(c.p1,{colorScheme:"dark",language:"ts",children:"\n\n// \u5f53\u524d\u8def\u7531\u662f\uff1aPOST http://localhost:3000/api/product/add\n\nimport { useApi, POST } from '@sword-code-practice/sword-framework';\nimport { ReqQuery, ReqParams, Res } from './proto';\n\nexport const main = useApi<{\n  query: ReqQuery;\n  params: ReqParams;\n  res: Res;\n}>({\n  instruct: [POST()],\n  handler: (ctx) => {\n    return {\n      message: 'hello'\n    };\n  }\n});\n"})})]})]}),(0,i.jsxs)("div",{className:"function-block function-block-black",children:[(0,i.jsx)("div",{className:"title",children:"\u5f00\u7bb1\u5373\u7528\u7684\u5f00\u53d1\u5957\u4ef6"}),(0,i.jsx)("div",{className:"desc",children:"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5f00\u53d1\u5957\u4ef6\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5feb\u901f\u5f00\u53d1"}),(0,i.jsxs)("div",{style:{width:"60%",display:"flex",justifyContent:"space-around",alignItems:"center",margin:"2vw auto 0 auto"},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"/box.svg"}),(0,i.jsx)("p",{style:{textAlign:"center"},children:"\u521d\u59cb\u5316\u5de5\u7a0b"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"/file.svg"}),(0,i.jsx)("p",{style:{textAlign:"center"},children:"\u4fbf\u6377\u7b26\u521b\u5efaAPI\u7ec4"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"/tool.svg"}),(0,i.jsx)("p",{style:{textAlign:"center"},children:"\u7f16\u8bd1\u591a\u5e73\u53f0\u4ea7\u7269"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{src:"/code.svg"}),(0,i.jsx)("p",{style:{textAlign:"center"},children:"IDE\u63d2\u4ef6\uff08\u671f\u5f85\u6413\u624b\u624b\uff09"})]})]})]}),(0,i.jsx)("div",{className:"footer-shim",style:{height:"3vh"}}),(0,i.jsxs)("div",{className:"footer",children:[(0,i.jsxs)("span",{children:["\u7248\u6743\u6240\u6709 \xa9 ",(new Date).getFullYear()]}),(0,i.jsx)("a",{style:{marginLeft:"10px"},href:"https://github.com/swordCodePractice",target:"__blank",children:"SwordCodePractice\u5251\u6307\u9898\u89e3\u56e2\u961f"})]})]})}}},function(e){e.O(0,[286,774,888,179],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);