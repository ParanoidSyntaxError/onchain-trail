import { SupplyType } from "@/components/supplies-list";

export const demoParty = [
    {
        label: "Max Powers",
        health: 90
    },
    {
        label: "Alex Overture",
        health: 70
    },
    {
        label: "Steve Gates",
        health: 100
    },
    {
        label: "Silk",
        health: 25
    },
];

export const demoSupplies = new Map<SupplyType, number>([
    ["fuel", 100],
    ["battery", 100],
    ["medicine", 100],
    ["food", 100],
    ["water", 100],
    ["ammo", 100],
]);