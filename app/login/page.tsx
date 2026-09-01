import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-wikiBorder bg-wikiBg rounded shadow-sm">
      <h1 className="text-2xl font-serif font-normal mb-6 text-center border-b border-wikiBorder pb-3">
        ロクペディアへログイン
      </h1>

      <form className="space-y-4 text-sm" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">利用者名</label>
          <input type="text" className="w-full bg-white" placeholder="利用者名を入力" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">パスワード</label>
          <input type="password" className="w-full bg-white" placeholder="パスワードを入力" />
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="cursor-pointer">ログイン状態を保持する</label>
        </div>

        <button className="w-full bg-[#36c] text-white py-2 rounded text-xs font-bold hover:bg-[#2a4b8d]">
          ログイン
        </button>

        <div className="text-center pt-2 text-xs">
          <Link href="/signup" className="text-wikiLink">アカウントを持っていませんか？新規作成</Link>
        </div>
      </form>
    </div>
  )
}
