# 🚀 Cloudflare Pages 部署指南

## 快速开始（推荐方式）

### 1. 登录 Cloudflare
访问 https://dash.cloudflare.com/ 并登录

### 2. 创建 Pages 项目
1. 点击 "Workers & Pages"
2. 点击 "Create application"
3. 选择 "Pages" → "Connect to Git"

### 3. 连接此仓库
1. 授权 GitHub
2. 选择 `SunlightLH/ai-chat`
3. 点击 "Begin setup"

### 4. 配置构建设置
```
Project name: ai-chat
Production branch: main
Framework preset: Create React App
Build command: npm run build
Build output directory: build
```

### 5. 部署
点击 "Save and Deploy"，等待 2-5 分钟即可完成！

## 部署后的功能

✅ 自动 HTTPS 证书
✅ 全球 CDN 加速  
✅ 无限带宽
✅ 自动部署（每次 git push）
✅ 预览部署（每个 PR）

## 自定义域名（可选）

在 Cloudflare Pages 项目中：
1. 进入 "Custom domains"
2. 添加你的域名
3. 按提示配置 DNS

## 常见问题

### 构建失败？
- 检查 package.json 中的 build 脚本
- 查看构建日志获取详细错误

### 页面 404？
- 已添加 `public/_redirects` 文件处理 SPA 路由

### 更新不生效？
- 等待几分钟让 Cloudflare 完成部署
- 清除浏览器缓存

## 详细文档

查看 [CLOUDFLARE_DEPLOYMENT_GUIDE.md](./CLOUDFLARE_DEPLOYMENT_GUIDE.md) 获取完整的图文教程。

---

**你的网站将部署在：** `https://ai-chat.pages.dev`

🎉 享受免费、快速的全球部署！