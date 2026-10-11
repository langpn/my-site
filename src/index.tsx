import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html lang="vi" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>langpn | Personal Homepage</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body { font-family: 'Plus Jakarta Sans', sans-serif; }
              code, pre { font-family: 'JetBrains Mono', monospace; }
            `,
          }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
        {/* Background glow effects */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        {/* Header / Nav */}
        <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold text-lg tracking-tight">langpn.dev</span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#about" className="hover:text-white transition-colors">Giới thiệu</a>
              <a href="#skills" className="hover:text-white transition-colors">Kỹ năng</a>
              <a href="#projects" className="hover:text-white transition-colors">Dự án</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-16 flex-1 w-full space-y-20">
          {/* Hero Section */}
          <section id="about" className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <span>🚀 OpenCode School Graduate</span>
              <span className="text-slate-500">•</span>
              <code className="text-[11px]">scrappy-wizard-1342</code>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Xin chào, tôi là <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">langpn</span> 👋
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl">
              Một lập trình viên đam mê khám phá các công cụ AI thế hệ mới, kiến trúc Agentic Engineering,
              và xây dựng ứng dụng web hiệu năng cao trên nền tảng Cloudflare Edge.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/langpn"
                target="_blank"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <span>GitHub</span>
                <span className="text-slate-500">↗</span>
              </a>
              <a
                href="https://replicate.com/langpn"
                target="_blank"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Replicate Profile</span>
                <span className="text-slate-500">↗</span>
              </a>
            </div>
          </section>

          {/* Tech & Tools Section */}
          <section id="skills" className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span>🛠️ Ngăn xếp & Công nghệ</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="text-xl mb-1">⚡ Hono.js</div>
                <div className="text-xs text-slate-400">Ultra-fast web framework</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="text-xl mb-1">☁️ Cloudflare</div>
                <div className="text-xs text-slate-400">Serverless Edge Network</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="text-xl mb-1">📝 Vim / Neovim</div>
                <div className="text-xs text-slate-400">Editor of choice</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="text-xl mb-1">🤖 AI Agents</div>
                <div className="text-xs text-slate-400">MCP, Skills & Plugins</div>
              </div>
            </div>
          </section>

          {/* Projects / Highlights */}
          <section id="projects" className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span>📌 Hoạt động & Dự án</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 transition-all space-y-3">
                <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Hành trình học tập</div>
                <h3 className="text-lg font-bold text-white">OpenCode School Certification</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Hoàn thành toàn diện 14 bài học cốt lõi từ Configuration, Permissions, MCP Tools đến Agents & Plugins.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/50 transition-all space-y-3">
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Serverless Edge</div>
                <h3 className="text-lg font-bold text-white">Personal Edge Homepage</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Website cá nhân được xây dựng bằng Hono JSX và triển khai toàn cầu thông qua Cloudflare Workers.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
          <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 langpn. Xây dựng với Hono & Cloudflare Workers.</p>
            <p className="text-slate-600">Được tạo tự động thông qua OpenCode</p>
          </div>
        </footer>
      </body>
    </html>
  )
})

export default app
