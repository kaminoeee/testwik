import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'ロクペディア - フリー百科事典',
  description: 'ウィキペディア風パロディサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="ja">
      <body className="bg-white min-h-screen flex flex-col">
        <header className="border-b border-wikiBorder bg-wikiBg py-2 px-4 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-4">
            <Link href="/" className="font-bold text-lg tracking-wider font-serif text-black hover:no-underline">
              ロクペディア
            </Link>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <span className="text-gray-600">ログインしていません</span>
            <span className="text-wikiLink cursor-pointer">トーク</span>
            <span className="text-wikiLink cursor-pointer">投稿記録</span>
            <Link href="/signup" className="text-wikiLink">アカウント作成</Link>
            <Link href="/login" className="text-wikiLink">ログイン</Link>
          </div>
        </header>
        <div className="flex flex-1">
          {/* 左サイドバー */}
          <aside className="w-48 border-r border-wikiBorder p-4 text-xs space-y-4 hidden md:block bg-wikiBg/50">
            <div>
              <p className="font-bold text-gray-700 mb-1">案内</p>
              <ul className="space-y-1 pl-2 text-wikiLink">
                <li><Link href="/">メインページ</Link></li>
                <li className="cursor-pointer">コミュニティ・ポータル</li>
                <li className="cursor-pointer">最近の更新</li>
                <li className="cursor-pointer">新しいページ</li>
                <li className="cursor-pointer">おまかせ表示</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-gray-700 mb-1">ツール</p>
              <ul className="space-y-1 pl-2 text-wikiLink">
                <li className="cursor-pointer">リンク元</li>
                <li className="cursor-pointer">関連ページの更新状況</li>
                <li className="cursor-pointer">ファイルをアップロード</li>
                <li className="cursor-pointer">特別ページ</li>
              </ul>
            </div>
          </aside>

          {/* メインエリア */}
          <main className="flex-1 p-6 md:p-8 max-w-4xl">
            {children}
          </main>
        </div>

        <footer className="border-t border-wikiBorder bg-wikiBg py-4 px-6 text-xs text-gray-600 text-center md:text-left mt-auto">
          <p>このページは最終編集 {currentYear}年9月1日 (火) 00:00 （日時は個人設定で未設定ならば協定世界時）に利用可能です。</p>
          <p className="mt-1">テキストはクリエイティブ・コモンズ 表示-継承ライセンスの下で利用可能です。</p>
        </footer>
      </body>
    </html>
  )
}
