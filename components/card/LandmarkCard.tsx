import Image from "next/image"
import { LandmarkCardProps } from '@/utils/types'
import LandmarkStar from "./LandmarkStar"
import FavoriteToggleButton from "./FavoriteToggleButton"
import Link from "next/link"

const LandmarkCard = ({ landmark }: { landmark: LandmarkCardProps }) => {
  const { name, image, description,
    id,  price } = landmark
  // console.log("card->",landmark)

  return (
    <article className="group relative">
      <Link href={`/kohlarn/${id}`}>
        <div className="relative h-[300px] rounded-md mb-2">
          <Image
            src={image}
            sizes="(max-width:768px) 100vw,50vw"
            alt={name}
            fill
            className="object-cover rounded-md 
            group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold mt-1">{name.substring(0, 30)}</h3>
          <LandmarkStar />

        </div>
        <p className="text-sm mt-1 text-muted-foreground">
          {description.substring(0, 200)}
        </p>
        <div className="mt-1">
          <span className="font-semibold text-sm ">Average price : {price} THB</span>
        </div>
      </Link>

      <div className="absolute top-5 right-5">
        <FavoriteToggleButton landmarkId={id} />
      </div>
    </article>
  )
}
export default LandmarkCard