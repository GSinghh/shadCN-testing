import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Vehicle {
    title: string;
    image: string;
    HP: number;
    description: string;
    electric: boolean;
    id: string;
}

async function getVehicles(): Promise<Vehicle[]> {
    const result = await fetch("http://localhost:4000/vehicles");
    return result.json();
}

export default async function Home() {
    const vehicles = await getVehicles();

    return (
        <main>
            <div className="grid grid-cols-3 gap-8">
                {vehicles.map((vehicle) => (
                    <Card
                        key={vehicle.id}
                        className="flex flex-col justify-between"
                    >
                        <CardHeader className="flex-row gap-4 items-center">
                            <div>
                                <CardTitle>{vehicle.title}</CardTitle>
                                <CardDescription>
                                    Horsepower: {vehicle.HP}
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>{vehicle.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <button>View Info</button>
                            {vehicle.electric && <p>EV!</p>}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}
