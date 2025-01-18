import { LandmarkCardProps } from '@/utils/types'
const OtherInfo = ({ landmark }: { landmark: LandmarkCardProps }) => {
    return (
        <div className='text-white'>
            <p className='text-4xl font-semibold md:my-3
            md:text-6xl md:leading-[80px]'>{landmark.name}</p>
        </div>
    )
}
export default OtherInfo