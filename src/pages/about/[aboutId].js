
import { useRouter } from "next/router";

const Developer = () => {

    const router = useRouter()

    const Id = router.query.aboutId;
    //console.log(Id)

    const details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ]

    

 

const developer = details.find((item)=>(item.id == Id))
 
        //console.log(developer)
        
        
    

    return (
       <div>
        
       
    {
        Id && (
            <div className="mt-6">
            {developer ? (
                <h2 className="text-2xl font-semibold">
                    {developer.role}
                </h2>
            ) : (
                <h2 className="text-2xl font-semibold text-red-500">
                    Developer doesnt exist
                </h2>
            )}
        </div>
        )
    }
       </div>
        );
}


export default Developer