import "./Login.css"
const LoginComponent = () => (
    <div className="container-fluid">
        <form>
            <h2>
                User Login
            </h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
            <button >Login</button>
        </form>
    </div>
)

export default LoginComponent;