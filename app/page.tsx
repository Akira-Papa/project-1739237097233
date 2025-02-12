'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white"
            data-oid="ffdego7"
        >
            <nav className="border-b border-gray-800 px-6 py-4" data-oid="cnl_67d">
                <div className="flex items-center justify-between" data-oid="q7.eirk">
                    <div className="flex items-center space-x-2" data-oid="hxhh73d">
                        <div
                            className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center"
                            data-oid="-f_sc_r"
                        >
                            <span className="text-xl font-bold text-purple-400" data-oid="4.y:m0m">
                                N
                            </span>
                        </div>
                        <span className="text-xl font-bold" data-oid="na4zbnt">
                            Next.js
                        </span>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                        data-oid="wm03s_b"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="surigm_"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                                data-oid="6xqc980"
                            />
                        </svg>
                    </button>
                    <div className="hidden md:flex space-x-8" data-oid="_2_kv0.">
                        <Link
                            href="/"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="f6s0:ky"
                        >
                            ドキュメント
                        </Link>
                        <a
                            href="/blog"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="pu2ma8a"
                        >
                            ブログ
                        </a>
                        <a
                            href="/showcase"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="dgny67b"
                        >
                            ショーケース
                        </a>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden px-4 py-2 bg-gray-800" data-oid="9kqpop3">
                    <Link
                        href="/"
                        className="block py-2 hover:text-purple-400 transition-colors"
                        data-oid="c3.a.st"
                    >
                        ドキュメント
                    </Link>
                    <a
                        href="/blog"
                        className="block py-2 hover:text-purple-400 transition-colors"
                        data-oid="cvkz-z7"
                    >
                        ブログ
                    </a>
                    <a
                        href="/showcase"
                        className="block py-2 hover:text-purple-400 transition-colors"
                        data-oid=".8_-e:3"
                    >
                        ショーケース
                    </a>
                </div>
            )}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-oid=":cvp-nu">
                <div className="text-center" data-oid="jmqbyru">
                    <h1
                        className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                        data-oid="2dezcoq"
                    >
                        Next.js ドキュメント
                    </h1>
                    <p className="mt-6 text-xl text-gray-300" data-oid="au7a5x2">
                        Next.jsの公式ドキュメントへようこそ
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-oid="j3oti4q">
                    {[
                        { title: 'はじめに', desc: 'Next.jsの基本概念と始め方について学びます' },
                        {
                            title: 'ルーティング',
                            desc: 'アプリケーションのページとナビゲーションの設定方法',
                        },
                        { title: 'データフェッチ', desc: '効率的なデータの取得と管理について' },
                        { title: 'スタイリング', desc: 'CSSモジュールやTailwind CSSの使用方法' },
                        { title: '最適化', desc: 'パフォーマンスとSEOの最適化テクニック' },
                        { title: 'デプロイ', desc: 'アプリケーションの本番環境への展開方法' },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors cursor-pointer border border-gray-700 hover:border-purple-500"
                            data-oid="u8e2x-7"
                        >
                            <h3
                                className="text-xl font-semibold text-purple-400"
                                data-oid="t3:x3ds"
                            >
                                {item.title}
                            </h3>
                            <p className="mt-2 text-gray-400" data-oid="h1zw8z0">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center" data-oid="19qr4id">
                    <button
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-colors font-semibold text-lg"
                        data-oid="tj545bd"
                    >
                        ドキュメントを読む →
                    </button>
                </div>
            </main>

            <footer className="mt-24 border-t border-gray-800 py-12" data-oid="fcair5:">
                <div
                    className="max-w-7xl mx-auto px-4 text-center text-gray-400"
                    data-oid="03l3oln"
                >
                    <p data-oid="ol.bk1d">© 2024 Next.js. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
