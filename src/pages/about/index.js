import Link from "next/link";


const About = () => {
     
    
    
        const details = [
    
            { id : 1, name: 'Yash', role: 'Senior Developer'},
            
            { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
            
            { id : 3, name: 'Suresh', role: 'Frontend Developer'}
            
            ]
    
        
    
     
    
    
     
            
    
    return (
        <div className="text-center font-bold mt-4">
            <h1>About Page</h1>
        {details.map((item,i) => (
            <div key={item.id}>
                <Link href={`/about/${item.id}`}>{item.name}</Link>

            </div>
        ))}
    </div>
        );
}


export default About