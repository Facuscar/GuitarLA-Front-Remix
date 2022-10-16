const Course = ({course}) => {
    const { content, image, Title } = course.attributes;
    console.log(course.attributes);

    return (
        <section className="course">
            <style jsx>{`
                .course {
                    background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${image.data.attributes.url});
                }
            `}</style>
            <div className="container course_grid">
                <div className="content">
                    <h2 className="heading">{Title}</h2>
                    <p className="text">{content}</p>
                </div>
            </div>
        </section>
    );
}

export default Course;