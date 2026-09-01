import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-wikiBorder bg-wikiBg rounded shadow-sm">
      <h1 className="text-2xl font-serif font-normal mb-6 text-center border-b border-wikiBorder pb-3">
        アカウント作成
      </h1>

      <form className="space-y-4 text-sm" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">利用者名</label>
          <input type="text" className="w-full bg-white" placeholder="例: Rokubei123" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">パスワード</label>
          <input type="password" className="w-full bg-white" placeholder="パスワードを入力" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">パスワード（確認）</label>
          <input type="password" className="w-full bg-white" placeholder="もう一度入力" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">メールアドレス（任意）</label>
          <input type="email" className="w-full bg-white" placeholder="example@rokopedia.com" />
        </div>

        <button className="w-full bg-[#36c] text-white py-2 rounded text-xs font-bold hover:bg-[#2a4b8d]">
          アカウントを作成
        </button>

        <div className="text-center pt-2 text-xs">
          <Link href="/login" className="text-wikiLink">すでにアカウントをお持ちですか？ログイン</Link>
        </div>
      </form>
    </div>
  )
}
