import PartyHealth from "@/components/party-health";
import SuppliesList from "@/components/supplies-list";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CampPage() {
    const canScavenge = true;

    return (
        <Tabs
            defaultValue="party"
        >
            <TabsContent
                value="party"
                className="p-0 m-0"
            >
                <div
                    className="absolute w-full p-6 pointer-events-none -z-50"
                >
                    <AspectRatio
                        ratio={100 / 55}
                    >
                        <Image
                            src="/party-bg.png"
                            alt="bg-image"
                            fill
                            className="opacity-20 contrast-150"
                            style={{
                                imageRendering: "pixelated",
                            }}
                        />
                    </AspectRatio>
                </div>
                <div
                    className="p-4"
                >
                    <PartyHealth />
                    <div
                        className="flex flex-col space-y-6 px-4 mt-10"
                    >
                        <Link
                            href="/rest"
                        >
                            <Button
                                className="w-full"
                            >
                                Rest
                            </Button>
                        </Link>
                        <Link
                            href="/medicine"
                        >
                            <Button
                                className="w-full"
                            >
                                Medicine
                            </Button>
                        </Link>
                        <Button>
                            Kill
                        </Button>
                        <Button>
                            Talk
                        </Button>
                    </div>
                </div>
            </TabsContent>
            <TabsContent
                value="supply"
                className="p-0 m-0"
            >
                <div
                    className="absolute w-full p-6 pointer-events-none -z-50"
                >
                    <AspectRatio
                        ratio={100 / 55}
                    >
                        <Image
                            src="/supply-bg.png"
                            alt="bg-image"
                            fill
                            className="opacity-20 contrast-150"
                            style={{
                                imageRendering: "pixelated",
                            }}
                        />
                    </AspectRatio>
                </div>
                <div
                    className="p-4"
                >
                    <SuppliesList
                        className="mx-auto"
                    />
                    <div
                        className="flex flex-col space-y-6 px-4 mt-10"
                    >
                        <Link
                            href="/scavenge"
                            className={cn(
                                !canScavenge ? "pointer-events-none" : ""
                            )}
                        >
                            <Button
                                className="w-full"
                                disabled={!canScavenge}
                            >
                                Scavenge
                            </Button>
                        </Link>
                        <Button>
                            Trade
                        </Button>
                    </div>
                </div>
            </TabsContent>
            <TabsContent
                value="travel"
                className="p-0 m-0"
            >
                <div
                    className="absolute w-full p-6 pointer-events-none -z-50"
                >
                    <AspectRatio
                        ratio={100 / 55}
                    >
                        <Image
                            src="/travel-bg.png"
                            alt="bg-image"
                            fill
                            className="opacity-20 contrast-150"
                            style={{
                                imageRendering: "pixelated",
                            }}
                        />
                    </AspectRatio>
                </div>
            </TabsContent>
            <TabsList
                className="fixed bottom-0 w-full justify-evenly bg-transparent"
            >
                <TabsTrigger
                    value="party"
                    className="rounded-none bg-gray-400 px-4"
                >
                    <div
                        className="relative w-10 h-10"
                    >
                        <Image
                            src="/party-icon.svg"
                            alt="party-icon"
                            fill
                            className="pb-1"
                        />
                    </div>
                </TabsTrigger>
                <TabsTrigger
                    value="supply"
                    className="rounded-none bg-gray-400 px-4"
                >
                    <div
                        className="relative w-10 h-10"
                    >
                        <Image
                            src="/supply-icon.svg"
                            alt="supply-icon"
                            fill
                            className="pb-1"
                        />
                    </div>
                </TabsTrigger>
                <TabsTrigger
                    value="travel"
                    className="rounded-none bg-gray-400 px-4"
                >
                    <div
                        className="relative w-10 h-10"
                    >
                        <Image
                            src="/travel-icon.svg"
                            alt="travel-icon"
                            fill
                            className="pb-1"
                        />
                    </div>
                </TabsTrigger>
                <TabsTrigger
                    value="town"
                    className="rounded-none bg-gray-400 px-4"
                >
                    <div
                        className="relative w-10 h-10"
                    >
                        <Image
                            src="/town-icon.svg"
                            alt="town-icon"
                            fill
                            className="pb-1"
                        />
                    </div>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}