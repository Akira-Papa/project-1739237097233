'use client';

export default function BlogPage() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white"
            data-oid="bvlghmb"
        >
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-oid="yrw0-3:">
                <div className="text-center" data-oid="k4d5ehm">
                    <h1
                        className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                        data-oid="tpsjvis"
                    >
                        Next.js ブログ
                    </h1>
                    <p className="mt-6 text-xl text-gray-300" data-oid="vo:z:2e">
                        最新のNext.js関連の記事をご覧ください
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2" data-oid="l0d2th9">
                    {[
                        {
                            title: 'Next.js 14の新機能について',
                            date: '2024-03-20',
                            desc: 'Server ActionsやPartial Prerendingなど、最新バージョンの主要な機能を解説します。',
                        },
                        {
                            title: 'App RouterとPages Routerの比較',
                            date: '2024-03-15',
                            desc: '新旧のルーティングシステムの違いと移行のベストプラクティスについて。',
                        },
                        {
                            title: 'Next.jsでのパフォーマンス最適化',
                            date: '2024-03-10',
                            desc: 'Image Optimization、Dynamic Imports、その他のパフォーマンス改善テクニック。',
                        },
                        {
                            title: 'TypeScriptとNext.jsの統合',
                            date: '2024-03-05',
                            desc: 'より型安全なNext.jsアプリケーションを構築するためのガイド。',
                        },
                    ].map((post, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors cursor-pointer border border-gray-700 hover:border-purple-500"
                            data-oid="1i0:gja"
                        >
                            <div className="text-sm text-purple-400" data-oid="js5n36r">
                                {post.date}
                            </div>
                            <h3
                                className="mt-2 text-xl font-semibold text-white"
                                data-oid="5d.e6_e"
                            >
                                {post.title}
                            </h3>
                            <p className="mt-2 text-gray-400" data-oid="j-n786u">
                                {post.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="mt-24 border-t border-gray-800 py-12" data-oid="q0cy:96">
                <div
                    className="max-w-7xl mx-auto px-4 text-center text-gray-400"
                    data-oid="fbncrh1"
                >
                    <p data-oid="c2a.s6s">© 2024 Next.js. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
