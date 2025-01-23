import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
	return (
		<div>
			<img
				src="/title-bg.png"
				className="absolute w-full bottom-0 -z-10"
				style={{
					imageRendering: "pixelated",
				}}
			/>
			<div
				className="text-center text-5xl px-4 mt-16"
			>
				Onchain Trail
			</div>
			<div
				className="flex justify-center mt-16"
			>
				<Button
					asChild
				>
					<Link
						href="/camp"
					>
						Start
					</Link>
				</Button>
			</div>
		</div >
	);
}