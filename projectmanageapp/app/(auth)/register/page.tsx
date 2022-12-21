import AuthForm from "../../../components/Authform"

export default function Register() {
    return (
        <div>
            {/* wrapping the client component in a sever page */}
            <AuthForm mode="register" />
        </div>
    )
}