import Link from 'next/link'

export default function EditPage() {
  return (
    <div>
      <div className="border-b border-wikiBorder mb-4 flex space-x-6 text-sm">
        <span className="text-gray-500 pb-2 cursor-pointer">ページ</span>
        <span className="text-gray-500 pb-2 cursor-pointer">ノート</span>
        <div className="ml-auto space-x-3 text-sm">
          <Link href="/" className="text-wikiLink">閲覧</Link>
          <Link href="/edit" className="text-black font-medium border-b-2 border-black pb-2">編集</Link>
          <span className="text-wikiLink cursor-pointer">履歴</span>
        </div>
      </div>

      <h1 className="text-2xl font-serif font-normal mb-4">
        「メインページ」を編集
      </h1>

      <div className="space-y-4 text-sm">
        <div className="bg-[#fcfcfc] border border-wikiBorder p-2 flex space-x-2 text-xs text-gray-700">
          <button className="px-2 py-1 bg-white border border-wikiBorder rounded hover:bg-gray-50 font-bold">B</button>
          <button className="px-2 py-1 bg-white border border-wikiBorder rounded hover:bg-gray-50 italic">I</button>
          <button className="px-2 py-1 bg-white border border-wikiBorder rounded hover:bg-gray-50">リンク</button>
          <button className="px-2 py-1 bg-white border border-wikiBorder rounded hover:bg-gray-50">見出し</button>
        </div>

        <textarea 
          className="w-full h-64 font-mono text-xs p-3"
          defaultValue="== ロクペディアへようこそ！ ==&#10;ロクペディアは、誰でも自由に編集できる（かもしれない）フリー百科事典です。"
        />

        <div className="text-xs text-gray-600 space-y-1">
          <p>保存を行うことにより、あなたは利用規約およびクリエイティブ・コモンズ 表示-継承に同意したことになります。</p>
        </div>

        <div className="flex space-x-3 pt-2">
          <button className="bg-[#36c] text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-[#2a4b8d]">
            ページを保存
          </button>
          <Link href="/" className="px-4 py-1.5 border border-wikiBorder rounded text-xs bg-wikiBg hover:bg-gray-200 text-center flex items-center">
            変更をプレビュー
          </Link>
          <Link href="/" className="px-4 py-1.5 text-xs text-wikiLink flex items-center">
            キャンセル
          </Link>
        </div>
      </div>
    </div>
  )
}
