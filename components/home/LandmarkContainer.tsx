import { fetchLandmarks, fetchLandmarksEmpty } from "@/actions/actions"
import LandmarkList from "./LandmarkList"
import { LandmarkCardProps } from '@/utils/types'
import Sliderhome from "../swiper/Sliderhome";
import CategoryList from "./CategoryList";
import EmptyList from "./EmptyList";

const LandmarkContainer = async ({
  search, 
  category 
}:{ 
  search?: string, 
  category?: string 
}) => {
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({ search, category })
  const landmarksEmpty: LandmarkCardProps[] = await fetchLandmarksEmpty()
  
  return (
    <div>
      <Sliderhome landmarks={landmarksEmpty} />
      <CategoryList search={search} category={category}/>
      {
        landmarks.length===0
        ? <EmptyList heading="No results" btnText='Clear Filters'/>
        : <LandmarkList landmarks={landmarks}  />
      }
      
    </div>
  )
}
export default LandmarkContainer