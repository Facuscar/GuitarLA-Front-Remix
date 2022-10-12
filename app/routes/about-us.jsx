import image from '../../public/img/aboutus.jpg'

const AboutUs = () => {
    return (
        <main className="container aboutus">
            <h2 className="heading">About us</h2>

            <div className="content">
                <img src={image} alt="An electric guitar on a wooden table" />
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ullamcorper mauris. Sed augue nisi, facilisis sit amet elit finibus, hendrerit finibus justo. Curabitur id rutrum lectus. Nunc ut lectus sed sem fermentum pharetra quis quis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sit amet libero urna. Nulla sit amet vehicula turpis. Phasellus erat risus, finibus sagittis gravida id, placerat eget nulla. Nulla facilisi. Nam fermentum interdum convallis. Etiam eu mattis turpis. </p>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non ullamcorper mauris. Sed augue nisi, facilisis sit amet elit finibus, hendrerit finibus justo. Curabitur id rutrum lectus. Nunc ut lectus sed sem fermentum pharetra quis quis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sit amet libero urna. Nulla sit amet vehicula turpis. Phasellus erat risus, finibus sagittis gravida id, placerat eget nulla. Nulla facilisi. Nam fermentum interdum convallis. Etiam eu mattis turpis. </p>
                </div>
            </div>
        </main>
    );
}

export default AboutUs;