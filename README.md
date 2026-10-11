# langpn.xyz - Personal Homepage

Trang chủ cá nhân của **langpn** (`scrappy-wizard-1342`), được xây dựng bằng Hono JSX và triển khai trên hạ tầng máy chủ biên toàn cầu của Cloudflare Workers.

## 🛠️ Công nghệ sử dụng

- **Framework:** [Hono](https://hono.dev/) v4 (siêu nhẹ, tối ưu cho edge runtimes)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (qua CDN script)
- **Runtime:** [Cloudflare Workers](https://workers.cloudflare.com/)
- **Ngôn ngữ:** TypeScript + JSX (`hono/jsx`)
- **Tên miền:** `langpn.xyz`

## 🚀 Khởi chạy dự án

### Cài đặt thư viện:
```bash
npm install
```

### Chạy môi trường phát triển cục bộ (Local dev):
```bash
npm run dev
# Mở trình duyệt tại: http://localhost:8787
```

### Triển khai lên Cloudflare Workers (Deploy):
```bash
npx wrangler deploy
```

---
*Dự án được xây dựng trong khóa học OpenCode School.*
