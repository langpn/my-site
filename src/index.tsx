import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.html(
    <html lang="vi" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>langpn | OpenCode School Portfolio</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
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
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Header / Nav */}
        <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50 bg-slate-950/70">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-extrabold text-base tracking-tight text-white">langpn.xyz</span>
              <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700/60 font-mono">
                OpenCode Graduate
              </span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-slate-400 font-medium">
              <a href="#curriculum" className="hover:text-white transition-colors">14 Bài học</a>
              <a href="#capstones" className="hover:text-white transition-colors">Dự án Thực hành</a>
              <a href="#skills" className="hover:text-white transition-colors">Kỹ năng & Chuẩn mở</a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-6 py-16 flex-1 w-full space-y-24">
          {/* Hero Section */}
          <section id="about" className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/25">
              <span>🎓 OpenCode School Valedictorian</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-indigo-300">scrappy-wizard-1342</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Làm chủ <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">Agentic Engineering</span> cùng OpenCode 🚀
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
              Hành trình tốt nghiệp toàn diện <strong>14/14 bài học cốt lõi</strong> và <strong>11 dự án thực chiến</strong> trên OpenCode School.
              Biến AI từ chatbot thụ động thành một coding agent tự động hóa toàn diện từ terminal, browser, email, video đến macOS native.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com/langpn/my-site"
                target="_blank"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Mã nguồn my-site</span>
                <span className="text-slate-500">↗</span>
              </a>
              <a
                href="https://github.com/langpn/opencode-stats"
                target="_blank"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <span>OpenCode Stats Fork</span>
                <span className="text-slate-500">↗</span>
              </a>
              <a
                href="https://typefully.com/t/U4yHyZg"
                target="_blank"
                className="px-4 py-2.5 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-300 border border-indigo-800/60 font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Bài đăng Typefully</span>
                <span className="text-slate-500">↗</span>
              </a>
            </div>
          </section>

          {/* Core Lessons Matrix */}
          <section id="curriculum" className="space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">Kiến thức nền tảng</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                14 Bài học cốt lõi đã hoàn thành 100%
              </h2>
              <p className="text-slate-400 text-sm mt-1">Được kiểm chứng và đánh dấu hoàn thành trực tiếp trên hệ thống OpenCode School API.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1 */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3">
                <div className="text-2xl">🛡️</div>
                <h3 className="font-bold text-white text-base">Cấu hình & Phân quyền</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Thiết lập <code className="text-indigo-300">opencode.json</code> toàn cục, rào chắn an toàn Git (chặn tự ý push/checkout), và cơ chế thừa kế quyền theo từng dự án.
                </p>
                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>✓ Configuration & Permissions</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3">
                <div className="text-2xl">📋</div>
                <h3 className="font-bold text-white text-base">Chỉ dẫn AGENTS.md</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Viết chỉ dẫn thường trực chuẩn công nghiệp cho agent, quy ước commit atomic bằng tiếng Anh, hỗ trợ Vim và giao tiếp tự nhiên.
                </p>
                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>✓ Standing Instructions</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3">
                <div className="text-2xl">🧠</div>
                <h3 className="font-bold text-white text-base">Model & Context Window</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Cân bằng chi phí vs năng lực suy luận, quản lý cửa sổ token, và cơ chế tự động nén ngữ cảnh (Compaction) khi hội thoại dài.
                </p>
                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>✓ Models & Compaction</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3">
                <div className="text-2xl">⚡</div>
                <h3 className="font-bold text-white text-base">Lệnh Slash Tùy biến</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tạo các lệnh tái sử dụng như <code className="text-indigo-300">/summarize</code>, truyền tham số động qua <code className="text-slate-300">$ARGUMENTS</code> và ghim model tối ưu.
                </p>
                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>✓ Custom Commands</span>
                </div>
              </div>

              {/* Card 5 */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3">
                <div className="text-2xl">🧰</div>
                <h3 className="font-bold text-white text-base">MCP Protocol & Tools</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Kết nối công cụ theo chuẩn Model Context Protocol (Local & Remote), phân quyền xác thực và tích hợp server thời tiết open-meteo thực tế.
                </p>
                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>✓ Model Context Protocol</span>
                </div>
              </div>

              {/* Card 6 */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3">
                <div className="text-2xl">🔌</div>
                <h3 className="font-bold text-white text-base">Plugins & Lifecycle</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Mở rộng OpenCode qua module TypeScript, bắt sự kiện vòng đời (lifecycle hooks), tiêm biến môi trường và nạp companion skills.
                </p>
                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>✓ Plugins Architecture</span>
                </div>
              </div>

              {/* Card 7 */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3">
                <div className="text-2xl">🤖</div>
                <h3 className="font-bold text-white text-base">Plan vs Build Agents</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Quy trình 3 bước chuyên nghiệp: Khởi đầu an toàn trong Plan mode (read-only), thảo luận kỹ lưỡng trước khi chuyển sang Build mode để triển khai.
                </p>
                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>✓ Plan & Build Modes</span>
                </div>
              </div>

              {/* Card 8 */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3">
                <div className="text-2xl">🌿</div>
                <h3 className="font-bold text-white text-base">Workspaces & Worktrees</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Làm việc song song nhiều tác vụ mà không lo xung đột file bằng Git Worktrees cách ly, quản lý phiên và chia sẻ session qua web link.
                </p>
                <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span>✓ Git Worktrees & Sessions</span>
                </div>
              </div>
            </div>
          </section>

          {/* Hands-on Capstones Built */}
          <section id="capstones" className="space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Dự án thực tế</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Các dự án thực hành đã hoàn thành
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Edge Computing
                  </span>
                  <span className="text-xs text-slate-500">Hono + Cloudflare</span>
                </div>
                <h3 className="text-lg font-bold text-white">Trang chủ Cá nhân Serverless</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Xây dựng trang cá nhân hiệu năng cao với Hono JSX và Tailwind CSS, triển khai toàn cầu trên Cloudflare Workers tại domain cá nhân <code className="text-slate-300">langpn.xyz</code>.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-purple-500/40 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Local AI Speech
                  </span>
                  <span className="text-xs text-slate-500">Whisper Metal + FFMPEG</span>
                </div>
                <h3 className="text-lg font-bold text-white">Nhận diện Giọng nói Cục bộ</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Chạy mô hình Whisper C++ trực tiếp trên Apple Silicon GPU (Metal acceleration), chuyển đổi âm thanh 16kHz WAV thành văn bản và phụ đề SRT chỉ trong 1.8 giây mà không cần gửi dữ liệu lên cloud.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-emerald-500/40 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Browser & Workspace
                  </span>
                  <span className="text-xs text-slate-500">Chrome DevTools MCP</span>
                </div>
                <h3 className="text-lg font-bold text-white">Tự động hóa Trình duyệt</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Điều khiển trực tiếp trình duyệt Chrome thật thông qua DevTools Protocol, tự động điều hướng, chụp ảnh màn hình và tương tác DOM an toàn.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/40 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Productivity Agent
                  </span>
                  <span className="text-xs text-slate-500">Google Workspace CLI</span>
                </div>
                <h3 className="text-lg font-bold text-white">Hệ thống Đưa Hòm thư về Zero</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Thiết lập Google Cloud OAuth an toàn, kết nối gws CLI để lọc và lưu trữ hàng loạt thông báo rác, tự động soạn thảo thư nháp và gửi email theo quy tắc an toàn.
                </p>
              </div>
            </div>
          </section>

          {/* Standards & Skills Mastered */}
          <section id="skills" className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>⚙️ Tiêu chuẩn & Kỹ năng đã tích hợp</span>
            </h2>
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs text-slate-300 border border-slate-800 font-mono">
                Model Context Protocol (MCP)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs text-slate-300 border border-slate-800 font-mono">
                agentskills.io Open Standard
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs text-slate-300 border border-slate-800 font-mono">
                Hono.js & JSX Runtime
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs text-slate-300 border border-slate-800 font-mono">
                Cloudflare Workers & AI Gateway
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs text-slate-300 border border-slate-800 font-mono">
                Whisper.cpp (Apple Metal)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs text-slate-300 border border-slate-800 font-mono">
                Git Worktrees & GitHub CLI
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs text-slate-300 border border-slate-800 font-mono">
                FFMPEG & yt-dlp Video Automation
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs text-slate-300 border border-slate-800 font-mono">
                Typefully Social Agent API
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs text-slate-300 border border-slate-800 font-mono">
                SwiftUI Menu Bar (macOS Native)
              </span>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 bg-slate-950/80">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 langpn. Xây dựng & tối ưu hoàn toàn trong môi trường OpenCode.</p>
            <p className="text-slate-600 font-mono text-[11px]">Học viên scrappy-wizard-1342 • OpenCode School</p>
          </div>
        </footer>
      </body>
    </html>
  )
})

export default app
