# AIGC 设计师作品集网站

一个**纯静态**的作品集站点：不依赖任何框架、不需要构建、双击 `index.html` 就能在浏览器打开。
里面已填入**葛雪峰（AIGC 视觉设计师 · 游戏视觉方向）**的真实内容：六大能力板块、19 张作品图，与 21 页 PPT 版作品集同源。想换人用时按下面说明改 `assets/data.js` 与 `assets/img/` 即可。

---

## 一、30 秒上手

1. 双击 `index.html` 预览
2. 打开 `assets/data.js`，把里面的「你的名字 / 待替换 / 示例文案」改成你自己的
3. 把作品图放进 `assets/img/`，在 `data.js` 里改对应的 `cover` / `img` 路径
4. 想要公网访问：见文末「部署」

> 建议顺序：先改 `profile`（名字/定位/简介） → 再换 `works`（3 个项目） → 最后补 `snippets`（8 张切片图）与 `contact`。

---

## 二、文件结构

| 文件 | 作用 | 你需要改吗 |
|------|------|-----------|
| `index.html` | 页面骨架（语义结构 + 各区块容器） | 一般不用 |
| `assets/data.js` | **全部文案与作品数据** | ✅ **主要改这个** |
| `assets/styles.css` | 样式（颜色、间距、响应式） | 想换配色时改顶部 CSS 变量 |
| `assets/main.js` | 渲染与交互（滚动渐显、灯箱、导航） | 一般不用 |
| `assets/img/` | 图片与视频资源（show-* 为轮播） | ✅ 换成你的作品图 |

---

## 三、`data.js` 字段说明

### 1. `profile` —— 顶部信息与「关于我」
```js
profile: {
  name: "你的名字",
  nameEn: "YOUR NAME",          // 备用
  role: "AIGC 视觉设计师",       // 导航副标题 & Hero 小标签
  tagline: "AI 是画笔<br><span class=\"grad\">审美才是灵魂</span>",  // 大标题，可留 <br> 与 .grad 渐变
  sub: "一两句话定位……",         // Hero 副标题
  avatar: "assets/img/avatar.svg",
  aboutTitle: "关于我的小标题",
  about: ["第一段", "第二段", "第三段"],
  meta: ["视觉传达 / 数字媒体", "3 年 AIGC 实战", "可独立交付", "广州 · 可远程"]
}
```

### 2. `stats` —— Hero 下方三个数字
```js
stats: [{ num: "18+", label: "AI 视觉作品" }, ...]
```

### 3. `focus` —— 专注方向标签（5 个左右最好看）


### 3.5 `showcase` —— 首屏精选轮播（图片 / 视频）

页面最靠前的展示区，放你最满意的作品，每 5 秒自动轮换。

```js
showcase: [
  {
    type: "image",                     // "image" 或 "video"
    src: "assets/img/show-01.jpg",     // 图片 1600×900（16:9）或 mp4 路径
    poster: "assets/img/poster.jpg",   // 仅 video 需要：视频封面
    title: "品牌主视觉：把调性压进一张图",
    note: "Midjourney 出图 + ControlNet 锁构图……",
    tag: "BRAND VISUAL"                // 左上角小标签
  }
]
```

- **视频**：`type: "video"`，`src` 填 mp4（H.264，建议 1080p、时长 5–15 秒、< 5MB），`poster` 填封面图。
- **顺序**：数组第一项默认显示。想换顺序直接调整数组。
- **停止自动播放**：鼠标移到轮播上即暂停；系统开启「减少动态效果」时也不会自动播。
- **交互**：左右箭头、底部圆点、键盘 ← →、手机左右滑动。
- 只放 1 条时自动隐藏箭头与自动播放。

### 4. `tools` —— 工具矩阵卡片（4 张）
```js
{ icon: "🎨", title: "图像生成", level: "CORE",
  items: ["Midjourney", "Stable Diffusion", "ComfyUI"],
  level_pct: 92 }              // 底部进度条 0-100
```

### 6. `works` —— 精选作品（**最重要**，建议 3 个）
```js
{
  cover: "assets/img/work-01.jpg",   // 主图，建议 1200×750（16:10 或 4:3）
  kicker: "BRAND VISUAL",            // 小标签，如 品牌视觉 / 角色 / 动态
  title: "项目标题",
  desc: "2-3 句：解决什么问题 + 产出什么 + 商业价值",
  tags: ["Midjourney", "ControlNet", "品牌一致性"],
  process: [                          // 4-5 步，展示你的「控制力」
    ["需求", "拆品牌调性，定视觉关键词"],
    ["控制", "ControlNet 锁构图，LoRA 固定质感"],
    ["生成", "批量出多尺寸素材"],
    ["精修", "PS 修型调色，统一明度"],
    ["落地", "输出详情页与投放素材"]
  ]
}
```

> 写作品的要点（调研结论）：**不要堆图**，要写「过程叙事」。招聘方看的是你怎么控制 AI，不是 AI 自己能画什么。

### 7. `snippets` —— 作品片段（建议 8 张，方图 800×800）
```js
{ img: "assets/img/snip-01.jpg", cap: "产品展示" }
```

### 8. `services` —— 服务能力（3 张卡）
```js
{ num: "01", title: "AI 视觉设计", desc: "一句话",
  points: ["品牌主视觉 / KV", "电商主图与详情页", "..."] }
```

### 9. `contact` —— 联系方式（微信在国内是刚需，别省）
```js
contact: {
  title: "有项目想聊？<br>或者只是想看看作品细节。",   // 支持 <br>
  desc: "一句话说明接受什么合作",
  items: [
    { k: "微信", v: "your_wechat_id" },
    { k: "邮箱", v: "you@example.com" },
    { k: "电话", v: "138-0000-0000" },
    { k: "城市", v: "广州 · 可远程" }
  ]
}
```

> ⚠️ 记得把 `index.html` 里联系区的 `mailto:hello@example.com` 改成你的邮箱。

---

## 四、图片规格建议

| 用途 | 建议尺寸 | 格式 | 说明 |
|------|---------|------|------|
| 作品主图 `work-*` | 1200 × 750 | JPG / WebP | 4:3 或 16:10，单张 < 400KB |
| 作品片段 `snip-*` | 800 × 800 | JPG / WebP | 方图，单张 < 200KB |
| 轮播图 `show-*` | 1600 × 900 | JPG / WebP | 16:9，单张 < 400KB |
| 轮播视频 `show-*.mp4` | 1920 × 1080 | MP4 (H.264) | 5–15 秒，< 5MB，需配封面图 |
| 头像 `avatar` | 600 × 600 | JPG | 方图，正面清晰 |

**压缩建议**：先导出 2 倍图再压到目标尺寸；用 [squoosh.app](https://squoosh.app) 或 `sharp` 压到 WebP，体积能小 60% 以上。
图片放 `assets/img/`，路径写成 `assets/img/xxx.jpg`（相对路径，别用绝对路径）。

---

## 五、改配色（可选）

打开 `assets/styles.css`，最上面的 `:root` 就是全部配色：

```css
--bg: #08090d;          /* 页面底色 */
--text: #eef1f7;        /* 主文字 */
--muted: #8c93a6;       /* 次要文字 */
--accent: #5b7cfa;      /* 强调色 1 */
--accent-2: #a45bda;    /* 强调色 2 */
--grad: linear-gradient(120deg,#5b7cfa,#a45bda,#2fbfa0);  /* 渐变 */
```

想换浅色主题，把 `--bg` 改亮、`--text` 改深即可，其余颜色会一起变。

---

## 六、本地预览的两种方式

**方式 A（最简单）**：直接双击 `index.html`。
本站刻意没用 `fetch` / ES Module，所以 `file://` 下也能正常运行。

**方式 B（更接近线上）**：起一个本地静态服务
```bash
# 任选其一
npx serve .
python -m http.server 8080
```
然后打开 http://localhost:8080

---

## 七、部署上线

### 方案 1：GitHub Pages（免费，推荐）
1. 新建仓库，把 `aigc-portfolio` 里的文件推到根目录
2. 仓库 Settings → Pages → Source 选 `Deploy from a branch` → `main` / `/ (root)`
3. 等 1 分钟，访问 `https://<用户名>.github.io/<仓库名>/`
4. 想用自定义域名：Pages 里填 Custom domain，并在域名商加 CNAME 记录

```bash
git init
git add .
git commit -m "init portfolio"
git branch -M main
git remote add origin https://github.com/<用户名>/<仓库名>.git
git push -u origin main
```

### 方案 2：Vercel / Netlify（免费，支持自定义域名 + HTTPS）
- Vercel：`npx vercel`，或网页端 Import Git 仓库，Framework 选 **Other**，构建命令留空，输出目录填 `.`
- Netlify：拖拽整个文件夹到 app.netlify.com/drop 即可

### 方案 3：国内访问更快
- 阿里云 OSS / 腾讯云 COS 开静态网站托管 + CDN
- 注意：用国内服务器/域名需要 **ICP 备案**

---

## 八、上线前检查清单

- [ ] `profile.name` / `role` / `tagline` 已改
- [ ] `about` 三段文案是自己的（别留示例）
- [ ] `works` 三个项目都换了真实作品图 + 真实过程描述
- [ ] `showcase` 轮播换成你最满意的 3–5 张（视频记得配 poster）
- [ ] `snippets` 八张图都换掉（不要留「待替换」字样）
- [ ] `contact` 微信/邮箱/电话是真实可联系的
- [ ] `index.html` 里 `mailto:` 已改成自己的邮箱
- [ ] 手机上看一遍（导航、卡片、图片是否正常）
- [ ] 图片已压缩（单页总大小建议 < 5MB）
- [ ] 标题与 `description` 已改成自己的（利于分享与搜索）

---

## 九、为什么是这种结构（调研依据）

参考了 3 个真实的 AIGC 设计师作品集网站：

- **Kleon Portfolio**（kleonportfolio.cn）—— 工具按「文 / 图 / 视频」分类罗列，作品分成片与片段两层
- **ttttamako**（ttttamako.github.io/aigc-portfolio）—— 一个原创角色拆成「三视图 → 色彩 → 动态」全流程，附设计规格书与导演备注，GitHub Pages 托管
- **zy-portfolio.me** —— 围绕一个虚构品牌做「主视觉 + 代言人 + 电商图」整套商业视觉，并把「我能做什么」结构化

共同规律：**Hero 一句话定位 → 关于 → 方向 → 工具 → 精选作品（带过程）→ 服务能力 → 联系方式**。
差异点只有一个：低配是图片瀑布流，高配是**单项目过程叙事 + 设计逻辑**。本站按高配做的骨架。

---

MIT License · 随便改随便用。
