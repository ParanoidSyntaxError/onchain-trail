import MedicineCard from "@/components/medicine-card";
import { Button } from "@/components/ui/button";
import { demoParty } from "@/lib/demo-data";
import Link from "next/link";

export default function MedicinePage() {
    return (
        <div
            className="p-4"
        >
            <div
                className="text-2xl"
            >
                Heal wounded party members. Medicine remaining: {13}
            </div>
            <div
                className="flex flex-col items-center justify-center space-y-8 mt-8"
            >
                {demoParty.map((member, i) => (
                    <MedicineCard
                        key={i}
                        name={member.label}
                        health={member.health}
                        className="w-full"
                    />
                ))}
            </div>
            <div
                className="flex justify-center mt-10"
            >
                <Link
                    href="/camp"
                >
                    <Button>
                        Done
                    </Button>
                </Link>
            </div>
        </div>
    );
}