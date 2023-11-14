import { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/common/Logo";
import Input from "@/components/inputElements/Input";

export const metadata: Metadata = {
	title: "Login | Entertainment Web App",
	description: "Generated by create next app",
};

const Login = () => {
	return (
		<main className='center_content'>
			<Logo />
			<div className='mt-20 bg-brandSemiDarkBlue w-fit p-8 rounded-3xl min-w-[400px]'>
				<h1 className='mb-10 heading_l'>Login</h1>
				<div className='flex flex-col gap-6'>
					<Input />
					<Input />
					<button className='button mt-4'>Login to your account</button>
					<span className='body_m text-center'>
						{`Don't`} have an account?{" "}
						<Link href='/register' className='text-brandRed'>
							Sign Up
						</Link>
					</span>
				</div>
			</div>
		</main>
	);
};
export default Login;