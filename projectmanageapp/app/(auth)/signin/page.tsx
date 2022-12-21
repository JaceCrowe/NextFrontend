import AuthForm from "../../../components/Authform"

export default function Signin() {
    return (
        <div>
    {/* wrapping the client component in a sever page */}
            <AuthForm mode="signin" />
        </div>
    )
}