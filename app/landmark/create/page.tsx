
import { SubmitButton } from "@/components/form/Buttons"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import { createLandmarkAction } from "@/actions/actions"

import CategoryInput from "@/components/form/CategoryInput"
import TextAraeInput from "@/components/form/TextAreaInput"
import MapLandmark from "@/components/map/MapLandmark"
import ImageInput from "@/components/form/ImageInput"

const CreateLandmark = async () => {

    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">Create Landmark</h1>
            <div className="border p-8 rounded-md">

                <FormContainer action={createLandmarkAction}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormInput name='name' label="LandmarkName" type="text" placeholder="LandmarkName" />
                        {/* categoryinput */}
                        <CategoryInput />
                    </div>
                    <TextAraeInput name="description" />
                    <div className="grid md:grid-cols-2 gap-4">
                        <FormInput name='price' label="Price" type="number" placeholder="Price" />
                    </div>
                    <ImageInput />
                    <MapLandmark />
                    <SubmitButton text="Create Landmark" size='lg' />
                </FormContainer>
            </div>

        </section >
    )
}
export default CreateLandmark