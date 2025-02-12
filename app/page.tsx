'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white grid"
            data-oid="1eysul3"
        >
            <nav className="border-b border-gray-800 px-6 py-4" data-oid="6:h16lo">
                <div className="flex items-center justify-between" data-oid="vv6ahzu">
                    <div className="flex items-center space-x-2" data-oid="3u662z5">
                        <div
                            className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center"
                            data-oid="xi1udj9"
                        >
                            <span className="text-xl font-bold text-purple-400" data-oid="gb2:usl">
                                N
                            </span>
                        </div>
                        <span className="text-xl font-bold" data-oid="s1kvk09">
                            Next.js
                        </span>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                        data-oid="g1:_ua7"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="pdy5ycw"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                                data-oid="_3m_d9-"
                            />
                        </svg>
                    </button>
                    <div className="hidden md:flex space-x-8" data-oid="-dvch54">
                        <Link
                            href="/"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="nvdrg-y"
                        >
                            ドキュメント
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="eej4n9n"
                        >
                            ドキュメント
                        </Link>
                        <a
                            href="/blog"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="uxl9j67"
                        >
                            ブログ
                        </a>
                        <a
                            href="/showcase"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="tu6w8ej"
                        >
                            ショーケース
                        </a>
                        <a
                            href="/showcase"
                            className="hover:text-purple-400 transition-colors"
                            data-oid="k05vio5"
                            key="olk-lA6f"
                        >
                            ショーケース
                        </a>
                    </div>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden px-4 py-2 bg-gray-800" data-oid="cs3l9q-">
                    <Link
                        href="/"
                        className="block py-2 hover:text-purple-400 transition-colors"
                        data-oid="-neu0yh"
                    >
                        ドキュメント
                    </Link>
                    <a
                        href="/blog"
                        className="block py-2 hover:text-purple-400 transition-colors"
                        data-oid="59kla._"
                    >
                        ブログ
                    </a>
                    <a
                        href="/showcase"
                        className="block py-2 hover:text-purple-400 transition-colors"
                        data-oid="-fchfl6"
                    >
                        ショーケース
                    </a>
                </div>
            )}

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-oid="s75laf2">
                <div className="text-center" data-oid="zrb95h8">
                    <h1
                        className="text-4xl sm:text-6xl font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-[#FF0B28]"
                        data-oid="w:hbn1:"
                    >
                        Next.js ドキュメント あきらパパ２
                    </h1>
                    <p className="mt-6 text-xl text-gray-300" data-oid="ogm7cpa">
                        Next.jsの公式ドキュメントへようこそ
                    </p>
                </div>

                <div
                    className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(3,_1fr)] grid-cols-[repeat(2,_1fr)]"
                    data-oid="pmckus1"
                >
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
                            data-oid="xhthrgd"
                        >
                            <h3
                                className="text-xl font-semibold text-purple-400"
                                data-oid="-:fa0ud"
                            >
                                {item.title}
                            </h3>
                            <p className="mt-2 text-gray-400" data-oid="xo5o9_y">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center" data-oid="83nleb8">
                    <button
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-colors font-semibold text-lg"
                        data-oid="wynroqe"
                    >
                        ドキュメントを読む →
                    </button>
                </div>
            </main>

            <footer className="mt-24 border-t border-gray-800 py-12" data-oid="cn2ewxp">
                <div
                    className="max-w-7xl mx-auto px-4 text-center text-gray-400"
                    data-oid="hhyytt4"
                >
                    <p data-oid=".tzoa:z">© 2024 Next.js. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
