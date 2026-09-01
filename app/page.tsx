import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* タブとタイトル */}
      <div className="border-b border-wikiBorder mb-4 flex space-x-6 text-sm">
        <span className="border-b-2 border-black pb-2 font-medium cursor-pointer"><span>📄</span> ページ</span>
        <span className="text-gray-500 pb-2 cursor-pointer">ノート</span>
        <div className="ml-auto space-x-3 text-sm">
          <Link href="/" className="text-black font-medium">閲覧</Link>
          <Link href="/edit" className="text-wikiLink">編集</Link>
          <span className="text-wikiLink cursor-pointer">履歴</span>
        </div>
      </div>

      <h1 className="text-3xl font-serif font-normal border-b border-wikiBorder pb-2 mb-4">
        メインページ
      </h1>

      <div className="space-y-6 text-sm leading-relaxed">
        <div className="bg-wikiBg border border-wikiBorder p-4 rounded">
          <p className="font-bold mb-1">ロクペディアへようこそ！</p>
          <p>ロクペディアは、誰でも自由に編集できる（かもしれない）フリー百科事典です。現在はテスト運用中です。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-wikiBorder p-4">
            <h2 className="font-bold bg-gray-100 p-2 -mx-4 -mt-4 border-b border-wikiBorder mb-3">今日の記事</h2>
            <p>ここに今日のおすすめ記事やユーモアあふれる架空の記事の導入文が入ります。思わずクスッと笑ってしまうような自由な内容を記述しましょう。</p>
          </div>
          <div className="border border-wikiBorder p-4">
            <h2 className="font-bold bg-gray-100 p-2 -mx-4 -mt-4 border-b border-wikiBorder mb-3">ニュース</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>ロクペディアがVercel上で完璧に再現されました。</li>
              <li>アカウント作成や編集画面のモックも完備されています。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
        </div>
      </div>
    </div>
  )
}
