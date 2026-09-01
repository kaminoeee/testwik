import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="border-b border-wikiBorder mb-4 flex space-x-6 text-sm">
        <span className="border-b-2 border-black pb-2 font-medium cursor-pointer">ページ</span>
        <span className="text-gray-500 pb-2 cursor-pointer">ノート</span>
        <div className="ml-auto space-x-3 text-sm">
          <Link href="/" className="text-black font-medium">閲覧</Link>
          <Link href="/edit" className="text-wikiLink">編集</Link>
        </div>
      </div>

      <h1 className="text-3xl font-serif font-normal border-b border-wikiBorder pb-2 mb-4">
        メインページ
      </h1>

      <div className="space-y-6 text-sm leading-relaxed">
        <div className="bg-wikiBg border border-wikiBorder p-4 rounded">
          <p className="font-bold mb-1">ロクペディアへようこそ！</p>
          <p>ロクペディアは、誰でも自由に編集できるフリー百科事典です。</p>
        </div>
      </div>
    </div>
  )
}
