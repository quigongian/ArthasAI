import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [
	{
		url: "https://images.pexels.com/photos/11857626/pexels-photo-11857626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		title: "One Some type of title about the Arthas AI here",
		description:
			"One This can be a short description explaining what Arthas AI does random random random random random",
	},
	{
		url: "https://images.pexels.com/photos/12009316/pexels-photo-12009316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		title: "Two Some type of title about the Arthas AI here",
		description:
			" Two This can be a short description explaining what Arthas AI does",
	},
	{
		url: "https://images.pexels.com/photos/3854478/pexels-photo-3854478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		title: "Three Some type of title about the Arthas AI here",
		description:
			"Three This can be a short description explaining what Arthas AI does",
	},
];

export function CarouselDemo() {
    
  return (
    <div>
    <Carousel className="w-full max-w-4xl m-auto rounded-2xl pl-6">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="rounded-2xl">
                <CardContent
                style={{ backgroundImage: `url(${slides[index].url})` }}
                className="flex aspect-square items-center justify-center p-6 rounded-2xl">
                    <div className="pl-8 text-balance space-y-4">
					            <h2 className="text-4xl font-semibold duration-500 w-2/3">
                        {slides[index].title}
					              </h2>
					            <h3 className="text-xl duration-500 w-1/2">
						            {slides[index].description}
					              </h3>
				            </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>  
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
