import Link from "next/link";

export default function SuccessPage() {
    return (
        <div>
            Your order is Successful!
            <Link href={'/'}>Our driver will call you in a minute</Link>
        </div>
    )
}