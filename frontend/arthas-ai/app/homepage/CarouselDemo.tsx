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
    <div className="m-12">
    <Carousel className="w-full max-w rounded-2xl">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent 
                style={{ backgroundImage: `url(${slides[0].url})` }}
                className="flex aspect-square items-center justify-center p-12">
                    <div className="absolute bottom-1/4 pl-8 text-balance space-y-4">
					<h2 className="text-4xl font-semibold duration-500 w-2/3">
                        {slides[0].title}
					</h2>
					<h3 className="text-xl duration-500 w-1/2">
						{slides[0].description}
					</h3>
				</div>
                  <span className="text-4xl font-semibold">{index + 1}</span>
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
