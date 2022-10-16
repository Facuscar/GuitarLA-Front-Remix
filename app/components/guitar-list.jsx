import Guitar from "./guitar";

const GuitarList = ({guitars}) => {
    return (
        <>
            <h2 className="heading">Our collection</h2>
            {guitars?.length && (
                <div className="guitar_grid">
                    {guitars.map ( (guitar) => (
                        <Guitar 
                            key={guitar?.id} 
                            guitar={guitar}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default GuitarList