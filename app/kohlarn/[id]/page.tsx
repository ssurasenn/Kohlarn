
import { fetchLandmarkDetail } from "@/actions/actions"
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton"
import Breadcrumb from "@/components/landmark/Breadcrumbs"
import Description from "@/components/landmark/Description"
import ImageContainer from "@/components/landmark/ImageContainer"
import ShareButton from "@/components/landmark/ShareButton"
import MapLandmark from "@/components/map/MapLandmark"
import { redirect } from "next/navigation"

const LandmarkDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const landmark = await fetchLandmarkDetail({ id })
    if (!landmark) redirect('/')
        
    return (
        <section>
            <Breadcrumb name={landmark.name} />
            <header className="flex justify-between mt-4 items-center">
                <h1 className="text-4xl font-bold">{landmark.name}</h1>
                <div className="flex items-center gap-x-4">
                    <ShareButton landmarkId={landmark.id} name={landmark.name}/>
                    <FavoriteToggleButton landmarkId={landmark.id} />
                </div>

            </header>
            {/* image */}
            <ImageContainer
                mainImage={landmark.image}
                name={landmark.name} />
            {/* Detail */}
            <section>
                <div>
                    <Description description={landmark.description} />
                    <MapLandmark />
                    {/* <MapLandmark location={{ lat:landmark.lat,lng:landmark.lng}}/> */}
                </div>
            </section>

        </section>
    )
}
export default LandmarkDetail