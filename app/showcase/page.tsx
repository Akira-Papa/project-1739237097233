'use client';

export default function ShowcasePage() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white"
            data-oid="r06i3xl"
        >
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-oid="4g_qnru">
                <div className="text-center" data-oid="pqu4_8y">
                    <h1
                        className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                        data-oid="tsu9.5:"
                    >
                        Next.js ショーケース
                    </h1>
                    <p className="mt-6 text-xl text-gray-300" data-oid="920qc21">
                        Next.jsで構築された素晴らしいプロジェクトをご紹介
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-oid="3erf6y2">
                    {[
                        {
                            title: 'TechBlog Pro',
                            desc: '高性能な技術ブログプラットフォーム',
                            tech: ['Next.js 14', 'Tailwind CSS', 'TypeScript'],
                        },
                        {
                            title: 'E-Commerce Plus',
                            desc: 'モダンなオンラインショッピングサイト',
                            tech: ['Next.js', 'Stripe', 'PostgreSQL'],
                        },
                        {
                            title: 'Portfolio Builder',
                            desc: 'ドラッグ＆ドロップポートフォリオ作成ツール',
                            tech: ['Next.js', 'DnD Kit', 'Prisma'],
                        },
                        {
                            title: 'Task Manager',
                            desc: 'リアルタイムタスク管理アプリ',
                            tech: ['Next.js', 'Socket.io', 'MongoDB'],
                        },
                        {
                            title: 'Learning Platform',
                            desc: 'インタラクティブな学習プラットフォーム',
                            tech: ['Next.js', 'GraphQL', 'Auth.js'],
                        },
                        {
                            title: 'Social Network',
                            desc: 'パフォーマンス重視のSNSアプリ',
                            tech: ['Next.js', 'tRPC', 'Redis'],
                        },
                    ].map((project, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors cursor-pointer border border-gray-700 hover:border-purple-500"
                            data-oid="lsgdyrh"
                        >
                            <h3
                                className="text-xl font-semibold text-purple-400"
                                data-oid="rtw20vf"
                            >
                                {project.title}
                            </h3>
                            <p className="mt-2 text-gray-400" data-oid="epqhi_h">
                                {project.desc}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2" data-oid="e2-u72y">
                                {project.tech.map((tech, j) => (
                                    <span
                                        key={j}
                                        className="px-2 py-1 text-sm bg-gray-700 rounded-full text-purple-300"
                                        data-oid="gjf41b7"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="mt-24 border-t border-gray-800 py-12" data-oid="7o4yfdl">
                <div
                    className="max-w-7xl mx-auto px-4 text-center text-gray-400"
                    data-oid="83uqzz5"
                >
                    <p data-oid="n2r-h2x">© 2024 Next.js. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
