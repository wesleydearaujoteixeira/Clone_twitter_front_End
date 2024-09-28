import { user } from "../../auth/data/data"
import { MdCloudUpload } from "react-icons/md";
import { Button } from "../ui/Button";

export const Twitter_post = () => {

    return (
        <div className="flex gap-6 px-8 py-6 border-b-2 mt-4 ">
            
            <div>
                <img src={user.avatar} alt={user.name} className="size-12 rounded-full " />
            </div>

            <div className="flex-1 ">
                <textarea 
                 rows={30}
                 cols={35}   
                placeholder="O que esta acontecendo... "
                className="h-40 w-50 outline-none text-lg rounded-sm text-white bg-black">

                </textarea>
                <div className="flex justify-between items-center mt-2">
                    <div className="">
                        <MdCloudUpload size={40}/>
                    </div>

                    <div className="">

                        <Button
                            label="Postar"
                            size={2}
                            onClick={() => console.log('postar')}
                        />

                    </div>
                </div>
            </div>

        </div>
    )

}