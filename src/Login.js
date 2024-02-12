export const Login = () => {
  return (
    <div>
      <form id="loginForm">
        <label for="email">メールアドレス</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="メールアドレスを入力"
        ></input>
        <label for="password">パスワード</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="メールアドレスを入力"
        ></input>
        <button id="loginButton">ログイン</button>
      </form>
    </div>
  );
}
