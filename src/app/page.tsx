export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-black dark:to-zinc-950">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]" />
        
        <div className="relative z-10 max-w-4xl space-y-8">
          <div className="inline-block rounded-full bg-zinc-900/5 px-4 py-2 text-sm font-medium text-zinc-600 dark:bg-zinc-100/5 dark:text-zinc-400">
            Available for opportunities
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl md:text-7xl lg:text-8xl">
            Mirai Cho
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Full-stack developer and creative technologist crafting exceptional digital experiences 
            with modern web technologies
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-sm font-medium text-zinc-50 transition-all hover:bg-zinc-800 hover:scale-105 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View Projects
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 px-8 text-sm font-medium text-zinc-900 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-zinc-900 to-zinc-400 dark:from-zinc-50 dark:to-zinc-600" />
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  I&apos;m a passionate developer who loves building things for the web. 
                  With a focus on clean code, intuitive design, and optimal performance, 
                  I bring ideas to life through technology.
                </p>
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Currently exploring the intersection of design and development, 
                  creating seamless experiences that users love.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Skills & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Python', 'Docker'].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative bg-zinc-50 px-6 py-20 dark:bg-zinc-900/50 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Featured Projects
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-zinc-900 to-zinc-400 dark:from-zinc-50 dark:to-zinc-600" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: 'Project Alpha',
                  description: 'A full-stack web application built with Next.js and PostgreSQL',
                  tags: ['Next.js', 'TypeScript', 'PostgreSQL']
                },
                {
                  title: 'Project Beta',
                  description: 'Real-time collaboration tool with WebSocket integration',
                  tags: ['React', 'Node.js', 'WebSocket']
                },
                {
                  title: 'Project Gamma',
                  description: 'E-commerce platform with advanced filtering and search',
                  tags: ['Next.js', 'Stripe', 'Tailwind']
                },
                {
                  title: 'Project Delta',
                  description: 'Mobile-first progressive web app with offline support',
                  tags: ['PWA', 'TypeScript', 'IndexedDB']
                }
              ].map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-2">
                      <a
                        href="#"
                        className="text-sm font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-400"
                      >
                        View Project →
                      </a>
                      <a
                        href="#"
                        className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Let&apos;s Work Together
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                I&apos;m always interested in hearing about new projects and opportunities.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="mailto:hello@miraicho.com"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-base font-medium text-zinc-50 transition-all hover:bg-zinc-800 hover:scale-105 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', href: 'https://github.com' },
                  { name: 'LinkedIn', href: 'https://linkedin.com' },
                  { name: 'Twitter', href: 'https://twitter.com' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                  >
                    <span className="sr-only">{social.name}</span>
                    <span className="text-sm font-medium">{social.name[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white px-6 py-12 dark:border-zinc-800 dark:bg-black">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2025 Mirai Cho. All rights reserved.
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
